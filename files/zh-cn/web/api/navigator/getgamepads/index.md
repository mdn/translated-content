---
title: Navigator.getGamepads()
slug: Web/API/Navigator/getGamepads
---

{{APIRef("Gamepad API")}}{{SeeCompatTable}}

调用 **`Navigator.getGamepads()`** 方法会返回一个数组：第一个值为 `null` ，其他的值均为 {{ domxref("Gamepad") }} 对象，表示每一个与设备连接的游戏手柄。所以如果没有连接任何游戏手柄，这个方法将只会返回 `null`。

## 语法

```plain
 var arrayGP = navigator.getGamepads();
```

## 样例

```js
window.addEventListener("gamepadconnected", function (e) {
  var gp = navigator.getGamepads()[e.gamepad.index];
  console.log(
    "Gamepad connected at index %d: %s. %d buttons, %d axes.",
    gp.index,
    gp.id,
    gp.buttons.length,
    gp.axes.length,
  );
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using the Gamepad API](/zh-CN/docs/Web/Guide/API/Gamepad)
- [Gamepad API](/zh-CN/docs/Web/API/Gamepad_API)
