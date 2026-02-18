const STORAGE_KEY = "studyQuizQuestionsV1";
const PROGRESS_KEY = "studyQuizProgressV1";
const DEFAULT_MODULE = "Modul 1";
const DEFAULT_SECTION = "Section 1";
const DB_NAME = "studyQuizDB";
const DB_VERSION = 1;
const DB_STORE = "kv";

let questions = [];
let progress = {};
let currentQuestion = null;
let currentOptionOrder = [];
let answerLocked = false;
let popupTimer = null;
let dbPromise = null;

const refs = {
  tabs: Array.from(document.querySelectorAll(".tab-btn")),
  tabPanels: {
    learn: document.getElementById("tab-learn"),
    build: document.getElementById("tab-build"),
    data: document.getElementById("tab-data"),
  },
  statusMsg: document.getElementById("statusMsg"),
  statTotal: document.getElementById("statTotal"),
  statAnswered: document.getElementById("statAnswered"),
  statCorrect: document.getElementById("statCorrect"),
  statAccuracy: document.getElementById("statAccuracy"),

  questionTitle: document.getElementById("questionTitle"),
  questionMeta: document.getElementById("questionMeta"),
  optionsWrap: document.getElementById("optionsWrap"),
  answerWrap: document.getElementById("answerWrap"),
  answerResult: document.getElementById("answerResult"),
  answerExplanation: document.getElementById("answerExplanation"),
  nextQuestionBtn: document.getElementById("nextQuestionBtn"),
  continueBtn: document.getElementById("continueBtn"),
  moduleSelect: document.getElementById("moduleSelect"),
  sectionSelect: document.getElementById("sectionSelect"),
  tagFilterInput: document.getElementById("tagFilterInput"),
  modeSelect: document.getElementById("modeSelect"),

  questionForm: document.getElementById("questionForm"),
  qQuestion: document.getElementById("qQuestion"),
  qOpt0: document.getElementById("qOpt0"),
  qOpt1: document.getElementById("qOpt1"),
  qOpt2: document.getElementById("qOpt2"),
  qOpt3: document.getElementById("qOpt3"),
  qCorrect: document.getElementById("qCorrect"),
  qExplanation: document.getElementById("qExplanation"),
  qTags: document.getElementById("qTags"),
  qSource: document.getElementById("qSource"),
  qModule: document.getElementById("qModule"),
  qSection: document.getElementById("qSection"),
  clearBuildFormBtn: document.getElementById("clearBuildFormBtn"),

  importJson: document.getElementById("importJson"),
  exportJson: document.getElementById("exportJson"),
  mergeImportBtn: document.getElementById("mergeImportBtn"),
  replaceImportBtn: document.getElementById("replaceImportBtn"),
  refreshExportBtn: document.getElementById("refreshExportBtn"),
  copyExportBtn: document.getElementById("copyExportBtn"),
  syncSeedBtn: document.getElementById("syncSeedBtn"),
  resetProgressBtn: document.getElementById("resetProgressBtn"),
  resetAllBtn: document.getElementById("resetAllBtn"),
  areaStats: document.getElementById("areaStats"),

  factPopup: document.getElementById("factPopup"),
  factPopupTitle: document.getElementById("factPopupTitle"),
  factPopupBody: document.getElementById("factPopupBody"),
};

init().catch((err) => {
  setStatus(`Fehler beim Start: ${err.message}`);
});

async function init() {
  setupTabs();
  setupLearnActions();
  setupBuildActions();
  setupDataActions();
  await loadData();
  refreshFilterOptions();
  refreshExport();
  refreshStats();
  setStatus("App bereit. Du kannst sofort lernen oder Fragen bauen.");
}

async function openDb() {
  if (!("indexedDB" in window)) return null;
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(DB_STORE)) {
          db.createObjectStore(DB_STORE, { keyPath: "key" });
        }
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    }).catch(() => null);
  }
  return dbPromise;
}

async function dbGet(key) {
  const db = await openDb();
  if (!db) return null;
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, "readonly");
    const store = tx.objectStore(DB_STORE);
    const req = store.get(key);
    req.onsuccess = () => resolve(req.result ? req.result.value : null);
    req.onerror = () => reject(req.error);
  });
}

async function dbSet(key, value) {
  const db = await openDb();
  if (!db) return;
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, "readwrite");
    const store = tx.objectStore(DB_STORE);
    const req = store.put({ key, value });
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

