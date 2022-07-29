---
title: CanvasRenderingContext2D.rect()
slug: Web/API/CanvasRenderingContext2D/rect
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - メソッド
  - リファレンス
browser-compat: api.CanvasRenderingContext2D.rect
translation_of: Web/API/CanvasRenderingContext2D/rect
---
{{APIRef}}

**`CanvasRenderingContext2D.rect()`** はキャンバス 2D API のメソッドで、現在のパスに矩形を追加します。

現在のパスを変更する他のメソッドと同様に、このメソッドも直接何かを描画するわけではありません。 矩形をキャンバスに描画するには、 {{domxref("CanvasRenderingContext2D.fill", "fill()")}} または {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}} メソッドを使用することができます。

> **Note:** 矩形の作成とレンダリングを一度に行うには、 {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} または {{domxref("CanvasRenderingContext2D.strokeRect", "strokeRect()")}} メソッドを使用してください。

## 構文

```js
void ctx.rect(x, y, width, height);
```

`rect()` メソッドは、 `(x, y)` を始点とし、 `width` と `height` で大きさを指定した矩形のパスを作成します。

### 引数

- `x`
  - : 矩形の開始位置の X 座標です。
- `y`
  - : 矩形の開始位置の Y 座標です。
- `width`
  - : 矩形の幅です。正の値の場合は右側に、負の値の場合は左側になります。
- `height`
  - : 矩形の高さです。正の値の場合は下側に、負の値の場合は上側になります。

## 例

### 矩形を描画

この例は、矩形のパスを `rect()` メソッドを使用して生成します。このパスは `fill()` メソッドをし擁して描画されます。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

矩形の角は (10, 20) の位置です。幅は 150 で高さは 100 です。

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.rect(10, 20, 150, 100);
ctx.fill();
```

#### 結果

{{ EmbedLiveSample('Drawing_a_rectangle', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillRect")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
- {{domxref("CanvasRenderingContext2D.fill()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
