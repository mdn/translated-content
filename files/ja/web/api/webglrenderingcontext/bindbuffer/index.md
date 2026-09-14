---
title: "WebGLRenderingContext: bindBuffer() メソッド"
short-title: bindBuffer()
slug: Web/API/WebGLRenderingContext/bindBuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.bindBuffer()`** は [WebGL API](/ja/docs/Web/API/WebGL_API) のメソッドで、指定された {{domxref("WebGLBuffer")}} をターゲットに結合します。

## 構文

```js-nolint
bindBuffer(target, buffer)
```

### 引数

- `target`
  - : 結合する場所 (ターゲット) の {{domxref("WebGL_API/Types", "GLenum")}} です。以下の値を指定することができます。
    - `gl.ARRAY_BUFFER`
      - : 頂点の属性を含むバッファーで、頂点座標、テクスチャ座標データや、頂点色データのようなものです。
    - `gl.ELEMENT_ARRAY_BUFFER`
      - : 要素の位置指定に使われるバッファーです。

    {{domxref("WebGL2RenderingContext", "WebGL 2 のコンテキスト", "", 1)}}を使用している場合は、更に以下の値を利用することができます。
    - `gl.COPY_READ_BUFFER`
      - : バッファーオブジェクトを他へコピーするためのバッファーです。
    - `gl.COPY_WRITE_BUFFER`
      - : バッファーオブジェクトを他へコピーするためのバッファーです。
    - `gl.TRANSFORM_FEEDBACK_BUFFER`
      - : 書き戻し操作を変換するバッファーです。
    - `gl.UNIFORM_BUFFER`
      - : ユニフォームブロックの格納に使われるバッファーです。
    - `gl.PIXEL_PACK_BUFFER`
      - : ピクセル移動操作に使われるバッファーです。
    - `gl.PIXEL_UNPACK_BUFFER`
      - : ピクセル移動操作に使われるバッファーです。

- buffer
  - : 結合する {{domxref("WebGLBuffer")}} です。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

一つのターゲットにのみ {{domxref("WebGLBuffer")}} を結合できます。バッファーを他のターゲットに結合しようとすると、`INVALID_OPERATION` エラーが発生して現在のバッファー結合をそのままにします。

{{domxref("WebGLBuffer")}} が {{domxref("WebGLRenderingContext.deleteBuffer()", "deleteBuffer")}} によって削除されるようにマークされると、（再び）結合できなくなります。そうしようとしても `INVALID_OPERATION` エラーが生成されて、現在の結合は変更されません。

## 例

### バッファーをターゲットに結合

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

### 現在結合されているものの取得

現在のバッファー結合を確認するには、`ARRAY_BUFFER_BINDING` や `ELEMENT_ARRAY_BUFFER_BINDING` の定数で問い合わせます。

```js
gl.getParameter(gl.ARRAY_BUFFER_BINDING);
gl.getParameter(gl.ELEMENT_ARRAY_BUFFER_BINDING);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- 他のバッファー: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
