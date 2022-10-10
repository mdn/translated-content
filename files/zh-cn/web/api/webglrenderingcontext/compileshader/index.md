---
title: WebGLRenderingContext.compileShader()
slug: Web/API/WebGLRenderingContext/compileShader
---

{{APIRef("WebGL")}}[WebGL API](/zh-CN/docs/Web/API/WebGL_API)下的方法 **`WebGLRenderingContext.compileShader()`** 用于编译一个 GLSL 着色器，使其成为为二进制数据，然后就可以被{{domxref("WebGLProgram")}}对象所使用。

## 语法

```plain
void gl.compileShader(shader);
```

### 参数

- shader
  - : 一个片元或顶点着色器（{{domxref("WebGLShader")}}）.

## 示例

```js
var shader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(shader, shaderSource);
gl.compileShader(shader);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多：

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
