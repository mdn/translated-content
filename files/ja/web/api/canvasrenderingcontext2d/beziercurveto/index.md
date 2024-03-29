---
title: "CanvasRenderingContext2D: bezierCurveTo() メソッド"
short-title: bezierCurveTo()
slug: Web/API/CanvasRenderingContext2D/bezierCurveTo
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

**`CanvasRenderingContext2D.bezierCurveTo()`** は キャンバス2D API のメソッドで、現在のサブパスに 3 次[ベジェ曲線](/ja/docs/Glossary/Bezier_curve)を追加します。このメソッドでは 3 つの点が要求されます。最初の 2 つは制御点であり、 3 つ目は終了点です。始点は現在のパスの最新の点で、ベジェ曲線を作成する前に {{domxref("CanvasRenderingContext2D.moveTo", "moveTo()")}} を使用して変更することができます。

## 構文

```js-nolint
bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
```

### 引数

- `cp1x`
  - : 1 つ目の制御点の x 軸座標。
- `cp1y`
  - : 1 つ目の制御点の y 軸座標。
- `cp2x`
  - : 2 つ目の制御点の x 軸座標。
- `cp2y`
  - : 2 つ目の制御点の y 軸座標。
- `x`
  - : 終了点の x 軸座標。
- `y`
  - : 終了点の y 軸座標。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### bezierCurveTo の動作

この例は、 3 次ベジェ曲線がどのように描画されるかを示しています。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
// Define canvas and context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Define the points as {x, y}
let start = { x: 50, y: 20 };
let cp1 = { x: 230, y: 30 };
let cp2 = { x: 150, y: 80 };
let end = { x: 250, y: 100 };

// Cubic Bézier curve
ctx.beginPath();
ctx.moveTo(start.x, start.y);
ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
ctx.stroke();

// Start and end points
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(start.x, start.y, 5, 0, 2 * Math.PI); // Start point
ctx.arc(end.x, end.y, 5, 0, 2 * Math.PI); // End point
ctx.fill();

// Control points
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(cp1.x, cp1.y, 5, 0, 2 * Math.PI); // Control point one
ctx.arc(cp2.x, cp2.y, 5, 0, 2 * Math.PI); // Control point two
ctx.fill();
```

#### 結果

この例では、制御点は赤、始点と終点は青です。

{{ EmbedLiveSample('How_bezierCurveTo_works', 315, 165) }}

### 単純なベジェ曲線

この例では `bezierCurveTo()` を使用して単純なベジェ曲線を描画します。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

曲線は、 `moveTo()` で指定した (30, 30) の点から始まります。 1 つ目の制御点は (120, 160) に配置され、 2 つ目は (180, 10) に配置されます。曲線は (220, 140) で終わります。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(30, 30);
ctx.bezierCurveTo(120, 160, 180, 10, 220, 140);
ctx.stroke();
```

#### 結果

{{ EmbedLiveSample('A_simple_Bézier_curve', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- [ベジェ曲線](/ja/docs/Glossary/Bezier_curve)
