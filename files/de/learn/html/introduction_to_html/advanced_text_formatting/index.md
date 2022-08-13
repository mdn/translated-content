---
title: Fortgeschrittene Textformatierung
slug: Learn/HTML/Introduction_to_HTML/Advanced_text_formatting
tags:
  - Abkürzungen
  - Beginner
  - Beschreibungslisten
  - Guide
  - HTML
  - Lernen
  - Textformatierung
  - Zitate
translation_of: Learn/HTML/Introduction_to_HTML/Advanced_text_formatting
original_slug: Learn/HTML/Einführung_in_HTML/Fortgeschrittene_Textformatierung
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}

Es gibt viele weitere Elemente in HTML zum formatieren von Text, die wir nicht in unserem Artikel [Einfache Textformatierung mit HTML](/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) abgedeckt haben. Die HTML-Elemente welche in diesem Artikel vorgestellt werden, werden nicht so oft benötigt. Es ist aber hilfreich diese zu kennen. Sie werden hier lernen wie man Zitate, Beschreibende Listen, Code und ähnliche Texte, sowie tiefer oder höher gestellte Zeichen ausgibt und noch mehr.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Vorwissen:</th>
      <td>
        Grundlegende HTML Kenntnisse, wie sie in den vorhergehenden Artikeln
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started"
          >Lernen Sie HTML kennen</a
        >
        und
        <a
          href="/de/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >Einfache Textformatierung mit HTML</a
        >
        abgedeckt werden.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Kennenlernen von weniger bekannten HTML-Elementen, um Text anspruchsvoll
        zu formatieren.
      </td>
    </tr>
  </tbody>
</table>

## \<dl> - Beschreibungslisten

In Einführung in Textformatierung mit HTML haben wir Ihnen gezeigt, wie man einfache geordnete und ungeordnete Listen erstellt. Es gibt aber noch einen dritten Typ Listen, der nicht so oft Verwendung findet. Es handelt sich um **Beschreibungslisten** (engl.: "**d**escription **l**ists"). Mit dem `dl`-Element lässt sich eine Liste von Begriffen (**l**ist **t**erm) `lt` erstellen, welchen eine Beschreibung (engl. "**d**escription") `dd` hinzugefügt wird. Diese Art von Liste ist z.B. in Wörterbüchern zu finden, wo es zu einem bestimmten Begriff eine längere Beschreibung gibt. Lassen Sie uns in einem Beispiel anschauen, wie so eine beschreibende Liste genau aufgebaut ist. Hier haben wir eine noch unformatierte Liste, welche wir in eine Beschreibungsliste umwandeln wollen:

    Innerer Monolog
    Der innere Monolog ist eine Form des Erzählens und wird oft zur Vermittlung von Gedankenvorgängen gebraucht.
    Monolog
    Der Monolog (gr. μόνος mónos „allein“ und -log; lat. Soliloquium) ist im Gegensatz zum Dialog ein Selbstgespräch und findet vor allem im Drama Verwendung.
    Beiseitesprechen
    Das Beiseitesprechen oder A-part-Sprechen ist ein Stilmittel des Theaters. Eine Bühnenfigur sagt etwas, das ihre Dialogpartner nicht mitbekommen, wohl aber das Publikum.

Beschreibungslisten werden vom {{htmlelement("dl")}};-Element eingeschlossen. Jeder Begriff ist in ein {{htmlelement("dt")}}-Element eingebettet, während die dazugehörige Beschreibung danach in einem {{htmlelement("dd")}}-Element hinzugefügt wird. Das sieht dann wie folgt aus:

```html
<dl>
  <dt>Innerer Monolog</dt>
  <dd>Der innere Monolog ist eine Form des Erzählens und wird oft zur Vermittlung von Gedankenvorgängen gebraucht.</dd>
  <dt>Monolog</dt>
  <dd>Der Monolog (gr. μόνος mónos „allein“ und -log; lat. Soliloquium) ist im Gegensatz zum Dialog ein Selbstgespräch und findet vor allem im Drama Verwendung.</dd>
  <dt>Beiseitesprechen</dt>
  <dd>Das Beiseitesprechen oder A-part-Sprechen ist ein Stilmittel des Theaters. Eine Bühnenfigur sagt etwas, das ihre Dialogpartner nicht mitbekommen, wohl aber das Publikum.</dd>
</dl>
```

Browser stellen die Beschreibungen zu den Begriffen in den Beschreibungslisten normalerweise eingerückt dar. Hier auf MDN werden die Begriffe zusätzlich noch fett hervorgehoben.

