---
title: WebGLRenderingContext.deleteRenderbuffer()
slug: Web/API/WebGLRenderingContext/deleteRenderbuffer
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.deleteRenderbuffer()`** 方法用来删除给定的 {{domxref("WebGLRenderbuffer")}} 对象。如果渲染缓冲区已被删除，则此方法无效。

## 语法

```plain
void gl.deleteRenderbuffer(renderbuffer);
```

### 参数

- renderbuffer
  - : 将要删除的{domxref("WebGLRenderbuffer")}} 对象。

### 返回值

None.

## 示例

### 删除一个渲染缓冲区

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var renderbuffer = gl.createRenderbuffer();

// ...

gl.deleteRenderbuffer(renderbuffer);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLFramebuffer")}}
