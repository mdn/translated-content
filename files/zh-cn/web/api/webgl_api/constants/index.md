---
title: WebGL 相关常量
slug: Web/API/WebGL_API/Constants
---

{{DefaultAPISidebar("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 提供了一些常量，这些常量常作为参数传入函数调用，或常作为函数的返回值。所有这些常量都是 {{domxref("GLenum")}} 类型。

标准 WebGL 常量挂载在 WebGL 的两个渲染上下文环境（{{domxref("WebGLRenderingContext")}} 和{{domxref("WebGL2RenderingContext")}}）中，因此，以形如`gl.CONSTANT_NAME`的形式使用 WebGL 常量：

```js
var canvas = document.getElementById("myCanvas");
var gl = canvas.getContext("webgl");

gl.getParameter(gl.LINE_WIDTH);
```

其中一些常量也由 [WebGL 扩展](/zh-CN/docs/Web/API/WebGL_API/Using_Extensions) 提供，如下方提供的 [清单](#Constants_defined_in_WebGL_extensions)：

```js
var debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
var vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
```

[WebGL tutorial](/zh-CN/docs/Web/API/WebGL_API/Tutorial) 中有更多关于 WebGL 的信息，示例和如何开始 WebGL 编程的其他资源。

## 常量表

- [标准 WebGL 1 常量](#Standard_WebGL_1_constants)
- [标准 WebGL 2 常量](#Additional_constants_defined_WebGL_2)
- [WebGL 扩展常量](#Constants_defined_in_WebGL_extensions)

## 标准 WebGL 1 常量

这些常量定义在 {{domxref("WebGLRenderingContext")}} 接口中。

### 清除缓存

常量传入 {{domxref("WebGLRenderingContext.clear()")}} 作为清除缓冲区掩码（buffer masks）。

| 常量名称             | 值         | 说明                                  |
| -------------------- | ---------- | ------------------------------------- |
| `DEPTH_BUFFER_BIT`   | 0x00000100 | 传递给 `clear` 来清除深度缓冲区。     |
| `STENCIL_BUFFER_BIT` | 0x00000400 | 传递给 `clear` 来清除当前模板缓冲区。 |
| `COLOR_BUFFER_BIT`   | 0x00004000 | 传递给 `clear` 来清除颜色缓冲区。     |

### 指定渲染图元 Rendering primitives

传递给 {{domxref("WebGLRenderingContext.drawElements()")}} 或{{domxref("WebGLRenderingContext.drawArrays()")}} 的常量来指定要以何种原始类型渲染。

| 常量名称         | 值     | 说明                                                                                                                            |
| ---------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `POINTS`         | 0x0000 | 传递给 `drawElements` 或`drawArrays` 画点。                                                                                     |
| `LINES`          | 0x0001 | 传递给 `drawElements` 或`drawArrays` 画线段。每个顶点链接到它的下一个顶点。每两点画一条线段。                                   |
| `LINE_LOOP`      | 0x0002 | 传递给 `drawElements` 或`drawArrays` 画回路。每两个点被当作是一条独立的线段。线段首尾相连。                                     |
| `LINE_STRIP`     | 0x0003 | 传递给 `drawElements` 或`drawArrays` 画一个从第一个顶点到最后一个顶点绘制一组相连的线段。                                       |
| `TRIANGLES`      | 0x0004 | 传递给`drawElements` 或`drawArrays`画三角形。每三个点创建一个独立的三角形。                                                     |
| `TRIANGLE_STRIP` | 0x0005 | 传递给 `drawElements` 或 `drawArrays` 画一组相连的三角形带。                                                                    |
| `TRIANGLE_FAN`   | 0x0006 | 传递给 `drawElements` 或`drawArrays` 画一组连接的三角形。以第一个点做原点，每个顶点都连着它的前一个点和第一个顶点（类似风扇）。 |

### 混合模式

传递给 {{domxref("WebGLRenderingContext.blendFunc()")}} 或{{domxref("WebGLRenderingContext.blendFuncSeparate()")}} 的常量来指定混合模式 (同时用于或分别用于 RBG 和 alpha).

| 常量名称                   | 值     | 说明                                                                                             |
| -------------------------- | ------ | ------------------------------------------------------------------------------------------------ |
| `ZERO`                     | 0      | 传递给`blendFunc` 或 `blendFuncSeparate` 以关闭分量。                                            |
| `ONE`                      | 1      | 传递给 `blendFunc` 或 `blendFuncSeparate` 以打开分量。                                           |
| `SRC_COLOR`                | 0x0300 | 传递给 `blendFunc` 或 `blendFuncSeparate` 以将分量乘以源元素颜色分量。                           |
| `ONE_MINUS_SRC_COLOR`      | 0x0301 | 传递给 `blendFunc` 或 `blendFuncSeparate` 以将分量乘以 1 减去源颜色分量。                        |
| `SRC_ALPHA`                | 0x0302 | 传递给 `blendFunc` 或 `blendFuncSeparate` 以将分量乘以源颜色的 alpha 值。                        |
| `ONE_MINUS_SRC_ALPHA`      | 0x0303 | 传递给 `blendFunc` 或 `blendFuncSeparate` 以将分量乘以一个源颜色的 alpha 值。                    |
| `DST_ALPHA`                | 0x0304 | 传递给 `blendFunc` 或 `blendFuncSeparate` 以将分量乘以目标颜色的 alpha 值。                      |
| `ONE_MINUS_DST_ALPHA`      | 0x0305 | 传递给 `blendFunc` 或 `blendFuncSeparate` 以将分量乘以 1 减去目标颜色的 alpha 值。               |
| `DST_COLOR`                | 0x0306 | 传递给 `blendFunc` 或 `blendFuncSeparate` 以将分量乘以目标颜色分量。                             |
| `ONE_MINUS_DST_COLOR`      | 0x0307 | 传递给 `blendFunc` 或 `blendFuncSeparate` 以将分量乘以 1 减去目标颜色分量。                      |
| `SRC_ALPHA_SATURATE`       | 0x0308 | 传递给 `blendFunc` 或 `blendFuncSeparate` 以将分量乘以源颜色 alpha 与目标颜色 alpha 中的最小值。 |
| `CONSTANT_COLOR`           | 0x8001 | 传递给 `blendFunc` 或 `blendFuncSeparate` 以指定常量颜色的混合函数。                             |
| `ONE_MINUS_CONSTANT_COLOR` | 0x8002 | 传递给 `blendFunc` 或 `blendFuncSeparate` 以指定 1 减去常量颜色的混合函数。                      |
| `CONSTANT_ALPHA`           | 0x8003 | 传递给 `blendFunc` 或 `blendFuncSeparate` 以指定常量 alpha 混合函数。                            |
| `ONE_MINUS_CONSTANT_ALPHA` | 0x8004 | 传递给 `blendFunc` 或 `blendFuncSeparate` 以指定 1 减去一个常量 alpha 的混合函数。               |

### 混合方程

传递给 {{domxref("WebGLRenderingContext.blendEquation()")}} 或 {{domxref("WebGLRenderingContext.blendEquationSeparate()")}} 的常量，以控制混合的计算方式（同时用于或分别用于 RBG 和 alpha）。

| 常量名称                | 值     | 说明                                                                              |
| ----------------------- | ------ | --------------------------------------------------------------------------------- |
| `FUNC_ADD`              | 0x8006 | 传递给 `blendEquation` 或 `blendEquationSeparate` 来设置加法混合函数。            |
| `FUNC_SUBSTRACT`        | 0x800A | 传递给 `blendEquation` 或 `blendEquationSeparate` 来指定减法混合函数（源 - 目标） |
| `FUNC_REVERSE_SUBTRACT` | 0x800B | 传递给 `blendEquation` 或 `blendEquationSeparate` 指定反向减法函数（目标 - 源）   |

### 获取 GL 参数信息

传递给 {{domxref("WebGLRenderingContext.getParameter()")}} 的常量，用以指定要返回的信息。

| 常量名称                           | 值     | 说明                                                                                                                                                        |
| ---------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `BLEND_EQUATION`                   | 0x8009 | 传递给 `getParameter` 以获取当前的 RGB 混合函数。                                                                                                           |
| `BLEND_EQUATION_RGB`               | 0x8009 | 传递给 `getParameter` 以获取当前的 RGB 混合函数。与 BLEND_EQUATION 相同。                                                                                   |
| `BLEND_EQUATION_ALPHA`             | 0x883D | 传递给 `getParameter` 以获取当前的 alpha 函数。与 BLEND_EQUATION 相同。                                                                                     |
| `BLEND_DST_RGB`                    | 0x80C8 | 传递给 `getParameter` 以获取当前的目标 RGB 混合函数。                                                                                                       |
| `BLEND_SRC_RGB`                    | 0x80C9 | 传递给 `getParameter` 以获取当前的源 RGB 混合函数。                                                                                                         |
| `BLEND_DST_ALPHA`                  | 0x80CA | 传递给 `getParameter` 以获取当前目标的 alpha 混合函数。                                                                                                     |
| `BLEND_SRC_ALPHA`                  | 0x80CB | 传递给 `getParameter` 以获取当前的源 alpha 混合函数。                                                                                                       |
| `BLEND_COLOR`                      | 0x8005 | 传递给 `getParameter` 以返回当前的混合颜色。                                                                                                                |
| `ARRAY_BUFFER_BINDING`             | 0x8894 | 传递给 `getParameter` 获取数组缓冲区绑定。                                                                                                                  |
| `ELEMENT_ARRAY_BUFFER_BINDING`     | 0x8895 | 传递给 `getParameter` 获取当前元素数组缓冲区。                                                                                                              |
| `LINE_WIDTH`                       | 0x0B21 | 传递给 `getParameter` 获取当前的 `lineWidth` (由 `lineWidth` 方法设置)。                                                                                    |
| `ALIASED_POINT_SIZE_RANGE`         | 0x846D | 传递给 `getParameter` 获取使用 `gl.POINTS` 绘制的点的大小。                                                                                                 |
| `ALIASED_LINE_WIDTH_RANGE`         | 0x846E | 传递给 `getParameter` 得到一条线的可用宽度范围。返回一个长度为 2 的数组。其中低值为 0，高值为 1。                                                           |
| `CULL_FACE_MODE`                   | 0x0B45 | 传递给 `getParameter` 获取当前的`cullFace` 值。应该返回 `FRONT`, `BACK`, 或 `FRONT_AND_BACK`。                                                              |
| `FRONT_FACE`                       | 0x0B46 | 传递给 `getParameter` 以确定当前的 `frontFace` 值。应该 `CW` 或 `CCW`。                                                                                     |
| `DEPTH_RANGE`                      | 0x0B70 | 传递给 `getParameter` 返回长度为 2 的浮点数数组，以表示当前深度范围。                                                                                       |
| `DEPTH_WRITEMASK`                  | 0x0B72 | 传递给 `getParameter` 确定是否启用深度缓冲区写入操作。                                                                                                      |
| `DEPTH_CLEAR_VALUE`                | 0x0B73 | 传递给 `getParameter` 确定当前的深度清除值。                                                                                                                |
| `DEPTH_FUNC`                       | 0x0B74 | 传递给 `getParameter` 获取当前的深度函数。返回 `NEVER`, `ALWAYS`, `LESS`, `EQUAL`, `LEQUAL`, `GREATER`, `GEQUAL`, 或 `NOTEQUAL`。                           |
| `STENCIL_CLEAR_VALUE`              | 0x0B91 | 传递给 `getParameter` 获取将消除的模板值。                                                                                                                  |
| `STENCIL_FUNC`                     | 0x0B92 | 传递给 `getParameter` 获取当前的模板函数。返回 `NEVER`, `ALWAYS`, `LESS`, `EQUAL`, `LEQUAL`, `GREATER`, `GEQUAL`, 或 `NOTEQUAL`。                           |
| `STENCIL_FAIL`                     | 0x0B94 | 传递给 `getParameter` 获取当前模板的失效函数。应该返回 `KEEP`, `REPLACE`, `INCR`, `DECR`, `INVERT`, `INCR_WRAP`, 或 `DECR_WRAP`。                           |
| `STENCIL_PASS_DEPTH_FAIL`          | 0x0B95 | 如果深度缓冲区测试失败，则传递给 `getParameter` 以获取当前模板失败函数。应该返回 `KEEP`, `REPLACE`, `INCR`, `DECR`, `INVERT`, `INCR_WRAP`, 或 `DECR_WRAP`。 |
| `STENCIL_PASS_DEPTH_PASS`          | 0x0B96 | 如果深度缓冲区测试通过，则传递给 `getParameter` 以获取当前模板失败函数。应该返回 `KEEP`, `REPLACE`, `INCR`, `DECR`, `INVERT`, `INCR_WRAP`, 或 `DECR_WRAP`。 |
| `STENCIL_REF`                      | 0x0B97 | 传递给 `getParameter` 获取用于模板测试的参考值。                                                                                                            |
| `STENCIL_VALUE_MASK`               | 0x0B93 |                                                                                                                                                             |
| `STENCIL_WRITEMASK`                | 0x0B98 |                                                                                                                                                             |
| `STENCIL_BACK_FUNC`                | 0x8800 |                                                                                                                                                             |
| `STENCIL_BACK_FAIL`                | 0x8801 |                                                                                                                                                             |
| `STENCIL_BACK_PASS_DEPTH_FAIL`     | 0x8802 |                                                                                                                                                             |
| `STENCIL_BACK_PASS_DEPTH_PASS`     | 0x8803 |                                                                                                                                                             |
| `STENCIL_BACK_REF`                 | 0x8CA3 |                                                                                                                                                             |
| `STENCIL_BACK_VALUE_MASK`          | 0x8CA4 |                                                                                                                                                             |
| `STENCIL_BACK_WRITEMASK`           | 0x8CA5 |                                                                                                                                                             |
| `VIEWPORT`                         | 0x0BA2 | 返回带有当前视口尺寸的四个元素的 {{jsxref("Int32Array")}}                                                                                                   |
| `SCISSOR_BOX`                      | 0x0C10 | 返回带有当前裁剪盒子尺寸的四个元素的 {{jsxref("Int32Array")}} 。                                                                                            |
| `COLOR_CLEAR_VALUE`                | 0x0C22 |                                                                                                                                                             |
| `COLOR_WRITEMASK`                  | 0x0C23 |                                                                                                                                                             |
| `UNPACK_ALIGNMENT`                 | 0x0CF5 |                                                                                                                                                             |
| `PACK_ALIGNMENT`                   | 0x0D05 |                                                                                                                                                             |
| `MAX_TEXTURE_SIZE`                 | 0x0D33 |                                                                                                                                                             |
| `MAX_VIEWPORT_DIMS`                | 0x0D3A |                                                                                                                                                             |
| `SUBPIXEL_BITS`                    | 0x0D50 |                                                                                                                                                             |
| `RED_BITS`                         | 0x0D52 |                                                                                                                                                             |
| `GREEN_BITS`                       | 0x0D53 |                                                                                                                                                             |
| `BLUE_BITS`                        | 0x0D54 |                                                                                                                                                             |
| `ALPHA_BITS`                       | 0x0D55 |                                                                                                                                                             |
| `DEPTH_BITS`                       | 0x0D56 |                                                                                                                                                             |
| `STENCIL_BITS`                     | 0x0D57 |                                                                                                                                                             |
| `POLYGON_OFFSET_UNITS`             | 0x2A00 |                                                                                                                                                             |
| `POLYGON_OFFSET_FACTOR`            | 0x8038 |                                                                                                                                                             |
| `TEXTURE_BINDING_2D`               | 0x8069 |                                                                                                                                                             |
| `SAMPLE_BUFFERS`                   | 0x80A8 |                                                                                                                                                             |
| `SAMPLES`                          | 0x80A9 |                                                                                                                                                             |
| `SAMPLE_COVERAGE_VALUE`            | 0x80AA |                                                                                                                                                             |
| `SAMPLE_COVERAGE_INVERT`           | 0x80AB |                                                                                                                                                             |
| `COMPRESSED_TEXTURE_FORMATS`       | 0x86A3 |                                                                                                                                                             |
| `VENDOR`                           | 0x1F00 |                                                                                                                                                             |
| `RENDERER`                         | 0x1F01 |                                                                                                                                                             |
| `VERSION`                          | 0x1F02 |                                                                                                                                                             |
| `IMPLEMENTATION_COLOR_READ_TYPE`   | 0x8B9A |                                                                                                                                                             |
| `IMPLEMENTATION_COLOR_READ_FORMAT` | 0x8B9B |                                                                                                                                                             |
| `BROWSER_DEFAULT_WEBGL`            | 0x9244 |                                                                                                                                                             |

### Buffers

传递给{{domxref("WebGLRenderingContext.bufferData()")}}, {{domxref("WebGLRenderingContext.bufferSubData()")}}, {{domxref("WebGLRenderingContext.bindBuffer()")}}, or {{domxref("WebGLRenderingContext.getBufferParameter()")}} 的变量。

| 常量名称               | 值     | 说明                                                                                                                        |
| ---------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `STATIC_DRAW`          | 0x88E4 | Passed to `bufferData` as a hint about whether the contents of the buffer are likely to be used often and not change often. |
| `STREAM_DRAW`          | 0x88E0 | Passed to `bufferData` as a hint about whether the contents of the buffer are likely to not be used often.                  |
| `DYNAMIC_DRAW`         | 0x88E8 | Passed to `bufferData` as a hint about whether the contents of the buffer are likely to be used often and change often.     |
| `ARRAY_BUFFER`         | 0x8892 | Passed to `bindBuffer` or `bufferData` to specify the type of buffer being used.                                            |
| `ELEMENT_ARRAY_BUFFER` | 0x8893 | Passed to `bindBuffer` or `bufferData` to specify the type of buffer being used.                                            |
| `BUFFER_SIZE`          | 0x8764 | Passed to `getBufferParameter` to get a buffer's size.                                                                      |
| `BUFFER_USAGE`         | 0x8765 | Passed to `getBufferParameter` to get the hint for the buffer passed in when it was created.                                |

### Vertex attributes

Constants passed to {{domxref("WebGLRenderingContext.getVertexAttrib()")}}.

| 常量名称                             | 值     | 说明                                                                   |
| ------------------------------------ | ------ | ---------------------------------------------------------------------- |
| `CURRENT_VERTEX_ATTRIB`              | 0x8626 | Passed to `getVertexAttrib` to read back the current vertex attribute. |
| `VERTEX_ATTRIB_ARRAY_ENABLED`        | 0x8622 |                                                                        |
| `VERTEX_ATTRIB_ARRAY_SIZE`           | 0x8623 |                                                                        |
| `VERTEX_ATTRIB_ARRAY_STRIDE`         | 0x8624 |                                                                        |
| `VERTEX_ATTRIB_ARRAY_TYPE`           | 0x8625 |                                                                        |
| `VERTEX_ATTRIB_ARRAY_NORMALIZED`     | 0x886A |                                                                        |
| `VERTEX_ATTRIB_ARRAY_POINTER`        | 0x8645 |                                                                        |
| `VERTEX_ATTRIB_ARRAY_BUFFER_BINDING` | 0x889F |                                                                        |

### Culling

Constants passed to {{domxref("WebGLRenderingContext.cullFace()")}}.

| 常量名称         | 值     | 说明                                                                                                                          |
| ---------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------- |
| `CULL_FACE`      | 0x0B44 | Passed to `enable`/`disable` to turn on/off culling. Can also be used with `getParameter` to find the current culling method. |
| `FRONT`          | 0x0404 | Passed to `cullFace` to specify that only front faces should be drawn.                                                        |
| `BACK`           | 0x0405 | Passed to `cullFace` to specify that only back faces should be drawn.                                                         |
| `FRONT_AND_BACK` | 0x0408 | Passed to `cullFace` to specify that front and back faces should be drawn.                                                    |

### Enabling and disabling

Constants passed to {{domxref("WebGLRenderingContext.enable()")}} or {{domxref("WebGLRenderingContext.disable()")}}.

| 常量名称                   | 值     | 说明                                                                                                                                                                                                                   |
| -------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `BLEND`                    | 0x0BE2 | Passed to `enable`/`disable` to turn on/off blending. Can also be used with `getParameter` to find the current blending method.                                                                                        |
| `DEPTH_TEST`               | 0x0B71 | 通过 `enable`/`disable` 来打开/关闭深度测试。也可以使用 `getParameter` 来查询深度测试。LEQUAL                                                                                                                          |
| `DITHER`                   | 0x0BD0 | Passed to `enable`/`disable` to turn on/off dithering. Can also be used with `getParameter` to find the current dithering method.                                                                                      |
| `POLYGON_OFFSET_FILL`      | 0x8037 | Passed to `enable`/`disable` to turn on/off the polygon offset. Useful for rendering hidden-line images, decals, and or solids with highlighted edges. Can also be used with `getParameter` to query the scissor test. |
| `SAMPLE_ALPHA_TO_COVERAGE` | 0x809E | Passed to `enable`/`disable` to turn on/off the alpha to coverage. Used in multi-sampling alpha channels.                                                                                                              |
| `SAMPLE_COVERAGE`          | 0x80A0 | Passed to `enable`/`disable` to turn on/off the sample coverage. Used in multi-sampling.                                                                                                                               |
| `SCISSOR_TEST`             | 0x0C11 | Passed to `enable`/`disable` to turn on/off the scissor test. Can also be used with `getParameter` to query the scissor test.                                                                                          |
| `STENCIL_TEST`             | 0x0B90 | Passed to `enable`/`disable` to turn on/off the stencil test. Can also be used with `getParameter` to query the stencil test.                                                                                          |
|                            |        |                                                                                                                                                                                                                        |

### Errors

Constants returned from {{domxref("WebGLRenderingContext.getError()")}}.

| 常量名称             | 值     | 说明                      |
| -------------------- | ------ | ------------------------- |
| `NO_ERROR`           | 0      | Returned from `getError`. |
| `INVALID_ENUM`       | 0x0500 | Returned from `getError`. |
| `INVALID_VALUE`      | 0x0501 | Returned from `getError`. |
| `INVALID_OPERATION`  | 0x0502 | Returned from `getError`. |
| `OUT_OF_MEMORY`      | 0x0505 | Returned from `getError`. |
| `CONTEXT_LOST_WEBGL` | 0x9242 | Returned from `getError`. |

### Front face directions

Constants passed to {{domxref("WebGLRenderingContext.frontFace()")}}.

| 常量名称 | 值     | 说明                                                                                                     |
| -------- | ------ | -------------------------------------------------------------------------------------------------------- |
| `CW`     | 0x0900 | Passed to `frontFace` to specify the front face of a polygon is drawn in the clockwise direction         |
| `CCW`    | 0x0901 | Passed to `frontFace` to specify the front face of a polygon is drawn in the counter clockwise direction |

### Hints

Constants passed to {{domxref("WebGLRenderingContext.hint()")}}

| 常量名称               | 值     | 说明                                                                                                                        |
| ---------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| `DONT_CARE`            | 0x1100 | There is no preference for this behavior.                                                                                   |
| `FASTEST`              | 0x1101 | The most efficient behavior should be used.                                                                                 |
| `NICEST`               | 0x1102 | The most correct or the highest quality option should be used.                                                              |
| `GENERATE_MIPMAP_HINT` | 0x8192 | Hint for the quality of filtering when generating mipmap images with {{domxref("WebGLRenderingContext.generateMipmap()")}}. |

### Data types

| 常量名称         | 值     | 说明 |
| ---------------- | ------ | ---- |
| `BYTE`           | 0x1400 |      |
| `UNSIGNED_BYTE`  | 0x1401 |      |
| `SHORT`          | 0x1402 |      |
| `UNSIGNED_SHORT` | 0x1403 |      |
| `INT`            | 0x1404 |      |
| `UNSIGNED_INT`   | 0x1405 |      |
| `FLOAT`          | 0x1406 |      |

### Pixel formats

| 常量名称          | 值     | 说明 |
| ----------------- | ------ | ---- |
| `DEPTH_COMPONENT` | 0x1902 |      |
| `ALPHA`           | 0x1906 |      |
| `RGB`             | 0x1907 |      |
| `RGBA`            | 0x1908 |      |
| `LUMINANCE`       | 0x1909 |      |
| `LUMINANCE_ALPHA` | 0x190A |      |

### Pixel types

| 常量名称                 | 值     | 说明 |
| ------------------------ | ------ | ---- |
| `UNSIGNED_BYTE`          | 0x1401 |      |
| `UNSIGNED_SHORT_4_4_4_4` | 0x8033 |      |
| `UNSIGNED_SHORT_5_5_5_1` | 0x8034 |      |
| `UNSIGNED_SHORT_5_6_5`   | 0x8363 |      |

### Shaders

Constants passed to {{domxref("WebGLRenderingContext.createShader()")}} or {{domxref("WebGLRenderingContext.getShaderParameter()")}}

| 常量名称                           | 值     | 说明                                                                                                                                                                                             |
| ---------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `FRAGMENT_SHADER`                  | 0x8B30 | Passed to `createShader` to define a fragment shader.                                                                                                                                            |
| `VERTEX_SHADER`                    | 0x8B31 | Passed to `createShader` to define a vertex shader                                                                                                                                               |
| `COMPILE_STATUS`                   | 0x8B81 | Passed to `getShaderParamter` to get the status of the compilation. Returns false if the shader was not compiled. You can then query `getShaderInfoLog` to find the exact error                  |
| `DELETE_STATUS`                    | 0x8B80 | Passed to `getShaderParamter` to determine if a shader was deleted via `deleteShader`. Returns true if it was, false otherwise.                                                                  |
| `LINK_STATUS`                      | 0x8B82 | Passed to `getProgramParameter` after calling `linkProgram` to determine if a program was linked correctly. Returns false if there were errors. Use `getProgramInfoLog` to find the exact error. |
| `VALIDATE_STATUS`                  | 0x8B83 | Passed to `getProgramParameter` after calling `validateProgram` to determine if it is valid. Returns false if errors were found.                                                                 |
| `ATTACHED_SHADERS`                 | 0x8B85 | Passed to `getProgramParameter` after calling `attachShader` to determine if the shader was attached correctly. Returns false if errors occurred.                                                |
| `ACTIVE_ATTRIBUTES`                | 0x8B89 | Passed to `getProgramParameter` to get the number of attributes active in a program.                                                                                                             |
| `ACTIVE_UNIFORMS`                  | 0x8B86 | Passed to `getProgramParamter` to get the number of uniforms active in a program.                                                                                                                |
| `MAX_VERTEX_ATTRIBS`               | 0x8869 |                                                                                                                                                                                                  |
| `MAX_VERTEX_UNIFORM_VECTORS`       | 0x8DFB |                                                                                                                                                                                                  |
| `MAX_VARYING_VECTORS`              | 0x8DFC |                                                                                                                                                                                                  |
| `MAX_COMBINED_TEXTURE_IMAGE_UNITS` | 0x8B4D |                                                                                                                                                                                                  |
| `MAX_VERTEX_TEXTURE_IMAGE_UNITS`   | 0x8B4C |                                                                                                                                                                                                  |
| `MAX_TEXTURE_IMAGE_UNITS`          | 0x8872 | Implementation dependent number of maximum texture units. At least 8.                                                                                                                            |
| `MAX_FRAGMENT_UNIFORM_VECTORS`     | 0x8DFD |                                                                                                                                                                                                  |
| `SHADER_TYPE`                      | 0x8B4F |                                                                                                                                                                                                  |
| `SHADING_LANGUAGE_VERSION`         | 0x8B8C |                                                                                                                                                                                                  |
| `CURRENT_PROGRAM`                  | 0x8B8D |                                                                                                                                                                                                  |

### Depth or stencil tests

Constants passed to {{domxref("WebGLRenderingContext.depthFunc()")}} or {{domxref("WebGLRenderingContext.stencilFunc()")}}.

| Constant name | Value  | Description                                                                                                                                                     |
| ------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEVER`       | 0x0200 | Passed to `depthFunction` or `stencilFunction` to specify depth or stencil tests will never pass. i.e. Nothing will be drawn.                                   |
| `ALWAYS`      | 0x0207 | Passed to `depthFunction` or `stencilFunction` to specify depth or stencil tests will always pass. i.e. Pixels will be drawn in the order they are drawn.       |
| `LESS`        | 0x0201 | Passed to `depthFunction` or `stencilFunction` to specify depth or stencil tests will pass if the new depth value is less than the stored value.                |
| `EQUAL`       | 0x0202 | Passed to `depthFunction` or `stencilFunction` to specify depth or stencil tests will pass if the new depth value is equals to the stored value.                |
| `LEQUAL`      | 0x0203 | 如果新深度值小于或等于存储值，则通过 `depthFunction` 或 `stencilFunction` 指定深度或模板测试。                                                                  |
| `GREATER`     | 0x0204 | Passed to `depthFunction` or `stencilFunction` to specify depth or stencil tests will pass if the new depth value is greater than the stored value.             |
| `GEQUAL`      | 0x0206 | Passed to `depthFunction` or `stencilFunction` to specify depth or stencil tests will pass if the new depth value is greater than or equal to the stored value. |
| `NOTEQUAL`    | 0x0205 | Passed to `depthFunction` or `stencilFunction` to specify depth or stencil tests will pass if the new depth value is not equal to the stored value.             |

### Stencil actions

Constants passed to {{domxref("WebGLRenderingContext.stencilOp()")}}.

| Constant name | Value  | Description |
| ------------- | ------ | ----------- |
| `KEEP`        | 0x1E00 |             |
| `REPLACE`     | 0x1E01 |             |
| `INCR`        | 0x1E02 |             |
| `DECR`        | 0x1E03 |             |
| `INVERT`      | 0x150A |             |
| `INCR_WRAP`   | 0x8507 |             |
| `DECR_WRAP`   | 0x8508 |             |

### Textures

Constants passed to {{domxref("WebGLRenderingContext.texParameteri()")}}, {{domxref("WebGLRenderingContext.texParameterf()")}}, {{domxref("WebGLRenderingContext.bindTexture()")}}, {{domxref("WebGLRenderingContext.texImage2D()")}}, and others.

| Constant name                 | Value           | Description                      |
| ----------------------------- | --------------- | -------------------------------- |
| `NEAREST`                     | 0x2600          |                                  |
| `LINEAR`                      | 0x2601          |                                  |
| `NEAREST_MIPMAP_NEAREST`      | 0x2700          |                                  |
| `LINEAR_MIPMAP_NEAREST`       | 0x2701          |                                  |
| `NEAREST_MIPMAP_LINEAR`       | 0x2702          |                                  |
| `LINEAR_MIPMAP_LINEAR`        | 0x2703          |                                  |
| `TEXTURE_MAG_FILTER`          | 0x2800          |                                  |
| `TEXTURE_MIN_FILTER`          | 0x2801          |                                  |
| `TEXTURE_WRAP_S`              | 0x2802          |                                  |
| `TEXTURE_WRAP_T`              | 0x2803          |                                  |
| `TEXTURE_2D`                  | 0x0DE1          |                                  |
| `TEXTURE`                     | 0x1702          |                                  |
| `TEXTURE_CUBE_MAP`            | 0x8513          |                                  |
| `TEXTURE_BINDING_CUBE_MAP`    | 0x8514          |                                  |
| `TEXTURE_CUBE_MAP_POSITIVE_X` | 0x8515          |                                  |
| `TEXTURE_CUBE_MAP_NEGATIVE_X` | 0x8516          |                                  |
| `TEXTURE_CUBE_MAP_POSITIVE_Y` | 0x8517          |                                  |
| `TEXTURE_CUBE_MAP_NEGATIVE_Y` | 0x8518          |                                  |
| `TEXTURE_CUBE_MAP_POSITIVE_Z` | 0x8519          |                                  |
| `TEXTURE_CUBE_MAP_NEGATIVE_Z` | 0x851A          |                                  |
| `MAX_CUBE_MAP_TEXTURE_SIZE`   | 0x851C          |                                  |
| `TEXTURE0 - 31`               | 0x84C0 - 0x84DF | A texture unit.                  |
| `ACTIVE_TEXTURE`              | 0x84E0          | The current active texture unit. |
| `REPEAT`                      | 0x2901          |                                  |
| `CLAMP_TO_EDGE`               | 0x812F          |                                  |
| `MIRRORED_REPEAT`             | 0x8370          |                                  |

### Uniform types

| Constant name  | Value  | Description |
| -------------- | ------ | ----------- |
| `FLOAT_VEC2`   | 0x8B50 |             |
| `FLOAT_VEC3`   | 0x8B51 |             |
| `FLOAT_VEC4`   | 0x8B52 |             |
| `INT_VEC2`     | 0x8B53 |             |
| `INT_VEC3`     | 0x8B54 |             |
| `INT_VEC4`     | 0x8B55 |             |
| `BOOL`         | 0x8B56 |             |
| `BOOL_VEC2`    | 0x8B57 |             |
| `BOOL_VEC3`    | 0x8B58 |             |
| `BOOL_VEC4`    | 0x8B59 |             |
| `FLOAT_MAT2`   | 0x8B5A |             |
| `FLOAT_MAT3`   | 0x8B5B |             |
| `FLOAT_MAT4`   | 0x8B5C |             |
| `SAMPLER_2D`   | 0x8B5E |             |
| `SAMPLER_CUBE` | 0x8B60 |             |

### Shader precision-specified types

| Constant name  | Value  | Description |
| -------------- | ------ | ----------- |
| `LOW_FLOAT`    | 0x8DF0 |             |
| `MEDIUM_FLOAT` | 0x8DF1 |             |
| `HIGH_FLOAT`   | 0x8DF2 |             |
| `LOW_INT`      | 0x8DF3 |             |
| `MEDIUM_INT`   | 0x8DF4 |             |
| `HIGH_INT`     | 0x8DF5 |             |

### Framebuffers and renderbuffers

| Constant name                                  | Value  | Description |
| ---------------------------------------------- | ------ | ----------- |
| `FRAMEBUFFER`                                  | 0x8D40 |             |
| `RENDERBUFFER`                                 | 0x8D41 |             |
| `RGBA4`                                        | 0x8056 |             |
| `RGB5_A1`                                      | 0x8057 |             |
| `RGB565`                                       | 0x8D62 |             |
| `DEPTH_COMPONENT16`                            | 0x81A5 |             |
| `STENCIL_INDEX`                                | 0x1901 |             |
| `STENCIL_INDEX8`                               | 0x8D48 |             |
| `DEPTH_STENCIL`                                | 0x84F9 |             |
| `RENDERBUFFER_WIDTH`                           | 0x8D42 |             |
| `RENDERBUFFER_HEIGHT`                          | 0x8D43 |             |
| `RENDERBUFFER_INTERNAL_FORMAT`                 | 0x8D44 |             |
| `RENDERBUFFER_RED_SIZE`                        | 0x8D50 |             |
| `RENDERBUFFER_GREEN_SIZE`                      | 0x8D51 |             |
| `RENDERBUFFER_BLUE_SIZE`                       | 0x8D52 |             |
| `RENDERBUFFER_ALPHA_SIZE`                      | 0x8D53 |             |
| `RENDERBUFFER_DEPTH_SIZE`                      | 0x8D54 |             |
| `RENDERBUFFER_STENCIL_SIZE`                    | 0x8D55 |             |
| `FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE`           | 0x8CD0 |             |
| `FRAMEBUFFER_ATTACHMENT_OBJECT_NAME`           | 0x8CD1 |             |
| `FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL`         | 0x8CD2 |             |
| `FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE` | 0x8CD3 |             |
| `COLOR_ATTACHMENT0`                            | 0x8CE0 |             |
| `DEPTH_ATTACHMENT`                             | 0x8D00 |             |
| `STENCIL_ATTACHMENT`                           | 0x8D20 |             |
| `DEPTH_STENCIL_ATTACHMENT`                     | 0x821A |             |
| `NONE`                                         | 0      |             |
| `FRAMEBUFFER_COMPLETE`                         | 0x8CD5 |             |
| `FRAMEBUFFER_INCOMPLETE_ATTACHMENT`            | 0x8CD6 |             |
| `FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT`    | 0x8CD7 |             |
| `FRAMEBUFFER_INCOMPLETE_DIMENSIONS`            | 0x8CD9 |             |
| `FRAMEBUFFER_UNSUPPORTED`                      | 0x8CDD |             |
| `FRAMEBUFFER_BINDING`                          | 0x8CA6 |             |
| `RENDERBUFFER_BINDING`                         | 0x8CA7 |             |
| `MAX_RENDERBUFFER_SIZE`                        | 0x84E8 |             |
| `INVALID_FRAMEBUFFER_OPERATION`                | 0x0506 |             |

### Pixel storage modes

Constants passed to {{domxref("WebGLRenderingContext.pixelStorei()")}}.

| Constant name                        | Value  | Description |
| ------------------------------------ | ------ | ----------- |
| `UNPACK_FLIP_Y_WEBGL`                | 0x9240 |             |
| `UNPACK_PREMULTIPLY_ALPHA_WEBGL`     | 0x9241 |             |
| `UNPACK_COLORSPACE_CONVERSION_WEBGL` | 0x9243 |             |

## Additional constants defined WebGL 2

These constants are defined on the {{domxref("WebGL2RenderingContext")}} interface. All WebGL 1 constants are also available in a WebGL 2 context.

### Getting GL parameter information

Constants passed to {{domxref("WebGLRenderingContext.getParameter()")}} to specify what information to return.

| Constant name                     | Value  | Description |
| --------------------------------- | ------ | ----------- |
| `READ_BUFFER`                     | 0x0C02 |             |
| `UNPACK_ROW_LENGTH`               | 0x0CF2 |             |
| `UNPACK_SKIP_ROWS`                | 0x0CF3 |             |
| `UNPACK_SKIP_PIXELS`              | 0x0CF4 |             |
| `PACK_ROW_LENGTH`                 | 0x0D02 |             |
| `PACK_SKIP_ROWS`                  | 0x0D03 |             |
| `PACK_SKIP_PIXELS`                | 0x0D04 |             |
| `TEXTURE_BINDING_3D`              | 0x806A |             |
| `UNPACK_SKIP_IMAGES`              | 0x806D |             |
| `UNPACK_IMAGE_HEIGHT`             | 0x806E |             |
| `MAX_3D_TEXTURE_SIZE`             | 0x8073 |             |
| `MAX_ELEMENTS_VERTICES`           | 0x80E8 |             |
| `MAX_ELEMENTS_INDICES`            | 0x80E9 |             |
| `MAX_TEXTURE_LOD_BIAS`            | 0x84FD |             |
| `MAX_FRAGMENT_UNIFORM_COMPONENTS` | 0x8B49 |             |
| `MAX_VERTEX_UNIFORM_COMPONENTS`   | 0x8B4A |             |
| `MAX_ARRAY_TEXTURE_LAYERS`        | 0x88FF |             |
| `MIN_PROGRAM_TEXEL_OFFSET`        | 0x8904 |             |
| `MAX_PROGRAM_TEXEL_OFFSET`        | 0x8905 |             |
| `MAX_VARYING_COMPONENTS`          | 0x8B4B |             |
| `FRAGMENT_SHADER_DERIVATIVE_HINT` | 0x8B8B |             |
| `RASTERIZER_DISCARD`              | 0x8C89 |             |
| `VERTEX_ARRAY_BINDING`            | 0x85B5 |             |
| `MAX_VERTEX_OUTPUT_COMPONENTS`    | 0x9122 |             |
| `MAX_FRAGMENT_INPUT_COMPONENTS`   | 0x9125 |             |
| `MAX_SERVER_WAIT_TIMEOUT`         | 0x9111 |             |
| `MAX_ELEMENT_INDEX`               | 0x8D6B |             |

### Textures

Constants passed to {{domxref("WebGLRenderingContext.texParameteri()")}}, {{domxref("WebGLRenderingContext.texParameterf()")}}, {{domxref("WebGLRenderingContext.bindTexture()")}}, {{domxref("WebGLRenderingContext.texImage2D()")}}, and others.

| Constant name                              | Value  | Description |
| ------------------------------------------ | ------ | ----------- |
| `RED`                                      | 0x1903 |             |
| `RGB8`                                     | 0x8051 |             |
| `RGBA8`                                    | 0x8058 |             |
| `RGB10_A2`                                 | 0x8059 |             |
| `TEXTURES_3D`                              | 0x806F |             |
| `TEXTURE_WRAP_R`                           | 0x8072 |             |
| `TEXTURE_MIN_LOD`                          | 0x813A |             |
| `TEXTURE_MAX_LOD`                          | 0x813B |             |
| `TEXTURE_BASE_LEVEL`                       | 0x813C |             |
| `TEXTURE_MAX_LEVEL`                        | 0x813D |             |
| `TEXTURE_COMPARE_MODE`                     | 0x884C |             |
| `TEXTURE_COMPARE_FUNC`                     | 0x884D |             |
| `SRGB`                                     | 0x8C40 |             |
| `SRGB8`                                    | 0x8C41 |             |
| `SRGB8_ALPHA8`                             | 0x8C43 |             |
| `COMPARE_REF_TO_TEXTURE`                   | 0x884E |             |
| `RGBA32F`                                  | 0x8814 |             |
| `RGB32F`                                   | 0x8815 |             |
| `RGBA16F`                                  | 0x881A |             |
| `RGB16F`                                   | 0x881B |             |
| `TEXTURE_2D_ARRAY`                         | 0x8C1A |             |
| `TEXTURE_BINDING_2D_ARRAY`                 | 0x8C1D |             |
| `R11F_G11F_B10F`                           | 0x8C3A |             |
| `RGB9_E5`                                  | 0x8C3D |             |
| `RGBA32UI`                                 | 0x8D70 |             |
| `RGB32UI`                                  | 0x8D71 |             |
| `RGBA16UI`                                 | 0x8D76 |             |
| `RGB16UI`                                  | 0x8D77 |             |
| `RGBA8UI`                                  | 0x8D7C |             |
| `RGB8UI`                                   | 0x8D7D |             |
| `RGBA32I`                                  | 0x8D82 |             |
| `RGB32I`                                   | 0x8D83 |             |
| `RGBA16I`                                  | 0x8D88 |             |
| `RGB16I`                                   | 0x8D89 |             |
| `RGBA8I`                                   | 0x8D8E |             |
| `RGB8I`                                    | 0x8D8F |             |
| `RED_INTEGER`                              | 0x8D94 |             |
| `RGB_INTEGER`                              | 0x8D98 |             |
| `RGBA_INTEGER`                             | 0x8D99 |             |
| `R8`                                       | 0x8229 |             |
| `RG8`                                      | 0x822B |             |
| R16F                                       | 0x822D |             |
| R32F                                       | 0x822E |             |
| RG16F                                      | 0x822F |             |
| RG32F                                      | 0x8230 |             |
| R8I                                        | 0x8231 |             |
| R8UI                                       | 0x8232 |             |
| R16I                                       | 0x8233 |             |
| R16UI                                      | 0x8234 |             |
| R32I                                       | 0x8235 |             |
| R32UI                                      | 0x8236 |             |
| RG8I                                       | 0x8237 |             |
| RG8UI                                      | 0x8238 |             |
| RG16I                                      | 0x8239 |             |
| RG16UI                                     | 0x823A |             |
| RG32I                                      | 0x823B |             |
| RG32UI                                     | 0x823C |             |
| R8_SNORM                                   | 0x8F94 |             |
| RG8_SNORM                                  | 0x8F95 |             |
| RGB8_SNORM                                 | 0x8F96 |             |
| RGBA8_SNORM                                | 0x8F97 |             |
| `RGB10_A2UI`                               | 0x906F |             |
| `COMPRESSED_R11_EAC`                       | 0x9270 |             |
| `COMPRESSED_SIGNED_R11_EAC`                | 0x9271 |             |
| `COMPRESSED_RG11_EAC`                      | 0x9272 |             |
| `COMPRESSED_SIGNED_RG11_EAC`               | 0x9273 |             |
| `COMPRESSED_RGB8_ETC2`                     | 0x9274 |             |
| `COMPRESSED_SRGB8_ETC2`                    | 0x9275 |             |
| `COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2` | 0x9276 |             |
| `COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC` | 0x9277 |             |
| `COMPRESSED_RGBA8_ETC2_EAC`                | 0x9278 |             |
| `COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`         | 0x9279 |             |
| `TEXTURE_IMMUTABLE_FORMAT`                 | 0x912F |             |
| `TEXTURE_IMMUTABLE_LEVELS`                 | 0x82DF |             |

### Pixel types

| Constant name                    | Value  | Description |
| -------------------------------- | ------ | ----------- |
| `UNSIGNED_INT_2_10_10_10_REV`    | 0x8368 |             |
| `UNSIGNED_INT_10F_11F_11F_REV`   | 0x8C3B |             |
| `UNSIGNED_INT_5_9_9_9_REV`       | 0x8C3E |             |
| `FLOAT_32_UNSIGNED_INT_24_8_REV` | 0x8DAD |             |
| UNSIGNED_INT_24_8                | 0x84FA |             |
| `HALF_FLOAT`                     | 0x140B |             |
| `RG`                             | 0x8227 |             |
| `RG_INTEGER`                     | 0x8228 |             |
| `INT_2_10_10_10_REV`             | 0x8D9F |             |

### Queries

| Constant name                     | Value  | Description |
| --------------------------------- | ------ | ----------- |
| `CURRENT_QUERY`                   | 0x8865 |             |
| `QUERY_RESULT`                    | 0x8866 |             |
| `QUERY_RESULT_AVAILABLE`          | 0x8867 |             |
| `ANY_SAMPLES_PASSED`              | 0x8C2F |             |
| `ANY_SAMPLES_PASSED_CONSERVATIVE` | 0x8D6A |             |

### Draw buffers

| Constant name           | Value  | Description |
| ----------------------- | ------ | ----------- |
| `MAX_DRAW_BUFFERS`      | 0x8824 |             |
| `DRAW_BUFFER0`          | 0x8825 |             |
| `DRAW_BUFFER1`          | 0x8826 |             |
| `DRAW_BUFFER2`          | 0x8827 |             |
| `DRAW_BUFFER3`          | 0x8828 |             |
| `DRAW_BUFFER4`          | 0x8829 |             |
| `DRAW_BUFFER5`          | 0x882A |             |
| `DRAW_BUFFER6`          | 0x882B |             |
| `DRAW_BUFFER7`          | 0x882C |             |
| `DRAW_BUFFER8`          | 0x882D |             |
| `DRAW_BUFFER9`          | 0x882E |             |
| `DRAW_BUFFER10`         | 0x882F |             |
| `DRAW_BUFFER11`         | 0x8830 |             |
| `DRAW_BUFFER12`         | 0x8831 |             |
| `DRAW_BUFFER13`         | 0x8832 |             |
| `DRAW_BUFFER14`         | 0x8833 |             |
| `DRAW_BUFFER15`         | 0x8834 |             |
| `MAX_COLOR_ATTACHMENTS` | 0x8CDF |             |
| `COLOR_ATTACHMENT1`     | 0x8CE1 |             |
| `COLOR_ATTACHMENT2`     | 0x8CE2 |             |
| `COLOR_ATTACHMENT3`     | 0x8CE3 |             |
| `COLOR_ATTACHMENT4`     | 0x8CE4 |             |
| `COLOR_ATTACHMENT5`     | 0x8CE5 |             |
| `COLOR_ATTACHMENT6`     | 0x8CE6 |             |
| `COLOR_ATTACHMENT7`     | 0x8CE7 |             |
| `COLOR_ATTACHMENT8`     | 0x8CE8 |             |
| `COLOR_ATTACHMENT9`     | 0x8CE9 |             |
| `COLOR_ATTACHMENT10`    | 0x8CEA |             |
| `COLOR_ATTACHMENT11`    | 0x8CEB |             |
| `COLOR_ATTACHMENT12`    | 0x8CEC |             |
| `COLOR_ATTACHMENT13`    | 0x8CED |             |
| `COLOR_ATTACHMENT14`    | 0x8CEE |             |
| `COLOR_ATTACHMENT15`    | 0x8CEF |             |

### Samplers

| Constant name                   | Value  | Description |
| ------------------------------- | ------ | ----------- |
| `SAMPLER_3D`                    | 0x8B5F |             |
| `SAMPLER_2D_SHADOW`             | 0x8B62 |             |
| `SAMPLER_2D_ARRAY`              | 0x8DC1 |             |
| `SAMPLER_2D_ARRAY_SHADOW`       | 0x8DC4 |             |
| `SAMPLER_CUBE_SHADOW`           | 0x8DC5 |             |
| `INT_SAMPLER_2D`                | 0x8DCA |             |
| `INT_SAMPLER_3D`                | 0x8DCB |             |
| `INT_SAMPLER_CUBE`              | 0x8DCC |             |
| `INT_SAMPLER_2D_ARRAY`          | 0x8DCF |             |
| `UNSIGNED_INT_SAMPLER_2D`       | 0x8DD2 |             |
| `UNSIGNED_INT_SAMPLER_3D`       | 0x8DD3 |             |
| `UNSIGNED_INT_SAMPLER_CUBE`     | 0x8DD4 |             |
| `UNSIGNED_INT_SAMPLER_2D_ARRAY` | 0x8DD7 |             |
| `MAX_SAMPLES`                   | 0x8D57 |             |
| `SAMPLER_BINDING`               | 0x8919 |             |

### Buffers

| Constant name                 | Value  | Description |
| ----------------------------- | ------ | ----------- |
| `PIXEL_PACK_BUFFER`           | 0x88EB |             |
| `PIXEL_UNPACK_BUFFER`         | 0x88EC |             |
| `PIXEL_PACK_BUFFER_BINDING`   | 0x88ED |             |
| `PIXEL_UNPACK_BUFFER_BINDING` | 0x88EF |             |
| `COPY_READ_BUFFER`            | 0x8F36 |             |
| `COPY_WRITE_BUFFER`           | 0x8F37 |             |
| `COPY_READ_BUFFER_BINDING`    | 0x8F36 |             |
| `COPY_WRITE_BUFFER_BINDING`   | 0x8F37 |             |

### Data types

| Constant name         | Value  | Description |
| --------------------- | ------ | ----------- |
| `FLOAT_MAT2x3`        | 0x8B65 |             |
| `FLOAT_MAT2x4`        | 0x8B66 |             |
| `FLOAT_MAT3x2`        | 0x8B67 |             |
| `FLOAT_MAT3x4`        | 0x8B68 |             |
| `FLOAT_MAT4x2`        | 0x8B69 |             |
| `FLOAT_MAT4x3`        | 0x8B6A |             |
| `UNSIGNED_INT_VEC2`   | 0x8DC6 |             |
| `UNSIGNED_INT_VEC3`   | 0x8DC7 |             |
| `UNSIGNED_INT_VEC4`   | 0x8DC8 |             |
| `UNSIGNED_NORMALIZED` | 0x8C17 |             |
| `SIGNED_NORMALIZED`   | 0x8F9C |             |

### Vertex attributes

| Constant name                 | Value  | Description |
| ----------------------------- | ------ | ----------- |
| `VERTEX_ATTRIB_ARRAY_INTEGER` | 0x88FD |             |
| `VERTEX_ATTRIB_ARRAY_DIVISOR` | 0x88FE |             |

### Transform feedback

| Constant name                                   | Value  | Description |
| ----------------------------------------------- | ------ | ----------- |
| `TRANSFORM_FEEDBACK_BUFFER_MODE`                | 0x8C7F |             |
| `MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS`    | 0x8C80 |             |
| `TRANSFORM_FEEDBACK_VARYINGS`                   | 0x8C83 |             |
| `TRANSFORM_FEEDBACK_BUFFER_START`               | 0x8C84 |             |
| `TRANSFORM_FEEDBACK_BUFFER_SIZE`                | 0x8C85 |             |
| `TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN`         | 0x8C88 |             |
| `MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS` | 0x8C8A |             |
| `MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS`       | 0x8C8B |             |
| `INTERLEAVED_ATTRIBS`                           | 0x8C8C |             |
| `SEPARATE_ATTRIBS`                              | 0x8C8D |             |
| `TRANSFORM_FEEDBACK_BUFFER`                     | 0x8C8E |             |
| `TRANSFORM_FEEDBACK_BUFFER_BINDING`             | 0x8C8F |             |
| `TRANSFORM_FEEDBACK`                            | 0x8E22 |             |
| `TRANSFORM_FEEDBACK_PAUSED`                     | 0x8E23 |             |
| `TRANSFORM_FEEDBACK_ACTIVE`                     | 0x8E24 |             |
| `TRANSFORM_FEEDBACK_BINDING`                    | 0x8E25 |             |

### Framebuffers and renderbuffers

| Constant name                           | Value  | Description |
| --------------------------------------- | ------ | ----------- |
| `FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING` | 0x8210 |             |
| `FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE` | 0x8211 |             |
| `FRAMEBUFFER_ATTACHMENT_RED_SIZE`       | 0x8212 |             |
| `FRAMEBUFFER_ATTACHMENT_GREEN_SIZE`     | 0x8213 |             |
| `FRAMEBUFFER_ATTACHMENT_BLUE_SIZE`      | 0x8214 |             |
| `FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE`     | 0x8215 |             |
| `FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE`     | 0x8216 |             |
| `FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE`   | 0x8217 |             |
| `FRAMEBUFFER_DEFAULT`                   | 0x8218 |             |
| `DEPTH_STENCIL_ATTACHMENT`              | 0x821A |             |
| `DEPTH_STENCIL`                         | 0x84F9 |             |
| `DEPTH24_STENCIL8`                      | 0x88F0 |             |
| `DRAW_FRAMEBUFFER_BINDING`              | 0x8CA6 |             |
| `READ_FRAMEBUFFER`                      | 0x8CA8 |             |
| `DRAW_FRAMEBUFFER`                      | 0x8CA9 |             |
| `READ_FRAMEBUFFER_BINDING`              | 0x8CAA |             |
| `RENDERBUFFER_SAMPLES`                  | 0x8CAB |             |
| `FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER`  | 0x8CD4 |             |
| `FRAMEBUFFER_INCOMPLETE_MULTISAMPLE`    | 0x8D56 |             |

### Uniforms

| Constant name                                 | Value  | Description |
| --------------------------------------------- | ------ | ----------- |
| `UNIFORM_BUFFER`                              | 0x8A11 |             |
| `UNIFORM_BUFFER_BINDING`                      | 0x8A28 |             |
| `UNIFORM_BUFFER_START`                        | 0x8A29 |             |
| `UNIFORM_BUFFER_SIZE`                         | 0x8A2A |             |
| `MAX_VERTEX_UNIFORM_BLOCKS`                   | 0x8A2B |             |
| `MAX_FRAGMENT_UNIFORM_BLOCKS`                 | 0x8A2D |             |
| `MAX_COMBINED_UNIFORM_BLOCKS`                 | 0x8A2E |             |
| `MAX_UNIFORM_BUFFER_BINDINGS`                 | 0x8A2F |             |
| `MAX_UNIFORM_BLOCK_SIZE`                      | 0x8A30 |             |
| `MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS`      | 0x8A31 |             |
| `MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS`    | 0x8A33 |             |
| `UNIFORM_BUFFER_OFFSET_ALIGNMENT`             | 0x8A34 |             |
| `ACTIVE_UNIFORM_BLOCKS`                       | 0x8A36 |             |
| `UNIFORM_TYPE`                                | 0x8A37 |             |
| `UNIFORM_SIZE`                                | 0x8A38 |             |
| `UNIFORM_BLOCK_INDEX`                         | 0x8A3A |             |
| `UNIFORM_OFFSET`                              | 0x8A3B |             |
| `UNIFORM_ARRAY_STRIDE`                        | 0x8A3C |             |
| `UNIFORM_MATRIX_STRIDE`                       | 0x8A3D |             |
| `UNIFORM_IS_ROW_MAJOR`                        | 0x8A3E |             |
| `UNIFORM_BLOCK_BINDING`                       | 0x8A3F |             |
| `UNIFORM_BLOCK_DATA_SIZE`                     | 0x8A40 |             |
| `UNIFORM_BLOCK_ACTIVE_UNIFORMS`               | 0x8A42 |             |
| `UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES`        | 0x8A43 |             |
| `UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER`   | 0x8A44 |             |
| `UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER` | 0x8A46 |             |

### Sync objects

| Constant name                | Value      | Description |
| ---------------------------- | ---------- | ----------- |
| `OBJECT_TYPE`                | 0x9112     |             |
| `SYNC_CONDITION`             | 0x9113     |             |
| `SYNC_STATUS`                | 0x9114     |             |
| `SYNC_FLAGS`                 | 0x9115     |             |
| `SYNC_FENCE`                 | 0x9116     |             |
| `SYNC_GPU_COMMANDS_COMPLETE` | 0x9117     |             |
| `UNSIGNALED`                 | 0x9118     |             |
| `SIGNALED`                   | 0x9119     |             |
| `ALREADY_SIGNALED`           | 0x911A     |             |
| `TIMEOUT_EXPIRED`            | 0x911B     |             |
| `CONDITION_SATISFIED`        | 0x911C     |             |
| `WAIT_FAILED`                | 0x911D     |             |
| `SYNC_FLUSH_COMMANDS_BIT`    | 0x00000001 |             |

### Miscellaneous constants

| Constant name                   | Value      | Description |
| ------------------------------- | ---------- | ----------- |
| `COLOR`                         | 0x1800     |             |
| DEPTH                           | 0x1801     |             |
| `STENCIL`                       | 0x1802     |             |
| `MIN`                           | 0x8007     |             |
| MAX                             | 0x8008     |             |
| `DEPTH_COMPONENT24`             | 0x81A6     |             |
| `STREAM_READ`                   | 0x88E1     |             |
| `STREAM_COPY`                   | 0x88E2     |             |
| `STATIC_READ`                   | 0x88E5     |             |
| `STATIC_COPY`                   | 0x88E6     |             |
| `DYNAMIC_READ`                  | 0x88E9     |             |
| `DYNAMIC_COPY`                  | 0x88EA     |             |
| `DEPTH_COMPONENT32F`            | 0x8CAC     |             |
| `DEPTH32F_STENCIL8`             | 0x8CAD     |             |
| `INVALID_INDEX`                 | 0xFFFFFFFF |             |
| `TIMEOUT_IGNORED`               | -1         |             |
| `MAX_CLIENT_WAIT_TIMEOUT_WEBGL` | 0x9247     |             |

## Constants defined in WebGL extensions

### {{domxref("ANGLE_instanced_arrays")}}

| Constant name                       | Value  | Description                                                   |
| ----------------------------------- | ------ | ------------------------------------------------------------- |
| `VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE` | 0x88FE | Describes the frequency divisor used for instanced rendering. |

### {{domxref("WEBGL_debug_renderer_info")}}

| Constant name             | Value  | Description                                                                 |
| ------------------------- | ------ | --------------------------------------------------------------------------- |
| `UNMASKED_VENDOR_WEBGL`   | 0x9245 | Passed to `getParameter` to get the vendor string of the graphics driver.   |
| `UNMASKED_RENDERER_WEBGL` | 0x9246 | Passed to `getParameter` to get the renderer string of the graphics driver. |

### {{domxref("EXT_texture_filter_anisotropic")}}

| Constant name                    | Value  | Description                                                                   |
| -------------------------------- | ------ | ----------------------------------------------------------------------------- |
| `MAX_TEXTURE_MAX_ANISOTROPY_EXT` | 0x84FF | Returns the maximum available anisotropy.                                     |
| `TEXTURE_MAX_ANISOTROPY_EXT`     | 0x84FE | Passed to `texParameter` to set the desired maximum anisotropy for a texture. |

### {{domxref("WEBGL_compressed_texture_s3tc")}}

| Constant name                   | Value  | Description                                                                                                                                                    |
| ------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `COMPRESSED_RGB_S3TC_DXT1_EXT`  | 0x83F0 | A DXT1-compressed image in an RGB image format.                                                                                                                |
| `COMPRESSED_RGBA_S3TC_DXT1_EXT` | 0x83F1 | A DXT1-compressed image in an RGB image format with a simple on/off alpha value.                                                                               |
| `COMPRESSED_RGBA_S3TC_DXT3_EXT` | 0x83F2 | A DXT3-compressed image in an RGBA image format. Compared to a 32-bit RGBA texture, it offers 4:1 compression.                                                 |
| `COMPRESSED_RGBA_S3TC_DXT5_EXT` | 0x83F3 | A DXT5-compressed image in an RGBA image format. It also provides a 4:1 compression, but differs to the DXT3 compression in how the alpha compression is done. |

### {{domxref("WEBGL_compressed_texture_es3")}}

| Constant name                               | Value  | Description                                                                                                                           |
| ------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `COMPRESSED_R11_EAC`                        | 0x9270 | One-channel (red) unsigned format compression.                                                                                        |
| `COMPRESSED_SIGNED_R11_EAC`                 | 0x9271 | One-channel (red) signed format compression.                                                                                          |
| `COMPRESSED_RG11_EAC`                       | 0x9272 | Two-channel (red and green) unsigned format compression.                                                                              |
| `COMPRESSED_SIGNED_RG11_EAC`                | 0x9273 | Two-channel (red and green) signed format compression.                                                                                |
| `COMPRESSED_RGB8_ETC2`                      | 0x9274 | Compresses RBG8 data with no alpha channel.                                                                                           |
| `COMPRESSED_RGBA8_ETC2_EAC`                 | 0x9275 | Compresses RGBA8 data. The RGB part is encoded the same as `RGB_ETC2`, but the alpha part is encoded separately.                      |
| `COMPRESSED_SRGB8_ETC2`                     | 0x9276 | Compresses sRBG8 data with no alpha channel.                                                                                          |
| `COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`          | 0x9277 | Compresses sRGBA8 data. The sRGB part is encoded the same as `SRGB_ETC2`, but the alpha part is encoded separately.                   |
| `COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`  | 0x9278 | Similar to `RGB8_ETC`, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent.  |
| `COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2` | 0x9279 | Similar to `SRGB8_ETC`, but with ability to punch through the alpha channel, which means to make it completely opaque or transparent. |

### {{domxref("WEBGL_compressed_texture_pvrtc")}}

| Constant name                      | Value  | Description                                                    |
| ---------------------------------- | ------ | -------------------------------------------------------------- |
| `COMPRESSED_RGB_PVRTC_4BPPV1_IMG`  | 0x8C00 | RGB compression in 4-bit mode. One block for each 4×4 pixels.  |
| `COMPRESSED_RGBA_PVRTC_4BPPV1_IMG` | 0x8C02 | RGBA compression in 4-bit mode. One block for each 4×4 pixels. |
| `COMPRESSED_RGB_PVRTC_2BPPV1_IMG`  | 0x8C01 | RGB compression in 2-bit mode. One block for each 8×4 pixels.  |
| `COMPRESSED_RGBA_PVRTC_2BPPV1_IMG` | 0x8C03 | RGBA compression in 2-bit mode. One block for each 8×4 pixe    |

### {{domxref("WEBGL_compressed_texture_etc1")}}

| Constant name               | Value  | Description                                       |
| --------------------------- | ------ | ------------------------------------------------- |
| `COMPRESSED_RGB_ETC1_WEBGL` | 0x8D64 | Compresses 24-bit RGB data with no alpha channel. |

### {{domxref("WEBGL_compressed_texture_atc")}}

| Constant name                                  | Value  | Description                                                                                              |
| ---------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------- |
| `COMPRESSED_RGB_ATC_WEBGL`                     | 0x8C92 | Compresses RGB textures with no alpha channel.                                                           |
| `COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL`     | 0x8C92 | Compresses RGBA textures using explicit alpha encoding (useful when alpha transitions are sharp).        |
| `COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL` | 0x87EE | Compresses RGBA textures using interpolated alpha encoding (useful when alpha transitions are gradient). |

### {{domxref("WEBGL_depth_texture")}}

| Constant name             | Value  | Description                                          |
| ------------------------- | ------ | ---------------------------------------------------- |
| `UNSIGNED_INT_24_8_WEBGL` | 0x84FA | Unsigned integer type for 24-bit depth texture data. |

### {{domxref("OES_texture_half_float")}}

| Constant name    | Value  | Description                        |
| ---------------- | ------ | ---------------------------------- |
| `HALF_FLOAT_OES` | 0x8D61 | Half floating-point type (16-bit). |

### {{domxref("WEBGL_color_buffer_float")}}

| Constant name                               | Value  | Description                                         |
| ------------------------------------------- | ------ | --------------------------------------------------- |
| `RGBA32F_EXT`                               | 0x8814 | RGBA 32-bit floating-point color-renderable format. |
| `RGB32F_EXT`                                | 0x8815 | RGB 32-bit floating-point color-renderable format.  |
| `FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT` | 0x8211 |                                                     |
| `UNSIGNED_NORMALIZED_EXT`                   | 0x8C17 |                                                     |

### {{domxref("EXT_blend_minmax")}}

| Constant name | Value  | Description                                                                 |
| ------------- | ------ | --------------------------------------------------------------------------- |
| `MIN_EXT`     | 0x8007 | Produces the minimum color components of the source and destination colors. |
| `MAX_EXT`     | 0x8008 | Produces the maximum color components of the source and destination colors. |

### {{domxref("EXT_sRGB")}}

| Constant name                               | Value  | Description                                                     |
| ------------------------------------------- | ------ | --------------------------------------------------------------- |
| `SRGB_EXT`                                  | 0x8C40 | Unsized sRGB format that leaves the precision up to the driver. |
| `SRGB_ALPHA_EXT`                            | 0x8C42 | Unsized sRGB format with unsized alpha component.               |
| `SRGB8_ALPHA8_EXT`                          | 0x8C43 | Sized (8-bit) sRGB and alpha formats.                           |
| `FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT` | 0x8210 | Returns the framebuffer color encoding.                         |

### {{domxref("OES_standard_derivatives")}}

| Constant name                         | Value  | Description                                                                                                         |
| ------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------- |
| `FRAGMENT_SHADER_DERIVATIVE_HINT_OES` | 0x8B8B | Indicates the accuracy of the derivative calculation for the GLSL built-in functions: `dFdx`, `dFdy`, and `fwidth`. |

### {{domxref("WEBGL_draw_buffers")}}

| Constant name                 | Value  | Description                                           |
| ----------------------------- | ------ | ----------------------------------------------------- |
| `COLOR_ATTACHMENT0_WEBGL`     | 0x8CE0 | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT1_WEBGL`     | 0x8CE1 | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT2_WEBGL`     | 0x8CE2 | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT3_WEBGL`     | 0x8CE3 | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT4_WEBGL`     | 0x8CE4 | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT5_WEBGL`     | 0x8CE5 | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT6_WEBGL`     | 0x8CE6 | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT7_WEBGL`     | 0x8CE7 | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT8_WEBGL`     | 0x8CE8 | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT9_WEBGL`     | 0x8CE9 | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT10_WEBGL`    | 0x8CEA | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT11_WEBGL`    | 0x8CEB | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT12_WEBGL`    | 0x8CEC | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT13_WEBGL`    | 0x8CED | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT14_WEBGL`    | 0x8CEE | Framebuffer color attachment point                    |
| `COLOR_ATTACHMENT15_WEBGL`    | 0x8CEF | Framebuffer color attachment point                    |
| `DRAW_BUFFER0_WEBGL`          | 0x8825 | Draw buffer                                           |
| `DRAW_BUFFER1_WEBGL`          | 0x8826 | Draw buffer                                           |
| `DRAW_BUFFER2_WEBGL`          | 0x8827 | Draw buffer                                           |
| `DRAW_BUFFER3_WEBGL`          | 0x8828 | Draw buffer                                           |
| `DRAW_BUFFER4_WEBGL`          | 0x8829 | Draw buffer                                           |
| `DRAW_BUFFER5_WEBGL`          | 0x882A | Draw buffer                                           |
| `DRAW_BUFFER6_WEBGL`          | 0x882B | Draw buffer                                           |
| `DRAW_BUFFER7_WEBGL`          | 0x882C | Draw buffer                                           |
| `DRAW_BUFFER8_WEBGL`          | 0x882D | Draw buffer                                           |
| `DRAW_BUFFER9_WEBGL`          | 0x882E | Draw buffer                                           |
| `DRAW_BUFFER10_WEBGL`         | 0x882F | Draw buffer                                           |
| `DRAW_BUFFER11_WEBGL`         | 0x8830 | Draw buffer                                           |
| `DRAW_BUFFER12_WEBGL`         | 0x8831 | Draw buffer                                           |
| `DRAW_BUFFER13_WEBGL`         | 0x8832 | Draw buffer                                           |
| `DRAW_BUFFER14_WEBGL`         | 0x8833 | Draw buffer                                           |
| `DRAW_BUFFER15_WEBGL`         | 0x8834 | Draw buffer                                           |
| `MAX_COLOR_ATTACHMENTS_WEBGL` | 0x8CDF | Maximum number of framebuffer color attachment points |
| `MAX_DRAW_BUFFERS_WEBGL`      | 0x8824 | Maximum number of draw buffers                        |

### {{domxref("OES_vertex_array_object")}}

| Constant name              | Value  | Description                          |
| -------------------------- | ------ | ------------------------------------ |
| `VERTEX_ARRAY_BINDING_OES` | 0x85B5 | The bound vertex array object (VAO). |

### {{domxref("EXT_disjoint_timer_query")}}

| Constant name                | Value  | Description                                                                   |
| ---------------------------- | ------ | ----------------------------------------------------------------------------- |
| `QUERY_COUNTER_BITS_EXT`     | 0x8864 | The number of bits used to hold the query result for the given target.        |
| `CURRENT_QUERY_EXT`          | 0x8865 | The currently active query.                                                   |
| `QUERY_RESULT_EXT`           | 0x8866 | The query result.                                                             |
| `QUERY_RESULT_AVAILABLE_EXT` | 0x8867 | A Boolean indicating whether or not a query result is available.              |
| `TIME_ELAPSED_EXT`           | 0x88BF | Elapsed time (in nanoseconds).                                                |
| `TIMESTAMP_EXT`              | 0x8E28 | The current time.                                                             |
| `GPU_DISJOINT_EXT`           | 0x8FBB | A Boolean indicating whether or not the GPU performed any disjoint operation. |

## Specifications

{{Specifications}}

## See also

- {{domxref("WebGLRenderingContext")}}
