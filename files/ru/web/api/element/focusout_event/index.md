---
title: focusout
slug: Web/API/Element/focusout_event
---

Событие `focusout` вызывается перед потерей элементом фокуса. Главное отличие между этим событием и [`blur`](</ru/docs/Mozilla_event_reference/blur_(event)>) в том, что у последнего нет фазы всплытия.

Основная информация

- Спецификация
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-focusout)
- Интерфейс
  - : {{domxref("FocusEvent")}}
- Всплытие
  - : Да
- Отменяемый
  - : Нет
- Цель
  - : Элемент
- Действие по умолчанию
  - : Нет.

## Свойства

| Свойство                           | Тип                                      | Описание                                      |
| ---------------------------------- | ---------------------------------------- | --------------------------------------------- |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}}               | Цель события, теряющая фокус.                 |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}                 | Тип события.                                  |
| `bubbles` {{readonlyInline}}       | {{jsxref("Boolean")}}                    | Всплывает ли событие при нормальных условиях. |
| `cancelable` {{readonlyInline}}    | {{jsxref("Boolean")}}                    | Возможно ли отменить событие.                 |
| `relatedTarget` {{readonlyInline}} | {{domxref("EventTarget")}} (DOM-элемент) | Цель события, получающая фокус.               |

## Browser compatibility

{{Compat}}

## Related Events

- {{event("focus")}}
- {{event("blur")}}
- {{event("focusin")}}
