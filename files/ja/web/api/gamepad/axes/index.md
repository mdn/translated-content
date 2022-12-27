---
title: Gamepad.axes
slug: Web/API/Gamepad/axes
---

{{APIRef("Gamepad API")}}

{{domxref("Gamepad") }} インターフェイスの **`Gamepad.axes`** プロパティはデバイス上に存在する軸を持つコントロールを表す配列を返します。 (例 : アナログスティック)。

配列の各エントリは -1.0 〜 1.0 の範囲の浮動小数点値で、最小値 (-1.0) から最大値 (1.0) までの軸の位置を表します。

## 構文

```
readonly    attribute double[]            axes;
```

## 例

```js
function gameLoop() {
  if(navigator.webkitGetGamepads) {
    var gp = navigator.webkitGetGamepads()[0];
  } else {
    var gp = navigator.getGamepads()[0];
  }

  if(gp.axes[0] != 0) {
    b -= gp.axes[0];
  } else if(gp.axes[1] != 0) {
    a += gp.axes[1];
  } else if(gp.axes[2] != 0) {
    b += gp.axes[2];
  } else if(gp.axes[3] != 0) {
    a -= gp.axes[3];
  }

  ball.style.left = a*2 + "px";
  ball.style.top = b*2 + "px";

  var start = rAF(gameLoop);
};
```

## 値

{{domxref("double") }} の値の配列。

## 仕様書

| 仕様                                                                             | 状態                         | コメント |
| -------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName("Gamepad", "#widl-Gamepad-axes", "Gamepad.axes")}} | {{Spec2("Gamepad")}} | 初版     |

## ブラウザーの互換性

{{Compat("api.Gamepad.axes")}}

## 関連情報

[Gamepad API を利用する](/ja/docs/Web/Guide/API/Gamepad)
