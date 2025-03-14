---
title: "GamepadButton: value プロパティ"
short-title: value
slug: Web/API/GamepadButton/value
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("Gamepad API")}}

**`GamepadButton.value`** は {{domxref("GamepadButton")}} インターフェイスのプロパティで、トリガーなど、現代の多くのゲームパッドにおけるアナログボタンの現在の状態を表すために使用する double 値を返します。

値は `0.0` - `1.0` の範囲で正規化され、`0.0` は押されていないボタン、`1.0` は完全に押されたボタンを表します。

## 例

```js
let gp = navigator.getGamepads()[0];

if (gp.buttons[0].value > 0) {
  // アナログボタンが押されたことに対する反応
}
```

## 値

A double.

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

[ゲームパッド API の使用](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