async function dbDelete(key) {
  const db = await openDb();
  if (!db) return;
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, "readwrite");
    const store = tx.objectStore(DB_STORE);
    const req = store.delete(key);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

async function loadJson(key) {
  const fromDb = await dbGet(key);
  if (fromDb !== null) return fromDb;

  const legacy = localStorage.getItem(key);
  if (!legacy) return null;
  try {
    const parsed = JSON.parse(legacy);
    dbSet(key, parsed).catch(() => {});
    return parsed;
  } catch {
    return null;
  }
}

function persistJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
  dbSet(key, value).catch(() => {});
}

function removeJson(key) {
  localStorage.removeItem(key);
  dbDelete(key).catch(() => {});
}

function setupTabs() {
  refs.tabs.forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => {
      refs.tabs.forEach((btn) => btn.classList.remove("active"));
      tabBtn.classList.add("active");

      const target = tabBtn.dataset.tab;
      Object.entries(refs.tabPanels).forEach(([key, panel]) => {
        panel.classList.toggle("active", key === target);
      });
    });
  });
}

function setupLearnActions() {
  refs.nextQuestionBtn.addEventListener("click", nextQuestion);
  refs.continueBtn.addEventListener("click", nextQuestion);
  refs.moduleSelect.addEventListener("change", () => {
    refreshSectionOptions();
    resetQuestionCard();
  });
  refs.sectionSelect.addEventListener("change", () => {
    resetQuestionCard();
  });
}

function setupBuildActions() {
  refs.questionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = buildQuestionFromForm();
    questions.push(question);
    questions = normalizeQuestions(questions);
    saveQuestions();
    refreshFilterOptions();
    refreshExport();
    refreshStats();
    refs.questionForm.reset();
    setStatus(`Frage gespeichert: ${question.question}`);
  });

  refs.clearBuildFormBtn.addEventListener("click", () => {
    refs.questionForm.reset();
    setStatus("Formular geleert.");
  });
}

function setupDataActions() {
  refs.mergeImportBtn.addEventListener("click", () => importJson(false));
  refs.replaceImportBtn.addEventListener("click", () => importJson(true));
  refs.refreshExportBtn.addEventListener("click", refreshExport);
  refs.syncSeedBtn.addEventListener("click", syncSeedKeepProgress);
  refs.copyExportBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(refs.exportJson.value);
      setStatus("Export in Zwischenablage kopiert.");
    } catch (err) {
      setStatus("Kopieren fehlgeschlagen. Bitte manuell kopieren.");
    }
  });
  refs.resetProgressBtn.addEventListener("click", () => {
    progress = {};
    saveProgress();
    refreshStats();
    setStatus("Lernfortschritt wurde zurueckgesetzt.");
  });
  refs.resetAllBtn.addEventListener("click", async () => {
    const confirmed = confirm("Wirklich alle Fragen UND Fortschritt loeschen?");
    if (!confirmed) return;
    removeJson(STORAGE_KEY);
    removeJson(PROGRESS_KEY);
    await loadData(true);
    refreshFilterOptions();
    refreshExport();
    refreshStats();
    resetQuestionCard();
    setStatus("Alles wurde auf Seed-Daten zurueckgesetzt.");
  });
}

async function loadData(forceSeed = false) {
  const savedQuestions = !forceSeed ? await loadJson(STORAGE_KEY) : null;
  const savedProgress = !forceSeed ? await loadJson(PROGRESS_KEY) : null;

  questions = Array.isArray(savedQuestions) ? savedQuestions : [];

  if (!Array.isArray(questions) || questions.length === 0) {
    const bundledSeed = getBundledSeedQuestions();
    if (bundledSeed.length > 0) {
      questions = bundledSeed;
    } else {
      const resp = await fetch("./questions.seed.json");
      if (!resp.ok) {
        throw new Error("Seed-Datei konnte nicht geladen werden.");
      }
      questions = await resp.json();
    }
  }
  questions = normalizeQuestions(questions);
  saveQuestions();

  progress = savedProgress && typeof savedProgress === "object" ? savedProgress : {};
}

function getBundledSeedQuestions() {
  const seed = globalThis.STUDY_QUIZ_SEED;
  if (!Array.isArray(seed)) return [];
  return seed.map((q) => ({ ...q }));
}

