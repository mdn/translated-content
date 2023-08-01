---
title: orientationchange
slug: Web/API/Window/orientationchange_event
---

`orientationchange` 이벤트는 장치의 방향이 바뀔 때 호출 된다.

## General info

- Specification
  - : [Screen Orientation](http://www.w3.org/TR/screen-orientation/#event-handlers)
- Interface
  - : Event
- Bubbles
  - : No
- Cancelable
  - : No
- Target
  - : Screen
- Default Action
  - : None

## Properties

| Property                        | Type                       | Description                                            |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | Whether the event is cancellable or not.               |

## Example

```js
// Note that "orientationchange" and screen.orientation are unprefixed in the following
// code although this API is still vendor-prefixed browsers implementing it.
screen.addEventListener("orientationchange", function () {
  alert("the orientation of the device is now " + screen.orientation);
});
```
