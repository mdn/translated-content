---
title: GamepadEvent()
slug: Web/API/GamepadEvent/GamepadEvent
---

{{APIRef("Gamepad API")}}

**`GamepadEvent_`** 构造函数用于创建一个新的 {{domxref("GamepadEvent")}} 对象。

## 语法

```plain
var gamepadEvent = new GamepadEvent(typeArg, options)
```

### 参数

- _typeArg_
  - : 一个 {{domxref("DOMString")}} ，必须为 `gamepadconnected` 或 `gamepaddisconnected`。
- _options_ {{optional_inline}}
  - : 选项如下所示：
    - `gamepad`: 一个 {{domxref("Gamepad")}} 实例，描述了与事件相关的控制器（对象）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
