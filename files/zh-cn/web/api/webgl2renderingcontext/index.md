---
title: WebGL2RenderingContext
slug: Web/API/WebGL2RenderingContext
---

{{APIRef("WebGL")}} {{SeeCompatTable}}

**WebGL2RenderingContext** 接口在底层使用了 OpenGL ES 3.0 为 HTML 的 {{HTMLElement("canvas")}} 元素提供了绘图上下文。

要获取该接口的实例对象需要调用一个 \<canvas> 标签对象的 {{domxref("HTMLCanvasElement.getContext()", "getContext()")}} 函数，并将 "webgl2" 作为参数传递：

```js
var canvas = document.getElementById("myCanvas");
var gl = canvas.getContext("webgl2");
```

> **备注：** WebGL 2 是 WebGL 1 的扩展。 `WebGL2RenderingContext` 接口实现了 {{domxref("WebGLRenderingContext")}} 接口的所有成员。有一些 WebGL 1 上下文中的方法在使用 WebGL 2 上下文的时候可以接受附加值。您可以通过 WebGL 1 的参考页了解这些信息。

这个 [WebGL 教程](/zh-CN/docs/Web/API/WebGL_API/Tutorial) 中提供了关于如何开始使用 WebGL 的更多信息、示例以及资源。

## 常量

请看 [WebGL 常量](/zh-CN/docs/Web/API/WebGL_API/Constants) 页面。

## 状态信息

- {{domxref("WebGL2RenderingContext.getIndexedParameter()")}}
  - : 返回指定目标的索引值。

## 缓冲区

- {{domxref("WebGL2RenderingContext.copyBufferSubData()")}}
  - : 将缓冲区的部分数据复制到另一个缓冲区。
- {{domxref("WebGL2RenderingContext.getBufferSubData()")}}
  - : 从缓冲区中读取数据，然后将其写入到 {{jsxref("ArrayBuffer")}} 或 {{jsxref("SharedArrayBuffer")}} 中。

## 帧缓冲区

- {{domxref("WebGL2RenderingContext.blitFramebuffer()")}}
  - : 将一个像素块从读取帧缓冲区传输到绘制帧缓冲区。
- {{domxref("WebGL2RenderingContext.framebufferTextureLayer()")}}
  - : 附着一个单层的材质到帧缓冲区。
- {{domxref("WebGL2RenderingContext.invalidateFramebuffer()")}}
  - : 使附着到缓冲区的内容失效。
- {{domxref("WebGL2RenderingContext.invalidateSubFramebuffer()")}}
  - : 使附着到缓冲区的部分内容失效。
- {{domxref("WebGL2RenderingContext.readBuffer()")}}
  - : 选择一个颜色缓冲作为像素的 source。

## 渲染缓冲区

- {{domxref("WebGL2RenderingContext.getInternalformatParameter()")}}
  - : Returns information about implementation-dependent support for internal formats.
- {{domxref("WebGL2RenderingContext.renderbufferStorageMultisample()")}}
  - : Creates and initializes a renderbuffer object's data store and allows specifying the number of samples to be used.

## 纹理

- {{domxref("WebGL2RenderingContext.texStorage2D()")}}
  - : Specifies all levels of two-dimensional texture storage.
- {{domxref("WebGL2RenderingContext.texStorage3D()")}}
  - : Specifies all levels of a three-dimensional texture or two-dimensional array texture.
- {{domxref("WebGL2RenderingContext.texImage3D()")}}
  - : Specifies a three-dimensional texture image.
- {{domxref("WebGL2RenderingContext.texSubImage3D()")}}
  - : Specifies a sub-rectangle of the current 3D texture.
- {{domxref("WebGL2RenderingContext.copyTexSubImage3D()")}}
  - : Copies pixels from the current [`WebGLFramebuffer`](/zh-CN/docs/Web/API/WebGLFramebuffer) into an existing 3D texture sub-image.
- {{domxref("WebGL2RenderingContext.compressedTexImage3D()")}}
  - : Specifies a three-dimensional texture image in a compressed format.
- {{domxref("WebGL2RenderingContext.compressedTexSubImage3D()")}}
  - : Specifies a three-dimensional sub-rectangle for a texture image in a compressed format.

## 程序和着色器

- {{domxref("WebGL2RenderingContext.getFragDataLocation()")}}
  - : Returns the binding of color numbers to user-defined varying out variables.

## Uniforms 和 Attributes

