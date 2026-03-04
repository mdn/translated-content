---
title: "CanvasRenderingContext2D: translate() メソッド"
short-title: translate()
slug: Web/API/CanvasRenderingContext2D/translate
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

**`CanvasRenderingContext2D.translate()`** はキャンバス 2D API のメソッドで、現在の座標変換行列に移動の座標変換を追加します。

## 構文

```js-nolint
translate(x, y)
```

`translate()` メソッドは、キャンバスとその原点をグリッド上で水平方向に `x` 単位、垂直方向に `y` 単位移動させることで、現在の行列に移動の座標変換を追加します。

![キャンバスの原点は、translate メソッドの値に基づいて x 軸と y 軸に沿って移動されている。](canvas_grid_translate.png)

### 引数

- `x`
  - : 水平方向に移動する距離。正の値は右方向、負の値は左方向を示します。
- `y`
  - : 垂直方向に移動する距離。正の値は下方向、負の値は上方向を示します。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### 図形の移動

この例では、`translate()`メソッドによってデフォルト位置から移動された正方形を描画します。比較のため、同じサイズの移動されていない正方形も描画しています。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

`translate()` メソッドはコンテキストを水平方向に 110、垂直方向に 30 移動させます。最初の正方形はデフォルト位置からこれらの量だけシフトされます。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 正方形を移動
ctx.translate(110, 30);
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 80, 80);

// 現在の変換行列を恒等行列にリセット
ctx.setTransform(1, 0, 0, 1, 0, 0);

// 移動していない正方形
ctx.fillStyle = "gray";
ctx.fillRect(0, 0, 80, 80);
```

#### 結果

移動された正方形は赤で、移動されていない正方形は灰色です。

{{ EmbedLiveSample('Moving_a_shape', 700, 180) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
