---
title: CanvasRenderingContext2D.setLineDash()
slug: Web/API/CanvasRenderingContext2D/setLineDash
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - 破線
  - LInes
  - メソッド
  - リファレンス
  - パターン
  - setLineDash
browser-compat: api.CanvasRenderingContext2D.setLineDash
translation_of: Web/API/CanvasRenderingContext2D/setLineDash
---
{{APIRef}}

**`setLineDash()`** はキャンバス 2D API の {{domxref("CanvasRenderingContext2D")}} インターフェイスのメソッドで、線を描画するときに使用される線の模様を設定します。 これは描画する線とその隙間の長さの値を交互に指定する配列を使用します。

> **Note:** 線の模様を実線に戻す場合には、指定する配列の中身を空にします。

## 構文

```js
ctx.setLineDash(segments);
```

### 引数

- `segments`
  - : ({{jsxref("Array")}}) で、描画する線の長さとその隙間の数値を交互に指定する配列 (座標空間単位)。配列内の要素数が奇数の場合、配列の要素がコピーされて連結されます。 例えば、`[5, 15, 25]`は`[5, 15, 25, 5, 15, 25]`になります。配列が空の場合、ラインダッシュリストはリセットされ、描画される線は実線に戻ります。

### 返値

{{jsxref("undefined")}} です。

## 例

### 基本的な例

この例では、`setLineDash()`メソッドを使用して、実線の上に破線を描画します。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Dashed line
ctx.beginPath();
ctx.setLineDash([5, 15]);
ctx.moveTo(0, 50);
ctx.lineTo(300, 50);
ctx.stroke();

// Solid line
ctx.beginPath();
ctx.setLineDash([]);
ctx.moveTo(0, 100);
ctx.lineTo(300, 100);
ctx.stroke();
```

#### 結果

{{ EmbedLiveSample('Basic_example', 700, 180) }}

### いくつかの一般的な模様

この例は、さまざまな一般的な破線のパターンを示しています。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

下記の `drawDashedLine()` 関数を使用すると、複数の破線を簡単に描画できます。引数としてパターン配列を受け取ります。

```js
function drawDashedLine(pattern) {
  ctx.beginPath();
  ctx.setLineDash(pattern);
  ctx.moveTo(0, y);
  ctx.lineTo(300, y);
  ctx.stroke();
  y += 20;
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let y = 15;

drawDashedLine([]);
drawDashedLine([1, 1]);
drawDashedLine([10, 10]);
drawDashedLine([20, 5]);
drawDashedLine([15, 3, 3, 3]);
drawDashedLine([20, 3, 3, 3, 3, 3, 3, 3]);
drawDashedLine([12, 3, 3]);  // [12, 3, 3, 12, 3, 3] と同じ
```

#### 結果

{{ EmbedLiveSample('Some_common_patterns', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
