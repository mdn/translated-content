---
title: "CanvasRenderingContext2D: moveTo() メソッド"
short-title: moveTo()
slug: Web/API/CanvasRenderingContext2D/moveTo
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

**`CanvasRenderingContext2D.moveTo()`** はキャンバス 2D API のメソッドで、新しいサブパスの始点を `(x, y)` 座標に移動します。

## 構文

```js-nolint
moveTo(x, y)
```

### 引数

- `x`
  - : 点の x (水平) 座標。
- `y`
  - : 点の y (鉛直) 座標。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### 複数のサブパスの作成

この例は、`moveTo()` を使用して、1 つのパス内に 2 つのサブパスを作成します。サブパスは両方とも `stroke()` の呼び出し 1 回で、描画することができます。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

最初の線は、 (50, 50) が始点で (200, 50) が終点です。 2 番目の線は、(50, 90) が始点で (280, 120) が終点です。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 50); // 1 つ目のサブパス
ctx.lineTo(200, 50);
ctx.moveTo(50, 90); // 2 つ目のサブパス
ctx.lineTo(280, 120);
ctx.stroke();
```

#### 結果

{{ EmbedLiveSample('Creating_multiple_sub-paths', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineTo()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
