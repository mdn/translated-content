---
title: GamepadButton.value
slug: Web/API/GamepadButton/value
---

{{APIRef("Gamepad API")}}

{{domxref("GamepadButton")}}接口下的 **`GamepadButton.value`** 属性返回一个双精浮点值来表示许多现代控制器上的模拟按钮的状态，比如说扳机键。

其值被规范于范围 `0.0` — `1.0` 内， `0.0` 表示按钮没有被按下，`1.0` 则表示按钮被完全按下。

## 语法

```js
var pressState = navigator.getGamepads()[0].value;
// 只读属性、双精浮点值
```

## 示例

```js
var gp = navigator.getGamepads()[0];

if (gp.buttons[0].value > 0) {
  // 响应模拟按钮被按下
}
```

## 值

一个 {{domxref("double")}} (双精浮点值)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

[使用 Gamepad API](/zh-CN/docs/Web/Guide/API/Gamepad)