- Innerer Monolog
  - : Der innere Monolog ist eine Form des Erzählens und wird oft zur Vermittlung von Gedankenvorgängen gebraucht.
- Monolog
  - : Der Monolog (gr. μόνος mónos „allein“ und -log; lat. Soliloquium) ist im Gegensatz zum Dialog ein Selbstgespräch und findet vor allem im Drama Verwendung.
- Beiseitesprechen
  - : Das Beiseitesprechen oder A-part-Sprechen ist ein Stilmittel des Theaters. Eine Bühnenfigur sagt etwas, das ihre Dialogpartner nicht mitbekommen, wohl aber das Publikum.

Es ist möglich mehrere Beschreibungen zu einem einzigen Begriff anzugeben:

- Beiseitesprechen

  - : Das Beiseitesprechen oder A-part-Sprechen ist ein Stilmittel des Theaters.

    Eine Bühnenfigur sagt etwas, das ihre Dialogpartner nicht mitbekommen, wohl aber das Publikum.

### Aktives Lernen: Eine Beschreibungsliste erstellen

Jetzt sind Sie dran: erstellen Sie eine Beschreibungsliste. Fügen Sie zu dem Text im _Input_-Feld unten die entsprechenden HTML-Elemente ein, so wie Sie es gerade gelernt haben. Im _Output_-Feld können Sie sehen, wie das Ergebnis im Browser angezeigt wird.

Wenn Sie einen Fehler machen, können sie mit dem _Reset_-Button ganz einfach den Ausgangszustand wieder herstellen. Wenn Sie wirklich nicht wissen wie es geht, können Sie die Lösung anzeigen lassen indem Sie auf _Lösung anzeigen_ klicken.

```html hidden
<h2>Input</h2>
<textarea id="code" class="input">Bacon
Das was die Welt im Inneren zusammen hält.
Eier
Das was den Kuchen im Inneren zusammen hält.
Kaffee
Das Getränk welches die Welt am laufen hält.
Eine bräunliche Farbe, desto dunkler umso stärker.
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
  height: 10em;
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
textarea.value = '<dl>\n  <dt>Bacon</dt>\n  <dd>Das was die Welt im Inneren zusammen hält.</dd>\n  <dt>Eier</dt>\n  <dd>Das was den Kuchen im Inneren zusammen hält.</dd>\n  <dt>Kaffee</dt>\n  <dd>Das Getränk welches die Welt am laufen hält.
</dd>\n  <dd>Eine bräunliche Farbe, desto dunkler umso stärker.</dd>\n</dl>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code_1', 700, 500) }}

## Zitate

Mit HTML lassen sich auch Zitate als solche Kennzeichnen. Sie können entweder Blockzitate verwenden oder aber im Fließtext direkt Zitate einbinden.

> **Hinweis:** Zitat kann ins Englische sowohl als "quote" als auch als "citation" übersetzt werden. Beide englischen Wörter werden in HTML parallel genutzt, als "quote" für `blockquote` und `q` und die Abkürzung für "citation" `cite`.

### \<blockquote> - Blockzitate

Um ein Blockzitat (engl.: "blockquote") zu erstellen benutzen Sie das {{htmlelement("blockquote")}}-Element. Damit können Sie auf Blockebene ein Zitat erstellen, welches z.B. einen ganzen Absatz, eine Liste oder ähnliches enthält. Sie können mit einer URL auf die Quelle des Zitates verlinken, nutzen Sie dafür das {{htmlattrxref("cite","blockquote")}}-Attribut. Als Beispiel zeigen wir ein Blockzitat von der MDN-Seite über das `<blockquote>`-Element:

```html
<p>Das <strong>HTML <code><blockquote></code> Element</strong> (oder <em>HTML Block Quotation Element</em>) gibt an, dass der eingeschlossene Text ein erweiterndes Zitat ist.</p>
```

Um dies in ein Blockzitat zu verwandeln, machen wir einfach folgendes:

```html
<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
  <p>Das <strong>HTML <code><blockquote></code> Element</strong> (oder <em>HTML Block Quotation Element</em>) gibt an, dass der eingeschlossene Text ein erweiterndes Zitat ist.</p>
