---
title: WebGLRenderingContext.bindRenderbuffer()
slug: Web/API/WebGLRenderingContext/bindRenderbuffer
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.bindRenderbuffer()`** 方法将给定的 {{domxref("WebGLRenderbuffer")}} 绑定到一个目标，它必须是 gl.RENDERBUFFER。

## 语法

```plain
void gl.bindRenderbuffer(target, renderbuffer);
```

### 参数

- target

  - : {{domxref("GLenum")}} 指定绑定点（目标）。可能的值：

    - `gl.RENDERBUFFER`: 以可渲染的内部格式对单个图像进行缓冲数据存储。

- renderbuffer
  - : 要绑定的 {{domxref("WebGLRenderbuffer")}} 对象。

### 返回值

None.

### 抛出错误

如果 `target` 不是 `gl.RENDERBUFFER`，则抛出 `gl.INVALID_ENUM` 错误。

## 示例

### 绑定一个渲染缓冲区

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var renderbuffer = gl.createRenderbuffer();

gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
```

### 获取当前绑定

要检查当前的渲染缓冲区绑定，请查询 `RENDERBUFFER_BINDING` 常量。

```js
gl.getParameter(gl.RENDERBUFFER_BINDING);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.isRenderbuffer()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLFramebuffer")}}
