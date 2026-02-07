---
title: "CanvasRenderingContext2D: getLineDash() メソッド"
short-title: getLineDash()
slug: Web/API/CanvasRenderingContext2D/getLineDash
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

**`getLineDash()`** はキャンバス 2D API の {{domxref("CanvasRenderingContext2D")}} インターフェイスのメソッドで、現在の破線パターンを取得します。

## 構文

```js-nolint
getLineDash()
```

### 引数

なし。

### 返値

{{jsxref("Array")}} で、線と隙間を交互に描画するための距離（座標空間単位）を指定する数値を表します。要素を設定する際の数値が奇数の場合、配列の要素はコピーされ連結されます。例えば、線画のダッシュを `[5, 15, 25]` と設定すると、`[5, 15, 25, 5, 15, 25]` が取得されます。

## 例

### 現在の破線設定を取得

この例は `getLineDash()` メソッドの使い方を示します。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

{{domxref("CanvasRenderingContext2D.setLineDash()", "setLineDash()")}} で設定されるように、ストロークは長さ 10 単位の線で構成され、それぞれの線の間には 20 単位の空間が設けられます。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.setLineDash([10, 20]);
console.log(ctx.getLineDash()); // [10, 20]

// 破線を描画
ctx.beginPath();
ctx.moveTo(0, 50);
ctx.lineTo(300, 50);
ctx.stroke();
```

#### 結果

{{ EmbedLiveSample('Getting_the_current_line_dash_setting', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
