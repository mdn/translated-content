---
title: WebGLRenderingContext.createBuffer()
slug: Web/API/WebGLRenderingContext/createBuffer
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 下的 **`WebGLRenderingContext.createBuffer()`** 方法可创建并初始化一个用于储存顶点数据或着色数据的{{domxref("WebGLBuffer")}}对象

## 语法

```plain
WebGLBuffer gl.createBuffer();
```

### 参数

无。

### 返回值

一个用于储存顶点数据或着色数据的{{domxref("WebGLBuffer")}}对象

## 范例

### 创建一个缓冲区

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var buffer = gl.createBuffer();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- Other buffers: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
