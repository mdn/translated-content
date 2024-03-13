---
title: WebGLRenderingContext.deleteBuffer()
slug: Web/API/WebGLRenderingContext/deleteBuffer
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API)的 **`WebGLRenderingContext.deleteBuffer()`** 用于删除给定的 {{domxref("WebGLBuffer")}} 对象；若给定的 {{domxref("WebGLBuffer")}} 对象已经被删除了，调用该方法将不会产生任何效果。

## 语法

```plain
void gl.deleteBuffer(buffer);
```

### 参数

- buffer
  - : 要删除的{{domxref("WebGLBuffer")}} 对象。

### 返回值

None.

## 例子

### 删除一个 buffer

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var buffer = gl.createBuffer();

// ...

gl.deleteBuffer(buffer);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- Other buffers: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
