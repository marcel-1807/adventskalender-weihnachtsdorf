# Unser kleines Weihnachtsdorf – Adventskalender

## Lokal starten
1. ZIP entpacken.
2. Den Ordner `adventskalender-weihnachtsdorf` in VS Code öffnen.
3. `index.html` im Browser öffnen. Bequemer ist die VS-Code-Erweiterung **Live Server**: Rechtsklick auf `index.html` → **Open with Live Server**.
4. Alle Türchen zum Testen öffnen: URL um `?preview=1` ergänzen, z. B. `http://127.0.0.1:5500/?preview=1`.

## Überraschungen ändern
Öffne `surprises.js`. Dort kannst du für jedes Datum `title` und `message` anpassen. Du kannst z. B. Gutscheine, persönliche Nachrichten, Links oder kleine Aufgaben eintragen. Schreibe Texte in Anführungszeichen; für einen Zeilenumbruch kannst du `\n` verwenden.

## GitHub mit VS Code verbinden
1. Auf https://github.com einloggen und ein neues Repository erstellen: **New repository**.
2. Name z. B. `weihnachtsdorf-adventskalender`. Für die kostenlose Veröffentlichung mit GitHub Pages muss das Repository öffentlich sein. Keine privaten Daten, Passwörter oder sensiblen Fotos einchecken.
3. Git installieren (falls noch nicht vorhanden): https://git-scm.com/downloads. In VS Code anmelden: Accounts-Symbol → **Sign in with GitHub**.
4. Den Projektordner in VS Code öffnen. Terminal → New Terminal und nacheinander ausführen:

```bash
git init
git add .
git commit -m "Adventskalender erstellt"
git branch -M main
git remote add origin https://github.com/DEIN-BENUTZERNAME/weihnachtsdorf-adventskalender.git
git push -u origin main
```

Ersetze `DEIN-BENUTZERNAME` durch deinen GitHub-Nutzernamen und passe den Repository-Namen an.
Bei späteren Änderungen:

```bash
git add .
git commit -m "Überraschungen aktualisiert"
git push
```

Alternative ohne Terminal: In VS Code links **Source Control** öffnen → **Initialize Repository** → Änderungen stagen → Commit schreiben → **Publish Branch**.

## Website kostenlos veröffentlichen (GitHub Pages)
1. Repository auf GitHub öffnen.
2. **Settings → Pages** auswählen.
3. Unter **Build and deployment** bei Source **Deploy from a branch** auswählen.
4. Branch `main`, Ordner `/ (root)` auswählen und **Save** klicken.
5. Nach dem Deployment findest du die Website unter:
   `https://DEIN-BENUTZERNAME.github.io/weihnachtsdorf-adventskalender/`

Die Veröffentlichung kann ein paar Minuten dauern. Das Repository ist bei dieser kostenlosen Variante öffentlich; die Website ist über den Link erreichbar. Der Link ist nicht geheim – wer ihn kennt, kann die Seite öffnen.

## So funktioniert das Türchen-Datum
- Türchen 1–24 werden im Dezember erst am jeweiligen Kalendertag freigeschaltet.
- Außerhalb des Dezembers bleiben sie standardmäßig geschlossen.
- Zum Testen kannst du `?preview=1` an die URL hängen. Dies ist nur eine Vorschau-Sperre im Browser, keine echte Zugriffskontrolle.

## Dateien
- `index.html` – Seitenstruktur
- `style.css` – Gestaltung und Schneefall
- `script.js` – Türchen, Datumssperre und Dialog
- `surprises.js` – deine persönlichen Inhalte
- `assets/winterdorf.jpg` – Winterdorf-Hintergrund
