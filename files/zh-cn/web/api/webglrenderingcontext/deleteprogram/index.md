---
title: WebGLRenderingContext.deleteProgram()
slug: Web/API/WebGLRenderingContext/deleteProgram
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.deleteProgram()`** 用于删除一个 {{domxref("WebGLProgram")}} 对象。如果该{{domxref("WebGLProgram")}} 对象已经被删除，该方法不会产生任何作用

## 语法

```plain
void gl.deleteProgram(program);
```

### 参数

- `program`
  - : 需要被删除的 {{domxref("WebGLProgram")}} 对象

### 返回值

None.

## 示例

### 删除一个程序

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var program = gl.createProgram();

// ...

gl.deleteProgram(program);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 其他相关

- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
