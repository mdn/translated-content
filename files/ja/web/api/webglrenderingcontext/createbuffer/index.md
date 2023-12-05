---
title: "WebGLRenderingContext: createBuffer() メソッド"
short-title: createBuffer()
slug: Web/API/WebGLRenderingContext/createBuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.createBuffer()`** は [WebGL API](/ja/docs/Web/API/WebGL_API) のメソッド　で、頂点や色といったデータを格納する {{domxref("WebGLBuffer")}} を作成、初期化します。

## 構文

```js-nolint
createBuffer()
```

### 引数

なし。

### 返値

頂点や色といったデータを格納する {{domxref("WebGLBuffer")}} です。

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
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- 他のバッファー : {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
