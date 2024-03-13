---
title: WebGLRenderingContext.pixelStorei()
slug: Web/API/WebGLRenderingContext/pixelStorei
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.pixelStorei()`** 是 [WebGL API](/zh-CN/docs/Web/API/WebGL_API) 中用于图像预处理的函数。

## 语法

```
void gl.pixelStorei(pname, param);
```

### 参数

- pname
  - : {{domxref("Glenum")}} 类型，表示处理的方式。关于该参数可选值，请见下面表格。
- param
  - : {{domxref("GLint")}} 类型，表示 pname 处理方式的参数。关于该参数可选值，请见下面表格。

### 返回值

None.

## 像素存储参数

| 模式名称 (`pname`)                      | 描述                                                         | 类型                     | 默认值                     | param 的可选值                        | Specified in  |
| --------------------------------------- | ------------------------------------------------------------ | ------------------------ | -------------------------- | ------------------------------------- | ------------- |
| `gl.PACK_ALIGNMENT`                     | Packing of pixel data into memory                            | {{domxref("GLint")}}     | 4                          | 1, 2, 4, 8                            | OpenGL ES 2.0 |
| `gl.UNPACK_ALIGNMENT`                   | Unpacking of pixel data from memory.                         | {{domxref("GLint")}}     | 4                          | 1, 2, 4, 8                            | OpenGL ES 2.0 |
| `gl.UNPACK_FLIP_Y_WEBGL`                | 如果为 true，则把图片上下对称翻转坐标轴 (图片本身不变)。     | {{domxref("GLboolean")}} | false                      | true, false                           | WebGL         |
| `gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL`     | Multiplies the alpha channel into the other color channels   | {{domxref("GLboolean")}} | false                      | true, false                           | WebGL         |
| `gl.UNPACK_COLORSPACE_CONVERSION_WEBGL` | Default color space conversion or no color space conversion. | {{domxref("GLenum")}}    | `gl.BROWSER_DEFAULT_WEBGL` | `gl.BROWSER_DEFAULT_WEBGL`, `gl.NONE` | WebGL         |

When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, the following values are available additionally:

| Constant                 | Description                                                                             | Type                 | Default value | Allowed values (for `param`) | Specified in  |
| ------------------------ | --------------------------------------------------------------------------------------- | -------------------- | ------------- | ---------------------------- | ------------- |
| `gl.PACK_ROW_LENGTH`     | Number of pixels in a row.                                                              | {{domxref("GLint")}} | 0             | 0 to `Infinity`              | OpenGL ES 3.0 |
| `gl.PACK_SKIP_PIXELS`    | Number of pixel locations skipped before the first pixel is written into memory.        | {{domxref("GLint")}} | 0             | 0 to `Infinity`              | OpenGL ES 3.0 |
| `gl.PACK_SKIP_ROWS`      | Number of rows of pixel locations skipped before the first pixel is written into memory | {{domxref("GLint")}} | 0             | 0 to `Infinity`              | OpenGL ES 3.0 |
| `gl.UNPACK_ROW_LENGTH`   | Number of pixels in a row.                                                              | {{domxref("GLint")}} | 0             | 0 to `Infinity`              | OpenGL ES 3.0 |
| `gl.UNPACK_IMAGE_HEIGHT` | Image height used for reading pixel data from memory                                    | {{domxref("GLint")}} | 0             | 0 to `Infinity`              | OpenGL ES 3.0 |
| `gl.UNPACK_SKIP_PIXELS`  | Number of pixel images skipped before the first pixel is read from memory               | {{domxref("GLint")}} | 0             | 0 to `Infinity`              | OpenGL ES 3.0 |
| `gl.UNPACK_SKIP_ROWS`    | Number of rows of pixel locations skipped before the first pixel is read from memory    | {{domxref("GLint")}} | 0             | 0 to `Infinity`              | OpenGL ES 3.0 |
| `gl.UNPACK_SKIP_IMAGES`  | Number of pixel images skipped before the first pixel is read from memory               | {{domxref("GLint")}} | 0             | 0 to `Infinity`              | OpenGL ES 3.0 |

## Examples

Setting the pixel storage mode affects the {{domxref("WebGLRenderingContext.readPixels()")}} operations, as well as unpacking of textures with the {{domxref("WebGLRenderingContext.texImage2D()")}} and {{domxref("WebGLRenderingContext.texSubImage2D()")}} methods.

```js
var tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.pixelStorei(gl.PACK_ALIGNMENT, 4);
```

To check the values for packing and unpacking of pixel data, you can query the same pixel storage parameters with {{domxref("WebGLRenderingContext.getParameter()")}}.

```js
gl.getParameter(gl.PACK_ALIGNMENT);
gl.getParameter(gl.UNPACK_ALIGNMENT);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.readPixels()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
