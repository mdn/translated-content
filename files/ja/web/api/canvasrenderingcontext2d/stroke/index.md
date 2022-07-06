---
title: CanvasRenderingContext2D.stroke()
slug: Web/API/CanvasRenderingContext2D/stroke
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Reference
browser-compat: api.CanvasRenderingContext2D.stroke
translation_of: Web/API/CanvasRenderingContext2D/stroke
---
{{APIRef}}

**`CanvasRenderingContext2D.stroke()`** はキャンバス 2D API のメソッドで、現在のあるいは渡されたパスを、現在の線のスタイルで描画します。

線はパスの中央に配置されます。言い換えれば、線の半分は内側に、半分は外側に描かれます。

線は[ノンゼロワインディング規則](https://en.wikipedia.org/wiki/Nonzero-rule)を使用して描かれます。すなわち交差したパスは塗りつぶされます。

## 構文

```js
void ctx.stroke();
void ctx.stroke(path);
```

### 引数

- `path`
  - : 描画する {{domxref("Path2D")}} パス。

## 例

### 単純な線の矩形

この例では、 `rect()` メソッドを用いて矩形を作成し、 `stroke()` を用いてキャンバスに描画しています。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.rect(10, 10, 150, 100);
ctx.stroke();
```

#### 結果

{{ EmbedLiveSample('A_simple_stroked_rectangle', 700, 180) }}

### パスの再描画

通常、新しく描画するごとに {{domxref("CanvasRenderingContext2D.beginPath()", "beginPath()")}} を呼び出したくなるはずです。そうしないと、以前のサブパスが現在のパスの一部として残り、 `stroke()` メソッドを呼び出すたびに描画されることになります。しかし、場合によっては、これは望ましい効果かもしれません。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

このコードは、 1 つ目のパスを 3 回、 2 つ目のパスを 2 回、 3 つ目のパスを 1 回だけ描画します。

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// First sub-path
ctx.lineWidth = 26;
ctx.strokeStyle = 'orange';
ctx.moveTo(20, 20);
ctx.lineTo(160, 20);
ctx.stroke();

// Second sub-path
ctx.lineWidth = 14;
ctx.strokeStyle = 'green';
ctx.moveTo(20, 80);
ctx.lineTo(220, 80);
ctx.stroke();

// Third sub-path
ctx.lineWidth = 4;
ctx.strokeStyle = 'pink';
ctx.moveTo(20, 140);
ctx.lineTo(280, 140);
ctx.stroke();
```

#### 結果

{{ EmbedLiveSample('Re-stroking_paths', 700, 180) }}

### 線の描画と塗りつぶし

パスの描画と塗りつぶしの両方を行う場合、これらの操作を行う順序によって結果が決まります。この例では、左側の正方形は、描画が塗りつぶしよりも上になるように描かれています。右側の四角は、ストロークよりも塗りつぶしが上に来るように描かれています。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 16;
ctx.strokeStyle = 'red';

// Stroke on top of fill
ctx.beginPath();
ctx.rect(25, 25, 100, 100);
ctx.fill();
ctx.stroke();

// Fill on top of stroke
ctx.beginPath();
ctx.rect(175, 25, 100, 100);
ctx.stroke();
ctx.fill();
```

#### 結果

{{ EmbedLiveSample('Stroking_and_filling', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
