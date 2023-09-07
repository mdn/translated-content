---
title: GamepadButton
slug: Web/API/GamepadButton
---

{{APIRef("Gamepad API")}}

**`GamepadButton`** 接口定义了在一个手柄或其他控制器的唯一的一个按键，允许访问不同控制器设备可用类型的按钮的当前状态。

`GamepadButton` 对象是由 {{domxref("Gamepad")}} 接口的 `buttons` 属性返回的可查询任意值的数组返回的。

> **备注：** 上述情况是在 Firefox Gecko 28 及以上的；Chrome 和较早版本的 Firefox 访问此属性时仍然会返回一个双精浮点值的数组。

## 属性

- {{domxref("GamepadButton.value")}} {{readonlyInline}}
  - : 一个用来表示按钮当前状态的双精浮点值，比如说许多现代控制器都有的扳机键。其值被规范至范围 0.0 —1.0 之间，其中 0.0 表示按钮没有被按下，而 1.0 表示按钮被完全按下 (按到底)。
- {{domxref("GamepadButton.pressed")}} {{readonlyInline}}
  - : 一个指示当前按钮是被按下 (`true`) 还是没有被按下 (`false`) 的布尔值。

## 示例

接下来的代码来自于我 (文作者) 的 Gamepad API 按钮示例 (你可以[在线查看示例](http://chrisdavidmills.github.io/gamepad-buttons/)，并在 Github 上[查找源代码](https://github.com/chrisdavidmills/gamepad-buttons/tree/master)。) 注意代码分支——在 Chrome 中{{domxref("Navigator.getGamepads")}} 需要一个 `webkit` 前缀并且按钮值被存储为一个双精浮点值的数组，然而在 Firefox 中 {{domxref("Navigator.getGamepads")}} 不需要前缀，且按钮值被存储为 {{domxref("GamepadButton")}} 对象数组；其中有我们需要的 {{domxref("GamepadButton.value")}} 或 {{domxref("GamepadButton.pressed")}} 属性，这取决于他们是什么类型的按钮。在这个简单的示例中我只是允许了它们。

```js
function gameLoop() {
  if (navigator.webkitGetGamepads) {
    var gp = navigator.webkitGetGamepads()[0];

    if (gp.buttons[0] == 1) {
      b--;
    } else if (gp.buttons[1] == 1) {
      a++;
    } else if (gp.buttons[2] == 1) {
      b++;
    } else if (gp.buttons[3] == 1) {
      a--;
    }
  } else {
    var gp = navigator.getGamepads()[0];

    if (gp.buttons[0].value > 0 || gp.buttons[0].pressed == true) {
      b--;
    } else if (gp.buttons[1].value > 0 || gp.buttons[1].pressed == true) {
      a++;
    } else if (gp.buttons[2].value > 0 || gp.buttons[2].pressed == true) {
      b++;
    } else if (gp.buttons[3].value > 0 || gp.buttons[3].pressed == true) {
      a--;
    }
  }

  ball.style.left = a * 2 + "px";
  ball.style.top = b * 2 + "px";

  var start = rAF(gameLoop);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

[使用 Gamepad API](/zh-CN/docs/Web/Guide/API/Gamepad)
