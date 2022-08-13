---
title: HTML-Grundlagen
slug: Learn/Getting_started_with_the_web/HTML_basics
tags:
  - Anfänger
  - Grundlagen
  - HTML
  - Internet
  - Lernen
  - Webentwicklung
  - Webseiten
translation_of: Learn/Getting_started_with_the_web/HTML_basics
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/dateien_nutzen", "Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web")}}

HTML (Hypertext Markup Language) ist der Code, welcher benötigt wird, um den Webinhalt zu strukturieren und ihm eine Bedeutung und einen Zweck zu geben. Zum Beispiel könnte Ihr Inhalt Absätze und Grafiken, aber auch Bilder und Tabellen enthalten. Wie der Titel dieses Artikels verspricht, soll Ihnen hier ein grundsätzliches Verständnis vermittelt werden, wie HTML eingesetzt wird.

## Was ist HTML?

HTML ist nicht wirklich eine Programmiersprache, sondern eine Auszeichnungssprache; sie ist dazu gedacht, Ihre Webseite zu strukturieren. Die Sprache besteht aus einer Reihe von Elementen, Tags genannt, welche Sie um verschiedene Teile Ihres Inhalts herum platzieren können, um diesem eine spezielle Aufgabe zuzuweisen. Zum Beispiel können Sie damit einen Text oder ein Bild in einen Link verwandeln. Als Beispiel nehmen wir folgenden Inhalt:

    Meine Katze ist sehr frech.

Wenn wir möchten, dass der Satz in einem eigenen Absatz steht, können wir mit {{htmlelement("p")}} spezifizieren, dass es sich um einen Absatz handelt:

```html
<p>Meine Katze ist sehr frech.</p>
```

### Aufbau eines HTML-Elements

Schauen wir uns den Aufbau unseres Paragraphen-Elements ein wenig genauer an.

