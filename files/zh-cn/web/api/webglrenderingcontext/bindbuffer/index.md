---
title: WebGLRenderingContext.bindBuffer()
slug: Web/API/WebGLRenderingContext/bindBuffer
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.bindBuffer()`** 方法将给定的 {{domxref("WebGLBuffer")}} 绑定到目标。

## 语法

```plain
void gl.bindBuffer(target, buffer);
```

### 参数

- target

  - : {{domxref("GLenum")}} 指定绑定点 (target)。可能的值：

    - `gl.ARRAY_BUFFER`: 包含顶点属性的 Buffer，如顶点坐标，纹理坐标数据或顶点颜色数据。
    - `gl.ELEMENT_ARRAY_BUFFER`: 用于元素索引的 Buffer。
    - 当使用 {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}时，可以使用以下值：

      - `gl.COPY_READ_BUFFER`: 从一个 Buffer 对象复制到另一个 Buffer 对象。
      - `gl.COPY_WRITE_BUFFER`: 从一个 Buffer 对象复制到另一个 Buffer 对象。
      - `gl.TRANSFORM_FEEDBACK_BUFFER`: Buffer for transform feedback operations.
      - `gl.UNIFORM_BUFFER`: 用于存储统一块的 Buffer。
      - `gl.PIXEL_PACK_BUFFER`: 用于像素传输操作的 Buffer。
      - `gl.PIXEL_UNPACK_BUFFER`: 用于像素传输操作的 Buffer。

- buffer
  - : 要绑定的 {{domxref("WebGLBuffer")}} 。

### 返回值

无。

### 异常

只有一个目标可以绑定到给定的 {{domxref("WebGLBuffer")}} 。尝试将缓冲区绑定到另一个目标将引发 `INVALID_OPERATION` 错误，并且当前的缓冲区绑定将保持不变。

一个被{{domxref("WebGLRenderingContext.deleteBuffer()", "deleteBuffer")}}标记为删除的{{domxref("WebGLBuffer")}}不可重新被绑定，尝试这样做将生成 `INVALID_OPERATION` 错误，并且当前绑定将保持不变。

## 示例

### 将缓冲区绑定到目标

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

### 获取当前绑定

要检查当前的缓冲区绑定，请查询 ARRAY_BUFFER_BINDING 和 ELEMENT_ARRAY_BUFFER_BINDING 常量。

```js
gl.getParameter(gl.ARRAY_BUFFER_BINDING);
gl.getParameter(gl.ELEMENT_ARRAY_BUFFER_BINDING);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- Other buffers: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
