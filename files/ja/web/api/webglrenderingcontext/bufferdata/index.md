---
title: WebGLRenderingContext.bufferData()
slug: Web/API/WebGLRenderingContext/bufferData
---

{{APIRef("WebGL")}}

[WebGL API](/ja/docs/Web/API/WebGL_API) **`WebGLRenderingContext.bufferData()`** メソッドは、バッファーオブジェクトのデータストアを初期化、作成します。

## 構文

```
// WebGL1:
void gl.bufferData(target, size, usage);
void gl.bufferData(target, ArrayBuffer? srcData, usage);
void gl.bufferData(target, ArrayBufferView srcData, usage);

// WebGL2:
void gl.bufferData(target, ArrayBufferView srcData, usage, srcOffset, length);
```

### 引数

- target

  - : 結合する場所 (ターゲット) を指定する {{domxref("GLenum")}}。以下の値を取ることができます。

    - `gl.ARRAY_BUFFER`: 頂点の属性を含むバッファーで、頂点座標、テクスチャ座標データや、頂点色データのようなものです。
    - `gl.ELEMENT_ARRAY_BUFFER`: 要素の位置指定に使用されるバッファーです。
    - {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} を使用している場合は、更に以下の値を利用できます。

      - `gl.COPY_READ_BUFFER`: バッファーオブジェクトを他へコピーするためのバッファーです。
      - `gl.COPY_WRITE_BUFFER`: バッファーオブジェクトを他へコピーするためのバッファーです。
      - `gl.TRANSFORM_FEEDBACK_BUFFER`: 書き戻し操作を変換するバッファーです。
      - `gl.UNIFORM_BUFFER`: ユニフォームブロックの格納に使われるバッファーです。
      - `gl.PIXEL_PACK_BUFFER`: ピクセル移動操作に使われるバッファーです。
      - `gl.PIXEL_UNPACK_BUFFER`: ピクセル移動操作に使われるバッファーです。

- size
  - : {{domxref("GLsizeiptr")}} のバッファーオブジェクトのデータストアのサイズ。
- srcData {{optional_inline}}
  - : {{jsxref("ArrayBuffer")}}, {{jsxref("SharedArrayBuffer")}} か {{domxref("ArrayBufferView")}} の型付き配列型の一つで、データストアへ格納されます。`null` の場合、データストアは作成されますが、内容は初期化されず未定義です。
- usage

  - : データストアの用途を指定する {{domxref("GLenum")}}。以下の値を取ることができます。

    - `gl.STATIC_DRAW`: バッファーの内容は、何度か使用されてあまり変更されません。バッファーへ書き込まれますが、読み出せません。
    - `gl.DYNAMIC_DRAW`: バッファーの内容は、よく使用されて何度か変更されます。バッファーへ書き込まれますが、読み出せません。
    - `gl.STREAM_DRAW`: バッファーの内容は、よく使用され変更されます。バッファーへ書き込まれますが、読み出せません。
    - {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} を使用している場合、さらに以下の値を取ることができます。

      - `gl.STATIC_READ`: バッファーの内容は、何度か使用されてあまり変更されません。バッファーから読み出されますが、書き込めません。
      - `gl.DYNAMIC_READ`: バッファーの内容は、よく使用されて何度か変更されます。バッファーから読み出されますが、書き込めません。
      - `gl.STREAM_READ`: バッファーの内容は、よく使用され変更されます。バッファーから読み出されますが、書き込めません。
      - `gl.STATIC_COPY`: バッファーの内容は、何度か使用されてあまり変更されません。ユーザーによる書き込みや読み出しはできません。
      - `gl.DYNAMIC_COPY`: バッファーの内容は、よく使用されて何度か変更されます。ユーザーによる書き込みや読み出しはできません。
      - `gl.STREAM_COPY`: バッファーの内容は、よく使用され変更されます。ユーザーによる書き込みや読み出しはできません。

- srcOffset
  - : バッファー読み出しを開始する要素の位置のオフセットを指定する {{domxref("GLuint")}}。
- `length` {{optional_inline}}
  - : {{domxref("GLuint")}}。既定値は 0 です。

### 返り値

ありません。

### 例外

- 与えられた `size` でデータストアを作成できない場合、`gl.OUT_OF_MEMORY` エラーをスローします。
- `size` が負数の場合、`gl.INVALID_VALUE` エラーをスローします。
- `target` や `usage` が許可された列挙のものでない場合、`gl.INVALID_ENUM` エラーをスローします。

## 例

### `bufferData` の使用

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
var buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, 1024, gl.STATIC_DRAW);
```

### バッファー情報の取得

現在のバッファーの用途やサイズを確認するには、{{domxref("WebGLRenderingContext.getBufferParameter()")}} メソッドを使用します。

```js
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE);
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_USAGE);
```

## 仕様策定状況

{{Specifications}}

## ブラウザーの対応

{{Compat("api.WebGLRenderingContext.bufferData")}}

## 関連項目

- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.bufferSubData()")}}
- 他のバッファー : {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
