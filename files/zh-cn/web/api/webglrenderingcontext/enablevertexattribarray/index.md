---
title: WebGLRenderingContext.enableVertexAttribArray()
slug: Web/API/WebGLRenderingContext/enableVertexAttribArray
---

{{APIRef("WebGL")}}

在 [WebGL API](/zh-CN/docs/Web/API/WebGL_API) 中，使用 {{domxref("WebGLRenderingContext")}} 中的 **`enableVertexAttribArray()`** 方法，可以打开属性数组列表中指定索引处的通用顶点属性数组。

> **备注：** 你可以通过以下方法关闭顶点属性数组 {{domxref("WebGLRenderingContext.disableVertexAttribArray", "disableVertexAttribArray()")}}.

在 WebGL 中，作用于顶点的数据会先储存在[attributes](/zh-CN/docs/Web/API/WebGL_API/Data#Attributes)。这些数据仅对 JavaScript 代码和顶点着色器可用。属性由索引号引用到 GPU 维护的属性列表中。在不同的平台或 GPU 上，某些顶点属性索引可能具有预定义的值。创建属性时，WebGL 层会分配其他属性。

无论怎样，都需要你使用 `enableVertexAttribArray()` 方法，来激活每一个属性以便使用，不被激活的属性是不会被使用的。一旦激活，以下其他方法就可以获取到属性的值了，包括{{domxref("WebGLRenderingContext.vertexAttribPointer", "vertexAttribPointer()")}}、{{domxref("WebGLRenderingContext.vertexAttrib", "vertexAttrib*()")}} 和 {{domxref("WebGLRenderingContext.getVertexAttrib", "getVertexAttrib()")}}。

## 语法

```
void gl.enableVertexAttribArray(index);
```

### 参数

- `index`
  - : 类型为{{domxref("GLuint")}} 的索引，指向要激活的顶点属性。如果您只知道属性的名称，不知道索引，您可以使用以下方法来获取索引{{domxref("WebGLRenderingContext.getAttribLocation", "getAttribLocation()")}}.

### 返回值

无（{{jsxref("undefined")}}）。

### 错误

您可以使用{{domxref("WebGLRenderingContext.getError", "getError()")}}方法，来检查使用`enableVertexAttribArray()`时发生的错误。

- `WebGLRenderingContext.INVALID_VALUE`
  - : 非法的 `index` 。一般是 `index` 大于或等于了顶点属性列表允许的最大值。该值可以通过 `WebGLRenderingContext.MAX_VERTEX_ATTRIBS`获取。

## 例子

该例子是 [A basic 2D WebGL animation example](/zh-CN/docs/Web/API/WebGL_API/Basic_2D_animation_example) 中的一部分，用以说明 `enableVertexArray()` 是如何激活顶点属性，并将顶点数据传输到 shader 函数的。

```js
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

aVertexPosition = gl.getAttribLocation(shaderProgram, "aVertexPosition");

gl.enableVertexAttribArray(aVertexPosition);
gl.vertexAttribPointer(
  aVertexPosition,
  vertexNumComponents,
  gl.FLOAT,
  false,
  0,
  0,
);

gl.drawArrays(gl.TRIANGLES, 0, vertexCount);
```

该段代码来自于 "A basic 2D WebGL animation example." 中的 [the function `animateScene()`](/zh-CN/docs/Web/API/WebGL_API/Basic_2D_animation_example#Drawing_and_animating_the_scene) 。通过连接来查看全文，您可以查看产生的动画效果。

以上代码中，使用了{{domxref("WebGLRenderingContext.bindBuffer", "bindBuffer()")}}来设置将用于绘图的顶点数据的缓存。然后使用{{domxref("WebGLRenderingContext.getAttribLocation", "getAttribLocation()")}}来获取顶点数据在 shader 函数中的索引。

我们用 `enableVertexAttribArray()` 函数来激活 `aVertexPosition`中记录的索引位置，以便在后面对该顶点属性进行数据绑定。

使用{{domxref("WebGLRenderingContext.vertexAttribPointer", "vertexAttribPointer()")}} 将缓存数据绑定到 shader 函数中的顶点属性。于是，我们可以通过{{domxref("WebGLRenderingContext.drawArrays", "drawArrays()")}}函数将顶点一一绘制。

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Data in WebGL](/zh-CN/docs/Web/API/WebGL_API/Data)
- [Adding 2D content to a WebGL context](/zh-CN/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)
- [A basic 2D WebGL animation sample](/zh-CN/docs/Web/API/WebGL_API/Basic_2D_animation_example)
- {{domxref("WebGLRenderingContext.disableVertexAttribArray", "disableVertexAttribArray()")}}
