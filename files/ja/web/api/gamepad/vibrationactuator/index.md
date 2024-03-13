---
title: "Gamepad: vibrationActuator プロパティ"
short-title: vibrationActuator
slug: Web/API/Gamepad/vibrationActuator
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("Gamepad")}}{{Non-standard_Header}}

**`vibrationActuator`** は {{domxref("Gamepad")}} インターフェイスの読み取り専用プロパティで、このコントローラーで利用できる触覚フィードバックハードウェアを表す {{domxref("GamepadHapticActuator")}} オブジェクトを返します。

## 値

{{domxref("GamepadHapticActuator")}} オブジェクトです。

## 例

```js
const gamepad = navigator.getGamepads()[0];

gamepad.vibrationActuator.playEffect("dual-rumble", {
  startDelay: 0,
  duration: 200,
  weakMagnitude: 1.0,
  strongMagnitude: 1.0,
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ゲームパッド API](/ja/docs/Web/API/Gamepad_API)
