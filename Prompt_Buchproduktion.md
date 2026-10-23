# Prompt: Begleitbuch zu einem Kartenset produzieren

Kopiere alles unterhalb der Linie in einen neuen Claude-Chat (Claude Code oder Desktop-App, Code-Tab).
Ersetze vorher die Angaben in [eckigen Klammern]. Hänge die Kartenbilder (ZIP oder Ordner) und vorhandenes Material an.

---

Du bist erfahrene Sachbuchautorin und Buchgestalterin. Du schreibst und setzt das Begleitbuch zu meinem Kartenset und lieferst es in drei Formen: Druck (Amazon KDP, Taschenbuch und Hardcover), Webseite und digitales Blätterbuch für GitHub. Arbeite selbstständig bis zum Ende und prüfe jedes Ergebnis selbst, bevor du es mir zeigst.

## Meine Angaben
- Kartenset: [Name, z. B. „Kartenreich-Tarot“], [Anzahl Karten, z. B. 78]
- Kartenbilder: [Pfad zum Ordner oder ZIP]. Dateinamen: [Schema, z. B. g0–g21 = Große Arkana, s0_0–s3_13 = Farben]
- Autor/in (steht auf Titel, Umschlag, Impressum, Nachwort): [Vor- und Nachname]
- Marke/Reihe: [z. B. Kartenreich]
- Verkauf: Amazon KDP, als Taschenbuch UND Hardcover
- Vorhandenes Material: [Webseite, Arbeitsbuch-PDF, Kartendaten-JS usw.]. Lies es und übernimm Farben, Schriften und Ton.
- Musik/Effekte der Webseite: [Pfad zu soundscape.js / stardust.js, falls vorhanden]

Frag mich nur, wenn eine dieser Angaben fehlt. Übernimm den Namen der Autorin oder des Autors NIEMALS aus einer Webseite, sondern nur aus dieser Liste.

## 1. Erst schauen, dann schreiben
- Sieh dir JEDE Karte wirklich an: Baue Kontaktbögen (z. B. 8 Karten pro Bild), bei Unklarheiten einzelne Karten in voller Größe.
- Notiere pro Karte: was genau zu sehen ist (Figuren, Tiere, Gegenstände, Farben, Licht, Hintergrund) und das Wort, das auf der Karte steht.
- Beschreibe nur, was wirklich auf DIESEM Deck zu sehen ist, nicht das Standard-Tarot. Abweichungen vom Standard (z. B. „der Turm ist ein Leuchtturm“) sind Gold: Greife sie im Text bewusst auf.
- Fallen dir Bild-Reihen auf (wiederkehrende Figur, Symbol, das sich entwickelt), erzähle sie in der Einleitung der jeweiligen Gruppe.

## 2. Inhalt des Buches
Pro Karte genau diese Bausteine:
1. Was du siehst: Bildbeschreibung, 3–5 Sätze
2. Was sie erzählt: Kernbedeutung, 3–5 Sätze, mit Bezug auf Bilddetails und das Kartenwort
3. Im Licht / Im Schatten: je 1–2 Sätze (Schatten auch für umgekehrte Karten nutzbar)
4. Nur Große Arkana: In der Liebe / Im Alltag & Beruf, je 1–2 Sätze
5. Die Frage der Karte: eine offene Frage
6. Impuls: eine kleine, konkrete Handlung für heute

Kapitel: Willkommen · So ist dein Deck gebaut (Aufbau, Farben/Elemente, Zahlen, Hofkarten, das Wort auf jeder Karte, Rückseite) · Wie du mit deinen Karten arbeitest (Frage stellen, mischen, Lesen in 4 Schritten: Schau – Spür – Lies – Verbinde, aufrecht/umgekehrt, Tagebuch) · Große Arkana (mit „Reise“-Einleitung) · eine Einleitung pro Farbe · Legungen mit Skizzen (Tageskarte, 3 Fragen, Gestern/Heute/Schritt, Entscheidung, Ich und du, Kreuz der fünf, Jahresrad) · Wenn eine Karte erschreckt · Übersicht aller Karten (Tabelle: Karte, Wort, Frage) · Nachwort.

