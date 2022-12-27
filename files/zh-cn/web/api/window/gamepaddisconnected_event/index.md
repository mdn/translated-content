---
title: Window.ongamepaddisconnected
slug: Web/API/Window/gamepaddisconnected_event
---

{{DefaultAPISidebar("Gamepad API")}}{{SeeCompatTable}}

The **`ongamepaddisconnected`** property of the {{domxref("Window")}} interface represents an event handler that will run when a gamepad is disconnected (when the {{event('gamepaddisconnected')}} event fires).

The event object is of type {{domxref("GamepadEvent")}}.

## 解析

```plain
window.ongamepaddisconnected = function() { ... };
```

## 示例

```js
window.ongamepaddisconnected = function() {
  // A gamepad has been disconnected
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [The Gamepad API](https://hacks.mozilla.org/2013/12/the-gamepad-api/) by Ted Mielczarek and Robert Nyman
- [Simple API demo page](http://luser.github.io/gamepadtest/) ([source](https://github.com/luser/gamepadtest))
