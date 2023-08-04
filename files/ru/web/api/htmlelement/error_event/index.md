---
title: error
slug: Web/API/HTMLElement/error_event
---

Событие `error` возникает, когда произошла какая-либо ошибка. Точные обстоятельства могут быть различными, потому что события с этим именем используются множеством различных API.

## Общая информация

- Спецификация
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-error)
- Интерфейс
  - : {{domxref("UIEvent")}} если создаётся элементом пользовательского интерфейса, {{domxref("MediaRecorderErrorEvent")}} если генерируется API записи MediaStream, и {{domxref("Event")}} иначе.
- Вплывающее
  - : Нет
- Отменяемое
  - : Нет
- Цель
  - : Элемент
- Действие по умолчанию
  - : Нет

## Свойства

| Property                        | Type                                          | Description                                                                                          |
| ------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}     | [`EventTarget`](/ru/docs/Web/API/EventTarget) | Цель события (наиболее верхлежащий элемент в DOM дереве).                                            |
| `type` {{readonlyInline}}       | [`DOMString`](/ru/docs/Web/API/DOMString)     | Тип события.                                                                                         |
| `bubbles` {{readonlyInline}}    | [`Boolean`](/ru/docs/Web/API/Boolean)         | Является ли событие вплывающим в стандартных условиях или нет.                                       |
| `cancelable` {{readonlyInline}} | [`Boolean`](/ru/docs/Web/API/Boolean)         | Является ли событие отменяемым или нет.                                                              |
| `view` {{readonlyInline}}       | [`WindowProxy`](/ru/docs/Web/API/WindowProxy) | [`document.defaultView`](/ru/docs/Web/API/Document/defaultView) (свойство `window` объекта document) |
| `detail` {{readonlyInline}}     | `long` (`float`)                              | 0.                                                                                                   |

### Для MediaStream Recording событий

Эти события типа {{domxref("MediaRecorderErrorEvent")}}.

{{page("/en-US/docs/Web/API/MediaRecorderErrorEvent", "Properties")}}

## Смотрите также

- {{domxref("GlobalEventHandlers.onerror")}}
  - : События отсылаются в {{domxref("Window.onerror")}} и {{domxref("Element.onerror")}}
- {{domxref("HTMLMediaElement.onerror")}}
  - : События отсылаются в {{domxref("HTMLMediaElement")}}, включая {{HTMLElement("audio")}} и {{HTMLElement("video")}}
- {{domxref("MediaRecorder.onerror")}}
  - : События отсылаются в {{domxref("MediaRecorder.onerror")}}, типа {{domxref("MediaRecorderErrorEvent")}}
