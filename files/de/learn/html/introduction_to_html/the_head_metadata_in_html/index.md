---
title: Was gehört in den Kopf der HTML-Datei?
slug: Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML
tags:
  - Anfänger
  - Beginner
  - HTML
  - Kopf
  - Meta
  - Metadaten
  - Sprache
  - Umlaute
  - favicon
  - head
  - lang
translation_of: Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML
original_slug: Learn/HTML/Einführung_in_HTML/Der_Kopf_Metadaten_in_HTML
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Getting_started", "Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML")}}

Der Kopf (engl.: head) eines HTML Dokumentes, ist der obere Teil innerhalb des \<head>-Elements, welcher nicht direkt im Webbrowser gezeigt wird, wenn die Seite gerendert wird. Er enthält Zusatzinformationen zur Webseite, wie den {{htmlelement("title")}}, Links zu CSS-Dateien und einem Favicon, andere Metadaten, wie den Autor der Webseite und eine kurze Beschreibung für Suchmaschinen. In diesem Artikel geht es um all diese Themen und noch mehr, um Ihnen beizubringen wie Sie den Kopf der HTML-Datei am sinnvollsten nutzen.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Vorwissen:</th>
      <td>
        HTML-Grundlagen, wie sie in
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Lerne HTML kennen</a
        >
        abgedeckt werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen für was der Kopf des HTML-Dokuments da ist, die wichtigsten Dinge
        die dort hinein gehören und wie sie das HTML-Dokument beeinflussen
      </td>
    </tr>
  </tbody>
</table>

## Was ist der HTML-Kopf?

Lassen Sie uns nochmal einen Blick auf das einfache HTML Dokument werfen,[mit welchem wir uns im vorherigen Artikel beschäftigt haben](/de/Learn/HTML/Introduction_to_HTML/Lerne_HTML_kennen):

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Meine Testseite</title>
  </head>
  <body>
    <p>Dies ist meine Webseite.</p>
  </body>
</html>
```

Der HTML-Kopf ist der Inhalt im {{htmlelement("head")}}-Element. Anders als der Inhalt des {{htmlelement("body")}}-Elements, welcher im Browserfenster angezeigt wird, bleibt der Kopf im Browser verborgen. Die Aufgabe des Kopfes ist es, {{glossary("Metadata", "metadata")}} über das Dokument zu beinhalten. In unserem Beispiel ist der Kopf nicht sehr groß:

```html
<head>
  <meta charset="utf-8">
  <title>Meine Testseite</title>
</head>
```

Auf großen Webseiten wird der Kopf aber recht voll. Schauen Sie sich mal den Bereich im `<head>`-Element bei Ihren Lieblingswebseiten an, indem Sie die Developer Tools nutzen oder einfach `view-source:` vor der Webadresse in die Adresszeile schreiben (z.B. `view-source:http://mozilla.org`). Unser Ziel hier ist es nicht alle Möglichkeiten zu zeigen, was man in den Kopf schreiben kann, aber wir werden Ihnen die wichtigsten und nützlichsten Dinge vorstellen. Fangen wir an!

## Einen Titel hinzufügen

Wir haben das {{htmlelement("title")}}-Element schon in Aktion gesehen - es kann genutzt werden, um der Webseite einen Titel hinzuzufügen. Dies kann mit dem {{htmlelement("h1")}}-Element verwechselt werden, welches benutzt wird, um innerhalb des `<body>`-Elements dem Inhalt der Webseite eine Hauptüberschrift zu geben. Manchmal wird diese Hauptüberschrift auch Titel genannt. Die beiden Elemente sind aber sehr unterschiedlich!

- Das {{htmlelement("h1")}}-Element erscheint auf der Webseite selbst, wenn diese im Browser geladen wird. Dieses Element sollte nur einmal pro Seite erscheinen, um als Hauptüberschrift für den aktuellen Inhalt zu fungieren.
- Das {{htmlelement("title")}}-Element gehört zu den Metadaten und repräsentiert den Titel der gesamten Webseite, nicht nur den Inhalt einer Seite darauf.

