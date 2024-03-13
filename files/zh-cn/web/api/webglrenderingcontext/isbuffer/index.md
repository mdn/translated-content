---
title: WebGLRenderingContext.isBuffer()
slug: Web/API/WebGLRenderingContext/isBuffer
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.isBuffer()`** 是 [WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的方法之一。如果传递的 {{domxref("WebGLBuffer")}} 有效则返回 true，否则返回 false。

## 句法

```plain
GLboolean gl.isBuffer(buffer);
```

### 参数

- buffer (缓冲区)
  - : 需要检查的 {{domxref("WebGLBuffer")}} 。

### 返回值

{{domxref("GLboolean")}} 指示 buffer 是否可用。

## 示例

### 创建一个缓冲区 (buffer)

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var buffer = gl.createBuffer();

gl.isBuffer(buffer);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- Other buffers: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
