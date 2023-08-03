---
title: focusin
slug: Web/API/Element/focusin_event
---

Событие focusin срабатывает, когда элемент получает фокус. Главное отличие от `focus` в том, что последний не всплывает.

## Общая информация

- Specification
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-focusIn)
- Interface
  - : {{domxref("FocusEvent")}}
- Bubbles
  - : Yes
- Cancelable
  - : No
- Target
  - : Element
- Default Action
  - : None.

## Свойства

| Property                           | Type                                     | Description                                |
| ---------------------------------- | ---------------------------------------- | ------------------------------------------ |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}}               | Event target losing focus.                 |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}                 | The type of event.                         |
| `bubbles` {{readonlyInline}}       | {{jsxref("Boolean")}}                    | Whether the event normally bubbles or not. |
| `cancelable` {{readonlyInline}}    | {{jsxref("Boolean")}}                    | Whether the event is cancellable or not.   |
| `relatedTarget` {{readonlyInline}} | {{domxref("EventTarget")}} (DOM element) | Event target receiving focus.              |

## Browser compatibility

{{Compat}}

## Related Events

- {{event("focus")}}
- {{event("blur")}}
- {{event("focusin")}}
- {{event("focusout")}}
