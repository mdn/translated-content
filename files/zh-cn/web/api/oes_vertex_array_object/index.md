---
title: OES_vertex_array_object
slug: Web/API/OES_vertex_array_object
---

{{APIRef("WebGL")}}

拓展**OES_vertex_array_object**是[WebGL API](/zh-CN/docs/Web/API/WebGL_API)的一部分，它提供了顶点数组对象 (VAOs) 可以用来封装顶点数组的状态。These objects keep pointers to vertex data and provide names for different sets of vertex data.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. 更多详细信息，参见 [Using Extensions](/zh-CN/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/zh-CN/docs/Web/API/WebGL_API/Tutorial).

> **备注：** **Availability:** 此拓展只在{{domxref("WebGLRenderingContext", "WebGL1", "", 1)}}中有效。在{{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}当中，这些功能可以被直接使用，且去掉了前缀 "`OES`"。

## 常量

这个拓展提供了一个新的常量，它可以在{{domxref("WebGLRenderingContext.getParameter()", "gl.getParameter()")}} 当中作为一个参数传递：

- `ext.VERTEX_ARRAY_BINDING_OES`
  - : 当作为{{domxref("WebGLRenderingContext.getParameter()", "gl.getParameter()")}}中的`pname`参数传递时，返回一个{{domxref("WebGLVertexArrayObject")}} 对象。

## 函数

这个拓展提供了四个新的函数。

- {{domxref("OES_vertex_array_object.createVertexArrayOES()", "ext.createVertexArrayOES()")}}
  - : 创建一个新的 {{domxref("WebGLVertexArrayObject")}}。
- {{domxref("OES_vertex_array_object.deleteVertexArrayOES()", "ext.deleteVertexArrayOES()")}}
  - : 删除一个给定的 {{domxref("WebGLVertexArrayObject")}}。
- {{domxref("OES_vertex_array_object.isVertexArrayOES()", "ext.isVertexArrayOES()")}}
  - : 如果参数是一个 {{domxref("WebGLVertexArrayObject")}}则返回 `true` 。
- {{domxref("OES_vertex_array_object.bindVertexArrayOES()", "ext.bindVertexArrayOES()")}}
  - : 绑定一个给定的{{domxref("WebGLVertexArrayObject")}}到缓冲区。

## Examples

```js
var oes_vao_ext = gl.getExtension("OES_vertex_array_object");
var vao = oes_vao_ext.createVertexArrayOES();
oes_vao_ext.bindVertexArrayOES(vao);

// ...
// calls to bindBuffer or vertexAttribPointer
// which will be "recorded" in the VAO
// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.vertexAttribPointer()")}}
- WebGL2 equivalent methods:

  - {{domxref("WebGL2RenderingContext.createVertexArray()")}}
  - {{domxref("WebGL2RenderingContext.deleteVertexArray()")}}
  - {{domxref("WebGL2RenderingContext.isVertexArray()")}}
  - {{domxref("WebGL2RenderingContext.bindVertexArray()")}}
