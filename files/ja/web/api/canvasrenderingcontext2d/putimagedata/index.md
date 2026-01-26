---
title: "CanvasRenderingContext2D: putImageData() メソッド"
slug: Web/API/CanvasRenderingContext2D/putImageData
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}

Canvas 2D API の **`CanvasRenderingContext2D.putImageData()`** メソッドは、指定の {{domxref("ImageData")}} オブジェクトのデータをキャンバスに描画します。更新対象の矩形が指定された場合は、その矩形内のピクセルのみが描画されます。このメソッドは、キャンバスの変換行列の影響を受けません。

> [!NOTE]
> {{domxref("CanvasRenderingContext2D.getImageData()", "getImageData()")}} メソッドを用いて、キャンバスから画像データを取得できます。

記事[キャンバスとピクセル操作](/ja/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)に、`putImageData()` およびキャンバスの内容の一般的な操作に関するさらなる情報があります。

## 構文

```js-nolint
putImageData(imageData, dx, dy)
putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight)
```

### 引数

- `imageData`
  - : ピクセル値の配列を持った {{domxref("ImageData")}} オブジェクトです。
- `dx`
  - : 描画先キャンバスに画像データを配置する横位置 (x 座標) です。
- `dy`
  - : 描画先キャンバスに画像データを配置する縦位置 (y 座標) です。
- `dirtyX` {{optional_inline}}
  - : 画像データを取り出し始める左上の角の横位置 (x 座標) です。デフォルト値は `0` です。
- `dirtyY` {{optional_inline}}
  - : 画像データを取り出し始める左上の角の縦位置 (y 座標) です。デフォルト値は `0` です。
- `dirtyWidth` {{optional_inline}}
  - : 描画する矩形の幅です。デフォルト値は画像データの幅です。
- `dirtyHeight` {{optional_inline}}
  - : 描画する矩形の高さです。デフォルト値は画像データの高さです。

### 返値

なし ({{jsxref("undefined")}})

### 例外

- `NotSupportedError` {{domxref("DOMException")}}
  - : 引数のいずれかが無限のとき投げられます。
- `InvalidStateError` {{domxref("DOMException")}}
  - : 指定された `ImageData` オブジェクトのデータがデタッチされているとき投げられます。

## 例

### putImageData を理解する

このアルゴリズムが中で何をやっているかを理解するために、{{domxref("CanvasRenderingContext2D.fillRect()")}} を用いた実装を用意しました。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function putImageData(
  ctx,
  imageData,
  dx,
  dy,
  dirtyX,
  dirtyY,
  dirtyWidth,
  dirtyHeight,
) {
  const data = imageData.data;
  const height = imageData.height;
  const width = imageData.width;
  dirtyX = dirtyX || 0;
  dirtyY = dirtyY || 0;
  dirtyWidth = dirtyWidth !== undefined ? dirtyWidth : width;
  dirtyHeight = dirtyHeight !== undefined ? dirtyHeight : height;
  const limitBottom = dirtyY + dirtyHeight;
  const limitRight = dirtyX + dirtyWidth;
  for (let y = dirtyY; y < limitBottom; y++) {
    for (let x = dirtyX; x < limitRight; x++) {
      const pos = y * width + x;
      ctx.fillStyle = `rgba(${data[pos * 4 + 0]}, ${data[pos * 4 + 1]}, ${
        data[pos * 4 + 2]
      }, ${data[pos * 4 + 3] / 255})`;
      ctx.fillRect(x + dx, y + dy, 1, 1);
    }
  }
}

// 内容をキャンバスに描画する
ctx.fillRect(0, 0, 100, 100);
// 描画内容から ImageData オブジェクトを生成する
const imagedata = ctx.getImageData(0, 0, 100, 100);
// putImageData の動作の説明用の putImageData 関数を用いる
putImageData(ctx, imagedata, 150, 0, 50, 50, 25, 25);
```

#### 結果

{{ EmbedLiveSample('Understanding_putImageData', 700, 180) }}

### ブラウザーの最適化によるデータの消失

> [!WARNING]
> 乗算済みアルファカラー値との変換ではデータが劣化するため、`putImageData()` でピクセルを設定した直後でも、対応する `getImageData()` で異なる値として読み込まれる可能性があります。

#### JavaScript

```js
const canvas = document.createElement("canvas");
canvas.width = 1;
canvas.height = 1;
const context = canvas.getContext("2d");
const imgData = context.getImageData(0, 0, canvas.width, canvas.height);
const pixels = imgData.data;
pixels[0 + 0] = 1;
pixels[0 + 1] = 127;
pixels[0 + 2] = 255;
pixels[0 + 3] = 1;
console.log("before:", pixels);
context.putImageData(imgData, 0, 0);
const imgData2 = context.getImageData(0, 0, canvas.width, canvas.height);
const pixels2 = imgData2.data;
console.log("after:", pixels2);
```

以下のような出力になるかもしれません。

```plain
before: Uint8ClampedArray(4) [ 1, 127, 255, 1 ]
after: Uint8ClampedArray(4) [ 255, 255, 255, 1 ]
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("ImageData")}} オブジェクト
- {{domxref("CanvasRenderingContext2D.getImageData()")}}
- [キャンバスとピクセル操作](/ja/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