![](https://mdn.mozillademos.org/files/15443/katze-element.jpg)

(Content=Inhalt, Element=HTML-Element)

Die Hauptteile unseres Elements sind:

1. **Das öffnende Tag:** Diese besteht aus dem Namen des Elements (in diesem Fall ein `p` für paragraph (engl.: Absatz)), welcher zwischen zwei spitzen Klammern eingesetzt ist. Dies zeigt an, wo das Element beginnt — in diesem Fall am Anfang unseres Absatzes.
2. **Der Inhalt:** Dies ist der Inhalt des Elements, in diesem Fall einfach nur Text.
3. **Das schließende Tag:** Dieses sieht genauso aus wie das öffnende Tag bis auf den zusätzlichen Schrägstrich (slash) vor dem Namen des Elements. Dieser Tag kommt an das Ende des Elementes — in diesem Fall am Ende des Absatzes.
4. **Das Element:** Das öffnende Tag, der Inhalt und das schließende Tag gemeinsam ergeben zusammen das Element.

Elemente können auch Attribute enthalten, das sieht dann so aus:

![](https://mdn.mozillademos.org/files/15463/katze-attribut.png)

Diese Attribute enthalten Zusatzinformationen über das Element, welche nicht als eigentlicher Inhalt angezeigt werden. In diesem Fall erlaubt dieses Attribut, ihm einen Identifizierungsnamen zu geben, welchen man später dazu verwenden kann, um dieses Element mit Informationen wie z. B. Schriftart und -farbe zu versehen.

In unserem Beispiel ist der _Name_ des Attributes `class` und `editor-note` ist der diesem Attribut zugeordnete _Wert_.

Ein Attribut sollte immer haben:

1. Einen Abstand zwischen ihm und dem Elementnamen (oder dem vorherigen Attribut, wenn es mehrere sind).
2. Den Attributnamen, gefolgt von Gleichheitszeichen
3. Anführungs- und Schlusszeichen um den Wert. (bsp. `"editor-note"`)

### Verschachtelte Elemente

Sie können einzelne Elemente ineinander verschachteln. Wenn wir also besonders betonen wollen, dass unsere Katze **sehr** frech ist, können wir dieses einzelne Wort in einem {{htmlelement("strong")}} Element verpacken.

```html
<p>Meine Katze ist <strong>sehr</strong> frech.</p>
```

Folgendes Beispiel ist nicht richtig, da die Elemente nicht ineinander verschachtelt sind, sondern ineinander verkettet. Das letzte Element, welches geöffnet wird, muss auch zuerst geschlossen werden.

```html example-bad
<p>Meine Katze ist <strong>sehr frech.</p></strong>
```

Dies funktioniert wie mit Schachteln: Wenn die kleine Schachtel in der Großen ist, kann man auch nicht zuerst den großen Deckel schließen, bevor man den kleinen Deckel draufsetzt. Die einzelnen Elemente dürfen sich also nicht überlappen, sie dürfen nur ineinander stehen.

### Leere Elemente

Gewisse Elemente haben keinen Inhalt, diese werden **leere Elemente** genannt. Beispielsweise das {{htmlelement("img")}} Element, welches wir schon in unserer HTML-Datei haben:

```html
<img src="images/firefox-icon.png" alt="Mein Testbild">
```

Dies beinhaltet zwei Attribute, aber es gibt kein schließendes `</img>` Tag und keinen Inhalt in dem Element. Das `<img>` Tag braucht keinen Inhalt um einen Effekt zu haben. Es bindet ein Bild an der entsprechenden Stelle in der HTML Seite ein.

### Aufbau eines HTML-Dokumentes

Jetzt wissen Sie, wie die einzelnen Elemente in einer HTML-Datei aufgebaut sind, aber ein Element für sich alleine tut nicht viel. Wir schauen uns jetzt an, wie die einzelnen Elemente kombiniert werden, um eine HTML Seite aufzubauen. Schauen wir den Code wieder an, welchen wir vorher in die `index.html`-Datei eingefügt haben (welche wir im Artikel "[Dateien nutzen](/de/Learn/Getting_started_with_the_web/dateien_nutzen)" erstellt haben):

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Meine Testseite</title>
  </head>
  <body>
    <img src="images/firefox-icon.png" alt="Mein Testbild">
  </body>
</html>
```

Hier haben wir:

- `<!DOCTYPE html>` — den Dokumenttyp. Früher, als HTML noch jung war (1991/92), war dies dazu gedacht, um dem Browser mitzuteilen, welchen Regeln er zu folgen hatte. Das konnte z. B. sein, dass der Browser automatisch die Fehler überprüft und andere nützliche Dinge. Wie auch immer, heutzutage achtet niemand mehr wirklich darauf, es muss jedoch vorhanden sein, damit alles richtig funktioniert.
- `<html></html>` — das `<html>` Element. Dieses Element umhüllt den ganzen Inhalt. Manchmal wird es auch als root-Element bezeichnet
- `<head></head>` — das `<head>` Element. In dieses Element ist alles eingeschlossen, was _nicht_ auf der Seite angezeigt wird. Dies enthält Informationen wie Schlüsselwörter, eine Seitenbeschreibung, welche in Suchmaschinen erscheint, CSS um unseren Inhalt zu designen, usw.
- `<body></body>` — das `<body>` Element. Dies beinhaltet _alles_, was die Betrachter sehen, wenn sie die Webseite besuchen, egal ob Text, Bilder, Videos, Audiodateien, usw.
- `<meta charset="utf-8">` — Dieses Element setzt die Zeichenkodierung deines Dokuments auf `utf-8`, was die Buchstaben von fast allen menschlichen Sprachen beinhaltet. Umlaute wie Ä und Ü werden sonst nicht richtig angezeigt.
- `<title></title>` — Dies setzt den Titel der Seite, welcher im Tab angezeigt wird. Dieser wird auch gebraucht, wenn jemand ein Lesezeichen erstellt.

## Bilder

Schauen wir jetzt unser Bild-Element nochmals an:

```html
<img src="images/firefox-icon.png" alt="Mein Testbild">
```

Wie wir vorher gesagt haben, ist ein Bild an der Stelle unserer Seite eingebettet, wo es erscheint. Es tut dies mit dem `{{htmlattrdef("src")}}` (src ist Abkürzung für engl.: "source" = deutsch: "Quelle") Attribut, welches den Pfad unseres Bildes beinhaltet.

Aber wir haben auch einen `{{htmlattrdef("alt")}}` (alternative) Befehl, welcher einen Text anzeigt, falls das Bild nicht angezeitg werden kann. Dies ist nützlich für:

1. Sehbehinderte. Diese haben häufig Programme, welche ihnen den alternativen Text vorlesen.
2. Wenn es einen Fehler im Code gibt, was bedeutet, dass das Bild nicht angezeigt werden kann. Verändern Sie beispielsweise den Code bei `{{htmlattrdef("src")}}` und speichern ihn ab. Öffnen Sie das Dokument dann mit dem Browser. Jetzt sollte statt dem Bild folgende Meldung angezeigt werden:

![](<Ein Kleiner Test>)

Dieser alternative Satz sollte dem Leser eine Informationen geben, damit er sich vorstellen kann, was auf dem Bild angezeigt ist. Dieser Beispielsatz ist also nicht so gut. Viel besser wäre die Beschreibung "Das Firefox-Logo: Ein brennender Fuchs, welcher die Erde umkreist."

**Schreiben Sie jetzt einen besseren Alternativtext für Ihr Bild.**

> **Hinweis:** Finden Sie mehr über Zugänglichkeit unter [MDN's Accessibility landing page](/de/docs/Web/Accessibility) heraus.

## Textdarstellung

Diese Lektion enthält ein paar HTML Grundlagen, welche man benötigt, um Text darzustellen.

### Überschriften

Mit Überschriftelementen können Sie bestimmte Teile des Inhaltes als Überschrift deklarieren. Wie ein Buch einen Hauptitel und Kapitelüberschriften haben kann, können HTML-Dokumente eine Hauptüberschrift" und weitere Überschriften haben.

HTML besitzt 6 Überschrifttypen, wobei meist nur 3-4 gebraucht werden: {{htmlelement("h1")}}–{{htmlelement("h6")}}

```html
<h1>Meine Hauptüberschrift</h1>
<h2>Meine Top-Level Unterüberschrift</h2>
<h3>Meine Unterüberschrift</h3>
<h4>Meine weitere Unterüberschrift</h4>
```

Probieren Sie nun einen geeigneten Titel in Ihre HTML-Seite einzufügen, direkt über dem {{htmlelement("img")}} Element.

### Absätze

Wie oben erklärt benutzt man {{htmlelement("p")}}, Elemente um Absätze zu erstellen. Sie werden diese oft benutzen, um Texte zu strukturieren.

```html
<p>Dies ist ein Absatz (p ist Abkürzung für engl.:"Paragraph")</p>
```

**Ergänzen Sie Ihren Beispieltext (Sie sollten sich den Textinhalt beim Planen der Webseite überlegt haben: [_Wie sollte Ihre Website aussehen?_](/de/Learn/Getting_started_with_the_web/What_should_your_web_site_be_like)) in einem oder mehreren Absätzen direkt unter Ihrem** {{HTMLElement("img")}} **(Bildelement).**

### Listen

Viele Webseiten enthalten Listen , deshalb hält HTML dafür Elemente bereit. Die Kennzeichnung von Listen besteht immer aus zwei Elementen. Man unterscheidet geordnete und ungeordnete Listen.

1. **Ungeordnete Listen** sind Listen, bei denen die Reihenfolge der Gegenstände keine Rolle spielt, wie eine Einkaufsliste. Diese werden eingehüllt von einem {{htmlelement("ul")}} Element.
2. **Geordnete Listen** werden verwendet, wenn die Reihenfolge der Bestandteile wichtig ist, wie bei einem Rezept. Diese werden eingehüllt von einem {{htmlelement("ol")}} Element.

Jeder Gegenstand der Liste wird einzeln in ein {{htmlelement("li")}} Listen-Element gepackt.

Wenn wir zum Beispiel die einzelnen Teile dieses Absatzes in eine geeignete Liste verwandeln wollen:

```html
<p>Hier bei Mozilla sind wir eine globale Gemeinschaft aus Entwicklern, Vorausdenkern, Erschaffern, welche zusammen daran arbeiten...</p>
```

Könnten wir das so machen:

```html
<p>Hier bei Mozilla sind wir eine globale Gemeinschaft aus</p>


<ul>
  <li>Entwicklern</li>
  <li>Vorausdenkern</li>
  <li>Erschaffern</li>
</ul>

<p>welche zusammen daran arbeiten ... </p>
```

**Probieren Sie eine geordnete oder ungeordnete Liste in Ihre Beispielseite einzufügen.**

## Links

Links sind sehr wichtig — sie sind, was das Internet EIN NETZ macht. Um einen Link zu implementieren, müssen wir ein einfaches Element — {{htmlelement("a")}} — verwenden. Das _a_ ist die Kurzform für "Anker" (engl. "anchor"). Um einen Text innerhalb des Absatzes in einen Link zu verwandeln, führen Sie folgenden Schritte durch:

1. Suchen Sie einen Text aus. Wir benutzen in unserem Beispiel "Mozilla Manifesto".
2. Betten Sie den Text in ein `<a>`-Element ein:

    ```html
    <a>Mozilla Manifesto</a>
    ```

3. Geben Sie dem `<a>`-Element ein `href`-Attribut:

    ```html
    <a href="">Mozilla Manifesto</a>
    ```

4. Füllen Sie für den Wert des Attributs die Internetadresse ein, auf die Sie verlinken wollen:

    ```html
    <a href="https://www.mozilla.org/en-US/about/manifesto/">Mozilla Manifesto</a>
    ```

Es kann sein, dass Sie komische Ergebnisse bekommen, wenn Sie `https://` oder `http://` , genannt _Protokoll_, vergessen. Überprüfen Sie deshalb immer nachdem Sie den Link gesetzt haben, ob er wie gewünscht funktioniert.

> **Note:** `{{htmlattrdef("href")}}` mag sich etwas komisch für einen Attributnamen anhören. Wenn Sie Probleme haben sich an den Namen zu erinnern, merken Sie sich, dass es die Kurzform von _**H**ypertext **Ref**erenz (engl. **h**ypertext **ref**erence_) ist.

**Fügen Sie jetzt einen Link Ihrer Seite hinzu, falls Sie es noch nicht getan haben.**

## Ergebnis

Wenn Sie allen Anweisungen in diesem Artikel gefolgt sind, sollten Sie als Ergebnis eine Seite erhalten, die ähnlich wie diese aussieht (Sie können unsere Version davon auch [hier anschauen](http://mdn.github.io/beginner-html-site/)):

![Ein Screenshot einer Webseite, welche das Firefox-Logo enthält, Absätze und eine Liste](https://mdn.mozillademos.org/files/15469/beginner-html-site-de.jpg)

Wenn Sie nicht dasselbe Ergebnis haben und nicht wissen, wo das Problem liegt, können Sie Ihren Code mit dem [fertigen Code](https://github.com/mdn/beginner-html-site/blob/gh-pages/index.html) auf Github vergleichen.

Hier haben wir nur an der Oberfläche von HTML gekratzt. Um mehr über HTML zu lernen, gehen Sie zu der [HTML-Lernseite](/de/Learn/HTML).

{{PreviousMenuNext("Learn/Getting_started_with_the_web/dateien_nutzen", "Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web")}}
