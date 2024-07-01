---
title: "WebGLRenderingContext: attachShader() メソッド"
short-title: attachShader()
slug: Web/API/WebGLRenderingContext/attachShader
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

**WebGLRenderingContext.attachShader()** は [WebGL API](/ja/docs/Web/API/WebGL_API) のメソッドで、フラグメントか頂点のどちらかの {{domxref("WebGLShader")}} を {{domxref("WebGLProgram")}} にアタッチします。

## 構文

```js-nolint
attachShader(program, shader)
```

### 引数

- `program`
  - : {{domxref("WebGLProgram")}}。
- `shader`
  - : フラグメントか頂点の {{domxref("WebGLShader")}}。

## 例

以下は既存のシェーダーを {{domxref("WebGLProgram")}} にアタッチするコードです。

```js
const program = gl.createProgram();

// 既に存在するシェーダーをアタッチ
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  const info = gl.getProgramInfoLog(program);
  throw `WebGL プログラムをコンパイルできませんでした。 \n\n${info}`;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLProgram")}}
- {{domxref("WebGLShader")}}
- {{domxref("WebGLRenderingContext.attachShader()")}}
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
