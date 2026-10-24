# Kartenreich · Das Buch zum Blättern

Text und Gestaltung: Frank Zimmermann

Das digitale Kartenreich-Buch: alle 78 Karten mit Bild, Bedeutung, Licht und Schatten, der Frage der Karte und einem Impuls. Mit echtem Umblättern, Zoom, Klangraum und Installation als App.

## Sofort ansehen
ZIP entpacken und `index.html` doppelklicken. Beim ersten Öffnen braucht der Browser Internet für die Schriften. Die Blätter-Funktion liegt im Ordner (`page-flip.browser.js`).

## Auf GitHub Pages veröffentlichen
1. Alle Dateien dieses Ordners (96 Dateien, passt in einen Upload) in ein GitHub-Repository hochladen, am besten in einen eigenen Unterordner, z. B. `buch/` (dann stört es eure bestehende Seite nicht). Die versteckte Datei `.nojekyll` gehört dazu.
2. Im Repository unter **Settings → Pages** die Veröffentlichung aus dem Branch `main` einschalten.
3. Das Buch ist dann erreichbar unter `https://<name>.github.io/<repo>/buch/`.

## Als App mit Desktop-Icon
Auf der veröffentlichten Seite oben auf **„Als App“** klicken. Chrome und Edge installieren das Buch mit eigenem Icon, auf dem iPhone über *Teilen → Zum Home-Bildschirm*. Danach ist es auch offline lesbar. Das funktioniert nur über die GitHub-Adresse (https), nicht aus der entpackten Datei.

## Bedienung
- Blättern: Seitenecke greifen und ziehen, auf die Seite klicken, Pfeiltasten oder Wischen
- Zoom: Lupe oben, Taste `+`; im Zoom mit den Pfeilen weiterblättern, Strg + Mausrad oder zwei Finger zum Vergrößern
- Inhalt: Kapitel und alle 78 Karten zum direkten Springen
- Klangraum: acht ruhige Stimmungen, Lautstärke, leises Rascheln beim Umblättern
- Direktlink zu einer Karte: `…/index.html#g13` (Der Tod), `#s1_0` (Ass der Kelche) usw.

## Bei Änderungen
Nach dem Ändern von Dateien in `sw.js` die `VERSION` hochzählen, damit installierte Apps die neue Fassung bekommen.

## Hinweis zu Safari (Mac, iPad, iPhone)
In Safari läuft das Buch ohne die schwebende 3D-Neigung, weil WebKit verschachteltes 3D mit Überblendung und Filtern fehlerhaft darstellt. Blättern, Zoom, Klangraum und App-Installation funktionieren unverändert.
