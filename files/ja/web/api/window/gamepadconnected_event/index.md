---
title: gamepadconnected
slug: Web/API/Window/gamepadconnected_event
---

`gamepadconnected` イベントは、ゲームパッドが接続されたことをブラウザが検出したとき、またはゲームパッドのボタン/軸が初めて使用されたときに発生します。

## 一般的な情報

- 仕様
  - : [Gamepad](http://www.w3.org/TR/gamepad/#the-gamepadconnected-event)
- インターフェース
  - : Event
- バブリング
  - : No
- キャンセル可能
  - : No
- 対象
  - : DefaultView (`<window>`)
- 標準の動作
  - : None

## 属性

| Property                              | Type                                 | Description                                                                                 |
| ------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree).                                      |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | The type of event.                                                                          |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | Whether the event normally bubbles or not.                                                  |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | Whether the event is cancellable or not.                                                    |
| `gamepad` {{readonlyInline}}    | {{domxref("Gamepad")}}         | The single gamepad attribute provides access to the associated gamepad data for this event. |

## 例

```js
// Note that the API is still vendor-prefixed in browsers implementing it
window.addEventListener("gamepadconnected", function( event ) {

    // All buttons and axes values can be accessed through
    event.gamepad;

});
```

## 関連するイベント

- [gamepaddisconnected](/ja/docs/Web/Reference/Events/gamepaddisconnected)

## 参照

- [Gamepad API の利用](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
