---
title: popstate
slug: Web/API/Window/popstate_event
---

Событие `popstate` вызывается, когда изменяется активная запись истории. Если изменение записи истории было вызвано методом [`history.pushState()`](<https://developer.mozilla.org/ru/docs/Web/API/History_API#The_pushState()_method>) или [`history.replaceState()`](<https://developer.mozilla.org/ru/docs/Web/API/History_API#The_replaceState()_method>), то состояние события `popstate` будет содержать `state` копии входящего в историю объекта

Обратите внимание, `history.pushState()` или `history.replaceState()` не вызывают событие `popstate`. Событие `popstate` будет вызвано при совершении действий в браузере, таких как нажатие кнопок "Вперёд" или "Назад" (или при вызове `history.back()` или `history.forward()` из JavaScript).

Браузеры работают с событием `popstate` по разному. Chrome (prior to v34) и Safari всегда вызывают `popstate` по окончании загрузки страницы, а Firefox не делает этого.

## General info

- Specification
  - : [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/history.html#event-popstate)
- Interface
  - : PopStateEvent
- Bubbles
  - : Yes
- Cancelable
  - : No
- Target
  - : defaultView
- Default Action
  - : None

## Properties

| Property                        | Type                       | Description                                        |
| ------------------------------- | -------------------------- | -------------------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The browsing context (`window`).                   |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | The type of event.                                 |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.         |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.           |
| `state` {{readonlyInline}}      | _any_                      | The current history entry's state object (if any). |

## Browser compatibility

{{Compat}}

## Example

A page at `http://example.com/example.html` running the following code will generate logs as indicated:

```js
window.onpopstate = function (event) {
  console.log(
    "location: " +
      document.location +
      ", state: " +
      JSON.stringify(event.state),
  );
};
history.pushState({ page: 1 }, "title 1", "?page=1");
history.pushState({ page: 2 }, "title 2", "?page=2");
history.replaceState({ page: 3 }, "title 3", "?page=3");
history.back(); // Logs "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // Logs "location: http://example.com/example.html, state: null
history.go(2); // Logs "location: http://example.com/example.html?page=3, state: {"page":3}
```

Note that even though the original history entry (for `http://example.com/example.html`) has no state object associated with it, a `popstate` event is still fired when we activate that entry after the second call to `history.back()`.

## Related Events

- [`hashchange`](/ru/docs/Mozilla_event_reference/hashchange)

## See Also

- [Manipulating the browser history (the History API)](/ru/docs/Web/API/History_API)
