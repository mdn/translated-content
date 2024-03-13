---
title: WebGLTexture
slug: Web/API/WebGLTexture
---

**WebGLTexture**接口是[WebGL API](/zh-CN/docs/Web/API/WebGL_API)的一部分，为不透明的纹理对象提供储存和状态等纹理操作。

## 描述

`WebGLTexture`对象自身未定义任何属性或方法，其内容无法被直接访问。当使用`WebGLTexture`对象时， {{domxref("WebGLRenderingContext")}} 里的这些方法会很有用：

- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}

## 例子

### 创建一个纹理

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var texture = gl.createTexture();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.generateMipmap()")}}
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("WebGLRenderingContext.texParameterf()")}}
- {{domxref("WebGLRenderingContext.texParameteri()")}}
