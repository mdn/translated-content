---
title: WebGLRenderingContext.texImage2D()
slug: Web/API/WebGLRenderingContext/texImage2D
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.texImage2D()`** 方法指定了二维纹理图像。

## 语法

```js-nolint
// WebGL1
texImage2D(target, level, internalformat, width, height, border, format, type, pixels)
texImage2D(target, level, internalformat, format, type, pixels)


// WebGL2
texImage2D(target, level, internalformat, width, height, border, format, type, offset)
texImage2D(target, level, internalformat, width, height, border, format, type, source)
texImage2D(target, level, internalformat, width, height, border, format, type, srcData, srcOffset)
```

### 参数

- `target`
  - : {{domxref("GLenum")}} 指定纹理的绑定对象。可能的值：
    - `gl.TEXTURE_2D`: 二维纹理贴图。
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`:立方体映射纹理的正 X 面。
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: 立方体映射纹理的负 X 面。
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: 立方体映射纹理的正 Y 面。
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: 立方体映射纹理的负 Y 面。
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: 立方体映射纹理的正 Z 面。
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: 立方体映射纹理的负 Z 面。

- `level`
  - : {{domxref("GLint")}} 指定详细级别。0 级是基本图像等级，n 级是第 n 个金字塔简化级。
- `internalformat`
  - : {{domxref("GLenum")}} 指定纹理中的颜色组件。在 WebGL1 和 WebGL2 中可能的值：

    | Format          | Type                   | Channels | Bytes per pixel |
    | --------------- | ---------------------- | -------- | --------------- |
    | RGBA            | UNSIGNED_BYTE          | 4        | 4               |
    | RGB             | UNSIGNED_BYTE          | 3        | 3               |
    | RGBA            | UNSIGNED_SHORT_4_4_4_4 | 4        | 2               |
    | RGBA            | UNSIGNED_SHORT_5_5_5_1 | 4        | 2               |
    | RGB             | UNSIGNED_SHORT_5_6_5   | 3        | 2               |
    | LUMINANCE_ALPHA | UNSIGNED_BYTE          | 2        | 2               |
    | LUMINANCE       | UNSIGNED_BYTE          | 1        | 1               |
    | ALPHA           | UNSIGNED_BYTE          | 1        | 1               |

    在 WebGL2 中，对带有 `ArrayBufferView` 或 `GLintptr offset`的 `texImage2D` 版本，其他可能的值

    | **Sized Format** | **Base Format** | **R bits** | **G bits** | **B bits** | **A bits** | **Shared bits** | **Color renderable** | **Texture filterable** |
    | ---------------- | --------------- | ---------- | ---------- | ---------- | ---------- | --------------- | -------------------- | ---------------------- |
    | R8               | RED             | 8          |            |            |            |                 | ●                    | ●                      |
    | R8_SNORM         | RED             | s8         |            |            |            |                 |                      | ●                      |
    | RG8              | RG              | 8          | 8          |            |            |                 | ●                    | ●                      |
    | RG8_SNORM        | RG              | s8         | s8         |            |            |                 |                      | ●                      |
    | RGB8             | RGB             | 8          | 8          | 8          |            |                 | ●                    | ●                      |
    | RGB8_SNORM       | RGB             | s8         | s8         | s8         |            |                 |                      | ●                      |
    | RGB565           | RGB             | 5          | 6          | 5          |            |                 | ●                    | ●                      |
    | RGBA4            | RGBA            | 4          | 4          | 4          | 4          |                 | ●                    | ●                      |
    | RGB5_A1          | RGBA            | 5          | 5          | 5          | 1          |                 | ●                    | ●                      |
    | RGBA8            | RGBA            | 8          | 8          | 8          | 8          |                 | ●                    | ●                      |
    | RGBA8_SNORM      | RGBA            | s8         | s8         | s8         | s8         |                 |                      | ●                      |
    | RGB10_A2         | RGBA            | 10         | 10         | 10         | 2          |                 | ●                    | ●                      |
    | RGB10_A2UI       | RGBA            | ui10       | ui10       | ui10       | ui2        |                 | ●                    |                        |
    | SRGB8            | RGB             | 8          | 8          | 8          |            |                 |                      | ●                      |
    | SRGB8_ALPHA8     | RGBA            | 8          | 8          | 8          | 8          |                 | ●                    | ●                      |
    | R16F             | RED             | f16        |            |            |            |                 |                      | ●                      |
    | RG16F            | RG              | f16        | f16        |            |            |                 |                      | ●                      |
    | RGB16F           | RGB             | f16        | f16        | f16        |            |                 |                      | ●                      |
    | RGBA16F          | RGBA            | f16        | f16        | f16        | f16        |                 |                      | ●                      |
    | R32F             | RED             | f32        |            |            |            |                 |                      |                        |
    | RG32F            | RG              | f32        | f32        |            |            |                 |                      |                        |
    | RGB32F           | RGB             | f32        | f32        | f32        |            |                 |                      |                        |
    | RGBA32F          | RGBA            | f32        | f32        | f32        | f32        |                 |                      |                        |
    | R11F_G11F_B10F   | RGB             | f11        | f11        | f10        |            |                 |                      | ●                      |
    | RGB9_E5          | RGB             | 9          | 9          | 9          |            | 5               |                      | ●                      |
    | R8I              | RED             | i8         |            |            |            |                 | ●                    |                        |
    | R8UI             | RED             | ui8        |            |            |            |                 | ●                    |                        |
    | R16I             | RED             | i16        |            |            |            |                 | ●                    |                        |
    | R16UI            | RED             | ui16       |            |            |            |                 | ●                    |                        |
    | R32I             | RED             | i32        |            |            |            |                 | ●                    |                        |
    | R32UI            | RED             | ui32       |            |            |            |                 | ●                    |                        |
    | RG8I             | RG              | i8         | i8         |            |            |                 | ●                    |                        |
    | RG8UI            | RG              | ui8        | ui8        |            |            |                 | ●                    |                        |
    | RG16I            | RG              | i16        | i16        |            |            |                 | ●                    |                        |
    | RG16UI           | RG              | ui16       | ui16       |            |            |                 | ●                    |                        |
    | RG32I            | RG              | i32        | i32        |            |            |                 | ●                    |                        |
    | RG32UI           | RG              | ui32       | ui32       |            |            |                 | ●                    |                        |
    | RGB8I            | RGB             | i8         | i8         | i8         |            |                 |                      |                        |
    | RGB8UI           | RGB             | ui8        | ui8        | ui8        |            |                 |                      |                        |
    | RGB16I           | RGB             | i16        | i16        | i16        |            |                 |                      |                        |
    | RGB16UI          | RGB             | ui16       | ui16       | ui16       |            |                 |                      |                        |
    | RGB32I           | RGB             | i32        | i32        | i32        |            |                 |                      |                        |
    | RGB32UI          | RGB             | ui32       | ui32       | ui32       |            |                 |                      |                        |
    | RGBA8I           | RGBA            | i8         | i8         | i8         | i8         |                 | ●                    |                        |
    | RGBA8UI          | RGBA            | ui8        | ui8        | ui8        | ui8        |                 | ●                    |                        |
    | RGBA16I          | RGBA            | i16        | i16        | i16        | i16        |                 | ●                    |                        |
    | RGBA16UI         | RGBA            | ui16       | ui16       | ui16       | ui16       |                 | ●                    |                        |
    | RGBA32I          | RGBA            | i32        | i32        | i32        | i32        |                 | ●                    |                        |
    | RGBA32UI         | RGBA            | ui32       | ui32       | ui32       | ui32       |                 | ●                    |                        |

    在 WebGL2 中，使用`HTMLImageElement`, `HTMLCanvasElement`, `HTMLVideoElement`, `ImageBitmap`, 或 `ImageData`作为`texImage2D` 纹理的版本中，可能的值有：
    - `gl.ALPHA`: 抛弃红色、绿色和蓝色组件并读取 alpha 组件。
    - `gl.RGB`:抛弃 alpha 组件，读取红色、绿色和蓝色组件。
    - `gl.RGBA`: 从颜色缓冲区读取红色、绿色、蓝色和 alpha 组件。
    - `gl.LUMINANCE`: E 每个颜色组件是一个亮度组件，alpha 值为 1.0。
    - `gl.LUMINANCE_ALPHA`: 每个组件都是亮度/alpha 组件。
    - 当时用 {{domxref("WEBGL_depth_texture")}} 扩展：
      - `gl.DEPTH_COMPONENT`
      - `gl.DEPTH_STENCIL`

    - 当时用 {{domxref("EXT_sRGB")}} 扩展：
      - `ext.SRGB_EXT`
      - `ext.SRGB_ALPHA_EXT`

    - 当时用 {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, 另外还提供以下值：
      - `gl.R8`
      - `gl.R16F`
      - `gl.R32F`
      - `gl.R8UI`
      - `gl.RG8`
      - `gl.RG16F`
      - `gl.RG32F`
      - `gl.RG8UI`
      - `gl.RG16UI`
      - `gl.RG32UI`
      - `gl.RGB8`
      - `gl.SRGB8`
      - `gl.RGB565`
      - `gl.R11F_G11F_B10F`
      - `gl.RGB9_E5`
      - `gl.RGB16F`
      - `gl.RGB32F`
      - `gl.RGB8UI`
      - `gl.RGBA8`
      - `gl.SRGB8_ALPHA8`
      - `gl.RGB5_A1`
      - `gl.RGB10_A2`
      - `gl.RGBA4`
      - `gl.RGBA16F`
      - `gl.RGBA32F`
      - `gl.RGBA8UI`

- `width`
  - : {{domxref("GLsizei")}} 指定纹理的宽度。
- `height`
  - : {{domxref("GLsizei")}} 指定纹理的高度
- `border`
  - : {{domxref("GLint")}} 指定纹理的边框宽度。必须为 0。
- `format`
  - : {{domxref("GLenum")}} 指定 texel 数据格式。在 WebGL 1 中，它必须与 `internalformat` 相同（查看上面). 在 WebGL 2 中，[这张表](https://www.khronos.org/registry/webgl/specs/latest/2.0/#TEXTURE_TYPES_FORMATS_FROM_DOM_ELEMENTS_TABLE)中列出了这些组合。
- `type`
  - : {{domxref("GLenum")}} 指定 texel 数据的数据类型。可能的值：
    - `gl.UNSIGNED_BYTE`: `gl.RGBA`每个通道 8 位
    - `gl.UNSIGNED_SHORT_5_6_5`: 5 bits 红，6 bits 绿，5 bits 蓝
    - `gl.UNSIGNED_SHORT_4_4_4_4`: 4 bits 红，4 bits 绿，4 bits 蓝，4 alpha bits.
    - `gl.UNSIGNED_SHORT_5_5_5_1`: 5 bits 红，5 bits 绿，5 bits 蓝，1 alpha bit.
    - 当使用 {{domxref("WEBGL_depth_texture")}} 扩展：
      - `gl.UNSIGNED_SHORT`
      - `gl.UNSIGNED_INT`
      - `ext.UNSIGNED_INT_24_8_WEBGL` (constant provided by the extension)

    - 当使用 {{domxref("OES_texture_float")}}扩展 :
      - `gl.FLOAT`

    - 当使用 {{domxref("OES_texture_half_float")}} 扩展：
      - `ext.HALF_FLOAT_OES` (constant provided by the extension)

    - 当使用 {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}},下面的值也是可用的：
      - `gl.BYTE`
      - `gl.UNSIGNED_SHORT`
      - `gl.SHORT`
      - `gl.UNSIGNED_INT`
      - `gl.INT`
      - `gl.HALF_FLOAT`
      - `gl.FLOAT`
      - `gl.UNSIGNED_INT_2_10_10_10_REV`
      - `gl.UNSIGNED_INT_10F_11F_11F_REV`
      - `gl.UNSIGNED_INT_5_9_9_9_REV`
      - `gl.UNSIGNED_INT_24_8`
      - `gl.FLOAT_32_UNSIGNED_INT_24_8_REV` (pixels must be {{jsxref("null")}})

