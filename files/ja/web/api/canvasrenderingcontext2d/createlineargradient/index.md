---
title: "CanvasRenderingContext2D: createLinearGradient() メソッド"
short-title: createLinearGradient()
slug: Web/API/CanvasRenderingContext2D/createLinearGradient
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

**`CanvasRenderingContext2D.createLinearGradient()`** は Canvas 2D API のメソッドで、指定された2つの座標を結ぶ直線に沿ってグラデーションを作成します。

![グラデーションは、グラデーションラインに沿って色が遷移します。グラデーションラインは x0, y0 点から始まり、 x1, y1 点に向かう直線であり、グラデーションが描画される要素の端を超えることもあります。](mdn-canvas-lineargradient.png)

このメソッドは、線形の {{domxref("CanvasGradient")}} を返します。図形に適用するには、グラデーションを最初の {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} または {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} プロパティに割り当てる必要があります。

> [!NOTE]
> グラデーション座標はグローバル、 すなわち現在の座標空間に対する相対座標です。図形に適用される場合、座標は図形の座標に対する相対ではありません。

## 構文

```js-nolint
createLinearGradient(x0, y0, x1, y1)
```

`createLinearGradient()` メソッドは、グラデーション線の始点と終点を定義する4つの引数を指定します。

### 引数

- `x0`
  - : 始点の X 軸座標です。
- `y0`
  - : 始点の Y 軸座標です。
- `x1`
  - : 終点の X 軸座標です。
- `y1`
  - : 終点の Y 軸座標です。

### 返値

指定した行で初期化された線形の {{domxref("CanvasGradient")}}。

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 引数に有限でない値が渡された場合に発生します。

## 例

### 線形グラデーションによる長方形の塗りつぶし

この例では `createLinearGradient()` メソッドを用いて線形グラデーションを初期化しています。そして、グラデーションの始めと終わりの点の間に 3 つの色経由点を作成します。最後に、グラデーションをキャンバスコンテキストに割り当て、塗りつぶされる長方形にレンダリングします。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create a linear gradient
// The start gradient point is at x=20, y=0
// The end gradient point is at x=220, y=0
const gradient = ctx.createLinearGradient(20, 0, 220, 0);

// Add three color stops
gradient.addColorStop(0, "green");
gradient.addColorStop(0.5, "cyan");
gradient.addColorStop(1, "green");

// Set the fill style and draw a rectangle
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 200, 100);
```

#### 結果

{{ EmbedLiveSample('Filling_a_rectangle_with_a_linear_gradient', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
- {{domxref("CanvasRenderingContext2D.createConicGradient()")}}
