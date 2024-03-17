---
title: Web 中的 3D 游戏
slug: Games/Techniques/3D_on_the_web
l10n:
  sourceCommit: af17418720844a3db9825011a533d10722051bfc
---

{{GamesSidebar}}

为了 web 上丰富的游戏体验，一个好武器是 webGL，它可以在 HTML {{htmlelement("canvas")}} 元素上渲染。WebGL 基本上是 Web 的 OpenGL ES 2.0 版本——作为一个 JavaScript API，它提供了能构建丰富的交互式动画和游戏的工具。你可以使用硬件加速的 JavaScript 生成和呈现动态 3D 图像。

## 文档和浏览器支持

[WebGL](/zh-CN/docs/Web/API/WebGL_API) 项目的文档和规范由 [Khronos Group 维护](https://www.khronos.org/)，而非大部分 Web API 采用的 W3C。它很好地支持了现代浏览器甚至是移动手机，由此你无需担心太多。主流浏览器均支持 WebGL，你需要关注的仅仅是在你使用的设备上进行优化。

WebGL 2.0（基于 OpenGL ES 3.0）将在不久的将来发布，它将带来许多改进，并将帮助开发人员使用当前强大的硬件为现代 web 构建游戏。

## 对基本 3D 理论的解释

三维理论的基本原理围绕三维空间中的图形展开，并使用坐标系来计算它们的位置。请参阅我们的[解释基本 3D 理论](/zh-CN/docs/Games/Techniques/3D_on_the_web/Basic_theory)文章，了解你需要的所有信息。

## 进阶概念

使用 WebGL，可以做更多事情。应该深入学习一些高级概念，如着色器、碰撞检测或最新的热门话题：Web 虚拟现实。

### 着色器

值得一提的是着色器，其本身有很多值得探讨的地方。着色器使用一种特殊的 OpenGL 着色语言——GLSL，其语法类似于 C 语言，由图形管道直接执行。着色器可分为顶点着色器和片段着色器（或像素着色器），前者将形状位置转换为真实的 3D 绘图坐标，后者则计算渲染颜色和其他属性。你一定要看看 [GLSL 着色器](/zh-CN/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders)这篇文章，了解更多关于它们的信息。

### 碰撞检测

很难想象没有碰撞检测的游戏会是什么样子——我们总是需要计算出物体什么时候碰撞到另外一个物体。我们有相关信息可供你学习：

- [2D 碰撞检测](/zh-CN/docs/Games/Techniques/2D_collision_detection)
- [3D 碰撞检测](/zh-CN/docs/Games/Techniques/3D_collision_detection)

### WebXR

虚拟现实的概念并不新鲜，但由于 [Meta Quest](https://www.meta.com/quest/)、[WebXR API](/zh-CN/docs/Web/API/WebXR_Device_API)（目前处于试验阶段）等硬件的进步，它正风靡网络，用于从 XR 硬件捕捉信息并将其提供给 JavaScript 应用程序使用。更多信息，请阅读 [WebXR——Web 虚拟和增强现实](/zh-CN/docs/Games/Techniques/3D_on_the_web/WebXR)。

还有一篇[用 A-Frame 构建基本演示](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)的文章，向你展示了使用 [A-Frame](http://aframe.io/) 框架构建 3D 环境的虚拟现实是多么的简单。

## 库和框架的兴起

编码原生 WebGL 是相当复杂的，从长远来看，随着项目更进一步，你会希望掌握它（请参阅我们的 [WebGL 文档](/zh-CN/docs/Web/API/WebGL_API)以开始学习）。在实际项目中，你可能也会使用框架来加快开发速度，并帮助你管理正在进行的项目。在 3D 游戏中使用框架还有助于优化性能，因为所使用的工具可以解决很多问题，这样就可以专注于构建游戏本身。

最流行的 JavaScript 3D 库是 [Three.js](https://threejs.org/)，这是一个多用途工具，它使常见的 3D 技术更易于实现。还有其他一些流行的游戏开发库和框架也值得一看。[A-Frame](https://aframe.io)、[PlayCanvas](https://playcanvas.com/) 和 [Babylon.js](http://www.babylonjs.com/) 是其中最知名的几个，它们拥有丰富的文档、在线编辑器和活跃的社区。

### 使用 A-Frame 搭建一个基础演示

A-Frame 是一个用于搭建 3D 和 VR 体验的 Web 框架。在内部，它是一个具有已声明的实体组件模式的 three.js 框架，也就是说我们只需借助 HTML 即可搭建场景。请参阅[使用 A-Frame 构建基本演示](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)子页面来了解创建演示的步骤。

### 使用 Babylon.js 搭建一个基础演示

Babylon.js 是最受开发者欢迎的 3D 游戏引擎之一。与其他任何 3D 库一样，它提供了内置函数，帮助你更快地实现常见的 3D 功能。请参阅 [使用 Babylon.js 构建基本演示](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js)子页，其中包括建立一个开发环境，构建必要的 HTML，以及编写 JavaScript 代码。

### 使用 PlayCanvas 搭建一个基础演示

PlayCanvas 是一个流行的 GitHub 开源 3D WebGL 游戏引擎，有在线编辑器和良好的文档。更多详细信息 请参阅[使用 PlayCanvas 构建基本演示](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) ，文章将进一步介绍如何使用 PlayCanvas 库和在线编辑器搭建演示。

### 使用 Three.js 搭建一个基础演示

与其他库一样，Three.js 也能带来巨大优势：无需编写数百行 WebGL 代码来构建任何有趣的内容，而是可以使用内置的辅助函数来更轻松、更快速地完成工作。请参阅[使用 Three.js 构建基本演示](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)子页面，了解创建演示的逐步过程。

### 其他工具

[Unity](https://unity.com/) 和[虚幻引擎](https://www.unrealengine.com/)可以将你的游戏通过 [asm.js](/zh-CN/docs/Games/Tools/asm.js) 输出到 [WebGL](/zh-CN/docs/Web/API/WebGL_API)，因此你可以自由地使用这些工具与技术来构建可被输出到 Web 上的游戏。

![三个三维几何图形的插图：灰色环形体、蓝色立方体和黄色圆柱体。](shapes.png)

## 下一步

通过这篇文章，我们刚刚了解了当前可用技术所能实现的功能。使用 WebGL 以及在其基础上构建的库和框架，你可以在网络上构建身临其境、美观且快速的 3D 游戏。

### 源代码

你可以在 GitHub 上找到该系列的所有源代码[演示](https://end3r.github.io/MDN-Games-3D/)。

### API

- [Canvas API](/zh-CN/docs/Web/API/Canvas_API)
- [WebGL API](/zh-CN/docs/Web/API/WebGL_API)
- [WebVR API](/zh-CN/docs/Web/API/WebVR_API)

### 框架

- [Three.js](https://threejs.org/)
- [PlayCanvas](https://playcanvas.com/)
- [Babylon.js](https://www.babylonjs.com/)
- [A-Frame](https://aframe.io/)

### 教程

- [使用 Three.js 构建基本演示](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)
- [使用 PlayCanvas 构建基本演示](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas)
- [使用 Babylon.js 构建基本演示](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js)
- [使用 A-Frame 构建基本演示](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)
