---
title: "ImageData: data プロパティ"
slug: Web/API/ImageData/data
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Canvas API")}}

読み取り専用プロパティ **`ImageData.data`** は、{{domxref("ImageData")}} オブジェクトのピクセルデータが入った {{jsxref("Uint8ClampedArray")}} を返します。データは RGBA の順に `0` から `255` (両端を含む) の整数値の 1 次元配列として格納されます。

## 値

{{jsxref("Uint8ClampedArray")}} です。

## 例

### ImageData オブジェクトのピクセルデータを取得する

この例では、幅 100 ピクセル、高さ 100 ピクセルの `ImageData` オブジェクトを生成します。全部で 10,000 ピクセルになります。配列 `data` には各ピクセルについて 4 個の値が格納され、全部で 4 x 10,000 すなわち 40,000 個の値が格納されます。

```js
let imageData = new ImageData(100, 100);
console.log(imageData.data); // Uint8ClampedArray[40000]
console.log(imageData.data.length); // 40000
```

### 空の ImageData オブジェクトを埋める

この例では、新しい `ImageData` オブジェクトを生成し、カラフルなピクセルで埋めます。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

配列 `data` では各ピクセルが 4 個の値からなるので、`for` ループのループ変数を 4 ずつ進めます。各ピクセルに対応する値は、順に R (赤)、G (緑)、B (青)、A (不透明度) です。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const imageData = ctx.createImageData(100, 100);

// 配列を RGBA 値で埋める
for (let i = 0; i < imageData.data.length; i += 4) {
  // x 方向の割合の 255 倍
  let x = ((i % 400) / 400) * 255;
  // y 方向の割合の 255 倍
  let y = (Math.ceil(i / 400) / 100) * 255;

  // ピクセルデータを書き換える
  imageData.data[i + 0] = x; // R 値
  imageData.data[i + 1] = y; // G 値
  imageData.data[i + 2] = 255 - x; // B 値
  imageData.data[i + 3] = 255; // A 値
}

// 画像データをキャンバスに描画する
ctx.putImageData(imageData, 20, 20);
```

#### 結果

{{EmbedLiveSample("Filling_a_blank_ImageData_object", 700, 180)}}

### 他の例

`ImageData.data` を用いる他の例は、[キャンバスとピクセル操作](/ja/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)・{{domxref("CanvasRenderingContext2D.createImageData()")}}・{{domxref("CanvasRenderingContext2D.putImageData()")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ImageData.height")}}
- {{domxref("ImageData.width")}}
- {{domxref("ImageData")}}
- {{domxref("CanvasRenderingContext2D.createImageData()")}}
- {{domxref("CanvasRenderingContext2D.putImageData()")}}
- [キャンバスとピクセル操作](/ja/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
