---
title: Lerne HTML kennen
slug: Learn/HTML/Introduction_to_HTML/Getting_started
tags:
  - Anfänger
  - Attribut
  - Beginner
  - Charakter-Referenz
  - Element
  - Guide
  - HTML
  - Kommentar
  - Leerraum
  - Modul
  - whitespace
translation_of: Learn/HTML/Introduction_to_HTML/Getting_started
original_slug: Learn/HTML/Einführung_in_HTML/Lerne_HTML_kennen
---
{{LearnSidebar}}{{NextMenu("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML")}}

In diesem Artikel werden wir Ihnen die Grundlagen von HTML beibringen. Wir werden definieren was Elemente, Attribute und einige andere Begriffe, die sie im Zusammenhang mit dieser Sprache kennen lernen werden, sind. Wir zeigen auch wie ein HTML Element strukturiert ist, wie eine typische HTML Webseite aufgebaut ist und erklären weitere wichtige Grundlagen dieser Sprache. Währenddessen können Sie oft mit HTML-Code experimentieren.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Vorbereitungen:</th>
      <td>
        grundlegende Computerkenntnisse,
        <a
          href="https://developer.mozilla.org/de/Learn/Getting_started_with_the_web/Installing_basic_software"
          >notwendige Software installiert</a
        >
        und wissen wie man
        <a
          href="https://developer.mozilla.org/de/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Dateien nutzt</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        <p>
          Grundwissen über die HTML Sprache erwerben, etwas Praxis beim
          Schreiben von HTML Elementen erwerben.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Was ist HTML?

HTML ist nicht wirklich eine Programmiersprache, sondern eine Auszeichnungssprache; sie ist dazu gedacht, Ihre Webseite zu strukturieren. Die Sprache besteht aus einer Reihe von Elementen, Tags genannt, welche Sie um verschiedene Teile Ihres Inhalts herum platzieren können, um diesem eine spezielle Aufgabe zuzuweisen. Zum Beispiel können Sie damit einen Text oder ein Bild in einen Link verwandeln. Als Beispiel nehmen wir folgenden Inhalt:

    Meine Katze ist sehr frech.

Wenn wir möchten das der Satz in einem eigenen Absatz steht, können wir mit {{htmlelement("p")}} spezifizieren, das es sich um einen Absatz handelt:

```html
<p>Meine Katze ist sehr frech.</p>
```

### Aufbau eines HTML-Elements

Schauen wir uns den Aufbau unseres Paragraphen-Elements ein wenig genauer an.

