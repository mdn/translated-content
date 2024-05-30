---
title: WebGLRenderingContext：createFramebuffer() 方法
slug: Web/API/WebGLRenderingContext/createFramebuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.createFramebuffer()`** 方法用于创建和初始化 {{domxref("WebGLFramebuffer")}} 对象。

## 语法

```js-nolint
createFramebuffer()
```

### 参数

无。

### 返回值

{{domxref("WebGLFramebuffer")}} 对象。

## 示例

### 创建帧缓冲区

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const framebuffer = gl.createFramebuffer();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.bindFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- 其他缓冲区：{{domxref("WebGLBuffer")}}、{{domxref("WebGLRenderbuffer")}}
