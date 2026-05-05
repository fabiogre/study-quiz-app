const STORAGE_KEY = "studyQuizQuestionsV1";
const PROGRESS_KEY = "studyQuizProgressV1";
const NOTES_KEY = "studyQuizNotesV1";
const CLOUD_SESSION_KEY = "studyQuizCloudSessionV1";
const VIEW_STATE_KEY = "studyQuizViewStateV1";
const DEFAULT_TOPIC = "Hauptquiz";
const DEFAULT_MODULE = "Modul 1";
const DEFAULT_SECTION = "Section 1";
const SEED_VERSION = "20260505-1";
const SEED_JSON_URL = `./questions.seed.json?v=${SEED_VERSION}`;
const DB_NAME = "studyQuizDB";
const DB_VERSION = 1;
const DB_STORE = "kv";
const LANGUAGE_KEY = "studyQuizLanguageV1";

let questions = [];
let progress = {};
let notes = {};
let currentQuestion = null;
let currentOptionOrder = [];
let answerLocked = false;
let popupTimer = null;
let dbPromise = null;
let currentLanguage = "de";
let currentKidExplainer = "";
let cloudConfig = null;
let cloudSession = null;
let cloudSyncTimer = null;
let cloudSyncInFlight = null;
let suppressCloudSync = false;

const refs = {
  languageSelect: document.getElementById("languageSelect"),
  languageResetBtn: document.getElementById("languageResetBtn"),
  authControls: document.getElementById("authControls"),
  profileBadge: document.getElementById("profileBadge"),
  logoutBtn: document.getElementById("logoutBtn"),
  bgpCheatSheetLink: document.getElementById("bgpCheatSheetLink"),
  miniExplainerBtn: document.getElementById("miniExplainerBtn"),
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
  notesMeta: document.getElementById("notesMeta"),
  noteInput: document.getElementById("noteInput"),
  saveNoteBtn: document.getElementById("saveNoteBtn"),
  toggleReviewBtn: document.getElementById("toggleReviewBtn"),
  clearNoteBtn: document.getElementById("clearNoteBtn"),
  reviewList: document.getElementById("reviewList"),
  nextQuestionBtn: document.getElementById("nextQuestionBtn"),
  continueBtn: document.getElementById("continueBtn"),
  topicSelect: document.getElementById("topicSelect"),
  moduleSelect: document.getElementById("moduleSelect"),
  sectionSelect: document.getElementById("sectionSelect"),
  tagFilterInput: document.getElementById("tagFilterInput"),
  modeSelect: document.getElementById("modeSelect"),
  scopeStats: document.getElementById("scopeStats"),
  scopeStatsTitle: document.getElementById("scopeStatsTitle"),
  scopeStatsBody: document.getElementById("scopeStatsBody"),
  explainerModal: document.getElementById("explainerModal"),
  explainerBackdrop: document.getElementById("explainerBackdrop"),
  explainerCloseBtn: document.getElementById("explainerCloseBtn"),
  kidExplainTitle: document.getElementById("kidExplainTitle"),
  kidExplainIntro: document.getElementById("kidExplainIntro"),
  kidExplainRdBtn: document.getElementById("kidExplainRdBtn"),
  kidExplainRtBtn: document.getElementById("kidExplainRtBtn"),
  kidExplainBothBtn: document.getElementById("kidExplainBothBtn"),
  kidExplainScene: document.getElementById("kidExplainScene"),
  kidExplainSceneTitle: document.getElementById("kidExplainSceneTitle"),
  kidExplainText: document.getElementById("kidExplainText"),

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
  qTopic: document.getElementById("qTopic"),
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
  overviewScope: document.getElementById("overviewScope"),
  areaStats: document.getElementById("areaStats"),

  factPopup: document.getElementById("factPopup"),
  factPopupTitle: document.getElementById("factPopupTitle"),
  factPopupBody: document.getElementById("factPopupBody"),
  authGate: document.getElementById("authGate"),
  authTitle: document.getElementById("authTitle"),
  authIntro: document.getElementById("authIntro"),
  authUsernameLabel: document.getElementById("authUsernameLabel"),
  authPasswordLabel: document.getElementById("authPasswordLabel"),
  loginUsername: document.getElementById("loginUsername"),
  loginPassword: document.getElementById("loginPassword"),
  loginBtn: document.getElementById("loginBtn"),
  authStatus: document.getElementById("authStatus"),
};

