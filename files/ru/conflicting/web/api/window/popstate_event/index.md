---
title: WindowEventHandlers.onpopstate
slug: conflicting/Web/API/Window/popstate_event
original_slug: Web/API/WindowEventHandlers/onpopstate
---
{{APIRef}}

Свойство `onpopstate` миксина {{domxref("WindowEventHandlers")}} является {{event("Event_handlers", "event handler")}} для обработки событий `popstate` для "window".

Событие `popstate` отсылается объекту window каждый раз, когда активная запись истории меняется с одной на другую для одного и того же документа. Если запись истории, ставшая активной, была создана вызовом `history.pushState()` или изменена с помощью `history.replaceState()`, свойство `state` события `popstate` содержит копию объекта состояния этой записи истории.

> **Примечание:**, просто вызов `history.pushState()` или `history.replaceState()` не вызовет событие `popstate`. Событие `popstate` срабатывает только тогда, когда происходят какие то действия в браузере, такие как нажатие кнопки "назад" (или вызов `history.back()` из JavaScript). Это событие срабатывает только когда пользователь переходит между двумя записями истории одного и того же документа.

## Синтаксис

```
window.onpopstate = funcRef;
```

- `funcRef` – функция обработчик.

## Примеры

В качестве примера, страница `http://example.com/example.html`, исполняя нижеследующий код, сгенерирует всплывающие сообщения, как показано в комментариях:

```js
window.onpopstate = function(event) {
  alert("location: " + document.location + ", state: " + JSON.stringify(event.state));
};

history.pushState({page: 1}, "title 1", "?page=1");
history.pushState({page: 2}, "title 2", "?page=2");
history.replaceState({page: 3}, "title 3", "?page=3");
history.back(); // alerts "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // alerts "location: http://example.com/example.html, state: null
history.go(2);  // alerts "location: http://example.com/example.html?page=3, state: {"page":3}
```

Обратите внимание, что даже несмотря на то, что первоначальная запись истории (для `http://example.com/example.html`) не имеет объекта события, связанного с ней, событие `popstate` всё равно произойдёт, когда мы активируем эту запись после второго вызова `history.back()`.

## Спецификация

- [HTML5 popstate event](http://www.whatwg.org/specs/web-apps/current-work/#handler-window-onpopstate)

## Browser compatibility

{{Compat}}

## Смотрите также

- {{domxref("window.history")}}
- [Manipulating the browser history](/ru/docs/Web/Guide/DOM/Manipulating_the_browser_history)
- [Ajax navigation example](/ru/docs/Web/Guide/DOM/Manipulating_the_browser_history/Example)
