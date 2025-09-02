---
title: loadstart
slug: Web/API/XMLHttpRequestEventTarget/loadstart_event
---

{{APIRef("XMLHttpRequest API")}}

Событие `loadstart` происходит, когда начинается загрузка.

## Общая информация

- Спецификация
  - : [Progress](https://www.w3.org/TR/progress-events/)
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

- [`loadstart`](/ru/docs/Web/API/XMLHttpRequestEventTarget/loadstart_event)
- [`progress`](/ru/docs/Web/API/XMLHttpRequest/progress_event)
- [`error`](/ru/docs/Web/API/HTMLElement/error_event)
- [`abort`](/ru/docs/Web/API/HTMLMediaElement/abort_event)
- [`load`](/ru/docs/Web/API/Window/load_event)
- [`loadend`](/ru/docs/Web/API/XMLHttpRequestEventTarget/loadend_event)

## Смотрите также

- [Отслеживание состояния загрузки](/ru/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest#monitoring_progress)
