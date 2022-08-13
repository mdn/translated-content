---
title: Element.innerHTML
slug: Web/API/Element/innerHTML
translation_of: Web/API/Element/innerHTML
---
{{APIRef("DOM")}}

Die {{domxref("Element")}} Eigenschaft **`innerHTML`** ruft das im Element enthaltene HTML-oder XML-Markup ab oder legt dieses fest.

> **Hinweis:** Wenn ein {{HTMLElement("div")}}, {{HTMLElement("span")}} oder {{HTMLElement("noembed")}}-Knoten einen untergeordneten Textknoten mit den Zeichen `&`, `<` oder `>` enthält, gibt `innerHTML` diese Zeichen als ihre entsprechende HTML-Entitäten `"&amp;"`, `"&lt;"` bzw. `"&gt;"` zurück. Verwenden Sie {{domxref("Node.textContent")}}, um eine reine Kopie des Inhalts dieser Textknoten zu erhalten.

Verwenden Sie die Methode {{domxref("Element.insertAdjacentHTML", "insertAdjacentHTML()")}}, um den HTML-Code in das Dokument einzufügen, anstatt den Inhalt eines Elements zu ersetzen.

## Syntax

    const content = element.innerHTML;

    element.innerHTML = htmlString;

### Wert

Ein {{domxref("DOMString")}}, das die HTML-Serialisierung der Nachkommen des Elements enthält. Wenn Sie den Wert von `innerHTML` festlegen, werden alle Nachkommen des Elements entfernt und durch Knoten ersetzt, die durch Analysieren des in _htmlString_ angegebenen HTML-Codes erstellt werden.

### Exceptions

- `SyntaxError`
  - : Es wurde versucht, den Wert von `innerHTML` mit einem nicht ordnungsgemäß formatierten HTML-String festzulegen.
- `NoModificationAllowedError`
  - : Es wurde versucht, den HTML-Code in einen Knoten einzufügen, dessen übergeordnetes Element {{domxref("Document")}} ist.

## Nutzungshinweise

Die `innerHTML`-Eigenschaft kann verwendet werden, um den aktuellen HTML-Quellcode der Seite einschließlich aller Änderungen zu überprüfen, die seit dem erstmaligen Laden der Seite vorgenommen wurden.

### HTML-Inhalte eines Elements auslesen

Das Lesen von `innerHTML` bewirkt, dass der Benutzer-Agent das HTML- oder XML-Fragment serialisiert, das aus den Nachkommen des Elements besteht. Der resultierende String wird zurückgegeben.

```js
let contents = myElement.innerHTML;
```

Auf diese Weise können Sie das HTML-Markup der Inhaltsknoten des Elements anzeigen.

> **Hinweis:** Das zurückgegebene HTML- oder XML-Fragment wird basierend auf dem aktuellen Inhalt des Elements generiert, sodass das Markup und Formatierung des zurückgegebenen Fragments wahrscheinlich nicht mit dem ursprünglichen Seiten-Markup übereinstimmt.

### Inhalte eines Element ersetzen

Durch das Festlegen des Wertes von `innerHTML` können Sie den vorhandenen Inhalt eines Elements problemlos durch neuen Inhalt ersetzen.

Beispielsweise können Sie den gesamten Inhalt eines Dokuments löschen, indem Sie den Inhalt des Attributs {{domxref("Document.body", "body")}} löschen:

```js
document.body.innerHTML = "";
```

In diesem Beispiel wird das aktuelle HTML-Markup des Dokuments abgerufen und die Zeichen `"<"` durch die HTML-Entität `"&lt;"` ersetzt, wodurch der HTML-Code im Wesentlichen in unformatierten Text umgewandelt wird. Dieses wird dann in ein Element {{HTMLElement("pre")}} eingeschlossen. Dann wird der Wert von `innerHTML` in diesen neuen String geändert. Als Ergebnis wird der Dokumentinhalt durch eine Anzeige des gesamten Quellcodes der Seite ersetzt.

```js
document.documentElement.innerHTML = "<pre>" +
         document.documentElement.innerHTML.replace(/</g,"&lt;") +
            "</pre>";
```

#### Unter der Haube

Was passiert genau, wenn Sie den Wert von `innerHTML` festlegen? Der Benutzer-Agent führt dabei die folgenden Schritte aus:

1. Der angegebene Wert wird als HTML oder XML analysiert (basierend auf dem Dokumenttyp), sodass ein {{domxref("DocumentFragment")}}-Objekt den neuen Satz von DOM-Knoten für die neuen Elemente darstellt.
2. Wenn das Element, dessen Inhalt ersetzt wird, ein {{HTMLElement("template")}}-Element ist, wird das Attribut {{domxref("HTMLTemplateElement.content", "content")}} des Elements `<template>` durch das neue `DocumentFragment` ersetzt, welches in Schritt 1 erstellt wurde.
3. Bei allen anderen Elementen wird der Inhalt des Elements durch die Knoten im neuen `DocumentFragment` ersetzt.

### Sicherheitsüberlegungen

Es ist nicht ungewöhnlich, dass `innerHTML` zum Einfügen von Text in eine Webseite verwendet wird. Es besteht jedoch die Möglichkeit, dass dies zu einem Angriffsvektor auf einer Website wird, wodurch ein potenzielles Sicherheitsrisiko entsteht.

