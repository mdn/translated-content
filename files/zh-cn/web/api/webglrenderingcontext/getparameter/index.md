---
title: WebGLRenderingContext.getParameter()
slug: Web/API/WebGLRenderingContext/getParameter
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 **`WebGLRenderingContext.getParameter()`** 方法为传入的参数名称返回一个值。

## 语法

```
any gl.getParameter(pname);
```

### 参数

- `pname`
  - : 一个指定要返回哪个参数值的 {{domxref("GLenum")}}。请参阅下文的可能值。

### 返回值

取决于参数。

## 参数名称

### WebGL 1

使用 {{domxref("WebGLRenderingContext")}} 时，您可以查询以下 `pname` 参数。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">常量</th>
      <th scope="col">返回类型</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>gl.ACTIVE_TEXTURE</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.ALIASED_LINE_WIDTH_RANGE</code></td>
      <td>{{jsxref("Float32Array")}} (with 2 elements)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.ALIASED_POINT_SIZE_RANGE</code></td>
      <td>{{jsxref("Float32Array")}} (with 2 elements)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.ALPHA_BITS</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.ARRAY_BUFFER_BINDING</code></td>
      <td>{{domxref("WebGLBuffer")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND</code></td>
      <td>{{domxref("GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_COLOR</code></td>
      <td>{{jsxref("Float32Array")}} (with 4 values)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_DST_ALPHA</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_DST_RGB</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_EQUATION</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_EQUATION_ALPHA</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_EQUATION_RGB</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_SRC_ALPHA</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLEND_SRC_RGB</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.BLUE_BITS</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.COLOR_CLEAR_VALUE</code></td>
      <td>{{jsxref("Float32Array")}} (with 4 values)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.COLOR_WRITEMASK</code></td>
      <td>sequence&#x3C;{{domxref("GLboolean")}}> (with 4 values)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.COMPRESSED_TEXTURE_FORMATS</code></td>
      <td>{{jsxref("Uint32Array")}}</td>
      <td>
        返回压缩的纹理格式。<br /><br />当使用
        {{domxref("WEBGL_compressed_texture_s3tc")}} 扩展时：
        <ul>
          <li><code>ext.COMPRESSED_RGB_S3TC_DXT1_EXT</code></li>
          <li><code>ext.COMPRESSED_RGBA_S3TC_DXT1_EXT</code></li>
          <li><code>ext.COMPRESSED_RGBA_S3TC_DXT3_EXT</code></li>
          <li><code>ext.COMPRESSED_RGBA_S3TC_DXT5_EXT</code></li>
        </ul>
        <p>
          当使用
          {{domxref("WEBGL_compressed_texture_s3tc_srgb")}}
          扩展时：
        </p>
        <ul>
          <li><code>ext.COMPRESSED_SRGB_S3TC_DXT1_EXT</code></li>
          <li><code>ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT</code></li>
          <li><code>ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT</code></li>
          <li><code>ext.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT</code></li>
        </ul>
        当使用 {{domxref("WEBGL_compressed_texture_es3")}} 扩展时：
        <ul>
          <li><code>ext.COMPRESSED_R11_EAC</code></li>
          <li><code>ext.COMPRESSED_SIGNED_R11_EAC</code></li>
          <li><code>ext.COMPRESSED_RG11_EAC</code></li>
          <li><code>ext.COMPRESSED_SIGNED_RG11_EAC</code></li>
          <li><code>ext.COMPRESSED_RGB8_ETC2</code></li>
          <li><code>ext.COMPRESSED_RGBA8_ETC2_EAC</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ETC2</code></li>
          <li><code>ext.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC</code></li>
          <li><code>ext.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2</code></li>
          <li><code>ext.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2</code></li>
        </ul>
        当使用 {{domxref("WEBGL_compressed_texture_pvrtc")}}
        扩展时：
        <ul>
          <li><code>ext.COMPRESSED_RGB_PVRTC_4BPPV1_IMG</code></li>
          <li><code>ext.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG</code></li>
          <li><code>ext.COMPRESSED_RGB_PVRTC_2BPPV1_IMG</code></li>
          <li><code>ext.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG</code></li>
        </ul>
        当使用 {{domxref("WEBGL_compressed_texture_etc1")}}
        扩展时：
        <ul>
          <li><code>ext.COMPRESSED_RGB_ETC1_WEBGL</code></li>
        </ul>
        当使用 {{domxref("WEBGL_compressed_texture_atc")}} 扩展时：
        <ul>
          <li><code>ext.COMPRESSED_RGB_ATC_WEBGL</code></li>
          <li><code>ext.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL</code></li>
          <li><code>ext.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL</code></li>
        </ul>
        当使用 {{domxref("WEBGL_compressed_texture_astc")}}
        扩展时：
        <ul>
          <li>
            <code
              >ext.COMPRESSED_RGBA_ASTC_4x4_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR</code
            >
          </li>
          <li>
            <code
              >ext.COMPRESSED_RGBA_ASTC_5x4_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR</code
            >
          </li>
          <li>
            <code
              >ext.COMPRESSED_RGBA_ASTC_5x5_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR</code
            >
          </li>
          <li>
            <code
              >ext.COMPRESSED_RGBA_ASTC_6x5_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR</code
            >
          </li>
          <li>
            <code
              >ext.COMPRESSED_RGBA_ASTC_6x6_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR</code
            >
          </li>
          <li>
            <code
              >ext.COMPRESSED_RGBA_ASTC_8x5_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR</code
            >
          </li>
          <li>
            <code
              >ext.COMPRESSED_RGBA_ASTC_8x6_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR</code
            >
          </li>
          <li>
            <code
              >ext.COMPRESSED_RGBA_ASTC_8x8_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR</code
            >
          </li>
          <li>
            <code
              >ext.COMPRESSED_RGBA_ASTC_10x5_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR</code
            >
          </li>
          <li>
            <code
              >ext.COMPRESSED_RGBA_ASTC_10x6_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR</code
            >
          </li>
          <li>
            <code
              >ext.COMPRESSED_RGBA_ASTC_10x6_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR</code
            >
          </li>
          <li>
            <code
              >ext.COMPRESSED_RGBA_ASTC_10x10_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR</code
            >
          </li>
          <li>
            <code
              >ext.COMPRESSED_RGBA_ASTC_12x10_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR</code
            >
          </li>
          <li>
            <code
              >ext.COMPRESSED_RGBA_ASTC_12x12_KHR<br />ext.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR</code
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>gl.CULL_FACE</code></td>
      <td>{{domxref("GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.CULL_FACE_MODE</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.CURRENT_PROGRAM</code></td>
      <td>{{domxref("WebGLProgram")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_BITS</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_CLEAR_VALUE</code></td>
      <td>{{domxref("GLfloat")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_FUNC</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_RANGE</code></td>
      <td>{{jsxref("Float32Array")}} (with 2 elements)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_TEST</code></td>
      <td>{{domxref("GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DEPTH_WRITEMASK</code></td>
      <td>{{domxref("GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.DITHER</code></td>
      <td>{{domxref("GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.ELEMENT_ARRAY_BUFFER_BINDING</code></td>
      <td>{{domxref("WebGLBuffer")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.FRAMEBUFFER_BINDING</code></td>
      <td>{{domxref("WebGLFramebuffer")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.FRONT_FACE</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.GENERATE_MIPMAP_HINT</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.GREEN_BITS</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.IMPLEMENTATION_COLOR_READ_FORMAT</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.IMPLEMENTATION_COLOR_READ_TYPE</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.LINE_WIDTH</code></td>
      <td>{{domxref("GLfloat")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_CUBE_MAP_TEXTURE_SIZE</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_FRAGMENT_UNIFORM_VECTORS</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_RENDERBUFFER_SIZE</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_TEXTURE_IMAGE_UNITS</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_TEXTURE_SIZE</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VARYING_VECTORS</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VERTEX_ATTRIBS</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VERTEX_UNIFORM_VECTORS</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.MAX_VIEWPORT_DIMS</code></td>
      <td>{{jsxref("Int32Array")}} (with 2 elements)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.PACK_ALIGNMENT</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.POLYGON_OFFSET_FACTOR</code></td>
      <td>{{domxref("GLfloat")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.POLYGON_OFFSET_FILL</code></td>
      <td>{{domxref("GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.POLYGON_OFFSET_UNITS</code></td>
      <td>{{domxref("GLfloat")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.RED_BITS</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.RENDERBUFFER_BINDING</code></td>
      <td>{{domxref("WebGLRenderbuffer")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.RENDERER</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SAMPLE_BUFFERS</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SAMPLE_COVERAGE_INVERT</code></td>
      <td>{{domxref("GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SAMPLE_COVERAGE_VALUE</code></td>
      <td>{{domxref("GLfloat")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SAMPLES</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SCISSOR_BOX</code></td>
      <td>{{jsxref("Int32Array")}} (with 4 elements)</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SCISSOR_TEST</code></td>
      <td>{{domxref("GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SHADING_LANGUAGE_VERSION</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_FAIL</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_FUNC</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_PASS_DEPTH_FAIL</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_PASS_DEPTH_PASS</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_REF</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_VALUE_MASK</code></td>
      <td>{{domxref("GLuint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BACK_WRITEMASK</code></td>
      <td>{{domxref("GLuint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_BITS</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_CLEAR_VALUE</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_FAIL</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_FUNC</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_PASS_DEPTH_FAIL</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_PASS_DEPTH_PASS</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_REF</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_TEST</code></td>
      <td>{{domxref("GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_VALUE_MASK</code></td>
      <td>{{domxref("GLuint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.STENCIL_WRITEMASK</code></td>
      <td>{{domxref("GLuint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.SUBPIXEL_BITS</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_BINDING_2D</code></td>
      <td>{{domxref("WebGLTexture")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.TEXTURE_BINDING_CUBE_MAP</code></td>
      <td>{{domxref("WebGLTexture")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_ALIGNMENT</code></td>
      <td>{{domxref("GLint")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_COLORSPACE_CONVERSION_WEBGL</code></td>
      <td>{{domxref("GLenum")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_FLIP_Y_WEBGL</code></td>
      <td>{{domxref("GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL</code></td>
      <td>{{domxref("GLboolean")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.VENDOR</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.VERSION</code></td>
      <td>{{domxref("DOMString")}}</td>
      <td></td>
    </tr>
    <tr>
      <td><code>gl.VIEWPORT</code></td>
      <td>{{jsxref("Int32Array")}} (with 4 elements)</td>
      <td></td>
    </tr>
  </tbody>
</table>

### WebGL 2

使用 {{domxref("WebGL2RenderingContext")}} 时，您可以查询以下 `pname` 参数。

| 常量                                               | 返回类型                              | 描述 |
| -------------------------------------------------- | ------------------------------------- | ---- |
| `gl.COPY_READ_BUFFER_BINDING`                      | {{domxref("WebGLBuffer")}}            |      |
| `gl.COPY_WRITE_BUFFER_BINDING`                     | {{domxref("WebGLBuffer")}}            |      |
| `gl.DRAW_BUFFERi`                                  | {{domxref("GLenum")}}                 |      |
| `gl.DRAW_FRAMEBUFFER_BINDING`                      | {{domxref("WebGLFramebuffer")}}       |      |
| `gl.FRAGMENT_SHADER_DERIVATIVE_HINT`               | {{domxref("GLenum")}}                 |      |
| `gl.MAX_3D_TEXTURE_SIZE`                           | {{domxref("GLint")}}                  |      |
| `gl.MAX_ARRAY_TEXTURE_LAYERS`                      | {{domxref("GLint")}}                  |      |
| `gl.MAX_CLIENT_WAIT_TIMEOUT_WEBGL`                 | {{domxref("GLint64")}}                |      |
| `gl.MAX_COLOR_ATTACHMENTS`                         | {{domxref("GLint")}}                  |      |
| `gl.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS`      | {{domxref("GLint64")}}                |      |
| `gl.MAX_COMBINED_UNIFORM_BLOCKS`                   | {{domxref("GLint")}}                  |      |
| `gl.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS`        | {{domxref("GLint64")}}                |      |
| `gl.MAX_DRAW_BUFFERS`                              | {{domxref("GLint")}}                  |      |
| `gl.MAX_ELEMENT_INDEX`                             | {{domxref("GLint64")}}                |      |
| `gl.MAX_ELEMENTS_INDICES`                          | {{domxref("GLint")}}                  |      |
| `gl.MAX_ELEMENTS_VERTICES`                         | {{domxref("GLint")}}                  |      |
| `gl.MAX_FRAGMENT_INPUT_COMPONENTS`                 | {{domxref("GLint")}}                  |      |
| `gl.MAX_FRAGMENT_UNIFORM_BLOCKS`                   | {{domxref("GLint")}}                  |      |
| `gl.MAX_FRAGMENT_UNIFORM_COMPONENTS`               | {{domxref("GLint")}}                  |      |
| `gl.MAX_PROGRAM_TEXEL_OFFSET`                      | {{domxref("GLint")}}                  |      |
| `gl.MAX_SAMPLES`                                   | {{domxref("GLint")}}                  |      |
| `gl.MAX_SERVER_WAIT_TIMEOUT`                       | {{domxref("GLint64")}}                |      |
| `gl.MAX_TEXTURE_LOD_BIAS`                          | {{domxref("GLfloat")}}                |      |
| `gl.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS` | {{domxref("GLint")}}                  |      |
| `gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS`       | {{domxref("GLint")}}                  |      |
| `gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS`    | {{domxref("GLint")}}                  |      |
| `gl.MAX_UNIFORM_BLOCK_SIZE`                        | {{domxref("GLint64")}}                |      |
| `gl.MAX_UNIFORM_BUFFER_BINDINGS`                   | {{domxref("GLint")}}                  |      |
| `gl.MAX_VARYING_COMPONENTS`                        | {{domxref("GLint")}}                  |      |
| `gl.MAX_VERTEX_OUTPUT_COMPONENTS`                  | {{domxref("GLint")}}                  |      |
| `gl.MAX_VERTEX_UNIFORM_BLOCKS`                     | {{domxref("GLint")}}                  |      |
| `gl.MAX_VERTEX_UNIFORM_COMPONENTS`                 | {{domxref("GLint")}}                  |      |
| `gl.MIN_PROGRAM_TEXEL_OFFSET`                      | {{domxref("GLint")}}                  |      |
| `gl.PACK_ROW_LENGTH`                               | {{domxref("GLint")}}                  |      |
| `gl.PACK_SKIP_PIXELS`                              | {{domxref("GLint")}}                  |      |
| `gl.PACK_SKIP_ROWS`                                | {{domxref("GLint")}}                  |      |
| `gl.PIXEL_PACK_BUFFER_BINDING`                     | {{domxref("WebGLBuffer")}}            |      |
| `gl.PIXEL_UNPACK_BUFFER_BINDING`                   | {{domxref("WebGLBuffer")}}            |      |
| `gl.RASTERIZER_DISCARD`                            | {{domxref("GLboolean")}}              |      |
| `gl.READ_BUFFER`                                   | {{domxref("GLenum")}}                 |      |
| `gl.READ_FRAMEBUFFER_BINDING`                      | {{domxref("WebGLFramebuffer")}}       |      |
| `gl.SAMPLE_ALPHA_TO_COVERAGE`                      | {{domxref("GLboolean")}}              |      |
| `gl.SAMPLE_COVERAGE`                               | {{domxref("GLboolean")}}              |      |
| `gl.SAMPLER_BINDING`                               | {{domxref("WebGLSampler")}}           |      |
| `gl.TEXTURE_BINDING_2D_ARRAY`                      | {{domxref("WebGLTexture")}}           |      |
| `gl.TEXTURE_BINDING_3D`                            | {{domxref("WebGLTexture")}}           |      |
| `gl.TRANSFORM_FEEDBACK_ACTIVE`                     | {{domxref("GLboolean")}}              |      |
| `gl.TRANSFORM_FEEDBACK_BINDING`                    | {{domxref("WebGLTransformFeedback")}} |      |
| `gl.TRANSFORM_FEEDBACK_BUFFER_BINDING`             | {{domxref("WebGLBuffer")}}            |      |
| `gl.TRANSFORM_FEEDBACK_PAUSED`                     | {{domxref("GLboolean")}}              |      |
| `gl.UNIFORM_BUFFER_BINDING`                        | {{domxref("WebGLBuffer")}}            |      |
| `gl.UNIFORM_BUFFER_OFFSET_ALIGNMENT`               | {{domxref("GLint")}}                  |      |
| `gl.UNPACK_IMAGE_HEIGHT`                           | {{domxref("GLint")}}                  |      |
| `gl.UNPACK_ROW_LENGTH`                             | {{domxref("GLint")}}                  |      |
| `gl.UNPACK_SKIP_IMAGES`                            | {{domxref("GLint")}}                  |      |
| `gl.UNPACK_SKIP_PIXELS`                            | {{domxref("GLint")}}                  |      |
| `gl.UNPACK_SKIP_ROWS`                              | {{domxref("GLint")}}                  |      |
| `gl.VERTEX_ARRAY_BINDING`                          | {{domxref("WebGLVertexArrayObject")}} |      |

### WebGL 扩展

当使用 [WebGL 扩展](/zh-CN/docs/Web/API/WebGL_API/Using_Extensions) 时，您可以查询以下 `pname` 参数：

| 常量                                                                                                                                                                                                                                                                                                                                                                                    | 返回类型                                 | 扩展                                          | 描述                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------- | ---------------------------------------------------------- |
| `ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT`                                                                                                                                                                                                                                                                                                                                                    | {{domxref("GLfloat")}}                   | {{domxref("EXT_texture_filter_anisotropic")}} | 最大可用各向异性。                                         |
| `ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES`                                                                                                                                                                                                                                                                                                                                               | {{domxref("GLenum")}}                    | {{domxref("OES_standard_derivatives")}}       | GLSL 内置函数的导数计算精度：`dFdx`、 `dFdy` 和 `fwidth`。 |
| `ext.MAX_COLOR_ATTACHMENTS_WEBGL`                                                                                                                                                                                                                                                                                                                                                       | {{domxref("GLint")}}                     | {{domxref("WEBGL_draw_buffers")}}             | 帧缓冲区颜色附着点的最大数量。                             |
| `ext.MAX_DRAW_BUFFERS_WEBGL`                                                                                                                                                                                                                                                                                                                                                            | {{domxref("GLint")}}                     | {{domxref("WEBGL_draw_buffers")}}             | 绘图缓冲区的最大数量。                                     |
| `ext.DRAW_BUFFER0_WEBGL ext.DRAW_BUFFER1_WEBGL ext.DRAW_BUFFER2_WEBGL ext.DRAW_BUFFER3_WEBGL ext.DRAW_BUFFER4_WEBGL ext.DRAW_BUFFER5_WEBGL ext.DRAW_BUFFER6_WEBGL ext.DRAW_BUFFER7_WEBGL ext.DRAW_BUFFER8_WEBGL ext.DRAW_BUFFER9_WEBGL ext.DRAW_BUFFER10_WEBGL ext.DRAW_BUFFER11_WEBGL ext.DRAW_BUFFER12_WEBGL ext.DRAW_BUFFER13_WEBGL ext.DRAW_BUFFER14_WEBGL ext.DRAW_BUFFER15_WEBGL` | {{domxref("GLenum")}}                    | {{domxref("WEBGL_draw_buffers")}}             | 绘图缓冲区。                                               |
| `ext.VERTEX_ARRAY_BINDING_OES`                                                                                                                                                                                                                                                                                                                                                          | {{domxref("WebGLVertexArrayObjectOES")}} | {{domxref("OES_vertex_array_object")}}        | 绑定的顶点数组对象（VAO）。                                |
| `ext.TIMESTAMP_EXT`                                                                                                                                                                                                                                                                                                                                                                     | {{domxref("GLuint64EXT")}}               | {{domxref("EXT_disjoint_timer_query")}}       | 当前时间。                                                 |
| `ext.GPU_DISJOINT_EXT`                                                                                                                                                                                                                                                                                                                                                                  | {{domxref("GLboolean")}}                 | {{domxref("EXT_disjoint_timer_query")}}       | 返回 GPU 是否执行了任何不相交的操作。                      |

## 示例

```js
gl.getParameter(gl.DITHER);
gl.getParameter(gl.VERSION);
gl.getParameter(gl.VIEWPORT);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.enable()")}}
- {{domxref("WebGLRenderingContext.disable()")}}
- {{domxref("EXT_texture_filter_anisotropic")}}
- {{domxref("OES_standard_derivatives")}}
- {{domxref("WEBGL_draw_buffers")}}
- {{domxref("EXT_disjoint_timer_query")}}
