---
title: "WebGLRenderingContext: drawingBufferColorSpace プロパティ"
short-title: drawingBufferColorSpace
slug: Web/API/WebGLRenderingContext/drawingBufferColorSpace
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.drawingBufferColorSpace`** プロパティは、 WebGL 描画バッファーの色空間を指定します。既定値 (`srgb`) の他に、 `display-p3` 色空間も使用することができます。

テクスチャの色空間を指定するには [`WebGLRenderingContext.unpackColorSpace`](/ja/docs/Web/API/WebGLRenderingContext/unpackColorSpace) を参照してください。

## 値

このプロパティは以下の値を採ることができます。

- `"srgb"` は [sRGB 色空間](https://ja.wikipedia.org/wiki/色空間#sRGB)を選択します。これが既定値です。
- `"display-p3"` は [display-p3 色空間](https://ja.wikipedia.org/wiki/DCI-P3)を選択します。

無効な値を指定した場合、 `drawingBufferColorSpace` の値は変更されません。

## 例

### 描画バッファー色空間を、 Display P3 の赤を描画するように設定

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
gl.drawingBufferColorSpace = "display-p3";
gl.clearColor(1, 0, 0, 1);
gl.clear(glP3.COLOR_BUFFER_BIT);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`WebGLRenderingContext.unpackColorSpace`](/ja/docs/Web/API/WebGLRenderingContext/unpackColorSpace)
