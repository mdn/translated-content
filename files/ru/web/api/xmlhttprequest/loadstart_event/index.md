---
title: loadstart
slug: Web/API/XMLHttpRequest/loadstart_event
---

Событие `loadstart` происходит, когда начинается загрузка.

## Общая информация

- Спецификация
  - : [Progress](http://www.w3.org/TR/progress-events/)
- Интерфейс
  - : ProgressEvent
- Распространяется
  - : Нет
- Отменяемое
  - : Нет
- Цель
  - : Element
- Действие по умолчанию
  - : Нет

## Свойства

| Property                              | Type                       | Description                                                                                                                                                    |
| ------------------------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}           | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree).                                                                                                         |
| `type` {{readonlyInline}}             | {{domxref("DOMString")}}   | The type of event.                                                                                                                                             |
| `bubbles` {{readonlyInline}}          | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.                                                                                                                     |
| `cancelable` {{readonlyInline}}       | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.                                                                                                                       |
| `lengthComputable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Specifies whether or not the total size of the transfer is known. Read only.                                                                                   |
| `loaded` {{readonlyInline}}           | unsigned long (long)       | The number of bytes transferred since the beginning of the operation. This doesn't include headers and other overhead, but only the content itself. Read only. |
| `total` {{readonlyInline}}            | unsigned long (long)       | The total number of bytes of content that will be transferred during the operation. If the total size is unknown, this value is zero. Read only.               |

## Связанные свойства

- {{event("loadstart")}}
- {{event("progress")}}
- {{event("error")}}
- {{event("abort")}}
- {{event("load")}}
- {{event("loadend")}}

## Смотрите также

- [Отслеживание состояния загрузки](/ru/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Monitoring_progress)
