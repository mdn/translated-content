---
title: WebGLFramebuffer
slug: Web/API/WebGLFramebuffer
---

{{APIRef("WebGL")}}

**WebGLFramebuffer** 接口时 [WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的一部分，它提供了一个缓冲区的集合，这些缓冲区可以作为一个整体用作渲染操作的目标缓冲区。

## 摘要

`WebGLFramebuffer` 对象的内容不能直接访问，因此该对象没有定义任何用于操作其自身内容的方法和属性。需要使用 `WebGLFramebuffer` 对象时，请使用 {{domxref("WebGLRenderingContext")}} 对象的以下方法：

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}

## 示例

### 创建一个帧缓冲

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var buffer = gl.createFramebuffer();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- 其他缓冲区：{{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
