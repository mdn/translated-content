---
title: WebGLRenderingContext.bindBuffer()
slug: Web/API/WebGLRenderingContext/bindBuffer
---

{{APIRef("WebGL")}}

[WebGL API](/ja/docs/Web/API/WebGL_API) の **`WebGLRenderingContext.bindBuffer()`** メソッドは、与えられた {{domxref("WebGLBuffer")}} をターゲットに結合します。

## 構文

```
void gl.bindBuffer(target, buffer);
```

### 引数

- target

  - : 結合する場所 (ターゲット) の {{domxref("GLenum")}} です。以下の値を与えることができます。

    - `gl.ARRAY_BUFFER`: 頂点の属性を含むバッファーで、頂点座標、テクスチャ座標データや、頂点色データのようなものです。
    - `gl.ELEMENT_ARRAY_BUFFER`: 要素の位置指定に使われるバッファーです。
    - {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} を使用している場合は、更に以下の値を利用することができます。

      - `gl.COPY_READ_BUFFER`: バッファーオブジェクトを他へコピーするためのバッファーです。
      - `gl.COPY_WRITE_BUFFER`: バッファーオブジェクトを他へコピーするためのバッファーです。
      - `gl.TRANSFORM_FEEDBACK_BUFFER`: 書き戻し操作を変換するバッファーです。
      - `gl.UNIFORM_BUFFER`: ユニフォームブロックの格納に使われるバッファーです。
      - `gl.PIXEL_PACK_BUFFER`: ピクセル移動操作に使われるバッファーです。
      - `gl.PIXEL_UNPACK_BUFFER`: ピクセル移動操作に使われるバッファーです。

- buffer
  - : 結合する {{domxref("WebGLBuffer")}} です。

### 返り値

ありません。

### 例外

一つのターゲットにのみ {{domxref("WebGLBuffer")}} を結合できます。バッファーを他のターゲットに結合しようとすると、`INVALID_OPERATION` エラーをスローして現在のバッファ結合を同じままにします。

{{domxref("WebGLBuffer")}} が {{domxref("WebGLRenderingContext.deleteBuffer()", "deleteBuffer")}} によって削除されるようにマークされると、(再び) 結合できなくなります。そうしようとしても `INVALID_OPERATION` エラーが生成されて、現在の結合は変更されません。

## 例

### バッファーをターゲットに結合

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

### 現在結合されているものの取得

現在のバッファー結合を確認するには、`ARRAY_BUFFER_BINDING` や `ELEMENT_ARRAY_BUFFER_BINDING` の定数で問い合わせます。

```js
gl.getParameter(gl.ARRAY_BUFFER_BINDING);
gl.getParameter(gl.ELEMENT_ARRAY_BUFFER_BINDING);
```

## 仕様策定状況

{{Specifications}}

## ブラウザーの対応

{{Compat("api.WebGLRenderingContext.bindBuffer")}}

## 関連項目

- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- 他のバッファ: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
