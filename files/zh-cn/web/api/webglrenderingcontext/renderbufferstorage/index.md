---
title: WebGLRenderingContext.renderbufferStorage()
slug: Web/API/WebGLRenderingContext/renderbufferStorage
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.renderbufferStorage()`** 方法用来创建和初始化一个渲染缓冲区对象的数据存储。

## 语法

```plain
void gl.renderbufferStorage(target, internalFormat, width, height);
```

### 参数

- target
  - : {{domxref("Glenum")}} 指定一个渲染缓冲区对象。可能的值：
    - `gl.RENDERBUFFER`:单一图像的缓冲数据存储在一个可渲染的内部格式。
      .

- internalFormat
  - : {{domxref("Glenum")}} 指定渲染缓冲区的内部格式。可能的值：
    - `gl.RGBA4`: 4 red bits, 4 green bits, 4 blue bits 4 alpha bits.
    - `gl.RGB565`: 5 red bits, 6 green bits, 5 blue bits.
    - `gl.RGB5_A1`: 5 red bits, 5 green bits, 5 blue bits, 1 alpha bit.
    - `gl.DEPTH_COMPONENT16`: 16 depth bits.
    - `gl.STENCIL_INDEX8`: 8 stencil bits.
    - `gl.DEPTH_STENCIL`
    - 当使用{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}时，下面的值也是可用的：
      - `gl.R8`
      - `gl.R8UI`
      - `gl.R8I`
      - `gl.R16UI`
      - `gl.R16I`
      - `gl.R32UI`
      - `gl.R32I`
      - `gl.RG8`
      - `gl.RG8UI`
      - `gl.RG8I`
      - `gl.RG16UI`
      - `gl.RG16I`
      - `gl.RG32UI`
      - `gl.RG32I`
      - `gl.RGB8`
      - `gl.RGBA8`
      - `gl.SRGB8_ALPHA8` (也可以作为 WebGL 1 的扩展，参见下面)
      - `gl.RGB10_A2`
      - `gl.RGBA8UI`
      - `gl.RGBA8I`
      - `gl.RGB10_A2UI`
      - `gl.RGBA16UI`
      - `gl.RGBA16I`
      - `gl.RGBA32I`
      - `gl.RGBA32UI`
      - `gl.DEPTH_COMPONENT24`
      - `gl.DEPTH_COMPONENT32F`
      - `gl.DEPTH24_STENCIL8`
      - `gl.DEPTH32F_STENCIL8`

    - 当使用{domxref("WEBGL_color_buffer_float")}} 扩展：
      - `ext.RGBA32F_EXT`: RGBA 32-bit 浮点类型。
      - `ext.RGB32F_EXT`: RGB 32-bit 浮点类型。

    - 当使用{domxref("EXT_sRGB")}} 扩展：
      - `ext.SRGB8_ALPHA8_EXT`: 8-bit sRGB 和 alpha.

    - 当使用{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} 和 {{domxref("EXT_color_buffer_float")}} 扩展：
      - `gl.R16F`
      - `gl.RG16F`
      - `gl.RGBA16F`
      - `gl.R32F`
      - `gl.RG32F`
      - `gl.RGBA32F`
      - `gl.R11F_G11F_B10F`

- width
  - : {{domxref("GLsizei")}} 指定渲染缓冲区的宽度 (以像素为单位).
- height
  - : {{domxref("GLsizei")}} 指定渲染缓冲区的高度 (以像素为单位).

### 返回值

None.

## 示例

```js
gl.renderbufferStorage(gl.RENDERBUFFER, gl.RGBA4, 256, 256);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.getRenderbufferParameter()")}}
- {{domxref("WEBGL_color_buffer_float")}}
- {{domxref("EXT_sRGB")}}
- {{domxref("EXT_color_buffer_float")}}
