---
title: WebGLRenderingContext.isProgram()
slug: Web/API/WebGLRenderingContext/isProgram
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API)中的**`WebGLRenderingContext.isProgram()`** 函数 将会在{{domxref("WebGLProgram")}}是一个合法的着色器程序 (program) 时返回 `true` , 而在其他情况返回`false`

## 语法

```plain
GLboolean gl.isProgram(program);
```

### 参数

- program
  - : 一个要检查的 {{domxref("WebGLProgram")}}对象 .

### 返回值

一个表示 program 是否有效的 {{domxref("GLboolean")}} 值。

## 示例

### 检查一个 program 是否有效

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var program = gl.createProgram();

// ...

gl.isProgram(program);
```

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另请参见

- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