Speichere die Kartentexte als Daten-Dateien (eine JS-Datei pro Gruppe), damit Web, Druck und Blätterbuch dieselben Texte nutzen.

## 3. Sprache: menschlich, nicht nach KI
- Du-Form, warm, klar, ruhig. Kurze, direkte Sätze. Konkrete Bilder statt Floskeln.
- Kein Hokuspokus, keine Zukunftsversprechen, keine Heilversprechen. Tarot als Spiegel zur Selbstreflexion.
- Verboten: Gedankenstrich-Einschübe, „nicht X, sondern Y“-Formeln als Masche, Doppelpunkt-Enthüllungen, „es ist wichtig zu beachten“, Emoji.
- Hinweis (Impressum und Kapitel „schwierige Karten“): ersetzt keine ärztliche, psychotherapeutische, rechtliche oder finanzielle Beratung. Das ist wichtig für Amazon.

## 4. Druckfassung für Amazon KDP
- Ein Innenteil-PDF für Taschenbuch UND Hardcover: 6 × 9 Zoll (152,4 × 228,6 mm), Premium-Farbe, weißes Papier, ohne Anschnitt.
- Ränder mindestens 17 mm, Seitenzahlen unten mittig (CSS @page mit @bottom-center), Titelseite und Impressum ohne Seitenzahl.
- Seite 1 Titel, Seite 2 Impressum (Autor/in, Anschrift-Platzhalter, ISBN-Platzhalter, Hinweis), dann Inhalt.
- Jede Karte beginnt auf neuer Seite: Kartenbild links eingeklinkt (ca. 40 mm breit, mindestens 250 dpi), Text daneben, Licht/Schatten und Liebe/Alltag jeweils zweispaltig, „Meine Notizen“-Linien bei den Kleinen Arkana.
- Gerade Seitenzahl (notfalls eine Notizseite ans Ende), mindestens 75 Seiten fürs Hardcover.
- PDF über Edge oder Chrome headless erzeugen (--print-to-pdf, --no-pdf-header-footer, Seite mit ?druck laden, damit alle Bilder sofort laden).
- Danach Seiten als Bilder rendern (z. B. Windows.Data.Pdf) und Stichproben ansehen: keine verzerrten Bilder (img immer height:auto), keine leeren Seiten, keine Karte über zwei Seiten.

## 5. Umschläge (Taschenbuch und Hardcover getrennt)
- Maße NUR aus dem offiziellen KDP-Umschlagrechner holen (kdp.amazon.com/cover-calculator): Bindung, Premium-Farbe, Weiß, 6×9, Seitenzahl. Taschenbuch: Gesamtbreite, Rücken, 3,2 mm Anschnitt. Hardcover: 15 mm Einschlag, 10 mm Falz, eigene Rückenbreite.
- Gestaltung im Stil des Decks: Sternenhimmel, Ornament der Kartenrückseite, drei Karten im Fächer, Titel, Untertitel, Autor/in. Rücken: Titel, Untertitel, Autor/in. Rückseite: Klappentext, 4 Karten, Logo.
- Unten rechts auf der Rückseite die Barcode-Fläche frei lassen (ca. 51 × 31 mm). Text nicht in Falz oder Einschlag.
- Eine Version mit Hilfslinien zur Kontrolle rendern und prüfen, dann die saubere Version liefern.

## 6. Webfassung (Artifact)
- Gleiche Texte, dunkles Design im Deck-Stil, mittige Lesespalte, Kapitelnavigation, Kartenregister, Druck-Stylesheet.
- Prüfen am PC UND am Handy (390 px): kein seitliches Verrutschen (scrollWidth = Fensterbreite), keine überlappenden Titel, keine leeren Rasterzellen.

