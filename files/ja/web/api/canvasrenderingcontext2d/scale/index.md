---
title: CanvasRenderingContext2D.scale()
slug: Web/API/CanvasRenderingContext2D/scale
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - メソッド
  - リファレンス
browser-compat: api.CanvasRenderingContext2D.scale
translation_of: Web/API/CanvasRenderingContext2D/scale
---
{{APIRef}}

**`CanvasRenderingContext2D.scale()`** はキャンバス 2D API のメソッドで、キャンバス上の長さを縦方向および横方向に拡縮する変形を適用させます。

既定では、キャンバス上の 1 単位は正確に 1 ピクセルです。拡縮変換はこの動作を変更します。例えば、拡大係数が 0.5 の場合、単位は 0.5 ピクセルになり、図形は通常の半分の大きさで描かれます。同様に、拡大係数を 2.0 にすると、1 単位が 2 ピクセルになり、図形は通常の 2 倍の大きさで描画されます。

## 構文

```js
void ctx.scale(x, y);
```

### 引数

- `x`
  - : 水平方向の拡大係数。負の値を指定すると、縦軸を跨いでピクセルを反転させます。 `1` を指定すると、水平方向には拡縮されません。
- `y`
  - : 垂直方向の拡大係数。負の値を指定すると、横軸を跨いでピクセルを反転させます。 `1` を指定すると、垂直方向には拡縮されません。

## 例

### 図形を拡縮する

この例は、拡縮された長方形を描きます。比較のため、元の長方形も描かれます。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

矩形は幅 8、高さ 20 で指定する。変換行列はこれを水平方向に 9 倍、垂直方向に 3 倍に拡大する。したがって、最終的なサイズは、幅 72、高さ 60 となります。

キャンバス上の位置も変わることに注意してください。角の位置の指定値が (10, 10) のため、実際の角の位置は (90, 30) になります。

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 拡縮された長方形
ctx.scale(9, 3);
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 8, 20);

// 変形行列を単位行列に戻す
ctx.setTransform(1, 0, 0, 1, 0, 0);

// 原型の長方形
ctx.fillStyle = 'gray';
ctx.fillRect(10, 10, 8, 20);
```

#### 結果

拡縮された長方形は赤、元の長方形は灰色です。

{{ EmbedLiveSample('Scaling_a_shape', 700, 180) }}

### 垂直・水平方向の反転

コンテキストを水平方向に反転させるには `scale(-1, 1)` を、垂直方向に反転させるには `scale(1, -1)` を使用します。この例では、 "Hello world!" という文字が水平に反転しています。

{{domxref("CanvasRenderingContext2D.fillText()", "fillText()")}} の呼び出しは負の x 座標を指定していることに注意してください。これは負の拡大係数を調整するためで、`-280 * -1` は `280` となり、テキストはその点から左方向に描画されます。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.scale(-1, 1);
ctx.font = '48px serif';
ctx.fillText('Hello world!', -280, 90);
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

#### 結果

{{ EmbedLiveSample('Flipping_things_horizontally_or_vertically', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
