---
title: CanvasRenderingContext2D.clearRect()
slug: Web/API/CanvasRenderingContext2D/clearRect
---

{{APIRef}}

**`CanvasRenderingContext2D.clearRect()`** はキャンバス 2D API のメソッドで、矩形領域のピクセルを、透明な黒に設定することで消去します。

> **メモ:** `clearRect()` は、[正しいパスの使用](/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#drawing_paths)を行わないと、意図しない副作用が発生することがあることに注意してください。 `clearRect()` を呼び出した後、必ず新しいアイテムを描画し始める前に {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}} を呼び出してください。

## 構文

```js
void ctx.clearRect(x, y, width, height);
```

`clearRect()` メソッドは、矩形領域のピクセルを透明な黒 (`rgba(0,0,0,0)`) に設定します。矩形の角は `(x, y)` にあり、大きさは `width` と `height` で指定されます。

### 引数

- `x`
  - : 矩形領域の始点の X 座標を指定します。
- `y`
  - : 矩形領域の始点の Y 座標を指定します。
- `width`
  - : 矩形領域の幅を指定します。
- `height`
  - : 矩形領域の高さを指定します。

## 例

### キャンバス全体の消去

このコードでは、キャンバス全体を消去します。これは一般的に、アニメーションの各フレームの開始時に必要とされます。消去される領域の寸法は {{HtmlElement("canvas")}} 要素の `width` と `height` 属性に等しくなるように設定します。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
```

### キャンバスの一部を消去

この例では、黄色っぽい背景の上に青い三角形を描きます。そして `clearRect()` メソッドでキャンバスの一部を消去しています。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

消去する領域はの形状は矩形で、左上の角が (10, 10) になっています。幅は 120、高さは 100 です。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 黄色い背景を描画
ctx.beginPath();
ctx.fillStyle = "#ff6";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// 青い三角形を描画
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.moveTo(20, 20);
ctx.lineTo(180, 20);
ctx.lineTo(130, 130);
ctx.closePath();
ctx.fill();

// キャンバスの一部を消去
ctx.clearRect(10, 10, 120, 100);
```

#### 結果

{{EmbedLiveSample('Erasing_part_of_a_canvas', 700, 180)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
