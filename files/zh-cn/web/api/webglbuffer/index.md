---
title: WebGLBuffer
slug: Web/API/WebGLBuffer
---

{{APIRef("WebGL")}}

**WebGLBuffer** 接口属于 [WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的一部分，表示一个不透明的缓冲区对象，储存诸如顶点或着色之类的数据。

## 描述

`WebGLBuffer` 对象没有定义任何自己的方法或属性，且内容不能被直接访问。当使用 `WebGLBuffer` 对象时， {{domxref("WebGLRenderingContext")}} 下的这些方法会很有用：

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}

## 示例

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

## 参见

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- 其他缓冲区： {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
