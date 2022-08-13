---
title: Einfache Textformatierung in HTML
slug: Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals
tags:
  - Beginner
  - Einführung in HTML
  - HTML
  - Lernen
  - Listen
  - Semantik
  - Text
  - Text formatieren
  - Überschriften
translation_of: Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals
original_slug: Learn/HTML/Einführung_in_HTML/Einfache_Textformatierung_in_HTML
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}

Einer der Hauptaufgaben von HTML ist es, Text zu strukturieren und diesem eine bestimmte Bedeutung zu verleihen, damit der Browser den Text im richtigen Kontext darstellen kann. In diesem Artikel wird erklärt, wie man mit {{glossary("HTML")}} Texte formattieren kann. Dazu gehört das hervorheben einzelner Textpassagen, als auch die Darstellung des Textblocks, zum Beispiel als Absatz, Liste oder als Überschrift.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Vorwissen:</th>
      <td>
        Grundlagen von HTML, wie sie im Artikel
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Lerne HTML kennen</a
        >
        abgedeckt werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Erlernen von grundlegender Textformattierung - Benutzung von Absätzen,
        Überschriften, Listen, Hervorhebung von Textstellen und Zitate.
      </td>
    </tr>
  </tbody>
</table>

## Überschriften und Absätze

Meistens besteht Text aus Überschriften und Absätzen, egal ob Sie nun eine Geschichte, einen Zeitungsartikel, ein Magazin oder auf einer Webseite lesen.

