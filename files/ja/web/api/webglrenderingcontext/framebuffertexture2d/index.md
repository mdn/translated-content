---
title: WebGLRenderingContext.framebufferTexture2D()
slug: Web/API/WebGLRenderingContext/framebufferTexture2D
l10n:
  sourceCommit: 41fe03908c341ab928c4a8d5ee48e03e28e2dd6c
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.framebufferTexture2D()`** は [WebGL API](/ja/docs/Web/API/WebGL_API) のメソッドで、テクスチャを {{domxref("WebGLFramebuffer")}} に割り当てます。

## 構文

```js
framebufferTexture2D(target, attachment, textarget, texture, level);
```

### 引数

- `target`

  - : {{domxref("WebGL_API/Types", "GLenum")}} で、バインディングポイント（ターゲット）を指定します。利用可能な値は以下の通りです。

    - `gl.FRAMEBUFFER`

      - : 色、アルファ、深度、ステンシルバッファーの集合のバッファーデータストレージで、画像をレンダリングするために使用します。
        {{domxref("WebGL2RenderingContext", "WebGL 2 コンテキスト", "", 1)}}を使用している場合は、加えて以下の値も利用できます。

      - `gl.DRAW_FRAMEBUFFER`
        - : 描画、レンダリング、クリア、書き込み操作を行う先として使用します。
      - `gl.READ_FRAMEBUFFER`
        - : 読み取り操作のソースとして使用します。

    バインディングの際、 `gl.FRAMEBUFFER` は `gl.DRAW_FRAMEBUFFER` と `gl.READ_FRAMEBUFFER` の両方のバインディングポイントを設定します。参照時には、 `gl.FRAMEBUFFER` は `gl.DRAW_FRAMEBUFFER` バインディングとなります。

- `attachment`

  - : {{domxref("WebGL_API/Types", "GLenum")}} で、 `texture` の装着ポイントを指定します。利用可能な値は以下の通りです。

    - `gl.COLOR_ATTACHMENT0`: テクスチャをフレームバッファーの色バッファーに装着します。
    - `gl.DEPTH_ATTACHMENT`: テクスチャをフレームバッファーの深度バッファーに装着します。
    - `gl.STENCIL_ATTACHMENT`: テクスチャをフレームバッファーのステンシルバッファーに装着します。
      {{domxref("WebGL2RenderingContext", "WebGL 2 コンテキスト", "", 1)}}を使用している場合は、加えて以下の値も利用できます。

      - `gl.DEPTH_STENCIL_ATTACHMENT`: 深さおよびステンシルバッファー。
      - `gl.COLOR_ATTACHMENT1 gl.COLOR_ATTACHMENT2 gl.COLOR_ATTACHMENT3 gl.COLOR_ATTACHMENT4 gl.COLOR_ATTACHMENT5 gl.COLOR_ATTACHMENT6 gl.COLOR_ATTACHMENT7 gl.COLOR_ATTACHMENT8 gl.COLOR_ATTACHMENT9 gl.COLOR_ATTACHMENT10 gl.COLOR_ATTACHMENT11 gl.COLOR_ATTACHMENT12 gl.COLOR_ATTACHMENT13 gl.COLOR_ATTACHMENT14 gl.COLOR_ATTACHMENT15`

    {{domxref("WEBGL_draw_buffers")}} 拡張機能を使用している場合は次の値が利用できます。

    - `ext.COLOR_ATTACHMENT0_WEBGL` （`gl.COLOR_ATTACHMENT0` と同じ）
    - `ext.COLOR_ATTACHMENT1_WEBGL ext.COLOR_ATTACHMENT2_WEBGL ext.COLOR_ATTACHMENT3_WEBGL ext.COLOR_ATTACHMENT4_WEBGL ext.COLOR_ATTACHMENT5_WEBGL ext.COLOR_ATTACHMENT6_WEBGL ext.COLOR_ATTACHMENT7_WEBGL ext.COLOR_ATTACHMENT8_WEBGL ext.COLOR_ATTACHMENT9_WEBGL ext.COLOR_ATTACHMENT10_WEBGL ext.COLOR_ATTACHMENT11_WEBGL ext.COLOR_ATTACHMENT12_WEBGL ext.COLOR_ATTACHMENT13_WEBGL ext.COLOR_ATTACHMENT14_WEBGL ext.COLOR_ATTACHMENT15_WEBGL`

    {{domxref("WEBGL_depth_texture")}} 拡張機能を使用している場合は次の値が利用できます。

    - `gl.DEPTH_STENCIL_ATTACHMENT`: 深さとステンシルのデータストレージ。

- `textarget`

  - : {{domxref("WebGL_API/Types", "GLenum")}} で、テクスチャターゲットを指定します。利用可能な値は以下の通りです。

    - `gl.TEXTURE_2D`: 2D 画像
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: 立方体の正の X 表面の画像。
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: 立方体の負の X 表面の画像。
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: 立方体の正の Y 表面の画像。
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: 立方体の負の Y 表面の画像。
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: 立方体の正の Z 表面の画像。
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: 立方体の負の Z 表面の画像。

- `texture`
  - : 装着する画像の {{domxref("WebGLTexture")}} オブジェクト。
- `level`
  - : {{domxref("WebGL_API/Types", "GLint")}} 型で、装着するテクスチャ画像のミップマップレベルを指定します。 0 でなければなりません。

### 返値

なし ({{jsxref("undefined")}})。

### 例外

- `gl.INVALID_ENUM` エラーは下記の場合に発生します。

  - `target` が `gl.FRAMEBUFFER` でなかった場合。
  - `attachment` が指定可能な装着点のうちの何れかでなかった場合。
  - `textarget` が指定可能なテクスチャターゲットのうちのいずれかでなかった場合。

- `gl.INVALID_VALUE` エラーは `level` が 0 以外であった場合に発生します。
- `gl.INVALID_OPERATION` エラーは `texture` が 0 または既存のテクスチャオブジェクトの名前でなかった場合に発生します。

## 例

```js
gl.framebufferTexture2D(
  gl.FRAMEBUFFER,
  gl.COLOR_ATTACHMENT0,
  gl.TEXTURE_2D,
  texture,
  0,
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- その他のバッファー: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
- {{domxref("WEBGL_depth_texture")}}
- {{domxref("WEBGL_draw_buffers")}}