function saveQuestions() {
  persistJson(STORAGE_KEY, questions);
}

function saveProgress() {
  persistJson(PROGRESS_KEY, progress);
}

function normalizeQuestions(rawQuestions) {
  return rawQuestions
    .map((q) => normalizeQuestion(q))
    .filter((q) => q && typeof q.question === "string" && Array.isArray(q.options) && Number.isInteger(q.correctIndex));
}

function normalizeQuestion(raw) {
  if (!raw || typeof raw !== "object") return null;

  const tags = Array.isArray(raw.tags)
    ? raw.tags
        .map((t) => String(t).trim())
        .filter(Boolean)
    : [];
  const source = typeof raw.source === "string" ? raw.source.trim() : "";
  const inferredModule = inferModule(raw, tags, source);
  const inferredSection = inferSection(raw, tags, source);

  return {
    ...raw,
    id: raw.id || `q-${Date.now()}-${Math.floor(Math.random() * 100000)}`,
    question: typeof raw.question === "string" ? raw.question.trim() : "",
    options: Array.isArray(raw.options) ? raw.options.map((o) => String(o)) : [],
    correctIndex: Number(raw.correctIndex),
    explanation: typeof raw.explanation === "string" ? raw.explanation : "",
    extraInfo: typeof raw.extraInfo === "string" ? raw.extraInfo : "",
    tip: typeof raw.tip === "string" ? raw.tip : "",
    tags,
    source,
    module: sanitizeModule(raw.module || inferredModule),
    section: sanitizeSection(raw.section || inferredSection),
  };
}

function sanitizeModule(value) {
  const text = typeof value === "string" ? value.trim() : "";
  return text || DEFAULT_MODULE;
}

function sanitizeSection(value) {
  const text = typeof value === "string" ? value.trim() : "";
  return text || DEFAULT_SECTION;
}

function inferModule(raw, tags, source) {
  if (typeof raw.module === "string" && raw.module.trim()) return raw.module.trim();
  const search = `${raw.id || ""} ${raw.question || ""} ${source} ${tags.join(" ")}`;
  const match = search.match(/modul\s*\d+/i);
  return match ? match[0].replace(/\s+/g, " ").replace(/^m/i, "M") : DEFAULT_MODULE;
}

function inferSection(raw, tags, source) {
  if (typeof raw.section === "string" && raw.section.trim()) return raw.section.trim();
  const search = `${(raw.id || "").toLowerCase()} ${(raw.question || "").toLowerCase()} ${source.toLowerCase()} ${tags
    .join(" ")
    .toLowerCase()}`;
  if (search.includes("sec2") || search.includes("section 2")) return "Section 2";
  return DEFAULT_SECTION;
}

function getQuestionIdKey(q) {
  return q && q.id ? `id:${q.id}` : "";
}

function getQuestionStableKey(q) {
  const questionText = typeof q.question === "string" ? q.question.trim().toLowerCase() : "";
  const optionsText = Array.isArray(q.options) ? q.options.map((o) => String(o).trim().toLowerCase()).join("|") : "";
  const signature = `${questionText}||${optionsText}||${Number(q.correctIndex)}`;
  return `sig:${hashString(signature)}`;
}

function hashString(text) {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return (hash >>> 0).toString(16);
}

function getProgressSnapshot(q) {
  const idKey = getQuestionIdKey(q);
  const sigKey = getQuestionStableKey(q);
  const legacy = q && q.id ? progress[q.id] : null;
  const found = (idKey && progress[idKey]) || progress[sigKey] || legacy;
  return {
    answered: found && Number.isFinite(found.answered) ? found.answered : 0,
    correct: found && Number.isFinite(found.correct) ? found.correct : 0,
  };
}

function setProgressSnapshot(q, entry) {
  const normalized = {
    answered: Number.isFinite(entry.answered) ? entry.answered : 0,
    correct: Number.isFinite(entry.correct) ? entry.correct : 0,
  };
  if (q && q.id) {
    progress[q.id] = normalized;
    progress[getQuestionIdKey(q)] = normalized;
  }
  progress[getQuestionStableKey(q)] = normalized;
}

function refreshExport() {
  refs.exportJson.value = JSON.stringify(questions, null, 2);
}

function refreshFilterOptions() {
  const modules = uniqueSorted(questions.map((q) => q.module).filter(Boolean));
  const currentModule = refs.moduleSelect.value;
  setSelectOptions(refs.moduleSelect, "Alle Module", modules, currentModule);
  refreshSectionOptions();
}