![An example of a newspaper front cover, showing use of a top level heading, subheadings and paragraphs.](https://mdn.mozillademos.org/files/12371/newspaper_small.jpg)

Gut strukturierter Inhalt macht es sehr viel einfacher und angenehmer diesen zu lesen.

In HTML wird ein Absatz durch ein {{htmlelement("p")}}-Element dargestellt, so zum Beispiel:

```html
<p>Ich bin ein Absatz, ja das bin ich.</p>
```

Jede Überschrift wird von Überschriften-Tags als solche gekennzeichnet:

```html
<h1>Ich bin der Titel einer Geschichte.</h1>
```

Es gibt sechs verschiedene Überschriften-Elemente — {{htmlelement("h1")}}, {{htmlelement("h2")}}, {{htmlelement("h3")}}, {{htmlelement("h4")}}, {{htmlelement("h5")}} and {{htmlelement("h6")}}. Jedes dieser Elemente repräsentiert eine andere Gewichtung des Inhalts im Dokument. `<h1>` repräsentiert die Hauptüberschrift, `<h2>` repräsentiert Unterüberschriften, `<h3>` repräsentiert Unter-Überschriften und so weiter.

### Struktur schaffen

Als Beispiel würden in einer Geschichte `<h1>` zum ausweisen des Titels genutzt, `<h2>` für die Kapitelüberschriften und `<h3>` um ein Kapitel in mehrere Sektionen zu unterteilen.

```html
<h1>Die erdrückende Langeweile</h1>

<p>Von Chris Mills</p>

<h2>Kapitel 1: Die dunkle Nacht</h2>

<p>Es war eine dunkle Nacht. Irgendwo hörte man eine Eule rufen. Der Regen strömte herab auf... </p>

<h2>Kapitel 2: Die ewige Stille</h2>

<p>Unser Protagonist kann gerade so aus dem Schatten heraus flüstern...</p>

<h3>Der Geist spricht</h3>

<p>Nachdem mehrere Stunden der Stille vorbei gegangen waren, setzte sich plötzlich der Geist aufrecht hin und rief "Bitte habt erbarmen mit meiner Seele!"</p>
```

Sie können selber entscheiden, wie Sie Struktur in Ihre Texte bringen wollen, so lange die Hierarchie Sinn ergibt. Hier geben wir Ihnen ein paar Ratschläge, um sinnvolle Strukturen zu erschaffen:

- Sie sollten möglichst nur eine einzige `<h1>`-Überschrift pro Seite haben — dies ist die Hauptüberschrift des Dokuments und alle anderen Überschriften gehören darunter.
- Gehen Sie sicher, das Sie die Überschriften in der richtigen Reihenfolge nutzen. Nutzen Sie nicht `<h3>'` , um Kapitelüberschriften zu kennzeichnen und darunter dann `<h2>'`, um Unterüberschriften im Kapitel anzuzeigen, denn das macht keinen Sinn und führt zu merkwürdigen Resultaten.
- Von den sechs Überschiftenordnungen die es gibt, sollten Sie möglichst nicht mehr als drei pro Seite benutzen, es sei denn es ist wirklich nötig. Dokumente mit zu viel Hierarchien bringen mehr Aufwand mit sich und sie sind schwieriger zu navigieren. Es wäre sinnvoller den entsprechenden Inhalt auf mehrere Seiten zu verteilen.

### Wieso brauchen wir Struktur?

Um diese Frage zu beantworten, schauen wir uns folgendes Dokument an: [text-start.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-start.html) Dieses Dokument (ein leckeres Hummus-Rezept) wird uns den ganzen Artikel lang begleiten, also speichern Sie am besten jetzt gleich eine Kopie davon auf Ihrem Computer, um daran mitzuarbeiten. Der `body` des Dokuments enthält im Moment eine Reihe von Inhalten, welche nicht wirklich strukturiert sind. Einzig ein paar Zeilenumbrüche wurden in dem HTML-Dokument genutzt, um Inhalte voneinander zu trennen (es wurde Enter/Return gedrückt, um zur nächsten Zeile zu springen).

Wenn Sie dieses Dokument im Browser öffnen, werden Sie feststellen, das der Text in einem großen Block angezeigt wird! Die Zeilenumbrüche werden also komplett ignorert.

![Eine Webseite, auf welcher ein unformatiertes Hummus-Rezept zu lesen ist. Es gibt keine Elemente die dem Dokument Struktur geben.](https://mdn.mozillademos.org/files/15527/hummus-rezept-unformatiert.jpg)

Der Browser findet keine Elemente, die dem Dokument eine Struktur geben, er kann nicht von selbst erkennen was Überschriften, Zeilenumbrüche und Absätze sind. Nachteile einer strukturlosen Webseite:

- Neue Benutzer einer Webseite scannen diese als erstes nach relevanten Inhalten durch, lesen oft nur die Überschriften und hervorgehobene Textstellen. Wenn Sie nichts brauchbares innerhalb einiger Sekunden finden, dann werden sie die Webseite wieder verlassen.
- Suchmaschinen indexieren Ihre Webseite auch anhand der Überschriften. Ohne Überschriften würde eine Webseite sehr schlecht in den Suchergebnissen abschneiden. Stichwort: {{glossary("SEO")}} (Suchmaschinenoptimierung).
- Menschen mit Sehbehinderung können eine Webseite nicht lesen. Anstatt dessen wandeln Bildschirmlesegeräte, so genannte Screenreader, die Webseite in gesprochenen Text um. Diese Screenreader benötigen oft die Überschriften eines Dokuments, um die Navigation durch die Webseite zu ermöglichen. Ansonsten würde immer das ganze Dokument komplett vorgelesen, anstatt den Teilen die wirklich von Interesse sind.
- Um den Inhalt mit {{glossary("CSS")}} zu stylen oder mit {{glossary("JavaScript")}} interessante Dinge tun zu lassen, braucht es den Inhalt umschließende Elemente, welche als Ziel genutzt werden können.

Daher müssen wir unserem Text eine sinnvolle Auszeichnung geben.

### Aktives Lernen: Unserem Inhalt Struktur geben

Lassen Sie uns gleich mit einem interaktiven Beispiel beginnen. Ändern Sie den rohen Text im _Input_-Feld mittels HTML-Auszeichnungen so, das im _Output_-Feld eine Überschrift mit zwei Absätzen darunter erscheint.

Wenn Sie einen Fehler machen, können sie mit dem _Reset_-Button ganz einfach den Ausgangszustand wieder herstellen. Wenn Sie wirklich nicht wissen wie es geht, können Sie die Lösung anzeigen lassen indem Sie auf _Lösung anzeigen_ klicken.

```html hidden
<h2>Input</h2>
<textarea id="code" class="input">Meine Kurzgeschichte

Ich bin eine Polizeifrau und mein Name ist Trish.

Meine Beine sind aus Pappkarton und ich bin verheiratet mit einem Fisch.
</textarea>
<h2>Output</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Lösung anzeigen" />
</div>
```

```css hidden
body {
  font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;
}

.input, .output {
  width: 90%;
  height: 8em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function() {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function() {
textarea.value = '<h1>Meine Kurzgeschichte</h1>\n<p>Ich bin eine Polizeifrau und mein Name ist Trish.</p>\n<p>Meine Beine sind aus Pappkarton und ich bin verheiratet mit einem Fisch.</p>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code', 700, 500) }}

### Warum brauchen wir Semantik?

Wir verlassen uns die ganze Zeit auf Semantik - wir beruhen uns auf Ereignisse, die wir erlebt haben, um die Funktion von Dingen um uns herum zu beurteilen. Wenn wir etwas sehen, dann wissen wir was für eine Funktion dieses haben wird. Zum Beispiel erwarten wir, dass eine rote Ampel "Stop" bedeutet, während ein grünes Ampellicht uns erlaubt weiterzufahren. Dinge können schnell aus dem Ruder laufen, wenn Semantik falsch genutzt wird. (Zum Beispiel wäre es in einem Land, in welchem das rote Ampellicht "Fahren" bedeutet, vielleicht nicht so sicher).

Genauso müssen wir bei unseren Elementen aufpassen, diesen die richtige Bedeutung, Funktion und das entsprechende Aussehen zukommen zu lassen. In diesem Kontext ist das {{htmlelement("h1")}}-Element auch ein sematisches Element, welches dem Text innerhalb der Tags die Rolle bzw. Bedeutung einer "Top-Level-Hauptüberschrift für die Webseite" gibt.

```html
<h1>Dies ist eine Hauptüberschrift.</h1>
```

Automatisch gibt der Browser diesem Element eine große Schriftgröße, damit es aussieht, wie eine Überschrift (auch wenn Sie es mittels CSS so stylen können, wie sie möchten). Wichtiger noch, der semantische Wert des Elements wird auf verschiedene Weise genutzt. Zum Beispiel greifen Suchmaschinen und Bildschirmlesegeräte darauf zurück (wie oben erklärt).

Sie können jedes Element so _aussehen_ lassen, wie eine Überschrift. Zum Beispiel wie folgt:

```html
<span style="font-size: 32px; margin: 21px 0;">Ist dies eine Top-Level-Überschrift?</span>
```

Dies ist ein {{htmlelement("span")}}-Element. Es hat keinerlei semantischen Wert. Sie benutzen dieses Element, um Inhalt zu verpacken und als Ziel für CSS oder JavaScript zu nutzen, ohne ihm eine besondere Bedeutung zukommen zu lassen. (Sie werden später mehr darüber heraus finden.) Wir haben CSS benutzt, um dem Text das Aussehen einer Überschrift zu geben. Da es aber keinen sematischen Wert hat, bekommt dieser Text nicht die selbe Bedeutung wie ein echtes Überschriften-Element. Es ist also besser, das richtige HTML-Element für den richtigen Job zu benutzen, auch wenn es anders gehen mag.

## Listen

Lassen Sie uns nun Listen anschauen. Listen gibt es überall - von Ihrem Einkaufszettel, über die Liste an Direktionen, welche Sie unbewusst befolgen, um jeden Tag Ihr Haus wiederzufinden, bis hin zu den Listen an Instruktionen, die sie in diesen Tutorials befolgen! Auch im Internet treffen Sie ständig auf Listen. Wir haben hier drei verschiedene Typen, welche Sie auf Ihren Webseiten benutzen können.

### Ungeordnete Listen

Ungeordnete Listen werden benutzt, um eine Auflistung von Punkten zu erzeugen, bei der die Reihenfolge keine Rolle spielt - als Beispiel nehmen wir eine Einkaufsliste:

    Milch
    Eier
    Brot
    Hummus

Eine ungeordnete Liste startet mit dem {{htmlelement("ul")}}-Element, welches die einzelnen Listenelemente einhüllt:

```html
<ul>
Milch
Eier
Brot
Hummus
</ul>
```

Die einzelnen Listenpunkte selbst, werden jeweils von einem {{htmlelement("li")}}-Element umschlossen:

```html
<ul>
  <li>Milch</li>
  <li>Eier</li>
  <li>Brot</li>
  <li>Hummus</li>
</ul>
```

#### Aktives Lernen: Eine ungeordnete Liste auszeichnen

Versuchen Sie das Beispiel unten so zu ändern, dass Sie eine eigene ungeordnete Liste bekommen.

```html hidden
<h2>Input</h2>
<textarea id="code" class="input">Milch
Eier
Brot
Hummus</textarea>
<h2>Output</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Lösung anzeigen" />
</div>
```

```css hidden
body {
  font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;
}

.input, .output {
  width: 90%;
  height: 6em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function() {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function() {
textarea.value = '<ul>\n<li>Milch</li>\n<li>Eier</li>\n<li>Brot</li>\n<li>Hummus</li>\n</ul>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code_2', 700, 400) }}

### Geordnete Listen

Geordnete Listen sind Listen bei denen die Anordnung der Listenelemente wichtig ist - zum Beispiel bei einer Wegbeschreibung:

    Fahre bis zum Ende der Straße
    Biege rechts ab
    Fahre geradeaus über die nächsten beiden Verkehrskreisel
    Biege nach dem dritten Kreisel links ab
    Nach 300 Metern ist die Schule auf der rechten Seite

Die Auszeichnungsstruktur is dieselbe wie für die ungeordnete Liste, außer das Sie die Listenpunke in ein {{htmlelement("ol")}}-Element einhüllen müssen, anstatt einem `<ul>`-Element:

```html
<ol>
  <li>Fahre bis zum Ende der Straße</li>
  <li>Biege rechts ab</li>
  <li>Fahre geradeaus über die nächsten beiden Verkehrskreisel</li>
  <li>Biege nach dem dritten Kreisel links ab</li>
  <li>Nach 300 Metern ist die Schule auf der rechten Seite</li>
</ol>
```

### Aktives Lernen: Eine geordnete Liste auszeichnen

Bearbeiten Sie unten das Beispiel in der Codebox, so das Sie eine geordnete Liste bekommen:

```html hidden
<h2>Input</h2>
<textarea id="code" class="input">Fahre bis zum Ende der Straße
Biege rechts ab
Fahre geradeaus über die nächsten beiden Verkehrskreisel
Biege nach dem dritten Kreisel links ab
Nach 300 Metern ist die Schule auf der rechten Seite</textarea>
<h2>Output</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Lösung anzeigen" />
</div>
```

```css hidden
body {
  font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;
}

.input, .output {
  width: 90%;
  height: 8em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function() {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function() {
textarea.value = '<ol>\n<li>Fahre bis zum Ende der Straße</li>\n<li>Biege rechts ab</li>\n<li>Fahre geradeaus über die nächsten beiden Verkehrskreisel</li>\n<li>Biege nach dem dritten Kreisel links ab</li>\n<li>Nach 300 Metern ist die Schule auf der rechten Seite</li>\n</ol>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code_3', 700, 500) }}

### Aktives Lernen: Das Hummus-Rezept auszeichnen

An diesem Punkt sollten Sie alle Informationen haben, die Sie brauchen, um unser Hummus-Rezept auf einer Seite mit HTML zu strukturieren. Sie können entweder die [hummus-rezept.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-start.html) Datei herunterladen und lokal auf Ihrem Computer bearbeiten oder die editierbare Codebox unten benutzen. Nur wenn Sie die Aufgabe lokal bearbeiten, können Sie diese auch speichern, um Sie sich später noch einmal anzuschauen. Was Sie im Browser bearbeiten ist beim nächsten Besuch verloren. Also überlegen Sie es, wie Sie es machen möchten.

```html hidden
<h2>Input</h2>
<textarea id="code" class="input">Schnelles Hummus Rezept

    Mit diesem Rezept können Sie schnell und ganz ohne eine Sauerei in der Küche, ein leckeres Hummus zubereiten. Es basiert auf verschiedenen Rezepten, die ich ausprobiert habe über die Jahre.

    Hummus ist eine leckere, dicke Paste, welche vor allem in Gerichten aus Griechenland und dem Mittleren Osten Verwendung findet. Es schmeckt sehr gut zu Salaten, gegrilltem Fleisch und Pita-Brot.


    Zutaten

    1 Dose (400g) Kichererbsen
    175g Tahini
    6 getrocknete Tomaten
    eine halbe Schote rote Paprika
    eine Messerspitze Cayenne Pfeffer
    1 Knoblauchzehe
    ein Spritzer Olivenöl


    Zubereitung

    Schälen Sie den Knoblauch und hacken ihn in grobe Stücke.
    Entfernen Sie den Stiel und die Samen der Paprika, hacken Sie diese dann in grobe Stücke.
    Tun Sie alle Zutaten zusammen in eine Küchenmaschine.
    Pürieren Sie die Zutaten zu einer Paste.
    Wenn Sie einen groben Hummus bevorzugen, pürieren Sie die Zutaten nicht zu lange.
    Wenn Sie einen feinen Hummus haben möchten, pürieren Sie die Zutaten etwas länger.

    Für einen etwas anderen Geschmack, probieren Sie kleine Mengen von Zitrone und Koriander, Chilischoten, Limonen und Chipotle-Paprika, Harissa und Minze oder Spinat und Feta-Käse mit hinein zu tun. Experimentieren Sie, um herauszufinden, was Ihnen am besten schmeckt.


    Aufbewahrung

    Bewahren Sie das Hummus in einem geschlossenen Gefäß im Kühlschrank auf. Es sollte sich bis zu einer Woche halten, nachdem Sie es frisch gemacht haben. Wenn es anfängt komisch auszusehen, dann sollten Sie es wegwerfen.

    Hummus lässt sich einfrieren. Sie sollten es dann innerhalb einiger Monate wieder auftauen und verbrauchen.</textarea>
<h2>Output</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Lösung anzeigen" />
</div>
```

```css hidden
body {
  font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;
}

.input, .output {
  width: 90%;
  height: 8em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function() {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function() {
  textarea.value = ' <h1>Schnelles Hummus Rezept</h1>\n\n<p>Mit diesem Rezept können Sie schnell und ganz ohne eine Sauerei in der Küche, ein leckeres Hummus zubereiten. Es basiert auf verschiedenen Rezepten, die ich ausprobiert habe über die Jahre.</p>\n\n<p>Hummus ist eine leckere, dicke Paste, welche vor allem in Gerichten aus Griechenland und dem Mittleren Osten Verwendung findet. Es schmeckt sehr gut zu Salaten, gegrilltem Fleisch und Pita-Brot.</p>\n\n<h2>Zutaten</h2>\n\n<ul>\n<li>1 Dose (400g) Kichererbsen</li>\n<li>175g Tahini</li>\n<li>6 getrocknete Tomaten</li>\n<li>eine halbe Schote rote Paprika</li>\n<li>eine Messerspitze Cayenne Pfeffer</li>\n<li>1 Knoblauchzehe</li>\n<li>ein Spritzer Olivenöl</li>\n</ul>\n\n<h2>Zubereitung</h2>\n\n<ol>\n<li>Schälen Sie den Knoblauch und hacken ihn in grobe Stücke.</li>\n<li>Entfernen Sie den Stiel und die Samen der Paprika, hacken Sie diese dann in grobe Stücke.</li>\n<li>Tun Sie alle Zutaten zusammen in eine Küchenmaschine.</li>\n<li>Pürieren Sie die Zutaten zu einer Paste.</li>\n<li>Wenn Sie einen groben Hummus bevorzugen, pürieren Sie die Zutaten nicht zu lange.</li>\n<li>Wenn Sie einen feinen Hummus haben möchten, pürieren Sie die Zutaten etwas länger.</li>\n</ol>\n\n<p>Für einen etwas anderen Geschmack, probieren Sie kleine Mengen von Zitrone und Koriander, Chilischoten, Limonen und Chipotle-Paprika, Harissa und Minze oder Spinat und Feta-Käse mit hinein zu tun. Experimentieren Sie, um herauszufinden, was Ihnen am besten schmeckt.</p>\n\n<h2>Aufbewahrung</h2>\n\n<p>Bewahren Sie das Hummus in einem geschlossenen Gefäß im Kühlschrank auf. Es sollte sich bis zu einer Woche halten, nachdem Sie es frisch gemacht haben. Wenn es anfängt komisch auszusehen, dann sollten Sie es wegwerfen.</p>\n\n<p>Hummus lässt sich einfrieren. Sie sollten es dann innerhalb einiger Monate wieder auftauen und verbrauchen.</p>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);

window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code_4', 700, 500) }}

Wenn Sie es nicht selber schaffen, dann können Sie mit einem Klick auf _Lösung anzeigen_ sehen, wie es gemacht wird oder unser ausgzeichnetes Beispiel, [text-complete.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-complete.html), auf GitHub anschauen.

### Listen ineinander schachteln

Listen können ineinander verschachtelt werden. Vielleicht möchten Sie Unterpunke unter einem Listenpunkt haben. Lassen Sie uns das anhand der zweiten Liste in unserem Rezept anschauen:

```html
<ol>
  <li>Schälen Sie den Knoblauch und hacken ihn in grobe Stücke.</li>
  <li>Entfernen Sie den Stiel und die Samen der Paprika, hacken Sie diese dann in grobe Stücke.</li>
  <li>Tun Sie alle Zutaten zusammen in eine Küchenmaschine.</li>
  <li>Pürieren Sie die Zutaten zu einer Paste.</li>
  <li>Wenn Sie einen groben Hummus bevorzugen, pürieren Sie die Zutaten nicht zu lange.</li>
  <li>Wenn Sie einen feinen Hummus haben möchten, pürieren Sie die Zutaten etwas länger.</li>
</ol>
```

Da die letzten beiden Listenpunkte sich auf den Punkt davor beziehen, könnte man diese zusammen unter dem vierten Listenpunkt einordnen, in einer ungeordneten Liste. Das würde so aussehen:

```html
<ol>
  <li>Schälen Sie den Knoblauch und hacken ihn in grobe Stücke.</li>
  <li>Entfernen Sie den Stiel und die Samen der Paprika, hacken Sie diese dann in grobe Stücke.</li>
  <li>Tun Sie alle Zutaten zusammen in eine Küchenmaschine.</li>
  <li>Pürieren Sie die Zutaten zu einer Paste.</li>
  <ul>
    <li>Wenn Sie einen groben Hummus bevorzugen, pürieren Sie die Zutaten nicht zu lange.</li>
    <li>Wenn Sie einen feinen Hummus haben möchten, pürieren Sie die Zutaten etwas länger.</li>
  </ul>
</ol>
```

Gehen Sie zurück zur obigen Aufgabe und fügen Sie eine Liste einer der vorhandenen beiden Listen hinzu. Wenn Sie damit fertig sind, sollte das Rezept so ähnlich aussehen:

![Eine Webseite, auf welcher ein formatiertes Hummus-Rezept zu lesen ist. Es gibt mehrere Elemente die dem Dokument Struktur geben.](https://mdn.mozillademos.org/files/15529/hummus-rezept-formatiert.jpg)

## Betonung und Wichtigkeit

Während wir sprechen, betonen wir oft bestimmte Wörter, um Ihre Bedeutung im Satz zu ändern. Solche Wörter möchten wir in einem Text hervorheben. HTML stellt verschiedene sematnische Elemente zur Verfügung, um dies zu bewerkstelligen. In dieser Sektion schaune wir uns einige der geläufigsten Formen davon an.

### Betonung

Wenn wir eine bestimmte Betonung in der gesprochenen Sprache erreichen wollen, dann heben wir bestimmte Wörter hervor, um ihre Bedeutung leicht zu verändern. Ähnlich heben wir solche Wörter in geschriebener Sprache hervor, indem wir ein Wort _kursiv_ schreiben. Zum Beispiel haben die folgenden beiden Sätze eine unterschiedliche Bedeutung.

Ich bin froh, dass du nicht zu spät bist.

Ich bin _froh_, dass du nicht _zu spät_ bist.

Der erste Satz klingt danach, das jemand wirklich erleichtert ist, das die Person nicht zu spät ist, der zweite Satz klingt hingegen eher sarkastisch, mit einem Klang von Vorwurf, da die Person sich etwas verspätet hatte.

In HTML benutzen wir das {{htmlelement("em")}}-Element (von engl.:emphasis = Betonung), um solche Wörter hervorzuheben. Es macht ein Dokument etwas interessanter zu lesen. Auch Bildschrimlesegeräte können so eine besondere Betonung erkennen und nutzen. Browser zeigen den Text im Element normalerweise kursiv an, doch Sie sollten das Tag nicht einizig dazu benutzen, Text kursiv anzuzeigen. Um das zu erreichen können Sie entweder das {{htmlelement("span")}}-Element und CSS nutzen oder auch das {{htmlelement("i")}}-Element (siehe weiter unten).

```html
<p>Ich bin <em>froh</em> dass du nicht <em>zu spät</em>bist.</p>
```

### Wichtige Wörter

Um wichtige Wörter hervorzuheben, betonen wir diese in der gesprochenen Sprache sehr stark und schreiben diese in **Fettschrift** in geschriebener Sprache. Zum Beispiel:

Diese Flüssigkeit ist **sehr giftig**.

Ich zähle auf dich. **Sei nicht** zu spät!

In HTML benutzen wir das {{htmlelement("strong")}}-Element (engl.: _strong_ = stark/fett) um solche Wörter hervorzuheben. Es macht das Dokument lesbarer und auch hier können Screenreader erkennen, dass Wörter besonders betont ausgelesen werden sollten. Browser zeigen den Inhalt dieses Elements in Fettschrift an, aber Sie sollten diesen Tag nicht alleine dafür verwenden, Schrift fett erscheinen zu lassen. Um das zu erreichen können Sie entweder das {{htmlelement("span")}}-Element und CSS nutzen oder auch das {{htmlelement("b")}}-Element (siehe weiter unten).

```html
<p>Diese Flüssigkeit ist <strong>sehr giftig</strong>.</p>

<p>Ich zähle auf dich. <strong>Sei nicht</strong> zu spät!</p>
```

Sie können `<strong>`-Elemente und `<em>`-Elemente ineinander verschachteln:

```html
<p>Diese Flüssigkeit ist <strong>sehr giftig</strong> —
wenn Sie diese trinken, <strong>dann werden Sie <em>sterben</em></strong>.</p>
```

### Aktives Lernen: Lassen Sie uns wichtig sein!

In diesem Aktives-Lernen-Beispiel, haben wir editierbaren Code. Probieren Sie nun `<strong>`-Elemente und `<em>`-Elemente einzufügen, um bestimmte Textstellen besonders hervorzuheben. Üben Sie ein wenig, diese HTML-Elemente hinzuzufügen und auch zu verschachteln.

```html hidden
<h2>Input</h2>
<textarea id="code" class="input"><h1>Wichtige Nachricht</h1>

<p>Am Sonntag den 9. Januar 2010 wurde eine Gang Goths gesehen, wie sie mehrere Gartenzwerge aus einem Einkaufszentrum, im Stadtzentrum von Milwaukee, geklaut haben. Sie haben alle grüne Anzüge und komische Hüte getragen. Sie scheinen sich dabei großartig amüsiert zu haben. Wenn irgendjemand Informationen zu diesem Vorfall haben, bittet die Polizei darum, kontaktiert zu werden.</p></textarea>
<h2>Output</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Lösung anzeigen" />
</div>
```

```css hidden
body {
  font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;
}

.input, .output {
  width: 90%;
  height: 8em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function() {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function() {
  textarea.value = '<h1>Wichtige Nachricht</h1>\n<p>Am <strong>Sonntag den 9. Januar 2010</strong>, wurde eine Gang <em>Goths</em> gesehen, wie sie <strong><em>mehrere</em> Gartenzwerge</strong> aus einem Einkaufszentrum, im Stadtzentrum von <strong>Milwaukee</strong> geklaut haben. Sie haben alle <em>grüne Anzüge</em> und <em>komische Hüte</em>,  getragen. Sie scheinen sich dabei großartig amüsiert zu haben. Wenn irgendjemand <strong>Informationen</strong> zu diesem Vorfall haben, bittet die Polizei darum, <strong>sofort</strong> kontaktiert zu werden.</p>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code_5', 700, 500) }}

### Kursiv, fett, unterstrichen...

Die beiden Elemente, die wir oben besprochen haben, haben eine eindeutige semantische Bedeutung. Die Situation ist etwas anders mit den {{htmlelement("b")}}, {{htmlelement("i")}} und {{htmlelement("u")}}-Elementen. Sie wurden erschaffen, um Leuten die Möglichkeit zu geben Text in fett (engl.:_**b**old_), kursiv (engl.:_**i**talic_) oder unterstrichen (engl.:_**u**nderlined_) anzuzeigen, in einer Zeit in welcher CSS noch nicht von allen Browsern unterstützt wurde. Solche Elemente, welche nur das Aussehen, aber nicht die Bedeutung, verändern, nennt man auch **präsentationsbezogenes Element**. Sie sollten nach Möglichkeit nicht mehr benutzt werden, denn wie wir gesehen haben, ist eine gute Semantik sehr wichtig für Suchmaschinen und Barrierefreiheit.

In HTML5 wurden `<b>`, `<i>` und `<u>` neu definiert, mit einer etwas verwirrenden semantischen Bedeutung.

Hier ist die beste Faustregel dafür: es ist wahrscheinlich in Ordnung `<b>`, `<i>` oder `<u>` zu benutzen, um die Bedeutung der traditionellen Nutzung von fettem, kursivem oder unterstrichenem Text zu geben, wenn es kein passenderes Element gibt. Denken Sie aber immer auch an die Barrierefreiheit Ihrer Webseite. Leute, welche Screenreader benutzen, können mit kursivem Text, ohne Bedeutung, nichts anfangen. Auch funktioniert es möglicherweise nicht mit einem anderen, als dem Lateinischen Buchstabensystem.

- {{HTMLElement('i')}} wird benutzt, um die traditionelle Rolle von kursivem Text anzuzeigen: Fremdwörter, Taxonomische Begriffe, Fachwörter, Gedanken...
- {{HTMLElement('b')}} wird benutzt, um die traditionelle Rolle von fettem Text anzuzeigen: Stichwörter, Produktnamen, wichtige Sätze...
- {{HTMLElement('u')}} wird benutzt, um die traditionelle Rolle von unterstrichenem Text anzuzeigen: richtige Namen, Rechtschreibfehler...

> **Hinweis:**Eine Warnung zu unterstrichenem Text: **Unterstrichener Text wird stark mit Hyperlinks assoziiert.** Deswegen ist es auf Webseiten besser, nur Links zu unterstreichen. Benutzen Sie das `<u>`-Element, wo es passt, aber passen Sie möglicherweise mit CSS an, damit der Text anders aussieht, als die Links auf Ihrer Webseite. Unten können Sie sehen, wie das gemacht werden kann.

```html
<!-- Wissenschaftliche Namen -->
<p>
  Der winzige Rubinkehlkolibri (<i>Archilochus colubris</i>) ist ein auffallend farbenprächtiger Vogel, der in den östlichen Teilen der USA und Kanadas anzutreffen ist.
</p>

<!-- Fremdwörter -->
<p>
  Das Menü bestand aus einer Fülle an extosichen Wörtern, zum Beispiel <i lang="uk-latn">vatrushka</i>,
  <i lang="id">nasi goreng</i> und <i lang="fr">soupe à l'oignon</i>.
</p>

<!-- Ein bekannter Schreibfehler -->
<p>
  Eines Tages werde ich lernen, wie man <u>bessser</u> buchstabiert.
</p>

<!-- Stichpunkte in einer Anleitung hervorheben -->
<ol>
  <li>
    <b>Schneiden</b> Sie zwei Scheiben Brot ab.
  </li>
  <li>
    <b>Legen</b> Sie eine Tomate und ein Salatblatt zwischen die Brotscheiben.
  </li>
</ol>
```

## Zusammenfassung

Sie haben es geschafft! Dieser Artikel sollte Ihnen beigebracht haben wie Sie Text mit HTML-Elementen strukturieren können. Es wurden die wichtigsten Eltemente dafür vorgeführt. Es gibt weitere Möglichkeiten, Texten eine bestimmte semanitsche Bedeutungen zukommen zu lassen. Wir werden uns diese im Artikel "Fortgeschrittene Textformatierung" anschauen. Im nächsten Artikel geht es erst einmal darum, wie man [Hyperlinks erstellt](/de/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks), das wichtigste Element im Internet.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}
