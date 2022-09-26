---
title: load
slug: Web/API/Window/load_event
translation_of: Web/API/Window/load_event
original_slug: Web/Events/load
---
Событие `load` происходит когда ресурс и его зависимые ресурсы закончили загружаться.

## General info

- Спецификация
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-load)
- Интерфейс
  - : UIEvent
- Всплывает
  - : Да
- Отменяемое
  - : Нет
- Цель
  - : Window
- Default Action
  - : Нет.

## Свойства

| Property                              | Type                                                                                                                                                         | Description                                                                                                                                                                                                        |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `target` {{readonlyInline}}     | [`EventTarget`](/ru/docs/Web/API/EventTarget "EventTarget is an interface implemented by objects that can receive events and may have listeners for them.")  | The event target (the topmost target in the DOM tree).                                                                                                                                                             |
| `type` {{readonlyInline}}       | [`DOMString`](/ru/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") | The type of event.                                                                                                                                                                                                 |
| `bubbles` {{readonlyInline}}    | [`Boolean`](/ru/docs/Web/API/Boolean "The Boolean object is an object wrapper for a boolean value.")                                                         | Whether the event normally bubbles or not.                                                                                                                                                                         |
| `cancelable` {{readonlyInline}} | [`Boolean`](/ru/docs/Web/API/Boolean "The Boolean object is an object wrapper for a boolean value.")                                                         | Whether the event is cancellable or not.                                                                                                                                                                           |
| `view` {{readonlyInline}}       | [`WindowProxy`](/ru/docs/Web/API/WindowProxy "The documentation about this has not yet been written; please consider contributing!")                         | [`document.defaultView`](/ru/docs/Web/API/Document/defaultView "In browsers, document.defaultView returns the window object associated with a document, or null if none is available.") (`window` of the document) |
| `detail` {{readonlyInline}}     | `long` (`float`)                                                                                                                                             | 0.                                                                                                                                                                                                                 |

## Пример

```html
<script>
  window.addEventListener("load", function(event) {
    console.log("All resources finished loading!");
  });
</script>
```

## Связанные события

- {{event("DOMContentLoaded")}}
- {{event("readystatechange")}}
- {{event("load")}}
- {{event("beforeunload")}}
- {{event("unload")}}
