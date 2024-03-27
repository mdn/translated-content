---
title: WebGL
slug: Web/API/WebGL_API
---

{{DefaultAPISidebar("WebGL")}}

WebGL（Web 图形库）是一个 JavaScript API，可在任何兼容的 Web 浏览器中渲染高性能的交互式 3D 和 2D 图形，而无需使用插件。WebGL 通过引入一个与 OpenGL ES 2.0 非常一致的 API 来做到这一点，该 API 可以在 HTML5 {{HTMLElement("canvas")}} 元素中使用。这种一致性使 API 可以利用用户设备提供的硬件图形加速。

目前支持 WebGL 的浏览器有：[Firefox](/zh-CN/Firefox) 4+, [Google Chrome](http://www.google.com/chrome/) 9+, [Opera](http://www.opera.com/) 12+, [Safari](http://www.apple.com/safari/) 5.1+, [Internet Explorer](http://windows.microsoft.com/en-us/internet-explorer/browser-ie) 11+ 和 [Microsoft Edge](https://www.microsoft.com/en-us/edge) build 10240+；然而，WebGL 一些特性也需要用户的硬件设备支持。

[WebGL 2](#webgl_2) API 引入了对大部分的 OpenGL ES 3.0 功能集的支持; 它是通过{{domxref("WebGL2RenderingContext")}}界面提供的。

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
- {{domxref("EXT_sRGB")}}
- {{domxref("EXT_shader_texture_lod")}}
- {{domxref("EXT_texture_compression_bptc")}}
- {{domxref("EXT_texture_compression_rgtc")}}
- {{domxref("EXT_texture_filter_anisotropic")}}
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
- {{domxref("WEBGL_compressed_texture_atc")}}
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

### 事件

- {{domxref("HTMLCanvasElement/webglcontextlost_event", "webglcontextlost")}}
- {{domxref("HTMLCanvasElement/webglcontextrestored_event", "webglcontextrestored")}}
- {{domxref("HTMLCanvasElement/webglcontextcreationerror_event", "webglcontextcreationerror")}}

### 常量和类型

- [WebGL 常量](/zh-CN/docs/Web/API/WebGL_API/Constants)
- [WebGL 类型](/zh-CN/docs/Web/API/WebGL_API/Types)

### WebGL 2

WebGL 2 是 WebGL 的一个主要更新，它通过{{domxref("WebGL2RenderingContext")}} 接口提供。它基于 OpenGL ES 3.0，新功能包括：

- [3D textures](/zh-CN/docs/Web/API/WebGL2RenderingContext/texImage3D),
- [Sampler objects](/zh-CN/docs/Web/API/WebGLSampler),
- [Uniform Buffer objects](/zh-CN/docs/Web/API/WebGL2RenderingContext#Uniform_buffer_objects),
- [Sync objects](/zh-CN/docs/Web/API/WebGLSync),
- [Query objects](/zh-CN/docs/Web/API/WebGLQuery),
- [Tranform Feedback objects](/zh-CN/docs/Web/API/WebGLTransformFeedback),
- 部分扩展被纳入了 WebGL 2 核心： [Vertex Array objects](/zh-CN/docs/Web/API/WebGLVertexArrayObject), [instancing](/zh-CN/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced), [multiple render targets](/zh-CN/docs/Web/API/WebGL2RenderingContext/drawBuffers), [fragment depth](/zh-CN/docs/Web/API/EXT_frag_depth).

另请参见博客文章 ["WebGL 2 lands in Firefox"](https://hacks.mozilla.org/2017/01/webgl-2-lands-in-firefox/) 和 [webglsamples.org/WebGL2Samples](http://webglsamples.org/WebGL2Samples/) 几个演示。

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
  - : 此示例演示了单色形状的简单动画。检查的主题是适应宽高比差异，从多个着色器集合构建着色器程序的功能，以及 WebGL 绘图的基础知识。
- [WebGL 示例](/zh-CN/docs/Web/API/WebGL_API/By_example)
  - : 一系列带有简短说明的实时示例展示了 WebGL 的概念和功能。根据主题和难易程度对示例进行了排序，涵盖了 WebGL 渲染上下文，着色器编程，纹理，几何图形，用户交互等。

### 高级教程

- [WebGL 模型视图投影](/zh-CN/docs/Web/API/WebGL_API/WebGL_model_view_projection)
  - : 详述了常用于显示 3D 物体视图的三种核心矩阵：模型，视图和投影矩阵。
- [Web 中的矩阵运算](/zh-CN/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
  - : 讲述 3D 变换矩阵工作原理的指南——这也能在 WebGL 计算和 CSS3 变换中派上用场。

## 资源

- [Raw WebGL: WebGL 入门](https://www.youtube.com/embed/H4c8t6myAWU/?feature=player_detailpage) Nick Desaulniers 主讲的 WebGL 基础知识。如果你从未接触过底层的图形编程，这是一个开始学习初级图形编程的好地方。
- [WebGL 官网](http://www.khronos.org/webgl/) Khronos Group 的 WebGL 官方站点。
- [学习 WebGL](http://learningwebgl.com/blog/?page_id=1217) 一个关于如何使用 WebGL 的教程站点。
- [WebGL 基础](http://www.html5rocks.com/en/tutorials/webgl/webgl_fundamentals/) 一个关于 WebGL 的基础教程。
- [WebGL 试炼](http://webglplayground.net) 一个在线创建和分享 WebGL 的工具站点，非常适合快速创建一个原型或者体验一个成品。
- [WebGL Academy](http://www.webglacademy.com) 通过一个 HTML/JavaScript 编辑器来学习一个基础的 WebGl 基础知识。
- [WebGL Report](https://webglreport.com/) 一个检测浏览器是否支持 WebGL 的网站。

### 库

- [glMatrix](https://github.com/toji/gl-matrix) 创建高性能 WebGL 应用的 JavaScript 矩阵矢量库。
- [PhiloGL](/zh-CN/docs/) 一个用于数据可视化、创意编程和游戏开发的 WebGL 库。
- [Pixi.js](http://www.pixijs.com/)是一种快速的开源 2D WebGL 渲染器。
- [PlayCanvas](https://playcanvas.com/)是一个开源游戏引擎。
- [Sylvester](http://sylvester.jcoglan.com/)是一个用于处理向量和矩阵的开源库。尚未针对 WebGL 进行优化，但功能极其强大。
- [three.js](https://threejs.org/)是一个开源的，功能齐全的 3D WebGL 库。
- [Phaser](https://phaser.io/)是一个适用于 Canvas 和 WebGL 的浏览器游戏的快速，免费和有趣的开源框架。
- [RedGL](https://github.com/redcamel/RedGL2) 是一个开源 3D WebGL 库。
- [vtk.js](https://kitware.github.io/vtk-js/) 是一个 JavaScript 库，用于在浏览器中进行科学可视化。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### 兼容性说明

不仅是浏览器，GPU 本身也需要支持该特性。比如 S3 纹理压缩 (S3TC) 只在基于图睿的 GPU 的设备上可用。大多数浏览器可以通过 `webgl` 这一上下文名称来使用 WebGL，但是旧的浏览器需要使用 `experimental-webgl`。另外，将来的 [WebGL 2](/zh-CN/docs/Web/API/WebGL2RenderingContext) 只会向后兼容，其使用的上下文名称为 `webgl2` 。

### Gecko 备忘

#### WebGL 调试与检测

开始使用 Gecko 10.0，在测试中，这里有两个参数可以让你来控制 WebGL 性能：

- `webgl.min_capability_mode`
  - : 一个以布尔值存储的属性。当它的值为`True`时，将会启用最小性能模式。当这个模式启用时，WebGL 将会仅提供由其标准指定的最基本的功能集和性能支持。这样可以确保你的 WebGL 代码能够在性能的设备和浏览器上正确运行。它的默认值是`False`。
- `webgl.disable_extensions`
  - : 一个以布尔值存储的属性。当它的值为`True`时，会禁用所有的 WebGL 拓展。它的默认值是`False`。

## 参见

- [Canvas(画布)](/zh-CN/docs/Web/API/Canvas_API)
- [兼容性信息关于 WebGL 的扩展](/zh-CN/docs/Web/API/WebGLRenderingContext/getSupportedExtensions#Browser_compatibility)
