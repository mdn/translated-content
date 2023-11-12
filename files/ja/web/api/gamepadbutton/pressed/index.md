---
title: "GamepadButton: pressed プロパティ"
short-title: pressed
slug: Web/API/GamepadButton/pressed
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{APIRef("Gamepad API")}}

**`GamepadButton.pressed`** は {{domxref("GamepadButton")}} インターフェイスのプロパティで、現在ボタンが押されている (`true`) か、押されていない (`false`) かを示す論理値を返します。

## 例

```js
let gp = navigator.getGamepads()[0]; // 最初のゲームパッドオブジェクトを取得

if (gp.buttons[0].pressed) {
  // 押されているボタンに反応
}
```

## 値

論理値です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ゲームパッド API の使用](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
