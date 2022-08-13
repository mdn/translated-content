---
title: readystatechange
slug: Web/API/Document/readystatechange_event
tags:
  - Referenz
  - XMLHttpRequest
translation_of: Web/API/Document/readystatechange_event
original_slug: Web/Events/readystatechange
---
{{ApiRef}}

Das Ereignis `readystatechange` wird ausgelöst, wenn sich die Eigenschaft [`readyState`](/de/docs/DOM/document.readyState) eines Dokumentes verändert hat.

## Allgemeine Information

- Spezifikation
  - : [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#current-document-readiness)
- Schnittstelle
  - : Event
- Aufsteigend
  - : Nein
- Abbrechbar
  - : Nein
- Ziel
  - : Dokument
- Standardaktion
  - : Keine

## Eigenschaften

| Property                              | Type                                 | Description                                            |
| ------------------------------------- | ------------------------------------ | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | Whether the event is cancellable or not.               |

## Beispiel

```js
// als Alternative zu DOMContentLoaded
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        initApplication();
    }
}
```

## Browser-Kompatibilität

Dieses Ereignis wird vom Internet Explorer schon sehr lange unterstützt und kann daher als Alternative zum [`DOMContentLoaded`](</de/docs/Mozilla_event_reference/DOMContentLoaded_(event)>)-Ereignis genutzt werden (vgl. Anmerkung \[2] im Abschnitt [Browserkompatibilität](/de/docs/Web/Events/DOMContentLoaded#Browserkompatibilität)).

## Verwandte Ereignisse

- {{event("DOMContentLoaded")}}
- {{event("readystatechange")}}
- {{event("load")}}
- {{event("beforeunload")}}
- {{event("unload")}}
