---
title: "WebGLRenderingContext.createRenderbuffer()"
short-title: createRenderbuffer()
slug: Web/API/WebGLRenderingContext/createRenderbuffer
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.createRenderbuffer
---

{{APIRef("WebGL")}}

[WebGL API](/en-US/docs/Web/API/WebGL_API) の **`WebGLRenderingContext.createRenderbuffer()`** メソッドは、
{{domxref("WebGLRenderbuffer")}}
オブジェクトを作成し、初期化します。

## 構文

```js-nolint
createRenderbuffer()
```

### 引数

なし。

### 返値

画像または、レンダリングのソースやターゲットとなるデータを保存する {{domxref("WebGLRenderbuffer")}} オブジェクト。

## 例

### レンダリングバッファを作成する

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const renderBuffer = gl.createRenderbuffer();
```

## 仕様策定状況

{{Specifications}}

## ブラウザの互換性

{{Compat}}

## 関連項目

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}
- 他のバッファ: {{domxref("WebGLBuffer")}}, {{domxref("WebGLFramebuffer")}}
