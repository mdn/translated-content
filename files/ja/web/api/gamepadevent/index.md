---
title: GamepadEvent
slug: Web/API/GamepadEvent
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Gamepad API")}}{{securecontext_header}}

GamepadEvent はゲームパッド API のインターフェイスで、システムに接続されているゲームパッドへの参照が含まれています。これは、ゲームパッドイベント {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} と {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} が応答として発生するものです。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("GamepadEvent.GamepadEvent","GamepadEvent()")}}
  - : 新しい `GamepadEvent` オブジェクトを返します。

## インスタンスプロパティ

- {{ domxref("GamepadEvent.gamepad") }} {{ReadOnlyInline}}
  - : 発生したイベントの関連するゲームパッドデータへのアクセスを提供する {{ domxref("Gamepad") }} オブジェクトを返します。

## 例

ゲームパッドプロパティは、起動された {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} イベントで呼び出されます。

```js
window.addEventListener("gamepadconnected", (e) => {
  console.log(
    "Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length,
  );
});
```

また {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} イベントでも呼び出されます。

```js
window.addEventListener("gamepaddisconnected", (e) => {
  console.log(
    "Gamepad disconnected from index %d: %s",
    e.gamepad.index,
    e.gamepad.id,
  );
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

[ゲームパッド API の使用](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
