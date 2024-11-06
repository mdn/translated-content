---
title: "Gamepad: hapticActuators プロパティ"
short-title: hapticActuators
slug: Web/API/Gamepad/hapticActuators
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("Gamepad")}}{{SeeCompatTable}}

**`hapticActuators`** は {{domxref("Gamepad")}} インターフェイスの読み取り専用プロパティで、 {{domxref("GamepadHapticActuator")}} オブジェクトを含む配列を返します。各オブジェクトは、コントローラーで利用可能な触覚フィードバックハードウェアを表します。

### 値

{{domxref("GamepadHapticActuator")}} オブジェクトを含む配列。

## 例

```js
const gamepad = navigator.getGamepads()[0];

gamepad.hapticActuators[0].pulse(1.0, 200);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ゲームパッド API](/ja/docs/Web/API/Gamepad_API)
