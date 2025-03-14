---
title: WebGL 教程
slug: Web/API/WebGL_API/Tutorial
---

{{DefaultAPISidebar("WebGL")}}

[WebGL](https://www.khronos.org/webgl/) 使得网页在支持 HTML {{HTMLElement("canvas")}} 标签的浏览器中，不需要使用任何插件，便可以使用基于 [OpenGL ES](https://www.khronos.org/opengles/) 2.0 的 API 在 canvas 中进行 3D 渲染。WebGL 程序由 javascript 的控制代码，和在计算机的图形处理单元（GPU, Graphics Processing Unit）中执行的特效代码 (shader code，渲染代码) 组成。WebGL 元素可以和其他 HTML 元素混合，并且会和页面的其他部分或页面背景相合成。

此教程从基础开始讲解如何使用`<canvas>` 元素来画 WebGL 图形。提供的例子会让你对 WebGL 有更清晰的认识，并且会提供代码片段方便你构建自己的内容。

## 开始之前

使用 `<canvas>` 元素并不困难，但你需要基本的 [HTML](/zh-CN/docs/Web/HTML) 和 [JavaScript](/zh-CN/docs/Web/JavaScript) 知识。一些老浏览器不支持`<canvas>` 元素和 WebGL，但所有最近的主流浏览器都支持它们。为了能在 canvas 中绘制图形，我们使用 Javascript 的上下文环境（context）对象，此对象可以动态创建图形。

## 在本教程中

- [开始 WebGL](/zh-CN/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)
  - : 如何设置 WebGL 上下文环境。
- [给 WebGL 的上下文环境添加 2D 内容](/zh-CN/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)
  - : 如何用 WebGL 渲染简单的平面化图形。
- [在 WebGL 中使用着色器 (shader) 去赋予颜色](/zh-CN/docs/Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL)
  - : 演示如何使用着色器给图形添加颜色。
- [用 WebGL 让对象动起来](/zh-CN/docs/Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL)
  - : 展示如何旋转移动物体来实现简单动画效果。
- [使用 WebGL 创建 3D 物体](/zh-CN/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL)
  - : 展示如何创建并设置一个 3D 物体动画 (这里使用立方体).
- [在 WebGL 中使用纹理贴图 (texture)](/zh-CN/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
  - : 展示如何投射纹理贴图到物体的各个面。
- [WebGL 中的灯光](/zh-CN/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
  - : 如何在 WebGL 上下文环境中模拟灯光效果。
- [WebGL 中的动画纹理贴图](/zh-CN/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
  - : 展示如何让纹理贴图动起来; 在此例中，会投射一个 Ogg 格式的视频在一个旋转立方体的各个面上。