const UI_TEXTS = {
  de: {
    app: {
      title: "Lernquiz",
      subtitle: "Multiple-Choice Trainer fuer grosse Lerninhalte",
      langLabel: "Sprache",
      langReset: "Sprache zuruecksetzen",
      miniExplainer: "Mini Explainer",
      logout: "Abmelden",
      offlineProfile: "Lokal",
    },
    tabs: {
      learn: "Lernen",
      build: "Fragen bauen",
      data: "Daten",
    },
    learn: {
      topic: "Thema",
      module: "Modul",
      section: "Section",
      tagFilter: "Tag-Filter",
      scopeStatsTitle: "Auswahlstatistik",
      mode: "Modus",
      nextQuestion: "Naechste Frage",
      continue: "Weiter",
      modeMixed: "Gemischt",
      modeWeak: "Schwachstellen zuerst",
      modeNew: "Neue Fragen zuerst",
      tagPlaceholder: "z.B. Kapitel 1, Definition",
      allTopics: "Alle Themen",
      allModules: "Alle Module",
      allSections: "Alle Sections",
    },
    notes: {
      title: "Lernnotizen",
      intro: "Schreibe dir hier auf, was du falsch hattest oder spaeter nacharbeiten willst.",
      inputLabel: "Notiz zur aktuellen Frage",
      placeholder: "z.B. LOCAL_PREF ist wichtiger als AS_PATH. RR-Loop-Protection nochmal anschauen.",
      save: "Notiz speichern",
      clear: "Notiz loeschen",
      mark: "Zur Nacharbeit markieren",
      unmark: "Nacharbeit abhaken",
      noQuestion: "Keine Frage aktiv.",
      emptyMeta: "Noch keine Notiz gespeichert.",
      savedAt: "Gespeichert: {time}",
      reviewMarked: "Zur Nacharbeit markiert.",
      reviewTitle: "Nacharbeiten",
      emptyReview: "Noch keine offenen Nacharbeiten.",
      itemOpen: "Oeffnen",
      itemDone: "Erledigt",
      autoMarkedWrong: "Automatisch markiert, weil die letzte Antwort falsch war.",
    },
    auth: {
      title: "Privater Zugriff",
      intro: "Melde dich an, um dein Profil, deinen Fortschritt und deine Notizen zu laden.",
      username: "Benutzername",
      password: "Passwort",
      login: "Anmelden",
      checking: "Pruefe Zugang...",
      configMissing: "Cloud-Profil ist noch nicht konfiguriert. Die App laeuft aktuell nur lokal.",
      lockedUntil: "Zugang gesperrt bis {time}",
      loginFailed: "Anmeldung fehlgeschlagen.",
      sessionExpired: "Sitzung abgelaufen. Bitte erneut anmelden.",
      welcome: "Angemeldet als {user}",
    },
    explainer: {
      title: "Mini-Erklaerung fuer RD und RT",
      intro: "Klicke auf einen Begriff und ich erklaere ihn wie fuer ein Kind.",
      close: "Schliessen",
      rdBtn: "Route Distinguisher",
      rtBtn: "Route Target",
      bothBtn: "Warum beide?",
      emptyTitle: "Noch nichts ausgewaehlt",
      emptyText: "Waehle einen Button und ich zeige dir ein kleines Bild mit einer sehr einfachen Erklaerung.",
      rdTitle: "Route Distinguisher: Namensschild fuer gleiche Adressen",
      rdText:
        "Stell dir vor, zwei Kinder haben beide eine Kiste mit der Aufschrift 10.0.0.0/24. Der Route Distinguisher klebt an jede Kiste noch ein extra Namensschild. So weiss das Provider-Netz: Das sind zwei verschiedene Kisten, auch wenn vorne der gleiche Name steht.",
      rtTitle: "Route Target: Club-Aufkleber fuer die richtigen Freunde",
      rtText:
        "Ein Route Target ist wie ein Club-Aufkleber. Nur Router, die diesen Aufkleber moegen, nehmen die Route in ihren eigenen Club auf. So landen Routen nur bei den richtigen VPN-Freunden.",
      bothTitle: "Warum braucht man RD und RT zusammen?",
      bothText:
        "Zuerst macht RD zwei gleich aussehende Netze im Provider eindeutig. Danach sagt RT, welche VPNs diese eindeutigen Routen wirklich bekommen duerfen. RD loest also das Namensproblem. RT loest das Verteilerproblem. Ein RT ist nicht im RD drin. Es ist ein eigener Aufkleber fuer Import und Export von Routen zwischen Services.",
      laneA: "Kunde Blau",
      laneB: "Kunde Gruen",
      samePrefix: "gleiches Netz",
      providerView: "Provider sieht daraus",
      routeCard: "Route",
      rdSticker: "RD Aufkleber",
      blueVpn: "VPN Blau",
      greenVpn: "VPN Gruen",
      targetSticker: "RT Aufkleber",
      likesThis: "nimmt diesen Aufkleber an",
      ignoresThis: "ignoriert diesen Aufkleber",
      stepOne: "1. RD macht es eindeutig",
      stepTwo: "2. RT verteilt nur an passende VPNs",
      imports: "importiert",
      notImported: "bekommt es nicht",
    },
    build: {
      question: "Frage",
      answerA: "Antwort A",
      answerB: "Antwort B",
      answerC: "Antwort C",
      answerD: "Antwort D",
      correct: "Richtige Antwort",
      explanation: "Erklaerung (optional)",
      tags: "Tags (optional)",
      source: "Quelle (optional)",
      topic: "Thema (optional)",
      module: "Modul (optional)",
      section: "Section (optional)",
      save: "Frage speichern",
      clear: "Leeren",
      questionPlaceholder: "Was ist ...?",
      explanationPlaceholder: "Kurz warum die Antwort stimmt",
      tagsPlaceholder: "z.B. Kapitel 1, Definition",
      sourcePlaceholder: "z.B. Folie 42",
      topicPlaceholder: "z.B. BGP oder IS-IS",
      modulePlaceholder: "z.B. Modul 1",
      sectionPlaceholder: "z.B. Section 2",
    },
    data: {
      importLabel: "JSON Import (Array von Fragen)",
      mergeImport: "Import zusammenfuehren",
      replaceImport: "Import ersetzen",
      exportLabel: "JSON Export",
      refreshExport: "Export aktualisieren",
      copyExport: "Export kopieren",
      syncSeed: "Seed aktualisieren (Fortschritt behalten)",
      resetProgress: "Lernfortschritt reset",
      resetAll: "Alle Fragen + Fortschritt reset",
    },
    overview: {
      title: "Uebersicht",
      total: "Fragen in Auswahl",
      answered: "Beantwortet",
      correct: "Richtig",
      accuracy: "Trefferquote",
      areaTitle: "Modulueberblick",
      noAreas: "Keine Modulinfos verfuegbar.",
      areaMetrics: "Fragen: {questions} | Beantwortet: {answered} | Offen: {open} | Quote: {rate}%",
      scopeLabel: "Aktuelle Auswahl: {area}",
      allModules: "Alle Module",
      scopeArea: "Aktive Auswahl: {area}",
      scopeMetrics:
        "Fragen: {questions} | Beantwortet: {answered} | Richtig: {correct} | Falsch: {wrong} | Offen: {open} | Quote: {rate}%",
    },
    question: {
      readyTitle: "Bereit?",
      readyMeta: 'Klicke auf "Naechste Frage".',
      areaPrefix: "Bereich",
      tagsPrefix: "Tags",
      sourcePrefix: "Quelle",
      missingOption: "(fehlende Antwortoption)",
      resultCorrect: "Richtig.",
      resultWrong: "Nicht ganz.",
      noExplanation: "Keine Erklaerung hinterlegt.",
    },
    popup: {
      titleCorrect: "Richtig",
      titleWrong: "Nicht ganz",
      fallbackInfo: "Merke dir den Kernbegriff und den typischen Einsatzbereich dieser Technologie.",
      tipPrefix: "Tipp: {tip}",
    },
    status: {
      startError: "Fehler beim Start: {msg}",
      ready: "App bereit. Du kannst sofort lernen oder Fragen bauen.",
      savedQuestion: "Frage gespeichert: {question}",
      formCleared: "Formular geleert.",
      copiedExport: "Export in Zwischenablage kopiert.",
      copyFailed: "Kopieren fehlgeschlagen. Bitte manuell kopieren.",
      progressReset: "Lernfortschritt wurde zurueckgesetzt.",
      resetAllDone: "Alles wurde auf Seed-Daten zurueckgesetzt.",
      importPrompt: "Bitte JSON zum Import einfuegen.",
      importArrayError: "JSON muss ein Array von Fragen sein.",
      importSuccess: "Import erfolgreich. Fragen gesamt: {count}",
      importFailed: "Import fehlgeschlagen: {msg}",
      seedUpdated: "Seed aktualisiert. Fragen gesamt: {count}. Fortschritt bleibt erhalten.",
      seedUpdateFailed: "Seed-Update fehlgeschlagen: {msg}",
      noQuestions: "Keine Fragen vorhanden.",
      noFilterMatch: "Mit diesem Filter wurden keine Fragen gefunden.",
      confirmResetAll: "Wirklich alle Fragen UND Fortschritt loeschen?",
      languageReset: "Sprache wurde zurueckgesetzt: {lang}",
      noteSaved: "Notiz gespeichert.",
      noteCleared: "Notiz geloescht.",
      reviewMarked: "Frage zur Nacharbeit markiert.",
      reviewCleared: "Frage aus der Nacharbeit entfernt.",
      reviewNeedsQuestion: "Bitte erst eine Frage auswaehlen.",
      cloudSyncFailed: "Cloud-Sync fehlgeschlagen: {msg}",
      cloudStateLoaded: "Cloud-Profil geladen: {user}",
      loggedOut: "Abgemeldet. Geladener Cloud-Fortschritt wurde aus diesem Browser entfernt.",
    },
  },
  en: {
    app: {
      title: "Study Quiz",
      subtitle: "Multiple-choice trainer for large learning content",
      langLabel: "Language",
      langReset: "Reset language",
      miniExplainer: "Mini Explainer",
      logout: "Log out",
      offlineProfile: "Local",
    },
    tabs: {
      learn: "Learn",
      build: "Build Questions",
      data: "Data",
    },
    learn: {
      topic: "Topic",
      module: "Module",
      section: "Section",
      tagFilter: "Tag filter",
      scopeStatsTitle: "Selection stats",
      mode: "Mode",
      nextQuestion: "Next question",
      continue: "Continue",
      modeMixed: "Mixed",
      modeWeak: "Weak areas first",
      modeNew: "New questions first",
      tagPlaceholder: "e.g. Chapter 1, Definition",
      allTopics: "All topics",
      allModules: "All modules",
      allSections: "All sections",
    },
    notes: {
      title: "Study notes",
      intro: "Write down what you got wrong or what you want to revisit later.",
      inputLabel: "Note for the current question",
      placeholder: "e.g. LOCAL_PREF is more important than AS_PATH. Review RR loop protection again.",
      save: "Save note",
      clear: "Delete note",
      mark: "Mark for review",
      unmark: "Mark as done",
      noQuestion: "No active question.",
      emptyMeta: "No note saved yet.",
      savedAt: "Saved: {time}",
      reviewMarked: "Marked for review.",
      reviewTitle: "Review later",
      emptyReview: "No open review items yet.",
      itemOpen: "Open",
      itemDone: "Done",
      autoMarkedWrong: "Automatically marked because the last answer was wrong.",
    },
    auth: {
      title: "Private access",
      intro: "Sign in to load your profile, progress, and notes.",
      username: "Username",
      password: "Password",
      login: "Sign in",
      checking: "Checking access...",
      configMissing: "Cloud profile is not configured yet. The app is currently running in local-only mode.",
      lockedUntil: "Access locked until {time}",
      loginFailed: "Login failed.",
      sessionExpired: "Session expired. Please sign in again.",
      welcome: "Signed in as {user}",
    },
    explainer: {
      title: "Mini explainer for RD and RT",
      intro: "Click one term and I explain it in a very simple way.",
      close: "Close",
      rdBtn: "Route Distinguisher",
      rtBtn: "Route Target",
      bothBtn: "Why both?",
      emptyTitle: "Nothing selected yet",
      emptyText: "Pick one button and I will show a small picture with a very simple explanation.",
      rdTitle: "Route Distinguisher: name tag for equal addresses",
      rdText:
        "Imagine two kids both have a box called 10.0.0.0/24. The Route Distinguisher adds one more name tag to each box. That way the provider network knows these are two different boxes, even though the front label looks the same.",
      rtTitle: "Route Target: club sticker for the right friends",
      rtText:
        "A Route Target is like a club sticker. Only routers that accept this sticker put the route into their own club. That way routes only go to the right VPN friends.",
      bothTitle: "Why do you need RD and RT together?",
      bothText:
        "First, RD makes two equal-looking networks unique inside the provider. Then RT decides which VPNs are actually allowed to receive those unique routes. RD solves the naming problem. RT solves the distribution problem. An RT is not inside the RD. It is a separate sticker for route import and export between services.",
      laneA: "Blue customer",
      laneB: "Green customer",
      samePrefix: "same network",
      providerView: "Provider turns it into",
      routeCard: "Route",
      rdSticker: "RD sticker",
      blueVpn: "Blue VPN",
      greenVpn: "Green VPN",
      targetSticker: "RT sticker",
      likesThis: "accepts this sticker",
      ignoresThis: "ignores this sticker",
      stepOne: "1. RD makes it unique",
      stepTwo: "2. RT sends it only to matching VPNs",
      imports: "imports",
      notImported: "does not get it",
    },
    build: {
      question: "Question",
      answerA: "Answer A",
      answerB: "Answer B",
      answerC: "Answer C",
      answerD: "Answer D",
      correct: "Correct answer",
      explanation: "Explanation (optional)",
      tags: "Tags (optional)",
      source: "Source (optional)",
      topic: "Topic (optional)",
      module: "Module (optional)",
      section: "Section (optional)",
      save: "Save question",
      clear: "Clear",
      questionPlaceholder: "What is ...?",
      explanationPlaceholder: "Short why this answer is correct",
      tagsPlaceholder: "e.g. Chapter 1, Definition",
      sourcePlaceholder: "e.g. Slide 42",
      topicPlaceholder: "e.g. BGP or IS-IS",
      modulePlaceholder: "e.g. Module 1",
      sectionPlaceholder: "e.g. Section 2",
    },
    data: {
      importLabel: "JSON import (array of questions)",
      mergeImport: "Merge import",
      replaceImport: "Replace import",
      exportLabel: "JSON export",
      refreshExport: "Refresh export",
      copyExport: "Copy export",
      syncSeed: "Update seed (keep progress)",
      resetProgress: "Reset learning progress",
      resetAll: "Reset all questions + progress",
    },
    overview: {
      title: "Overview",
      total: "Questions in selection",
      answered: "Answered",
      correct: "Correct",
      accuracy: "Accuracy",
      areaTitle: "Module overview",
      noAreas: "No module information available yet.",
      areaMetrics: "Questions: {questions} | Answered: {answered} | Open: {open} | Rate: {rate}%",
      scopeLabel: "Current selection: {area}",
      allModules: "All modules",
      scopeArea: "Active selection: {area}",
      scopeMetrics:
        "Questions: {questions} | Answered: {answered} | Correct: {correct} | Wrong: {wrong} | Open: {open} | Rate: {rate}%",
    },
    question: {
      readyTitle: "Ready?",
      readyMeta: 'Click "Next question".',
      areaPrefix: "Area",
      tagsPrefix: "Tags",
      sourcePrefix: "Source",
      missingOption: "(missing answer option)",
      resultCorrect: "Correct.",
      resultWrong: "Not quite.",
      noExplanation: "No explanation provided.",
    },
    popup: {
      titleCorrect: "Correct",
      titleWrong: "Not quite",
      fallbackInfo: "Remember the key concept and its typical use case.",
      tipPrefix: "Tip: {tip}",
    },
    status: {
      startError: "Startup error: {msg}",
      ready: "App ready. You can start learning or build questions now.",
      savedQuestion: "Question saved: {question}",
      formCleared: "Form cleared.",
      copiedExport: "Export copied to clipboard.",
      copyFailed: "Copy failed. Please copy manually.",
      progressReset: "Learning progress was reset.",
      resetAllDone: "Everything was reset to seed data.",
      importPrompt: "Please paste JSON for import.",
      importArrayError: "JSON must be an array of questions.",
      importSuccess: "Import successful. Total questions: {count}",
      importFailed: "Import failed: {msg}",
      seedUpdated: "Seed updated. Total questions: {count}. Progress was kept.",
      seedUpdateFailed: "Seed update failed: {msg}",
      noQuestions: "No questions available.",
      noFilterMatch: "No questions found for this filter.",
      confirmResetAll: "Really delete all questions and progress?",
      languageReset: "Language was reset: {lang}",
      noteSaved: "Note saved.",
      noteCleared: "Note deleted.",
      reviewMarked: "Question marked for review.",
      reviewCleared: "Question removed from review.",
      reviewNeedsQuestion: "Please select a question first.",
      cloudSyncFailed: "Cloud sync failed: {msg}",
      cloudStateLoaded: "Cloud profile loaded: {user}",
      loggedOut: "Signed out. Loaded cloud progress was removed from this browser.",
    },
  },
};

function t(path, params = {}) {
  const source = UI_TEXTS[currentLanguage] || UI_TEXTS.de;
  const fallback = UI_TEXTS.de;
  const parts = path.split(".");
  let value = parts.reduce((obj, key) => (obj && obj[key] != null ? obj[key] : null), source);
  if (value == null) {
    value = parts.reduce((obj, key) => (obj && obj[key] != null ? obj[key] : null), fallback);
  }
  if (typeof value !== "string") return path;
  return value.replace(/\{(\w+)\}/g, (_, key) => (params[key] != null ? String(params[key]) : ""));
}

function normalizeLanguageValue(value) {
  const text = typeof value === "string" ? value.trim().toLowerCase() : "";
  if (text === "en" || text === "english" || text === "englisch" || text.startsWith("en-")) return "en";
  if (text === "de" || text === "deutsch" || text === "german" || text.startsWith("de-")) return "de";
  return "de";
}

function detectPreferredLanguage() {
  if (Array.isArray(navigator.languages) && navigator.languages.length > 0) {
    return normalizeLanguageValue(navigator.languages[0]);
  }
  if (typeof navigator.language === "string" && navigator.language.trim()) {
    return normalizeLanguageValue(navigator.language);
  }
  return "de";
}