</blockquote>
```

Browsers werden ein Blockzitat standardmäßig einrücken, um es als Zitat zu kennezichnen. Hier auf MDN macht es das auch, aber der Stil wurde noch etwas mehr verändert:

{{EmbedLiveSample("<blockquote> - Blockzitate", 300, 300)}}

### \<q> - Inline Zitate

Inline Zitate (Zitat = engl.: "**q**uote") funktionieren ganz ähnlich. Wir benutzen das {{htmlelement("q")}}-Element, um diese zu kennzeichnen. Unser Beispiel unten enthält ein Zitat von der `<q>`-Seite:

```html
<p>Das Zitat-Element — <code>&lt;q&gt;</code> — <q cite="https://developer.mozilla.org/de/docs/Web/HTML/Element/q"> indiziert, dass es sich bei dem eingeschlossenen Text um ein kurzes Zitat handelt.</q></p>
```

Browser werden ein Zitat als normalen Text, welcher in Anführungszeichen eingepackt ist, anzeigen:

Das Zitat-Element — `<q>` — indiziert, dass es sich bei dem eingeschlossenen Text um ein kurzes Zitat handelt.

### \<cite> - Quellenangabe

Der Inhalt des {{htmlattrxref("cite","blockquote")}}-Attributs scheint hilfreich zu sein, leider ist es aber so das Browser, Bildschirmlesegeräte und dergleichen nicht viel damit machen können. Es gibt keinen Weg den Inhalt des `cite`-Attributs anzuzeigen, ohne eine eigene Lösung mittels JavaScript oder CSS zu schreiben. Wenn Sie die Quelle für den Leser zugägnlich machen wollen, dann benutzen Sie besser das {{htmlelement("cite")}}-Element. Eigentlich sollte darin der Name der zitierten Quelle stehen - also der Name des Buches oder der Person - aber es gibt keinen Grund warum man nicht einen Link hier einfügen kann. Das sieht dann so aus:

```html
<p>Auf der <a href="https://developer.mozilla.org/de/docs/Web/HTML/Element/blockquote">
<cite>MDN blockquote-Seite</cite></a> steht:
</p>

<blockquote cite="https://developer.mozilla.org/de/docs/Web/HTML/Element/blockquote">
  <p>Das <strong>HTML <code>&lt;blockquote&gt;</code>-Element</strong> (oder <em>HTML Block
  Quotation Element</em>) indiziert, dass es sich bei dem eingeschlossenen Text um ein erweitertes Blockzitat handelt.</p>
</blockquote>

<p>Das <code>&lt;q&gt;</code>-Element — ist <q cite="https://developer.mozilla.org/de/docs/Web/HTML/Element/q">indiziert, dass es sich bei dem eingeschlossenen Text um ein kurzes Zitat handelt.
Das <code>&lt;q&gt;</code>-Element -- <a href="https://developer.mozilla.org/de/docs/Web/HTML/Element/q">
<cite>MDN q Seite</cite></a>.</p>
```

Die `cite`-Elemente werden standardmäßig in kursiver Schrift angezeigt. Sie können diesen Code auch auf GitHub als [quotations.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/advanced-text-formatting/quotations.html) Beispiel anschauen.

### Aktives lernen: Wer hat das gesagt?

Es ist Zeit für eine weitere Übung! Bitte lösen Sie die folgenden Aufgaben:

1. Ändern Sie den mittleren Absatz in ein Blockzitat, weches ein `cite`-Attribut besitzt.
2. Ändern Sie einen Teil des dritten Absatzes in ein Inline Zitat, welches ebenfalls ein `cite`-Attribut besitzt.
3. Fügen Sie jedem Link ein `<cite>`-Element hinzu.

Suchen Sie selbst online nach den richtigen Quellen für diese Zitate.

Wenn Sie einen Fehler machen, können sie mit dem _Reset_-Button ganz einfach den Ausgangszustand wieder herstellen. Wenn Sie wirklich nicht wissen wie es geht, können Sie die Lösung anzeigen lassen indem Sie auf _Lösung anzeigen_ klicken.

```html hidden
<h2>Input</h2>
<textarea id="code" class="input"><p>Hallo und willkommen zu meiner Motivations-Webseite. Wie Konfuzius einmal sagte:</p>

<p>It does not matter how slowly you go as long as you do not stop. Auf deutsch: Es ist egal wie langsam du gehst, so lange du nicht anhältst.</p>

