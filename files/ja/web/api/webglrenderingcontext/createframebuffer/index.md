---
title: WebGLRenderingContext.createFramebuffer()
short-title: createFramebuffer()
slug: Web/API/WebGLRenderingContext/createFramebuffer
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.createFramebuffer
---

{{APIRef("WebGL")}}

[WebGL API](/en-US/docs/Web/API/WebGL_API) の **`WebGLRenderingContext.createFramebuffer()`** メソッドは、
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

### フレームバッファを作成する

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const framebuffer = gl.createFramebuffer();
```

## 仕様策定状況

{{Specifications}}

## ブラウザの互換性

{{Compat}}

## 関連項目

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- 他のバッファ: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