- {{domxref("WebGL2RenderingContext.uniform()", "WebGL2RenderingContext.uniform[1234][fiu][v]()")}}
  - : 指定一个 uniform 变量。
- {{domxref("WebGL2RenderingContext.uniformMatrix()", "WebGL2RenderingContext.uniformMatrix[1234][fv]()")}}
  - : 指定一个 uniform 矩阵变量。
- {{domxref("WebGL2RenderingContext.vertexAttribI()", "WebGL2RenderingContext.vertexAttribI[iuv]()")}}
  - : Methods specifying integer values for generic vertex attributes.
- {{domxref("WebGL2RenderingContext.vertexAttribIPointer()")}}
  - : Specifies integer data formats and locations of vertex attributes in a vertex attributes array.

## 绘图缓冲区

- {{domxref("WebGL2RenderingContext.vertexAttribDivisor()")}}
  - : Modifies the rate at which generic vertex attributes advance when rendering multiple instances of primitives with {{domxref("WebGL2RenderingContext.drawArraysInstanced()", "gl.drawArraysInstanced()")}} and {{domxref("WebGL2RenderingContext.drawElementsInstanced()", "gl.drawElementsInstanced()")}}.
- {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
  - : Renders primitives from array data. In addition, it can execute multiple instances of the range of elements.
- {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
  - : Renders primitives from array data. In addition, it can execute multiple instances of a set of elements.
- {{domxref("WebGL2RenderingContext.drawRangeElements()")}}
  - : Renders primitives from array data in a given range.
- {{domxref("WebGL2RenderingContext.drawBuffers()")}}
  - : Specifies a list of color buffers to be drawn into.
- {{domxref("WebGL2RenderingContext.clearBuffer()", "WebGL2RenderingContext.clearBuffer[fiuv]()")}}
  - : Clears buffers from the currently bound framebuffer.

## 查询对象

Methods for working with {{domxref("WebGLQuery")}} objects.

- {{domxref("WebGL2RenderingContext.createQuery()")}}
  - : 创建一个新的 {{domxref("WebGLQuery")}} 对象。
- {{domxref("WebGL2RenderingContext.deleteQuery()")}}
  - : 删除一个指定的 {{domxref("WebGLQuery")}} 对象。
- {{domxref("WebGL2RenderingContext.isQuery()")}}
  - : Returns `true` if a given object is a valid {{domxref("WebGLQuery")}} object.
- {{domxref("WebGL2RenderingContext.beginQuery()")}}
  - : 开始一个异步查询。
- {{domxref("WebGL2RenderingContext.endQuery()")}}
  - : Marks the end of an asynchronous query.
- {{domxref("WebGL2RenderingContext.getQuery()")}}
  - : 返回一个指定目标的 {{domxref("WebGLQuery")}} 对象。
- {{domxref("WebGL2RenderingContext.getQueryParameter()")}}
  - : 返回关于一个查询的信息。

## 采样对象

- {{domxref("WebGL2RenderingContext.createSampler()")}}
  - : Creates a new {{domxref("WebGLSampler")}} object.
- {{domxref("WebGL2RenderingContext.deleteSampler()")}}
  - : Deletes a given {{domxref("WebGLSampler")}} object.
- {{domxref("WebGL2RenderingContext.bindSampler()")}}
  - : Binds a given {{domxref("WebGLSampler")}} to a texture unit.
- {{domxref("WebGL2RenderingContext.isSampler()")}}
  - : Returns `true` if a given object is a valid {{domxref("WebGLSampler")}} object.
- {{domxref("WebGL2RenderingContext.samplerParameter()", "WebGL2RenderingContext.samplerParameter[if]()")}}
  - : Sets sampler parameters.
- {{domxref("WebGL2RenderingContext.getSamplerParameter()")}}
  - : Returns sampler parameter information.

## 同步对象

- {{domxref("WebGL2RenderingContext.fenceSync()")}}
  - : 创建一个 {{domxref("WebGLSync")}} 对象并插入到 GL 命令流中。
- {{domxref("WebGL2RenderingContext.isSync()")}}
  - : Returns `true` if the passed object is a valid {{domxref("WebGLSync")}} object.
- {{domxref("WebGL2RenderingContext.deleteSync()")}}
  - : 删除一个指定的 {{domxref("WebGLSync")}} 对象。
- {{domxref("WebGL2RenderingContext.clientWaitSync()")}}
  - : Blocks and waits for a {{domxref("WebGLSync")}} object to become signaled or a given timeout to be passed.
- {{domxref("WebGL2RenderingContext.waitSync()")}}
  - : Returns immediately, but waits on the GL server until the given {{domxref("WebGLSync")}} object is signaled.
- {{domxref("WebGL2RenderingContext.getSyncParameter()")}}
  - : 根据一个 {{domxref("WebGLSync")}} 对象返回参数信息。

## 变换反馈

- {{domxref("WebGL2RenderingContext.createTransformFeedback()")}}
  - : 创建并初始化 {{domxref("WebGLTransformFeedback")}} 对象。
- {{domxref("WebGL2RenderingContext.deleteTransformFeedback()")}}
  - : 删除一个指定的 {{domxref("WebGLTransformFeedback")}} 对象。
- {{domxref("WebGL2RenderingContext.isTransformFeedback()")}}
  - : Returns `true` if the passed object is a valid {{domxref("WebGLTransformFeedback")}} object.
- {{domxref("WebGL2RenderingContext.bindTransformFeedback()")}}
  - : Binds a passed {{domxref("WebGLTransformFeedback")}} object to the current GL state.
- {{domxref("WebGL2RenderingContext.beginTransformFeedback()")}}
  - : Starts a transform feedback operation.
- {{domxref("WebGL2RenderingContext.endTransformFeedback()")}}
  - : Ends a transform feedback operation.
- {{domxref("WebGL2RenderingContext.transformFeedbackVaryings()")}}
  - : Specifies values to record in {{domxref("WebGLTransformFeedback")}} buffers.
- {{domxref("WebGL2RenderingContext.getTransformFeedbackVarying()")}}
  - : Returns information about varying variables from {{domxref("WebGLTransformFeedback")}} buffers.
- {{domxref("WebGL2RenderingContext.pauseTransformFeedback()")}}
  - : Pauses a transform feedback operation.
- {{domxref("WebGL2RenderingContext.resumeTransformFeedback()")}}
  - : Resumes a transform feedback operation.

## Uniform 缓冲对象

- {{domxref("WebGL2RenderingContext.bindBufferBase()")}}
  - : Binds a given {{domxref("WebGLBuffer")}} to a given binding point (`target`) at a given `index`.
- {{domxref("WebGL2RenderingContext.bindBufferRange()")}}
  - : Binds a range of a given {{domxref("WebGLBuffer")}} to a given binding point (`target`) at a given `index`.
- {{domxref("WebGL2RenderingContext.getUniformIndices()")}}
  - : Retrieves the indices of a number of uniforms within a {{domxref("WebGLProgram")}}.
- {{domxref("WebGL2RenderingContext.getActiveUniforms()")}}
  - : Retrieves information about active uniforms within a {{domxref("WebGLProgram")}}.
- {{domxref("WebGL2RenderingContext.getUniformBlockIndex()")}}
  - : Retrieves the index of a uniform block within a {{domxref("WebGLProgram")}}.
- {{domxref("WebGL2RenderingContext.getActiveUniformBlockParameter()")}}
  - : Retrieves information about an active uniform block within a {{domxref("WebGLProgram")}}.
- {{domxref("WebGL2RenderingContext.getActiveUniformBlockName()")}}
  - : Retrieves the name of the active uniform block at a given index within a {{domxref("WebGLProgram")}}.
- {{domxref("WebGL2RenderingContext.uniformBlockBinding()")}}
  - : Assigns binding points for active uniform blocks.

## 顶点数组对象

Methods for working with {{domxref("WebGLVertexArrayObject")}} (VAO) objects.

- {{domxref("WebGL2RenderingContext.createVertexArray()")}}
  - : 创建一个新的 {{domxref("WebGLVertexArrayObject")}}。
- {{domxref("WebGL2RenderingContext.deleteVertexArray()")}}
  - : 删除一个指定的 {{domxref("WebGLVertexArrayObject")}}。
- {{domxref("WebGL2RenderingContext.isVertexArray()")}}
  - : 如果一个指定的 {{domxref("WebGLVertexArrayObject")}} 对象有效则返回 `true`。
- {{domxref("WebGL2RenderingContext.bindVertexArray()")}}
  - : 绑定一个指定的 {{domxref("WebGLVertexArrayObject")}} 到缓冲。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("HTMLCanvasElement")}}
- {{domxref("WebGLRenderingContext")}}
