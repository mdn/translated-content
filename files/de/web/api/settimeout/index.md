---
title: WindowTimers.setTimeout()
slug: Web/API/setTimeout
translation_of: Web/API/WindowOrWorkerGlobalScope/setTimeout
original_slug: Web/API/WindowOrWorkerGlobalScope/setTimeout
---
{{APIRef("HTML DOM")}}

Die Funktion **`setTimeout()`** der {{domxref("WindowOrWorkerGlobalScope")}}-Schnittstelle ruft nach der gegebenen Zeitspanne eine Funktion oder direkt angebenen Code auf.

## Syntax

    var timeoutID = window.setTimeout(funktion, zeitspanne, [parameter1, parameter2, ...]);
    var timeoutID = window.setTimeout(code, zeitspanne);

### Parameter

- `funktion`
  - : Die {{jsxref("function", "Funktion")}}, die nach `zeitspanne` Millisekunden ausgeführt werden soll.
- `code`
  - : `code` in der alternativen Syntax ist eine Zeichenkette, die Code enthält, der nach `zeitspanne` Millisekunden ausgeführt werden soll. `code` sollte aus den gleichen Gründen, die auch [eval()](/de/docs/JavaScript/Reference/Global_Objects/eval#Don%27t_use_eval! "en-US/docs/Core JavaScript 1.5 Reference/Global Functions/Eval#Don't use eval!") zum Sicherheitsrisiko machen, **nicht verwendet** werden.
- `zeitspanne` {{optional_inline}}
  - : `zeitspanne` ist die Wartezeit in Millisekunden (ein Tausendstel einer Sekunde), nach der `funktion` bzw. `code` ausgeführt werden soll. Dieser Wert ist ein Mindestwert, die tatsächlich abgelaufene Zeit kann länger sein, siehe [Gründe für längere als gegebene Wartezeiten](#gründe_für_längere_als_gegebene_wartezeiten) weiter unten.
- `parameter1, ..., parameterN` {{optional_inline}}
  - : Diese Parameter werden an die `funktion` oder den `code` übergeben.

> **Note:** **Anmerkung:** Der Internet Explorer unterstützt bis einschließlich Version 9 die Übergabe von zusätzlichen Parametern nicht.

### Rückgabewert

`setTimeout()` gibt eine ID zurück, die den eingerichteten Zeitgeber identifiziert; um die Wartezeit abzubrechen, kann sie an {{domxref("WindowOrWorkerGlobalScope.clearTimeout","clearTimeout()")}} übergeben werden.

Jede ID wird von `setTimeout()` und `setInterval()` nur einmalig je Objekt (window oder Worker) verwendet.

## Beispiel

### HTML

```html
<button onclick="delayedMessage();">Show a message after two seconds</button>
<button onclick="clearMessage();">Cancel message before it happens</button>

<div id="output"></div>
```

### JavaScript

```js
let timeoutID;

function setOutput(outputContent) {
  document.querySelector('#output').textContent = outputContent;
}

function delayedMessage() {
  setOutput('');
  timeoutID = setTimeout(setOutput, 2*1000, 'That was really slow!');
}

function clearMessage() {
  clearTimeout(timeoutID);
}
```

### Ergebnis

{{EmbedLiveSample('Example')}}

Siehe auch [`clearTimeout()`](/de/docs/DOM/window.clearTimeout#Example "en-US/docs/DOM/window.clearTimeout#Example")

## Browserkompatibilität

{{Compat}}

## Spezifikation

Gehört zu DOM-Level 0, wie spezifiziert in [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/browsers.html#timers).

## Siehe auch

- {{domxref("window.setInterval")}}
- {{domxref("window.requestAnimationFrame")}}
