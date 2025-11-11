---
title: WebGLRenderingContext：createTexture() 方法
slug: Web/API/WebGLRenderingContext/createTexture
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.createTexture()`** 方法创建并初始化 {{domxref("WebGLTexture")}} 对象。

## 语法

```js-nolint
createTexture()
```

### 参数

无。

### 返回值

一个可以被任何图像绑定的 {{domxref("WebGLTexture")}} 对象。

## 示例

参见 [WebGL 教程](/zh-CN/docs/Web/API/WebGL_API/Tutorial)：[在 WebGL 中使用纹理](/zh-CN/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)。

### 创建纹理

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const texture = gl.createTexture();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
