---
title: "WebGLRenderingContext: unpackColorSpace プロパティ"
short-title: unpackColorSpace
slug: Web/API/WebGLRenderingContext/unpackColorSpace
l10n:
  sourceCommit: fe3f1f2dfaf44fcbe868b91b6a429270d2055716
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

**`WebGLRenderingContext.unpackColorSpace`** プロパティは、テクスチャをインポートする際に変換する色空間を指定します。デフォルト値 (`srgb`) の他に、 `display-p3` 色空間も使用することができます。

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

このプロパティは次の値を取ることができます。

- `"srgb"` は [sRGB 色空間](https://ja.wikipedia.org/wiki/色空間#sRGB)を選択します。これはデフォルト値です。
- `"display-p3"` は [display-p3 色空間](https://ja.wikipedia.org/wiki/DCI-P3)を選択します。

無効な値が指定された場合、`unpackColorSpace` の値は変更されません。

## 例

### テクスチャ内の sRGB ImageData を display-p3 に変換

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

gl.drawingBufferColorSpace = "display-p3";
gl.unpackColorSpace = "display-p3";

// 一部の sRGB ImageData は、
// sRGB から Display P3 へ変換される
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
