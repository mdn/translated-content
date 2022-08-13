---
title: Dateien nutzen
slug: Learn/Getting_started_with_the_web/Dealing_with_files
tags:
  - Anfänger
  - Datei
  - Dateien
  - HTML
  - Pfad
  - Webseite
translation_of: Learn/Getting_started_with_the_web/Dealing_with_files
original_slug: Learn/Getting_started_with_the_web/dateien_nutzen
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}

Eine Webseite besteht aus vielen Dateien: Texte, Code, Stylesheets, Multimedia-Inhalte etc. Wenn Sie eine Webseite erstellen, müssen Sie diese Dateien in einer sinnvollen Struktur speichern und sicherstellen, dass die Dateien miteinander kommunizieren können. Die Webseite sollte reibungslos funktionieren, bevor Sie alles auf einen Server hochladen. Dieser Artikel erklärt den Umgang mit Dateien, sodass Sie eine sinnvolle Dateistruktur für Ihre Website erstellen können.

## Wo auf Ihrem Computer soll die Webseite liegen?

Wenn Sie an der Webseite »lokal« (auf dem eigenen Computer) arbeiten, sollten Sie alle zusammengehörigen Dateien in einem Ordner haben. Dieser Ordner sollte die Struktur der Dateien auf dem Server (dem Computer, über den die Dateien im Internet zugänglich sind) wiederspiegeln. Der lokale Ordner kann überall liegen, aber Sie sollten ihn dort speichern, wo Sie ihn wiederfinden können - vielleicht auf ihrem Desktop oder in einem Nutzerordner.

1. Wählen Sie einen Ort, um Ihre Webprojekte abzuspeichern. Erstellen Sie dort einen Ordner der _»webprojekte«_ heißt. In diesen Ordner können Sie in Zukunft all Ihre Webprojekte (Internetseiten, Scripte, Vorlagen…) speichern.
2. In diesem Ordner erstellen Sie einen weiteren Ordner, in dem Sie ein bestimmtes Projekt speichern, in diesem Fall Ihre erste Webseite. Nennen Sie den Ordner _»erste-webseite«._

## Eine Bemerkung zu Großschreibung und Leerzeichen

In diesem Artikel nutzen wir für Ordnernamen und Dateinamen nur Kleinbuchstaben und keine Leerzeichen. Das hat folgende Gründe:

1. Viele Computer, besonders Webserver, unterscheiden Groß- und Kleinschreibung. Wenn Sie eine Datei namens `MeinBild.jpg` abspeichern und dann darauf zugreifen möchten, funktoniert `meinbild.jpg` nicht. Für den Computer sind `MeinBild.jpg` und `meinbild.jpg` ganz unterschiedliche Dateien.
2. Browser, Webserver und Programmiersprachen gehen nicht immer gleich mit Leerzeichen um. Wenn z.B. ein Leerzeichen in einem Dateinamen vorkommt, könnte angenommen werden, es handle sich um zwei Dateien deren Namen durch das Leerzeichen getrennt sind: `Mein Bild`.jpg würde als eine Datei namens `Mein` und eine Datei namens `Bild.jpg` interpretiert. Server ersetzen manchmal Leerzeichen durch die Zeichenfolge `"%20"` (der Zeichencode für ein Leerzeichen in einer URI) – das kann die Verlinkungen kaputtmachen: `Mein Bild.jpg` wird nämlich zu `Mein%20Bild.jpg`.

Deshalb ist es am besten, sich anzugewöhnen Namen von Ordnern und Dateien ohne Leerzeichen und nur in Kleinbuchstaben zu vergeben. So vermeidet man Probleme.

## In welcher Struktur sollten Sie Ihre Dateien ablegen?

