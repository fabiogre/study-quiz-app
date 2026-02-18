const STORAGE_KEY = "studyQuizQuestionsV1";
const PROGRESS_KEY = "studyQuizProgressV1";

let questions = [];
let progress = {};
let currentQuestion = null;
let answerLocked = false;

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
  clearBuildFormBtn: document.getElementById("clearBuildFormBtn"),

  importJson: document.getElementById("importJson"),
  exportJson: document.getElementById("exportJson"),
  mergeImportBtn: document.getElementById("mergeImportBtn"),
  replaceImportBtn: document.getElementById("replaceImportBtn"),
  refreshExportBtn: document.getElementById("refreshExportBtn"),
  copyExportBtn: document.getElementById("copyExportBtn"),
  resetProgressBtn: document.getElementById("resetProgressBtn"),
  resetAllBtn: document.getElementById("resetAllBtn"),
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
  refreshExport();
  refreshStats();
  setStatus("App bereit. Du kannst sofort lernen oder Fragen bauen.");
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
}

function setupBuildActions() {
  refs.questionForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = buildQuestionFromForm();
    questions.push(question);
    saveQuestions();
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
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(PROGRESS_KEY);
    await loadData(true);
    refreshExport();
    refreshStats();
    resetQuestionCard();
    setStatus("Alles wurde auf Seed-Daten zurueckgesetzt.");
  });
}

async function loadData(forceSeed = false) {
  const savedQuestions = !forceSeed ? localStorage.getItem(STORAGE_KEY) : null;
  const savedProgress = !forceSeed ? localStorage.getItem(PROGRESS_KEY) : null;

  if (savedQuestions) {
    try {
      questions = JSON.parse(savedQuestions);
    } catch {
      questions = [];
    }
  }

  if (!Array.isArray(questions) || questions.length === 0) {
    const resp = await fetch("./questions.seed.json");
    if (!resp.ok) {
      throw new Error("Seed-Datei konnte nicht geladen werden.");
    }
    questions = await resp.json();
    saveQuestions();
  }

  if (savedProgress) {
    try {
      progress = JSON.parse(savedProgress);
    } catch {
      progress = {};
    }
  } else {
    progress = {};
  }
}

function saveQuestions() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(questions));
}

function saveProgress() {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

function refreshExport() {
  refs.exportJson.value = JSON.stringify(questions, null, 2);
}

function refreshStats() {
  const total = questions.length;
  const values = Object.values(progress);
  const answered = values.reduce((sum, p) => sum + (p.answered || 0), 0);
  const correct = values.reduce((sum, p) => sum + (p.correct || 0), 0);
  const accuracy = answered > 0 ? (correct / answered) * 100 : 0;

  refs.statTotal.textContent = String(total);
  refs.statAnswered.textContent = String(answered);
  refs.statCorrect.textContent = String(correct);
  refs.statAccuracy.textContent = `${accuracy.toFixed(1)}%`;
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

    saveQuestions();
    refreshExport();
    refreshStats();
    setStatus(`Import erfolgreich. Fragen gesamt: ${questions.length}`);
  } catch (err) {
    setStatus(`Import fehlgeschlagen: ${err.message}`);
  }
}

function nextQuestion() {
  if (questions.length === 0) {
    setStatus("Keine Fragen vorhanden.");
    return;
  }

  answerLocked = false;
  refs.answerWrap.classList.add("hidden");

  const filtered = applyFilter(questions, refs.tagFilterInput.value);
  if (filtered.length === 0) {
    setStatus("Mit diesem Tag-Filter wurden keine Fragen gefunden.");
    resetQuestionCard();
    return;
  }

  const selected = pickQuestion(filtered, refs.modeSelect.value);
  currentQuestion = selected;
  renderQuestion(selected);
}

function applyFilter(items, rawFilter) {
  const filter = rawFilter.trim().toLowerCase();
  if (!filter) return items;

  return items.filter((q) => {
    const tags = (q.tags || []).join(" ").toLowerCase();
    const source = (q.source || "").toLowerCase();
    return tags.includes(filter) || source.includes(filter) || q.question.toLowerCase().includes(filter);
  });
}

function pickQuestion(pool, mode) {
  if (mode === "new") {
    const unseen = pool.filter((q) => !progress[q.id] || !progress[q.id].answered);
    if (unseen.length > 0) return randomItem(unseen);
  }

  if (mode === "weak") {
    const scored = pool.map((q) => {
      const p = progress[q.id] || { answered: 0, correct: 0 };
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
  const tags = (q.tags || []).join(", ");
  const src = q.source ? ` | Quelle: ${q.source}` : "";
  refs.questionMeta.textContent = tags ? `Tags: ${tags}${src}` : src ? `Quelle: ${q.source}` : " ";
  refs.optionsWrap.innerHTML = "";

  q.options.forEach((option, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "opt-btn";
    btn.textContent = `${String.fromCharCode(65 + idx)}. ${option}`;
    btn.addEventListener("click", () => onSelectAnswer(idx));
    refs.optionsWrap.appendChild(btn);
  });
}

function onSelectAnswer(index) {
  if (answerLocked || !currentQuestion) return;
  answerLocked = true;

  const isCorrect = index === currentQuestion.correctIndex;
  const buttons = Array.from(refs.optionsWrap.querySelectorAll(".opt-btn"));
  buttons.forEach((btn, idx) => {
    if (idx === currentQuestion.correctIndex) btn.classList.add("correct");
    if (idx === index && !isCorrect) btn.classList.add("wrong");
    btn.disabled = true;
  });

  const p = progress[currentQuestion.id] || { answered: 0, correct: 0 };
  p.answered += 1;
  if (isCorrect) p.correct += 1;
  progress[currentQuestion.id] = p;
  saveProgress();
  refreshStats();

  refs.answerResult.textContent = isCorrect ? "Richtig." : "Nicht ganz.";
  refs.answerResult.style.color = isCorrect ? "var(--ok)" : "var(--bad)";
  refs.answerExplanation.textContent = currentQuestion.explanation || "Keine Erklaerung hinterlegt.";
  refs.answerWrap.classList.remove("hidden");
}

function resetQuestionCard() {
  currentQuestion = null;
  answerLocked = false;
  refs.questionTitle.textContent = "Bereit?";
  refs.questionMeta.textContent = 'Klicke auf "Naechste Frage".';
  refs.optionsWrap.innerHTML = "";
  refs.answerWrap.classList.add("hidden");
}

function setStatus(message) {
  refs.statusMsg.textContent = message;
}
