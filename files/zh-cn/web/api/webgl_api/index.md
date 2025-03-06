---
title: WebGL：web 中的 2D 的 3D 图形
slug: Web/API/WebGL_API
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{DefaultAPISidebar("WebGL")}}

**WebGL**（Web 图形库）是一种可在任何兼容的 Web 浏览器中无需使用插件即可渲染高性能交互式 3D 和 2D 图形的 JavaScript API。WebGL 通过引入一个与 OpenGL ES 2.0 高度一致的 API 来做到这一点，该 API 可以在 HTML {{HTMLElement("canvas")}} 元素中使用。这种一致性使 API 可以利用用户设备提供的硬件图形加速。

所有现代浏览器都支持 WebGL（请参阅下方的[兼容性表格](#浏览器兼容性)）；然而，用户的设备也必须支持这些特性。

[WebGL 2](#webgl_2) API 引入了对 OpenGL ES 3.0 特性集的广泛支持；它通过 {{domxref("WebGL2RenderingContext")}} 接口提供。

{{HTMLElement("canvas")}} 元素也被 [Canvas API](/zh-CN/docs/Web/API/Canvas_API) 用于在网页上进行 2D 图形处理。

## 参考

### 标准接口

- {{domxref("WebGLRenderingContext")}}
- {{domxref("WebGL2RenderingContext")}}
- {{domxref("WebGLActiveInfo")}}
- {{domxref("WebGLBuffer")}}
- {{domxref("WebGLContextEvent")}}
- {{domxref("WebGLFramebuffer")}}
- {{domxref("WebGLProgram")}}
- {{domxref("WebGLQuery")}}
- {{domxref("WebGLRenderbuffer")}}
- {{domxref("WebGLSampler")}}
- {{domxref("WebGLShader")}}
- {{domxref("WebGLShaderPrecisionFormat")}}
- {{domxref("WebGLSync")}}
- {{domxref("WebGLTexture")}}
- {{domxref("WebGLTransformFeedback")}}
- {{domxref("WebGLUniformLocation")}}
- {{domxref("WebGLVertexArrayObject")}}

### 扩展

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
- {{domxref("OES_draw_buffers_indexed")}}
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

### 事件

- {{domxref("HTMLCanvasElement/webglcontextlost_event", "webglcontextlost")}}
- {{domxref("HTMLCanvasElement/webglcontextrestored_event", "webglcontextrestored")}}
- {{domxref("HTMLCanvasElement/webglcontextcreationerror_event", "webglcontextcreationerror")}}

### 常量和类型

- [WebGL 常量](/zh-CN/docs/Web/API/WebGL_API/Constants)
- [WebGL 类型](/zh-CN/docs/Web/API/WebGL_API/Types)

### WebGL 2

WebGL 2 是对 WebGL 的一次重大更新，通过 {{domxref("WebGL2RenderingContext")}} 接口提供。它基于 OpenGL ES 3.0，新特性包括：

- [3D 纹理](/zh-CN/docs/Web/API/WebGL2RenderingContext/texImage3D)、
- [采样对象](/zh-CN/docs/Web/API/WebGLSampler)、
- [Uniform 缓冲对象](/zh-CN/docs/Web/API/WebGL2RenderingContext#uniform_缓冲对象)、
- [同步对象](/zh-CN/docs/Web/API/WebGLSync)、
- [查询对象](/zh-CN/docs/Web/API/WebGLQuery)、
- [变换反馈对象](/zh-CN/docs/Web/API/WebGLTransformFeedback)、
- 现在已成为 WebGL 2 核心的推广扩展：[顶点数组对象](/zh-CN/docs/Web/API/WebGLVertexArrayObject)、[实例化](/zh-CN/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced)、[多个渲染目标](/zh-CN/docs/Web/API/WebGL2RenderingContext/drawBuffers)、[片段深度](/zh-CN/docs/Web/API/EXT_frag_depth)。

另请参阅博客文章[“WebGL 2 在 Firefox 中发布”](https://hacks.mozilla.org/2017/01/webgl-2-lands-in-firefox/)以及 [webglsamples.org/WebGL2Samples](https://webglsamples.org/WebGL2Samples/) 上的一些演示。

## 指南和教程

下面，你将找到各种指南，以帮助你学习 WebGL 概念和教程，提供分步课程和示例。

### 指南

- [WebGL 中的数据](/zh-CN/docs/Web/API/WebGL_API/Data)
  - : 编写 WebGL 代码时使用的变量，缓冲区和其他类型数据的指南。
- [WebGL 最佳实践](/zh-CN/docs/Web/API/WebGL_API/WebGL_best_practices)
  - : 提示和建议，以帮助你提高 WebGL 内容的质量，性能和可靠性。
- [使用扩展](/zh-CN/docs/Web/API/WebGL_API/Using_Extensions)
  - : WebGL 扩展的使用指南。

### 教程

- [WebGL 教程](/zh-CN/docs/Web/API/WebGL_API/Tutorial)
  - : WebGL 核心概念的初学者指南。如果你以前没有 WebGL 的经验，那么这是一个很好的起点。

### 示例

- [一个基础的 WebGL 的 2D 动画示例](/zh-CN/docs/Web/API/WebGL_API/Basic_2D_animation_example)
  - : 此示例展示了单色形状的简单动画。涉及的主题包括适应纵横比差异、从多组着色器构建着色器程序的方法，以及在 WebGL 中进行基本绘图的基础知识。
- [WebGL 示例](/zh-CN/docs/Web/API/WebGL_API/By_example)
  - : 这是一系列附带简短解释的实时示例，旨在展示 WebGL 的概念和功能。这些示例按照主题和难度级别进行了排序，涵盖了 WebGL 渲染上下文、着色器编程、纹理、几何体、用户交互等内容。

### 高级教程

- [WebGL 模型视图投影](/zh-CN/docs/Web/API/WebGL_API/WebGL_model_view_projection)
  - : 详细解释了通常用于表示 3D 对象视图的三个核心矩阵：模型矩阵、视图矩阵和投影矩阵。
- [Web 中的矩阵运算](/zh-CN/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
  - : 有关如何在 Web 上使用 3D 变换矩阵的有用指南，适用于 WebGL 计算和 CSS 变换。

## 资源

- [Khronos WebGL 站点](https://www.khronos.org/webgl/)：Khronos 组织的 WebGL 官方站点。
- [WebGL 基本教程](https://web.developers.google.cn/articles/webgl-fundamentals)：提供了 WebGL 的基础知识。
- [Raw WebGL：WebGL 入门](https://www.youtube.com/embed/H4c8t6myAWU/?feature=player_detailpage)：来自 Nick Desaulniers 主讲的 WebGL 基础知识。
- [WebGL 演练场](http://webglplayground.net)：用于创建和共享 WebGL 项目的在线工具。适合快速制作原型和进行实验。
- [WebGL 学院](http://www.webglacademy.com)：一款 HTML/JavaScript 编辑器，提供学习 Webgl 编程基础的教程。
- [WebGL 统计](https://webglreport.com/)：一个提供不同平台上浏览器 WebGL 功能统计信息的站点。

### 库

- [three.js](https://threejs.org/) 是一个开源、功能齐全的 3D WebGL 库。
- [Babylon.js](https://www.babylonjs.com) 是一个强大、简洁且开放的游戏和 3D 渲染引擎，封装在一个友好的 JavaScript 框架中。
- [Pixi.js](https://pixijs.com/) 是一个快速、开源的 2D WebGL 渲染器。
- [Phaser](https://phaser.io/) 是一个用于 Canvas 和 WebGL 支持的浏览器游戏的快速、免费和有趣的开源框架。
- [PlayCanvas](https://playcanvas.com/) 是一个开源游戏引擎。
- [glMatrix](https://github.com/toji/gl-matrix) 是一个用于高性能 WebGL 应用程序的 JavaScript 矩阵和矢量库。
- [twgl](https://twgljs.org) 是一个用于减少 webgl 冗余的库。
- [RedGL](https://github.com/redcamel/RedGL2) 是一个开源 3D WebGL 库。
- [vtk.js](https://kitware.github.io/vtk-js/) 是一个用于在浏览器中实现科学可视化的 JavaScript 库。
- [webgl-lint](https://greggman.github.io/webgl-lint/) 将帮助查找 WebGL 代码中的错误并提供有用信息。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### 兼容性说明

除了浏览器之外，GPU 本身也需要支持该特性。例如，S3 纹理压缩（S3TC）仅在基于 Tegra 的平板电脑上可用。大多数浏览器可以通过 `webgl` 这一上下文名称来使用 WebGL，但较旧的浏览器需要 `experimental-webgl`。此外，即将推出的 [WebGL 2](/zh-CN/docs/Web/API/WebGL2RenderingContext) 完全向后兼容，其使用的上下文名称为 `webgl2`。

### Gecko 说明

#### WebGL 调试与检测

Firefox 提供了两个可用的偏好设置，让你可以控制 WebGL 的测试功能：

- `webgl.min_capability_mode`
  - : 一个布尔属性，当设为 `true` 时，会启用最低功能模式。在这种模式下，WebGL 会被配置成仅支持 WebGL 规范要求的最低限度的特性集和功能。这可确保你的 WebGL 代码在任何设备或浏览器上都能运行，无论它们的能力如何。默认情况下，该属性为 `false`。
- `webgl.disable_extensions`
  - : 一个布尔属性，当设为 `true` 时，会禁用所有 WebGL 扩展。默认情况下，该属性为 `false`。

## 参见

- [Canvas API](/zh-CN/docs/Web/API/Canvas_API)
- [有关 WebGL 扩展的兼容性信息](/zh-CN/docs/Web/API/WebGLRenderingContext/getSupportedExtensions#浏览器兼容性)