function loadLanguage() {
  const stored = localStorage.getItem(LANGUAGE_KEY);
  if (stored != null) return normalizeLanguageValue(stored);

  const legacy = localStorage.getItem("studyQuizLanguage") || localStorage.getItem("quizLanguage");
  if (legacy != null) return normalizeLanguageValue(legacy);
  return detectPreferredLanguage();
}

function setLanguage(language) {
  currentLanguage = normalizeLanguageValue(language);
  localStorage.setItem(LANGUAGE_KEY, currentLanguage);
  applyI18n();
  refreshFilterOptions();
  refreshExport();
  refreshStats();
  if (currentQuestion) {
    resetQuestionCard();
  }
  setStatus(t("status.ready"));
}

function resetLanguagePreference() {
  localStorage.removeItem(LANGUAGE_KEY);
  localStorage.removeItem("studyQuizLanguage");
  localStorage.removeItem("quizLanguage");
  const preferred = detectPreferredLanguage();
  setLanguage(preferred);
  setStatus(t("status.languageReset", { lang: preferred.toUpperCase() }));
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setPlaceholder(id, value) {
  const el = document.getElementById(id);
  if (el) el.placeholder = value;
}

function applyI18n() {
  document.documentElement.lang = currentLanguage === "en" ? "en" : "de";
  if (refs.languageSelect) {
    refs.languageSelect.value = currentLanguage;
  }

  setText("appTitle", t("app.title"));
  setText("langLabel", t("app.langLabel"));
  setText("languageResetBtn", t("app.langReset"));
  setText("miniExplainerBtn", t("app.miniExplainer"));
  setText("logoutBtn", t("app.logout"));
  setText("appSubtitle", t("app.subtitle"));
  setText("tabLearnBtn", t("tabs.learn"));
  setText("tabBuildBtn", t("tabs.build"));
  setText("tabDataBtn", t("tabs.data"));

  setText("topicLabel", t("learn.topic"));
  setText("moduleLabel", t("learn.module"));
  setText("sectionLabel", t("learn.section"));
  setText("tagFilterLabel", t("learn.tagFilter"));
  setText("scopeStatsTitle", t("learn.scopeStatsTitle"));
  setText("modeLabel", t("learn.mode"));
  setText("modeMixedOpt", t("learn.modeMixed"));
  setText("modeWeakOpt", t("learn.modeWeak"));
  setText("modeNewOpt", t("learn.modeNew"));
  setText("nextQuestionBtn", t("learn.nextQuestion"));
  setText("continueBtn", t("learn.continue"));
  setPlaceholder("tagFilterInput", t("learn.tagPlaceholder"));
  setText("kidExplainTitle", t("explainer.title"));
  setText("kidExplainIntro", t("explainer.intro"));
  setText("explainerCloseBtn", t("explainer.close"));
  setText("kidExplainRdBtn", t("explainer.rdBtn"));
  setText("kidExplainRtBtn", t("explainer.rtBtn"));
  setText("kidExplainBothBtn", t("explainer.bothBtn"));
  setText("notesTitle", t("notes.title"));
  setText("notesIntro", t("notes.intro"));
  setText("notesInputLabel", t("notes.inputLabel"));
  setText("saveNoteBtn", t("notes.save"));
  setText("clearNoteBtn", t("notes.clear"));
  setText("reviewListTitle", t("notes.reviewTitle"));
  setPlaceholder("noteInput", t("notes.placeholder"));
  updateReviewToggleButton();
  setText("authTitle", t("auth.title"));
  setText("authIntro", t("auth.intro"));
  setText("authUsernameLabel", t("auth.username"));
  setText("authPasswordLabel", t("auth.password"));
  setText("loginBtn", t("auth.login"));

  setText("buildQuestionLabel", t("build.question"));
  setText("buildAnswerALabel", t("build.answerA"));
  setText("buildAnswerBLabel", t("build.answerB"));
  setText("buildAnswerCLabel", t("build.answerC"));
  setText("buildAnswerDLabel", t("build.answerD"));
  setText("buildCorrectLabel", t("build.correct"));
  setText("buildExplanationLabel", t("build.explanation"));
  setText("buildTagsLabel", t("build.tags"));
  setText("buildSourceLabel", t("build.source"));
  setText("buildTopicLabel", t("build.topic"));
  setText("buildModuleLabel", t("build.module"));
  setText("buildSectionLabel", t("build.section"));
  setText("saveQuestionBtn", t("build.save"));
  setText("clearBuildFormBtn", t("build.clear"));
  setPlaceholder("qQuestion", t("build.questionPlaceholder"));
  setPlaceholder("qExplanation", t("build.explanationPlaceholder"));
  setPlaceholder("qTags", t("build.tagsPlaceholder"));
  setPlaceholder("qSource", t("build.sourcePlaceholder"));
  setPlaceholder("qTopic", t("build.topicPlaceholder"));
  setPlaceholder("qModule", t("build.modulePlaceholder"));
  setPlaceholder("qSection", t("build.sectionPlaceholder"));

  setText("importLabel", t("data.importLabel"));
  setText("mergeImportBtn", t("data.mergeImport"));
  setText("replaceImportBtn", t("data.replaceImport"));
  setText("exportLabel", t("data.exportLabel"));
  setText("refreshExportBtn", t("data.refreshExport"));
  setText("copyExportBtn", t("data.copyExport"));
  setText("syncSeedBtn", t("data.syncSeed"));
  setText("resetProgressBtn", t("data.resetProgress"));
  setText("resetAllBtn", t("data.resetAll"));

  setText("overviewTitle", t("overview.title"));
  setText("statTotalLabel", t("overview.total"));
  setText("statAnsweredLabel", t("overview.answered"));
  setText("statCorrectLabel", t("overview.correct"));
  setText("statAccuracyLabel", t("overview.accuracy"));
  setText("areaStatsTitle", t("overview.areaTitle"));
  updateOverviewScopeLabel();

  if (!currentQuestion) {
    refs.questionTitle.textContent = t("question.readyTitle");
    refs.questionMeta.textContent = t("question.readyMeta");
  }
  renderKidExplainer(currentKidExplainer);
  renderNotesPanel();
  updateAuthUi();
}

init().catch((err) => {
  setStatus(t("status.startError", { msg: err.message }));
});

async function init() {
  currentLanguage = loadLanguage();
  applyI18n();
  if (refs.languageSelect) {
    refs.languageSelect.addEventListener("change", () => {
      setLanguage(refs.languageSelect.value);
    });
  }
  if (refs.languageResetBtn) {
    refs.languageResetBtn.addEventListener("click", resetLanguagePreference);
  }
  setupTabs();
  setupLearnActions();
  setupExplainerActions();
  setupNoteActions();
  setupAuthActions();
  setupBuildActions();
  setupDataActions();
  await loadData();
  await initializeCloud();
  refreshFilterOptions();
  await restoreViewState();
  refreshExport();
  refreshStats();
  setStatus(t("status.ready"));
}

function setupExplainerActions() {
  if (refs.miniExplainerBtn) {
    refs.miniExplainerBtn.addEventListener("click", openExplainerModal);
  }
  if (refs.explainerCloseBtn) {
    refs.explainerCloseBtn.addEventListener("click", closeExplainerModal);
  }
  if (refs.explainerBackdrop) {
    refs.explainerBackdrop.addEventListener("click", closeExplainerModal);
  }
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeExplainerModal();
    }
  });
  if (refs.kidExplainRdBtn) {
    refs.kidExplainRdBtn.addEventListener("click", () => {
      currentKidExplainer = currentKidExplainer === "rd" ? "" : "rd";
      renderKidExplainer(currentKidExplainer);
    });
  }
  if (refs.kidExplainRtBtn) {
    refs.kidExplainRtBtn.addEventListener("click", () => {
      currentKidExplainer = currentKidExplainer === "rt" ? "" : "rt";
      renderKidExplainer(currentKidExplainer);
    });
  }
  if (refs.kidExplainBothBtn) {
    refs.kidExplainBothBtn.addEventListener("click", () => {
      currentKidExplainer = currentKidExplainer === "both" ? "" : "both";
      renderKidExplainer(currentKidExplainer);
    });
  }
  renderKidExplainer("");
}

function setupNoteActions() {
  if (refs.saveNoteBtn) {
    refs.saveNoteBtn.addEventListener("click", saveCurrentNote);
  }
  if (refs.clearNoteBtn) {
    refs.clearNoteBtn.addEventListener("click", clearCurrentNote);
  }
  if (refs.toggleReviewBtn) {
    refs.toggleReviewBtn.addEventListener("click", toggleCurrentReviewFlag);
  }
}

function setupAuthActions() {
  refs.loginBtn?.addEventListener("click", performCloudLogin);
  refs.loginPassword?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      performCloudLogin();
    }
  });
  refs.logoutBtn?.addEventListener("click", logoutCloudSession);
}

function getCloudConfig() {
  const cfg = globalThis.STUDY_QUIZ_CLOUD;
  if (!cfg || typeof cfg !== "object") return null;
  if (!cfg.enabled) return null;
  const supabaseUrl = typeof cfg.supabaseUrl === "string" ? cfg.supabaseUrl.trim().replace(/\/+$/, "") : "";
  const anonKey = typeof cfg.anonKey === "string" ? cfg.anonKey.trim() : "";
  if (!supabaseUrl || !anonKey) return null;
  return {
    enabled: true,
    supabaseUrl,
    anonKey,
    appName: typeof cfg.appName === "string" ? cfg.appName.trim() : "Study Quiz",
  };
}

function isCloudEnabled() {
  return !!cloudConfig;
}

function isCloudAuthenticated() {
  return !!(cloudSession && cloudSession.token);
}

