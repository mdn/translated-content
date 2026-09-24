---
title: WebGL 常量
slug: Web/API/WebGL_API/Constants
l10n:
  sourceCommit: de12ce0f1fd85781d0d1045aeae85750ae6dc78a
---

{{DefaultAPISidebar("WebGL")}}

**WebGL 常量**是 [WebGL：web 中的 2D 的 3D 图形](/zh-CN/docs/Web/API/WebGL_API)里传给函数或由函数返回的一组取值。所有常量的类型都是 {{domxref("WebGL_API/Types", "GLenum")}}。

标准 WebGL 常量安装在 {{domxref("WebGLRenderingContext")}} 和 {{domxref("WebGL2RenderingContext")}} 对象上，因此你可以写成 `gl.CONSTANT_NAME`：

```js
const canvas = document.getElementById("myCanvas");
const gl = canvas.getContext("webgl");

gl.getParameter(gl.LINE_WIDTH);
```

[使用 WebGL 扩展](/zh-CN/docs/Web/API/WebGL_API/Using_Extensions) 也会提供一些常量。下文给出一份[列表](#webgl_扩展中定义的常量)。

```js
const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
```

[WebGL 教程](/zh-CN/docs/Web/API/WebGL_API/Tutorial) 提供了更多入门信息、示例和资源。

## 目录

- [标准 WebGL 1 常量](#标准_webgl_1_常量)
- [标准 WebGL 2 常量](#webgl_2_中定义的额外常量)
- [WebGL 扩展常量](#webgl_扩展中定义的常量)

## 标准 WebGL 1 常量

这些常量定义在 {{domxref("WebGLRenderingContext")}} 接口上。

### 清除缓冲区

传给 {{domxref("WebGLRenderingContext.clear()")}} 以清除缓冲区掩码的常量。

| 常量名               | 值         | 描述                                   |
| -------------------- | ---------- | -------------------------------------- |
| `DEPTH_BUFFER_BIT`   | 0x00000100 | 传给 `clear`，用于清除当前深度缓冲区。 |
| `STENCIL_BUFFER_BIT` | 0x00000400 | 传给 `clear`，用于清除当前模板缓冲区。 |
| `COLOR_BUFFER_BIT`   | 0x00004000 | 传给 `clear`，用于清除当前颜色缓冲区。 |

### 图元渲染

传给 {{domxref("WebGLRenderingContext.drawElements()")}} 或 {{domxref("WebGLRenderingContext.drawArrays()")}} 以指定要渲染的图元类型的常量。

| 常量名           | 值     | 描述                                                                                                          |
| ---------------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| `POINTS`         | 0x0000 | 传给 `drawElements` 或 `drawArrays`，用于绘制单个点。                                                         |
| `LINES`          | 0x0001 | 传给 `drawElements` 或 `drawArrays`，用于绘制线段。每个顶点与其后一个顶点相连。                               |
| `LINE_LOOP`      | 0x0002 | 传给 `drawElements` 或 `drawArrays`，用于绘制线段。每两个顶点当作一条独立线段。                               |
| `LINE_STRIP`     | 0x0003 | 传给 `drawElements` 或 `drawArrays`，用于从第一个顶点到最后一个顶点绘制一组相连的线段。                       |
| `TRIANGLES`      | 0x0004 | 传给 `drawElements` 或 `drawArrays`，用于绘制三角形。每三个顶点形成一个独立三角形。                           |
| `TRIANGLE_STRIP` | 0x0005 | 传给 `drawElements` 或 `drawArrays`，用于绘制一组相连的三角形。                                               |
| `TRIANGLE_FAN`   | 0x0006 | 传给 `drawElements` 或 `drawArrays`，用于绘制一组相连的三角形。每个顶点与前一个顶点以及扇形的第一个顶点相连。 |

### 混合模式

传给 {{domxref("WebGLRenderingContext.blendFunc()")}} 或 {{domxref("WebGLRenderingContext.blendFuncSeparate()")}} 以指定混合模式的常量（可同时作用于 RGB 和 alpha，也可分开指定）。

| 常量名                     | 值     | 描述                                                                                             |
| -------------------------- | ------ | ------------------------------------------------------------------------------------------------ |
| `ZERO`                     | 0      | 传给 `blendFunc` 或 `blendFuncSeparate`，用于关闭某个分量。                                      |
| `ONE`                      | 1      | 传给 `blendFunc` 或 `blendFuncSeparate`，用于打开某个分量。                                      |
| `SRC_COLOR`                | 0x0300 | 传给 `blendFunc` 或 `blendFuncSeparate`，将分量乘以源元素的颜色。                                |
| `ONE_MINUS_SRC_COLOR`      | 0x0301 | 传给 `blendFunc` 或 `blendFuncSeparate`，将分量乘以 1 减去源元素的颜色。                         |
| `SRC_ALPHA`                | 0x0302 | 传给 `blendFunc` 或 `blendFuncSeparate`，将分量乘以源的 alpha。                                  |
| `ONE_MINUS_SRC_ALPHA`      | 0x0303 | 传给 `blendFunc` 或 `blendFuncSeparate`，将分量乘以 1 减去源的 alpha。                           |
| `DST_ALPHA`                | 0x0304 | 传给 `blendFunc` 或 `blendFuncSeparate`，将分量乘以目标的 alpha。                                |
| `ONE_MINUS_DST_ALPHA`      | 0x0305 | 传给 `blendFunc` 或 `blendFuncSeparate`，将分量乘以 1 减去目标的 alpha。                         |
| `DST_COLOR`                | 0x0306 | 传给 `blendFunc` 或 `blendFuncSeparate`，将分量乘以目标的颜色。                                  |
| `ONE_MINUS_DST_COLOR`      | 0x0307 | 传给 `blendFunc` 或 `blendFuncSeparate`，将分量乘以 1 减去目标的颜色。                           |
| `SRC_ALPHA_SATURATE`       | 0x0308 | 传给 `blendFunc` 或 `blendFuncSeparate`，将分量乘以源 alpha 与 1 减去目标 alpha 两者中的较小值。 |
| `CONSTANT_COLOR`           | 0x8001 | 传给 `blendFunc` 或 `blendFuncSeparate`，指定常量颜色混合函数。                                  |
| `ONE_MINUS_CONSTANT_COLOR` | 0x8002 | 传给 `blendFunc` 或 `blendFuncSeparate`，指定 1 减去常量颜色的混合函数。                         |
| `CONSTANT_ALPHA`           | 0x8003 | 传给 `blendFunc` 或 `blendFuncSeparate`，指定常量 alpha 混合函数。                               |
| `ONE_MINUS_CONSTANT_ALPHA` | 0x8004 | 传给 `blendFunc` 或 `blendFuncSeparate`，指定 1 减去常量 alpha 的混合函数。                      |

### 混合方程

传给 {{domxref("WebGLRenderingContext.blendEquation()")}} 或 {{domxref("WebGLRenderingContext.blendEquationSeparate()")}} 以控制如何计算混合的常量（可同时作用于 RGB 和 alpha，也可分开指定）。

| 常量名                  | 值     | 描述                                                                                 |
| ----------------------- | ------ | ------------------------------------------------------------------------------------ |
| `FUNC_ADD`              | 0x8006 | 传给 `blendEquation` 或 `blendEquationSeparate`，设置加法混合函数。                  |
| `FUNC_SUBTRACT`         | 0x800A | 传给 `blendEquation` 或 `blendEquationSeparate`，指定减法混合函数（源 − 目标）。     |
| `FUNC_REVERSE_SUBTRACT` | 0x800B | 传给 `blendEquation` 或 `blendEquationSeparate`，指定反向减法混合函数（目标 − 源）。 |

### 获取 GL 参数信息

传给 {{domxref("WebGLRenderingContext.getParameter()")}} 以指定要返回哪些信息的常量。

| 常量名                             | 值     | 描述                                                                                                                                              |
| ---------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `BLEND_EQUATION`                   | 0x8009 | 传给 `getParameter`，获取当前 RGB 混合函数。                                                                                                      |
| `BLEND_EQUATION_RGB`               | 0x8009 | 传给 `getParameter`，获取当前 RGB 混合函数。与 `BLEND_EQUATION` 相同。                                                                            |
| `BLEND_EQUATION_ALPHA`             | 0x883D | 传给 `getParameter`，获取当前 alpha 混合函数。                                                                                                    |
| `BLEND_DST_RGB`                    | 0x80C8 | 传给 `getParameter`，获取当前目标 RGB 混合函数。                                                                                                  |
| `BLEND_SRC_RGB`                    | 0x80C9 | 传给 `getParameter`，获取当前源 RGB 混合函数。                                                                                                    |
| `BLEND_DST_ALPHA`                  | 0x80CA | 传给 `getParameter`，获取当前目标 alpha 混合函数。                                                                                                |
| `BLEND_SRC_ALPHA`                  | 0x80CB | 传给 `getParameter`，获取当前源 alpha 混合函数。                                                                                                  |
| `BLEND_COLOR`                      | 0x8005 | 传给 `getParameter`，返回当前混合颜色。                                                                                                           |
| `ARRAY_BUFFER_BINDING`             | 0x8894 | 传给 `getParameter`，获取数组缓冲区绑定。                                                                                                         |
| `ELEMENT_ARRAY_BUFFER_BINDING`     | 0x8895 | 传给 `getParameter`，获取当前元素数组缓冲区。                                                                                                     |
| `LINE_WIDTH`                       | 0x0B21 | 传给 `getParameter`，获取当前 `lineWidth`（由 `lineWidth` 方法设置）。                                                                            |
| `ALIASED_POINT_SIZE_RANGE`         | 0x846D | 传给 `getParameter`，获取用 `gl.POINTS` 绘制的点的当前大小。                                                                                      |
| `ALIASED_LINE_WIDTH_RANGE`         | 0x846E | 传给 `getParameter`，获取线条可用宽度范围。`getParameter` 方法随后返回一个含两个元素的数组：第一个元素是最小宽度，第二个元素是最大宽度。          |
| `CULL_FACE_MODE`                   | 0x0B45 | 传给 `getParameter`，获取 `cullFace` 的当前值。应返回 `FRONT`、`BACK` 或 `FRONT_AND_BACK`。                                                       |
| `FRONT_FACE`                       | 0x0B46 | 传给 `getParameter`，确定 `frontFace` 的当前值。应返回 `CW` 或 `CCW`。                                                                            |
| `DEPTH_RANGE`                      | 0x0B70 | 传给 `getParameter`，返回长度为 2 的浮点数组，表示当前深度范围。                                                                                  |
| `DEPTH_WRITEMASK`                  | 0x0B72 | 传给 `getParameter`，确定是否启用了深度写入掩码。                                                                                                 |
| `DEPTH_CLEAR_VALUE`                | 0x0B73 | 传给 `getParameter`，确定当前深度清除值。                                                                                                         |
| `DEPTH_FUNC`                       | 0x0B74 | 传给 `getParameter`，获取当前深度函数。返回 `NEVER`、`ALWAYS`、`LESS`、`EQUAL`、`LEQUAL`、`GREATER`、`GEQUAL` 或 `NOTEQUAL`。                     |
| `STENCIL_CLEAR_VALUE`              | 0x0B91 | 传给 `getParameter`，获取模板将被清除成的值。                                                                                                     |
| `STENCIL_FUNC`                     | 0x0B92 | 传给 `getParameter`，获取当前模板函数。返回 `NEVER`、`ALWAYS`、`LESS`、`EQUAL`、`LEQUAL`、`GREATER`、`GEQUAL` 或 `NOTEQUAL`。                     |
| `STENCIL_FAIL`                     | 0x0B94 | 传给 `getParameter`，获取当前模板失败函数。应返回 `KEEP`、`REPLACE`、`INCR`、`DECR`、`INVERT`、`INCR_WRAP` 或 `DECR_WRAP`。                       |
| `STENCIL_PASS_DEPTH_FAIL`          | 0x0B95 | 传给 `getParameter`，获取深度缓冲区测试失败时当前的模板失败函数。应返回 `KEEP`、`REPLACE`、`INCR`、`DECR`、`INVERT`、`INCR_WRAP` 或 `DECR_WRAP`。 |
| `STENCIL_PASS_DEPTH_PASS`          | 0x0B96 | 传给 `getParameter`，获取深度缓冲区测试通过时当前的模板失败函数。应返回 `KEEP`、`REPLACE`、`INCR`、`DECR`、`INVERT`、`INCR_WRAP` 或 `DECR_WRAP`。 |
| `STENCIL_REF`                      | 0x0B97 | 传给 `getParameter`，获取模板测试使用的参考值。                                                                                                   |
| `STENCIL_VALUE_MASK`               | 0x0B93 |                                                                                                                                                   |
| `STENCIL_WRITEMASK`                | 0x0B98 |                                                                                                                                                   |
| `STENCIL_BACK_FUNC`                | 0x8800 |                                                                                                                                                   |
| `STENCIL_BACK_FAIL`                | 0x8801 |                                                                                                                                                   |
| `STENCIL_BACK_PASS_DEPTH_FAIL`     | 0x8802 |                                                                                                                                                   |
| `STENCIL_BACK_PASS_DEPTH_PASS`     | 0x8803 |                                                                                                                                                   |
| `STENCIL_BACK_REF`                 | 0x8CA3 |                                                                                                                                                   |
| `STENCIL_BACK_VALUE_MASK`          | 0x8CA4 |                                                                                                                                                   |
| `STENCIL_BACK_WRITEMASK`           | 0x8CA5 |                                                                                                                                                   |
| `VIEWPORT`                         | 0x0BA2 | 返回含四个元素的 {{jsxref("Int32Array")}}，表示当前视口尺寸。                                                                                     |
| `SCISSOR_BOX`                      | 0x0C10 | 返回含四个元素的 {{jsxref("Int32Array")}}，表示当前裁剪盒尺寸。                                                                                   |
| `COLOR_CLEAR_VALUE`                | 0x0C22 |                                                                                                                                                   |
| `COLOR_WRITEMASK`                  | 0x0C23 |                                                                                                                                                   |
| `UNPACK_ALIGNMENT`                 | 0x0CF5 |                                                                                                                                                   |
| `PACK_ALIGNMENT`                   | 0x0D05 |                                                                                                                                                   |
| `MAX_TEXTURE_SIZE`                 | 0x0D33 |                                                                                                                                                   |
| `MAX_VIEWPORT_DIMS`                | 0x0D3A |                                                                                                                                                   |
| `SUBPIXEL_BITS`                    | 0x0D50 |                                                                                                                                                   |
| `RED_BITS`                         | 0x0D52 |                                                                                                                                                   |
| `GREEN_BITS`                       | 0x0D53 |                                                                                                                                                   |
| `BLUE_BITS`                        | 0x0D54 |                                                                                                                                                   |
| `ALPHA_BITS`                       | 0x0D55 |                                                                                                                                                   |
| `DEPTH_BITS`                       | 0x0D56 |                                                                                                                                                   |
| `STENCIL_BITS`                     | 0x0D57 |                                                                                                                                                   |
| `POLYGON_OFFSET_UNITS`             | 0x2A00 |                                                                                                                                                   |
| `POLYGON_OFFSET_FACTOR`            | 0x8038 |                                                                                                                                                   |
| `TEXTURE_BINDING_2D`               | 0x8069 |                                                                                                                                                   |
| `SAMPLE_BUFFERS`                   | 0x80A8 |                                                                                                                                                   |
| `SAMPLES`                          | 0x80A9 |                                                                                                                                                   |
| `SAMPLE_COVERAGE_VALUE`            | 0x80AA |                                                                                                                                                   |
| `SAMPLE_COVERAGE_INVERT`           | 0x80AB |                                                                                                                                                   |
| `COMPRESSED_TEXTURE_FORMATS`       | 0x86A3 |                                                                                                                                                   |
| `VENDOR`                           | 0x1F00 |                                                                                                                                                   |
| `RENDERER`                         | 0x1F01 |                                                                                                                                                   |
| `VERSION`                          | 0x1F02 |                                                                                                                                                   |
| `IMPLEMENTATION_COLOR_READ_TYPE`   | 0x8B9A |                                                                                                                                                   |
| `IMPLEMENTATION_COLOR_READ_FORMAT` | 0x8B9B |                                                                                                                                                   |
| `BROWSER_DEFAULT_WEBGL`            | 0x9244 |                                                                                                                                                   |

### 缓冲区

传给 {{domxref("WebGLRenderingContext.bufferData()")}}、{{domxref("WebGLRenderingContext.bufferSubData()")}}、{{domxref("WebGLRenderingContext.bindBuffer()")}} 或 {{domxref("WebGLRenderingContext.getBufferParameter()")}} 的常量。

| 常量名                 | 值     | 描述                                                              |
| ---------------------- | ------ | ----------------------------------------------------------------- |
| `STATIC_DRAW`          | 0x88E4 | 传给 `bufferData`，作为提示：缓冲区内容很可能经常使用且不常改变。 |
| `STREAM_DRAW`          | 0x88E0 | 传给 `bufferData`，作为提示：缓冲区内容很可能不常使用。           |
| `DYNAMIC_DRAW`         | 0x88E8 | 传给 `bufferData`，作为提示：缓冲区内容很可能经常使用且经常改变。 |
| `ARRAY_BUFFER`         | 0x8892 | 传给 `bindBuffer` 或 `bufferData`，指定正在使用的缓冲区类型。     |
| `ELEMENT_ARRAY_BUFFER` | 0x8893 | 传给 `bindBuffer` 或 `bufferData`，指定正在使用的缓冲区类型。     |
| `BUFFER_SIZE`          | 0x8764 | 传给 `getBufferParameter`，获取缓冲区的大小。                     |
| `BUFFER_USAGE`         | 0x8765 | 传给 `getBufferParameter`，获取创建缓冲区时传入的提示。           |

### 顶点属性

传给 {{domxref("WebGLRenderingContext.getVertexAttrib()")}} 的常量。

| 常量名                               | 值     | 描述                                       |
| ------------------------------------ | ------ | ------------------------------------------ |
| `CURRENT_VERTEX_ATTRIB`              | 0x8626 | 传给 `getVertexAttrib`，读回当前顶点属性。 |
| `VERTEX_ATTRIB_ARRAY_ENABLED`        | 0x8622 |                                            |
| `VERTEX_ATTRIB_ARRAY_SIZE`           | 0x8623 |                                            |
| `VERTEX_ATTRIB_ARRAY_STRIDE`         | 0x8624 |                                            |
| `VERTEX_ATTRIB_ARRAY_TYPE`           | 0x8625 |                                            |
| `VERTEX_ATTRIB_ARRAY_NORMALIZED`     | 0x886A |                                            |
| `VERTEX_ATTRIB_ARRAY_POINTER`        | 0x8645 |                                            |
| `VERTEX_ATTRIB_ARRAY_BUFFER_BINDING` | 0x889F |                                            |

### 剔除

传给 {{domxref("WebGLRenderingContext.cullFace()")}} 的常量。

| 常量名           | 值     | 描述                                                                                               |
| ---------------- | ------ | -------------------------------------------------------------------------------------------------- |
| `CULL_FACE`      | 0x0B44 | 传给 `enable` 和 `disable`，用于打开或关闭剔除。也可以和 `getParameter` 一起用，查询当前剔除方式。 |
| `FRONT`          | 0x0404 | 传给 `cullFace`，指定只剔除正面。                                                                  |
| `BACK`           | 0x0405 | 传给 `cullFace`，指定只剔除背面。                                                                  |
| `FRONT_AND_BACK` | 0x0408 | 传给 `cullFace`，指定正面和背面都剔除。                                                            |

### 启用和禁用

传给 {{domxref("WebGLRenderingContext.enable()")}} 或 {{domxref("WebGLRenderingContext.disable()")}} 的常量。

| 常量名                     | 值     | 描述                                                                                                                                                 |
| -------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `BLEND`                    | 0x0BE2 | 传给 `enable` 和 `disable`，用于打开或关闭混合。也可以和 `getParameter` 一起用，查询当前混合方式。                                                   |
| `DEPTH_TEST`               | 0x0B71 | 传给 `enable` 和 `disable`，用于打开或关闭深度测试。也可以和 `getParameter` 一起用，查询深度测试。                                                   |
| `DITHER`                   | 0x0BD0 | 传给 `enable` 和 `disable`，用于打开或关闭抖动。也可以和 `getParameter` 一起用，查询当前抖动方式。                                                   |
| `POLYGON_OFFSET_FILL`      | 0x8037 | 传给 `enable` 和 `disable`，用于打开或关闭多边形偏移。适用于渲染隐藏线图像、贴花以及带高亮边缘的实体。也可以和 `getParameter` 一起用，查询裁剪测试。 |
| `SAMPLE_ALPHA_TO_COVERAGE` | 0x809E | 传给 `enable` 和 `disable`，用于打开或关闭 alpha 到覆盖率。用于多重采样 alpha 通道。                                                                 |
| `SAMPLE_COVERAGE`          | 0x80A0 | 传给 `enable` 和 `disable`，用于打开或关闭采样覆盖率。用于多重采样。                                                                                 |
| `SCISSOR_TEST`             | 0x0C11 | 传给 `enable` 和 `disable`，用于打开或关闭裁剪测试。也可以和 `getParameter` 一起用，查询裁剪测试。                                                   |
| `STENCIL_TEST`             | 0x0B90 | 传给 `enable` 和 `disable`，用于打开或关闭模板测试。也可以和 `getParameter` 一起用，查询模板测试。                                                   |

### 错误

{{domxref("WebGLRenderingContext.getError()")}} 返回的常量。

| 常量名               | 值     | 描述                 |
| -------------------- | ------ | -------------------- |
| `NO_ERROR`           | 0      | 由 `getError` 返回。 |
| `INVALID_ENUM`       | 0x0500 | 由 `getError` 返回。 |
| `INVALID_VALUE`      | 0x0501 | 由 `getError` 返回。 |
| `INVALID_OPERATION`  | 0x0502 | 由 `getError` 返回。 |
| `OUT_OF_MEMORY`      | 0x0505 | 由 `getError` 返回。 |
| `CONTEXT_LOST_WEBGL` | 0x9242 | 由 `getError` 返回。 |

### 正面方向

传给 {{domxref("WebGLRenderingContext.frontFace()")}} 的常量。

| 常量名 | 值     | 描述                                                 |
| ------ | ------ | ---------------------------------------------------- |
| `CW`   | 0x0900 | 传给 `frontFace`，指定多边形的正面按顺时针方向绘制。 |
| `CCW`  | 0x0901 | 传给 `frontFace`，指定多边形的正面按逆时针方向绘制。 |

### 提示

传给 {{domxref("WebGLRenderingContext.hint()")}} 的常量。

| 常量名                 | 值     | 描述                                                                                                |
| ---------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| `DONT_CARE`            | 0x1100 | 对此行为没有偏好。                                                                                  |
| `FASTEST`              | 0x1101 | 应使用最高效的行为。                                                                                |
| `NICEST`               | 0x1102 | 应使用最正确或最高质量的选项。                                                                      |
| `GENERATE_MIPMAP_HINT` | 0x8192 | 使用 {{domxref("WebGLRenderingContext.generateMipmap()")}} 生成 mipmap 图像时，关于过滤质量的提示。 |

### 数据类型

| 常量名           | 值     | 描述 |
| ---------------- | ------ | ---- |
| `BYTE`           | 0x1400 |      |
| `UNSIGNED_BYTE`  | 0x1401 |      |
| `SHORT`          | 0x1402 |      |
| `UNSIGNED_SHORT` | 0x1403 |      |
| `INT`            | 0x1404 |      |
| `UNSIGNED_INT`   | 0x1405 |      |
| `FLOAT`          | 0x1406 |      |

### 像素格式

| 常量名            | 值     | 描述 |
| ----------------- | ------ | ---- |
| `DEPTH_COMPONENT` | 0x1902 |      |
| `ALPHA`           | 0x1906 |      |
| `RGB`             | 0x1907 |      |
| `RGBA`            | 0x1908 |      |
| `LUMINANCE`       | 0x1909 |      |
| `LUMINANCE_ALPHA` | 0x190A |      |

### 像素类型

| 常量名                   | 值     | 描述 |
| ------------------------ | ------ | ---- |
| `UNSIGNED_BYTE`          | 0x1401 |      |
| `UNSIGNED_SHORT_4_4_4_4` | 0x8033 |      |
| `UNSIGNED_SHORT_5_5_5_1` | 0x8034 |      |
| `UNSIGNED_SHORT_5_6_5`   | 0x8363 |      |

### 着色器

传给 {{domxref("WebGLRenderingContext.createShader()")}} 或 {{domxref("WebGLRenderingContext.getShaderParameter()")}} 的常量。

| 常量名                             | 值     | 描述                                                                                                                               |
| ---------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `FRAGMENT_SHADER`                  | 0x8B30 | 传给 `createShader`，定义片元着色器。                                                                                              |
| `VERTEX_SHADER`                    | 0x8B31 | 传给 `createShader`，定义顶点着色器。                                                                                              |
| `COMPILE_STATUS`                   | 0x8B81 | 传给 `getShaderParameter`，获取编译状态。着色器未编译成功时返回 false。随后可以查询 `getShaderInfoLog` 以找到确切错误。            |
| `DELETE_STATUS`                    | 0x8B80 | 传给 `getShaderParameter`，确定着色器是否已通过 `deleteShader` 删除。已删除则返回 true，否则返回 false。                           |
| `LINK_STATUS`                      | 0x8B82 | 调用 `linkProgram` 后传给 `getProgramParameter`，确定程序是否正确链接。有错误则返回 false。使用 `getProgramInfoLog` 查找确切错误。 |
| `VALIDATE_STATUS`                  | 0x8B83 | 调用 `validateProgram` 后传给 `getProgramParameter`，确定其是否有效。发现错误则返回 false。                                        |
| `ATTACHED_SHADERS`                 | 0x8B85 | 调用 `attachShader` 后传给 `getProgramParameter`，确定着色器是否正确附加。发生错误则返回 false。                                   |
| `ACTIVE_ATTRIBUTES`                | 0x8B89 | 传给 `getProgramParameter`，获取程序中活动的属性数量。                                                                             |
| `ACTIVE_UNIFORMS`                  | 0x8B86 | 传给 `getProgramParameter`，获取程序中活动的统一变量数量。                                                                         |
| `MAX_VERTEX_ATTRIBS`               | 0x8869 | 顶点属性列表中可能的最大条目数。                                                                                                   |
| `MAX_VERTEX_UNIFORM_VECTORS`       | 0x8DFB |                                                                                                                                    |
| `MAX_VARYING_VECTORS`              | 0x8DFC |                                                                                                                                    |
| `MAX_COMBINED_TEXTURE_IMAGE_UNITS` | 0x8B4D |                                                                                                                                    |
| `MAX_VERTEX_TEXTURE_IMAGE_UNITS`   | 0x8B4C |                                                                                                                                    |
| `MAX_TEXTURE_IMAGE_UNITS`          | 0x8872 | 实现相关的最大纹理单元数。至少为 8。                                                                                               |
| `MAX_FRAGMENT_UNIFORM_VECTORS`     | 0x8DFD |                                                                                                                                    |
| `SHADER_TYPE`                      | 0x8B4F |                                                                                                                                    |
| `SHADING_LANGUAGE_VERSION`         | 0x8B8C |                                                                                                                                    |
| `CURRENT_PROGRAM`                  | 0x8B8D |                                                                                                                                    |

### 深度或模板测试

传给 {{domxref("WebGLRenderingContext.depthFunc()")}} 或 {{domxref("WebGLRenderingContext.stencilFunc()")}} 的常量。

| 常量名     | 值     | 描述                                                                                          |
| ---------- | ------ | --------------------------------------------------------------------------------------------- |
| `NEVER`    | 0x0200 | 传给 `depthFunction` 或 `stencilFunction`，指定深度或模板测试永不通过，即不会绘制任何内容。   |
| `LESS`     | 0x0201 | 传给 `depthFunction` 或 `stencilFunction`，指定新深度值小于已存储值时测试通过。               |
| `EQUAL`    | 0x0202 | 传给 `depthFunction` 或 `stencilFunction`，指定新深度值等于已存储值时测试通过。               |
| `LEQUAL`   | 0x0203 | 传给 `depthFunction` 或 `stencilFunction`，指定新深度值小于或等于已存储值时测试通过。         |
| `GREATER`  | 0x0204 | 传给 `depthFunction` 或 `stencilFunction`，指定新深度值大于已存储值时测试通过。               |
| `NOTEQUAL` | 0x0205 | 传给 `depthFunction` 或 `stencilFunction`，指定新深度值不等于已存储值时测试通过。             |
| `GEQUAL`   | 0x0206 | 传给 `depthFunction` 或 `stencilFunction`，指定新深度值大于或等于已存储值时测试通过。         |
| `ALWAYS`   | 0x0207 | 传给 `depthFunction` 或 `stencilFunction`，指定深度或模板测试总是通过，即像素按绘制顺序绘制。 |

### 模板操作

传给 {{domxref("WebGLRenderingContext.stencilOp()")}} 的常量。

| 常量名      | 值     | 描述 |
| ----------- | ------ | ---- |
| `KEEP`      | 0x1E00 |      |
| `REPLACE`   | 0x1E01 |      |
| `INCR`      | 0x1E02 |      |
| `DECR`      | 0x1E03 |      |
| `INVERT`    | 0x150A |      |
| `INCR_WRAP` | 0x8507 |      |
| `DECR_WRAP` | 0x8508 |      |

### 纹理

传给 {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameteri()")}}、{{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameterf()")}}、{{domxref("WebGLRenderingContext.bindTexture()")}}、{{domxref("WebGLRenderingContext.texImage2D()")}} 以及其他方法的常量。

| 常量名                        | 值              | 描述                 |
| ----------------------------- | --------------- | -------------------- |
| `NEAREST`                     | 0x2600          |                      |
| `LINEAR`                      | 0x2601          |                      |
| `NEAREST_MIPMAP_NEAREST`      | 0x2700          |                      |
| `LINEAR_MIPMAP_NEAREST`       | 0x2701          |                      |
| `NEAREST_MIPMAP_LINEAR`       | 0x2702          |                      |
| `LINEAR_MIPMAP_LINEAR`        | 0x2703          |                      |
| `TEXTURE_MAG_FILTER`          | 0x2800          |                      |
| `TEXTURE_MIN_FILTER`          | 0x2801          |                      |
| `TEXTURE_WRAP_S`              | 0x2802          |                      |
| `TEXTURE_WRAP_T`              | 0x2803          |                      |
| `TEXTURE_2D`                  | 0x0DE1          |                      |
| `TEXTURE`                     | 0x1702          |                      |
| `TEXTURE_CUBE_MAP`            | 0x8513          |                      |
| `TEXTURE_BINDING_CUBE_MAP`    | 0x8514          |                      |
| `TEXTURE_CUBE_MAP_POSITIVE_X` | 0x8515          |                      |
| `TEXTURE_CUBE_MAP_NEGATIVE_X` | 0x8516          |                      |
| `TEXTURE_CUBE_MAP_POSITIVE_Y` | 0x8517          |                      |
| `TEXTURE_CUBE_MAP_NEGATIVE_Y` | 0x8518          |                      |
| `TEXTURE_CUBE_MAP_POSITIVE_Z` | 0x8519          |                      |
| `TEXTURE_CUBE_MAP_NEGATIVE_Z` | 0x851A          |                      |
| `MAX_CUBE_MAP_TEXTURE_SIZE`   | 0x851C          |                      |
| `TEXTURE0 - 31`               | 0x84C0 - 0x84DF | 一个纹理单元。       |
| `ACTIVE_TEXTURE`              | 0x84E0          | 当前活动的纹理单元。 |
| `REPEAT`                      | 0x2901          |                      |
| `CLAMP_TO_EDGE`               | 0x812F          |                      |
| `MIRRORED_REPEAT`             | 0x8370          |                      |

### 统一变量类型

| 常量名         | 值     | 描述 |
| -------------- | ------ | ---- |
| `FLOAT_VEC2`   | 0x8B50 |      |
| `FLOAT_VEC3`   | 0x8B51 |      |
| `FLOAT_VEC4`   | 0x8B52 |      |
| `INT_VEC2`     | 0x8B53 |      |
| `INT_VEC3`     | 0x8B54 |      |
| `INT_VEC4`     | 0x8B55 |      |
| `BOOL`         | 0x8B56 |      |
| `BOOL_VEC2`    | 0x8B57 |      |
| `BOOL_VEC3`    | 0x8B58 |      |
| `BOOL_VEC4`    | 0x8B59 |      |
| `FLOAT_MAT2`   | 0x8B5A |      |
| `FLOAT_MAT3`   | 0x8B5B |      |
| `FLOAT_MAT4`   | 0x8B5C |      |
| `SAMPLER_2D`   | 0x8B5E |      |
| `SAMPLER_CUBE` | 0x8B60 |      |

### 着色器精度指定类型

| 常量名         | 值     | 描述 |
| -------------- | ------ | ---- |
| `LOW_FLOAT`    | 0x8DF0 |      |
| `MEDIUM_FLOAT` | 0x8DF1 |      |
| `HIGH_FLOAT`   | 0x8DF2 |      |
| `LOW_INT`      | 0x8DF3 |      |
| `MEDIUM_INT`   | 0x8DF4 |      |
| `HIGH_INT`     | 0x8DF5 |      |

### 帧缓冲区和渲染缓冲区

| 常量名                                         | 值     | 描述 |
| ---------------------------------------------- | ------ | ---- |
| `FRAMEBUFFER`                                  | 0x8D40 |      |
| `RENDERBUFFER`                                 | 0x8D41 |      |
| `RGBA4`                                        | 0x8056 |      |
| `RGB5_A1`                                      | 0x8057 |      |
| `RGB565`                                       | 0x8D62 |      |
| `DEPTH_COMPONENT16`                            | 0x81A5 |      |
| `STENCIL_INDEX8`                               | 0x8D48 |      |
| `DEPTH_STENCIL`                                | 0x84F9 |      |
| `RENDERBUFFER_WIDTH`                           | 0x8D42 |      |
| `RENDERBUFFER_HEIGHT`                          | 0x8D43 |      |
| `RENDERBUFFER_INTERNAL_FORMAT`                 | 0x8D44 |      |
| `RENDERBUFFER_RED_SIZE`                        | 0x8D50 |      |
| `RENDERBUFFER_GREEN_SIZE`                      | 0x8D51 |      |
| `RENDERBUFFER_BLUE_SIZE`                       | 0x8D52 |      |
| `RENDERBUFFER_ALPHA_SIZE`                      | 0x8D53 |      |
| `RENDERBUFFER_DEPTH_SIZE`                      | 0x8D54 |      |
| `RENDERBUFFER_STENCIL_SIZE`                    | 0x8D55 |      |
| `FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE`           | 0x8CD0 |      |
| `FRAMEBUFFER_ATTACHMENT_OBJECT_NAME`           | 0x8CD1 |      |
| `FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL`         | 0x8CD2 |      |
| `FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE` | 0x8CD3 |      |
| `COLOR_ATTACHMENT0`                            | 0x8CE0 |      |
| `DEPTH_ATTACHMENT`                             | 0x8D00 |      |
| `STENCIL_ATTACHMENT`                           | 0x8D20 |      |
| `DEPTH_STENCIL_ATTACHMENT`                     | 0x821A |      |
| `NONE`                                         | 0      |      |
| `FRAMEBUFFER_COMPLETE`                         | 0x8CD5 |      |
| `FRAMEBUFFER_INCOMPLETE_ATTACHMENT`            | 0x8CD6 |      |
| `FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT`    | 0x8CD7 |      |
| `FRAMEBUFFER_INCOMPLETE_DIMENSIONS`            | 0x8CD9 |      |
| `FRAMEBUFFER_UNSUPPORTED`                      | 0x8CDD |      |
| `FRAMEBUFFER_BINDING`                          | 0x8CA6 |      |
| `RENDERBUFFER_BINDING`                         | 0x8CA7 |      |
| `MAX_RENDERBUFFER_SIZE`                        | 0x84E8 |      |
| `INVALID_FRAMEBUFFER_OPERATION`                | 0x0506 |      |

### 像素存储模式

传给 {{domxref("WebGLRenderingContext.pixelStorei()")}} 的常量。

| 常量名                               | 值     | 描述 |
| ------------------------------------ | ------ | ---- |
| `UNPACK_FLIP_Y_WEBGL`                | 0x9240 |      |
| `UNPACK_PREMULTIPLY_ALPHA_WEBGL`     | 0x9241 |      |
| `UNPACK_COLORSPACE_CONVERSION_WEBGL` | 0x9243 |      |

## WebGL 2 中定义的额外常量

这些常量定义在 {{domxref("WebGL2RenderingContext")}} 接口上。所有 WebGL 1 常量在 WebGL 2 上下文中同样可用。

### 获取 GL 参数信息

传给 {{domxref("WebGLRenderingContext.getParameter()")}} 以指定要返回哪些信息的常量。

| 常量名                            | 值     | 描述 |
| --------------------------------- | ------ | ---- |
| `READ_BUFFER`                     | 0x0C02 |      |
| `UNPACK_ROW_LENGTH`               | 0x0CF2 |      |
| `UNPACK_SKIP_ROWS`                | 0x0CF3 |      |
| `UNPACK_SKIP_PIXELS`              | 0x0CF4 |      |
| `PACK_ROW_LENGTH`                 | 0x0D02 |      |
| `PACK_SKIP_ROWS`                  | 0x0D03 |      |
| `PACK_SKIP_PIXELS`                | 0x0D04 |      |
| `TEXTURE_BINDING_3D`              | 0x806A |      |
| `UNPACK_SKIP_IMAGES`              | 0x806D |      |
| `UNPACK_IMAGE_HEIGHT`             | 0x806E |      |
| `MAX_3D_TEXTURE_SIZE`             | 0x8073 |      |
| `MAX_ELEMENTS_VERTICES`           | 0x80E8 |      |
| `MAX_ELEMENTS_INDICES`            | 0x80E9 |      |
| `MAX_TEXTURE_LOD_BIAS`            | 0x84FD |      |
| `MAX_FRAGMENT_UNIFORM_COMPONENTS` | 0x8B49 |      |
| `MAX_VERTEX_UNIFORM_COMPONENTS`   | 0x8B4A |      |
| `MAX_ARRAY_TEXTURE_LAYERS`        | 0x88FF |      |
| `MIN_PROGRAM_TEXEL_OFFSET`        | 0x8904 |      |
| `MAX_PROGRAM_TEXEL_OFFSET`        | 0x8905 |      |
| `MAX_VARYING_COMPONENTS`          | 0x8B4B |      |
| `FRAGMENT_SHADER_DERIVATIVE_HINT` | 0x8B8B |      |
| `RASTERIZER_DISCARD`              | 0x8C89 |      |
| `VERTEX_ARRAY_BINDING`            | 0x85B5 |      |
| `MAX_VERTEX_OUTPUT_COMPONENTS`    | 0x9122 |      |
| `MAX_FRAGMENT_INPUT_COMPONENTS`   | 0x9125 |      |
| `MAX_SERVER_WAIT_TIMEOUT`         | 0x9111 |      |
| `MAX_ELEMENT_INDEX`               | 0x8D6B |      |

### 纹理

传给 {{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameteri()")}}、{{domxref("WebGLRenderingContext.texParameter", "WebGLRenderingContext.texParameterf()")}}、{{domxref("WebGLRenderingContext.bindTexture()")}}、{{domxref("WebGLRenderingContext.texImage2D()")}} 以及其他方法的常量。

| 常量名                     | 值     | 描述 |
| -------------------------- | ------ | ---- |
| `RED`                      | 0x1903 |      |
| `RGB8`                     | 0x8051 |      |
| `RGBA8`                    | 0x8058 |      |
| `RGB10_A2`                 | 0x8059 |      |
| `TEXTURE_3D`               | 0x806F |      |
| `TEXTURE_WRAP_R`           | 0x8072 |      |
| `TEXTURE_MIN_LOD`          | 0x813A |      |
| `TEXTURE_MAX_LOD`          | 0x813B |      |
| `TEXTURE_BASE_LEVEL`       | 0x813C |      |
| `TEXTURE_MAX_LEVEL`        | 0x813D |      |
| `TEXTURE_COMPARE_MODE`     | 0x884C |      |
| `TEXTURE_COMPARE_FUNC`     | 0x884D |      |
| `SRGB`                     | 0x8C40 |      |
| `SRGB8`                    | 0x8C41 |      |
| `SRGB8_ALPHA8`             | 0x8C43 |      |
| `COMPARE_REF_TO_TEXTURE`   | 0x884E |      |
| `RGBA32F`                  | 0x8814 |      |
| `RGB32F`                   | 0x8815 |      |
| `RGBA16F`                  | 0x881A |      |
| `RGB16F`                   | 0x881B |      |
| `TEXTURE_2D_ARRAY`         | 0x8C1A |      |
| `TEXTURE_BINDING_2D_ARRAY` | 0x8C1D |      |
| `R11F_G11F_B10F`           | 0x8C3A |      |
| `RGB9_E5`                  | 0x8C3D |      |
| `RGBA32UI`                 | 0x8D70 |      |
| `RGB32UI`                  | 0x8D71 |      |
| `RGBA16UI`                 | 0x8D76 |      |
| `RGB16UI`                  | 0x8D77 |      |
| `RGBA8UI`                  | 0x8D7C |      |
| `RGB8UI`                   | 0x8D7D |      |
| `RGBA32I`                  | 0x8D82 |      |
| `RGB32I`                   | 0x8D83 |      |
| `RGBA16I`                  | 0x8D88 |      |
| `RGB16I`                   | 0x8D89 |      |
| `RGBA8I`                   | 0x8D8E |      |
| `RGB8I`                    | 0x8D8F |      |
| `RED_INTEGER`              | 0x8D94 |      |
| `RGB_INTEGER`              | 0x8D98 |      |
| `RGBA_INTEGER`             | 0x8D99 |      |
| `R8`                       | 0x8229 |      |
| `RG8`                      | 0x822B |      |
| R16F                       | 0x822D |      |
| R32F                       | 0x822E |      |
| RG16F                      | 0x822F |      |
| RG32F                      | 0x8230 |      |
| R8I                        | 0x8231 |      |
| R8UI                       | 0x8232 |      |
| R16I                       | 0x8233 |      |
| R16UI                      | 0x8234 |      |
| R32I                       | 0x8235 |      |
| R32UI                      | 0x8236 |      |
| RG8I                       | 0x8237 |      |
| RG8UI                      | 0x8238 |      |
| RG16I                      | 0x8239 |      |
| RG16UI                     | 0x823A |      |
| RG32I                      | 0x823B |      |
| RG32UI                     | 0x823C |      |
| R8_SNORM                   | 0x8F94 |      |
| RG8_SNORM                  | 0x8F95 |      |
| RGB8_SNORM                 | 0x8F96 |      |
| RGBA8_SNORM                | 0x8F97 |      |
| `RGB10_A2UI`               | 0x906F |      |
| `TEXTURE_IMMUTABLE_FORMAT` | 0x912F |      |
| `TEXTURE_IMMUTABLE_LEVELS` | 0x82DF |      |

### 像素类型

| 常量名                           | 值     | 描述 |
| -------------------------------- | ------ | ---- |
| `UNSIGNED_INT_2_10_10_10_REV`    | 0x8368 |      |
| `UNSIGNED_INT_10F_11F_11F_REV`   | 0x8C3B |      |
| `UNSIGNED_INT_5_9_9_9_REV`       | 0x8C3E |      |
| `FLOAT_32_UNSIGNED_INT_24_8_REV` | 0x8DAD |      |
| UNSIGNED_INT_24_8                | 0x84FA |      |
| `HALF_FLOAT`                     | 0x140B |      |
| `RG`                             | 0x8227 |      |
| `RG_INTEGER`                     | 0x8228 |      |
| `INT_2_10_10_10_REV`             | 0x8D9F |      |

### 查询

| 常量名                            | 值     | 描述 |
| --------------------------------- | ------ | ---- |
| `CURRENT_QUERY`                   | 0x8865 |      |
| `QUERY_RESULT`                    | 0x8866 |      |
| `QUERY_RESULT_AVAILABLE`          | 0x8867 |      |
| `ANY_SAMPLES_PASSED`              | 0x8C2F |      |
| `ANY_SAMPLES_PASSED_CONSERVATIVE` | 0x8D6A |      |

### 绘制缓冲区

| 常量名                  | 值     | 描述 |
| ----------------------- | ------ | ---- |
| `MAX_DRAW_BUFFERS`      | 0x8824 |      |
| `DRAW_BUFFER0`          | 0x8825 |      |
| `DRAW_BUFFER1`          | 0x8826 |      |
| `DRAW_BUFFER2`          | 0x8827 |      |
| `DRAW_BUFFER3`          | 0x8828 |      |
| `DRAW_BUFFER4`          | 0x8829 |      |
| `DRAW_BUFFER5`          | 0x882A |      |
| `DRAW_BUFFER6`          | 0x882B |      |
| `DRAW_BUFFER7`          | 0x882C |      |
| `DRAW_BUFFER8`          | 0x882D |      |
| `DRAW_BUFFER9`          | 0x882E |      |
| `DRAW_BUFFER10`         | 0x882F |      |
| `DRAW_BUFFER11`         | 0x8830 |      |
| `DRAW_BUFFER12`         | 0x8831 |      |
| `DRAW_BUFFER13`         | 0x8832 |      |
| `DRAW_BUFFER14`         | 0x8833 |      |
| `DRAW_BUFFER15`         | 0x8834 |      |
| `MAX_COLOR_ATTACHMENTS` | 0x8CDF |      |
| `COLOR_ATTACHMENT1`     | 0x8CE1 |      |
| `COLOR_ATTACHMENT2`     | 0x8CE2 |      |
| `COLOR_ATTACHMENT3`     | 0x8CE3 |      |
| `COLOR_ATTACHMENT4`     | 0x8CE4 |      |
| `COLOR_ATTACHMENT5`     | 0x8CE5 |      |
| `COLOR_ATTACHMENT6`     | 0x8CE6 |      |
| `COLOR_ATTACHMENT7`     | 0x8CE7 |      |
| `COLOR_ATTACHMENT8`     | 0x8CE8 |      |
| `COLOR_ATTACHMENT9`     | 0x8CE9 |      |
| `COLOR_ATTACHMENT10`    | 0x8CEA |      |
| `COLOR_ATTACHMENT11`    | 0x8CEB |      |
| `COLOR_ATTACHMENT12`    | 0x8CEC |      |
| `COLOR_ATTACHMENT13`    | 0x8CED |      |
| `COLOR_ATTACHMENT14`    | 0x8CEE |      |
| `COLOR_ATTACHMENT15`    | 0x8CEF |      |

### 采样器

| 常量名                          | 值     | 描述 |
| ------------------------------- | ------ | ---- |
| `SAMPLER_3D`                    | 0x8B5F |      |
| `SAMPLER_2D_SHADOW`             | 0x8B62 |      |
| `SAMPLER_2D_ARRAY`              | 0x8DC1 |      |
| `SAMPLER_2D_ARRAY_SHADOW`       | 0x8DC4 |      |
| `SAMPLER_CUBE_SHADOW`           | 0x8DC5 |      |
| `INT_SAMPLER_2D`                | 0x8DCA |      |
| `INT_SAMPLER_3D`                | 0x8DCB |      |
| `INT_SAMPLER_CUBE`              | 0x8DCC |      |
| `INT_SAMPLER_2D_ARRAY`          | 0x8DCF |      |
| `UNSIGNED_INT_SAMPLER_2D`       | 0x8DD2 |      |
| `UNSIGNED_INT_SAMPLER_3D`       | 0x8DD3 |      |
| `UNSIGNED_INT_SAMPLER_CUBE`     | 0x8DD4 |      |
| `UNSIGNED_INT_SAMPLER_2D_ARRAY` | 0x8DD7 |      |
| `MAX_SAMPLES`                   | 0x8D57 |      |
| `SAMPLER_BINDING`               | 0x8919 |      |

### 缓冲区

| 常量名                        | 值     | 描述 |
| ----------------------------- | ------ | ---- |
| `PIXEL_PACK_BUFFER`           | 0x88EB |      |
| `PIXEL_UNPACK_BUFFER`         | 0x88EC |      |
| `PIXEL_PACK_BUFFER_BINDING`   | 0x88ED |      |
| `PIXEL_UNPACK_BUFFER_BINDING` | 0x88EF |      |
| `COPY_READ_BUFFER`            | 0x8F36 |      |
| `COPY_WRITE_BUFFER`           | 0x8F37 |      |
| `COPY_READ_BUFFER_BINDING`    | 0x8F36 |      |
| `COPY_WRITE_BUFFER_BINDING`   | 0x8F37 |      |

### 数据类型

| 常量名                | 值     | 描述 |
| --------------------- | ------ | ---- |
| `FLOAT_MAT2x3`        | 0x8B65 |      |
| `FLOAT_MAT2x4`        | 0x8B66 |      |
| `FLOAT_MAT3x2`        | 0x8B67 |      |
| `FLOAT_MAT3x4`        | 0x8B68 |      |
| `FLOAT_MAT4x2`        | 0x8B69 |      |
| `FLOAT_MAT4x3`        | 0x8B6A |      |
| `UNSIGNED_INT_VEC2`   | 0x8DC6 |      |
| `UNSIGNED_INT_VEC3`   | 0x8DC7 |      |
| `UNSIGNED_INT_VEC4`   | 0x8DC8 |      |
| `UNSIGNED_NORMALIZED` | 0x8C17 |      |
| `SIGNED_NORMALIZED`   | 0x8F9C |      |

### 顶点属性

| 常量名                        | 值     | 描述 |
| ----------------------------- | ------ | ---- |
| `VERTEX_ATTRIB_ARRAY_INTEGER` | 0x88FD |      |
| `VERTEX_ATTRIB_ARRAY_DIVISOR` | 0x88FE |      |

### 变换反馈

| 常量名                                          | 值     | 描述 |
| ----------------------------------------------- | ------ | ---- |
| `TRANSFORM_FEEDBACK_BUFFER_MODE`                | 0x8C7F |      |
| `MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS`    | 0x8C80 |      |
| `TRANSFORM_FEEDBACK_VARYINGS`                   | 0x8C83 |      |
| `TRANSFORM_FEEDBACK_BUFFER_START`               | 0x8C84 |      |
| `TRANSFORM_FEEDBACK_BUFFER_SIZE`                | 0x8C85 |      |
| `TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN`         | 0x8C88 |      |
| `MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS` | 0x8C8A |      |
| `MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS`       | 0x8C8B |      |
| `INTERLEAVED_ATTRIBS`                           | 0x8C8C |      |
| `SEPARATE_ATTRIBS`                              | 0x8C8D |      |
| `TRANSFORM_FEEDBACK_BUFFER`                     | 0x8C8E |      |
| `TRANSFORM_FEEDBACK_BUFFER_BINDING`             | 0x8C8F |      |
| `TRANSFORM_FEEDBACK`                            | 0x8E22 |      |
| `TRANSFORM_FEEDBACK_PAUSED`                     | 0x8E23 |      |
| `TRANSFORM_FEEDBACK_ACTIVE`                     | 0x8E24 |      |
| `TRANSFORM_FEEDBACK_BINDING`                    | 0x8E25 |      |

### 帧缓冲区和渲染缓冲区

| 常量名                                  | 值     | 描述 |
| --------------------------------------- | ------ | ---- |
| `FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING` | 0x8210 |      |
| `FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE` | 0x8211 |      |
| `FRAMEBUFFER_ATTACHMENT_RED_SIZE`       | 0x8212 |      |
| `FRAMEBUFFER_ATTACHMENT_GREEN_SIZE`     | 0x8213 |      |
| `FRAMEBUFFER_ATTACHMENT_BLUE_SIZE`      | 0x8214 |      |
| `FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE`     | 0x8215 |      |
| `FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE`     | 0x8216 |      |
| `FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE`   | 0x8217 |      |
| `FRAMEBUFFER_DEFAULT`                   | 0x8218 |      |
| `DEPTH_STENCIL_ATTACHMENT`              | 0x821A |      |
| `DEPTH_STENCIL`                         | 0x84F9 |      |
| `DEPTH24_STENCIL8`                      | 0x88F0 |      |
| `DRAW_FRAMEBUFFER_BINDING`              | 0x8CA6 |      |
| `READ_FRAMEBUFFER`                      | 0x8CA8 |      |
| `DRAW_FRAMEBUFFER`                      | 0x8CA9 |      |
| `READ_FRAMEBUFFER_BINDING`              | 0x8CAA |      |
| `RENDERBUFFER_SAMPLES`                  | 0x8CAB |      |
| `FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER`  | 0x8CD4 |      |
| `FRAMEBUFFER_INCOMPLETE_MULTISAMPLE`    | 0x8D56 |      |

### 统一变量

| 常量名                                        | 值     | 描述 |
| --------------------------------------------- | ------ | ---- |
| `UNIFORM_BUFFER`                              | 0x8A11 |      |
| `UNIFORM_BUFFER_BINDING`                      | 0x8A28 |      |
| `UNIFORM_BUFFER_START`                        | 0x8A29 |      |
| `UNIFORM_BUFFER_SIZE`                         | 0x8A2A |      |
| `MAX_VERTEX_UNIFORM_BLOCKS`                   | 0x8A2B |      |
| `MAX_FRAGMENT_UNIFORM_BLOCKS`                 | 0x8A2D |      |
| `MAX_COMBINED_UNIFORM_BLOCKS`                 | 0x8A2E |      |
| `MAX_UNIFORM_BUFFER_BINDINGS`                 | 0x8A2F |      |
| `MAX_UNIFORM_BLOCK_SIZE`                      | 0x8A30 |      |
| `MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS`      | 0x8A31 |      |
| `MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS`    | 0x8A33 |      |
| `UNIFORM_BUFFER_OFFSET_ALIGNMENT`             | 0x8A34 |      |
| `ACTIVE_UNIFORM_BLOCKS`                       | 0x8A36 |      |
| `UNIFORM_TYPE`                                | 0x8A37 |      |
| `UNIFORM_SIZE`                                | 0x8A38 |      |
| `UNIFORM_BLOCK_INDEX`                         | 0x8A3A |      |
| `UNIFORM_OFFSET`                              | 0x8A3B |      |
| `UNIFORM_ARRAY_STRIDE`                        | 0x8A3C |      |
| `UNIFORM_MATRIX_STRIDE`                       | 0x8A3D |      |
| `UNIFORM_IS_ROW_MAJOR`                        | 0x8A3E |      |
| `UNIFORM_BLOCK_BINDING`                       | 0x8A3F |      |
| `UNIFORM_BLOCK_DATA_SIZE`                     | 0x8A40 |      |
| `UNIFORM_BLOCK_ACTIVE_UNIFORMS`               | 0x8A42 |      |
| `UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES`        | 0x8A43 |      |
| `UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER`   | 0x8A44 |      |
| `UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER` | 0x8A46 |      |

### 同步对象

| 常量名                       | 值         | 描述 |
| ---------------------------- | ---------- | ---- |
| `OBJECT_TYPE`                | 0x9112     |      |
| `SYNC_CONDITION`             | 0x9113     |      |
| `SYNC_STATUS`                | 0x9114     |      |
| `SYNC_FLAGS`                 | 0x9115     |      |
| `SYNC_FENCE`                 | 0x9116     |      |
| `SYNC_GPU_COMMANDS_COMPLETE` | 0x9117     |      |
| `UNSIGNALED`                 | 0x9118     |      |
| `SIGNALED`                   | 0x9119     |      |
| `ALREADY_SIGNALED`           | 0x911A     |      |
| `TIMEOUT_EXPIRED`            | 0x911B     |      |
| `CONDITION_SATISFIED`        | 0x911C     |      |
| `WAIT_FAILED`                | 0x911D     |      |
| `SYNC_FLUSH_COMMANDS_BIT`    | 0x00000001 |      |

### 杂项常量

| 常量名                          | 值         | 描述 |
| ------------------------------- | ---------- | ---- |
| `COLOR`                         | 0x1800     |      |
| DEPTH                           | 0x1801     |      |
| `STENCIL`                       | 0x1802     |      |
| `MIN`                           | 0x8007     |      |
| MAX                             | 0x8008     |      |
| `DEPTH_COMPONENT24`             | 0x81A6     |      |
| `STREAM_READ`                   | 0x88E1     |      |
| `STREAM_COPY`                   | 0x88E2     |      |
| `STATIC_READ`                   | 0x88E5     |      |
| `STATIC_COPY`                   | 0x88E6     |      |
| `DYNAMIC_READ`                  | 0x88E9     |      |
| `DYNAMIC_COPY`                  | 0x88EA     |      |
| `DEPTH_COMPONENT32F`            | 0x8CAC     |      |
| `DEPTH32F_STENCIL8`             | 0x8CAD     |      |
| `INVALID_INDEX`                 | 0xFFFFFFFF |      |
| `TIMEOUT_IGNORED`               | -1         |      |
| `MAX_CLIENT_WAIT_TIMEOUT_WEBGL` | 0x9247     |      |

## WebGL 扩展中定义的常量

### ANGLE_instanced_arrays

| 常量名                              | 值     | 描述                           |
| ----------------------------------- | ------ | ------------------------------ |
| `VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE` | 0x88FE | 描述实例化渲染所用的频率除数。 |

更多信息，请参见 {{domxref("ANGLE_instanced_arrays")}}。

### WEBGL_debug_renderer_info

| 常量名                    | 值     | 描述                                              |
| ------------------------- | ------ | ------------------------------------------------- |
| `UNMASKED_VENDOR_WEBGL`   | 0x9245 | 传给 `getParameter`，获取图形驱动的供应商字符串。 |
| `UNMASKED_RENDERER_WEBGL` | 0x9246 | 传给 `getParameter`，获取图形驱动的渲染器字符串。 |

更多信息，请参见 {{domxref("WEBGL_debug_renderer_info")}}。

### EXT_texture_filter_anisotropic

| 常量名                           | 值     | 描述                                              |
| -------------------------------- | ------ | ------------------------------------------------- |
| `MAX_TEXTURE_MAX_ANISOTROPY_EXT` | 0x84FF | 返回可用的最大各向异性值。                        |
| `TEXTURE_MAX_ANISOTROPY_EXT`     | 0x84FE | 传给 `texParameter`，设置纹理所需的最大各向异性。 |

更多信息，请参见 {{domxref("EXT_texture_filter_anisotropic")}}。

### WEBGL_compressed_texture_s3tc

| 常量名                          | 值     | 描述                                                                              |
| ------------------------------- | ------ | --------------------------------------------------------------------------------- |
| `COMPRESSED_RGB_S3TC_DXT1_EXT`  | 0x83F0 | RGB 图像格式的 DXT1 压缩图像。                                                    |
| `COMPRESSED_RGBA_S3TC_DXT1_EXT` | 0x83F1 | RGB 图像格式的 DXT1 压缩图像，带开/关式 alpha 值。                                |
| `COMPRESSED_RGBA_S3TC_DXT3_EXT` | 0x83F2 | RGBA 图像格式的 DXT3 压缩图像。与 32 位 RGBA 纹理相比，压缩比为 4:1。             |
| `COMPRESSED_RGBA_S3TC_DXT5_EXT` | 0x83F3 | RGBA 图像格式的 DXT5 压缩图像。同样提供 4:1 压缩，但 alpha 压缩方式与 DXT3 不同。 |

更多信息，请参见 {{domxref("WEBGL_compressed_texture_s3tc")}}。

### WEBGL_compressed_texture_etc

| 常量名                                      | 值     | 描述                                                                          |
| ------------------------------------------- | ------ | ----------------------------------------------------------------------------- |
| `COMPRESSED_R11_EAC`                        | 0x9270 | 单通道（红）无符号格式压缩。                                                  |
| `COMPRESSED_SIGNED_R11_EAC`                 | 0x9271 | 单通道（红）有符号格式压缩。                                                  |
| `COMPRESSED_RG11_EAC`                       | 0x9272 | 双通道（红和绿）无符号格式压缩。                                              |
| `COMPRESSED_SIGNED_RG11_EAC`                | 0x9273 | 双通道（红和绿）有符号格式压缩。                                              |
| `COMPRESSED_RGB8_ETC2`                      | 0x9274 | 压缩无 alpha 通道的 RGB8 数据。                                               |
| `COMPRESSED_RGBA8_ETC2_EAC`                 | 0x9275 | 压缩 RGBA8 数据。RGB 部分的编码与 `RGB_ETC2` 相同，但 alpha 部分单独编码。    |
| `COMPRESSED_SRGB8_ETC2`                     | 0x9276 | 压缩无 alpha 通道的 sRGB8 数据。                                              |
| `COMPRESSED_SRGB8_ALPHA8_ETC2_EAC`          | 0x9277 | 压缩 sRGBA8 数据。sRGB 部分的编码与 `SRGB_ETC2` 相同，但 alpha 部分单独编码。 |
| `COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2`  | 0x9278 | 类似于 `RGB8_ETC`，但可以打穿 alpha 通道，即让其完全不透明或完全透明。        |
| `COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2` | 0x9279 | 类似于 `SRGB8_ETC`，但可以打穿 alpha 通道，即让其完全不透明或完全透明。       |

更多信息，请参见 {{domxref("WEBGL_compressed_texture_etc")}}。

### WEBGL_compressed_texture_pvrtc

| 常量名                             | 值     | 描述                                    |
| ---------------------------------- | ------ | --------------------------------------- |
| `COMPRESSED_RGB_PVRTC_4BPPV1_IMG`  | 0x8C00 | 4 位模式的 RGB 压缩。每 4×4 像素一块。  |
| `COMPRESSED_RGBA_PVRTC_4BPPV1_IMG` | 0x8C02 | 4 位模式的 RGBA 压缩。每 4×4 像素一块。 |
| `COMPRESSED_RGB_PVRTC_2BPPV1_IMG`  | 0x8C01 | 2 位模式的 RGB 压缩。每 8×4 像素一块。  |
| `COMPRESSED_RGBA_PVRTC_2BPPV1_IMG` | 0x8C03 | 2 位模式的 RGBA 压缩。每 8×4 像素一块。 |

更多信息，请参见 {{domxref("WEBGL_compressed_texture_pvrtc")}}。

### WEBGL_compressed_texture_etc1

| 常量名                      | 值     | 描述                                 |
| --------------------------- | ------ | ------------------------------------ |
| `COMPRESSED_RGB_ETC1_WEBGL` | 0x8D64 | 压缩无 alpha 通道的 24 位 RGB 数据。 |

更多信息，请参见 {{domxref("WEBGL_compressed_texture_etc1")}}。

### WEBGL_depth_texture

| 常量名                    | 值     | 描述                                     |
| ------------------------- | ------ | ---------------------------------------- |
| `UNSIGNED_INT_24_8_WEBGL` | 0x84FA | 用于 24 位深度纹理数据的无符号整数类型。 |

更多信息，请参见 {{domxref("WEBGL_depth_texture")}}。

### OES_texture_half_float

| 常量名           | 值     | 描述                  |
| ---------------- | ------ | --------------------- |
| `HALF_FLOAT_OES` | 0x8D61 | 半浮点类型（16 位）。 |

更多信息，请参见 {{domxref("OES_texture_half_float")}}。

### WEBGL_color_buffer_float

| 常量名                                      | 值     | 描述                               |
| ------------------------------------------- | ------ | ---------------------------------- |
| `RGBA32F_EXT`                               | 0x8814 | RGBA 32 位浮点、可渲染颜色的格式。 |
| `RGB32F_EXT`                                | 0x8815 | RGB 32 位浮点、可渲染颜色的格式。  |
| `FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT` | 0x8211 |                                    |
| `UNSIGNED_NORMALIZED_EXT`                   | 0x8C17 |                                    |

更多信息，请参见 {{domxref("WEBGL_color_buffer_float")}}。

### EXT_blend_minmax

| 常量名    | 值     | 描述                                   |
| --------- | ------ | -------------------------------------- |
| `MIN_EXT` | 0x8007 | 生成源颜色和目标颜色各分量中的最小值。 |
| `MAX_EXT` | 0x8008 | 生成源颜色和目标颜色各分量中的最大值。 |

更多信息，请参见 {{domxref("EXT_blend_minmax")}}。

### EXT_sRGB

| 常量名                                      | 值     | 描述                                                |
| ------------------------------------------- | ------ | --------------------------------------------------- |
| `SRGB_EXT`                                  | 0x8C40 | 未指定尺寸的 sRGB 格式，精度由驱动决定。            |
| `SRGB_ALPHA_EXT`                            | 0x8C42 | 未指定尺寸的 sRGB 格式，带未指定尺寸的 alpha 分量。 |
| `SRGB8_ALPHA8_EXT`                          | 0x8C43 | 指定尺寸（8 位）的 sRGB 和 alpha 格式。             |
| `FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT` | 0x8210 | 返回帧缓冲区的颜色编码。                            |

更多信息，请参见 {{domxref("EXT_sRGB")}}。

### OES_standard_derivatives

| 常量名                                | 值     | 描述                                                           |
| ------------------------------------- | ------ | -------------------------------------------------------------- |
| `FRAGMENT_SHADER_DERIVATIVE_HINT_OES` | 0x8B8B | 表示 GLSL 内置函数 `dFdx`、`dFdy` 和 `fwidth` 的导数计算精度。 |

更多信息，请参见 {{domxref("OES_standard_derivatives")}}。

### WEBGL_draw_buffers

| 常量名                        | 值     | 描述                         |
| ----------------------------- | ------ | ---------------------------- |
| `COLOR_ATTACHMENT0_WEBGL`     | 0x8CE0 | 帧缓冲区颜色附件点           |
| `COLOR_ATTACHMENT1_WEBGL`     | 0x8CE1 | 帧缓冲区颜色附件点           |
| `COLOR_ATTACHMENT2_WEBGL`     | 0x8CE2 | 帧缓冲区颜色附件点           |
| `COLOR_ATTACHMENT3_WEBGL`     | 0x8CE3 | 帧缓冲区颜色附件点           |
| `COLOR_ATTACHMENT4_WEBGL`     | 0x8CE4 | 帧缓冲区颜色附件点           |
| `COLOR_ATTACHMENT5_WEBGL`     | 0x8CE5 | 帧缓冲区颜色附件点           |
| `COLOR_ATTACHMENT6_WEBGL`     | 0x8CE6 | 帧缓冲区颜色附件点           |
| `COLOR_ATTACHMENT7_WEBGL`     | 0x8CE7 | 帧缓冲区颜色附件点           |
| `COLOR_ATTACHMENT8_WEBGL`     | 0x8CE8 | 帧缓冲区颜色附件点           |
| `COLOR_ATTACHMENT9_WEBGL`     | 0x8CE9 | 帧缓冲区颜色附件点           |
| `COLOR_ATTACHMENT10_WEBGL`    | 0x8CEA | 帧缓冲区颜色附件点           |
| `COLOR_ATTACHMENT11_WEBGL`    | 0x8CEB | 帧缓冲区颜色附件点           |
| `COLOR_ATTACHMENT12_WEBGL`    | 0x8CEC | 帧缓冲区颜色附件点           |
| `COLOR_ATTACHMENT13_WEBGL`    | 0x8CED | 帧缓冲区颜色附件点           |
| `COLOR_ATTACHMENT14_WEBGL`    | 0x8CEE | 帧缓冲区颜色附件点           |
| `COLOR_ATTACHMENT15_WEBGL`    | 0x8CEF | 帧缓冲区颜色附件点           |
| `DRAW_BUFFER0_WEBGL`          | 0x8825 | 绘制缓冲区                   |
| `DRAW_BUFFER1_WEBGL`          | 0x8826 | 绘制缓冲区                   |
| `DRAW_BUFFER2_WEBGL`          | 0x8827 | 绘制缓冲区                   |
| `DRAW_BUFFER3_WEBGL`          | 0x8828 | 绘制缓冲区                   |
| `DRAW_BUFFER4_WEBGL`          | 0x8829 | 绘制缓冲区                   |
| `DRAW_BUFFER5_WEBGL`          | 0x882A | 绘制缓冲区                   |
| `DRAW_BUFFER6_WEBGL`          | 0x882B | 绘制缓冲区                   |
| `DRAW_BUFFER7_WEBGL`          | 0x882C | 绘制缓冲区                   |
| `DRAW_BUFFER8_WEBGL`          | 0x882D | 绘制缓冲区                   |
| `DRAW_BUFFER9_WEBGL`          | 0x882E | 绘制缓冲区                   |
| `DRAW_BUFFER10_WEBGL`         | 0x882F | 绘制缓冲区                   |
| `DRAW_BUFFER11_WEBGL`         | 0x8830 | 绘制缓冲区                   |
| `DRAW_BUFFER12_WEBGL`         | 0x8831 | 绘制缓冲区                   |
| `DRAW_BUFFER13_WEBGL`         | 0x8832 | 绘制缓冲区                   |
| `DRAW_BUFFER14_WEBGL`         | 0x8833 | 绘制缓冲区                   |
| `DRAW_BUFFER15_WEBGL`         | 0x8834 | 绘制缓冲区                   |
| `MAX_COLOR_ATTACHMENTS_WEBGL` | 0x8CDF | 帧缓冲区颜色附件点的最大数量 |
| `MAX_DRAW_BUFFERS_WEBGL`      | 0x8824 | 绘制缓冲区的最大数量         |

更多信息，请参见 {{domxref("WEBGL_draw_buffers")}}。

### OES_vertex_array_object

| 常量名                     | 值     | 描述                          |
| -------------------------- | ------ | ----------------------------- |
| `VERTEX_ARRAY_BINDING_OES` | 0x85B5 | 已绑定的顶点数组对象（VAO）。 |

更多信息，请参见 {{domxref("OES_vertex_array_object")}}。

### EXT_disjoint_timer_query

| 常量名                       | 值     | 描述                                        |
| ---------------------------- | ------ | ------------------------------------------- |
| `QUERY_COUNTER_BITS_EXT`     | 0x8864 | 用于保存给定目标查询结果的位数。            |
| `CURRENT_QUERY_EXT`          | 0x8865 | 当前活动的查询。                            |
| `QUERY_RESULT_EXT`           | 0x8866 | 查询结果。                                  |
| `QUERY_RESULT_AVAILABLE_EXT` | 0x8867 | 表示查询结果是否可用的布尔值。              |
| `TIME_ELAPSED_EXT`           | 0x88BF | 经过的时间（以纳秒为单位）。                |
| `TIMESTAMP_EXT`              | 0x8E28 | 当前时间。                                  |
| `GPU_DISJOINT_EXT`           | 0x8FBB | 表示 GPU 是否执行了任何不连续操作的布尔值。 |

更多信息，请参见 {{domxref("EXT_disjoint_timer_query")}}。

## 规范

{{Specifications}}

## 参见

- {{domxref("WebGLRenderingContext")}}
