# Study Quiz App

Kleine lokale Webapp zum Auswendiglernen mit Multiple-Choice.

## Features
- Fragen beantworten (MCQ)
- Modi:
  - `Gemischt`
  - `Schwachstellen zuerst`
  - `Neue Fragen zuerst`
- Tag-Filter
- Eigene Fragen ueber Formular bauen
- JSON Import/Export
- Lernfortschritt (lokal im Browser)
- Zentrale Wissenssammlung:
  - `wissensbasis_einfach.md`

## Start
Option A (einfach):
1. In `apps/study-quiz/` wechseln
2. Datei `index.html` im Browser oeffnen

Option B (stabiler, empfohlen):
1. In `apps/study-quiz/` wechseln
2. Lokalen Server starten, z. B.:
   - `python -m http.server 8080`
3. Browser: `http://localhost:8080`

## Frage-Format (JSON)
```json
[
  {
    "id": "q-123",
    "question": "Frage?",
    "options": ["A", "B", "C", "D"],
    "correctIndex": 2,
    "explanation": "Warum C richtig ist",
    "tags": ["Kapitel 1", "Definition"],
    "source": "Folie 42"
  }
]
```

## Workflow fuer unseren Kurs
1. Du gibst mir Folieninhalt in kleinen Bloecken.
2. Ich baue daraus MCQ-Fragen.
3. Ich pflege parallel die Wissenszusammenfassung in:
   - `wissensbasis_einfach.md`
4. Wir importieren die Fragen gesammelt als JSON in die App.

## Als GitHub-Projekt veroeffentlichen
Projektordner:
- `apps/study-quiz`

### 1) Lokal initialisieren
```powershell
cd C:\Users\Fabio\.codex\apps\study-quiz
git init
git add .
git commit -m "Initial release: Study Quiz App"
```

### 2) Neues Repo auf GitHub erstellen
- Repo Name z. B.: `study-quiz-app`
- Danach Remote setzen:

```powershell
git branch -M main
git remote add origin https://github.com/<dein-user>/study-quiz-app.git
git push -u origin main
```

### 3) Optional: GitHub Pages aktivieren
- Repo Settings -> Pages
- Source: `Deploy from a branch`
- Branch: `main`, Folder: `/ (root)`

Dann ist die App direkt im Browser nutzbar.