function refreshSectionOptions() {
  const selectedModule = refs.moduleSelect.value;
  const sections = uniqueSorted(
    questions.filter((q) => !selectedModule || q.module === selectedModule).map((q) => q.section).filter(Boolean)
  );
  const currentSection = refs.sectionSelect.value;
  setSelectOptions(refs.sectionSelect, "Alle Sections", sections, currentSection);
}

function uniqueSorted(values) {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b, "de"));
}

function setSelectOptions(selectEl, allLabel, values, preferredValue) {
  if (!selectEl) return;
  selectEl.innerHTML = "";
  const allOpt = document.createElement("option");
  allOpt.value = "";
  allOpt.textContent = allLabel;
  selectEl.appendChild(allOpt);

  values.forEach((value) => {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = value;
    selectEl.appendChild(opt);
  });

  if (preferredValue && values.includes(preferredValue)) {
    selectEl.value = preferredValue;
  } else {
    selectEl.value = "";
  }
}

function refreshStats() {
  const total = questions.length;
  const answered = questions.reduce((sum, q) => sum + getProgressSnapshot(q).answered, 0);
  const correct = questions.reduce((sum, q) => sum + getProgressSnapshot(q).correct, 0);
  const accuracy = answered > 0 ? (correct / answered) * 100 : 0;

  refs.statTotal.textContent = String(total);
  refs.statAnswered.textContent = String(answered);
  refs.statCorrect.textContent = String(correct);
  refs.statAccuracy.textContent = `${accuracy.toFixed(1)}%`;
  refreshAreaStats();
}

function refreshAreaStats() {
  if (!refs.areaStats) return;

  const grouped = new Map();
  questions.forEach((q) => {
    const module = q.module || DEFAULT_MODULE;
    const section = q.section || DEFAULT_SECTION;
    const key = `${module}||${section}`;
    const p = getProgressSnapshot(q);
    if (!grouped.has(key)) {
      grouped.set(key, { module, section, questions: 0, answered: 0, correct: 0 });
    }
    const item = grouped.get(key);
    item.questions += 1;
    item.answered += p.answered || 0;
    item.correct += p.correct || 0;
  });

  refs.areaStats.innerHTML = "";
  const areas = Array.from(grouped.values()).sort((a, b) => {
    const byModule = a.module.localeCompare(b.module, "de");
    if (byModule !== 0) return byModule;
    return a.section.localeCompare(b.section, "de");
  });

  if (areas.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Noch keine Bereiche verfuegbar.";
    refs.areaStats.appendChild(li);
    return;
  }

  areas.forEach((area) => {
    const li = document.createElement("li");
    const hitRate = area.answered > 0 ? ((area.correct / area.answered) * 100).toFixed(1) : "0.0";

    const name = document.createElement("span");
    name.className = "area-name";
    name.textContent = `${area.module} / ${area.section}`;

    const metrics = document.createElement("span");
    metrics.className = "area-metrics";
    metrics.textContent = `Fragen: ${area.questions} | Antworten: ${area.answered} | Quote: ${hitRate}%`;

    li.appendChild(name);
    li.appendChild(metrics);
    refs.areaStats.appendChild(li);
  });
}

function buildQuestionFromForm() {
  const options = [refs.qOpt0.value, refs.qOpt1.value, refs.qOpt2.value, refs.qOpt3.value].map((v) =>
    v.trim()
  );
  const tags = refs.qTags.value
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return {
    id: `q-${Date.now()}-${Math.floor(Math.random() * 100000)}`,
    question: refs.qQuestion.value.trim(),
    options,
    correctIndex: Number(refs.qCorrect.value),
    explanation: refs.qExplanation.value.trim(),
    tags,
    source: refs.qSource.value.trim(),
    module: sanitizeModule(refs.qModule.value || refs.moduleSelect.value),
    section: sanitizeSection(refs.qSection.value || refs.sectionSelect.value),
  };
}