- `pixels`
  - : 下列对象之一可以用作纹理的像素源：
    - {{domxref("ArrayBufferView")}},
      - {{jsxref("Uint8Array")}} 如果 `type` 是 `gl.UNSIGNED_BYTE`则必须使用
      - {{jsxref("Uint16Array")}} 如果 `type` 是 `gl.UNSIGNED_SHORT_5_6_5`, `gl.UNSIGNED_SHORT_4_4_4_4`, `gl.UNSIGNED_SHORT_5_5_5_1`, `gl.UNSIGNED_SHORT` 或`ext.HALF_FLOAT_OES`则必须使用
      - {{jsxref("Uint32Array")}} 如果`type` 是 `gl.UNSIGNED_INT` 或`ext.UNSIGNED_INT_24_8_WEBGL`则必须使用
      - {{jsxref("Float32Array")}} 如果`type` 是 `gl.FLOAT`则必须使用

    - {{domxref("ImageData")}},
    - {{domxref("HTMLImageElement")}},
    - {{domxref("HTMLCanvasElement")}},
    - {{domxref("HTMLVideoElement")}},
    - {{domxref("ImageBitmap")}}.

- offset
  - : {{domxref("GLintptr")}} 类型偏移到 {{domxref("WebGLBuffer")}}的数据存储中。用于上传数据到当前范围 {{domxref("WebGLTexture")}} 从`WebGLBuffer` 范围到`PIXEL_UNPACK_BUFFER` 目标。(仅在 WebGL 2 中 )

### 返回值

None.

## 示例

```js
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
- {{domxref("WEBGL_depth_texture")}}
- {{domxref("OES_texture_float")}}
- {{domxref("OES_texture_half_float")}}
- {{domxref("EXT_sRGB")}}
