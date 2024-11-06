---
title: WebGLObject
slug: Web/API/WebGLObject
l10n:
  sourceCommit: a3f1a5f25552d21ce638693df12e4c494aae669c
---

{{APIRef("WebGL")}}

**`WebGLObject`** は [WebGL API](/ja/docs/Web/API/WebGL_API) の一部であり、すべての WebGL オブジェクトの親インターフェイスです。

このオブジェクト自体には公開プロパティも公開メソッドもありません。

WebGL コンテキストが失われた場合、すべての `WebGLObject` インスタンスの内部にある _invalidated_ フラグが `true` に設定されます。

## `WebGLObject` を継承しているオブジェクト

WebGL 1:

- {{domxref("WebGLBuffer")}}
- {{domxref("WebGLFramebuffer")}}
- {{domxref("WebGLProgram")}}
- {{domxref("WebGLRenderbuffer")}}
- {{domxref("WebGLShader")}}
- {{domxref("WebGLTexture")}}

WebGL 2:

- {{domxref("WebGLQuery")}} （および `WebGLTimerQueryEXT`）
- {{domxref("WebGLSampler")}}
- {{domxref("WebGLSync")}}
- {{domxref("WebGLTransformFeedback")}}
- {{domxref("WebGLVertexArrayObject")}} （および `WebGLVertexArrayObjectOES`）

## 関連情報

- [`WebGLRenderingContext.isContextLost()`](/ja/docs/Web/API/WebGLRenderingContext/isContextLost)
- [`WEBGL_lose_context`](/ja/docs/Web/API/WEBGL_lose_context)
- [`webglcontextlost` イベント](/ja/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
