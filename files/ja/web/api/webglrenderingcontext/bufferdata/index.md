---
title: "WebGLRenderingContext: bufferData() メソッド"
short-title: bufferData()
slug: Web/API/WebGLRenderingContext/bufferData
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.bufferData()`** は [WebGL API](/ja/docs/Web/API/WebGL_API) のメソッドで、バッファーオブジェクトのデータストアを初期化、作成します。

## 構文

```js-nolint
// WebGL1
bufferData(target, usage)
bufferData(target, size, usage)
bufferData(target, srcData, usage)

// WebGL2
bufferData(target, usage, srcOffset)
bufferData(target, srcData, usage, srcOffset)
bufferData(target, srcData, usage, srcOffset, length)
```

### 引数

- `target`
  - : {{domxref("WebGL_API/Types", "GLenum")}} で、結合する場所（ターゲット）を指定します。以下の値を取ることができます。
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

- `size`
  - : {{domxref("WebGL_API/Types", "GLsizeiptr")}} で、バッファーオブジェクトのデータストアのサイズを設定します。
- `srcData` {{optional_inline}}
  - : {{jsxref("ArrayBuffer")}}, {{jsxref("SharedArrayBuffer")}}, {{jsxref("TypedArray")}}, {{jsxref("DataView")}} のいずれかで、データストアへ格納されます。
    `null` にした場合、データストアは作成されますが、内容は初期化されず未定義です。
- `usage`
  - : {{domxref("WebGL_API/Types", "GLenum")}} で、データストアの最適化目的での用途を指定します。以下の値を取ることができます。
    - `gl.STATIC_DRAW`
      - : 内容は、アプリケーションによって一度に指定され、 WebGL 描画および画像指定コマンドのソースとして何度も使用されることを意図しています。
    - `gl.DYNAMIC_DRAW`
      - : 内容は、アプリケーションによって繰り返し再指定され、 WebGL 描画コマンドや画像指定コマンドのソースとして何度も使用されることを意図しています。
    - `gl.STREAM_DRAW`
      - : この内容は、アプリケーションによって一度だけ指定され、 WebGL 描画および画像指定コマンドのソースとして多くても数回使用されることを意図しています。
    - {{domxref("WebGL2RenderingContext", "WebGL 2 コンテキスト", "", 1)}}を使用している場合、さらに以下の値を取ることができます。
      - `gl.STATIC_READ`
        - : 内容は、 WebGLからデータを読み込んで一度に指定し、アプリケーションから何度も問い合わせることを想定しています。
      - `gl.DYNAMIC_READ`
        - : 内容は、 WebGL からデータを読み込むことによって繰り返し再定義され、アプリケーションによって何度も照会されることを意図しています。
      - `gl.STREAM_READ`
        - : 内容は、 WebGL からデータを読み込んで一度に指定し、アプリケーションから最大数回問い合わせることを想定しています。
      - `gl.STATIC_COPY`
        - : このコンテンツは、 WebGL からデータを読み込んで一度だけ指定し、 WebGL の描画や画像指定コマンドのソースとして何度も使用することを意図しています。
      - `gl.DYNAMIC_COPY`
        - : このコンテンツは、 WebGL からデータを読み込むことで繰り返し再指定され、 WebGL の描画コマンドや画像指定コマンドのソースとして何度も使用されることを意図しています。
      - `gl.STREAM_COPY`
        - : 内容は WebGL からデータを読み込んで一度指定し、 WebGL の描画コマンドや画像指定コマンドのソースとしてせいぜい数回使うことを想定しています。

- `srcOffset`
  - : {{domxref("WebGL_API/Types", "GLuint")}} で、バッファー読み出しを開始する要素の位置のオフセットを指定します。
- `length` {{optional_inline}}
  - : {{domxref("WebGL_API/Types", "GLuint")}} で、既定値は 0 です。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- 与えられた `size` でデータストアを作成できない場合、`gl.OUT_OF_MEMORY` エラーが発生します。
- `size` が負数の場合、`gl.INVALID_VALUE` エラーが発生します。
- `target` や `usage` が許可された列挙のものでない場合、`gl.INVALID_ENUM` エラーが発生します。

## 例

### bufferData の使用

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, 1024, gl.STATIC_DRAW);
```

### バッファー情報の取得

現在のバッファーの用途やサイズを確認するには、 {{domxref("WebGLRenderingContext.getBufferParameter()")}} メソッドを使用してください。

```js
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_SIZE);
gl.getBufferParameter(gl.ARRAY_BUFFER, gl.BUFFER_USAGE);
```

### 型付き配列のサイズの取得

型付き配列のサイズ引数を計算します。

```js
const dataArray = new Float32Array([1, 2, 3, 4]);
const sizeInBytes = dataArray.length * dataArray.BYTES_PER_ELEMENT;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.bufferSubData()")}}
- 他のバッファー : {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
