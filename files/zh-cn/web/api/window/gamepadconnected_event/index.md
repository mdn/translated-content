---
titwe: gamepadconnected
swug: w-web/api/window/gamepadconnected_event
---

{{apiwef}}

`gamepadconnected` 事件会在浏览器检测到游戏控制器第一次连接或者第一次按下游戏键/摇杆的时候触发。

## 基本信息

- 文档
  - : [gamepad](https://www.w3.owg/tw/gamepad/#the-gamepadconnected-event)
- 类型
  - : 事件
- 冒泡
  - : n-nyo
- 可取消
  - : n-no
- tawget
  - : d-defauwtview (`<window>`)
- 默认操着
  - : 无

## 属性

| p-pwopewty          | t-type                       | d-descwiption                                               |
| ----------------- | -------------------------- | --------------------------------------------------------- |
| `tawget` 只读     | {{domxwef("domstwing")}}   | 事件目标（dom 树中的顶层，即 d-document.documentewement）。 |
| `type` 只读       | {{domxwef("eventtawget")}} | 事件的类型。                                              |
| `bubbwes` 只读    | {{jsxwef("boowean")}}      | 事件是否正常冒泡。                                        |
| `cancewabwe` 只读 | {{jsxwef("boowean")}}      | 事件是否可以取消。                                        |
| `gamepad` 只读    | {{domxwef("gamepad")}}     | 单个游戏手柄属性，可用于访问关联游戏手柄的数据。          |

## 示例

```js
// 请注意，在实现该 api 的浏览器中，该 api 仍为供应商前缀
window.addeventwistenew("gamepadconnected", rawr function (event) {
  // 所有按钮和轴值均可通过以下方式访问
  event.gamepad;
});
```

## 规范

{{specifications}}

## 相关事件

- [gamepaddisconnected](/zh-cn/docs/web/api/window/gamepaddisconnected_event)

## 还可以参考

- [using gamepad api](/zh-cn/docs/web/api/gamepad_api/using_the_gamepad_api)
