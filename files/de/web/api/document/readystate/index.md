---
title: Document.readyState
slug: Web/API/Document/readyState
tags:
  - API
  - HTML DOM
  - Property
  - Referenz
translation_of: Web/API/Document/readyState
---
{{APIRef("DOM")}} {{ gecko_minversion_header("1.9.2") }}

## Zusammenfassung

Die Eigenschaft **Document.readyState** eines {{ domxref("document") }}-Objektes beschreibt dessen Ladezustand.

### Werte

Die Eigenschaft **readyState** kann folgende Werte haben:

- loading
  - : Das Dokument wird noch geladen.
- interactive
  - : Das Dokument selbst wurde vollständig eingelesen und verarbeitet, aber das Laden weiterer Bestandteile wie Bilder, Stylesheets und Frames ist noch nicht abgeschlossen.
    Dieser Status zeigt an, dass das Ereignis {{event("DOMContentLoaded")}} ausgelöst wurde.
- complete
  - : Das Dokument und seine Bestandteile wurden geladen.
    Dieser Status zeigt an, dass das Ereignis {{event("load")}} ausgelöst wurde.

Ändert sich der Wert dieser Eigenschaft, wird das Ereignis {{event("readystatechange")}} des zugehörigen {{domxref("document") }}-Objekts augelöst.

## Syntax

```js
var string = document.readyState;
```

## Beispiele

### Verschiedene Ladezustände

```js
switch (document.readyState) {
  case "loading":
    // Das Dokument wird noch geladen.
    break;
  case "interactive":
    // Das Dokument wurde geladen. Wir können nun die DOM-Elemente ansprechen.
    var span = document.createElement("span");
    span.textContent = "A <span> element.";
    document.body.appendChild(span);
    break;
  case "complete":
    // Die Seite ist komplett geladen.
    console.log("The first CSS rule is: " + document.styleSheets[0].cssRules[0].cssText);
    break;
}
```

### readystatechange als eine Alternative zum Ereignis DOMContentLoaded

```js
// Alternative zum Ereignis DOMContentLoaded
document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    initApplication();
  }
}
```

### readystatechange als eine Alternative zum Ereignis load

```js
// Alternative zum Ereignis load
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    initApplication();
  }
}
```

## Spezifikation

{{Specifications}}

## Siehe auch

- {{event("readystatechange")}}
- {{event("DOMContentLoaded")}}
- {{event("load")}}
