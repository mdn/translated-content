---
title: WebGLRenderingContext.getShaderSource()
slug: Web/API/WebGLRenderingContext/getShaderSource
---

{{APIRef("WebGL")}}[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 中的 **`WebGLRenderingContext.getShaderSource()`** 方法以{{domxref("DOMString")}}的形式返回了一个{{domxref("WebGLShader")}}的源码。

## 语法

```plain
DOMString gl.getShaderSource(shader);
```

### 参数

- shader
  - : 要获取源码的 {{domxref("WebGLShader")}} 对象

### 返回值

一个包含了指定着色器的源码的 {{domxref("DOMString")}} 。

## 例子

```js
var shader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(shader, originalSource);

var source = gl.getShaderSource(shader);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
