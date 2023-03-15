---
title: WebGLRenderingContext.createShader()
slug: Web/API/WebGLRenderingContext/createShader
---

{{APIRef("WebGL")}}

**WebGLRenderingContext.createShader()** 用于创建一个 {{domxref("WebGLShader")}} 着色器对象，该对象可以使用 {{domxref("WebGLRenderingContext.shaderSource()")}} 和 {{domxref("WebGLRenderingContext.compileShader()")}} 方法配置着色器代码。

## 语法

```plain
WebGLShader gl.createShader(type);
```

### 参数

- type
  - : 参数为`gl.VERTEX_SHADER` 或 `gl.FRAGMENT_SHADER`两者中的一个。

## 示例

详见 {{domxref("WebGLShader")}} 的使用和示例

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 其他相关

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
