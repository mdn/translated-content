---
title: WebGL 的例子
slug: Web/API/WebGL_API/By_example
---

{{DefaultAPISidebar("WebGL")}}{{Next("Web/API/WebGL_API/By_example/Detect_WebGL")}}

WebGL *例子*是一系列附有简短的解释的样本用来展示 WebGL 的概念和功能。这些示例根据主题和难度级别进行排序，涵盖 WebGL 渲染上下文，着色器编程，纹理，几何图形，用户交互等。

## 主题例子

这些范例是有浅到深的，它们除了是一个个可以让你实现的例子外，还和主题高度重合，当我们需要在中级和高级阶段实现这个例子时有时我们会重复此例子的基础内容。

在第一个程序中，并没有尝试着色着色器，几何图形和使用{{Glossary("GPU")}} 内存，这里的示例以渐进的方式探索 WebGL。我们相信它会带来更有效的学习体验，并最终更深入地理解底层概念。

有关这些例子的解释可以在代码的正文和注释中找到。你应该阅读所有注释，因为更高级的示例不会重复注释以前的代码。

### 开始了解渲染上下文

- [检测 WebGL](/zh-CN/docs/Web/API/WebGL_API/By_example/Detect_WebGL)
  - : 这个例子演示如何检测 {{Glossary("WebGL")}} 渲染上下文并且反馈给用户。
- [Clearing with colors](/zh-CN/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)
  - : How to clear the rendering context with a solid color.
- [Clearing by clicking](/zh-CN/docs/Web/API/WebGL_API/By_example/Clearing_by_clicking)
  - : How to combine user interaction with graphics operations. Clearing the rendering context with a random color when the user clicks.
- [Simple color animation](/zh-CN/docs/Web/API/WebGL_API/By_example/Simple_color_animation)
  - : A very basic color animation, done by clearing the {{Glossary("WebGL")}} drawing buffer with a different random color every second.
- [Color masking](/zh-CN/docs/Web/API/WebGL_API/By_example/Color_masking)
  - : Modifying random colors by applying color masking and thus limiting the range of displayed colors to specific shades.
- [Basic scissoring](/zh-CN/docs/Web/API/WebGL_API/By_example/Basic_scissoring)
  - : How to draw simple rectangles and squares with scissoring operations.
- [Canvas size and WebGL](/zh-CN/docs/Web/API/WebGL_API/By_example/Canvas_size_and_WebGL)
  - : The example explores the effect of setting (or not setting) the canvas size to its element size in {{Glossary("CSS")}} pixels, as it appears in the browser window.
- [Boilerplate 1](/zh-CN/docs/Web/API/WebGL_API/By_example/Boilerplate_1)
  - : The example describes repeated pieces of code that will be hidden from now on, as well as defining a JavaScript utility function to make WebGL initialization easier.
- [Scissor animation](/zh-CN/docs/Web/API/WebGL_API/By_example/Scissor_animation)
  - : Some animation fun with scissoring and clearing operations.
- [Raining rectangles](/zh-CN/docs/Web/API/WebGL_API/By_example/Raining_rectangles)
  - : A simple game that demonstrates clearing with solid colors, scissoring, animation, and user interaction.

### Shader programming basics

- [Hello GLSL](/zh-CN/docs/Web/API/WebGL_API/By_example/Hello_GLSL)
  - : A very basic shader program that draws a solid color square.
- [Hello vertex attributes](/zh-CN/docs/Web/API/WebGL_API/By_example/Hello_vertex_attributes)
  - : Combining shader programming and user interaction through vertex attributes.
- [Textures from code](/zh-CN/docs/Web/API/WebGL_API/By_example/Textures_from_code)
  - : A simple demonstration of procedural texturing with fragment shaders.

### Miscellaneous advanced examples

- [Video textures](/zh-CN/docs/Web/API/WebGL_API/By_example/Video_textures)
  - : This example demonstrates how to use video files as textures.

{{Next("Web/API/WebGL_API/By_example/Detect_WebGL")}}
