---
title: gamepaddisconnected
slug: Web/API/Window/gamepaddisconnected_event
---

ゲームパッドが切断されたことをブラウザが検出すると、`gampaddisconnected` イベントが発生します。

## 一般的な情報

- 仕様
  - : [Gamepad](http://www.w3.org/TR/gamepad/#the-gamepaddisconnected-event)
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

## 関連するイベント

- [gamepadconnected](/ja/docs/Web/Reference/Events/gamepadconnected)

## 参照

- [Gamepad API の利用](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
