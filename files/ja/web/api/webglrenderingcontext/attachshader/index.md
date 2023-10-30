---
title: WebGLRenderingContext.attachShader()
slug: Web/API/WebGLRenderingContext/attachShader
---

{{APIRef("WebGL")}}

[WebGL API](/ja/docs/Web/API/WebGL_API) の **WebGLRenderingContext.attachShader()** メソッドは、フラグメントか頂点のどちらかの {{domxref("WebGLShader")}} を {{domxref("WebGLProgram")}} にアタッチします。

## 構文

```
void gl.attachShader(program, shader);
```

### 引数

- `program`
  - : {{domxref("WebGLProgram")}}。
- `shader`
  - : フラグメントか頂点の {{domxref("WebGLShader")}}。

## 例

以下は既存のシェーダーを {{domxref("WebGLProgram")}} にアタッチするコードです。

```js
var program = gl.createProgram();

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  var info = gl.getProgramInfoLog(program);
  throw "Could not compile WebGL program. \n\n" + info;
}
```

## 仕様策定状況

{{Specifications}}

## ブラウザーの対応

{{Compat("api.WebGLRenderingContext.attachShader")}}

## 関連項目

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