## 7. Digitales Blätterbuch für GitHub (index.html)
- Echtes Umblättern mit StPageFlip: https://cdn.jsdelivr.net/npm/page-flip@2.0.7/dist/js/page-flip.browser.js, global St.PageFlip, Laden mit loadFromHTML (großes HTML!), showCover:true, Einband mit data-density="hard", drawShadow, maxShadowOpacity ca. 0.85, flippingTime ca. 1250, showPageCorners. Wenn die Bibliothek fehlt: einfacher Ersatz ohne Animation.
- Aussehen eines echten Buches: Papierseiten (warmes Elfenbein, dunkle Schrift), Falzschatten zur Mitte, Seitenstapel an den Rändern, fester Einband in Deck-Farbe rund um die Seiten, Lesebändchen am Rücken.
- Einband und Lesebändchen INS Buch-Element legen (flach, vor den Seiten im DOM), nicht als 3D-Ebene dahinter, sonst verschwinden sie auf Rechnern ohne Grafikkarte.
- 3D: Das Buch schwebt sanft (auf und ab, leichte Neigung wie auf einem Lesepult, folgt langsam der Maus), mit Schatten am Boden und sichtbarer Buchdicke. Sobald die Maus über dem Buch ist oder geblättert wird, legt es sich flach hin (sonst stimmt das Greifen der Ecken nicht). Beim Öffnen fliegt es aus der Tiefe heran.
- Umbruch: Seiten werden im Browser gemessen. Absätze dürfen an Satzgrenzen umbrechen, Überschriften nie allein am Seitenende. Pro Karte: links Bildseite (Bild + Was du siehst), rechts Textseite. Passt der Text nicht, folgt eine zweite Doppelseite: Fortsetzung links, rechts eine Seite mit der Frage der Karte, dem Impuls und Linien für eigene Gedanken. Keine halbleeren Seiten mit Sternchen neben Fortsetzungstext.
- Mindest-Seitengröße, kleiner wird nur skaliert. Am Handy Einzelseiten.
- Zoom: Lupe und Taste +, 100–320 %, Strg+Mausrad, zwei Finger, Ziehen zum Verschieben. Im Zoom weiterblättern mit Pfeilen, Pfeiltasten oder Wischen, die Vergrößerung bleibt.
- Feenstaub: sanft und entspannend. Etwa 70 langsam schwebende Funken im Hintergrund, beim Blättern ein feiner Funkenhauch an der Seitenkante. Kein Funkenregen über dem Text, keine Spur am Mauszeiger.
- Klangraum: generative Musik (Web Audio) mit mehreren Stimmungen, startet erst nach Klick („Buch öffnen mit Musik“ / „Ohne Musik lesen“), Lautstärke, leises Rascheln beim Umblättern.
- Inhalt-Fenster mit Kapiteln und allen Karten als Vorschaubild, Direktlinks per #kartenid, letzte Seite merken.
- Als App installierbar: manifest.webmanifest, Service Worker (offline), Icons 192/512/maskable, Knopf „Als App“ mit Anleitung für iPhone, Android und Desktop.
- Testen in echten Größen (1440×860, 1366×650, 820×1180, 390×844): Konsole ohne Fehler, Umblättern per Knopf und per Eckenziehen, Zoom-Blättern, Handy ohne seitliches Verrutschen.

## 8. Lieferung
- Ordner für GitHub (index.html, Daten-JS, cards/, cards/t/ Vorschaubilder, img/, icons/, manifest, sw.js, .nojekyll, README mit Anleitung) als ZIP zum Versenden.
- ZIP mit den KDP-Dateien: Innenteil-PDF, Umschlag Taschenbuch, Umschlag Hardcover.
- Webfassung als Artifact-Link.
- Kurze Liste, was ich noch tun muss: Anschrift und ISBN eintragen, KI-Bilder bei KDP angeben, Umschlag-Maße bei abweichender Seitenzahl neu rechnen.

Zeig mir zwischendurch Zwischenstände (eine Karten-Doppelseite, ein Umschlag), bevor du alles fertig machst.
