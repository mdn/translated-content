---
title: WebGLRenderingContext.bindFramebuffer()
slug: Web/API/WebGLRenderingContext/bindFramebuffer
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.bindFramebuffer()`** 方法将给定的 {{domxref("WebGLFramebuffer")}} 绑定到目标。

## 语法

```plain
void gl.bindFramebuffer(target, framebuffer);
```

### 参数

- target

  - : {{domxref("GLenum")}} 指定绑定点 (目标)。可能的值为：

    - `gl.FRAMEBUFFER`: 收集用于渲染图像的颜色，alpha，深度和模板缓冲区的缓冲区数据存储。
    - 当使用 {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} 时，可以使用以下值：

      - `gl.DRAW_FRAMEBUFFER`: 相当于`gl.FRAMEBUFFER`，用作绘图，渲染，清除和写入操作。
      - `gl.READ_FRAMEBUFFER`: 用作读取操作的资源。

- framebuffer
  - : 要绑定的 {{domxref("WebGLFramebuffer")}} 对象。

### 返回值

None.

### 异常

如果目标不是 `gl.FRAMEBUFFER` ，`gl.DRAW_FRAMEBUFFER` 或 `gl.READ_FRAMEBUFFER` ，则抛出 `gl.INVALID_ENUM` 错误。

## 示例

### 绑定帧缓冲区

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var framebuffer = gl.createFramebuffer();

gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
```

### 获取当前绑定

要检查当前帧缓冲区绑定，请查询 `FRAMEBUFFER_BINDING` 常量。

```js
gl.getParameter(gl.FRAMEBUFFER_BINDING);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{domxref("WebGLRenderingContext.createFramebuffer()")}}
- {{domxref("WebGLRenderingContext.deleteFramebuffer()")}}
- {{domxref("WebGLRenderingContext.isFramebuffer()")}}
- Other buffers: {{domxref("WebGLBuffer")}}, {{domxref("WebGLRenderbuffer")}}
