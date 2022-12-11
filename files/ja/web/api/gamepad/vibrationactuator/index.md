---
title: Gamepad.vibrationActuator
slug: Web/API/Gamepad/vibrationActuator
l10n:
  sourceCommit: 1511e914c6b1ce6f88056bfefd48a6aa585cebce
---

{{APIRef("Gamepad")}}{{SeeCompatTable}}{{Non-standard_Header}}

**`vibrationActuator`** は {{domxref("Gamepad")}} インターフェイスの読み取り専用プロパティで、このコントローラーで利用できる触覚フィードバックハードウェアを表す {{domxref("GamepadHapticActuator")}} オブジェクトを返します。

## 値

{{domxref("GamepadHapticActuator")}} オブジェクトです。

## 例

```js
const gamepad = navigator.getGamepads()[0];

gamepad.vibrationActuator.playEffect('dual-rumble', {
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
