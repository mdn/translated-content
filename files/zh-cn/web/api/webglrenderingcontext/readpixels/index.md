---
title: WebGLRenderingContext.readPixels()
slug: Web/API/WebGLRenderingContext/readPixels
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.readPixels()`** 方法从当前的颜色帧缓冲（framebuffer）中读取指定矩形的像素矩阵并转换为 {{jsxref("TypedArray")}} 或 {{jsxref("DataView")}} 对象。

## 语法

```js-nolint
// WebGL1:
readPixels(x, y, width, height, format, type, pixels)

// WebGL2:
readPixels(x, y, width, height, format, type, offset)
readPixels(x, y, width, height, format, type, pixels)
readPixels(x, y, width, height, format, type, pixels, dstOffset)
```

### 参数

- `x`
  - : {{domxref("WebGL_API/Types", "GLint")}} 值，指定从矩形像素块的左下角读取的第一个水平像素。
- `y`
  - : {{domxref("WebGL_API/Types", "GLint")}} 值，指定从矩形像素块的左下角读取的第一个垂直像素。
- `width`
  - : {{domxref("WebGL_API/Types", "GLsizei")}} 值，指定矩形的宽度。
- `height`
  - : {{domxref("WebGL_API/Types", "GLsizei")}} 值，指定矩形的高度。
- `format`

  - : {{domxref("WebGL_API/Types", "GLenum")}} 值，指定像素数据的格式，可能的值有：

    - `gl.ALPHA`
      - : 放弃红、绿、蓝通道读取 alpha 通道的数据。
    - `gl.RGB`
      - : 放弃 alpha 通道，读取红、绿、蓝通道的数据。
    - `gl.RGBA`
      - : 从颜色缓存区读取红、绿、蓝以及 alpha 通道的数据。

    WebGL2 增加的

    - `gl.RED`
    - `gl.RG`
    - `gl.RED_INTEGER`
    - `gl.RG_INTEGER`
    - `gl.RGB_INTEGER`
    - `gl.RGBA_INTEGER`

- `type`

  - : {{domxref("WebGL_API/Types", "GLenum")}} 值，指定像素数据的数据类型，可能的值有：

    - `gl.UNSIGNED_BYTE`
    - `gl.UNSIGNED_SHORT_5_6_5`
    - `gl.UNSIGNED_SHORT_4_4_4_4`
    - `gl.UNSIGNED_SHORT_5_5_5_1`
    - `gl.FLOAT`

    WebGL2 增加的

    - `gl.BYTE`
    - `gl.UNSIGNED_INT_2_10_10_10_REV`
    - `gl.HALF_FLOAT`
    - `gl.SHORT`
    - `gl.UNSIGNED_SHORT`
    - `gl.INT`
    - `gl.UNSIGNED_INT`
    - `gl.UNSIGNED_INT_10F_11F_11F_REV`
    - `gl.UNSIGNED_INT_5_9_9_9_REV`

- `pixels`

  - : 用于读取数据的对象，必须与参数 `type` 的类型相匹配：

    - {{jsxref("Uint8Array")}}：`gl.UNSIGNED_BYTE`。
    - {{jsxref("Uint16Array")}}：`gl.UNSIGNED_SHORT_5_6_5`、`gl.UNSIGNED_SHORT_4_4_4_4` 或 `gl.UNSIGNED_SHORT_5_5_5_1`。
    - {{jsxref("Float32Array")}}：`gl.FLOAT`。

- `dstOffset` {{optional_inline}}
  - : 偏移量，默认为 0。

### 返回值

无（{{jsxref("undefined")}}）。

### 异常

- `gl.INVALID_ENUM`：如果 `format` 或 `type` 不是可接受的值，则会引发此错误。
- `gl.INVALID_OPERATION`：抛出此错误可能的原因：

  - `type` 是 `gl.UNSIGNED_SHORT_5_6_5` 且 `format` 不是 `gl.RGB` 。
  - `type` 是 `gl.UNSIGNED_SHORT_4_4_4_4` 且 `format` 不是 `gl.RGBA`。
  - `type` 与类型化数组 `pixels` 的类型不匹配。

- `gl.INVALID_FRAMEBUFFER_OPERATION`：如果当前绑定的帧缓冲区未完成，则引发此错误。

## 示例

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const pixels = new Uint8Array(
  gl.drawingBufferWidth * gl.drawingBufferHeight * 4,
);
gl.readPixels(
  0,
  0,
  gl.drawingBufferWidth,
  gl.drawingBufferHeight,
  gl.RGBA,
  gl.UNSIGNED_BYTE,
  pixels,
);
console.log(pixels); // Uint8Array
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [类型化数组](/zh-CN/docs/Web/JavaScript/Typed_arrays)
