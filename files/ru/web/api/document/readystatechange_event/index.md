---
title: readystatechange
slug: Web/API/Document/readystatechange_event
---

{{ApiRef}}

Событие `readystatechange` срабатывает, когда изменяется атрибут документа [`readyState`](/ru/docs/DOM/document.readyState).

## Основная информация

- Спецификация
  - : [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#current-document-readiness)
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

## Поддержка браузерами

Данное событие давно поддерживается Internet Explorer и может быть использовано в качестве альтернативы событию [`DOMContentLoaded`](/ru/docs/Web/Events/DOMContentLoaded) (см. примечание \[2] в разделе [Поддержка браузерами](/ru/docs/Web/Events/DOMContentLoaded#Поддержка_браузерами)).

## Связанные события

- {{event("DOMContentLoaded")}}
- {{event("readystatechange")}}
- {{event("load")}}
- {{event("beforeunload")}}
- {{event("unload")}}
