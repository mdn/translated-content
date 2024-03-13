---
title: readystatechange
slug: Web/API/Document/readystatechange_event
---

{{ApiRef}}

L'évènement **`readystatechange`** est déclenché lorsque l'attribut [`readyState`](/fr/docs/Web/API/Document/readyState) d'un document a changé.

## Information générale

- Specification
  - : [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#current-document-readiness)
- Interface
  - : Event
- Bubbles
  - : No
- Cancelable
  - : No
- Target
  - : Document
- Default Action
  - : None.

## Propriétés

| Property                        | Type                       | Description                                            |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.               |

## Exemple

```js
document.readyState === "complete";
// true

//alternative à DOMContentLoaded
document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    initApplication();
  }
};
```

## Navigateur compatible

Cet événement a longtemps été soutenue par Internet Explorer et peut être utilisé comme une alternative à l'evenement [`DOMContentLoaded`](/fr/docs/) (voir la note \[2] de la section [Navigateurs compatibles](/fr/docs/Web/Events/DOMContentLoaded#Navigateurs_compatibles)).

## Les événements liés

- [`DOMContentLoaded`](/fr/docs/Web/API/Document/DOMContentLoaded_event)
- [`readystatechange`](/fr/docs/Web/API/Document/readystatechange_event)
- [`load`](/fr//docs/Web/API/Window/load_event)
- [`beforeunload`](/fr/docs/Web/API/Window/beforeunload_event)
- [`unload`](/fr/docs/Web/API/Window/unload_event)
