---
title: WebGLRenderingContext.deleteFramebuffer()
slug: Web/API/WebGLRenderingContext/deleteFramebuffer
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.deleteFramebuffer()`** 方法用来删除给定的{{domxref("WebGLFramebuffer")}} 对象。如果帧缓冲区已被删除，则此方法无效。.

## 语法

```plain
void gl.deleteFramebuffer(framebuffer);
```

### 参数

- framebuffer
  - : 将要删除的{{domxref("WebGLFramebuffer")}} 对象。

### 返回值

None.

## 示例

### 删除一个帧缓冲区

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var framebuffer = gl.createFramebuffer();

// ...

gl.deleteFramebuffer(framebuffer);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
