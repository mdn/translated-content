---
title: "WebGLRenderingContext: compileShader() メソッド"
short-title: compileShader()
slug: Web/API/WebGLRenderingContext/compileShader
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

**WebGLRenderingContext.compileShader()** は [WebGL API](/ja/docs/Web/API/WebGL_API) のメソッドで、 GLSL シェーダーをバイナリーへコンパイルします。これは {{domxref("WebGLProgram")}} で使用することができます。

## 構文

```js-nolint
compileShader(shader)
```

### 引数

- `shader`
  - : フラグメントまたは頂点の {{domxref("WebGLShader")}}。

### 返値

なし ({{jsxref("undefined")}})。

## 例

```js
const shader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(shader, shaderSource);
gl.compileShader(shader);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLProgram")}}
- {{domxref("WebGLShader")}}
- {{domxref("WebGLRenderingContext.attachShader()")}}
- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
- {{domxref("WebGLRenderingContext.detachShader()")}}
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderParameter()")}}
- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
- {{domxref("WebGLRenderingContext.getShaderInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.shaderSource()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