function importJson(replace) {
  const raw = refs.importJson.value.trim();
  if (!raw) {
    setStatus("Bitte JSON zum Import einfuegen.");
    return;
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      throw new Error("JSON muss ein Array von Fragen sein.");
    }

    const cleaned = parsed.filter(
      (q) =>
        q &&
        typeof q.question === "string" &&
        Array.isArray(q.options) &&
        q.options.length >= 2 &&
        Number.isInteger(q.correctIndex)
    );

    if (replace) {
      questions = cleaned;
    } else {
      const byId = new Map(questions.map((q) => [q.id, q]));
      cleaned.forEach((q) => {
        if (!q.id) {
          q.id = `q-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
        }
        byId.set(q.id, q);
      });
      questions = Array.from(byId.values());
    }
    questions = normalizeQuestions(questions);

    saveQuestions();
    refreshFilterOptions();
    refreshExport();
    refreshStats();
    setStatus(`Import erfolgreich. Fragen gesamt: ${questions.length}`);
  } catch (err) {
    setStatus(`Import fehlgeschlagen: ${err.message}`);
  }
}

async function syncSeedKeepProgress() {
  try {
    let seedQuestions = [];
    try {
      const resp = await fetch("./questions.seed.json", { cache: "no-store" });
      if (resp.ok) {
        seedQuestions = normalizeQuestions(await resp.json());
      }
    } catch {
      seedQuestions = [];
    }
    if (seedQuestions.length === 0) {
      seedQuestions = normalizeQuestions(getBundledSeedQuestions());
    }
    if (seedQuestions.length === 0) {
      throw new Error("Seed-Datei konnte nicht geladen werden.");
    }

    const mergedById = new Map();
    questions.forEach((q) => mergedById.set(q.id, q));
    seedQuestions.forEach((q) => mergedById.set(q.id, q));

    questions = Array.from(mergedById.values());
    questions = normalizeQuestions(questions);

    saveQuestions();
    refreshFilterOptions();
    refreshExport();
    refreshStats();
    resetQuestionCard();
    setStatus(`Seed aktualisiert. Fragen gesamt: ${questions.length}. Fortschritt bleibt erhalten.`);
  } catch (err) {
    setStatus(`Seed-Update fehlgeschlagen: ${err.message}`);
  }
}

function nextQuestion() {
  if (questions.length === 0) {
    setStatus("Keine Fragen vorhanden.");
    return;
  }

  answerLocked = false;
  refs.answerWrap.classList.add("hidden");

  const filtered = applyFilter(
    questions,
    refs.tagFilterInput.value,
    refs.moduleSelect.value,
    refs.sectionSelect.value
  );
  if (filtered.length === 0) {
    setStatus("Mit diesem Tag-Filter wurden keine Fragen gefunden.");
    resetQuestionCard();
    return;
  }

  const selected = pickQuestion(filtered, refs.modeSelect.value);
  currentQuestion = selected;
  renderQuestion(selected);
}

function applyFilter(items, rawFilter, moduleFilter, sectionFilter) {
  const filter = rawFilter.trim().toLowerCase();
  return items.filter((q) => {
    if (moduleFilter && q.module !== moduleFilter) return false;
    if (sectionFilter && q.section !== sectionFilter) return false;
    if (!filter) return true;
    const tags = (q.tags || []).join(" ").toLowerCase();
    const source = (q.source || "").toLowerCase();
    return tags.includes(filter) || source.includes(filter) || q.question.toLowerCase().includes(filter);
  });
}

function pickQuestion(pool, mode) {
  if (mode === "new") {
    const unseen = pool.filter((q) => getProgressSnapshot(q).answered === 0);
    if (unseen.length > 0) return randomItem(unseen);
  }

  if (mode === "weak") {
    const scored = pool.map((q) => {
      const p = getProgressSnapshot(q);
      const answered = p.answered || 0;
      const correct = p.correct || 0;
      const rate = answered > 0 ? correct / answered : -1;
      return { q, answered, rate };
    });
    scored.sort((a, b) => {
      if (a.answered === 0 && b.answered > 0) return -1;
      if (b.answered === 0 && a.answered > 0) return 1;
      return a.rate - b.rate;
    });
    return scored[0].q;
  }

  return randomItem(pool);
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function renderQuestion(q) {
  refs.questionTitle.textContent = q.question;
  const area = `${q.module || DEFAULT_MODULE} / ${q.section || DEFAULT_SECTION}`;
  const tags = (q.tags || []).join(", ");
  const metaParts = [`Bereich: ${area}`];
  if (tags) metaParts.push(`Tags: ${tags}`);
  if (q.source) metaParts.push(`Quelle: ${q.source}`);
  refs.questionMeta.textContent = metaParts.join(" | ");
  refs.optionsWrap.innerHTML = "";

  currentOptionOrder = shuffledIndices(q.options.length);

  currentOptionOrder.forEach((originalIdx, displayIdx) => {
    const option = q.options[originalIdx];
    const optionText =
      typeof option === "string" && option.trim().length > 0 ? option : "(fehlende Antwortoption)";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "opt-btn";
    btn.textContent = `${String.fromCharCode(65 + displayIdx)}. ${optionText}`;
    btn.style.color = "#1b1b1b";
    btn.style.webkitTextFillColor = "#1b1b1b";
    btn.style.backgroundColor = "#ffffff";
    btn.addEventListener("click", () => onSelectAnswer(displayIdx));
    refs.optionsWrap.appendChild(btn);
  });
}

function onSelectAnswer(index) {
  if (answerLocked || !currentQuestion) return;
  answerLocked = true;

  const selectedOriginalIndex = currentOptionOrder[index] ?? index;
  const correctOriginalIndex = currentQuestion.correctIndex;
  const isCorrect = selectedOriginalIndex === correctOriginalIndex;
  const correctDisplayIndex = currentOptionOrder.findIndex((i) => i === correctOriginalIndex);
  const buttons = Array.from(refs.optionsWrap.querySelectorAll(".opt-btn"));
  buttons.forEach((btn, displayIdx) => {
    if (displayIdx === correctDisplayIndex) btn.classList.add("correct");
    if (displayIdx === index && !isCorrect) btn.classList.add("wrong");
    btn.disabled = true;
  });

  const p = getProgressSnapshot(currentQuestion);
  p.answered += 1;
  if (isCorrect) p.correct += 1;
  setProgressSnapshot(currentQuestion, p);
  saveProgress();
  refreshStats();

  refs.answerResult.textContent = isCorrect ? "Richtig." : "Nicht ganz.";
  refs.answerResult.style.color = isCorrect ? "var(--ok)" : "var(--bad)";
  refs.answerExplanation.textContent = currentQuestion.explanation || "Keine Erklaerung hinterlegt.";
  refs.answerWrap.classList.remove("hidden");
  showFactPopup(currentQuestion, isCorrect);
}

function resetQuestionCard() {
  currentQuestion = null;
  currentOptionOrder = [];
  answerLocked = false;
  refs.questionTitle.textContent = "Bereit?";
  refs.questionMeta.textContent = 'Klicke auf "Naechste Frage".';
  refs.optionsWrap.innerHTML = "";
  refs.answerWrap.classList.add("hidden");
}

function shuffledIndices(length) {
  const indices = Array.from({ length }, (_, i) => i);
  for (let i = indices.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices;
}

function setStatus(message) {
  refs.statusMsg.textContent = message;
}

function showFactPopup(question, isCorrect) {
  if (!refs.factPopup || !refs.factPopupTitle || !refs.factPopupBody) return;

  if (popupTimer) {
    clearTimeout(popupTimer);
    popupTimer = null;
  }

  const title = isCorrect ? "Richtig" : "Nicht ganz";
  const baseInfo =
    (typeof question.extraInfo === "string" && question.extraInfo.trim()) ||
    (typeof question.explanation === "string" && question.explanation.trim()) ||
    "Merke dir den Kernbegriff und den typischen Einsatzbereich dieser Technologie.";
  const tip =
    !isCorrect && typeof question.tip === "string" && question.tip.trim()
      ? ` Tipp: ${question.tip.trim()}`
      : "";

  refs.factPopupTitle.textContent = title;
  refs.factPopupBody.textContent = `${baseInfo}${tip}`;
  refs.factPopup.classList.remove("hidden", "show", "success", "error");
  refs.factPopup.classList.add(isCorrect ? "success" : "error");
  requestAnimationFrame(() => {
    refs.factPopup.classList.add("show");
  });

  const popupTextLength = `${baseInfo}${tip}`.length;
  const popupMs = Math.max(9000, Math.min(16000, 7000 + popupTextLength * 22));
  popupTimer = setTimeout(hideFactPopup, popupMs);
}

function hideFactPopup() {
  if (!refs.factPopup) return;
  refs.factPopup.classList.remove("show");
  setTimeout(() => {
    refs.factPopup.classList.add("hidden");
    refs.factPopup.classList.remove("success", "error");
  }, 220);
}