### Aktives Lernen: Beispiel anschauen

1. Als erstes möchten wir das Sie zu unserem GitHub Repositorium gehen und eine Kopie von [title-example.html page](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/title-example.html) herunterladen. Um das zu tun, können Sie entweder

    1. Den Code direkt von der Seite kopieren und diesen in eine neue Textdatei in Ihrem Code-Editor einfügen. Vergessen Sie nicht die Datei zu speichern.
    2. Drücken Sie auf den "Raw" Button auf der Seite, welcher den Code in einem neuen Browserfenster anzeigen lässt. Wählen Sie nun in Ihrem Browsermenu _Datei > Speichere Seite unter..._ und speichern die Datei auf Ihrem Computer.

2. Öffnen Sie diese Datei in Ihrem Browser. Sie sollten folgendes sehen:

    ![A simple web page with the title set to <title> element, and the <h1> set to <h1> element.](https://mdn.mozillademos.org/files/12323/title-example.png)Es sollte hier klar werden, wo das `<h1>`-Element erscheint und wo das `<html>`-Element zu sehen ist!

3. Sie sollten auch versuchen, den Code in Ihrem Code-Editor zu öffnen. Ändern Sie den Inhalt der Elemente, speichern Sie die Datei und aktualisieren Sie die Seite im Browser. Probieren Sie ein bisschen herum.

Der Inhalt des `<title>`-Elements wird auch auf andere Weise genutzt. Wenn Sie zum Beispiel die Seite zu Ihren Lesezeichen hinzufügen (_Lesezeichen > Lesezeichen hinzufügen_ oder die Schaltfläche mit dem Stern in der Adresszeile in Firefox), werden Sie sehen, dass der Inhalt des `<title>`-Elements als Name für das Lesezeichen vorgeschlagen wird.

![A webpage being bookmarked in firefox; the bookmark name has been automatically filled in with the contents of the <title> element ](https://mdn.mozillademos.org/files/12337/bookmark-example.png)

Der Inhalt des `<title>`-Elements wird auch von Suchmaschinen genutzt, wie Sie weiter unten sehen werden.

## Metadaten: das \<meta>-Element

Metadaten sind Daten, welche Daten beschreiben. HTML hat einen "offiziellen" Weg, Meatadaten zu einem Dokument hinzuzufügen, das {{htmlelement("meta")}}-Element. Natürlich könnten auch die anderen Dinge, die wir hier besprechen, als Metadaten bezeichnet werden. Es gibt eine Menge verschiedener `<meta>`-Elemente, welche in das `<head>`-Element plaziert werden können. Wir werden hier nicht alle erklären, da dies sehr verwirrend werden würde. Statt dessen erklären wir einige Dinge die sie häufig sehen werden, um Ihnen eine Idee zu geben, um was es hier geht.

### Zeichensatz einer Webseite festlegen

In dem obigen Beispiel war diese Zeile enthalten:

```html
<meta charset="utf-8">
```

Mit diesem Element wird der genutzte Zeichensatz auf der Webseite bestimmt - es wird das Set an Zeichen festgelegt, welches vom Browser benutzt werden soll. `utf-8` ist ein universeller Zeichensatz in dem fast jeder Charakter enthalten ist, der in menschlicher Schrift benutzt wird. Das bedeutet, das ihre Webseite fast alle Sprachen anzeigen kann. Es ist also eine gute Idee, dies auf jeder Ihrer Webseiten zu setzen! Wenn Sie diesen nicht benutzen, werden Umlaute (Ä, ö) und ß nicht richtig angezeigt. Zum Beispiel kann Ihre Webseite damit gleichzeitig Englisch und Japanisch anzeigen:

![a web page containing English and Japanese characters, with the character encoding set to universal, or utf-8. Both languages display fine,](https://mdn.mozillademos.org/files/12343/correct-encoding.png)Wenn Sie Ihren Zeichensatz zum Beispiel auf `ISO-8859-1` setzen, der Zeichensatz für das lateinische Alphabet, wird die Webseite nicht so schön aussehen:

![a web page containing English and Japanese characters, with the character encoding set to latin. The Japanese characters don't display correctly](https://mdn.mozillademos.org/files/12341/bad-encoding.png)

### Atkives lernen: Experimentieren mit Zeichensätzen

Um dies auszuprobieren, nutzen Sie wieder die einfache HTML-Vorlage, welche Sie in der vorherigen Sektion über das `<title>`-Element benutzt haben ([title-example.html page](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/title-example.html)). Verändern Sie den Wert von `meta-charset` in `ISO-8859-1` und fügen Sie japanische Buchstaben ihrer Seite hinzu. Das ist der Absatz, den wir benutzt haben:

```html
<p>Japanese example: ご飯が熱い。</p>
```

Ändern Sie den Text im Absatz in einen deutschen Text, der Umlaute enthält. Dann löschen Sie das `<meta charset>`-Element, um zu sehen, was passiert. Fügen Sie das ursprüngliche `meta`-Tag danach wieder ein und sehen Sie sich den Unterschied im Webbrowser an.

### Autor und Beschreibung hinzufügen

Viele `<meta>` -Elemente beinhalten `name` und `content` Attribute:

- `name` spezifiziert den Typ des meta-Elements; welche Art von Information es enthält.
- `content` spezifiziert den eigentlichen Inhalt des meta-Elements.

Zwei dieser meta-Elemente, bei denen es sinnvoll ist, sie auf Ihrer Webseite zu nutzen, stellen wir hier vor. Sie definieren den Autor (engl.: author) und eine kurze Beschreibung (engl.: description) der Webseite. Schauen wir uns ein Beispiel an:

```html
<meta name="author" content="Chris Mills">
<meta name="description" content="The MDN Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing web sites and applications.">
```

Einen Autor anzugeben ist sinnvoll, um zu zeigen, wer die Webseite geschrieben hat. Vielleicht möchte jemand Kontakt mit dem Autor aufnehmen, da er Fragen zum Inhalt oder zum Code der Webseite hat. Es gibt Seiten, welche automatisch den Autor der Webseite auslesen, um eine Kontaktmöglichkeit zu diesem zu erstellen.

Eine Beschreibung welche zum Inhalt der Seite passende Stichwörter enthält, ist ein sinnvoller Weg, die Webseite in Suchmaschinen zu relevanten Suchbegriffen weiter oben erscheinen zu lassen. (solche Methoden werden unter dem Begriff [Suchmaschinenoptimierung](/de/docs/Glossary/SEO) (engl.: "Search Engine Optimation", kurz {{glossary("SEO")}} zusammengefasst)

### Aktives Lernen: Beschreibung für Suchmaschinen

Die Beschreibung wird von Suchmaschinen auch auf der Ergebnisseite genutzt. Schauen wir uns das mal genauer an - in einer Übung.

1. Gehen Sie zu der[Startseite von dem Mozilla Developer Network](https://developer.mozilla.org/).
2. Schauen Sie sich den Quellcode der Webseite an (Rechts/

    <kbd>Ctrl</kbd>

    \+ klick auf die Seite, wählen Sie _Quellcode anzeigen_ von dem Kontextmenü oder schreiben Sie `view-source:` vor die Webadresse in der Adresszeile).

3. Finden Sie das description `<meta>`-Tag. Es sollte so aussehen:

    ```html
    <meta name="description" content="The Mozilla Developer Network (MDN) provides
    information about Open Web technologies including HTML, CSS, and APIs for both
    Web sites and HTML5 Apps. It also documents Mozilla products, like Firefox OS.">
    ```

4. Suchen Sie nun nach "Mozilla Developer Network" in einer beliebigen Suchmaschine (Wir haben Yahoo benutzt.) Sie werden bemerken das die Inhalte vom description `<meta>`-Tag und vom `<title>` hier erscheinen - es ist also sehr sinnvoll, diese beiden zu ntuzen! ![A Yahoo search result for "Mozilla Developer Network"](https://mdn.mozillademos.org/files/12347/search-result.png)

> **Hinweis:** Wenn Sie mit Google suchen, werden Sie einige Unterseiten von MDN sehen, direkt unter dem Link zur Hauptseite von MDN. Dies sind sogenannte Sitelinks und Sie können mit den [Google's webmaster tools](http://www.google.com/webmasters/tools/) bearbeitet werden.

> **Hinweis:** Viele `<meta>`-Elemente sind nicht mehr so wichtig, wie sie einmal waren. Ein Beispiel ist das keyword `<meta>`-Element (`<meta name="keywords" content="fill, in, your, keywords, here">`). Dieses sollte Schlagwörter für Suchmaschinen bereithalten , damit diese anhand der Schlagwörter Suchergebnisse zusammen stellen können. Mittlerweile wird dieses `<meta>`-Tag von vielen Suchmaschinen ignoriert, weil Sprammer die Stichwortliste mit hunderten von Stichwörtern gefüllt haben, womit die Suchergebnisse manipuliert werden konnten.

### Andere Typen von Metadaten

Während Sie sich im Internet umschauen, werden Sie andere Typen von Metadaten entdecken. Einige Funktionen auf Webseiten sind proprietäre Kreationen (zum Beispiel Seiten von Sozialen Netzwerken), welche geschrieben wurden, um bestimmte Informationen zur Verfügung zu stellen.

Zum Beispiel gibt es [Open Graph Data](http://ogp.me/), welches ein Metadatenprotokoll ist, welches von Facebook erfunden wurde, um reichhaltigere Metadaten zur Verfügung zu stellen. Im MDN Quellcode können Sie folgendes finden:

```html
<meta property="og:image" content="https://developer.mozilla.org/static/img/opengraph-logo.png">
<meta property="og:description" content="The Mozilla Developer Network (MDN) provides
information about Open Web technologies including HTML, CSS, and APIs for both Web sites
and HTML5 Apps. It also documents Mozilla products, like Firefox OS.">
<meta property="og:title" content="Mozilla Developer Network">
```

Dieser Code bewirkt, das ein Link zu MDN von Facebook aus, ein Bild und eine Beschreibung beinhaltet. Das sieht dann so aus:

![Open graph protocol data from the MDN homepage as displayed on facebook, showing an image, title, and description.](https://mdn.mozillademos.org/files/12349/facebook-output.png)Twitter nutzt ganz ähnliche Metadaten, welche einen ähnlichen Effekt haben. Ein spezifischer Titel, eine Kurzbeschreibung und ein Bild können bei Angabe eines Links angezeigt werden. Als Beispiel:

```html
<meta name="twitter:title" content="Mozilla Developer Network">
```

## Spezielle Icons der Webseite hinzufügen

Um das Design Ihrer Webseite weiter zu verschönern, können Sie in den Metadaten eine Referenz zu einem speziellen Icon-Set hinzufügen. Diese werden dann in einem bestimmten Kontext angezeigt.

Das Favicon, welches es schon seit vielen Jahren gibt, ist das erste Icon seiner Art. Es ist 16 x 16 Pixel groß und wird an verschiedenen Stellen genutzt. Sie können Favicons vor dem Titel einer Webseite in den meisten Browser-Tabs sehen. Auch wenn Sie eine Seite Ihren Lesezeichen hinzufügen, wird dort das Favicon verwendet.

Ein Favicon fügen Sie Ihrer Webseite wie folgt hinzu:

1. Speichern Sie das Favicon mit der Endung `.ico` in dem selben Ordner, in dem auch Ihre `index.html` Datei ist. Die meisten Browser würden auch `.gif` und `.png` Format akzeptieren, mit dem ICO Format gehen Sie aber sicher, das auch ältere Browser das Favicon anzeigen.
2. Fügen Sie die folgende Zeile in den `<head>`-Bereich Ihrer HTML-Datei ein, um eine Referenz zu dem Favicon zu erzeugen:

    ```html
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    ```

Hier ist ein Beispiel, indem ein Favicon in einer Lesezeichen-Liste angezeigt wird:

![The Firefox bookmarks panel, showing a bookmarked example with a favicon displayed next to it.](https://mdn.mozillademos.org/files/12351/bookmark-favicon.png)

Es gibt heutzutage viele andere Icon-Typen die man der Webseite hinzufügen kann. Zum Beispiel werden Sie folgendes im Quellcode der MDN Startseite finden:

```html
<!-- third-generation iPad with high-resolution Retina display: -->
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://developer.mozilla.org/static/img/favicon144.png">
<!-- iPhone with high-resolution Retina display: -->
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://developer.mozilla.org/static/img/favicon114.png">
<!-- first- and second-generation iPad: -->
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://developer.mozilla.org/static/img/favicon72.png">
<!-- non-Retina iPhone, iPod Touch, and Android 2.1+ devices: -->
<link rel="apple-touch-icon-precomposed" href="https://developer.mozilla.org/static/img/favicon57.png">
<!-- basic favicon -->
<link rel="shortcut icon" href="https://developer.mozilla.org/static/img/favicon32.png">
```

Die Kommentare erklären für was die verschiedenen Icons da sind. Zum Beispiel gibt es ein hochauflösendes Icon, welches angezeigt wird, wenn die Webseite auf dem Startbildschirm eines IPad's gespeichert wird.

Machen Sie sich nicht zu viele Sorgen, all diese Icons müssen Sie nicht direkt in Ihrer Webseite haben. Sie sind eher ein Feature für fortgeschrittene Webentwickler und werden nicht zur Absolvierung dieses Kurses benötigt. Sie sollen hier nur erfahren für was diese Code-Zeilen stehen, wenn Sie diese im Quellcode anderer Webseiten sehen.

## CSS und JavaScript der HTML-Datei hinzufügen

Fast alle modernen Webseiten benutzen {{glossary("CSS")}}, um diese gut aussehen zu lassen und {{glossary("JavaScript")}} um interaktive Elemente hinzuzufügen, wie Video-Spieler, Karten, Spiele und vieles mehr. Diese werden der HTML-Datei normalerweise wie folgt hinzugefügt:

- Für das Einbinden von CSS-Dateien wird das {{htmlelement("link")}}-Element benutzt. Dieses wird im Kopf der HTML-Datei eingebunden. Das Element nimmt zwei Attribute, einmal `rel="stylesheet"`, welches Angibt das es sich um ein Stylesheet handelt. Das andere Attribut ist `href`, welches als Wert den Pfad zu der CSS-Datei beinhaltet:

  ```html
  <link rel="stylesheet" href="meine-css-datei.css">
  ```

- Für das Einbinden von JavaScript-Dateien wird das {{htmlelement("script")}}-Element genutzt und es wird meistens am Ende der HTML-Datei, vor dem schließenden `</body>`-Tag verwendet. Dadurch wird der HTML-Inhalt zuerst fertig geladen und erst am Ende der JavaScript-Code ausgeführt und auf die fertig gerenderte Webseite angewendet:

  ```html
  <script src="meine-js-datei.js"></script>
  ```

  **Hinweis**: Das `<script>`-Element sieht aus wie ein leeres Element, aber das ist es nicht, weswegen ein schließendes Tag notwendig ist. Anstatt auf eine externe JavaScript-Datei zu verweisen, könnte man den Code auch direkt in das `<script>`-Element hineinschreiben.

### Aktives Lernen: Binden Sie CSS und JavaScript in eine Seite ein

1. Holen Sie sich jeweils eine Kopie von unseren [meta-example.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/meta-example.html), [script.js](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/script.js) und [style.css](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/style.css)-Dateien und speichern diese lokal auf ihrem Computer in demselben Ordner ab. Gehen Sie sicher das die Dateien mit den richtigen Namen und Dateiendungen gespeichert sind.
2. Öffnen Sie die HTML-Datei sowohl in Ihrem Browser, als auch in einem Texteditor.
3. Fügen Sie nun ein {{htmlelement("link")}}-Element hinzu, welches auf die CSS-Datei verweist und ein {{htmlelement("script")}}-Element, welches die JavaScript-Datei einbindet, wie Sie es in diesem Artikel gelernt haben.

Wenn Sie nun das HTML-Dokument speichern und im Browser neu laden, dann sollten Sie folgende Änderungen an der Webseite sehen:

![Example showing a page with CSS and JavaScript applied to it. The CSS has made the page go green, whereas the JavaScript has added a dynamic list to the page.](https://mdn.mozillademos.org/files/12359/js-and-css.png)

- Der JavaScript-Code hat der Seite eine leere Liste hinzugefügt. Wenn Sie nun irgendwo auf die Liste klicken, dann öffnet sich eine Dialog-Box, in welcher Sie Text eingeben können, der nach drücken auf "OK" als neuer Listenpunkt erscheint. Wenn Sie auf einen existierenden Listeneintrag klicken können Sie, über die Dialog-Box, diesen Eintrag ändern.
- Die eingebundene CSS-Datei hat dafür gesorgt, dass der Hintergrund grün ist und der Text größer ist. Es wurde auch der Inhalt gestylet, welcher durch den JavaScript-Code der Webseite hinzugefügt wurde, nämlich der rote Hintergrund und ein schwarzer Rahmen um die Liste herum.

> **Hinweis:** Falls Sie an dieser Übung hängen bleiben und die externen Dateien nicht korrekt eingebunden bekommen, dann schauen Sie sich unsere [css-and-js.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/css-and-js.html) Beispiel Webseite an.

## Die genutzte Sprache der Webseite angeben

Am Ende soll hier noch angemerkt werden, das Sie die genutzte Sprache auf der Webseite angeben können und sollten. Dies kann einfach gemacht werden indem Sie das [`lang`-Attribut](/de/docs/Web/HTML/Global_attributes/lang) dem öffnenden HTML-Tag hinzufügen (wie auf [meta-example.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/the-html-head/meta-example.html) gemacht und es unten gezeigt wird).

```html
<html lang="de">
```

Dies ist in vielerlei Hinsicht eine hilfreiche Angabe. Ihr HTML-Dokument wird effizienter von Suchmaschinen aufgenommen, wenn die Sprache angegeben ist. Auch für Screenreader ist die Angabe der Sprache am Beginn des Dokumentes wichtig.

Sie können auch für Bereiche Ihrer Webseite eine andere Sprache angeben. Zum Beispiel könnten Sie einen Bereich, in welchem japanischer Text steht, wie folgt angeben:

```html
<p>Japanese example: <span lang="jp">ご飯が熱い。</span>.</p>
```

Die Ländercodes werden im [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) Standard definiert. Sie können hier mehr darüber lesen: [Language tags in HTML and XML](https://www.w3.org/International/articles/language-tags/) (in Englisch)

## Zusammenfassung

Dies ist das Ende unseres Exkurses über den Kopf der HTML-Datei. Es gäbe noch einiges mehr, was man dort tun könnte, aber es wäre für einen Anfänger nicht hilfreich. Die meistgenutzten Sachen haben wir hier erklärt. Weiter geht es mit Einfache Textformatierung in HTML.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Getting_started", "Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals", "Learn/HTML/Introduction_to_HTML")}}
