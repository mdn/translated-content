---
title: GlobalEventHandlers.onabort
slug: conflicting/Web/API/HTMLMediaElement/abort_event
original_slug: Web/API/GlobalEventHandlers/onabort
---

{{ ApiRef("HTML DOM") }}

## Summary

Обработчик событий, позволяющий прерывать события объекта **window**. (Недоступен для **Firefox 2** и **Safari**).

TODO define what "abort" is. Closing the window via window manager? Stopping the load of the page? By which means and reasons (user, network/server)? At which stages would it fire / be catched? Для IE, событие **onabort** доступно только для тега `img`.

## Syntax

```
window.onabort = funcRef
```

- `funcRef`: Reference to a function

## Example

```js
window.onabort = function() {
  alert("Load aborted.");
}
```

## Specification

{{Specifications}}

## Browser Compatibility

{{Compat}}
