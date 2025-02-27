---
title: "WebGLRenderingContext: getShaderParameter() メソッド"
short-title: getShaderParameter()
slug: Web/API/WebGLRenderingContext/getShaderParameter
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.getShaderParameter()`** は [WebGL API](/ja/docs/Web/API/WebGL_API) のメソッドで、指定されたシェーダーに関する情報を返します。

## 構文

```js-nolint
getShaderParameter(shader, pname)
```

### 引数

- `shader`
  - : 引数情報の取得元となる {{domxref("WebGLShader")}}。
- `pname`

  - : 問い合わせる情報を指定する {{domxref("WebGL_API/Types", "GLenum")}} です。指定可能な値は次の通りです。

    - `gl.DELETE_STATUS`
      - : シェーダーに削除フラグが立っているかどうかを示す {{domxref("WebGL_API/Types", "GLboolean")}} を返します。
    - `gl.COMPILE_STATUS`
      - : 最後のシェーダーのコンパイルが成功したかどうかを示す {{domxref("WebGL_API/Types", "GLboolean")}} を返します。
    - `gl.SHADER_TYPE`
      - : シェーダーが頂点シェーダー (`gl.VERTEX_SHADER`) かフラグメントシェーダー (`gl.FRAGMENT_SHADER`) オブジェクトかを示す {{domxref("WebGL_API/Types", "GLenum")}} を返します。

### 返値

要求されたシェーダー情報（`pname` で指定されたもの）を返します。

## 例

```js
gl.getShaderParameter(shader, gl.SHADER_TYPE);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
