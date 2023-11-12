---
title: GamepadButton.pressed
slug: Web/API/GamepadButton/pressed
---

{{APIRef("Gamepad API")}}

{{domxref("GamepadButton")}}接口下的 **`GamepadButton.pressed`** 属性返回一个表示按钮当然是被按下了 (`true`) 还是没有被按下 (`false`) 的布尔值。

## 语法

```plain
var isPressed = navigator.getGamepads()[0].pressed;
```

## 示例

```js
var gp = navigator.getGamepads()[0]; // 获取第一个控制器对象

if (gp.buttons[0].pressed == true) {
  // 响应按钮按下
}
```

## 值

一个 {{domxref("boolean")}} (布尔值)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Gamepad API](/zh-CN/docs/Web/Guide/API/Gamepad)