![](https://mdn.mozillademos.org/files/15443/katze-element.jpg)

Die Hauptteile unseres Elements sind:

1. **Das öffnende Tag:** Diese besteht aus dem Namen des Elements (in diesem Fall ein `p` für paragraph (engl.:Absatz)), welcher zwischen zwei spitzen Klammern eingesetzt ist. Dies zeigt an, wo das Element beginnt — in diesem Fall am Anfang unseres Absatzes.
2. **Der Inhalt:** Dies ist der Inhalt des Elements, in diesem Fall einfach nur Text.
3. **Das schließende Tag:** Dieses sieht genauso aus wie das öffnende Tag bis auf den zusätzlichen Schrägstrich (slash) vor dem Namen des Elements. Dieser Tag kommt an das Ende des Elementes — in diesem Fall am Ende des Absatzes.
4. **Das Element:** Das öffnende Tag, der Inhalt und das schließende Tag gemeinsam ergeben zusammen das Element.

### Aktives Lernen: Erstellen Sie Ihr erstes HTML-Element

Editieren Sie den Text unten im _Input_-Feld. Heben Sie den Text mit dem `<em>`-Element hervor. (schreiben sie ein `<em>`-Tag vor den Text, um das _Element zu öffnen_ und fügen sie ein `</em>`-Tag am Ende des Textes an, um das _Element zu schließen_) Dies sollte den Text _kursiv_ darstellen. Sie sollten die Änderungen live in dem _Output_-Feld sehen können.

Wenn Sie einen Fehler machen, können sie mit dem _Reset_-Button ganz einfach den Ausgangszustand wieder herstellen. Wenn Sie wirklich nicht wissen wie es geht, können Sie die Lösung anzeigen lassen indem Sie auf _Lösung anzeigen_ klicken.

```html hidden
<h2>Input</h2>
<textarea id="code" class="input">Dies ist mein Text.</textarea>
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
  height: 2em;
  padding: 10px;
  border: 1px solid #0095dd;
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
  textarea.value = '<em>Dies ist mein Text.</em>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code', 700, 300) }}

### Elemente verschachteln

Sie können auch Elemente innerhalb von anderen Elementen erstellen, dies wird **Verschachteln** genannt. Wenn wir hervorheben wollen, das unsere Katze **sehr** schlecht gelaunt ist, können wir das Wort "sehr" in ein `<strong>`-Element einbinden, was bedeutet, das dieses Wort fett hervorgehoben werden soll:

```html
<p>Meine Katze ist <strong>sehr</strong> frech.</p>
```

Sie müssen allerdings aufpassen, das Sie die Elemente richtig verschachteln: in dem obigen Beispiel haben wir zuerst das `<p>`-Element geöffnet, dann das `<strong>`-Element geöffnet. Deswegen müssen wir zuerst wieder das `<strong>`-Element schließen, bevor wir das `<p>`-Element schließen können. Das folgende Beispiel wäre deswegen falsch:

```html example-bad
<p>Meine Katze ist <strong>sehr frech.</p></strong>
```

Die Elemente müssen in der korrekten Reihenfolge geöffnet und geschlossen werden, so dass eines eindeutig innerhalb von dem anderen Element liegt. Wenn die Elemente überlappen, dann muss der Browser versuchen zu entscheiden, welches Element innerhalb sein soll und es können unerwartete Resultate herauskommen. Also passen Sie darauf auf.

### Blockelemente und Inlineelemente

Es gibt zwei wichtige Kategorien von Elementen in HTML - Blockelemente und Inlineelemente.

- Blockelemente bilden eine sichtbare Box auf der Webseite - sie erscheinen in einer neuen Zeile, egal was für ein Inhalt vor diesem Element steht und aller Inhalt nach diesem Element wird ebenfalls auf eine neue Zeile geschoben. Blockelemente machen die Struktur der Webseite aus, sie repräsentieren Absätze, Listen, Navigationsmenüs oder die Fußzeile. Ein Blockelement kann nicht innerhalb von einem Inlineelement stehen, es kann aber innerhalb anderer Blockelemente sein.
- Inlineelemente sind die Elemente welche immer innerhalb eines Blockelements stehen und nehmen nur den Platz direkt innerhalb einer Zeile (engl.: line) ein. Inlineelemente starten keine neue Zeile, normallerweise erscheinen Sie innerhalb eines Textabsatzes. Zum Beispiel sind die Elemente {{htmlelement("strong")}} und {{htmlelement("em")}} Inlineelemente.

Schauen Sie sich folgendes Beispiel an:

```html hidden
<h2>Input</h2>
<textarea id="code" class="input"><em>Erster</em><em>Zweiter</em><em>Dritter</em><p>Vierter</p><p>Fünfter</p><p>Sechster</p></textarea>
<h2>Output</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Reset" />
</div>
```

```css hidden
body {
  font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;
}

.input {
  width: 90%;
  height: 4em;
  padding: 10px;
  border: 1px solid #0095dd;
}

.output {
  width: 90%;
  height: 10em;
  padding: 10px;
  border: 1px solid #0095dd;
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

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function() {
  textarea.value = code;
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code2', 700, 400) }}

{{htmlelement("em")}} ist ein Inlineelement. Sie können oben sehen, das die ersten drei Elemente in einer Zeile sind, ohne Zwischenräume zwischen den Elementen. {{htmlelement("p")}} ist ein Blockelement, welches jeweils eine neue Zeile für sich alleine einnimmt, mit Platz darüber und darunter.

> **Note:** **Notiz**: In HTML5 wurden die Elementkategorien neu definiert: die neuen Definitionen finden sie in [Element content categories](http://www.whatwg.org/specs/web-apps/current-work/complete/section-index.html#element-content-categories), (auf Englisch). Diese Definitionen sind akkurater als die beiden, welche wir hier vorgstellt haben, sie sind aber auch viel komplizierter. In diesem Modul bleiben wir bei unseren Block- und Inlineelementkategorien.

> **Note:** **Notiz**: Sie können auf MDN hilfreiche Referenzseiten finden - für alle [Blockelemente](/de/docs/Web/HTML/Block-level_elements) und [Inlineelemente](/de/docs/Web/HTML/Inline_elements).

### Leere Elemente

Nicht alle Elemente folgen dem obigen Muster, mit einem öffnenden Tag, dem Inhalt und einem schließenden Tag. Manche Elemente brauchen nur einen einzigen Tag, welcher meist genutzt wird, um etwas in eine Seite einzubetten, an der Stelle wo das Tag steht. Zum Beispiel zeigen wir das {{htmlelement("img")}}-Element, welches genutzt wird um eine Bilddatei einzubinden:

```html
<img src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png">
```

Der Code würde folgende Webseite im Browser anzeigen:

{{ EmbedLiveSample('Leere_Elemente', 700, 300) }}

## Attribute

Elemente können auch Attribute enthalten, dass sieht dann so aus:

![](https://mdn.mozillademos.org/files/15463/katze-attribut.png)

Diese Attribute enthalten Zusatzinformationen über das Element, welche nicht als eigentlicher Inhalt anzeigt werden. In diesem Fall erlaubt dieses Attribut, ihm einen Identifizierungsnamen zu geben, welchen man später dazu verwenden kann, dieses Element mit Informationen wie z. B. Schriftart und -farbe zu versehen.

In unserem Beispiel ist der _Name_ des Attributes `class` und `editor-note` ist der diesem Attribut zugeordnete _Wert_.

Ein Attribut sollte immer haben:

1. Einen Abstand zwischen ihm und dem Elementnamen (oder dem vorherigen Attribut, wenn es mehrere sind).
2. Den Attributnamen, gefolgt von Gleichheitszeichen
3. Anführungs- und Schlusszeichen um den Wert. (bsp. ` "``editor-note" `)

### Aktives Lernen: Hinzufügen von Attributen zu einem Element

Ein weiteres Beispiel für ein Element ist {{htmlelement("a")}} — dies steht für Anker (engl.:anchor) und macht aus dem Text den es umschließt einen Hyperlink. Dieses Element kann einige Attribute annehmen, hier sind einige von ihnen:

- `href`: Dieses Attribut bestimmt die Webadresse, zu welcher der Link einen leiten soll, wenn man auf diesen klickt. Zum Beispiel könnte das so aussehen: `href="https://www.mozilla.org/"`.
- `title`: Das `title` Attribut bestimmt Extrainformationen über den Link, zum Beispiel zu welcher Seite der Link führt. Dies erscheint als Tooltip, wenn man mit der Maus darüber fährt. Beispiel: `title="The Mozilla homepage"`.
- `target`: Das `target` Attribut bestimmt wie der Link vom Browser geöffnet werden soll. Zum Beispiel bestimmt `target="_blank"` das die angegebene Webseite in einem neuen Tab geöffnet werden soll. Wenn die Webseite in dem aktuellen Tab geöffnet werden soll, kann man dieses Attribut einfach weglassen, da Browser dies standardmäßig tun.

Editieren Sie unten im _Input_-Feld die Zeile so, das es ein Link zu Ihrer Lieblingswebseite wird. Als erstes fügen Sie das `<a>`-Element hinzu. Danach fügen sie das `href`-Attribut und das `title`-Attribut hinzu. Als letztes sagen Sie dem Browser mit dem `target`-Attribut, das der Link in einem neuen Tab geöffnet werden soll. Sie werden Ihre Veränderungen live im _Output_-Feld verfolgen können. Wenn Sie fertig sind, sollten Sie einen Link sehen, welcher den Inhalt des `title`-Attributes anzeigt, wenn man mit dem Mauszeiger darüberfährt und wenn mn daraufklickt sollte der Link zu der entsprechenen Webadresse führen, welche sie im `href`-Attribut angegeben haben. Denken Sie daran, dass Sie ein Leerzeichen zwischen dem Element und dem ersten Attribut haben müssen und jeweils zwischen den Attributen.

Wenn Sie einen Fehler machen können Sie das _Input_-Feld jederzeit mit dem _Reset_-Button zurücksetzen. Wenn Sie gar nicht auf die Lösung kommen, können Sie sich die Lösung anzeigen lassen indem Sie auf _Lösung anzeigen_ klicken.

```html hidden
<h2>Input</h2>
<textarea id="code" class="input">&lt;p&gt;Ein Link zu meiner Lieblingswebseite.&lt;/p&gt;</textarea>
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
  height: 3em;
  padding: 10px;
  border: 1px solid #0095dd;
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
  textarea.value = '<p>Ein Link zu meiner <a href="https://www.mozilla.org/" title="The Mozilla homepage" target="_blank">Lieblingswebseite</a>.</p>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code3', 700, 300) }}

### Boolsche Attribute

Sie werden manchmal Attribute sehen, welche ohne Wert geschrieben sind und das ist so erlaubt. Es handelt sich um Boolsche Attribute und diese können nur einen Wert annehmen, welcher meist derselbe ist, wie der Name des Attributs. Als Beispiel zeigen wir das {{htmlattrxref("disabled", "input")}}-Attribut, welches Sie einem `<input>`-Element hinzufügen können, um dieses unbenutzbar (engl.: disabled) zu machen, d.h. das `<input>`-Feld wird ausgegraut und man kann keine Daten eingeben.

    <input type="text" disabled="disabled">

Als Kurzform kann man auch den folgenden Code schreiben: (Wir haben auch ein benutzbares Feld dazu getan, damit Sie sehen was hier geschieht.)

```html
<input type="text" disabled>

<input type="text">
```

Beide werden Ihnen das folgende Resultat ausgeben:

{{ EmbedLiveSample('Boolsche_Attribute', 700, 100) }}

### Anfuehrungszeichen um Attributwerte weglassen

Wenn Sie sich etwas im Internet umschauen, werden Sie immer wieder auf merkwürdige Benutzung von HTML-Code stoßen. Dazu gehören auch Attributwerte ohne Anführungszeichen. Dies funktioniert an manchen Stellen, woanders kann es den ganzen Code kaputt machen. Wir schauen uns noch einmal unser Beispiel mit dem Link an. Wir könnten das auch wie folgt schreiben, wenn wir nur das `href`-Attribut benutzen:

```html
<a href=https://www.mozilla.org/>Lieblingswebseite</a>
```

Wenn wir aber das `title`-Attribut hinzufügen, dann funktioniert es so nicht mehr:

```html example-bad
<a href=https://www.mozilla.org/ title=Die Mozilla Webseite>Lieblingswebseite</a>
```

An diesem Punkt wird der Browser diesen Code falsch lesen und in dem `title`-Attribut drei separate Attribute sehen: ein `title`-Attribut mit dem Wert `"Die"` und zwei Boolsche Attribute, `Mozilla` und `Webseite`. Dies ist nicht was wir gewollt haben und der Fehler führt zu unerwünschtem Verhalten, siehe unten. Versuchen Sie mit dem Mauszeiger über dem Link zu fahren, um zu sehen was der Titeltext ist.

{{ EmbedLiveSample('Anfuehrungszeichen_um_Attributwerte_weglassen', 700, 100) }}

Unser Rat ist es, immer die Anführungszeichen um Attrbiutwerte zu setzen, damit Sie solche Probleme vermeiden können und besser lesbaren Code schreiben.

### Einfache oder doppelte Anführungszeichen?

In diesem Artikel sind alle Attributwerte in doppelte Anführungszeichen eingepackt. Sie werden woanders aber eventuell sehen, das Leute anstattdessen einfache Anführungszeichen benutzen. Es ist egal welche Sorte Anführungszeichen genutzt wird, Sie können das machen wie Sie möchten. Beide der folgenden Zeilen sind äquivalent:

```html
<a href="http://www.example.com">Ein Link als Beispiel.</a>

<a href='http://www.example.com'>Ein Link als Beispiel.</a>
```

Sie sollten die Anführungszeichen aber nicht miteinander mischen. Die folgende Zeile ist falsch!

```html example-bad
<a href="http://www.example.com'>Ein Link als Beispiel.</a>
```

Wenn Sie eine Sorte Anführungszeichen benutzen, können Sie die andere Sorte innerhalb dieser benutzen:

```html
<a href="http://www.example.com" title="Ist's nicht lustig?">Ein Link als Beispiel.</a>
```

Wenn Sie die selbe Sorte Anführungszeichen innerhalb benutzen wollen, dann müssen Sie[HTML entities](/de/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Entity_references_including_special_characters_in_HTML) nutzen.

### Aufbau eines HTML-Dokumentes

Jetzt wissen Sie wie die einzelnen Elemente in einer HTML-Datei aufgebaut sind, aber ein Element für sich alleine tut nicht viel. Wir schauen uns jetzt an, wie die einzelnen Elemente kombiniert werden, um ein funktionierendes HTML-Dokument aufzubauen. Schauen Sie sich diesen Code an:

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

Hier haben wir:

- `<!DOCTYPE html>` — den Dokumenttyp. Früher, als HTML noch jung war (1991/92), war dies dazu gedacht, um dem Browser mitzuteilen, welchen Regeln er zu folgen hatte. Das konnte z. B. sein, dass der Browser automatisch die Fehler überprüft und andere nützliche Dinge. Wie auch immer, heutzutage achtet niemand mehr wirklich darauf, es muss jedoch vorhanden sein, damit alles richtig funktioniert.
- `<html></html>` — das `<html>` Element. Dieses Element umhüllt den ganzen Inhalt. Manchmal wird es auch als root-Element bezeichnet
- `<head></head>` — das `<head>` Element. In dieses Element ist alles eingeschlossen, was _nicht_ auf der Seite angezeigt wird. Dies enthält Informationen wie Schlüsselwörter, eine Seitenbeschreibung, welche in Suchmaschinen erscheint, CSS um unseren Inhalt zu designen, usw.
- `<body></body>` — das `<body>` Element. Dies beinhaltet _alles_, was die Betrachter sehen, wenn sie die Webseite besuchen, egal ob Text, Bilder, Videos, Audiodateien, usw.
- `<meta charset="utf-8">` — Dieses Element setzt die Zeichenkodierung deines Dokuments auf `utf-8`, was die Buchstaben von fast allen menschlichen Sprachen beinhaltet. Umlaute wie Ä und Ü werden sonst nicht richtig angezeigt.
- `<title></title>` — Dies setzt den Titel der Seite, welcher im Tab angezeigt wird. Dieser wird auch gebraucht, wenn jemand ein Lesezeichen erstellt.

### Aktives Lernen: Fügen Sie mehr Inhalte in das HTML Dokument ein

Wenn Sie lokal, auf Ihrem Computer, das Beispiel ausprobieren möchten, dann tun Sie folgendes:

1. Kopieren Sie das obige HTML-Dokument.
2. Erstellen Sie eine neue leere Datei in Ihrem Texteditor.
3. Fügen Sie den Code in die leere Datei ein.
4. Speichern Sie die Datei unter dem Namen index.html.

> **Note:** **Notiz**: Sie können dieses HTML-Grundgerüst auch im [MDN Learning Area Github repository](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html) finden.

Sie können die Datei nun in einem Webbrowser öffnen, um zu sehen wie die Webseite aussieht. Dann können Sie den HTML-Code editieren und die Datei speichern. Wenn Sie dann die Datei im Browser neu laden, sehen Sie die Veränderungen. Am Anfang sieht die Webseite im Browser so aus:

![A simple HTML page that says This is my page](https://mdn.mozillademos.org/files/12279/template-screenshot.png)Diese Übung können Sie also lokal auf Ihrem Computer durchführen, wie oben beschrieben, oder Sie können die Übung mit unserem editierbaren Beispiel unten machen (das editierbare Fenster repräsentiert nur den Inhalt des {{htmlelement("body")}}-Elements). In der Übung sollen Sie die folgenden Dinge auf Ihrer Webseite implementieren:

- Fügen Sie direkt unter dem öffnenden Tag des {{htmlelement("body")}}-Elements eine Überschrift ein. Dieser sollte ein `<h1>`-Tag vorangestellt sein und ein `</h1>`-Tag hintenan stehen.
- Schreiben Sie in den Absatz (`<p>`) etwas Text über etwas, das Sie interessiert.
- Lassen Sie wichtige Wörter in fetter Schrift erscheinen, indem Sie das `<strong>`-Element benutzen.
- Fügen Sie einen Link (`<a>`) innerhalb des Absatzes hinzu.
- Fügen Sie ein Bild (`<img>`) hinzu, direkt unter dem Absatz. Sie bekommen einen Bonuspunkt, wenn Sie es schaffen zu einem anderen Bild zu verlinken (entweder lokal auf ihrem Computer oder irgendwo im Internet.)

Wenn Sie einen Fehler machen können Sie das _Input_-Feld jederzeit mit dem _Reset_-Button zurücksetzen. Wenn Sie gar nicht auf die Lösung kommen, können Sie sich die Lösung anzeigen lassen indem Sie auf _Lösung anzeigen_ klicken.

```html hidden
<h2>Input</h2>
<textarea id="code" class="input">
&lt;p&gt;Dies ist meine Webseite.&lt;/p&gt;</textarea>
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
}

img {
  max-width: 100%;
}

.output {
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
  textarea.value = '<p>Ich spiele gerne <strong>Schlagzeug</strong>. Einer meiner Lieblingsschlagzeugspieler ist Neal Peart, welcher\
 in der Band <a href="https://en.wikipedia.org/wiki/Rush_%28band%29" title="Rush Wikipedia article">Rush</a> spielt.\
 Mein Lieblingsalbum von Rush ist zur Zeit <a href="http://www.deezer.com/album/942295">Moving Pictures</a>.</p>\
<img src="http://www.cygnus-x1.net/links/rush/images/albums/sectors/sector2-movingpictures-cover-s.jpg">';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code4', 700, 600) }}

### Leerraum in HTML

In dem obigen Beispiel werden Sie bemerkt haben, dass eine Menge Leerraum (engl.: Whitespace) dabei ist. Dies ist nicht notwendig. Die beiden folgenden Codestücke sind äquivalent:

```html
<p>Hunde sind komisch.</p>

<p>Hunde        sind
         komisch.</p>
```

Egal wieviel Leerraum sie benutzen (Leerraum sind Leerzeichen, aber auch Zeilenumbrüche), der HTML Parser wird den Leerraum immer zu einem einzigen Leerzeichen zusammenlegen, wenn die Webseite im Browser geladen wird. Wieso sollte man also so viel Leerraum benutzen? Die Antwort ist Lesbarkeit - es ist viel einfacher zu verstehen, was in einem Stück Code vor sich geht, wenn dieser schön formattiert ist und nicht alles ein zusammenhängender Klumpen ist. In unserem HTML-Code haben wir jedes Element das in einem anderen Element steht mit zwei Leerzeichen weiter eingerückt. Sie können selbst entscheiden, wie genau Sie Ihren Code formattieren (z. B. wieviele Leerzeichen Sie zum Einrücken benutzen), aber Sie sollten den Code selber gut lesen können.

## Zeichenreferenzen für Sonderzeichen

In HTML sind die Zeichen `<`, `>`,`"`,`'` und `&` spezielle Zeichen, da sie Teil der HTML Syntax sind. Wie kann man diese also im ausgegebenen Text benutzen, ohne dass diese als Teil des Markups interpretiert werden?

Wir müssen hier Zeichenreferenzen benutzen — spezielle Codes, welche einzelne Zeichen repräsentieren und welche in diesen Fällen genutzt werden können. Jede Zeichenreferenz wird mit einem Und-Zeichen (&) gestartet und mit einem Semikolon (;) beendet.

| Ausgegebener Character | Zeichenreferenz |
| ---------------------- | --------------- |
| <                      | &lt;            |
| >                      | &gt;            |
| "                      | &quot;          |
| '                      | &apos;          |
| &                      | &amp;           |

In dem untenstehenden Beispiel können Sie einen Absatz sehen, in dem über Webtechnologien geschreiben wird:

```html
<p>In HTML definieren Sie einen Absatz mit dem <p>-Element.</p>

<p>In HTML definieren Sie einen Absatz mit dem &lt;p&gt;-Element.</p>
```

In dem Live-Output sieht man, dass der erste Absatz falsch dargestellt wird, weil der Browser den Tag nicht wie gewünscht anzeigt, sondern als Beginn eines neuen Absatzes interpretiert. Der zweite Absatz wird durch die Zeichenreferenzen korrekt dargestellt.

{{ EmbedLiveSample('Charakter-Referenz_Spezielle_Charaktere_in_HTML', 700, 200) }}

> **Note:** **Notiz**: Eine Tabelle mit allen möglichen HTML Charakter-Referenzen kann auf Wikipedia gefunden werden: [List of XML and HTML character entity references](http://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references).

## HTML Kommentare

In HTML, wie auch in den meisten anderen Programmiersprachen, kann man Kommentare schreiben. Kommentare schreibt man in den Code, diese werden aber vom Browser ignoriert und somit unsichtbar für Benutzer der Webseite. Mit Kommentaren kann man als Entwickler des Codes, diesen für sich selbst und andere leichter verständlich machen. Besonders am Anfang ist es sinnvoll sich mit Kommentaren Anmerkungen zu dem geschriebenen Code zu machen, um später nachvollziehen zu können, was ein bestimmtes Stück Code bewirkt. Sie möchen Ihren Code ja auch noch verstehen nachdem Sie mehrere Monate nichts daran gemacht haben, oder dass ein Mitarbeiter ihren Code verstehen kann.

Um einen Abschnitt in Ihrem HTML-Dokument zu einem Kommentar zu machen, schließen Sie diesen in die speziellen Marker `<!--` und `-->` ein, zum Beispiel:

```html
<p>Ich bin nicht in einem Kommentar</p>

<!-- <p>Ich bin in einem Kommentar und werde auf der Webseite nicht angezeigt!</p> -->
```

Wie Sie unten erkennen können, wird der erste Absatz dargestellt, der zweite aber nicht.

{{ EmbedLiveSample('HTML_Kommentare', 700, 100) }}

## Zusammenfassung

Sie haben das Ende des Artikels erreicht und wir hoffen es hat Ihnen etwas Spaß gemacht bei uns die Grundlagen von HTML zu erlernen! An diesem Punkt sollten Sie verstehen, wie diese Sprache aussieht, wie sie funktioniert und in der Lage sein einige Elemente und Attribute zu benutzen. In weiterfürhenden Artikeln aus diesem Modul werden wir einige der Dinge, die Sie hier gelernt haben wieder aufgreifen und uns im Detail anschauen, aber auch neue Möglichkeiten dieser Sprache entdecken. Bleiben Sie dabei!

> **Note:** **Notiz**: Nun, da Sie dabei sind mehr über HTML zu lernen, möchten Sie vielleicht auch schon einmal in die Grundlagen von Cascading Style Sheets, kurz [CSS](/de/docs/Learn/CSS)hineinstöbern. CSS ist die Sprache mit der wir unseren Webseiten einen bestimmten Stil geben. Zum Beispiel lassen sich mit CSS die Farben auf der Webseite ändern. HTML und CSS arbeiten Hand in Hand, wie Sie bald entdecken werden.

{{NextMenu("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML")}}
