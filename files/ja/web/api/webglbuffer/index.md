---
title: WebGLBuffer
slug: Web/API/WebGLBuffer
l10n:
  sourceCommit: 73b724ad82b94d2a4c314924218367cea2740e97
---

{{APIRef("WebGL")}}

**WebGLBuffer** インターフェイスは [WebGL API](/ja/docs/Web/API/WebGL_API) の一部で、頂点や色などのデータを格納する不透明なバッファーオブジェクトを表します。

{{InheritanceDiagram}}

## 解説

`WebGLBuffer` オブジェクトはそれ自身のメソッドやプロパティを定義しておらず、その内容には直接アクセスできません。 `WebGLBuffer` オブジェクトを扱う場合、 {{domxref("WebGLRenderingContext")}} の以下のメソッドが役に立ちます。

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}

## 例

### バッファーの作成

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- その他のバッファー: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
