---
title: readystatechange
slug: Web/API/Document/readystatechange_event
---

{{APIRef}}

Событие `readystatechange` срабатывает, когда изменяется атрибут документа [`readyState`](/ru/docs/Web/API/Document/readyState).

## Основная информация

- Спецификация
  - : [HTML5](https://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#current-document-readiness)
- Интерфейс
  - : Event

- Всплывает
  - : Нет
- Отменяемое
  - : Нет
- Цель
  - : Document
- Действие по умолчанию
  - : Нет

## Свойства

| Свойство                        | Тип                        | Описание                                        |
| ------------------------------- | -------------------------- | ----------------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | Цель события (Самая верхняя цель в дереве DOM). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | Тип события.                                    |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Всплывает ли событие.                           |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Возможно ли отменить событие.                   |

## Примеры

```js
document.readyState === "complete";
// true

// Альтернатива DOMContentLoaded
document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    initApplication();
  }
};
```

## Совместимость с браузерами

{{Compat}}

## Связанные события

- [`DOMContentLoaded`](/ru/docs/Web/API/Document/DOMContentLoaded_event)
- [`readystatechange`](/ru/docs/Web/API/Document/readystatechange_event)
- [`load`](/ru/docs/Web/API/Window/load_event)
- [`beforeunload`](/ru/docs/Web/API/Window/beforeunload_event)
- [`unload`](/ru/docs/Web/API/Window/unload_event)
