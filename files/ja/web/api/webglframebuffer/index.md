---
title: WebGLFramebuffer
slug: Web/API/WebGLFramebuffer
l10n:
  sourceCommit: 73b724ad82b94d2a4c314924218367cea2740e97
---

{{APIRef("WebGL")}}

**WebGLFramebuffer** インターフェイスは [WebGL API](/ja/docs/Web/API/WebGL_API) の一部で、レンダリング先となるバッファーの集まりを表します。

{{InheritanceDiagram}}

## 解説

`WebGLFramebuffer` オブジェクトはそれ自身のメソッドやプロパティを定義しておらず、その内容には直接アクセスできません。 `WebGLFramebuffer` オブジェクトを扱う場合、 {{domxref("WebGLRenderingContext")}} の以下のメソッドが役に立ちます。

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}

## 例

### フレームバッファーの作成

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createFramebuffer();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- 他のバッファー: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
