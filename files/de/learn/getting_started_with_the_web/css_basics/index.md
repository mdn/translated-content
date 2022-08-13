---
title: CSS-Grundlagen
slug: Learn/Getting_started_with_the_web/CSS_basics
tags:
  - Anfänger
  - CSS
  - Coding
  - Design
  - Lernen
  - Stylesheets
  - Web
translation_of: Learn/Getting_started_with_the_web/CSS_basics
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web")}}

CSS (engl.: Cascading Style Sheets = gestufte Gestaltungsbögen) ist die Sprache, die Sie benutzen, um Ihre Webseite zu gestalten. _CSS Grundlagen_ führt Sie durch die Grundlagen dieser Stylesheet-Sprache. Wir beantworten damit solche Fragen wie: »Wie kann ich die Farbe meines Textes ändern? Wie kann ich diesen Inhalt genau an einer bestimmten Stelle anzeigen lassen? Wie kann ich meine Webseite mit Hintergrundbildern und -farben versehen?«

## Was ist CSS jetzt wirklich?

Wie HTML ist CSS nicht wirklich eine Programmiersprache. Es ist auch keine Markup-Sprache, sondern eine Stylesheet-Sprache, die es erlaubt für Elemente auf der Seite das Aussehen festzulegen. Zum Beispiel benötigt man folgengen CSS-Code, um alle Absätze (`<p>`) auszuwählen und deren Inhalt rot einzufärben:

```css
p {
  color: red;
}
```

Probieren Sie es aus: Kopieren Sie diese drei Zeilen CSS in eine neue Datei in einen Texteditor und speichern Sie die Datei unter dem Namen `style.css` im Verzeichnis `styles`.

