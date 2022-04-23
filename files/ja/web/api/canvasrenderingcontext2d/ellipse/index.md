---
title: CanvasRenderingContext2D.ellipse()
slug: Web/API/CanvasRenderingContext2D/ellipse
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - メソッド
  - リファレンス
browser-compat: api.CanvasRenderingContext2D.ellipse
translation_of: Web/API/CanvasRenderingContext2D/ellipse
---
{{APIRef}}

**`CanvasRenderingContext2D.ellipse()`** はキャンバス 2D API のメソッドで、現在のサブパスに楕円の弧を追加します。

## 構文

```js
void ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, counterclockwise]);
```

`ellipse()` メソッドは `(x, y)` を中心として、 `radiusX` と `radiusY` を半径とする楕円の弧を生成します。パスは `startAngle` から始まって `endAngle` で終わり、回転方向は `anticlockwise` で指定します（既定では時計回りです）。

### 引数

- `x`
  - : 楕円の中心の X 軸 (水平) 座標です。
- `y`
  - : 楕円の中心の Y 軸 (垂直) 座標です。
- `radiusX`
  - : 楕円の長辺の半径です。負の値であってはなりません。
- `radiusY`
  - : 楕円の短辺の半径です。負の値であってはなりません。
- `rotation`
  - : 楕円の傾きで、ラジアンで表現します。
- `startAngle`
  - : 楕円が始まる角度で、正の X 軸から時計回りの角度をラジアンで表現したものです。
- `endAngle`
  - : 楕円が終わる角度で、正の X 軸から時計回りの角度をラジアンで表現したものです。
- `counterclockwise` {{optional_inline}}
  - : 省略可能な論理値で、 `true` の場合は楕円を反時計回りに描きます。既定値は `false` (時計回り) です。

## 例

### 完全な楕円の描画

この例は、 π/4 ラジアンの角度 (45**°**) で楕円を描きます。楕円全体を描くには、弧が 0 ラジアン (0**°**) で始まり、 2π ラジアン (360**°**) で終わるようにします。

#### HTML

```html
<canvas id="canvas" width="200" height="200"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 楕円を描画
ctx.beginPath();
ctx.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
ctx.stroke();

// Draw the ellipse's line of reflection
ctx.beginPath();
ctx.setLineDash([5, 5]);
ctx.moveTo(0, 200);
ctx.lineTo(200, 0);
ctx.stroke();
```

#### 結果

{{ EmbedLiveSample('Drawing_a_full_ellipse', 700, 250) }}

### 様々な楕円の弧

この例では、様々な属性の3本の楕円のパスを生成します。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'red';
ctx.beginPath();
ctx.ellipse(60, 75, 50, 30, Math.PI * .25, 0, Math.PI * 1.5);
ctx.fill();

ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.ellipse(150, 75, 50, 30, Math.PI * .25, 0, Math.PI);
ctx.fill();

ctx.fillStyle = 'green';
ctx.beginPath();
ctx.ellipse(240, 75, 50, 30, Math.PI * .25, 0, Math.PI, true);
ctx.fill();
```

#### 結果

{{ EmbedLiveSample('Various_elliptical_arcs', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- 真円を描くには {{domxref("CanvasRenderingContext2D.arc()")}} を使用してください。
