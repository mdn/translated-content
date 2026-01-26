---
title: WebGLRenderingContext：deleteBuffer() 方法
short-title: deleteBuffer()
slug: Web/API/WebGLRenderingContext/deleteBuffer
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.deleteBuffer()`** 方法用于删除指定的 {{domxref("WebGLBuffer")}}。如果该缓冲区已被删除，则此方法不会产生任何效果。通常情况下，无需手动调用此方法，当缓冲区对象不再被引用时，它将被标记为可释放。

## 语法

```js-nolint
deleteBuffer(buffer)
```

### 参数

- `buffer`
  - : 要删除的 {{domxref("WebGLBuffer")}} 对象。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 删除缓冲区

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const buffer = gl.createBuffer();

// …

gl.deleteBuffer(buffer);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.bindBuffer()")}}
- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- 其他缓冲区：{{domxref("WebGLFramebuffer")}}、{{domxref("WebGLRenderbuffer")}}