function loadCloudSession() {
  try {
    const raw = localStorage.getItem(CLOUD_SESSION_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return null;
  }
}

function saveCloudSession(session) {
  if (!session) {
    localStorage.removeItem(CLOUD_SESSION_KEY);
    cloudSession = null;
    return;
  }
  cloudSession = session;
  localStorage.setItem(CLOUD_SESSION_KEY, JSON.stringify(session));
}

function setAuthStatus(message, isError = false) {
  if (!refs.authStatus) return;
  refs.authStatus.textContent = message || "";
  refs.authStatus.style.color = isError ? "var(--bad)" : "var(--muted)";
}

function showAuthGate(show) {
  if (!refs.authGate) return;
  refs.authGate.classList.toggle("hidden", !show);
  refs.authGate.setAttribute("aria-hidden", show ? "false" : "true");
  document.body.style.overflow = show ? "hidden" : "";
}

function updateAuthUi() {
  const label = isCloudAuthenticated() ? cloudSession.username || "Profil" : t("app.offlineProfile");
  if (refs.profileBadge) refs.profileBadge.textContent = label;
  if (refs.authControls) refs.authControls.classList.toggle("hidden", !isCloudEnabled());
  if (!isCloudEnabled()) {
    showAuthGate(false);
    setAuthStatus(t("auth.configMissing"), false);
    return;
  }
  showAuthGate(!isCloudAuthenticated());
}

function clearLoadedStudyState() {
  progress = {};
  notes = {};
  removeJson(PROGRESS_KEY);
  removeJson(NOTES_KEY);
  resetQuestionCard();
  refreshStats();
}

function formatAuthTime(value) {
  if (!value) return "";
  try {
    return new Intl.DateTimeFormat(currentLanguage === "en" ? "en-GB" : "de-DE", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(new Date(value));
  } catch {
    return String(value);
  }
}

async function cloudRpc(fnName, payload = {}) {
  if (!cloudConfig) throw new Error("Cloud not configured");
  const response = await fetch(`${cloudConfig.supabaseUrl}/rest/v1/rpc/${fnName}`, {
    method: "POST",
    headers: {
      apikey: cloudConfig.anonKey,
      Authorization: `Bearer ${cloudConfig.anonKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const text = await response.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }
  if (!response.ok) {
    const message =
      (data && typeof data === "object" && (data.message || data.error || data.hint)) || response.statusText;
    throw new Error(message || "RPC failed");
  }
  return data;
}

async function initializeCloud() {
  cloudConfig = getCloudConfig();
  updateAuthUi();
  if (!cloudConfig) return;

  const saved = loadCloudSession();
  if (!saved || !saved.token) {
    clearLoadedStudyState();
    setAuthStatus(t("auth.intro"));
    return;
  }

  try {
    const resumed = await cloudRpc("quiz_resume_session", { p_token: saved.token });
    if (!resumed || !resumed.ok) {
      saveCloudSession(null);
      clearLoadedStudyState();
      setAuthStatus(t("auth.sessionExpired"), true);
      updateAuthUi();
      return;
    }
    saveCloudSession({ token: saved.token, username: resumed.username || saved.username || "Fabio" });
    await fetchCloudState();
    updateAuthUi();
    setAuthStatus(t("auth.welcome", { user: cloudSession.username }));
    setStatus(t("status.cloudStateLoaded", { user: cloudSession.username }));
  } catch (error) {
    saveCloudSession(null);
    clearLoadedStudyState();
    setAuthStatus(`${t("auth.sessionExpired")} ${error.message}`, true);
    updateAuthUi();
  }
}

async function performCloudLogin() {
  if (!cloudConfig) {
    setAuthStatus(t("auth.configMissing"), true);
    return;
  }
  const username = refs.loginUsername?.value?.trim() || "";
  const password = refs.loginPassword?.value || "";
  if (!username || !password) {
    setAuthStatus(t("auth.loginFailed"), true);
    return;
  }

  refs.loginBtn && (refs.loginBtn.disabled = true);
  setAuthStatus(t("auth.checking"));
  try {
    const result = await cloudRpc("quiz_login", { p_username: username, p_password: password });
    if (!result || !result.ok) {
      if (result && result.locked_until) {
        setAuthStatus(t("auth.lockedUntil", { time: formatAuthTime(result.locked_until) }), true);
      } else {
        setAuthStatus(result?.message || t("auth.loginFailed"), true);
      }
      return;
    }
    saveCloudSession({ token: result.token, username: result.username || username });
    refs.loginPassword && (refs.loginPassword.value = "");
    await fetchCloudState();
    refreshFilterOptions();
    await restoreViewState();
    updateAuthUi();
    setAuthStatus(t("auth.welcome", { user: cloudSession.username }));
    setStatus(t("status.cloudStateLoaded", { user: cloudSession.username }));
  } catch (error) {
    setAuthStatus(`${t("auth.loginFailed")} ${error.message}`, true);
  } finally {
    refs.loginBtn && (refs.loginBtn.disabled = false);
  }
}

async function logoutCloudSession() {
  if (isCloudAuthenticated()) {
    try {
      await cloudRpc("quiz_logout", { p_token: cloudSession.token });
    } catch {
      // ignore server logout failure, local logout still happens
    }
  }
  saveCloudSession(null);
  clearLoadedStudyState();
  refreshFilterOptions();
  await restoreViewState();
  updateAuthUi();
  setStatus(t("status.loggedOut"));
}

async function fetchCloudState() {
  if (!isCloudAuthenticated()) return;
  const state = await cloudRpc("quiz_get_state", { p_token: cloudSession.token });
  if (!state || !state.ok) throw new Error(state?.message || "State load failed");
  suppressCloudSync = true;
  try {
    progress = normalizeCloudProgress(state.progress);
    notes = normalizeCloudNotes(state.notes);
    saveProgress();
    saveNotes();
  } finally {
    suppressCloudSync = false;
  }
  refreshStats();
  renderNotesPanel();
}

function queueCloudSync() {
  if (!isCloudAuthenticated()) return;
  if (cloudSyncTimer) {
    clearTimeout(cloudSyncTimer);
  }
  cloudSyncTimer = setTimeout(() => {
    syncCloudState().catch((error) => {
      setStatus(t("status.cloudSyncFailed", { msg: error.message }));
    });
  }, 350);
}

async function syncCloudState() {
  if (!isCloudAuthenticated()) return;
  if (cloudSyncInFlight) return cloudSyncInFlight;
  cloudSyncInFlight = cloudRpc("quiz_set_state", {
    p_token: cloudSession.token,
    p_progress: buildCloudProgressPayload(),
    p_notes: buildCloudNotesPayload(),
  }).finally(() => {
    cloudSyncInFlight = null;
  });
  return cloudSyncInFlight;
}

function openExplainerModal() {
  if (!refs.explainerModal) return;
  refs.explainerModal.classList.remove("hidden");
  refs.explainerModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeExplainerModal() {
  if (!refs.explainerModal) return;
  refs.explainerModal.classList.add("hidden");
  refs.explainerModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function renderKidExplainer(mode = "") {
  if (!refs.kidExplainScene || !refs.kidExplainSceneTitle || !refs.kidExplainText) return;

  currentKidExplainer = mode || "";
  refs.kidExplainRdBtn?.classList.toggle("is-active", currentKidExplainer === "rd");
  refs.kidExplainRtBtn?.classList.toggle("is-active", currentKidExplainer === "rt");
  refs.kidExplainBothBtn?.classList.toggle("is-active", currentKidExplainer === "both");
  refs.kidExplainScene.className = "kid-explain-scene";

  if (currentKidExplainer === "rd") {
    refs.kidExplainScene.classList.add("rd-mode");
    refs.kidExplainScene.innerHTML = `
      <div class="kid-lane">
        <div class="kid-box customer">
          <strong>${t("explainer.laneA")}</strong>
          <span>${t("explainer.samePrefix")}: 10.0.0.0/24</span>
        </div>
        <div class="kid-travel delay-a">
          <div class="kid-card">
            <span>${t("explainer.routeCard")}: 10.0.0.0/24</span>
            <span class="kid-tag">${t("explainer.rdSticker")}: 65001:10</span>
          </div>
        </div>
        <div class="kid-box provider">
          <strong>${t("explainer.providerView")}</strong>
          <span>65001:10 + 10.0.0.0/24</span>
        </div>
      </div>
      <div class="kid-lane">
        <div class="kid-box customer">
          <strong>${t("explainer.laneB")}</strong>
          <span>${t("explainer.samePrefix")}: 10.0.0.0/24</span>
        </div>
        <div class="kid-travel delay-b">
          <div class="kid-card">
            <span>${t("explainer.routeCard")}: 10.0.0.0/24</span>
            <span class="kid-tag">${t("explainer.rdSticker")}: 65002:10</span>
          </div>
        </div>
        <div class="kid-box provider">
          <strong>${t("explainer.providerView")}</strong>
          <span>65002:10 + 10.0.0.0/24</span>
        </div>
      </div>
    `;
    refs.kidExplainSceneTitle.textContent = t("explainer.rdTitle");
    refs.kidExplainText.textContent = t("explainer.rdText");
    return;
  }

  if (currentKidExplainer === "rt") {
    refs.kidExplainScene.classList.add("rt-mode");
    refs.kidExplainScene.innerHTML = `
      <div class="kid-route-stage">
        <div class="kid-card kid-card-wide">
          <span>${t("explainer.routeCard")}: 10.0.0.0/24</span>
          <span class="kid-tag">${t("explainer.targetSticker")}: 65001:200</span>
        </div>
        <div class="kid-pointer"></div>
      </div>
      <div class="kid-target-grid">
        <div class="kid-box vpn">
          <strong>${t("explainer.blueVpn")}</strong>
          <span>${t("explainer.likesThis")}: 65001:100</span>
          <span class="kid-note">${t("explainer.ignoresThis")}</span>
        </div>
        <div class="kid-box vpn match">
          <strong>${t("explainer.greenVpn")}</strong>
          <span>${t("explainer.likesThis")}: 65001:200</span>
          <span class="kid-note">${currentLanguage === "en" ? "This route is imported" : "Diese Route wird genommen"}</span>
        </div>
      </div>
    `;
    refs.kidExplainSceneTitle.textContent = t("explainer.rtTitle");
    refs.kidExplainText.textContent = t("explainer.rtText");
    return;
  }

  if (currentKidExplainer === "both") {
    refs.kidExplainScene.classList.add("both-mode");
    refs.kidExplainScene.innerHTML = `
      <div class="kid-combo-head">
        <div class="kid-combo-step">${t("explainer.stepOne")}</div>
        <div class="kid-combo-step">${t("explainer.stepTwo")}</div>
      </div>
      <div class="kid-combo-grid">
        <div class="kid-box customer">
          <strong>${t("explainer.laneA")}</strong>
          <span>10.0.0.0/24</span>
          <span class="kid-tag">${t("explainer.rdSticker")}: 65001:10</span>
        </div>
        <div class="kid-box provider">
          <strong>${t("explainer.providerView")}</strong>
          <span>65001:10 + 10.0.0.0/24</span>
          <span class="kid-tag">${t("explainer.targetSticker")}: 65000:100</span>
        </div>
        <div class="kid-box vpn match">
          <strong>${t("explainer.blueVpn")}</strong>
          <span>${t("explainer.imports")}: 65000:100</span>
        </div>
        <div class="kid-box customer">
          <strong>${t("explainer.laneB")}</strong>
          <span>10.0.0.0/24</span>
          <span class="kid-tag">${t("explainer.rdSticker")}: 65002:10</span>
        </div>
        <div class="kid-box provider">
          <strong>${t("explainer.providerView")}</strong>
          <span>65002:10 + 10.0.0.0/24</span>
          <span class="kid-tag">${t("explainer.targetSticker")}: 65000:200</span>
        </div>
        <div class="kid-box vpn">
          <strong>${t("explainer.greenVpn")}</strong>
          <span>${t("explainer.imports")}: 65000:200</span>
        </div>
      </div>
      <div class="kid-combo-foot">
        <div class="kid-pill">${currentLanguage === "en" ? "Same IP prefix can exist twice because RD is different" : "Dasselbe IP-Netz kann doppelt existieren, weil RD verschieden ist"}</div>
        <div class="kid-pill">${currentLanguage === "en" ? "Only matching RT imports the route into the VPN" : "Nur passendes RT importiert die Route ins VPN"}</div>
      </div>
    `;
    refs.kidExplainSceneTitle.textContent = t("explainer.bothTitle");
    refs.kidExplainText.textContent = t("explainer.bothText");
    return;
  }

  refs.kidExplainScene.innerHTML = `
    <div class="kid-empty">
      <div class="kid-empty-card">
        <strong>RD</strong>
        <span>${t("explainer.rdBtn")}</span>
      </div>
      <div class="kid-empty-card">
        <strong>RT</strong>
        <span>${t("explainer.rtBtn")}</span>
      </div>
      <div class="kid-empty-card">
        <strong>RD + RT</strong>
        <span>${t("explainer.bothBtn")}</span>
      </div>
    </div>
  `;
  refs.kidExplainSceneTitle.textContent = t("explainer.emptyTitle");
  refs.kidExplainText.textContent = t("explainer.emptyText");
}

function updateReviewToggleButton() {
  if (!refs.toggleReviewBtn) return;
  const label =
    currentQuestion && getNoteSnapshot(currentQuestion).needsReview ? t("notes.unmark") : t("notes.mark");
  refs.toggleReviewBtn.textContent = label;
}

function formatNoteTimestamp(value) {
  if (!value) return "";
  try {
    return new Intl.DateTimeFormat(currentLanguage === "en" ? "en-GB" : "de-DE", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(new Date(value));
  } catch (error) {
    return "";
  }
}

function renderNotesPanel() {
  if (!refs.noteInput || !refs.notesMeta || !refs.reviewList) return;

  if (!currentQuestion) {
    refs.noteInput.value = "";
    refs.noteInput.disabled = true;
    refs.saveNoteBtn && (refs.saveNoteBtn.disabled = true);
    refs.clearNoteBtn && (refs.clearNoteBtn.disabled = true);
    refs.toggleReviewBtn && (refs.toggleReviewBtn.disabled = true);
    refs.notesMeta.textContent = t("notes.noQuestion");
    updateReviewToggleButton();
    renderReviewList();
    return;
  }

  const note = getNoteSnapshot(currentQuestion);
  refs.noteInput.disabled = false;
  refs.saveNoteBtn && (refs.saveNoteBtn.disabled = false);
  refs.clearNoteBtn && (refs.clearNoteBtn.disabled = false);
  refs.toggleReviewBtn && (refs.toggleReviewBtn.disabled = false);
  refs.noteInput.value = note.text || "";

  const metaParts = [];
  if (note.updatedAt) {
    metaParts.push(t("notes.savedAt", { time: formatNoteTimestamp(note.updatedAt) }));
  }
  if (note.needsReview) {
    metaParts.push(note.autoMarkedWrong ? t("notes.autoMarkedWrong") : t("notes.reviewMarked"));
  }
  refs.notesMeta.textContent = metaParts.join(" | ") || t("notes.emptyMeta");
  updateReviewToggleButton();
  renderReviewList();
}

function renderReviewList() {
  if (!refs.reviewList) return;
  refs.reviewList.innerHTML = "";

  const filtered = applyFilter(
    questions,
    refs.tagFilterInput?.value || "",
    refs.topicSelect?.value || "",
    refs.moduleSelect?.value || "",
    refs.sectionSelect?.value || ""
  );

  const items = filtered
    .map((q) => ({ question: q, note: getNoteSnapshot(q) }))
    .filter(({ note }) => note.needsReview)
    .sort((a, b) => (b.note.updatedAt || 0) - (a.note.updatedAt || 0));

  if (items.length === 0) {
    const li = document.createElement("li");
    li.textContent = t("notes.emptyReview");
    refs.reviewList.appendChild(li);
    return;
  }

  items.forEach(({ question, note }) => {
    const li = document.createElement("li");

    const head = document.createElement("div");
    head.className = "review-item-head";

    const title = document.createElement("p");
    title.className = "review-item-title";
    title.textContent = getLocalizedField(question, "question");

    const meta = document.createElement("span");
    meta.className = "review-item-meta";
    meta.textContent = `${getLocalizedTopic(question)} / ${getLocalizedModule(question)} / ${getLocalizedSection(question)}`;

    head.appendChild(title);
    head.appendChild(meta);

    const noteText = document.createElement("p");
    noteText.className = "review-item-note";
    noteText.textContent = note.text || t("notes.reviewMarked");

    const actions = document.createElement("div");
    actions.className = "review-item-actions";

    const openBtn = document.createElement("button");
    openBtn.type = "button";
    openBtn.className = "secondary";
    openBtn.textContent = t("notes.itemOpen");
    openBtn.addEventListener("click", () => openQuestionForReview(question));

    const doneBtn = document.createElement("button");
    doneBtn.type = "button";
    doneBtn.className = "secondary";
    doneBtn.textContent = t("notes.itemDone");
    doneBtn.addEventListener("click", () => {
      const updated = { ...note, needsReview: false, autoMarkedWrong: false, updatedAt: Date.now() };
      setNoteSnapshot(question, updated);
      saveNotes();
      renderNotesPanel();
      setStatus(t("status.reviewCleared"));
    });

    actions.appendChild(openBtn);
    actions.appendChild(doneBtn);

    li.appendChild(head);
    li.appendChild(noteText);
    li.appendChild(actions);
    refs.reviewList.appendChild(li);
  });
}

function saveCurrentNote() {
  if (!currentQuestion || !refs.noteInput) {
    setStatus(t("status.reviewNeedsQuestion"));
    return;
  }
  const note = getNoteSnapshot(currentQuestion);
  note.text = refs.noteInput.value || "";
  note.updatedAt = Date.now();
  setNoteSnapshot(currentQuestion, note);
  saveNotes();
  renderNotesPanel();
  setStatus(t("status.noteSaved"));
}

function clearCurrentNote() {
  if (!currentQuestion) {
    setStatus(t("status.reviewNeedsQuestion"));
    return;
  }
  const note = getNoteSnapshot(currentQuestion);
  note.text = "";
  note.updatedAt = Date.now();
  note.autoMarkedWrong = false;
  setNoteSnapshot(currentQuestion, note);
  saveNotes();
  renderNotesPanel();
  setStatus(t("status.noteCleared"));
}

function toggleCurrentReviewFlag() {
  if (!currentQuestion) {
    setStatus(t("status.reviewNeedsQuestion"));
    return;
  }
  const note = getNoteSnapshot(currentQuestion);
  note.needsReview = !note.needsReview;
  note.autoMarkedWrong = false;
  note.updatedAt = Date.now();
  setNoteSnapshot(currentQuestion, note);
  saveNotes();
  renderNotesPanel();
  setStatus(t(note.needsReview ? "status.reviewMarked" : "status.reviewCleared"));
}

function openQuestionForReview(question) {
  if (!question) return;
  currentQuestion = question;
  currentOptionOrder = [];
  answerLocked = false;
  refs.answerWrap.classList.add("hidden");
  renderQuestion(question);
  renderNotesPanel();
  closeExplainerModal();
  window.scrollTo({ top: 0, behavior: "smooth" });
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

function getViewStateStorageKey() {
  const profileName = isCloudAuthenticated() ? String(cloudSession.username || "local") : "local";
  const normalized = profileName.trim().toLowerCase().replace(/[^a-z0-9_-]+/g, "-") || "local";
  return `${VIEW_STATE_KEY}:${normalized}`;
}

function getActiveTabName() {
  const active = refs.tabs.find((btn) => btn.classList.contains("active"));
  return active?.dataset?.tab || "learn";
}

function setActiveTab(target) {
  const tabName = Object.prototype.hasOwnProperty.call(refs.tabPanels, target) ? target : "learn";
  refs.tabs.forEach((btn) => btn.classList.toggle("active", btn.dataset.tab === tabName));
  Object.entries(refs.tabPanels).forEach(([key, panel]) => {
    panel.classList.toggle("active", key === tabName);
  });
}

function setSelectValueIfPresent(select, value) {
  if (!select) return;
  const wanted = String(value || "").trim();
  const exists = Array.from(select.options).some((option) => option.value === wanted);
  select.value = exists ? wanted : "";
}

function buildViewStatePayload() {
  return {
    activeTab: getActiveTabName(),
    topic: refs.topicSelect?.value || "",
    module: refs.moduleSelect?.value || "",
    section: refs.sectionSelect?.value || "",
    tagFilter: refs.tagFilterInput?.value || "",
    mode: refs.modeSelect?.value || "mixed",
  };
}

function saveViewState() {
  persistJson(getViewStateStorageKey(), buildViewStatePayload());
}

async function restoreViewState() {
  const state = await loadJson(getViewStateStorageKey());
  if (!state || typeof state !== "object") {
    refreshScopedStats();
    return;
  }

  setSelectValueIfPresent(refs.topicSelect, state.topic ? sanitizeTopic(state.topic) : "");
  refreshFilterOptions();
  setSelectValueIfPresent(refs.moduleSelect, state.module ? sanitizeModule(state.module) : "");
  refreshSectionOptions();
  setSelectValueIfPresent(refs.sectionSelect, state.section ? sanitizeSection(state.section) : "");

  if (refs.tagFilterInput) {
    refs.tagFilterInput.value = typeof state.tagFilter === "string" ? state.tagFilter : "";
  }

  setSelectValueIfPresent(refs.modeSelect, typeof state.mode === "string" ? state.mode : "mixed");
  setActiveTab(typeof state.activeTab === "string" ? state.activeTab : "learn");
  refreshScopedStats();
}

function setupTabs() {
  refs.tabs.forEach((tabBtn) => {
    tabBtn.addEventListener("click", () => {
      setActiveTab(tabBtn.dataset.tab || "learn");
      saveViewState();
    });
  });
}

function setupLearnActions() {
  refs.nextQuestionBtn.addEventListener("click", nextQuestion);
  refs.continueBtn.addEventListener("click", nextQuestion);
  refs.topicSelect.addEventListener("change", () => {
    refreshFilterOptions();
    refreshScopedStats();
    resetQuestionCard();
    saveViewState();
  });
  refs.moduleSelect.addEventListener("change", () => {
    refreshSectionOptions();
    refreshScopedStats();
    resetQuestionCard();
    saveViewState();
  });
  refs.sectionSelect.addEventListener("change", () => {
    refreshScopedStats();
    resetQuestionCard();
    saveViewState();
  });
  refs.tagFilterInput.addEventListener("input", () => {
    refreshScopedStats();
    resetQuestionCard();
    saveViewState();
  });
  refs.modeSelect.addEventListener("change", saveViewState);
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
    setStatus(t("status.savedQuestion", { question: question.question }));
  });

  refs.clearBuildFormBtn.addEventListener("click", () => {
    refs.questionForm.reset();
    setStatus(t("status.formCleared"));
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
      setStatus(t("status.copiedExport"));
    } catch (err) {
      setStatus(t("status.copyFailed"));
    }
  });
  refs.resetProgressBtn.addEventListener("click", () => {
    progress = {};
    saveProgress();
    refreshStats();
    setStatus(t("status.progressReset"));
  });
  refs.resetAllBtn.addEventListener("click", async () => {
    const confirmed = confirm(t("status.confirmResetAll"));
    if (!confirmed) return;
    removeJson(STORAGE_KEY);
    removeJson(PROGRESS_KEY);
    removeJson(NOTES_KEY);
    await loadData(true);
    saveProgress();
    saveNotes();
    refreshFilterOptions();
    refreshExport();
    refreshStats();
    resetQuestionCard();
    setStatus(t("status.resetAllDone"));
  });
}

async function loadData(forceSeed = false) {
  const savedQuestions = !forceSeed ? await loadJson(STORAGE_KEY) : null;
  const savedProgress = !forceSeed ? await loadJson(PROGRESS_KEY) : null;
  const savedNotes = !forceSeed ? await loadJson(NOTES_KEY) : null;

  questions = Array.isArray(savedQuestions) ? savedQuestions : [];
  const normalizedBundledSeed = normalizeQuestions(getBundledSeedQuestions());
  const normalizedFileSeed = await loadSeedQuestionsFromFile();

  if (!Array.isArray(questions) || questions.length === 0) {
    if (normalizedBundledSeed.length > 0) {
      questions = normalizedBundledSeed;
    }
    if (normalizedFileSeed.length > 0) {
      questions = normalizedFileSeed;
    } else {
      if (questions.length === 0) {
        throw new Error("Seed-Datei konnte nicht geladen werden.");
      }
    }
  }

  if (normalizedBundledSeed.length > 0 && questions.length > 0) {
    questions = mergeSeedQuestions(questions, normalizedBundledSeed);
  }
  if (normalizedFileSeed.length > 0 && questions.length > 0) {
    questions = mergeSeedQuestions(questions, normalizedFileSeed);
  }
  questions = normalizeQuestions(questions);
  saveQuestions();

  progress = savedProgress && typeof savedProgress === "object" ? savedProgress : {};
  notes = savedNotes && typeof savedNotes === "object" ? savedNotes : {};
}

function getBundledSeedQuestions() {
  const seed = globalThis.STUDY_QUIZ_SEED;
  if (!Array.isArray(seed)) return [];
  return seed.map((q) => ({ ...q }));
}

async function loadSeedQuestionsFromFile() {
  try {
    const resp = await fetch(SEED_JSON_URL, { cache: "no-store" });
    if (!resp.ok) return [];
    const loaded = await resp.json();
    return normalizeQuestions(loaded);
  } catch {
    return [];
  }
}

function mergeMissingLocalizedFields(existingQuestions, seedQuestions) {
  const seedById = new Map(seedQuestions.map((q) => [q.id, q]));
  const normalizeText = (text) => String(text || "").trim().toLowerCase();
  return existingQuestions.map((question) => {
    const seedMatch = seedById.get(question.id);
    if (!seedMatch) return question;

    const merged = { ...question };
    const textFields = [
      "question_en",
      "explanation_en",
      "extraInfo_en",
      "tip_en",
      "source_en",
      "topic_en",
      "module_en",
      "section_en",
    ];

    textFields.forEach((field) => {
      const current = typeof merged[field] === "string" ? merged[field].trim() : "";
      const fromSeed = typeof seedMatch[field] === "string" ? seedMatch[field].trim() : "";
      let shouldReplace = !current && !!fromSeed;
      if (!shouldReplace && field.endsWith("_en") && current && fromSeed) {
        const baseField = field.slice(0, -3);
        const deValue = typeof merged[baseField] === "string" ? merged[baseField].trim() : "";
        if (
          deValue &&
          normalizeText(current) === normalizeText(deValue) &&
          normalizeText(fromSeed) !== normalizeText(current)
        ) {
          shouldReplace = true;
        }
      }
      if (shouldReplace) {
        merged[field] = seedMatch[field];
      }
    });

    const hasValidOptionsEn =
      Array.isArray(merged.options_en) &&
      Array.isArray(merged.options) &&
      merged.options_en.length === merged.options.length &&
      merged.options_en.every((opt) => String(opt || "").trim().length > 0);

    const optionsEnLooksGerman =
      hasValidOptionsEn &&
      merged.options_en.every(
        (opt, idx) =>
          normalizeText(opt) === normalizeText((Array.isArray(merged.options) ? merged.options[idx] : "") || "")
      );

    if ((!hasValidOptionsEn || optionsEnLooksGerman) && Array.isArray(seedMatch.options_en)) {
      merged.options_en = seedMatch.options_en.slice();
    }

    const metadataFields = ["topic", "topic_en", "module", "module_en", "section", "section_en"];
    metadataFields.forEach((field) => {
      const seedValue = typeof seedMatch[field] === "string" ? seedMatch[field].trim() : "";
      if (seedValue) {
        merged[field] = seedValue;
      }
    });

    return merged;
  });
}

function mergeSeedQuestions(existingQuestions, seedQuestions) {
  const mergedExisting = mergeMissingLocalizedFields(existingQuestions, seedQuestions);
  const seedById = new Map(seedQuestions.map((q) => [q.id, { ...q }]));
  const customQuestions = mergedExisting.filter((q) => !seedById.has(q.id)).map((q) => ({ ...q }));
  const orderedSeedQuestions = seedQuestions.map((q) => ({ ...q }));
  return [...orderedSeedQuestions, ...customQuestions];
}

function saveQuestions() {
  persistJson(STORAGE_KEY, questions);
}

function saveProgress() {
  persistJson(PROGRESS_KEY, progress);
  if (!suppressCloudSync) queueCloudSync();
}

function saveNotes() {
  persistJson(NOTES_KEY, notes);
  if (!suppressCloudSync) queueCloudSync();
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
  const inferredTopic = inferTopic(raw, tags, source);
  const inferredModule = inferModule(raw, tags, source);
  const inferredSection = inferSection(raw, tags, source);

  return {
    ...raw,
    id: raw.id || `q-${Date.now()}-${Math.floor(Math.random() * 100000)}`,
    question: typeof raw.question === "string" ? raw.question.trim() : "",
    question_en: typeof raw.question_en === "string" ? raw.question_en.trim() : "",
    options: Array.isArray(raw.options) ? raw.options.map((o) => String(o)) : [],
    options_en: Array.isArray(raw.options_en) ? raw.options_en.map((o) => String(o)) : [],
    correctIndex: Number(raw.correctIndex),
    explanation: typeof raw.explanation === "string" ? raw.explanation : "",
    explanation_en: typeof raw.explanation_en === "string" ? raw.explanation_en : "",
    extraInfo: typeof raw.extraInfo === "string" ? raw.extraInfo : "",
    extraInfo_en: typeof raw.extraInfo_en === "string" ? raw.extraInfo_en : "",
    tip: typeof raw.tip === "string" ? raw.tip : "",
    tip_en: typeof raw.tip_en === "string" ? raw.tip_en : "",
    tags,
    source,
    source_en: typeof raw.source_en === "string" ? raw.source_en.trim() : "",
    topic: sanitizeTopic(raw.topic || inferredTopic),
    topic_en: typeof raw.topic_en === "string" ? toEnglishTopicName(raw.topic_en) : "",
    module: sanitizeModule(raw.module || inferredModule),
    module_en: typeof raw.module_en === "string" ? toEnglishModuleName(raw.module_en) : "",
    section: sanitizeSection(raw.section || inferredSection),
    section_en: typeof raw.section_en === "string" ? toEnglishSectionName(raw.section_en) : "",
  };
}

function sanitizeTopic(value) {
  const text = typeof value === "string" ? value.trim() : "";
  if (!text) return DEFAULT_TOPIC;
  const normalized = text.toLowerCase();
  if (
    normalized === "hauptquiz" ||
    normalized === "hauptquizfragen" ||
    normalized === "hauptfragen" ||
    normalized === "main quiz" ||
    normalized === "main questions" ||
    normalized === "telecommunication" ||
    normalized === "telecom"
  ) {
    return DEFAULT_TOPIC;
  }
  if (normalized === "bgp" || normalized.startsWith("bgp ")) {
    return "BGP";
  }
  if (
    normalized === "isis" ||
    normalized === "is-is" ||
    normalized === "is is" ||
    normalized.includes("intermediate system to intermediate system")
  ) {
    return "IS-IS";
  }
  return text;
}

function sanitizeModule(value) {
  const text = typeof value === "string" ? value.trim() : "";
  if (!text) return DEFAULT_MODULE;
  const moduleMatch = text.match(/^(?:modul|module)\s*(\d+)$/i);
  if (moduleMatch) return `Modul ${moduleMatch[1]}`;
  return text;
}

function sanitizeSection(value) {
  const text = typeof value === "string" ? value.trim() : "";
  if (!text) return DEFAULT_SECTION;
  const sectionMatch = text.match(/^(?:abschnitt|section|sec)\s*[-:]?\s*(\d+)$/i);
  if (sectionMatch) return `Section ${Number(sectionMatch[1])}`;
  return text;
}

function toEnglishModuleName(value) {
  const text = typeof value === "string" ? value.trim() : "";
  if (!text) return "";
  const moduleMatch = text.match(/^(?:modul|module)\s*(\d+)$/i);
  if (moduleMatch) return `Module ${moduleMatch[1]}`;
  return text;
}

function toGermanTopicName(value) {
  const text = typeof value === "string" ? value.trim() : "";
  if (!text) return "";
  const normalized = text.toLowerCase();
  if (normalized === "main quiz" || normalized === "main questions") return DEFAULT_TOPIC;
  if (normalized === "bgp") return "BGP";
  if (
    normalized === "isis" ||
    normalized === "is-is" ||
    normalized === "is is" ||
    normalized.includes("intermediate system to intermediate system")
  ) {
    return "IS-IS";
  }
  return text;
}

function toEnglishTopicName(value) {
  const text = sanitizeTopic(value || "");
  if (!text) return "";
  if (text === DEFAULT_TOPIC) return "Main Quiz";
  if (text.toLowerCase() === "bgp") return "BGP";
  if (text.toLowerCase() === "is-is") return "IS-IS";
  return text;
}

function toEnglishSectionName(value) {
  const text = typeof value === "string" ? value.trim() : "";
  if (!text) return "";
  return sanitizeSection(text);
}

function inferTopic(raw, tags, source) {
  if (typeof raw.topic === "string" && raw.topic.trim()) return raw.topic.trim();
  if (typeof raw.topic_en === "string" && raw.topic_en.trim()) return toGermanTopicName(raw.topic_en.trim());
  const idText = String(raw.id || "").toLowerCase();
  const normalizedSource = String(source || "").toLowerCase();
  const normalizedTags = tags.map((tag) => String(tag || "").trim().toLowerCase());
  const questionText = String(raw.question || "").toLowerCase();
  if (idText.startsWith("bgp-")) return "BGP";
  if (idText.startsWith("isis-") || idText.startsWith("is-is-")) return "IS-IS";
  if (normalizedSource.includes("bgp grundlagen") || normalizedSource.includes("bgp fundamentals")) return "BGP";
  if (
    normalizedSource.includes("is-is") ||
    normalizedSource.includes("isis") ||
    normalizedSource.includes("intermediate system to intermediate system")
  ) {
    return "IS-IS";
  }
  if (normalizedTags.includes("bgp")) return "BGP";
  if (normalizedTags.includes("is-is") || normalizedTags.includes("isis")) return "IS-IS";
  if (questionText.includes("border gateway protocol")) return "BGP";
  if (questionText.includes("intermediate system to intermediate system") || questionText.includes("is-is")) {
    return "IS-IS";
  }
  return DEFAULT_TOPIC;
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

function getNoteStorageKey(q) {
  return getQuestionIdKey(q) || getQuestionStableKey(q) || (q && q.id ? String(q.id) : "");
}

function getNoteSnapshot(q) {
  const key = getNoteStorageKey(q);
  const entry = key && notes[key] ? notes[key] : null;
  return {
    questionId: entry && typeof entry.questionId === "string" ? entry.questionId : (q && q.id ? String(q.id) : ""),
    text: entry && typeof entry.text === "string" ? entry.text : "",
    needsReview: !!(entry && entry.needsReview),
    updatedAt: entry && Number.isFinite(entry.updatedAt) ? entry.updatedAt : 0,
    autoMarkedWrong: !!(entry && entry.autoMarkedWrong),
  };
}

function setNoteSnapshot(q, entry) {
  const key = getNoteStorageKey(q);
  if (!key) return;
  const normalized = {
    questionId: q && q.id ? String(q.id) : "",
    text: typeof entry.text === "string" ? entry.text.trim() : "",
    needsReview: !!entry.needsReview,
    updatedAt: Number.isFinite(entry.updatedAt) ? entry.updatedAt : 0,
    autoMarkedWrong: !!entry.autoMarkedWrong,
  };

  if (!normalized.text && !normalized.needsReview) {
    delete notes[key];
    return;
  }
  notes[key] = normalized;
}

function buildCloudProgressPayload() {
  const payload = {};
  questions.forEach((q) => {
    if (!q || !q.id) return;
    const snapshot = getProgressSnapshot(q);
    if (snapshot.answered > 0 || snapshot.correct > 0) {
      payload[q.id] = {
        answered: snapshot.answered,
        correct: snapshot.correct,
      };
    }
  });
  return payload;
}

function buildCloudNotesPayload() {
  const payload = {};
  questions.forEach((q) => {
    if (!q || !q.id) return;
    const snapshot = getNoteSnapshot(q);
    if (snapshot.text || snapshot.needsReview) {
      payload[q.id] = {
        questionId: q.id,
        text: snapshot.text || "",
        needsReview: !!snapshot.needsReview,
        updatedAt: snapshot.updatedAt || 0,
        autoMarkedWrong: !!snapshot.autoMarkedWrong,
      };
    }
  });
  return payload;
}

function normalizeCloudProgress(value) {
  const out = {};
  if (!value || typeof value !== "object") return out;
  Object.entries(value).forEach(([questionId, entry]) => {
    if (!questionId || !entry || typeof entry !== "object") return;
    const normalized = {
      answered: Number.isFinite(entry.answered) ? entry.answered : 0,
      correct: Number.isFinite(entry.correct) ? entry.correct : 0,
    };
    out[questionId] = normalized;
    out[`id:${questionId}`] = normalized;
  });
  return out;
}

function normalizeCloudNotes(value) {
  const out = {};
  if (!value || typeof value !== "object") return out;
  Object.entries(value).forEach(([questionId, entry]) => {
    if (!questionId || !entry || typeof entry !== "object") return;
    out[`id:${questionId}`] = {
      questionId,
      text: typeof entry.text === "string" ? entry.text : "",
      needsReview: !!entry.needsReview,
      updatedAt: Number.isFinite(entry.updatedAt) ? entry.updatedAt : 0,
      autoMarkedWrong: !!entry.autoMarkedWrong,
    };
  });
  return out;
}

function refreshExport() {
  refs.exportJson.value = JSON.stringify(questions, null, 2);
}

function refreshFilterOptions() {
  const topics = uniqueSorted(questions.map((q) => sanitizeTopic(q.topic)).filter(Boolean));
  const currentTopic = refs.topicSelect.value ? sanitizeTopic(refs.topicSelect.value) : "";
  setSelectOptions(refs.topicSelect, t("learn.allTopics"), topics, currentTopic, (value) =>
    localizeTopicName(value)
  );

  const selectedTopic = refs.topicSelect.value ? sanitizeTopic(refs.topicSelect.value) : "";
  const modules = uniqueSorted(
    questions
      .filter((q) => !selectedTopic || sanitizeTopic(q.topic) === selectedTopic)
      .map((q) => sanitizeModule(q.module))
      .filter(Boolean)
  );
  const currentModule = refs.moduleSelect.value ? sanitizeModule(refs.moduleSelect.value) : "";
  setSelectOptions(refs.moduleSelect, t("learn.allModules"), modules, currentModule, (value) =>
    localizeModuleName(value)
  );
  refreshSectionOptions();
}

function refreshSectionOptions() {
  const selectedTopic = refs.topicSelect.value ? sanitizeTopic(refs.topicSelect.value) : "";
  const selectedModule = refs.moduleSelect.value ? sanitizeModule(refs.moduleSelect.value) : "";
  const sections = uniqueSorted(
    questions
      .filter((q) => !selectedTopic || sanitizeTopic(q.topic) === selectedTopic)
      .filter((q) => !selectedModule || sanitizeModule(q.module) === selectedModule)
      .map((q) => sanitizeSection(q.section))
      .filter(Boolean)
  );
  const currentSection = refs.sectionSelect.value ? sanitizeSection(refs.sectionSelect.value) : "";
  setSelectOptions(refs.sectionSelect, t("learn.allSections"), sections, currentSection, (value) =>
    localizeSectionName(value)
  );
}

function uniqueSorted(values) {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b, "de"));
}

function setSelectOptions(selectEl, allLabel, values, preferredValue, labelFormatter = (value) => value) {
  if (!selectEl) return;
  selectEl.innerHTML = "";
  const allOpt = document.createElement("option");
  allOpt.value = "";
  allOpt.textContent = allLabel;
  selectEl.appendChild(allOpt);

  const seenLabels = new Set();
  values.forEach((value) => {
    const label = labelFormatter(value);
    const labelKey = String(label || "").trim().toLowerCase();
    if (labelKey && seenLabels.has(labelKey)) return;
    if (labelKey) seenLabels.add(labelKey);
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = label;
    selectEl.appendChild(opt);
  });

  if (preferredValue && values.includes(preferredValue)) {
    selectEl.value = preferredValue;
  } else {
    selectEl.value = "";
  }
}

function localizeTopicName(topicName) {
  const text = (topicName || "").trim();
  if (!text) return text;
  if (currentLanguage === "en") {
    return toEnglishTopicName(text);
  }
  return toGermanTopicName(text);
}

function localizeModuleName(moduleName) {
  const text = (moduleName || "").trim();
  if (!text) return text;
  if (currentLanguage === "en") {
    return toEnglishModuleName(text);
  }
  return sanitizeModule(text);
}

function localizeSectionName(sectionName) {
  const text = (sectionName || "").trim();
  if (!text) return text;
  return sanitizeSection(text);
}

function getLocalizedField(q, baseField) {
  const deValue = q && typeof q[baseField] === "string" ? q[baseField] : "";
  const enValue = q && typeof q[`${baseField}_en`] === "string" ? q[`${baseField}_en`] : "";
  if (currentLanguage === "en") {
    return (enValue && enValue.trim()) || autoTranslateDeToEn(deValue);
  }
  return (deValue && deValue.trim()) || enValue;
}

function getLocalizedOptions(q) {
  const deOptions = Array.isArray(q.options) ? q.options : [];
  const enOptions = Array.isArray(q.options_en) ? q.options_en : [];
  if (currentLanguage === "en") {
    if (enOptions.length === deOptions.length && enOptions.every((o) => String(o).trim().length > 0)) {
      return enOptions.map((o) => String(o));
    }
    return deOptions.map((o) => autoTranslateDeToEn(String(o)));
  }
  return deOptions;
}

function getLocalizedTopic(q) {
  const topicDe = q && typeof q.topic === "string" ? q.topic : DEFAULT_TOPIC;
  const topicEn = q && typeof q.topic_en === "string" ? q.topic_en : "";
  if (currentLanguage === "en") {
    return topicEn.trim() || localizeTopicName(topicDe);
  }
  return toGermanTopicName(topicDe);
}

function getLocalizedModule(q) {
  const moduleDe = q && typeof q.module === "string" ? q.module : DEFAULT_MODULE;
  const moduleEn = q && typeof q.module_en === "string" ? q.module_en : "";
  if (currentLanguage === "en") {
    return moduleEn.trim() || localizeModuleName(moduleDe);
  }
  return moduleDe;
}

function getLocalizedSection(q) {
  const sectionDe = q && typeof q.section === "string" ? q.section : DEFAULT_SECTION;
  const sectionEn = q && typeof q.section_en === "string" ? q.section_en : "";
  if (currentLanguage === "en") {
    return sectionEn.trim() || localizeSectionName(sectionDe);
  }
  return sectionDe;
}

const DE_EN_REPLACEMENTS = [
  ["nicht ganz", "not quite"],
  ["richtig", "correct"],
  ["frage", "question"],
  ["antwort", "answer"],
  ["welche", "which"],
  ["was", "what"],
  ["warum", "why"],
  ["wie", "how"],
  ["wofuer", "what is used for"],
  ["wodurch", "through what"],
  ["trifft am besten zu", "is most accurate"],
  ["am besten", "best"],
  ["am ehesten", "most likely"],
  ["hauptrolle", "main role"],
  ["hauptgrund", "main reason"],
  ["herausforderung", "challenge"],
  ["provider-sicht", "provider perspective"],
  ["kundensicht", "customer perspective"],
  ["kunden", "customer"],
  ["kundenverkehr", "customer traffic"],
  ["kundendaten", "customer data"],
  ["netzwerk", "network"],
  ["netzwerke", "networks"],
  ["netz", "network"],
  ["core", "core"],
  ["service", "service"],
  ["services", "services"],
  ["service-label", "service label"],
  ["transport-label", "transport label"],
  ["transport", "transport"],
  ["weiterleitung", "forwarding"],
  ["weitergeleitet", "forwarded"],
  ["routing", "routing"],
  ["signalisierung", "signaling"],
  ["kapselung", "encapsulation"],
  ["encapsulation", "encapsulation"],
  ["ingress", "ingress"],
  ["egress", "egress"],
  ["richtig ist", "is correct"],
  ["falsch", "wrong"],
  ["wichtig", "important"],
  ["optional", "optional"],
  ["typischerweise", "typically"],
  ["hauptunterschied", "main difference"],
  ["genutzt", "used"],
  ["unterstuetzt", "supports"],
  ["skaliert", "scales"],
  ["skalierung", "scalability"],
  ["effizienz", "efficiency"],
  ["bandbreite", "bandwidth"],
  ["beim", "at the"],
  ["im", "in the"],
  ["und", "and"],
  ["oder", "or"],
  ["fuer", "for"],
  ["zum", "for the"],
  ["zur", "for the"],
  ["mit", "with"],
  ["ueber", "over"],
  ["durch", "through"],
  ["ohne", "without"],
  ["mehrere", "multiple"],
  ["einzige", "single"],
  ["privates", "private"],
  ["virtuelles", "virtual"],
  ["legacy", "legacy"],
  ["gleichzeitig", "at the same time"],
  ["stetig", "steadily"],
  ["sinkend", "decreasing"],
];

function autoTranslateDeToEn(text) {
  if (!text || typeof text !== "string") return "";
  let out = text;
  DE_EN_REPLACEMENTS.forEach(([de, en]) => {
    const pattern = new RegExp(`\\b${escapeRegExp(de)}\\b`, "gi");
    out = out.replace(pattern, (match) => {
      if (match === match.toUpperCase()) return en.toUpperCase();
      if (match[0] === match[0].toUpperCase()) return en[0].toUpperCase() + en.slice(1);
      return en;
    });
  });
  out = out.replace(/\s{2,}/g, " ").trim();
  return out;
}

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function refreshStats() {
  const scopedQuestions = getOverviewScopeQuestions();
  const total = scopedQuestions.length;
  const answeredQuestions = scopedQuestions.filter((q) => getProgressSnapshot(q).answered > 0);
  const correctQuestions = answeredQuestions.filter((q) => getProgressSnapshot(q).correct > 0);
  const answered = answeredQuestions.length;
  const correct = correctQuestions.length;
  const accuracy = answered > 0 ? (correct / answered) * 100 : 0;

  refs.statTotal.textContent = String(total);
  refs.statAnswered.textContent = String(answered);
  refs.statCorrect.textContent = String(correct);
  refs.statAccuracy.textContent = `${accuracy.toFixed(1)}%`;
  updateOverviewScopeLabel();
  refreshScopedStats();
  refreshAreaStats();
  renderReviewList();
}

function getOverviewScopeQuestions() {
  const selectedTopic = refs.topicSelect.value ? sanitizeTopic(refs.topicSelect.value) : "";
  const selectedModule = refs.moduleSelect.value ? sanitizeModule(refs.moduleSelect.value) : "";

  return questions.filter((q) => {
    const topic = sanitizeTopic(q.topic || DEFAULT_TOPIC);
    const module = sanitizeModule(q.module || DEFAULT_MODULE);
    if (selectedTopic && topic !== selectedTopic) return false;
    if (selectedModule && module !== selectedModule) return false;
    return true;
  });
}

function getOverviewScopeLabel() {
  const selectedTopic = refs.topicSelect.value ? sanitizeTopic(refs.topicSelect.value) : "";
  const selectedModule = refs.moduleSelect.value ? sanitizeModule(refs.moduleSelect.value) : "";

  if (selectedTopic && selectedModule) {
    return `${localizeTopicName(selectedTopic)} / ${localizeModuleName(selectedModule)}`;
  }
  if (selectedTopic) {
    return localizeTopicName(selectedTopic);
  }
  if (selectedModule) {
    return localizeModuleName(selectedModule);
  }
  return t("overview.allModules");
}

function updateOverviewScopeLabel() {
  if (!refs.overviewScope) return;
  refs.overviewScope.textContent = t("overview.scopeLabel", { area: getOverviewScopeLabel() });
}

function refreshScopedStats() {
  if (!refs.scopeStats || !refs.scopeStatsBody) return;

  const selectedModule = refs.moduleSelect.value ? sanitizeModule(refs.moduleSelect.value) : "";
  const selectedSection = refs.sectionSelect.value ? sanitizeSection(refs.sectionSelect.value) : "";

  if (!selectedModule && !selectedSection) {
    refs.scopeStats.classList.add("hidden");
    refs.scopeStatsBody.textContent = "";
    return;
  }

  const filtered = applyFilter(
    questions,
    refs.tagFilterInput.value || "",
    refs.topicSelect.value || "",
    refs.moduleSelect.value || "",
    refs.sectionSelect.value || ""
  );

  const total = filtered.length;
  const answeredQuestions = filtered.filter((q) => getProgressSnapshot(q).answered > 0);
  const answered = answeredQuestions.length;
  const correct = answeredQuestions.filter((q) => getProgressSnapshot(q).correct > 0).length;
  const wrong = answeredQuestions.filter((q) => getProgressSnapshot(q).correct === 0).length;
  const open = Math.max(0, total - answered);
  const rate = answered > 0 ? ((correct / answered) * 100).toFixed(1) : "0.0";

  const areaParts = [];
  const selectedTopic = refs.topicSelect.value ? sanitizeTopic(refs.topicSelect.value) : "";
  if (selectedTopic) areaParts.push(localizeTopicName(selectedTopic));
  if (selectedModule) areaParts.push(localizeModuleName(selectedModule));
  if (selectedSection) areaParts.push(localizeSectionName(selectedSection));
  const areaLabel = areaParts.join(" / ");

  refs.scopeStatsTitle.textContent = t("learn.scopeStatsTitle");
  refs.scopeStatsBody.textContent = `${t("overview.scopeArea", { area: areaLabel })} | ${t("overview.scopeMetrics", {
    questions: total,
    answered,
    correct,
    wrong,
    open,
    rate,
  })}`;
  refs.scopeStats.classList.remove("hidden");
}

function refreshAreaStats() {
  if (!refs.areaStats) return;

  const grouped = new Map();
  questions.forEach((q) => {
    const topic = sanitizeTopic(q.topic || DEFAULT_TOPIC);
    const module = sanitizeModule(q.module || DEFAULT_MODULE);
    const key = `${topic}||${module}`;
    const p = getProgressSnapshot(q);
    if (!grouped.has(key)) {
      grouped.set(key, { topic, module, questions: 0, answered: 0, correct: 0 });
    }
    const item = grouped.get(key);
    item.questions += 1;
    if (p.answered > 0) item.answered += 1;
    if (p.correct > 0) item.correct += 1;
  });

  const selectedTopic = refs.topicSelect.value ? sanitizeTopic(refs.topicSelect.value) : "";
  const selectedModule = refs.moduleSelect.value ? sanitizeModule(refs.moduleSelect.value) : "";
  refs.areaStats.innerHTML = "";

  const areas = Array.from(grouped.values())
    .filter((area) => {
      if (selectedTopic && area.topic !== selectedTopic) return false;
      if (selectedModule && area.module !== selectedModule) return false;
      return true;
    })
    .sort((a, b) => {
      const byTopic = a.topic.localeCompare(b.topic, "de");
      if (byTopic !== 0) return byTopic;
      return a.module.localeCompare(b.module, "de");
    });

  if (areas.length === 0) {
    const li = document.createElement("li");
    li.textContent = t("overview.noAreas");
    refs.areaStats.appendChild(li);
    return;
  }

  areas.forEach((area) => {
    const li = document.createElement("li");
    const hitRate = area.answered > 0 ? ((area.correct / area.answered) * 100).toFixed(1) : "0.0";
    const open = Math.max(0, area.questions - area.answered);

    const name = document.createElement("span");
    name.className = "area-name";
    name.textContent = `${localizeTopicName(area.topic)} / ${localizeModuleName(area.module)}`;

    const metrics = document.createElement("span");
    metrics.className = "area-metrics";
    metrics.textContent = t("overview.areaMetrics", {
      questions: area.questions,
      answered: area.answered,
      open,
      rate: hitRate,
    });

    li.appendChild(name);
    li.appendChild(metrics);
    refs.areaStats.appendChild(li);
  });
}

function buildQuestionFromForm() {
  const options = [refs.qOpt0.value, refs.qOpt1.value, refs.qOpt2.value, refs.qOpt3.value].map((v) =>
    v.trim()
  );
  const questionText = refs.qQuestion.value.trim();
  const explanationText = refs.qExplanation.value.trim();
  const sourceText = refs.qSource.value.trim();
  const topicText = sanitizeTopic(refs.qTopic.value || refs.topicSelect.value || DEFAULT_TOPIC);
  const moduleText = sanitizeModule(refs.qModule.value || refs.moduleSelect.value);
  const sectionText = sanitizeSection(refs.qSection.value || refs.sectionSelect.value);
  const tags = refs.qTags.value
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return {
    id: `q-${Date.now()}-${Math.floor(Math.random() * 100000)}`,
    question: questionText,
    question_en: autoTranslateDeToEn(questionText),
    options,
    options_en: options.map((option) => autoTranslateDeToEn(option)),
    correctIndex: Number(refs.qCorrect.value),
    explanation: explanationText,
    explanation_en: autoTranslateDeToEn(explanationText),
    tags,
    source: sourceText,
    source_en: autoTranslateDeToEn(sourceText),
    topic: topicText,
    topic_en: toEnglishTopicName(topicText),
    module: moduleText,
    module_en: toEnglishModuleName(moduleText),
    section: sectionText,
    section_en: toEnglishSectionName(sectionText),
  };
}

function importJson(replace) {
  const raw = refs.importJson.value.trim();
  if (!raw) {
    setStatus(t("status.importPrompt"));
    return;
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      throw new Error(t("status.importArrayError"));
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
    setStatus(t("status.importSuccess", { count: questions.length }));
  } catch (err) {
    setStatus(t("status.importFailed", { msg: err.message }));
  }
}

async function syncSeedKeepProgress() {
  try {
    let seedQuestions = await loadSeedQuestionsFromFile();
    if (seedQuestions.length === 0) {
      seedQuestions = normalizeQuestions(getBundledSeedQuestions());
    }
    if (seedQuestions.length === 0) {
      throw new Error(currentLanguage === "en" ? "Seed file could not be loaded." : "Seed-Datei konnte nicht geladen werden.");
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
    setStatus(t("status.seedUpdated", { count: questions.length }));
  } catch (err) {
    setStatus(t("status.seedUpdateFailed", { msg: err.message }));
  }
}

function nextQuestion() {
  if (questions.length === 0) {
    setStatus(t("status.noQuestions"));
    return;
  }

  answerLocked = false;
  refs.answerWrap.classList.add("hidden");

  const filtered = applyFilter(
    questions,
    refs.tagFilterInput.value,
    refs.topicSelect.value,
    refs.moduleSelect.value,
    refs.sectionSelect.value
  );
  if (filtered.length === 0) {
    setStatus(t("status.noFilterMatch"));
    resetQuestionCard();
    return;
  }

  const selected = pickQuestion(filtered, refs.modeSelect.value);
  currentQuestion = selected;
  renderQuestion(selected);
}

function applyFilter(items, rawFilter, topicFilter, moduleFilter, sectionFilter) {
  const filter = rawFilter.trim().toLowerCase();
  const wantedTopic = topicFilter ? sanitizeTopic(topicFilter) : "";
  const wantedModule = moduleFilter ? sanitizeModule(moduleFilter) : "";
  const wantedSection = sectionFilter ? sanitizeSection(sectionFilter) : "";
  return items.filter((q) => {
    if (wantedTopic && sanitizeTopic(q.topic) !== wantedTopic) return false;
    if (wantedModule && sanitizeModule(q.module) !== wantedModule) return false;
    if (wantedSection && sanitizeSection(q.section) !== wantedSection) return false;
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
  refs.questionTitle.textContent = getLocalizedField(q, "question");
  const area = `${getLocalizedTopic(q)} / ${getLocalizedModule(q)} / ${getLocalizedSection(q)}`;
  const tags = (q.tags || []).join(", ");
  const source = getLocalizedField(q, "source");
  const metaParts = [`${t("question.areaPrefix")}: ${area}`];
  if (tags) metaParts.push(`${t("question.tagsPrefix")}: ${tags}`);
  if (source) metaParts.push(`${t("question.sourcePrefix")}: ${source}`);
  refs.questionMeta.textContent = metaParts.join(" | ");
  refs.optionsWrap.innerHTML = "";

  const localizedOptions = getLocalizedOptions(q);
  currentOptionOrder = shuffledIndices(localizedOptions.length);

  currentOptionOrder.forEach((originalIdx, displayIdx) => {
    const option = localizedOptions[originalIdx];
    const optionText =
      typeof option === "string" && option.trim().length > 0 ? option : t("question.missingOption");
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
  renderNotesPanel();
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

  if (!isCorrect) {
    const note = getNoteSnapshot(currentQuestion);
    note.needsReview = true;
    note.autoMarkedWrong = true;
    note.updatedAt = Date.now();
    setNoteSnapshot(currentQuestion, note);
    saveNotes();
  }

  refreshStats();

  refs.answerResult.textContent = isCorrect ? t("question.resultCorrect") : t("question.resultWrong");
  refs.answerResult.style.color = isCorrect ? "var(--ok)" : "var(--bad)";
  refs.answerExplanation.textContent =
    getLocalizedField(currentQuestion, "explanation") || t("question.noExplanation");
  refs.answerWrap.classList.remove("hidden");
  renderNotesPanel();
  showFactPopup(currentQuestion, isCorrect);
}

function resetQuestionCard() {
  currentQuestion = null;
  currentOptionOrder = [];
  answerLocked = false;
  refs.questionTitle.textContent = t("question.readyTitle");
  refs.questionMeta.textContent = t("question.readyMeta");
  refs.optionsWrap.innerHTML = "";
  refs.answerWrap.classList.add("hidden");
  renderNotesPanel();
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

  const title = isCorrect ? t("popup.titleCorrect") : t("popup.titleWrong");
  const baseInfo =
    getLocalizedField(question, "extraInfo") ||
    getLocalizedField(question, "explanation") ||
    t("popup.fallbackInfo");
  const tipText = getLocalizedField(question, "tip");
  const tip =
    !isCorrect && tipText.trim().length > 0 ? ` ${t("popup.tipPrefix", { tip: tipText.trim() })}` : "";

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
