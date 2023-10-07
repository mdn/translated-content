---
title: WebGLRenderingContext.createFramebuffer()
slug: Web/API/WebGLRenderingContext/createFramebuffer
---

{{APIRef("WebGL")}}**`WebGLRenderingContext.creatFramebuffer()`** 是 [WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的一个方法，用来创建和初始化{{domxref("WebGLFramebuffer")}} 对象。

## 语法

```plain
WebGLFramebuffer gl.createFramebuffer();
```

### 参数

None.

### 返回值

{{domxref("WebGLFramebuffer")}} 对象

## 样例

### 创建一个帧缓冲区

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var framebuffer = gl.createFramebuffer();
```

## 说明

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
