---
title: "CanvasRenderingContext2D: rotate() メソッド"
short-title: rotate()
slug: Web/API/CanvasRenderingContext2D/rotate
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

**`CanvasRenderingContext2D.rotate()`** はキャンバス 2D API のメソッドで、座標変換行列に回転を追加します。

## 構文

```js-nolint
rotate(angle)
```

![横軸に α 角をつけて回転させた直交座標系](canvas_grid_rotate.png)

### 引数

- `angle`
  - : 時計回り、ラジアン単位での回転角度。度からラジアンへの計算には `角度 * Math.PI / 180` を使用することができます。

回転の中心点は常にキャンバスの原点です。中心点を変更するには、{{domxref("CanvasRenderingContext2D.translate", "translate()")}} メソッドを使用してキャンバスを移動する必要があります。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### 図形の回転

この例では矩形を 45° 回転させます。回転の中心はキャンバスの左上角であり、任意の図形に対する相対的な位置ではないことに注意してください。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 座標変換の原点
ctx.arc(0, 0, 5, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();

// 回転していない矩形
ctx.fillStyle = "gray";
ctx.fillRect(100, 0, 80, 20);

// 回転した矩形
ctx.rotate((45 * Math.PI) / 180);
ctx.fillStyle = "red";
ctx.fillRect(100, 0, 80, 20);

// 座標変換行列を恒等行列にリセット
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

#### 結果

回転の中心は青色です。回転していない矩形は灰色で、回転した矩形は赤色です。

{{ EmbedLiveSample('Rotating_a_shape', 700, 180) }}

### 図形の中心を軸に回転させる

この例では、図形を中心点を軸に回転させます。これを行うために、行列に対して次の手順を適用しています。

1. まず {{domxref("CanvasRenderingContext2D.translate()", "translate()")}} で座標変換行列の原点を図形の中心に移動します。
2. `rotate()` で必要なだけ行列を回転させます。
3. 最後に、`translate()` で行列の原点を最初の位置に戻します。これは、図形の中心座標の値を負の方向に適用することで実現されます。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

図形は矩形で、角が (80, 60) に位置し、幅は 140、高さは 30 です。
水平方向の中心は (80 + 140 / 2)、つまり 150 です。垂直方向の中心は (60 + 30 / 2)、つまり 75 です。したがって、中心は (150, 75) にあります。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 回転していない矩形
ctx.fillStyle = "gray";
ctx.fillRect(80, 60, 140, 30);

// 座標変換行列
ctx.translate(150, 75);
ctx.rotate(Math.PI / 2);
ctx.translate(-150, -75);

// 回転した矩形
ctx.fillStyle = "red";
ctx.fillRect(80, 60, 140, 30);
```

#### 結果

回転していない矩形は灰色で、回転した矩形は赤色です。

{{ EmbedLiveSample('Rotating_a_shape_around_its_center', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
