---
title: 初识 WebGL
slug: Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL
---

{{DefaultAPISidebar("WebGL")}} {{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}

[WebGL](https://www.khronos.org/webgl/) 使得在支持 HTML 的 [`canvas`](/zh-CN/docs/Web/API/Canvas_API) 标签的浏览器中，不需要安装任何插件，便可以使用基于 [OpenGL ES](https://www.khronos.org/opengles/) 2.0 的 API 在 canvas 中进行 2D 和 3D 渲染。WebGL 程序包括用 JavaScript 写的控制代码，以及在图形处理单元（GPU, Graphics Processing Unit）中执行的着色代码（GLSL，注：GLSL 为 OpenGL 着色语言）。WebGL 元素可以和其他 HTML 元素混合使用，并且可以和网页其他部分或者网页背景结合起来。

本文将向你介绍 WebGL 的基本用法。此处假定你对三维图形方面的数学知识已经有一定的理解，本文也不会试图向你教授 3D 图像概念本身。

本文的代码也可以在这里下载 [GitHub 上的 webgl-examples 文件夹](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial)。

[THREE.js](https://threejs.org/)和[BABYLON.js](https://www.babylonjs.com/)等很多框架封装了 WebGL，提供了各个平台之间的兼容性。使用这些框架而非原生的 WebGL 可以更容易地开发 3D 应用和游戏。

## 准备 3D 渲染

为了使用 WebGL 进行 3D 渲染，你首先需要一个 canvas 元素。下面的 HTML 片段用来建立一个 canvas 元素并设置一个 onload 事件处理程序来初始化我们的 WebGL 上下文。

```html
<body onload="main()">
  <canvas id="glcanvas" width="640" height="480">
    你的浏览器似乎不支持或者禁用了 HTML5 <code>&lt;canvas&gt;</code> 元素。
  </canvas>
</body>
```

### 准备 WebGL 上下文

我们的 JavaScript 代码中的 `main()` 函数将会在文档加载完成之后被调用。它的任务是设置 WebGL 上下文并开始渲染内容。

```js
// 从这里开始
function main() {
  const canvas = document.querySelector("#glcanvas");
  // 初始化 WebGL 上下文
  const gl = canvas.getContext("webgl");

  // 确认 WebGL 支持性
  if (!gl) {
    alert("无法初始化 WebGL，你的浏览器、操作系统或硬件等可能不支持 WebGL。");
    return;
  }

  // 使用完全不透明的黑色清除所有图像
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // 用上面指定的颜色清除缓冲区
  gl.clear(gl.COLOR_BUFFER_BIT);
}
```

我们所要做的第一件事就是是获取 canvas 的引用，把它保存在‘canvas’变量里。

当我们获取到 canvas 之后，我们会调用[getContext](/zh-CN/docs/Web/API/HTMLCanvasElement/getContext) 函数并向它传递 `"webgl"` 参数，来尝试获取[WebGLRenderingContext](/zh-CN/docs/Web/API/WebGLRenderingContext)。如果浏览器不支持 webgl, `getContext` 将会返回 `null`，我们就可以显示一条消息给用户然后退出。

如果 WebGL 上下文成功初始化，变量‘gl’会用来引用该上下文。在这个例子里，我们用黑色清除上下文内已有的元素。（用背景颜色重绘 canvas）。

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample1/index.html', 670, 510) }}

[查看完整的源码](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample1) | [在新标签页中查看演示](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample1/)

## 参见

- [WebGL 介绍](https://dev.opera.com/articles/introduction-to-webgl-part-1/): 由 Luz Caballero 所著，发布在 dev.opera.com。这篇文章说明 WebGL 是什么，解释了 WebGL 是如何工作的 (介绍了渲染管线的概念)，并且介绍了一些 WebGL 库。
- [WebGL 基础](https://webglfundamentals.org/)
- [现代 OpenGL 介绍：](https://duriansoftware.com/joe/An-intro-to-modern-OpenGL.-Table-of-Contents.html) 由 Joe Groff 写的一系列关于 OpenGL 的不错的文章，提供了一个清晰的介绍，从 OpenGL 的历史到图形管线概念，也包括一些说明 OpenGL 如何工作的例子，如果你对 OpenGL 没有任何概念的话，这是不错的出发点。

{{Next("Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context")}}
