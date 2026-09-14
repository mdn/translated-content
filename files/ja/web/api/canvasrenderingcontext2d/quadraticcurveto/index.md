---
title: "CanvasRenderingContext2D: quadraticCurveTo() メソッド"
short-title: quadraticCurveTo()
slug: Web/API/CanvasRenderingContext2D/quadraticCurveTo
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

**`CanvasRenderingContext2D.quadraticCurveTo()`** はキャンバス 2D API のメソッドで、現在のサブパスに二次[ベジェ曲線](/ja/docs/Glossary/Bezier_curve)を追加します。2 つの点が要求され、1 つ目の点は制御点、2 つ目の点は終点です。始点は現在のパスにおける最後の点であり、二次ベジェ曲線を作成する前に {{domxref("CanvasRenderingContext2D.moveTo", "moveTo()")}} を使用して変更できます。

## 構文

```js-nolint
quadraticCurveTo(cpx, cpy, x, y)
```

### 引数

- `cpx`
  - : 制御点の X 軸座標です。
- `cpy`
  - : 制御点の Y 軸座標です。
- `x`
  - : 終点の X 軸座標です。
- `y`
  - : 終点の Y 軸座標です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### quadraticCurveTo の働き

この例は、二次ベジェ曲線がどのように描画されるかを示しています。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 二次ベジェ曲線
ctx.beginPath();
ctx.moveTo(50, 20);
ctx.quadraticCurveTo(230, 30, 50, 100);
ctx.stroke();

// 始点と終点
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(50, 20, 5, 0, 2 * Math.PI); // 始点
ctx.arc(50, 100, 5, 0, 2 * Math.PI); // 終点
ctx.fill();

// 制御点
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(230, 30, 5, 0, 2 * Math.PI);
ctx.fill();
```

#### 結果

この例では、制御点は赤色で、始点と終了点は青色です。

{{ EmbedLiveSample('How_quadraticCurveTo_works', 315, 165) }}

### 単純な二次曲線

この例では、`quadraticCurveTo()` を使用して単純な二次ベジェ曲線を描画します。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

曲線は `moveTo()` で指定された点 (20, 110) から始めます。制御点は (230, 150) に配置されます。曲線は (250, 20) で終了します。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20, 110);
ctx.quadraticCurveTo(230, 150, 250, 20);
ctx.stroke();
```

#### 結果

{{ EmbedLiveSample('A_simple_quadratic_curve', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- [Bézier curve](/ja/docs/Glossary/Bezier_curve)
