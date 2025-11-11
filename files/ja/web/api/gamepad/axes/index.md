---
title: "Gamepad: axes プロパティ"
short-title: axes
slug: Web/API/Gamepad/axes
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("Gamepad API")}}

**`Gamepad.axes`** は {{domxref("Gamepad") }} インターフェイスのプロパティで、機器（例えばアナログスティック）上に存在する軸を持つコントロールを表す配列を返します。

配列の各要素は -1.0 〜 1.0 の範囲の浮動小数点値で、最小値 (-1.0) から最大値 (1.0) までの軸の位置を表します。

## 値

数値の配列です。

## 例

```js
function gameLoop() {
  const [gp] = navigator.getGamepads();

  let a = 0;
  let b = 0;
  if (gp.axes[0] !== 0) {
    b -= gp.axes[0];
  } else if (gp.axes[1] !== 0) {
    a += gp.axes[1];
  } else if (gp.axes[2] !== 0) {
    b += gp.axes[2];
  } else if (gp.axes[3] !== 0) {
    a -= gp.axes[3];
  }

  ball.style.left = `${a * 2}px`;
  ball.style.top = `${b * 2}px`;

  const start = requestAnimationFrame(gameLoop);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

[ゲームパッド API の使用](/ja/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
