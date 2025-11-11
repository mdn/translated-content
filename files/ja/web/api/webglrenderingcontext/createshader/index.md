---
title: "WebGLRenderingContext: createShader() メソッド"
short-title: createShader()
slug: Web/API/WebGLRenderingContext/createShader
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

{{domxref("WebGLRenderingContext")}} の **`createShader()`** は [WebGL API](/ja/docs/Web/API/WebGL_API) のメソッドで、 {{domxref("WebGLShader")}} を作成します。それからさらに、 {{domxref("WebGLRenderingContext.shaderSource()")}} と {{domxref("WebGLRenderingContext.compileShader()")}} を用いて設定できます。

## 構文

```js-nolint
createShader(type)
```

### 引数

- `type`
  - : `gl.VERTEX_SHADER` と `gl.FRAGMENT_SHADER` のどちらかです。

### 返値

新しい ({{domxref("WebGLShader")}}) です。

## 例

例については {{domxref("WebGLShader")}} を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLProgram")}}
- {{domxref("WebGLShader")}}
- {{domxref("WebGLRenderingContext.attachShader()")}}
- {{domxref("WebGLRenderingContext.bindAttribLocation()")}}
- {{domxref("WebGLRenderingContext.compileShader()")}}
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
