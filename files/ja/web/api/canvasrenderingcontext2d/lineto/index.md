---
title: CanvasRenderingContext2D.lineTo()
slug: Web/API/CanvasRenderingContext2D/lineTo
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
browser-compat: api.CanvasRenderingContext2D.lineTo
translation_of: Web/API/CanvasRenderingContext2D/lineTo
---
{{APIRef}}

{{domxref("CanvasRenderingContext2D")}} の **`lineTo()`** はキャンバス 2D API のメソッドで、現在のサブパスに対して、その終点から指定された `(x, y)` 座標に向けて直線を追加します。

現在のパスを変更するほかのメソッドと同様に、このメソッドは直悦は何も描画しません。パスをキャンバス上に描くには、 {{domxref("CanvasRenderingContext2D.fill", "fill()")}} または {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}} メソッドを使用します。

## 構文

```js
ctx.lineTo(x, y);
```

### 引数

- `x`
  - : 直線の終点となる x 座標。
- `y`
  - : 直線の終点となる y 座標。

### 返値

{{jsxref("undefined")}}.

## 例

### 直線の描画

この例は、 `lineTo()` メソッドを使用して直線を描きます。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

The line begins at (30, 50) and ends at (150, 100).

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();       // 新しいパスを開始
ctx.moveTo(30, 50);    // ペンを (30, 50) へ移動
ctx.lineTo(150, 100);  // 直線を (150, 100) へ描く
ctx.stroke();          // パスを描画
```

#### 結果

{{ EmbedLiveSample('Drawing_a_straight_line', 700, 180) }}

### 連続線の描画

`lineTo()` （または類似のメソッド）を呼び出すたびに、現在のパスに自動的に追加されます。すなわち、すべての線が描画され、互いに塗りつぶされます。
この例では、一筆書きで 'M' の文字を描画します。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.moveTo(90, 130);
ctx.lineTo(95, 25);
ctx.lineTo(150, 80);
ctx.lineTo(205, 25);
ctx.lineTo(210, 130);
ctx.lineWidth = 15;
ctx.stroke();
```

#### 結果

{{ EmbedLiveSample('Drawing_connected_lines', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.moveTo()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
