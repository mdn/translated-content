---
title: "GamepadEvent: gamepad プロパティ"
short-title: gamepad
slug: Web/API/GamepadEvent/gamepad
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Gamepad API")}}

**`GamepadEvent.gamepad`** は **{{domxref("GamepadEvent")}} インターフェイス**のプロパティで、{{domxref("Gamepad")}} オブジェクトを返し、発生した {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} イベントと {{domxref("Window.gamepaddisconnected_event", "gamepaddisconnected")}} イベントの関連するゲームパッドデータへのアクセスを提供します。

## 値

{{domxref("Gamepad")}} オブジェクトです。

## 例

`gamepad` プロパティが {{domxref("Window.gamepadconnected_event", "gamepadconnected")}} イベントが発生して呼び出されているところです。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

[ゲームパッド API の使用](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
