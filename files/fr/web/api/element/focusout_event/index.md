---
title: focusout
slug: Web/API/Element/focusout_event
translation_of: Web/API/Element/focusout_event
original_slug: Web/Events/focusout
---
L'évènement `focusout` est déclenché lorsqu'un élément du DOM est sur le point de perdre le focus. La différence principale entre cet évènement et [`blur`](/fr/docs/Web/API/Element/blur_event) est que ce dernier ne se propage pas.

## Informations générales

- Spécification
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-focusout)
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

| Property                                 | Type                                               | Description                                |
| ---------------------------------------- | -------------------------------------------------- | ------------------------------------------ |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}}               | Event target losing focus.                 |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}                   | The type of event.                         |
| `bubbles` {{readonlyInline}}       | {{jsxref("Boolean")}}                       | Whether the event normally bubbles or not. |
| `cancelable` {{readonlyInline}}    | {{jsxref("Boolean")}}                       | Whether the event is cancellable or not.   |
| `relatedTarget` {{readonlyInline}} | {{domxref("EventTarget")}} (DOM element) | Event target receiving focus.              |

## Compatibilité des navigateurs

{{Compat("api.Element.focusout_event")}}

## Evénements liés

- {{event("focus")}}
- {{event("blur")}}
- {{event("focusin")}}
- {{event("focusout")}}
