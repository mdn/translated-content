---
title: WebGLRenderbuffer
slug: Web/API/WebGLRenderbuffer
l10n:
  sourceCommit: 73b724ad82b94d2a4c314924218367cea2740e97
---

{{APIRef("WebGL")}}

**WebGLRenderbuffer** インターフェイスは [WebGL API](/ja/docs/Web/API/WebGL_API) の一部で、画像を含むことができるバッファー、またはレンダリング操作の入力元または出力先になることができるバッファーを表します。

{{InheritanceDiagram}}

## 解説

`WebGLRenderbuffer` オブジェクトはそれ自身のメソッドやプロパティを定義しておらず、その内容には直接アクセスできません。 `WebGLRenderbuffer` オブジェクトを扱う場合は、 {{domxref("WebGLRenderingContext")}} の以下のメソッドが役に立ちます。

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}

## 例

### レンダリングバッファーの作成

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createRenderbuffer();
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}
- 他のバッファー: {{domxref("WebGLBuffer")}}, {{domxref("WebGLFramebuffer")}}
