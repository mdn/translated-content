---
title: "CanvasRenderingContext2D: createImageData() メソッド"
short-title: createImageData()
slug: Web/API/CanvasRenderingContext2D/createImageData
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API の **`CanvasRenderingContext2D.createImageData()`** メソッドは、解像度を指定して新しい空の {{domxref("ImageData")}} オブジェクトを生成します。新しいオブジェクトのすべてのピクセルは透明な黒です。

## 構文

```js-nolint
createImageData(width, height)
createImageData(width, height, settings)
createImageData(imagedata)
```

### 引数

- `width`
  - : 新しい `ImageData` オブジェクトの幅です。負の値を設定すると、矩形が左右反転します。
- `height`
  - : 新しい `ImageData` オブジェクトの高さです。負の値を指定すると、矩形が上下反転します。
- `settings` {{optional_inline}}
  - : 以下のプロパティを持つオブジェクトです。
    - `colorSpace`: 画像データの色空間を指定します。[sRGB 色空間](https://ja.wikipedia.org/wiki/%E8%89%B2%E7%A9%BA%E9%96%93#RGB) を表す `"srgb"`、もしくは [display-p3 色空間](https://ja.wikipedia.org/wiki/DCI-P3) を表す `"display-p3"` が設定できます。
- `imagedata`
  - : 幅と高さをコピーする元として用いる既存の `ImageData` オブジェクトです。画像自体はコピー**されません**。

### 返値

指定の幅と高さを持つ新しい {{domxref("ImageData")}} オブジェクトを返します。この新しいオブジェクトは、透明な黒のピクセルで埋められています。

### 例外

- `IndexSizeError` {{domxref("DOMException")}}
  - : 引数 `width` または `height` がゼロのとき投げられます。

## 例

### 空の ImageData オブジェクトを生成する

このスニペットでは、`createImageData()` メソッドを用いて空の `ImageData` オブジェクトを生成します。

```html
<canvas id="canvas"></canvas>
```

生成されたオブジェクトは、幅 100 ピクセル、高さ 50 ピクセルで、全部で 5,000 ピクセルからなります。`ImageData` オブジェクト内の各ピクセルは配列の 4 個の要素からなるので、このオブジェクトの {{domxref("ImageData.data", "data")}} プロパティの要素数は 4 × 5,000 すなわち 20,000 です。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const imageData = ctx.createImageData(100, 50);
console.log(imageData);
// ImageData { width: 100, height: 50, data: Uint8ClampedArray[20000] }
```

### 空の ImageData オブジェクトを埋める

この例では、新しい`ImageData` オブジェクトを生成し、紫のピクセルで埋めます。

```html
<canvas id="canvas"></canvas>
```

各ピクセルは 4 個の値からなるので、`for` ループではループ変数を 4 ずつ加算します。各ピクセルに対応する配列の値は、順に R (赤)、G (緑)、B (青)、A (不透明度) です。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const imageData = ctx.createImageData(100, 100);

// 各ピクセルを走査する
for (let i = 0; i < imageData.data.length; i += 4) {
  // ピクセルデータを書き換える
  imageData.data[i + 0] = 190; // R 値
  imageData.data[i + 1] = 0; // G 値
  imageData.data[i + 2] = 210; // B 値
  imageData.data[i + 3] = 255; // A 値
}

// 画像データをキャンバスに描画する
ctx.putImageData(imageData, 20, 20);
```

#### 結果

{{EmbedLiveSample("Filling_a_blank_ImageData_object", 700, 180)}}

### 他の例

`createImageData()` や `ImageData` オブジェクトを用いる他の例については、[キャンバスとピクセル操作](/ja/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)や {{domxref("ImageData.data")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("ImageData")}}
- [キャンバスとピクセル操作](/ja/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
