---
title: gamepadconnected
slug: Web/API/Window/gamepadconnected_event
---

`gamepadconnected` 事件会在浏览器检测到游戏控制器第一次连接或者第一次按下游戏键/摇杆的时候触发。

## 基本信息

- 文档
  - : [Gamepad](http://www.w3.org/TR/gamepad/#the-gamepadconnected-event)
- 类型
  - : 事件
- 冒泡
  - : No
- 可取消
  - : No
- Target
  - : DefaultView (`<window>`)
- 默认操着
  - : 无

## 属性

| Property          | Type                       | Description                                               |
| ----------------- | -------------------------- | --------------------------------------------------------- |
| `target` 只读     | {{domxref("DOMString")}}   | 事件目标（DOM 树中的顶层，即 document.documentElement）。 |
| `type` 只读       | {{domxref("EventTarget")}} | 事件的类型。                                              |
| `bubbles` 只读    | {{jsxref("Boolean")}}      | 事件是否正常冒泡。                                        |
| `cancelable` 只读 | {{jsxref("Boolean")}}      | 事件是否可以取消。                                        |
| `gamepad` 只读    | {{domxref("Gamepad")}}     | 单个游戏手柄属性，可用于访问关联游戏手柄的数据。          |

## 示例

```js
// 请注意，在实现该 API 的浏览器中，该 API 仍为供应商前缀
window.addEventListener("gamepadconnected", function (event) {
  // 所有按钮和轴值均可通过以下方式访问
  event.gamepad;
});
```

## 规范

{{Specifications}}

## 相关事件

- [gamepaddisconnected](/zh-CN/docs/Web/Reference/Events/gamepaddisconnected)

## 还可以参考

- [Using Gamepad API](/zh-CN/docs/API/Gamepad/Using_Gamepad_API)
