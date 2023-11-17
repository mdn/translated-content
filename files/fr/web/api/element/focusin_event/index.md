---
title: focusin
slug: Web/API/Element/focusin_event
---

L'événement **focusin** est déclenché lorsqu'un élément est sur le point de recevoir le focus. La principale différence avec [`focus`](/fr/docs/Mozilla_event_reference/focus_%28event%29) est que **focusin** se propage.

## Informations générales

- Spécification
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-focusIn)
- Interface
  - : {{domxref("FocusEvent")}}
- Propagation
  - : Oui
- Annulable
  - : Non
- Cible
  - : {{domxref("Element")}}
- Action par défaut
  - : Aucune

## Propriétés

| Property                           | Type                                     | Description                                |
| ---------------------------------- | ---------------------------------------- | ------------------------------------------ |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}}               | Event target losing focus.                 |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}                 | The type of event.                         |
| `bubbles` {{readonlyInline}}       | {{jsxref("Boolean")}}                    | Whether the event normally bubbles or not. |
| `cancelable` {{readonlyInline}}    | {{jsxref("Boolean")}}                    | Whether the event is cancellable or not.   |
| `relatedTarget` {{readonlyInline}} | {{domxref("EventTarget")}} (DOM element) | Event target receiving focus.              |

## Compatibilité des navigateurs

{{Compat}}

## Evénements liés

- [`focus`](/fr/docs/Web/API/Element/focus_event)
- [`blur`](/fr/docs/Web/API/Element/blur_event)
- [`focusout`](/fr/docs/Web/API/Element/focusout_event)
