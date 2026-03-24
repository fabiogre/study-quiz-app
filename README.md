# Study Quiz App

Lokale Lern-Webapp fuer Multiple-Choice-Training mit eigener Fragenbasis.

## Was die App kann
- Multiple-Choice Fragen loesen
- Lernmodi: `Gemischt`, `Schwachstellen zuerst`, `Neue Fragen zuerst`
- Sprachumschaltung `Deutsch` / `English`
- Filter nach `Modul` und `Section`
- Tag-Filter fuer Themengebiete
- Eigene Fragen direkt in der App anlegen
- Fragen per JSON importieren und exportieren
- Antwort-Feedback als kleines Popup mit Zusatzinfo (richtig/falsch)
- Lernfortschritt lokal im Browser speichern
- Optionales Cloud-Profil mit Login und geraeteuebergreifendem Sync
- Lernfortschritt in Browser-Datenbank (IndexedDB) + localStorage-Fallback
- Seed-Updates ohne Fortschrittverlust (`Seed aktualisieren`)
- Bereichsstatistik pro `Modul/Section`
- Wissenssammlung in `wissensbasis_einfach.md`

## Projektstruktur
- `index.html` - App-Oberflaeche
- `styles.css` - Layout und Design
- `app.js` - Logik (Quiz, Modi, Speicher, Import/Export)
- `questions.seed.json` - Start-Fragen
- `questions.seed.js` - eingebetteter Seed-Fallback (fuer Start ohne lokalen Server)
- `cloud-config.js` - lokale oder Cloud-Konfiguration
- `cloud-config.example.js` - Vorlage fuer Supabase-Konfiguration
- `supabase/quiz_auth_schema.sql` - SQL fuer Profil-Login, Lockout und Sync
- `wissensbasis_einfach.md` - geordnete, einfache Zusammenfassung des Lernstoffs
- `wissensbasis_english.md` - englische Wissensbasis (Draft)

## Schnellstart (empfohlen)
1. In den Projektordner wechseln:
```powershell
cd <project-folder>/study-quiz
```
2. Lokalen Webserver starten:
```powershell
python -m http.server 8080
```
3. Im Browser oeffnen:
```text
http://localhost:8080
```

## Alternative ohne Server
1. `index.html` direkt per Doppelklick im Browser oeffnen.
2. Hinweis: Dank eingebettetem Seed (`questions.seed.js`) funktioniert das auch ohne lokalen Server.
3. Fuer stabilstes Verhalten (z. B. bei spaeteren Erweiterungen) bleibt Server-Modus empfohlen.

## Bedienung
1. Lernmodus auswaehlen.
2. Optional Tags setzen, um ein Thema zu trainieren.
3. Antworten und Erklaerung lesen.
4. Schwachstellen-Modus nutzen, um falsch beantwortete Fragen gezielt zu wiederholen.
5. Eigene Fragen per Formular erfassen oder per JSON importieren.

## Cloud-Profil fuer Handy und PC
Die App kann optional mit einem Supabase-Backend arbeiten. Dann werden:
- Fortschritt
- Notizen
- Nacharbeiten-Liste

ueber Geraete hinweg synchronisiert.

### Einmalige Einrichtung
1. In Supabase ein neues Projekt anlegen.
2. Den Inhalt aus `supabase/quiz_auth_schema.sql` im SQL Editor ausfuehren.
3. `cloud-config.example.js` nach `cloud-config.js` kopieren.
4. In `cloud-config.js` eintragen:
   - `supabaseUrl`
   - `anonKey`
5. Seite neu laden.

### Erster Nutzer
Das SQL-Setup legt standardmaessig diesen ersten Nutzer an:
- Benutzername: `Fabio`
- Passwort: selbst im SQL-Block setzen

Wenn du exakt deinen gewuenschten ersten Login willst, ersetze im SQL-Skript:
- `CHANGE_ME_PASSWORD`

zum Beispiel durch:
- `Greco`

Wichtig:
- Ich habe das Passwort absichtlich **nicht fest ins Repo geschrieben**, weil dein Repo oeffentlich sein kann und der Login sonst sofort kompromittiert waere.
- Das Setup sperrt den Zugang nach `3` Fehlversuchen aktuell fuer `30 Minuten`.

### Verhalten ohne Cloud-Konfiguration
Wenn `cloud-config.js` nicht aktiviert ist, laeuft die App wie bisher rein lokal im Browser.

## Fragenformat (JSON)
Die App erwartet ein JSON-Array aus Frageobjekten:

```json
[
  {
    "id": "q-123",
    "question": "Frage?",
    "question_en": "Question?",
    "options": ["A", "B", "C", "D"],
    "options_en": ["A", "B", "C", "D"],
    "correctIndex": 2,
    "explanation": "Warum C richtig ist",
    "explanation_en": "Why C is correct",
    "extraInfo": "Kurzer Zusatzkontext fuer Popup/Verstaendnis",
    "extraInfo_en": "Short extra context for better understanding",
    "tip": "Hinweis, der vor allem bei falscher Antwort hilft",
    "tip_en": "Hint shown especially when the answer is wrong",
    "module": "Modul 1",
    "module_en": "Module 1",
    "section": "Section 2",
    "section_en": "Section 2",
    "tags": ["Kapitel 1", "Definition"],
    "source": "Folie 42",
    "source_en": "Slide 42"
  }
]
```

Pflichtfelder:
- `question`
- `options` (mindestens 2 Eintraege)
- `correctIndex` (0-basiert, passend zu `options`)

Empfohlen:
- `id`
- `explanation`
- `question_en`
- `options_en`
- `explanation_en`
- `extraInfo`
- `extraInfo_en`
- `tip`
- `tip_en`
- `module`
- `module_en`
- `section`
- `section_en`
- `tags`
- `source`
- `source_en`

## Lern-Workflow fuer den 500-Folien-Kurs
1. Du lieferst Inhalte in kleinen Bloecken.
2. Wir erstellen daraus MC-Fragen.
3. Parallel wird `wissensbasis_einfach.md` strukturiert gepflegt.
4. Regelmaessig Fragen importieren und Schwachstellen trainieren.

## GitHub und Deployment
Repository:
- `https://github.com/fabiogre/study-quiz-app`

Push von lokalen Aenderungen:
```powershell
cd <project-folder>/study-quiz
git add .
git commit -m "Update quiz content"
git push
```

Optional GitHub Pages:
1. Repository `Settings` -> `Pages`
2. Source: `Deploy from a branch`
3. Branch: `main`, Folder: `/ (root)`

## Troubleshooting
- `python` nicht gefunden:
  - Nutze den Python-Launcher:
```powershell
py -m http.server 8080
```
- Port `8080` belegt:
```powershell
python -m http.server 8090
```
  - Dann im Browser `http://localhost:8090` oeffnen.
- App zeigt alte Daten:
  - Seite hart neu laden (`Ctrl + F5`) oder Browser-Cache leeren.
- Kein Pfadproblem:
  - Das Projekt kann in jedem beliebigen Ordner liegen.
  - Wichtig ist nur, dass du in den Ordner wechselst, in dem `index.html` liegt.
