---
title: "ImageData: colorSpace プロパティ"
slug: Web/API/ImageData/colorSpace
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Canvas API")}}

読み取り専用プロパティ **`ImageData.colorSpace`** は、画像データの色空間を表す文字列です。

色空間は、[`ImageData()`](/ja/docs/Web/API/ImageData/ImageData) コンストラクターまたは [`createImageData()`](/ja/docs/Web/API/CanvasRenderingContext2D/createImageData) メソッドを用いて、`ImageData` の初期化時に設定できます。

## 値

このプロパティは以下の値を取りえます。

- [sRGB 色空間](https://ja.wikipedia.org/wiki/%E8%89%B2%E7%A9%BA%E9%96%93#RGB)を表す `"srgb"`
- [display-p3 色空間](https://ja.wikipedia.org/wiki/DCI-P3)を表す `"display-p3"`

## 例

### キャンバスの画像データの色空間の取得

[`getImageData()`](/ja/docs/Web/API/CanvasRenderingContext2D/getImageData) では、色空間を明示的に要求できます。この色空間がキャンバスの初期化時の色空間と異なる場合は、変換が行われます。`ImageData` オブジェクトの色空間を知るには、`colorSpace` プロパティを用います。

```js
const context = canvas.getContext("2d", { colorSpace: "display-p3" });
context.fillStyle = "color(display-p3 0.5 0 0)";
context.fillRect(0, 0, 10, 10);

const p3ImageData = context.getImageData(0, 0, 1, 1);
console.log(p3ImageData.colorSpace); // "display-p3"

const srgbImageData = context.getImageData(0, 0, 1, 1, { colorSpace: "srgb" });
console.log(srgbImageData.colorSpace); // "srgb"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`CanvasRenderingContext2D.createImageData()`](/ja/docs/Web/API/CanvasRenderingContext2D/createImageData)
- [`CanvasRenderingContext2D.getImageData()`](/ja/docs/Web/API/CanvasRenderingContext2D/getImageData)
- [`canvas.getContext()` における `colorSpace` の設定](/ja/docs/Web/API/HTMLCanvasElement/getContext#colorspace)
- WebGL の色空間の設定:
  - [`WebGLRenderingContext.drawingBufferColorSpace`](/ja/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace)
  - [`WebGLRenderingContext.unpackColorSpace`](/ja/docs/Web/API/WebGLRenderingContext/unpackColorSpace)
