---
title: "CanvasRenderingContext2D: getImageData() メソッド"
short-title: getImageData()
slug: Web/API/CanvasRenderingContext2D/getImageData
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("Canvas API")}}

{{domxref("CanvasRenderingContext2D")}} の **`getImageData()`** は Canvas 2D API のメソッドで、キャンバスの指定の部分に対応するピクセルデータを表す {{domxref("ImageData")}} オブジェクトを返します。

このメソッドは、キャンバスの変換行列の影響を受けません。指定された矩形がキャンパスの境界の外にはみ出る場合は、返される `ImageData` オブジェクトのキャンバスの外側の部分は透明な黒になります。

> [!NOTE]
> 画像データは、{{domxref("CanvasRenderingContext2D.putImageData()", "putImageData()")}} メソッドでキャンバスに描画できます。

[キャンバスとピクセル操作](/ja/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)に、`getImageData()` およびキャンバスの内容の一般的な操作に関するさらなる情報があります。

## 構文

```js-nolint
getImageData(sx, sy, sw, sh)
getImageData(sx, sy, sw, sh, settings)
```

### 引数

- `sx`
  - : `ImageData` を取り出す矩形の左上の角の x 座標です。
- `sy`
  - : `ImageData` を取り出す矩形の左上の角の y 座標です。
- `sw`
  - : `ImageData` を取り出す矩形の幅です。正の値を指定すると右向きに、負の値を指定すると左向きに取り出します。
- `sh`
  - : `ImageData` を取り出す矩形の高さです。正の値を指定すると下向きに、負の値を指定すると上向きに取り出します。
- `settings` {{optional_inline}}
  - : 以下のプロパティを持つオブジェクトです。
    - `colorSpace`: 画像データの色空間を指定します。[sRGB 色空間](https://ja.wikipedia.org/wiki/%E8%89%B2%E7%A9%BA%E9%96%93#RGB) を表す `"srgb"`、もしくは [display-p3 色空間](https://ja.wikipedia.org/wiki/DCI-P3) を表す `"display-p3"` が設定できます。

### 返値

キャンバスの指定の矩形の画像データが入った {{domxref("ImageData")}} オブジェクトを返します。矩形の左上の角の座標は `(sx, sy)` であり、下の角の座標は `(sx + sw - 1, sy + sh - 1)` です。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : `sw` または `sh` のいずれかがゼロのとき投げられます。
- `SecurityError` {{domxref("DOMException")}}
  - : キャンバスがドキュメント自身が読み込まれたオリジンとは異なるオリジンから読み込まれたピクセルを含むか、含む可能性があるとき投げられます。
    このような場合に `SecurityError` {{domxref("DOMException")}} が投げられるのを回避するには、元画像がこのように使われるのを許可するように CORS を設定してください。[画像とキャンバスをオリジン間で利用できるようにする](/ja/docs/Web/HTML/How_to/CORS_enabled_image)を参照してください。

## 例

### キャンバスから画像データを取得する

この例では、画像を描画し、`getImageData()` を用いてキャンバスの一部を取得します。

`getImageData()` を用いて、画像の `(10, 20)` を始点とし、幅 `80`、高さ `230` の部分を取り出します。そして、この部分を 3 回、前回描画した部分の右下に描画していきます。

#### HTML

```html
<canvas id="canvas" width="700" height="400"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const image = new Image();
image.src = "plumeria.jpg";
image.addEventListener("load", () => {
  ctx.drawImage(image, 0, 0, 233, 320);

  const imageData = ctx.getImageData(10, 20, 80, 230);
  ctx.putImageData(imageData, 260, 0);
  ctx.putImageData(imageData, 380, 50);
  ctx.putImageData(imageData, 500, 100);
});
```

#### 結果

{{EmbedLiveSample("Getting_image_data_from_a_canvas", "", 420)}}

### 色空間の変換

省略可能な `colorSpace` を設定することで、欲しい形式の画像データを得ることができます。

```js
const context = canvas.getContext("2d", { colorSpace: "display-p3" });
context.fillStyle = "color(display-p3 0.5 0 0)";
context.fillRect(0, 0, 10, 10);

// ImageData を sRGB に変換する
const imageData = context.getImageData(0, 0, 1, 1, { colorSpace: "srgb" });
console.log(imageData.colorSpace); // "srgb"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("ImageData")}} オブジェクト
- {{domxref("CanvasRenderingContext2D.putImageData()")}}
- [キャンバスとピクセル操作](/ja/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
