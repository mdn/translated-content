---
title: 使用 WebGL 扩展
slug: Web/API/WebGL_API/Using_Extensions
---

{{DefaultAPISidebar("WebGL")}}

WebGL，像它的姐妹 API（OpenGL 和 OpenGL ES），支持使用扩展（extension）。可在 [khronos webgl extension registry](https://www.khronos.org/registry/webgl/extensions/) 查看完整的扩展列表。

> **备注：** 不像别的 GL API，在 WebGL 中，扩展只有在明确需要的情况下才会加载。

## 规范扩展名、供应商前缀和首选项

扩展（extension）在未被官方正式制定为标准前（但仅当它们处于草案阶段时），某些浏览器厂商可能会支持 WebGL 扩展。这样的话，扩展的名字应该加上相应的厂商前缀（`MOZ_`、`WEBKIT_` 等），否则这个扩展只能在浏览器切换了偏好设置的前提下生效。

如果你希望使用最前沿的扩展，并希望在规范被批准后可以继续使用（当然，假设扩展不会以不兼容的方式更改），你可以查询规范扩展名称以及供应商扩展名称。例如：

```js
const ext =
  gl.getExtension("OES_vertex_array_object") ||
  gl.getExtension("MOZ_OES_vertex_array_object") ||
  gl.getExtension("WEBKIT_OES_vertex_array_object");
```

请注意，不鼓励使用供应商前缀，因此大多数浏览器使用功能标志（feature flag）而不是供应商前缀后面实施实验性扩展。

功能标志有：

- Firefox：`webgl.enable-draft-extensions`
- 基于 Chromium 的浏览器（Chrome、Opera）：`chrome://flags/#enable-webgl-draft-extensions`

## 命名约定

WebGL 扩展以“ANGLE”、“OES”、“EXT”、“WEBGL”为前缀。这些前缀反映了来源和意图：

- `ANGLE_`：由 [ANGLE library](https://en.wikipedia.org/wiki/ANGLE_%28software%29) 的作者编写的扩展。
- `OES_` 和 `KHR_`：由各自的架构审查委员会（Khronos）批准的对 OpenGL ES（OES）或 OpenGL API 扩展的功能的镜像。
- `OVR_`：针对虚拟现实进行优化的扩展。
- `EXT_`：从其他 OpenGL ES 或 OpenGL API 扩展镜像的扩展。
- `WEBGL_`：特定于 WebGL 的扩展，旨在与多种 Web 浏览器兼容。它也应该用于源自 OpenGL ES 或 OpenGL API 的扩展，但其行为已被显著改变。

## 查询可用的扩展程序

WebGL 上下文支持查询可用的扩展。

```js
const available_extensions = gl.getSupportedExtensions();
```

{{domxref("WebGLRenderingContext.getSupportedExtensions()")}} 方法返回一个字符串数组，每个字符串对应一个支持的扩展。

## 扩展列表

当前的扩展有：

- {{domxref("ANGLE_instanced_arrays")}}
- {{domxref("EXT_blend_minmax")}}
- {{domxref("EXT_color_buffer_float")}}
- {{domxref("EXT_color_buffer_half_float")}}
- {{domxref("EXT_disjoint_timer_query")}}
- {{domxref("EXT_float_blend")}} {{experimental_inline}}
- {{domxref("EXT_frag_depth")}}
- {{domxref("EXT_shader_texture_lod")}}
- {{domxref("EXT_sRGB")}}
- {{domxref("EXT_texture_compression_bptc")}}
- {{domxref("EXT_texture_compression_rgtc")}}
- {{domxref("EXT_texture_filter_anisotropic")}}
- {{domxref("EXT_texture_norm16")}}
- {{domxref("KHR_parallel_shader_compile")}}
- {{domxref("OES_element_index_uint")}}
- {{domxref("OES_fbo_render_mipmap")}}
- {{domxref("OES_standard_derivatives")}}
- {{domxref("OES_texture_float")}}
- {{domxref("OES_texture_float_linear")}}
- {{domxref("OES_texture_half_float")}}
- {{domxref("OES_texture_half_float_linear")}}
- {{domxref("OES_vertex_array_object")}}
- {{domxref("OVR_multiview2")}}
- {{domxref("WEBGL_color_buffer_float")}}
- {{domxref("WEBGL_compressed_texture_astc")}}
- {{domxref("WEBGL_compressed_texture_etc")}}
- {{domxref("WEBGL_compressed_texture_etc1")}}
- {{domxref("WEBGL_compressed_texture_pvrtc")}}
- {{domxref("WEBGL_compressed_texture_s3tc")}}
- {{domxref("WEBGL_compressed_texture_s3tc_srgb")}}
- {{domxref("WEBGL_debug_renderer_info")}}
- {{domxref("WEBGL_debug_shaders")}}
- {{domxref("WEBGL_depth_texture")}}
- {{domxref("WEBGL_draw_buffers")}}
- {{domxref("WEBGL_lose_context")}}
- {{domxref("WEBGL_multi_draw")}}

## 启用扩展

在一个扩展可用之前，必须使用 {{domxref("WebGLRenderingContext.getExtension()")}} 来启用它。例如：

```js
const float_texture_ext = gl.getExtension("OES_texture_float");
```

如果不支持扩展，则返回值为 `null`，否则为扩展对象。

## 扩展对象

如果扩展定义了 WebGL 核心规范中不可用的特定符号或函数，则它们将在调用 `gl.getExtension()` 后返回的扩展对象中可用。

## 参见

- {{domxref("WebGLRenderingContext.getSupportedExtensions()")}}
- {{domxref("WebGLRenderingContext.getExtension()")}}
- [webglreport.com](https://webglreport.com/)
