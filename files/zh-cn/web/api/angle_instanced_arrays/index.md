---
title: ANGLE_instanced_arrays
slug: Web/API/ANGLE_instanced_arrays
---

{{APIRef("WebGL")}}

`ANGLE_instanced_arrays`是属于 [WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的一个扩展 API，它允许多次绘制相同的对象或相似对象组，前提是它们共享相同的顶点数据、基本图形的个数和类型。WebGL 的扩展都能使用{{domxref("WebGLRenderingContext.getExtension()")}} 这个方法。更多详细信息，请参考 [WebGL tutorial](/zh-CN/docs/Web/API/WebGL_API/Tutorial)_（WebGL 使用教程）里的_[Using Extensions](/zh-CN/docs/Web/API/WebGL_API/Using_Extensions) _（使用扩展）_。

> [!NOTE]
> 这个扩展仅仅能使用在 {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} 上下文中。在 {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}，默认情况下这个扩展的在 WebGL2 的上下文中起作用，它的常量以及方法使用过程中没有“ANGEL”后缀。
>
> 尽管名字叫“ANGLE”，只要硬件支持，它可以运行在任意设备上，而不仅是在 Windows 上起作用。 "ANGLE"只是表明了这个扩展是被 ANGLE 这个库的作者书写的，并没有更多的含义。

## 常量

这个扩展提供了一个新常量，它能被 {{domxref("WebGLRenderingContext.getVertexAttrib()", "gl.getVertexAttrib()")}} 这个方法所使用：

- `ext.VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE`
  - : 当这个常量在{{domxref("WebGLRenderingContext.getVertexAttrib()", "gl.getVertexAttrib()")}}中作为 pname 参数使用时，将返回一个用于实例渲染的频率因子{{domxref("GLint")}}。

## 方法

这个扩展提供了三个新的方法。

- {{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()", "ext.drawArraysInstancedANGLE()")}}
  - : 作用与{{domxref("WebGLRenderingContext.drawArrays()", "gl.drawArrays()")}} 相同，除了元素范围的多实例的执行以及每次迭代时的实例扩展。
- {{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()", "ext.drawElementsInstancedANGLE()")}}
  - : 作用与{{domxref("WebGLRenderingContext.drawElements()", "gl.drawElements()")}}相同，除了元素集中的多实例的计算以及每个集之间的实例扩展。
- {{domxref("ANGLE_instanced_arrays.vertexAttribDivisorANGLE()", "ext.vertexAttribDivisorANGLE()")}}
  - : 当用{{domxref("ANGLE_instanced_arrays.drawArraysInstancedANGLE()", "ext.drawArraysInstancedANGLE()")}}和{{domxref("ANGLE_instanced_arrays.drawElementsInstancedANGLE()", "ext.drawElementsInstancedANGLE()")}}渲染基本图元的多实例时，会提升通用的顶点属性的速度。

## 示例

启用扩展：

```js
var ext = gl.getExtension("ANGLE_instanced_arrays");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGL2RenderingContext.drawArraysInstanced()")}}
- {{domxref("WebGL2RenderingContext.drawElementsInstanced()")}}
- {{domxref("WebGL2RenderingContext.vertexAttribDivisor()")}}
