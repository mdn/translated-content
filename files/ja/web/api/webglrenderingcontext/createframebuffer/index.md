---
title: WebGLRenderingContext.createFramebuffer()
short-title: createFramebuffer()
slug: Web/API/WebGLRenderingContext/createFramebuffer
---

{{APIRef("WebGL")}}

[WebGL API](/ja/docs/Web/API/WebGL_API) の **`WebGLRenderingContext.createFramebuffer()`** メソッドは、
{{domxref("WebGLFramebuffer")}}
を作成し、初期化します。

## 構文

```js-nolint
createFramebuffer()
```

### 引数

なし。

### 返値

{{domxref("WebGLFramebuffer")}} オブジェクト。

## 例

### フレームバッファーを作成する

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const framebuffer = gl.createFramebuffer();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- 他のバッファ: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
