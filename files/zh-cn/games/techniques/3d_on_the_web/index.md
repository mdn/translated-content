---
title: 3D games on the Web
slug: Games/Techniques/3D_on_the_web
---

{{GamesSidebar}}

为了 web 上丰富的游戏体验，一个好武器是 webGL，并呈现在 HTML 的 {{htmlelement("canvas")}}元素上。WebGL 基本上是 Web 的 OpenGL ES 2.0 版本 — 作为一个 JavaScript API，它提供了能构建丰富的交互式动画和游戏的工具。你可以使用硬件加速的 JavaScript 生成和呈现动态 3D 图像。

## 文档和浏览器支持

[WebGL](/zh-CN/docs/Web/API/WebGL_API)项目的文档和规范由[Khronos Group 维护](https://www.khronos.org/)，而非大部分 Web APIs 采用的 W3C。它很好地支持了现代浏览器甚至是移动手机，由此你无需担心太多。主流浏览器均支持 WebGL，你需要关注的仅仅是在你使用的设备上进行优化。

目前进行的尝试是在不久的将来促成 WebGL 2.0 版本（基于 OpenGL ES 3.0 版本）的发布，WebGL 2.0 版本将会带来许多改进，并且将会帮助开发者使用现在强大的硬件，为现代 Web 开发游戏。

## 对基本 3D 理论的解释

基本 3D 理论的核心围绕在 3D 空间的形状呈现上，通过使用坐标系计算出它们的位置。寻找你所要的信息，请参考我们的文章 [Explaining basic 3D theory](/zh-CN/docs/Games/Techniques/3D_on_the_web/Basic_theory) 。

## 预先概念

你可以使用 WebGL 做很多事情。你需要深入了解和学习一些预先的理念——像着色器、碰撞检测或最新的热门话题——Web 上的虚拟现实。

### 着色器

值得提及的是着色器，着色器本身就是一个独立的故事。着色器使用 GLSL，一个特殊的和 C 语言相似的 OpenGL 着色语言，但 C 语言直接通过图像管道执行。

### 碰撞检测

很难想象没有碰撞检测的游戏——我们总是需要计算出一个物体什么时候会撞击到另一个物体。我们有一些可利用的信息供你学习：

- [2D 碰撞检测](/zh-CN/docs/Games/Techniques/2D_collision_detection)
- [3D 碰撞检测](/zh-CN/docs/Games/Techniques/3D_collision_detection)

### Web 虚拟现实

虚拟现实这一概念并不新鲜，但由于硬件的进步，它大有席卷网络之势，如[Oculus Rift](https://www.oculus.com/en-us/rift/)和（目前实验性的） [WebVR API](/zh-CN/docs/Web/API/WebVR_API)，它们从 VR 硬件中捕获信息并使其可在 JavaScript 中应用。有关的详细信息请阅读 [WebVR-Web 虚拟现实](/zh-CN/docs/Games/Techniques/3D_on_the_web/WebVR)。

还有一篇[用 A-Frame 构建基本 demo](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)的文章，向您展示了使用[A-Frame](http://aframe.io/)框架构建 3D 环境的虚拟现实是多么的简单。

## 库和框架的兴起

编码原生 WebGL 是相当复杂的，但从长远来看，您需要了解它，如果您的项目变得更加先进（请从参阅我们的[WebGL 文档](/zh-CN/docs/Web/API/WebGL_API)开始）。对于现实世界中的项目，您可能还会使用框架来加快开发，并帮助您管理正在处理的项目。使用 3D 游戏框架还有助于优化性能，因为您使用的工具会处理很多问题，因此您可以专注于构建游戏本身。

最流行的 JavaScript 3D 库是[Three.js](http://threejs.org/)，这是一个多用途工具，它使常见的 3D 技术更易于实现。还有其他流行的游戏开发库和框架值得检查。[A-Frame](https://aframe.io)、[PlayCanvas](https://playcanvas.com/)和[Babylon.js](http://www.babylonjs.com/)是最容易辨认的，拥有丰富的文档、在线编辑器和活跃的社区。

### 使用 A-Frame 搭建一个基础 Demo

A-Frame 是一个用于搭建 3D 和 VR 体验的 Web 框架。在内部，它是一个具有已声明的实体组件模式的 three.js 框架，也就是说我们只需借助 HTML 即可搭建场景。请参阅[Building up a basic demo with A-Frame](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)子页面来了解创建 Demo 的步骤。

### 使用 Babylon.js 搭建一个基础 Demo

Babylon.js 是最受开发者欢迎的 3D 游戏引擎之一。与其他任何 3D 库一样，它提供了内置函数，帮助您更快地实现常见的 3D 功能。请参阅 [Building up a basic demo with Babylon.js](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js) 子页，其中包括建立一个开发环境，构建必要的 HTML，以及编写 JavaScript 代码。

### 使用 PlayCanvas 搭建一个基础 Demo

PlayCanvas 是一个流行的 GitHub 开源 3D WebGL 游戏引擎，有在线编辑器和良好的文档。更多详细信息 请参阅[Building up a basic demo with PlayCanvas](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) ，文章将进一步介绍如何使用 PlayCanvas 库和联机编辑器搭建例子。

### 使用 Three.js 搭建一个基础 Demo

Three.js，与任何其他库一样，它给了您一个巨大的便利：不必编写数百行 WebGL 代码来构建任何有趣的东西，您可以使用内置的 helper 函数来轻松、快速地完成任务。请参阅 [Building up a basic demo with Three.js](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) 子页 逐步创建 Demo。

### 使用 Whitestorm.js 搭建一个基础 Demo

Whitestorm.js 是一个基于 [Three.js](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) 技术上的框架。它的主要区别是内置的物理引擎和插件系统 基于 NPM。请参阅 [Building up a basic demo with Whitestorm.js](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Whitestorm.js) 了解更多信息、教程和例子制作基本的，甚至配合 Three.js 制作更复杂的应用程序或游戏。

### 其他工具

[Unity](http://unity3d.com/) 和 [Unreal](https://www.unrealengine.com/) 可以将你的游戏通过 [asm.js](/zh-CN/docs/Games/Tools/asm.js) 输出到 WebGL，因此你可以自由地使用这些工具与技术来构建可被输出到 Web 上的游戏。

![](shapes.png)

## Where to go next

With this article we just scratched the surface of what's possible with currently available technologies. You can build immersive, beautiful and fast 3D games on the Web using WebGL, and the libraries and frameworks build on top of it.

### Source code

You can find all the source code for this series [demos on GitHub](http://end3r.github.io/MDN-Games-3D/).

### APIs

- [Canvas API](/zh-CN/docs/Web/API/Canvas_API)
- [WebGL API](/zh-CN/docs/Web/API/WebGL_API)
- [WebVR API](/zh-CN/docs/Web/API/WebVR_API)

### Frameworks

- [Three.js](http://threejs.org/)
- [Whitestorm.js](http://whitestormjs.xyz/) (based on Three.js)
- [PlayCanvas](https://playcanvas.com/)
- [Babylon.js](http://www.babylonjs.com/)
- [A-Frame](http://aframe.io/)

### Tutorials

- [Building up a basic demo with Three.js](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)
- [Building up a basic demo with Whitestorm.js](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Whitestorm.js)
- [Building up a basic demo with PlayCanvas](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas)
- [Building up a basic demo with Babylon.js](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js)
- [Building up a basic demo with A-Frame](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)
