---
title: load
slug: Web/API/Window/load_event
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

| Property                        | Type                                          | Description                                                                                |
| ------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `target` {{readonlyInline}}     | [`EventTarget`](/ru/docs/Web/API/EventTarget) | The event target (the topmost target in the DOM tree).                                     |
| `type` {{readonlyInline}}       | [`DOMString`](/ru/docs/Web/API/DOMString)     | The type of event.                                                                         |
| `bubbles` {{readonlyInline}}    | [`Boolean`](/ru/docs/Web/API/Boolean)         | Whether the event normally bubbles or not.                                                 |
| `cancelable` {{readonlyInline}} | [`Boolean`](/ru/docs/Web/API/Boolean)         | Whether the event is cancellable or not.                                                   |
| `view` {{readonlyInline}}       | [`WindowProxy`](/ru/docs/Web/API/WindowProxy) | [`document.defaultView`](/ru/docs/Web/API/Document/defaultView) (`window` of the document) |
| `detail` {{readonlyInline}}     | `long` (`float`)                              | 0.                                                                                         |

## Пример

```html
<script>
  window.addEventListener("load", function (event) {
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
