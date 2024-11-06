---
title: WebGLRenderingContext.createRenderbuffer()
short-title: createRenderbuffer()
slug: Web/API/WebGLRenderingContext/createRenderbuffer
---

{{APIRef("WebGL")}}

[WebGL API](/ja/docs/Web/API/WebGL_API) の **`WebGLRenderingContext.createRenderbuffer()`** メソッドは、
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

### レンダリングバッファーを作成する

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const renderBuffer = gl.createRenderbuffer();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}
- 他のバッファ: {{domxref("WebGLBuffer")}}, {{domxref("WebGLFramebuffer")}}
