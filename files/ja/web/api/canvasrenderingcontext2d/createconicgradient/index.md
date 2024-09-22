---
title: "CanvasRenderingContext2D: createConicGradient() メソッド"
short-title: createConicGradient()
slug: Web/API/CanvasRenderingContext2D/createConicGradient
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

**`CanvasRenderingContext2D.createConicGradient()`** は Canvas 2D API のメソッドで、与えられた座標の点を回るようにグラデーションを作成します。

このメソッドは扇形の {{domxref("CanvasGradient")}} を返します。図形に適用するには、グラデーションをまず {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} または {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} プロパティに割り当てる必要があります。

> [!NOTE]
> グラデーション座標はグローバル、つまり現在の座標空間からの相対座標です。図形に適用される場合、座標は図形の座標に対する相対的なものではありません。

## 構文

```js-nolint
createConicGradient(startAngle, x, y)
```

### 引数

- `startAngle`
  - : グラデーションを開始する角度をラジアン単位で指定します。この角度は中心から水平に右に向かう直線から始まり、時計回りに進みます。
- `x`
  - : グラデーションの中心の X 軸座標です。
- `y`
  - : グラデーションの中心の Y 軸座標です。

### 返値

- {{domxref("CanvasGradient")}}
  - : 扇形の `CanvasGradient` です。

## 例

### 長方形を扇形グラデーションで塗りつぶし

この例では `createConicGradient()` メソッドを用いて扇形グラデーションを初期化しています。その後、中心座標を中心とした 5 つの色経由点を作成します。最後に、グラデーションをキャンバスコンテキストに割り当て、塗りつぶされる長方形にレンダリングします。

#### HTML

```html
<canvas id="canvas" width="240" height="240"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create a conic gradient
// The start angle is 0
// The center position is 100, 100
const gradient = ctx.createConicGradient(0, 100, 100);

// Add five color stops
gradient.addColorStop(0, "red");
gradient.addColorStop(0.25, "orange");
gradient.addColorStop(0.5, "yellow");
gradient.addColorStop(0.75, "green");
gradient.addColorStop(1, "blue");

// Set the fill style and draw a rectangle
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 200, 200);
```

#### 長方形の結果

{{ EmbedLiveSample('Filling_a_rectangle_with_a_conic_gradient', 240, 240) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
