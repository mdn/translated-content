---
title: GamepadEvent.gamepad
slug: Web/API/GamepadEvent/gamepad
---

{{APIRef("Gamepad API")}}

**{{domxref("GamepadEvent")}} interface** 的 **`GamepadEvent.gamepad`** 属性返回一个 {{domxref("Gamepad")}} 对象，为触发 [`gamepadconnected`](/zh-CN/docs/Web/API/Window/gamepadconnected_event) 和[`gamepaddisconnected`](/zh-CN/docs/Web/API/Window/gamepaddisconnected_event) 事件提供相关联控制器数据的访问。

## 语法

```plain
只读 属性 Gamepad gamepad;
```

## 示例

在触发的 {{domxref("Window.gamepadconnected")}} 事件上调用 `gamepad` 属性。

```js
window.addEventListener("gamepadconnected", function (e) {
  console.log(
    "控制器已连接于 %d 位：%s. %d 个按钮，%d 个坐标方向。",
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length,
  );
});
```

## 值

一个 {{domxref("Gamepad")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

[使用 Gamepad API](/zh-CN/docs/Web/Guide/API/Gamepad)