<p>Ich mag auch das Konzept des positiven Denkens und versuche negative Selbstkritik zu vermeiden (wie im Artikel "The Need To Eliminate Negative Self Talk" in Affirmations for Positive Thinking erklärt wird).</p></textarea>
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
  height: 10em;
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
textarea.value = '<p>Hallo und willkommen zu meiner Motivations-Webseite. Wie <a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"><cite>Konfuzius</cite></a> einmal gesagt hat:</p>\n\n<blockquote cite="http://www.brainyquote.com/quotes/authors/c/confucius.html">\n  <p>It does not matter how slowly you go as long as you do not stop. Auf deutsch: Es ist egal wie langsam du gehst, so lange du nicht anhältst.</p>\n</blockquote>\n\n<p>Ich mag auch das Konzept des positiven Denkens und versuche negative Selbstkritik zu vermeiden (wie im Artikel <q cite="http://www.affirmationsforpositivethinking.com/index.htm">The Need To Eliminate Negative Self Talk</q> in <a href="http://www.affirmationsforpositivethinking.com/index.htm"><cite>Affirmations for Positive Thinking</cite></a> erklärt wird).</p>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code_2', 700, 500) }}

## \<abbr> - Abkürzungen

Ein weiteres Element, welches man öfters auf Webseiten findet ist {{htmlelement("abbr")}}. Es wird genutzt, um Abkürzungen zu kennzeichnen und die volle Schreibweise der Abkürzung zur Verfügung zu stellen. Die volle Schreibweise wird in dem Element als {{htmlattrxref("title")}}-Attribut angegeben. Hier ein paar Beispiele:

    <p>Wir benutzen <abbr title="Hypertext Markup Language">HTML</abbr>, um ein Webdokument zu strukturieren.</p>

    <p>Ich denke <abbr title="Doktor">Dr.</abbr> Green war in der Küche mit der Kettensäge.</p>

Dies wird wie folgt im Browser ausgegeben (der volle Text der Abkürzungen wird angezeigt, wenn der Mauszeiger darüber gefahren wird):

Wir nutzen HTML, um ein Webdokument zu strukturieren.

Ich denke Dr. Green war in der Küche mit der Kettensäge.

> **Hinweis:** Es gibt ein weiteres Element, {{htmlelement("acronym")}}, welches das selbe tut wie `<abbr>`, nur das es Acronyme kennzeichnen sollte. Es wird aber kaum genutzt und von Browsern wird es nicht so gut unterstüzt. Es ist also besser nur noch `<abbr>` zu nutzen.

### Aktives lernen: Eine Abkürzung kennzeichnen

In dieser kleinen Lernübung, möchten wir, das Sie eine Abkürzung als solche Kennzeichnen. Sie können das Beispiel unten benutzen oder es durch ein eigenes ersetzen.

```html hidden
<h2>Input</h2>
<textarea id="code" class="input"><p>Die NASA bringt uns den Sternen näher.</p></textarea>
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
  height: 5em;
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
textarea.value = '<p><abbr title="National Aeronautics and Space Administration">NASA</abbr> bringt uns den Sternen näher.</p>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code_3', 700, 350) }}

## Kontaktdaten markieren

HTML hat ein Element, um Kontaktdaten zu markieren — {{htmlelement("address")}}. Beispiel:

```html
<address>
  <p>Chris Mills, Manchester, The Grim North, UK</p>
</address>
```

Eine Sache die man sich merken sollte ist, dass das \<address>-Element dafür gedacht ist, die Kontaktdaten der Person zu markieren, welche den HTML-Code geschrieben hat, nicht irgendeine Adresse. Das obige Beispiel wäre nur ok, wenn Chris tatsächlich das Dokument geschrieben hat, in dem die Adresse zu finden ist. Das folgende wäre aber auch in Ordnung:

```html
<address>
  <p>Webseite erstellt von <a href="../authors/chris-mills/">Chris Mills</a>.</p>
</address>
```

## Hochstellen und tiefstellen von Text

Manchmal brauchen sie hochgestellten oder tiefgestellten Text. Für hochgestellten Text (engl.: superscript) gibt es das HTML-Element {{htmlelement("sup")}}. Für tiefergestellten Text (engl.: subscript) gibt es das Element {{htmlelement("sub")}}. Beispiel:

```html
<p>My birthday is on the 25<sup>th</sup> of May 2001.</p>
<p>Die chemische Formel von Koffein ist C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.</p>
<p>Wenn x<sup>2</sup> gleich 9 ist, dann muss x gleich 3 oder -3 sein.</p>
```

Der Code wird wie folgt gerendert:

My birthday is on the 25th of May 2001.

Die chemische Formel von Koffein ist C8H10N4O2.

Wenn x2 gleich 9 ist, dann muss x gleich 3 oder -3 sein.

## Computercode darstellen

Es gibt ein paar Elemente mit denen man Computercode darstellen kann:

- {{htmlelement("code")}}: Um normalen Computercode darzustellen.
- {{htmlelement("pre")}}: Um Leerzeichen mit darzustellen, welche im Code genutzt werden, um Codeblöcke voneinander abzugrenzen. Normalerweise würde der Browser mehr als 1 Leerzeichen ignorieren und zu einem einzigen zusammen fassen, wenn der Text in `<pre></pre>` Tags eingepackt ist, dann bleiben die Leerzeichen erhalten.
- {{htmlelement("var")}}: Um Variabelnamen zu markieren.
- {{htmlelement("kbd")}}: Um Tastatureingaben darzustellen.
- {{htmlelement("samp")}}: Um das Ergebnis eines Computerprogramms zu markieren.

Schauen wir uns ein paar Beispiele an. Hiermit können Sie ein wenig herum experimentieren (sie können auch diese Kopie davon herunterladen [other-semantics.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/advanced-text-formatting/other-semantics.html)):

```html
<pre><code>var para = document.querySelector('p');

