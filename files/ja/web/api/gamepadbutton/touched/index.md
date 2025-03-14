---
title: "GamepadButton: touched プロパティ"
short-title: touched
slug: Web/API/GamepadButton/touched
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("Gamepad API")}}

**`touched`** は {{domxref("GamepadButton")}} インターフェイスのプロパティで、タッチを検出できるボタンが現在タッチされているか (`true`) またはタッチされていないか (`false`) を示す論理値を返します。

ボタンがタッチを検出できないがアナログ値を返すことができる場合、プロパティは値が `0` より大きければ `true` となり、そうでなければ `false` となります。ボタンがタッチを検出できず、デジタル値しか返せない場合は、{{domxref("GamepadButton.pressed")}} プロパティを反映します。

## 値

論理値 ({{jsxref("Boolean")}}) です。タッチされていれば true です。

## 例

```js
let gp = navigator.getGamepads()[0]; // 最初のゲームパッドオブジェクトを取得

if (gp.buttons[0].touched) {
  // タッチされているボタンに応答
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ゲームパッド API の使用](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
