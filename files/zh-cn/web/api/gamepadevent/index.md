---
title: GamepadEvent
slug: Web/API/GamepadEvent
---

{{APIRef("Gamepad API")}}

Gamepad API 的 GamepadEvent 接口包含对连接到系统的控制器的引用，这也是 gamepad 事件 events {{domxref("Window.gamepadconnected")}} 与 {{domxref("Window.gamepaddisconnected")}} 被触发时响应的内容。

## 构造函数

- {{domxref("GamepadEvent.GamepadEvent","GamepadEvent()")}}
  - : 返回一个新的 `GamepadEvent` 对象。

## 属性

- {{ domxref("GamepadEvent.gamepad") }} {{readonlyInline}}
  - : 返回一个 {{ domxref("Gamepad") }} 对象，提供触发事件的控制器数据的访问。

## 示例

在触发的 {{domxref("Window.gamepadconnected")}} 事件上调用控制器属性。

```js
window.addEventListener("gamepadconnected", function (e) {
  console.log(
    "控制器已连接于 %d 位：%s。 %d 个按键，%d 个坐标方向。",
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length,
  );
});
```

与 {{domxref("Window.gamepaddisconnected")}} 事件上的。

```js
window.addEventListener("gamepaddisconnected", function (e) {
  console.log("控制器已从 %d 位断开：%s", e.gamepad.index, e.gamepad.id);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

[使用 Gamepad API](/zh-CN/docs/Web/Guide/API/Gamepad)