In dem Ordner Ihres Webseiten-Projektes ([siehe oben](#websiteWo)) werden Sie meistens eine `index.html`-Datei haben und Ordner für Bilder, Stildefinitionen und Scripte. Erstellen Sie diese Sachen:

1. **`index.html`**: Das ist die erste Datei, die Leute sehen, wenn sie Ihre Webseite besuchen. Per Konvention heißt diese Datei `index.html`. Öffnen Sie einen Texteditor und speichern eine neue Datei mit dem Namen `index.html` in Ihrem Projektordner (der mit dem Namen »_erste-website«_) ab.
2. **`Bilder-Ordner`**: Dieser Ordner enthält die Bilder, die Sie auf Ihrer Webseite anzeigen wollen. Erstellen Sie einen Ordner mit dem Namen `bilder` in dem Projektordner (»_erste-website«_).
3. **`Styles-Ordner`**: Dieser Ordner wird Dateien enthalten, die das Aussehen Ihrer Webseite definieren (Schriftart, Hintergrundfarbe, Layout…), sogenannte CSS-Dateien. Erstellen Sie einen Ordner namens `styles` in Ihrem Projektordner.
4. **`Scripts-Ordner`**: Dieser Ordner wird Dateien enthalten, die interaktive Funktionen beschreiben – wie z.B. eine Meldung anzeigen, wenn ein Knopf gedrückt wird. Erstellen Sie einen Ordner mit den Namen `scripts` in Ihrem Projektordner.

> **Hinweis:** Auf Windows-Computern kann es sein, dass die Dateinamen nicht ganz zu sehen sind. Es gibt eine Option mit dem Namen »Erweiterungen bei bekannten Dateitypen ausblenden«. Diese ist normalerweise eingeschaltet. Man kann die Funktion deaktivieren, wenn man in den Windows-Explorer geht, **Ordner-Optionen** wählt und **Erweiterungen bei bekannten Dateitypen ausblenden** abwählt und dann **OK** drückt.

## Dateipfade

Damit Dateien untereinander kommunizieren können (wenn z.B. in der .html-Datei einer Seite ein Bild eingebunden ist), müssen Sie einen Dateipfad angeben. Das ist eine Art "Wegbeschreibung", anhand derer eine Datei eine andere Datei finden kann. Um zu zeigen, wie dies funktioniert, werden wir ein wenig HTML in unsere `index.html`-Datei einfügen und werden damit das Bild, welches Sie im vorhergehenden Artikel (["Wie soll Ihre Webseite aussehen?"](/de/Learn/Getting_started_with_the_web/What_will_your_website_look_like)) ausgewählt haben, anzeigen.

1. Kopieren Sie Ihr Bild, welches Sie zuvor ausgewählt haben, in den Ordner `bilder`.
2. Öffnen Sie die Datei `index.html` in einem Texteditor und fügen den folgenden Code genau so ein. (Keine Angst, Sie werden die Bedeutung dieser Befehle später noch kennen lernen.)

    ```html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Mein Testseite</title>
      </head>
      <body>
        <img src="" alt="Mein Testbild">
      </body>
    </html>
    ```

3. Die Zeile `<img src="" alt="Mein Testbild">` ist der HTML-Code, welcher das Bild in die Seite einfügt. Jetzt müssen wir noch angeben, wo das Bild gespeichert ist. Das Bild ist im Ordner `bilder`, welcher in dem selben Ordner wie `index.html` ist. Um in diesen Unterordner zu gelangen, müssen wir `bilder/DeinBildName` eingeben. Wenn das Bild z.B. `firefox-icon.png` genannt ist, müssen wir `bilder/firefox-icon.png` eintippen.
4. Fügen Sie Ihren Pfad jetzt in den HTML-Code zwischen die zwei Anführungszeichen bei `src=""` ein.
5. Speichern Sie Ihren HTML-Code und öffnen die Datei mit einem Web-Browser. Jetzt sollte die Webseite Ihr Bild anzeigen.

![A screenshot of our basic website showing just the firefox logo - a flaming fox wrapping the world](https://mdn.mozillademos.org/files/9229/website-screenshot.png)

Ein paar Grundregeln für Dateipfade:

- Um eine Zieldatei am selben Speicherort zu verlinken, können Sie einfach den Dateinamen eingeben. Beispiel: `mein-bild.jpg`
- Um eine Datei in einem Unterordner zu verlinken müssen Sie es so machen wie in dem Beispielprojekt oben. `Beispiel: bilder/mein-bild.jpg`
- Wenn Sie ein Bild in dem Ordner **darüber** verlinken wollen, müssen Sie zuerst zwei Punkte machen: `../mein-bild.jpg`
- Dies können Sie kombinieren, so viel Sie wollen: `../irgendeinordner/einandererordner/usw/mein-bild.jpg`

Momentan ist das alles, was Sie wissen müssen.

> **Note:** **Achtung:** Das Windows-Dateisystem benutzt "backslashes" - also Schrägstriche in die andere Richtung. Z.B. `C:\windows`. Wenn Sie Ihre Webseite programmieren, sollten Sie immer die "normalen" Schrägstriche (/) verwenden, damit die Seite auf allen Systemen funktioniert.

## Was sollte sonst noch getan werden?

Dies ist alles bis jetzt. Ihre Ordnerstruktur sollte ungefähr so aussehen:

![A file structure in mac os x finder, showing an images folder with an image in, empty scripts and styles folders, and an index.html file](https://mdn.mozillademos.org/files/9231/file-structure.png)

{{PreviousMenuNext("Learn/Getting_started_with_the_web/What_will_your_website_look_like", "Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web")}}
