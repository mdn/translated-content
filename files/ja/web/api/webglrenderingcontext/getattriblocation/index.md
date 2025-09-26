---
title: "WebGLRenderingContext: getAttribLocation() メソッド"
short-title: getAttribLocation()
slug: Web/API/WebGLRenderingContext/getAttribLocation
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.getAttribLocation()`** は [WebGL API](/ja/docs/Web/API/WebGL_API) のメソッドで、指定された {{domxref("WebGLProgram")}} 内の属性の場所を返します。

## 構文

```js-nolint
getAttribLocation(program, name)
```

### 引数

- `program`
  - : 属性の変数の入った {{domxref("WebGLProgram")}} です。
- `name`
  - : 場所を取得する属性の変数名を指定する文字列です。

### 返値

見つかった場合、変数名の場所を示す {{domxref("WebGL_API/Types", "GLint")}} 番号を返します。
それ以外の場合は -1 を返します。

## 例

```js
gl.getAttribLocation(program, "vColor");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLRenderingContext.getUniformLocation()")}}
