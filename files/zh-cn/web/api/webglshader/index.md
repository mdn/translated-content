---
title: WebGLShader
slug: Web/API/WebGLShader
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **WebGLShader** 可以是一个顶点着色器（vertex shader）或片元着色器（fragment shader）。每个 {{domxref("WebGLProgram")}} 都需要这两种类型的着色器。

## 描述

要创建一个 **WebGLShader** 需要使用 {{domxref("WebGLRenderingContext.createShader")}}，通过 {{domxref("WebGLRenderingContext.shaderSource()")}} 然后挂接 GLSL 源代码 , 最后调用 {{domxref("WebGLRenderingContext.compileShader()")}} 完成着色器（shader）的编译。此时 **WebGLShader** 仍不是可用的形式，他需要被添加到一个 {{domxref("WebGLProgram")}}里。

```js
function createShader(gl, sourceCode, type) {
  // Compiles either a shader of type gl.VERTEX_SHADER or gl.FRAGMENT_SHADER
  var shader = gl.createShader(type);
  gl.shaderSource(shader, sourceCode);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    var info = gl.getShaderInfoLog(shader);
    throw "Could not compile WebGL program. \n\n" + info;
  }
  return shader;
}
```

参看 {{domxref("WebGLProgram")}} 关于添加着色器的信息。

## 范例

### 创建一个顶点着色器（vertex shader）

注意，有很多其他方式编译和访问着色器（shader）源代码字符串。这些示例仅用于例证说明。

```js
var vertexShaderSource =
  "attribute vec4 position;\n" +
  "void main() {\n" +
  "  gl_Position = position;\n" +
  "}\n";

//从上面例子使用 createShader 函数。
var vertexShader = createShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
```

### 创建一个片元着色器（fragment shader）

```js
var fragmentShaderSource =
  "void main() {\n" + "  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n" + "}\n";

//从上面例子使用 createShader 函数。
var fragmentShader = createShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- {{domxref("WebGLProgram")}}
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
