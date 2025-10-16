---
title: WebGLVertexArrayObject
slug: Web/API/WebGLVertexArrayObject
---

{{APIRef("WebGL")}}

**`WebGLVertexArrayObject`**接口是[WebGL 2 API](/zh-CN/docs/Web/API/WebGL_API)的一部分，顶点数组对象 (VAOs) 指向顶点数组数据，并提供不同顶点数据集合的名称。

当使用`WebGLVertexArrayObject`对象时，这些方法会很有用：

- {{domxref("WebGL2RenderingContext.createVertexArray()")}}
- {{domxref("WebGL2RenderingContext.deleteVertexArray()")}}
- {{domxref("WebGL2RenderingContext.isVertexArray()")}}
- {{domxref("WebGL2RenderingContext.bindVertexArray()")}}

> [!NOTE]
> **WebGL 1:** {{domxref("OES_vertex_array_object")}} 扩展允许你在 WebGL 1 上下文环境中使用顶点数组对象。

## 示例

```js
var vao = gl.createVertexArray();
gl.bindVertexArray(vao);

// ...
// calls to bindBuffer or vertexAttribPointer
// which will be "recorded" in the VAO
// ...
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("OES_vertex_array_object")}}