```js
const name = "John";
// angenommen 'el' ist ein HTML DOM Element
el.innerHTML = name; // in diesem Fall harmlos

// ...

name = "<script>alert('Ich bin John in einem störenden Alert!')</script>";
el.innerHTML = name; // in diesem Fall harmlos
```

Obwohl dies wie ein {{interwiki("wikipedia", "cross-site scripting")}}-Angriff aussieht, ist das Ergebnis harmlos. HTML5 schreibt vor, dass ein mit `innerHTML` eingefügtes {{HTMLElement("script")}}-Tag [nicht ausgeführt werden soll](https://www.w3.org/TR/2008/WD-html5-20080610/dom.html#innerhtml0).

Es gibt jedoch Möglichkeiten, JavaScript auszuführen, ohne {{HTMLElement("script")}}-Elemente zu verwenden. Daher besteht immer ein Sicherheitsrisiko, wenn Sie `innerHTML` verwenden, um Strings festzulegen, über die Sie keine Kontrolle haben. Zum Beispiel:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // zeigt den alert
```

Aus diesem Grund wird empfohlen, `innerHTML` nicht zum Einfügen von reinem Text zu verwenden. Verwenden Sie stattdessen {{domxref("Node.textContent", "textContent")}}. Der übergebene Inhalt wird nicht als HTML-Code analysiert, sondern als reiner Text eingefügt.

> **Warnung:** Wenn Ihr Projekt einer Sicherheitsüberprüfung unterzogen wird, führt die Verwendung von `innerHTML` höchstwahrscheinlich dazu, dass Ihr Code abgelehnt wird. [Wenn Sie beispielsweise `innerHTML`](https://wiki.mozilla.org/Add-ons/Reviewers/Guide/Reviewing#Step_2:_Automatic_validation) in einer [Browsererweiterung](/de/docs/Mozilla/Add-ons/WebExtensions) verwenden und die Erweiterung bei [addons.mozilla.org](https://addons.mozilla.org/) einreichen, wird sie den automatisierten Überprüfungsprozess nicht bestehen.

## Beispiel

In diesem Beispiel wird mit `innerHTML` ein Mechanismus zum Protokollieren von Nachrichten in einem Feld auf einer Webseite erstellt.

### JavaScript

```js
function log(msg) {
  var logElem = document.querySelector(".log");

  var time = new Date();
  var timeStr = time.toLocaleTimeString();
  logElem.innerHTML += timeStr + ": " + msg + "<br/>";
}

log("Logging mouse events inside this container...");
```

Die Funktion `log()` erstellt die Protokollausgabe, indem sie mithilfe von {{jsxref("Date.toLocaleTimeString", "toLocaleTimeString()")}} die aktuelle Uhrzeit aus einem {{jsxref("Date")}}-Objekt abruft und einen String aus dem Zeitstempel und dem Nachrichtentext erstellt. Dann wird die Nachricht an die Box mit der Klasse `"log"` angehängt.

Wir fügen eine zweite Methode hinzu, die Informationen zu auf {{domxref("MouseEvent")}} basierenden Ereignissen protokolliert (z. B. {{event("mousedown")}}, {{event("click")}} und {{event("mouseenter")}}):

```js
function logEvent(event) {
  var msg = "Event <strong>" + event.type + "</strong> at <em>" +
            event.clientX + ", " + event.clientY + "</em>";
  log(msg);
}
```

Dann verwenden wir dies als Ereignishandler für eine Reihe von Mausereignissen in der Box, die unser Protokoll enthält:

```js
var boxElem = document.querySelector(".box");

boxElem.addEventListener("mousedown", logEvent);
boxElem.addEventListener("mouseup", logEvent);
boxElem.addEventListener("click", logEvent);
boxElem.addEventListener("mouseenter", logEvent);
boxElem.addEventListener("mouseleave", logEvent);
```

### HTML

Das HTML für unser Beispiel ist denkbar einfach.

```html
<div class="box">
  <div><strong>Log:</strong></div>
  <div class="log"></div>
</div>
```

Das {{HTMLElement("div")}} mit der Klasse `"box"` ist nur ein Container für Layoutzwecke, der den Inhalt mit einem Rahmen darstellt. Der `<div>`, dessen Klasse `"log"` ist, ist der Container für den Protokolltext.

### CSS

Das folgende CSS formatiert unseren Beispielinhalt.

```css
.box {
  width: 600px;
  height: 300px;
  border: 1px solid black;
  padding: 2px 4px;
  overflow-y: scroll;
  overflow-x: auto;
}

.log {
  margin-top: 8px;
  font-family: monospace;
}
```

### Ergebnis

Der resultierende Inhalt sieht so aus. Sie können die Ausgabe im Protokoll anzeigen, indem Sie die Maus in das Feld hinein- und herausbewegen, darauf klicken und so weiter.

{{EmbedLiveSample("Example", 640, 350)}}

## Spezifikation

| Specification                                                                                        | Status                           | Comment             |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('DOM Parsing', '#dom-element-innerhtml', 'Element.innerHTML')}} | {{Spec2('DOM Parsing')}} | Initiale Definition |

## Browserkompatibilität

{{Compat("api.Element.innerHTML")}}

## Siehe auch

- {{domxref("Node.textContent")}} und {{domxref("Node.innerText")}}
- {{domxref("Element.insertAdjacentHTML()")}}
- HTML in einen DOM-Baum parsen: {{domxref("DOMParser")}}
- Serialisieren von XML oder HTML in einen DOM-Baum: {{domxref("XMLSerializer")}}
