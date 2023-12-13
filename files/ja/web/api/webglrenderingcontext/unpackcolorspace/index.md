---
title: "WebGLRenderingContext: unpackColorSpace プロパティ"
short-title: unpackColorSpace
slug: Web/API/WebGLRenderingContext/unpackColorSpace
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}{{SeeCompatTable}}

**`WebGLRenderingContext.unpackColorSpace`** プロパティは、テクスチャをインポートする際に変換する色空間を指定します。既定値 (`srgb`) の他に、 `display-p3` 色空間も使用することができます。

テクスチャ画像のソースとしては、以下のものが利用できます。

- [`ImageBitmap`](/ja/docs/Web/API/ImageBitmap)
- [`ImageData`](/ja/docs/Web/API/ImageData)
- [`HTMLImageElement`](/ja/docs/Web/API/HTMLImageElement)
- [`HTMLCanvasElement`](/ja/docs/Web/API/HTMLCanvasElement)
- [`HTMLVideoElement`](/ja/docs/Web/API/HTMLVideoElement)
- [`OffscreenCanvas`](/ja/docs/Web/API/OffscreenCanvas)
- [`VideoFrame`](/ja/docs/Web/API/VideoFrame)

テクスチャは [`WebGLRenderingContext.texImage2D()`](/ja/docs/Web/API/WebGLRenderingContext/texImage2D) と [`WebGLRenderingContext.texSubImage2D()`](/ja/docs/Web/API/WebGLRenderingContext/texSubImage2D) メソッドを使用してインポートされ、インポート中に指定した `unpackColorSpace` 色空間に変換されます。

これは、 [`HTMLImageElement`](/ja/docs/Web/API/HTMLImageElement) において `UNPACK_COLORSPACE_CONVERSION_WEBGL` 引数が `NONE` に設定されている場合には適用されないことに注意してください。

## 値

This property can have the following values:

- `"srgb"` selects the [sRGB color space](https://ja.wikipedia.org/wiki/色空間#sRGB). This is the default value.
- `"display-p3"` selects the [display-p3 color space](https://ja.wikipedia.org/wiki/DCI-P3).

If an invalid value is specified, then the value of `unpackColorSpace` will remain unchanged.

## 例

### テクスチャ内の sRGB ImageData を display-p3 に変換

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

gl.drawingBufferColorSpace = "display-p3";
gl.unpackColorSpace = "display-p3";

// Some sRGB ImageData
// Will be converted from sRGB to Display P3
const imageData = new ImageData(data, 32, 32);

const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.texImage2D(
  gl.TEXTURE_2D,
  0,
  gl.RGBA,
  width,
  height,
  0,
  gl.RGBA,
  gl.UNSIGNED_BYTE,
  imageData,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`WebGLRenderingContext.drawingBufferColorSpace`](/ja/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace)
