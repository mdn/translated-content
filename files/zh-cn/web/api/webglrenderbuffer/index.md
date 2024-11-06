---
title: WebGLRenderbuffer
slug: Web/API/WebGLRenderbuffer
---

{{APIRef("WebGL")}}

**WebGLRenderbuffer** 接口是 [WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的一部分，它提供了一个用于保存一个图像的缓存，并且可以用于渲染操作的源或者目标。

## 摘要

`WebGLRenderbuffer` 对象保存的内容不能被直接访问，因此这个对象没有提供任何用于操作其自身内容的方法和属性。当需要使用 `WebGLRenderbuffer` 对象的功能时，需要使用 {{domxref("WebGLRenderingContext")}} 对象的以下方法：

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}

## 示例

### 创建一个 render buffer 对象

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var buffer = gl.createRenderbuffer();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}
- 其他缓冲：{{domxref("WebGLBuffer")}}, {{domxref("WebGLFramebuffer")}}
