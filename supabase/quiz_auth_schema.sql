create extension if not exists pgcrypto with schema extensions;

create schema if not exists quiz_private;

create table if not exists quiz_private.users (
  id uuid primary key default gen_random_uuid(),
  username text not null unique,
  password_hash text not null,
  failed_attempts integer not null default 0,
  locked_until timestamptz,
  is_active boolean not null default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists quiz_private.sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references quiz_private.users(id) on delete cascade,
  token uuid not null unique default gen_random_uuid(),
  expires_at timestamptz not null,
  created_at timestamptz not null default timezone('utc', now()),
  last_seen_at timestamptz not null default timezone('utc', now())
);

create table if not exists quiz_private.progress (
  user_id uuid not null references quiz_private.users(id) on delete cascade,
  question_id text not null,
  answered integer not null default 0,
  correct integer not null default 0,
  updated_at timestamptz not null default timezone('utc', now()),
  primary key (user_id, question_id)
);

create table if not exists quiz_private.notes (
  user_id uuid not null references quiz_private.users(id) on delete cascade,
  question_id text not null,
  note_text text not null default '',
  needs_review boolean not null default false,
  auto_marked_wrong boolean not null default false,
  updated_at timestamptz not null default timezone('utc', now()),
  primary key (user_id, question_id)
);

revoke all on schema quiz_private from public, anon, authenticated;
revoke all on all tables in schema quiz_private from public, anon, authenticated;

create or replace function public.quiz_login(p_username text, p_password text)
returns jsonb
language plpgsql
security definer
set search_path = public, quiz_private, extensions
as $$
declare
  v_user quiz_private.users%rowtype;
  v_now timestamptz := timezone('utc', now());
  v_token uuid;
  v_lock_interval interval := interval '30 minutes';
  v_remaining integer;
begin
  select *
  into v_user
  from quiz_private.users
  where lower(username) = lower(trim(p_username))
  for update;

  if not found or not v_user.is_active then
    return jsonb_build_object('ok', false, 'message', 'Invalid credentials');
  end if;

  if v_user.locked_until is not null and v_user.locked_until > v_now then
    return jsonb_build_object(
      'ok', false,
      'message', 'Account locked',
      'locked_until', v_user.locked_until
    );
  end if;

  if v_user.password_hash <> crypt(p_password, v_user.password_hash) then
    update quiz_private.users
    set failed_attempts = failed_attempts + 1,
        locked_until = case when failed_attempts + 1 >= 3 then v_now + v_lock_interval else null end,
        updated_at = v_now
    where id = v_user.id
    returning * into v_user;

    v_remaining := greatest(0, 3 - v_user.failed_attempts);

    return jsonb_build_object(
      'ok', false,
      'message', 'Invalid credentials',
      'remaining_attempts', v_remaining,
      'locked_until', v_user.locked_until
    );
  end if;

  update quiz_private.users
  set failed_attempts = 0,
      locked_until = null,
      updated_at = v_now
  where id = v_user.id;

  insert into quiz_private.sessions (user_id, expires_at)
  values (v_user.id, v_now + interval '30 days')
  returning token into v_token;

  return jsonb_build_object(
    'ok', true,
    'token', v_token::text,
    'username', v_user.username
  );
end;
$$;

create or replace function public.quiz_resume_session(p_token text)
returns jsonb
language plpgsql
security definer
set search_path = public, quiz_private, extensions
as $$
declare
  v_user quiz_private.users%rowtype;
  v_token uuid;
  v_now timestamptz := timezone('utc', now());
begin
  v_token := p_token::uuid;

  select u.*
  into v_user
  from quiz_private.sessions s
  join quiz_private.users u on u.id = s.user_id
  where s.token = v_token
    and s.expires_at > v_now
    and u.is_active
  limit 1;

  if not found then
    return jsonb_build_object('ok', false, 'message', 'Invalid session');
  end if;

  update quiz_private.sessions
  set last_seen_at = v_now
  where token = v_token;

  return jsonb_build_object('ok', true, 'username', v_user.username);
exception
  when others then
    return jsonb_build_object('ok', false, 'message', 'Invalid session');
end;
$$;

create or replace function public.quiz_logout(p_token text)
returns jsonb
language plpgsql
security definer
set search_path = public, quiz_private, extensions
as $$
begin
  delete from quiz_private.sessions where token = p_token::uuid;
  return jsonb_build_object('ok', true);
exception
  when others then
    return jsonb_build_object('ok', true);
end;
$$;

