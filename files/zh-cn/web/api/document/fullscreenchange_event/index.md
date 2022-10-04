---
title: fullscreenchange
slug: Web/API/Document/fullscreenchange_event
---

fullscreenchange 事件当浏览器进入或离开全屏时触发。

## General info

- Specification
  - : [Fullscreen](https://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html#api)
- Interface
  - : Event
- Bubbles
  - : Yes
- Cancelable
  - : No
- Target
  - : Document
- Default Action
  - : None

## Properties

| Property                              | Type                                 | Description                                            |
| ------------------------------------- | ------------------------------------ | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | Whether the event is cancellable or not.               |

## Example

```js
// Note that the API is still vendor-prefixed in browsers implementing it
document.addEventListener("fullscreenchange", function( event ) {

    // The event object doesn't carry information about the fullscreen state of the browser,
    // but it is possible to retrieve it through the fullscreen API
    if ( document.fullscreenElement !== null ) {

        // The target of the event is always the document,
        // but it is possible to retrieve the fullscreen element through the API
        document.fullscreenElement;
    }

});
```

## Related Events

- [`fullscreenerror`](/zh-CN/docs/Mozilla_event_reference/fullscreenerror)

## 规范

{{Specifications}}

## See also

- [Using fullscreen mode](/zh-CN/docs/DOM/Using_full-screen_mode)