Aber wir müssen das CSS noch im HTML-Dokument verknüpfen, sonst würde die CSS-Datei von dem Browser nicht berücksichtigt. (Wenn Sie unserem Projekt nicht von Anfang an gefolgt sind, lesen Sie erst [Dateien nutzen](https://developer.mozilla.org/de/Learn/Getting_started_with_the_web/dateien_nutzen) und [HTML-Grundlagen](https://developer.mozilla.org/de/Learn/Getting_started_with_the_web/HTML_basics), um zu erfahren, was Sie davor tun müssen.)

1. Öffnen Sie die Datei `index.html` und fügen die folgende Zeile irgendwo in den Kopf (zwischen die `<head>`- und `</head>`-Tags) ein:

    ```html
    <link href="styles/style.css" rel="stylesheet" type="text/css">
    ```

2. Speichern Sie die Datei `index.html` und öffnen Sie diese in einem Browser. Es sollte wie in diesem Beispiel aussehen:

![Das Mozilla-Logo und ein paar Absätze. Der Text in den Absätzen ist rot gefärbt durch CSS.](https://mdn.mozillademos.org/files/15471/beginner-css1-de.jpg)Wenn der Absatz jetzt rot ist: Herzlichen Glückwunsch! Sie haben nun zum ersten Mal Ihre eigene CSS-Datei geschrieben und eingebunden!

### Aufbau einer CSS-Regel

Lassen Sie uns nun das CSS von oben etwas genauer anschauen:

![](https://mdn.mozillademos.org/files/15467/css-example.png)

Die ganze Struktur wird **Regelsatz** (oder oft nur »Regel«) genannt.

Jetzt zu den Namen der einzelnen Teile:

- Selektor
  - : Der HTML-Elementname steht direkt am Anfang der Regel. Er wählt die Elemente, die gestaltet werden sollen (in diesem Beispiel `p`) aus. Um ein anderes Element zu gestalten, muss man nur den Selektor ändern.
- Deklaration
  - : Eine einzelne Regel wie `color: red;` gibt an, welche **Eigenschaft** des Elements gestaltet werden soll.
- Eigenschaft (englisch: property)
  - : Art, auf die das ausgewählte HTML-Element gestaltet werden soll. (In diesem Fall ist `color` eine Eigenschaft des {{htmlelement("p")}} Elements.) In CSS wählen Sie aus, welche Eigenschaften Sie in der Regel setzen wollen.
- Eigenschafts-Wert (englisch: property value)
  - : Rechts neben der Eigenschaft, nach dem Doppelpunk, steht der **Wert** der Eigenschaft. Dieser gibt eine von vielen Möglichkeiten wieder, wie die Eigenschaft das Aussehen eines Elements verändern kann. (Es gibt viele andere Werte für `color` außer `red`).

Beachten Sie die anderen wichtigen Teile der Syntax! Die Syntax ist sozusagen die Grammatik des Codes:

- Hinter dem Selektor stehen die zugehörigen Regelsätze innerhalb geschwungener Klammern (`{}`).
- Innerhalb einer Deklaration muss man einen Doppelpunkt (`:`) nutzen, um Eigenschaft und Wert zu trennen.
- Am Ende jeder Deklaration muss ein Semikolon (`;`) gesetzt werden.

Um mehrere Eigenschaften eines HTML-Elements auf einmal zu verändern, trennt man die Deklarationen innerhalb eines Regelsatzes mit Semikolons, wie folgt:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

### Mehrere Elemente auswählen

Sie können auch mehrere Elemente auswählen, um einen einzigen Regelsatz auf diese alle anzuwenden. Schreiben Sie einfach mehrere Selektoren hintereinander, getrennt durch Kommas. So zum Beispiel:

```css
p,li,h1 {
  color: red;
}
```

### Verschiedene Arten von Selektoren

Es gibt viele verschiedene Arten von Selektoren. Bisher haben wir nur **Element-Selektoren** genutzt, welche alle Elemente eines bestimmten Typs innerhalb eines HTML-Dokumentes auswählen. Aber wir können auch eine spezifischere Auswahl nutzen. Hier sind einige weitere Arten von Selektoren, welche häufig genutzt werden:

| Selector name                                           | Was wird ausgewählt?                                                                                                                           | Beispiel                                                                     |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Element- Selektor (auch Tag- oder Typ-Selektor genannt) | Alle HTML-Elemente eines bestimmten Typs.                                                                                                      | `p` Wählt alle `<p>-Elemente aus.`                                           |
| ID-Selektor                                             | Element mit der entsprechenden ID wird ausgewählt. (Eine ID kann immer nur einem einzigen Element innerhalb eines Dokuments zugeordnet werden) | `#my-id` Wählt `<p id="my-id">` oder `<a id="my-id"> aus.`                   |
| Klassen-Selektor                                        | Element(e) mit der entprechenden Klasse werden ausgewählt. (Klassen können mehreren Elementen innerhalb eines Dokuments zugeordnet werden)     | `.my-class` Wählt `<p class="my-class">` und `<a class="my-class"> aus.`     |
| Attribut-Selektor                                       | Element(e) mit entsprechendem Attribut werden ausgewählt.                                                                                      | `img[src]` Wählt `<img src="myimage.png">` , aber nicht `<img> aus.`         |
| Pseudoklassen-Selektoren                                | Element(e) eines bestimmten Typs, welche sich in einem bestimmten Zustand befinden (z.B.: Mauszeiger ist über dem Element)                     | `a:hover` Wählt `<a>`nur dann aus, wenn der Mauszeiger darüber bewegt wird. |

Es gibt viele weitere Selektoren. Sie können alle in folgender Liste finden: [Selektoren](/de/docs/Web/Guide/CSS/Getting_started/Selectors).

## Schriftart und Text

Jetzt, da wir uns einige CSS-Grundlagen angeschaut haben, lassen Sie uns damit anfangen, mehr Regelsätze und Eigenschaften zu unserer `style.css`-Datei hinzuzufügen. Zuerst ändern wir die Schrift, damit unser Text besser aussieht`.`

1. In einem vorherigen Artikel haben Sie schon eine Schriftart von [Google Fonts](/de/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like#Schriftart) ausgewählt, den zugehörigen Code sollten Sie schon irgendwo gespeichert haben. Fügen Sie das `<link ... >` Element in den Kopf Ihrer index.html Datei ein (zwischen den `<head>` und `</head>` Tags). Das `<link>` Element sollte wie folgt aussehen:

    ```html
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
    ```

2. Löschen Sie die existierende Regel in Ihrer `style.css`-Datei. Es war ein guter Test, aber roter Text sieht doch nicht so schön aus.
3. Fügen Sie stattdessen die folgenden Zeilen in die CSS-Datei ein. Ersetzen Sie 'Platzhalter' mit der Schriftart, welche Sie auf Google Fonts ausgewählt haben (`font-family` bedeutet soviel wie "Schriftfamilie" und deutet auf die Schriftarten, welche Sie benutzen möchten). Diese Regel setzt eine globale Schriftart (`font-family`) und Schriftgröße(`font-size`) für die ganze Webseite, da im `<html>`-Element alle anderen Elemente enthalten sind. Die Eigenschaften `font-family` und `font-size` werden an die Elemente innerhalb eines Elements weiter vererbt:

    ```css
    html {
      font-size: 10px; /* px bedeutet 'pixels': die Schriftgröße wird auf 10 Pixel gesetzt  */
      font-family: Platzhalter; /* hier kommt der Name der ausgewählten Schriftfamilie hin */
    }
    ```

    > **Hinweis:** In einem Kommentar wurde hinzugefügt, was "px" bedeutet. Alles in einem CSS-Dokument, was zwischen `/*` und `*/` steht, ist ein **CSS-Kommentar**, welchen der Browser ignoriert. Kommentare sind für Sie selbst gedacht, hier können Sie für sich hilfreiche Notizen machen.

4. Nun setzen wir die Schriftgröße für die textbeinhaltenden HTML-Elemente {{htmlelement("h1")}}, {{htmlelement("li")}} und {{htmlelement("p")}} fest. Wir zentrieren auch den Text von unseren Überschriften mit `text-align: center;` und ändern die Linienhöhe (`line-height`) und den Buchstabenabstand (`letter-spacing`), um den Text der `p` und `li` Elemente etwas lesbarer zu machen:

    ```css
    h1 {
      font-size: 60px;
      text-align: center;
    }

    p, li {
      font-size: 16px;
      line-height: 2;
      letter-spacing: 1px;
    }
    ```

Sie können die Schriftgröße über den Wert vor 'px' ändern, wie Sie möchten. Ihre Webseite sollte jetzt ungefähr so aussehen:

![Mozilla Logo und ein paar Absätze. Eine sans-serif Schrift wurde gesetzt, die Schriftgröße, Linienhöhe und Buchstabenabstand wurden angepasst und die Hauptüberschrift zentriert.](https://mdn.mozillademos.org/files/15473/beginner-css2-de.jpg)

## Boxen, überall Boxen - das CSS Box-Modell

Eine Sache, welche Sie bemerken werden, wenn Sie CSS-Code schreiben, ist, dass es sich oft um das Gestalten von Boxen dreht - Sie werden die Größe, die Farbe, die Position, usw. von Boxen bestimmen. Die meisten HTML-Elemente auf Ihrer Seite können als Boxen oder Schachteln betrachtet werden, welche übereinander sitzen.

![a big stack of boxes or crates sat on top of one another](https://mdn.mozillademos.org/files/9441/boxes.jpg)

Es ist daher nicht überraschend, dass das CSS-Layout auf dem Box-Modell basiert. Jede Box, die einen Raum auf Ihrer Webseite einnimmt, hat folgende Eigenschaften:

- `padding`, der Innenabstand: das ist der Raum direkt um den Inhalt des Elements (z.B. direkt um einen Absatz \<p> drumherum)
- `border`, der Rahmen: eine Linie, welche direkt außerhalb des `padding` sitzt
- `margin`, der Außenabstand: der Raum außerhalb des Rahmens

![three boxes sat inside one another. From outside to in they are labelled margin, border and padding](https://mdn.mozillademos.org/files/9443/box-model.png)

Wir werden hier auch die folgenden Eigenschaften benutzen:

- `width`, die Breite eines Elements
- `background-color`, die Farbe hinter dem Inhalt und `padding` des Elements
- `color`, die Farbe des Inhaltes des Elements (meistens Text)
- `text-shadow`, gibt dem Text innerhalb des Elements einen Schatten
- `display`, Ändert die Darstellungsweise der Box (diese Eigenschaft werden wir uns später noch genauer anschauen)

Lassen Sie uns nun unserem Beispiel etwas mehr CSS-Code hinzufügen! Fügen Sie die folgenden neuen Regeln am Ende Ihrer CSS-Datei ein. Haben Sie keine Angst mit den Werten zu experimentieren.

### Ändern der Hintergrundfarbe für die ganzen Seite

```css
html {
  background-color: #00539F;
}
```

Dieser Regelsatz ändert die Hintergrundfarbe auf der ganzen Seite. Ändern Sie die Hintergrundfarbe in die, welche Sie sich ausgesucht haben,[als Sie Ihre Webseite geplant haben.](/de/Learn/Getting_started_with_the_web/What_should_your_web_site_be_like#Hauptfarbe)

### Dem body Form geben

```css
body {
  width: 600px;
  margin: 0 auto;
  background-color: #FF9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```

Jetzt widmen wir uns dem \<body>-Element. Hier habe wir einige neue Deklarationen, lassen Sie uns diese genauer anschauen:

- `width: 600px;` — die Breite (engl.: width) des `<body>`-Elements wird auf 600 Pixel festgelegt.
- `margin: 0 auto;` — Wenn man bei den Eigenschaften `margin` oder `padding` zwei Werte setzt, dann steht der erste Wert für den Abstand nach oben **und** nach unten (welcher in diesem Fall `0` ist) und der zweite Wert steht für den Abstand links **und** rechts von dem Element (in diesem Fall setzen wir den Wert auf `auto`, wodurch der vorhandene Platz auf beiden Seiten des Elements gleichmäßig aufgeteilt wird). [Man kann auch nur einen, drei oder vier verschiedene Werte benutzen, wie dies das Element beeinflusst können Sie in der Dokumentation nachlesen.](/de/docs/Web/CSS/margin#Values)
- `background-color: #FF9500;` — dies setzt die Hintergrundfarbe des \<body>-Elements. Hier wurde eine rötliche Farbe ausgewählt, aber Sie können gerne eine andere Farbe nehmen`.`
- `padding: 0 20px 20px 20px;` — für den Innenabstand haben wir vier Werte gesetzt, um etwas Raum um unseren Inhalt zu schaffen. Oben setzen wir keinen Abstand, aber auf der linken und rechten Seite, sowie unten setzen wir jeweils 20 Pixel. Die Werte werden in folgender Reihenfolge gesetzt: oben, rechts, unten, links.
- `border: 5px solid black;` — dies setzt einen 5 Pixel starken, soliden, schwarzen Rahmen um unser Element.

### Positionierung und Design der Hauptüberschrift

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539F;
  text-shadow: 3px 3px 1px black;
}
```

Lassen Sie uns das {{htmlelement("h1")}}-Element stylen. Wenn Sie Ihre Webseite im Browser anschauen, werden Sie feststellen, das ein komischer Abstand oberhalb des `<body>`-Elements ist. Dies passiert, da **Browser einige Eigenschaften automatisch stylen**, auch wenn Sie selbst überhaupt kein CSS dafür geschrieben haben! Das klingt nach einem schlechten Verhalten seitens des Browsers, aber auch Webseiten, die gar keine Stylesheets haben, sollen lesbar bleiben. Um den automatischen Abstand beim `<h1>`-Element los zu werden haben wir das automatische Styling des Browsers überschrieben mit `margin: 0;` .

Als nächstes haben wir den oberen und unteren inneren Abstand der Überschrift auf 20 Pixel gesetzt (`padding: 20px 0;`) und dem Text dieselbe Farbe gegeben wie dem Hintergrund des `<html>`-Elements.

Eine interessante Eigenschaft ist `text-shadow`. Diese fügt dem Textinhalt eines Elements einen Schatten hinzu. Die vier Werte bedeuten:

- Der erste Wert in Pixeln setzt den **horizontalen Versatz** des Schattens vom Text weg nach rechts - so weit fällt der Schatten: ein negativer Wert würde den Schatten nach links fallen lassen.
- Der zweite Wert setzt den **vertikalen Versatz** des Schattens in Pixeln. Der Schatten fällt so weit nach unten, ein negativer Wert würde den Schatten nach oben fallen lassen.
- Der dritte Wert setzt den Radius in Pixeln für den Bereich, in dem der Schatten verwischt ist. Ein größerer Wert hier bedeutet einen leichteren Schatteneffekt.
- Der vierte Wert setzt die **Grundfarbe** des Schattens.

Auch hier können Sie mit den verschiedenen Werten experimentieren, um zu sehen was dabei heraus kommt.

### Das Bild zentrieren

```css
img {
  display: block;
  margin: 0 auto;
}
```

Zuletzt werden wir das Bild auf unserer Seite zentrieren. Wir können das wieder mit `margin: 0 auto;` erreichen, allerdings müssen wir noch etwas anderes tun, damit dies funktioniert. Das `<body>`-Element ist ein Block bzw. eine Box, weswegen es ein `margin` und `padding` hat. Das `<img>`-Element ist ein **Inline-Element**, es wird nicht als Box angezeigt und hat kein `margin` oder `padding`. Um das Bild in ein **Block-Element** umzuwandeln, geben wir ihm einfach die folgende Deklaration: `display: block;`.

> **Hinweis:** Wenn Sie `diplay: block;` jetzt noch nicht ganz verstehen, ist das nicht schlimm. Wenn Sie CSS mehr studieren, dann werden Sie auch den Unterschied zwischen Inline-Elementen und Block-Elementen verstehen. Mehr zu den Möglichen `display` Werten können Sie in unserer [Display Referenz](/de/docs/Web/CSS/display) lesen.

## Zusammenfassung

Wenn Sie allen Anweisungen in diesem Artikel gefolgt sind, dann sollten Sie jetzt eine Webseite aussehen, die so aussieht (hier können Sie sich [unsere Version](http://mdn.github.io/beginner-html-site-styled/) ansehen) :

![a mozilla logo, centered, and a header and paragraphs. It now looks nicely styled, with a blue background for the whole page and orange background for the centered main content strip.](https://mdn.mozillademos.org/files/15475/beginner-css3-de.jpg)

Falls Ihr Resultat nicht so aussieht, dann gehen Sie den Artikel noch einmal durch und versuchen Sie mögliche Fehler in Ihrem Code zu finden. Wenn Sie wirklich nicht weiter wissen, dann können Sie sich [unseren Code auf Github](https://github.com/mdn/beginner-html-site-styled/blob/gh-pages/styles/style.css) ansehen.

Wir haben hier wirklich nur die Grundlagen von CSS gesehen. Um mehr CSS zu lernen gehen Sie zu unserem [CSS Lernbereich](https://developer.mozilla.org/de/Learn/CSS).

{{PreviousMenuNext("Learn/Getting_started_with_the_web/HTML_basics", "Learn/Getting_started_with_the_web/JavaScript_basics", "Learn/Getting_started_with_the_web")}}
