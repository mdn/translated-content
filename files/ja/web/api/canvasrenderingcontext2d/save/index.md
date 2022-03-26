---
title: CanvasRenderingContext2D.save()
slug: Web/API/CanvasRenderingContext2D/save
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - メソッド
  - リファレンス
browser-compat: api.CanvasRenderingContext2D.save
translation_of: Web/API/CanvasRenderingContext2D/save
---
{{APIRef}}

**`CanvasRenderingContext2D.save()`** はキャンバス 2D API のメソッドで、現在の状態をスタックにプッシュすることで、キャンバス全体の状態を保存します。

### 描画状態

スタックに保存される描画状態には、以下のものが含まれます。

- 現在の変形行列。
- 現在のクリッピング領域。
- 現在の点線リスト。
- {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}、 {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}、{{domxref("CanvasRenderingContext2D.globalAlpha", "globalAlpha")}}、{{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth")}}、{{domxref("CanvasRenderingContext2D.lineCap", "lineCap")}}、{{domxref("CanvasRenderingContext2D.lineJoin", "lineJoin")}}、{{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit")}}、{{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset")}}、{{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}}、{{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}}、{{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}、{{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}}、{{domxref("CanvasRenderingContext2D.globalCompositeOperation", "globalCompositeOperation")}}、{{domxref("CanvasRenderingContext2D.font", "font")}}、{{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}、{{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}}、{{domxref("CanvasRenderingContext2D.direction", "direction")}}、{{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}} の現在の値。

## 構文

```js
void ctx.save();
```

## 例

### 描画状態の保存

この例は、`save()` メソッドを使用して既定の状態を保存し、 `restore()` を使用して復元しているため、既定の状態で長方形を描画できます。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 既定の状態を保存
ctx.save();

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100);

// 既定の状態を復元
ctx.restore();

ctx.fillRect(150, 40, 100, 100);
```

#### 結果

{{ EmbedLiveSample('Saving_the_drawing_state', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.restore()")}}
