---
title: GamepadEvent
slug: Web/API/GamepadEvent
---

{{APIRef("Gamepad API")}}

Gamepad API の GamepadEvent インターフェイスは、システムに接続されているゲームパッドへの参照が含まれています。これは、ゲームパッドイベント {{domxref("Window.gamepadconnected")}} と {{domxref("Window.gamepaddisconnected")}} が応答して発生するものです。

## コンストラクタ

- {{domxref("GamepadEvent.GamepadEvent","GamepadEvent()")}}
  - : 新しい `GamepadEvent` オブジェクトを返します。

## プロパティ

- {{ domxref("GamepadEvent.gamepad") }} {{readonlyInline}}
  - : 発生したイベントの関連するゲームパッドデータへのアクセスを提供する {{ domxref("Gamepad") }} オブジェクトを返します。

## 例

ゲームパッドプロパティは、起動された {{domxref("Window.gamepadconnected")}} イベントで呼び出されます。

```js
window.addEventListener("gamepadconnected", function(e) {
  console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
  e.gamepad.index, e.gamepad.id,
  e.gamepad.buttons.length, e.gamepad.axes.length);
});
```

また {{domxref("Window.gamepaddisconnected")}} イベントでも呼び出されます。

```js
window.addEventListener("gamepaddisconnected", function(e) {
  console.log("Gamepad disconnected from index %d: %s",
  e.gamepad.index, e.gamepad.id);
});
```

## 仕様書

| 仕様                                                                                     | 状態                         | コメント |
| ---------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Gamepad", "#gamepadevent-interface", "GamepadEvent")}} | {{Spec2("Gamepad")}} | 初版     |

## ブラウザーの互換性

{{Compat("api.GamepadEvent")}}

## 関連情報

[Gamepad API の利用](/ja/docs/Web/Guide/API/Gamepad)
