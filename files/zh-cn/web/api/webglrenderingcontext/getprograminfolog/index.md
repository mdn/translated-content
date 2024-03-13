---
title: WebGLRenderingContext.getProgramInfoLog()
slug: Web/API/WebGLRenderingContext/getProgramInfoLog
---

{{APIRef("WebGL")}}

**WebGLRenderingContext.getProgramInfoLog** 返回参数中指定的{{domxref("WebGLProgram")}} object 的信息。这些信息包括在 linking 过程中的错误以及 `WebGLProgram` objects 合法性检查的错误。

## Syntax

```plain
gl.getProgramInfoLog(program);
```

### Parameters

- program
  - : A {{domxref("WebGLProgram")}} to query.

### Return value

返回 {{domxref("DOMString")}} 包含 diagnostic , warning ...等等关于上一次 linking 和 valiadation 操作的信息。对于刚刚创建的{{domxref("WebGLProgram")}} object , 返回一个空字符串。

## Examples

### Checking program errors

```js
var canvas = document.getElementsById("canvas");
var gl = canvas.getContext("webgl");
var program = gl.createProgram();

//vsSource is the source-code-string of vertex-shader
//fsSource is the source-code-string of fragment-shader
var vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
var fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

// Attach pre-existing shaders
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

gl.getProgramInfoLog(program);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getShaderInfoLog()")}}
- {{domxref("WebGLRenderingContext.getError()")}}
