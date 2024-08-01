---
title: WebGLRenderingContext：createRenderbuffer() 方法
slug: Web/API/WebGLRenderingContext/createRenderbuffer
l10n:
  sourceCommit: eda49877b9078b24cd18f794470e5e225add9b94
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.createRenderbuffer()`** 方法创建并初始化 {{domxref("WebGLRenderbuffer")}} 对象。

## 语法

```js-nolint
createRenderbuffer()
```

### 参数

无。

### 返回值

{{domxref("WebGLRenderbuffer")}} 对象，可用于保存数据（例如图片）或者作为渲染操作的源或目标。

## 示例

### 创建渲染缓冲区

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const renderBuffer = gl.createRenderbuffer();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}
- 其他缓冲区：{{domxref("WebGLBuffer")}}、{{domxref("WebGLFramebuffer")}}
