---
title: WebGLRenderingContext.createRenderbuffer()
slug: Web/API/WebGLRenderingContext/createRenderbuffer
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的**`WebGLRenderingContext.createRenderbuffer()`** 方法 创建并初始化一个 {{domxref("WebGLRenderbuffer")}} 对象。

## 语法

```plain
WebGLRenderbuffer gl.createRenderbuffer();
```

### 参数

None.

### 返回值

一个 {{domxref("WebGLRenderbuffer")}} 对象可以保存数据，例如一张图片，或者可以渲染操作的源或目标。

## 例如

### 创建一个渲染缓冲区

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var renderBuffer = gl.createRenderBuffer();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLFramebuffer")}}