create or replace function public.quiz_get_state(p_token text)
returns jsonb
language plpgsql
security definer
set search_path = public, quiz_private, extensions
as $$
declare
  v_user_id uuid;
  v_username text;
  v_progress jsonb := '{}'::jsonb;
  v_notes jsonb := '{}'::jsonb;
  v_now timestamptz := timezone('utc', now());
begin
  select u.id, u.username
  into v_user_id, v_username
  from quiz_private.sessions s
  join quiz_private.users u on u.id = s.user_id
  where s.token = p_token::uuid
    and s.expires_at > v_now
    and u.is_active
  limit 1;

  if not found then
    return jsonb_build_object('ok', false, 'message', 'Invalid session');
  end if;

  select coalesce(
    jsonb_object_agg(question_id, jsonb_build_object('answered', answered, 'correct', correct)),
    '{}'::jsonb
  )
  into v_progress
  from quiz_private.progress
  where user_id = v_user_id;

  select coalesce(
    jsonb_object_agg(question_id, jsonb_build_object(
      'questionId', question_id,
      'text', note_text,
      'needsReview', needs_review,
      'updatedAt', floor(extract(epoch from updated_at) * 1000)::bigint,
      'autoMarkedWrong', auto_marked_wrong
    )),
    '{}'::jsonb
  )
  into v_notes
  from quiz_private.notes
  where user_id = v_user_id;

  update quiz_private.sessions
  set last_seen_at = v_now
  where token = p_token::uuid;

  return jsonb_build_object(
    'ok', true,
    'username', v_username,
    'progress', v_progress,
    'notes', v_notes
  );
end;
$$;

create or replace function public.quiz_set_state(p_token text, p_progress jsonb default '{}'::jsonb, p_notes jsonb default '{}'::jsonb)
returns jsonb
language plpgsql
security definer
set search_path = public, quiz_private, extensions
as $$
declare
  v_user_id uuid;
  v_now timestamptz := timezone('utc', now());
begin
  select u.id
  into v_user_id
  from quiz_private.sessions s
  join quiz_private.users u on u.id = s.user_id
  where s.token = p_token::uuid
    and s.expires_at > v_now
    and u.is_active
  limit 1;

  if not found then
    return jsonb_build_object('ok', false, 'message', 'Invalid session');
  end if;

  delete from quiz_private.progress where user_id = v_user_id;

  insert into quiz_private.progress (user_id, question_id, answered, correct, updated_at)
  select
    v_user_id,
    item.key,
    greatest(0, coalesce((item.value ->> 'answered')::integer, 0)),
    greatest(0, coalesce((item.value ->> 'correct')::integer, 0)),
    v_now
  from jsonb_each(coalesce(p_progress, '{}'::jsonb)) as item
  where jsonb_typeof(item.value) = 'object';

  delete from quiz_private.notes where user_id = v_user_id;

  insert into quiz_private.notes (user_id, question_id, note_text, needs_review, auto_marked_wrong, updated_at)
  select
    v_user_id,
    item.key,
    coalesce(item.value ->> 'text', ''),
    coalesce((item.value ->> 'needsReview')::boolean, false),
    coalesce((item.value ->> 'autoMarkedWrong')::boolean, false),
    case
      when coalesce((item.value ->> 'updatedAt')::bigint, 0) > 0
        then to_timestamp(((item.value ->> 'updatedAt')::bigint) / 1000.0)
      else v_now
    end
  from jsonb_each(coalesce(p_notes, '{}'::jsonb)) as item
  where jsonb_typeof(item.value) = 'object'
    and (
      coalesce(item.value ->> 'text', '') <> ''
      or coalesce((item.value ->> 'needsReview')::boolean, false)
    );

  update quiz_private.sessions
  set last_seen_at = v_now
  where token = p_token::uuid;

  return jsonb_build_object('ok', true, 'updated_at', v_now);
end;
$$;

grant execute on function public.quiz_login(text, text) to anon, authenticated;
grant execute on function public.quiz_resume_session(text) to anon, authenticated;
grant execute on function public.quiz_logout(text) to anon, authenticated;
grant execute on function public.quiz_get_state(text) to anon, authenticated;
grant execute on function public.quiz_set_state(text, jsonb, jsonb) to anon, authenticated;

-- Replace CHANGE_ME_PASSWORD before running this script in Supabase.
insert into quiz_private.users (username, password_hash, failed_attempts, locked_until, is_active)
values ('Fabio', crypt('CHANGE_ME_PASSWORD', gen_salt('bf')), 0, null, true)
on conflict (username) do update
set password_hash = excluded.password_hash,
    failed_attempts = 0,
    locked_until = null,
    is_active = true,
    updated_at = timezone('utc', now());
