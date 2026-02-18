# Study Quiz App

Lokale Lern-Webapp fuer Multiple-Choice-Training mit eigener Fragenbasis.

## Was die App kann
- Multiple-Choice Fragen loesen
- Lernmodi: `Gemischt`, `Schwachstellen zuerst`, `Neue Fragen zuerst`
- Filter nach `Modul` und `Section`
- Tag-Filter fuer Themengebiete
- Eigene Fragen direkt in der App anlegen
- Fragen per JSON importieren und exportieren
- Antwort-Feedback als kleines Popup mit Zusatzinfo (richtig/falsch)
- Lernfortschritt lokal im Browser speichern
- Lernfortschritt in Browser-Datenbank (IndexedDB) + localStorage-Fallback
- Seed-Updates ohne Fortschrittverlust (`Seed aktualisieren`)
- Bereichsstatistik pro `Modul/Section`
- Wissenssammlung in `wissensbasis_einfach.md`

## Projektstruktur
- `index.html` - App-Oberflaeche
- `styles.css` - Layout und Design
- `app.js` - Logik (Quiz, Modi, Speicher, Import/Export)
- `questions.seed.json` - Start-Fragen
- `wissensbasis_einfach.md` - geordnete, einfache Zusammenfassung des Lernstoffs

## Schnellstart (empfohlen)
1. In den Projektordner wechseln:
```powershell
cd C:\Users\Fabio\.codex\apps\study-quiz
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
1. `C:\Users\Fabio\.codex\apps\study-quiz\index.html` direkt im Browser oeffnen.
2. Hinweis: Je nach Browser koennen lokale Sicherheitsregeln einzelne Features einschraenken. Daher ist der Server-Modus stabiler.

## Bedienung
1. Lernmodus auswaehlen.
2. Optional Tags setzen, um ein Thema zu trainieren.
3. Antworten und Erklaerung lesen.
4. Schwachstellen-Modus nutzen, um falsch beantwortete Fragen gezielt zu wiederholen.
5. Eigene Fragen per Formular erfassen oder per JSON importieren.

## Fragenformat (JSON)
Die App erwartet ein JSON-Array aus Frageobjekten:

```json
[
  {
    "id": "q-123",
    "question": "Frage?",
    "options": ["A", "B", "C", "D"],
    "correctIndex": 2,
    "explanation": "Warum C richtig ist",
    "extraInfo": "Kurzer Zusatzkontext fuer Popup/Verstaendnis",
    "tip": "Hinweis, der vor allem bei falscher Antwort hilft",
    "module": "Modul 1",
    "section": "Section 2",
    "tags": ["Kapitel 1", "Definition"],
    "source": "Folie 42"
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
- `extraInfo`
- `tip`
- `module`
- `section`
- `tags`
- `source`

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
cd C:\Users\Fabio\.codex\apps\study-quiz
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