para.onclick = function() {
  alert('Au, hör auf mich zu drücken!!');
}</code></pre>

<p>Sie sollten nicht zu repräsentative Elemente benutzen, wie <code>&lt;font&gt;</code> und <code>&lt;center&gt;</code>.</p>

<p>In dem obigen JavaScript Beispiel, repräsentiert <var>para</var> ein p-Element.</p>


<p>Markieren Sie den ganzen Text mit <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

Der obige Code sollte im Browser folgendermaßen aussehen:

{{ EmbedLiveSample('Computercode_darstellen','100%',300) }}

## Zeit und Datum markieren

HTML stellt auch das {{htmlelement("time")}} zur Verfügung, um Zeit und Datum so darzustellen, das auch Computer diese lesen können. Beispiel:

```html
<time datetime="2016-01-20">20 Januar 2016</time>
```

Wieso ist das nützlich? Deswegen, weil Menschen auf viele verschiedene Weisen ein Datum wiedergeben. Das obige Datum könnte auch wie folgt geschrieben sein:

- 20 Januar 2016
- 20th Januar 2016
- Jan 20 2016
- 20/06/16
- 06/20/16
- The 20th of next month
- 20e Janvier 2016
- 2016 年 1 月 20 日
- Und so weiter

Ein Computer kann nicht so einfach erkennen, das immer das selber Datum gemeint ist. Wenn man also automatisch alle Datumsangaben von einer Webseite erfassen möchte, um diese zum Beispiel in einem Kalender zu nutzen, dann braucht man eine einheiltiche Schreibweise für den Computer. Mit dem {{htmlelement("time")}}-Element können Sie an eine beliebige Datumsschreibweise, eine einfache, für den Computer lesbare Form anhängen.

Das grundlegende Beispiel oben zeigt ein einfaches, vom Computer lesbares Datum. Aber es gibt mehr verschiedene Optionen, zum Beispiel:

```html
<!-- Jahr-Monat-Tag -->
<time datetime="2016-01-20">20 Januar 2016</time>
<!-- Nur Jahr und Monat -->
<time datetime="2016-01">January 2016</time>
<!-- Nur Monat und Tag -->
<time datetime="01-20">20 January</time>
<!-- Nur die Zeit, Stunden:Minuten -->
<time datetime="19:30">19:30</time>
<!-- Man kann auch Sekunden und Millisekunden angeben! -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- Datum und Uhrzeit -->
<time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
<!-- Datum und Uhrzeit mit Zeitzone -->
<time datetime="2016-01-20T19:30+01:00">7.30pm, 20 Januar 2016 ist 8.30pm in Frankreich</time>
<!-- Eine bestimmte Wochennummer angeben-->
<time datetime="2016-W04">Die vierte Woche im Jahr 2016</time>
```

## Zusammenfassung

Dies ist alles, was Sie über Textstrukturierung in HTML wissen müssen. Es gibt ntürlich noch mehr HTML-Elemente für die Darstellung und Strukturierung von Texten, aber die gebräuchlisten haben wir nun in diesem Kurs abgedeckt. Falls Sie dennoch daran interessiert sind wirklich alle Elemente zur Textgestlaltung kennen zu lernen, dann schauen Sie in unserer [HTML-Element Referenz](/de/docs/Web/HTML/Element) nach, denn dort sind alle HTML-Elemente aufgelistet.
Im nächsten Artikel geht es darum, Struktur in unser ganzes HTML-Dokument zu bringen, wie man verschiedene Bereiche einer Webseite bestimmt und diese ausrichtet. Lesen Sie weiter!

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}
