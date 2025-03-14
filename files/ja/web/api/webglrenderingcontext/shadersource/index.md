---
title: "WebGLRenderingContext: shaderSource() メソッド"
short-title: shaderSource()
slug: Web/API/WebGLRenderingContext/shaderSource
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.shaderSource()`** は [WebGL API](/ja/docs/Web/API/WebGL_API) のメソッドで、 {{domxref("WebGLShader")}} のソースコードを設定します。

## 構文

```js-nolint
shaderSource(shader, source)
```

### 引数

- `shader`
  - : ソースコードを設定する {{domxref("WebGLShader")}} オブジェクト。
- `source`
  - : 設定する GLSL ソースコードの入った文字列です。

### 返値

ありません。

## 例

```js
const shader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(shader, originalSource);

const source = gl.getShaderSource(shader);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
