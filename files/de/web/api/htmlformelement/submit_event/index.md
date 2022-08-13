---
title: submit
slug: Web/API/HTMLFormElement/submit_event
tags:
  - Event
  - submit
translation_of: Web/API/HTMLFormElement/submit_event
---
Das `submit` Event tritt ein, wenn ein Formular (`<form ...></form>`) abgeschickt wird.

Es gilt zu beachten, dass das `submit` Event **nur** auf dem Formularelement ausgelöst wird. Der auslösende `<button>` oder `<input type="submit" ... />` erhalten das Event nicht (Es wird das Formular abgeschickt, nicht der Button).

## Allgemein

| **Spezifikation**          | [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#form-submission-algorithm) |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **Interface**              | {{domxref("Event")}}                                                                                                          |
| **Propagiert ("Bubbles")** | Ja (obwohl eigentlich einfach Event ohne Propagation)                                                                                 |
| **Cancelable**             | Ja                                                                                                                                    |
| **Ziel**                   | Element                                                                                                                               |
| **Standardaktion**         | Abhängig von Implementierung (schickt Inhalt des Formulars zum Server)                                                                |

## Eigenschaften

| Property                              | Type                                 | Description                                            |
| ------------------------------------- | ------------------------------------ | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | Whether the event is cancellable or not.               |
