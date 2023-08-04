---
title: WebGL2RenderingContext.texImage3D()
slug: Web/API/WebGL2RenderingContext/texImage3D
---

{{APIRef("WebGL")}} {{SeeCompatTable}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.texImage3D()`**方法指定一个 3d（three-dimensional）纹理贴图。

## 语法

```
void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, GLintptr offset);

void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, HTMLCanvasElement source);
void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, HTMLImageElement source);
void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, HTMLVideoElement source);
void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, ImageBitmap source);
void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, ImageData source);
void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, ArrayBufferView? srcData);
void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, ArrayBufferView srcData, srcOffset);
```

### 参数

- `target`

  - : {{domxref("GLenum")}}指定绑定纹理图像类型。可能值：

    - `gl.TEXTURE_3D`: 一个 3D 贴图
    - `gl.TEXTURE_2D_ARRAY`: 一个 2D 数组贴图

- `level`
  - : {{domxref("GLint")}}指定细节等级。level0 是基础图片等级，n 是第 n 个 mipmap 纹理衰减等级。（译者注：原文中衰减应该指像素，并且注意，webgl 的 Mipmapping 技术要求顶层图像的行和列的维数均为 2 的幂）
- `internalformat`

  - : {{domxref("GLint")}}指定贴图的颜色组成，可能值为：

    - `gl.ALPHA`: 忽略红色，绿色，蓝色分量值只读取 alpha 信息。
    - `gl.RGB`: 忽略 alpha 信息，读取红绿蓝分量
    - `gl.RGBA`: 从颜色缓冲（colorBuffer）读取红色，绿色，蓝色和 alpha 分量
    - `gl.LUMINANCE`:每个颜色组件都是亮度组件，alpha 值为 1.0.
    - `gl.LUMINANCE_ALPHA`:每个组件都是亮度/alpha 组件（component）.
    - `gl.R8`
    - `gl.R16F`
    - `gl.`R32F
    - `gl.R8UI`
    - `gl.RG8`
    - `gl.RG16F`
    - `gl.RG32F`
    - `gl.RGUI`
    - `gl.RGB8`
    - `gl.SRGB8`
    - `gl.RGB565`
    - `gl.R11F_G11F_B10F`
    - `gl.RGB9_E5`
    - `gl.RGB16F`
    - `gl.RGB32F`
    - `gl.RGB8UI`
    - `gl.RGBA8`
    - `gl.SRGB_APLHA8`
    - `gl.RGB5_A1`
    - `gl.RGBA4444`
    - `gl.RGBA16F`
    - `gl.RGBA32F`
    - `gl.RGBA8UI`

- `width`
  - : {{domxref("GLsizei")}}指定纹理的宽度
- `height`
  - : {{domxref("GLsizei")}} 指定纹理的高度
- `depth`
  - : {{domxref("GLsizei")}} 指定纹理的深度信息
- `border`
  - : {{domxref("GLint")}}指定边框宽度，必须为 0
- `format`
  - : {{domxref("GLenum")}}制定纹素的版本。正确的 `内部格式` 组合被列举在 [这个列表](https://www.khronos.org/registry/webgl/specs/latest/2.0/#TEXTURE_TYPES_FORMATS_FROM_DOM_ELEMENTS_TABLE)。
- `type`

  - : A {{domxref("GLenum")}}指定纹素的数据类型，可能值：

    - `gl.UNSIGNED_BYTE`: 每个`gl.RGBA`对应 8 个字节
    - `gl.UNSIGNED_SHORT_5_6_5`: 红色占五个字节，绿色占六个字节，蓝色占五个字节
    - `gl.UNSIGNED_SHORT_4_4_4_4`: 红色占四个字节，绿色占 四 个字节，蓝色占 四 个字节
    - `gl.UNSIGNED_SHORT_5_5_5_1`:红色占五个字节，绿色占五个字节，蓝色占五个字节，alpha 占一个字节
    - `gl.BYTE`（这些属性的信息原文中均未提到，但是在 webgl1 中出现过，可以适当参考 webgl1 文献）
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

- `source`

  - : 其中一个对象可以用作纹理对象的源：

    - {{domxref("ArrayBufferView")}},
    - {{domxref("ImageBitmap")}},
    - {{domxref("ImageData")}},
    - {{domxref("HTMLImageElement")}},
    - {{domxref("HTMLCanvasElement")}},
    - {{domxref("HTMLVideoElement")}}.

- offset
  - : 一个针对于{{domxref("WebGLBuffer")}}所储存数据的{{domxref("GLintptr")}}字节的偏移量。用来重新加载已经用`WebGLBuffer`绑定到`PIXEL_UNPACK_BUFFER`的{{domxref("WebGLTexture")}} 。

### 返回值

没有

## 例子

```js
gl.texImage3D(
  gl.TEXTURE_3D,
  0, // level
  gl.RGBA, // internalFormat
  1, // width
  1, // height
  1, // depth
  0, // border
  gl.RGBA, // format
  gl.UNSIGNED_BYTE, // type
  new Uint8Array([0xff, 0x00, 0x00, 0x00]),
); // data
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
