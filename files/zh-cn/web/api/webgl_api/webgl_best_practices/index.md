---
title: WebGL best practices
slug: Web/API/WebGL_API/WebGL_best_practices
---

{{DefaultAPISidebar("WebGL")}}

WebGL 是一个复杂的 API，通常我们不能明显的知道它的推荐使用方式。该页面涵盖了各种专业知识的建议，不仅仅是列举出什么该做，什么不该做，还有详细的解释为什么要这样做。你可以将本文档作为指导你选择的方法，确保你无论在何种浏览器以及硬件上都使用了正确的技巧。

## 需要避免的事情

- 确保应用程序运行时不会产生任何 WebGL 错误（如 getError() 返回的）. In Firefox, every WebGL error (until a certain limit), and some other WebGL issues, are reported as a JavaScript warning with a descriptive message. 在 Firefox 中，所有 WebGL 错误（直至超出数量限制）以及其他一些 WebGL 问题，都会以一段提供描述的 JavaScript 警告报告出来。你不想自己的应用在用户的控制台打印出一堆东西对吧？你当然不想了。
- 你应该永远不去触碰 WebGL shader 里的 `#ifdef GL_ES`；虽然前边的一些例子使用了这个，这并无必要，因为这个条件判断在 WebGL shader 中始终为 true。
- 在 fragment shader 中使用 `highp` 精度将阻碍你的内容在某些旧的移动设备上正确运行。这里，你可以使用 `mediump`；但是，你需要知道，由于在大多移动设备上的精度丢失，这经常导致渲染失败，这在典型的 PC 机型上没有问题。通常来说，在 vertex 和 fragment shader 中仅使用 `highp` ，除非 shaders 通过了各大平台的测试。从 Firefox 11 开始，WebGL 的 `getShaderPrecisionFormat()` 函数的实现，允许你判断 `highp` 是否得到支持，进而允许你可以查询到实际的精度。

## 需要记住的事情

- 在客户端/浏览器使用某些 WebGL 功能前，还是建议先使用 WebGL `getParameter()` 方法，获取此类参数的范围，这些数据反映了你的客户端能够支持的真实应用范围。例如，使用 `webgl.getParameter(webgl.MAX_TEXTURE_SIZE)`可以查询设备上支持的最大的 2D 纹理尺寸。从 Firefox 10 开始，WebGL 属性 `webgl.min_capability_mode` 则可以被用来测试最小性能模式下的实际表现，以测试可移植性。
- 特别要注意的是，只有在 `webgl.getParameter(webgl.MAX_VERTEX_TEXTURE_IMAGE_UNITS)` 大于零时，才能使用 vertex shaders 中的纹理。然而，目前的移动硬件上是不支持的 (译者：待确认文档时效性)。
- 大多数 WebGL 扩展的可用性取决于客户端。在使用 WebGL 扩展时，如果可能的话，尝试通过优雅地适应不支持它们的情况，使它们成为可选的。从 Firefox 10 开始，属性 `webgl.disable-extensions` 允许模拟列出哪些扩展是不支持的，以测试可移植性。
- 另外，即使支持 `OES_texture_float` 扩展，也可能不支持渲染浮点类型数据的纹理。通常，这在当前的移动硬件上是不支持的 (译者：待确认文档时效性)。要检查是否支持浮点类型数据，必须调用 `checkFramebufferStatus()` 来验证。
- 实际渲染到画布的分辨率可以不同于样式表最终强制画布显示的分辨率。如果考虑性能，你应该试着渲染到一个低分辨率 WebGL 上下文，并使用 CSS 来升级它的画布到你想要的尺寸。

## 一般性能提示

- Anything that requires syncing the CPU and GPU sides is potentially very slow, so if possible you should try to avoid doing that in your main rendering loops. This includes the following WebGL calls: `getError()`, `readPixels()`, and `finish()`. WebGL getter calls such as `getParameter()` and `getUniformLocation()` should be considered slow too, so try to cache their results in a JavaScript variable.
- Fewer, larger draw operations will improve performance. If you have 1000 sprites to paint, try to do it as a single `drawArrays()` or `drawElements()` call. You can draw degenerate (flat) triangles if you need to draw discontinuous objects as a single `drawArrays()` call.
- Fewer state changes will also improve performance. In particular, if you can pack multiple images into a single texture and select them by using the appropriate texture coordinates, that can help you do fewer texture binding changes, which improves performance.
  - In some rare cases, packing greyscale textures which belong together into the color channels of a single texture might help.

- Smaller textures perform better than larger ones. For this reason, mipmapping can be a performance win.
- Simpler shaders perform better than complex ones. In particular, if you can remove an `if` statement from a shader, that will make it run faster. Division and math functions like `log()` should be considered expensive too.
  - However, nowadays even mobile devices possess powerful GPUs that are capable of running even relatively complex shader programs. Moreover, because shaders are compiled, the eventual machine code that actually runs on the hardware may be highly optimized. What may seem like an expensive function call may in fact compile into only few (or even a single) machine instructions. This is particularly true for {{Glossary("GLSL")}} functions that typically operate on vectors, such as `normalize()`, `dot()` and `mix()`. The best advice in that regard is to use the built-in functions, rather than try to implement, for example, one's own version of a dot-product or linear interpolation, which may in fact compile to larger and less optimized machine code. Finally, it is important to keep in mind that GPUs are constructed to do complex mathematical calculations in hardware, and therefore, may support math functions, such as `sin()`, `cos()` and other, through dedicated machine instructions.

- Do as much as you can in the vertex shader, rather than in the fragment shader. Because, per rendering pass, fragment shaders run many more times than vertex shaders, any calculation that can be done on the vertices and then just interpolated among fragments is a performance boon (this interpolation is done "automagically" for you, through the fixed functionality rasterization phase of the OpenGL pipeline). For example, a simple animation of a textured surface can be achieved through a time-dependent transformation of texture coordinates (simplest case is to add a uniform vector to the texture coordinates attribute vector). If visually acceptable, one can transform the texture coordinates in the vertex shader rather than in the fragment shader, to get better performance.
- Always have vertex attrib 0 array enabled. If you draw with vertex attrib 0 array disabled, you will force the browser to do complicated emulation when running on desktop OpenGL (e.g. on Mac OSX). This is because in desktop OpenGL, nothing gets drawn if vertex attrib 0 is not array-enabled. You can use `bindAttribLocation()` to force a vertex attribute to use location `0`, and use `enableVertexAttribArray()` to make it array-enabled.
