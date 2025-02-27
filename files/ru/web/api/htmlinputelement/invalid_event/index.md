---
title: invalid
slug: Web/API/HTMLInputElement/invalid_event
---

{{APIRef}}

Событие `invalid` запускается, когда отправляемый элемент был проверен, но его содержимое не удовлетворило установленные ограничения. Валидность отправляемого элемента проверяется до отправления формы или после вызова метода [`checkValidity()`](/ru/docs/Learn/Forms#constraint_validation_api)на элементе.

## Общая информация

- Спецификация
  - : [HTML5](https://www.whatwg.org/specs/web-apps/current-work/multipage/association-of-controls-and-forms.html#constraint-validation)
- **Взаимодействие** {{domxref("Event")}}

  Всплытия

  - : Нет

- Отменяемый
  - : Да
- Цель
  - : Элемент
- Действие по умолчанию
  - : Может препятствовать отправке формы.

## Свойства

| Property                        | Type                       | Description                                            |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.               |
