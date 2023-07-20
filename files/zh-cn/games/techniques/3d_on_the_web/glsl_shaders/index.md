---
title: GLSL 着色器
slug: Games/Techniques/3D_on_the_web/GLSL_Shaders
---

{{GamesSidebar}}

使用 GLSL 的着色器（shader），GLSL 是一门特殊的有着类似于 C 语言的语法，在图形管道 (graphic pipeline) 中直接可执行的 OpenGL 着色语言。着色器有两种类型——顶点着色器 (Vertex Shader) 和片段着色器（Fragment Shader）。前者是将形状转换到真实的 3D 绘制坐标中，后者是计算最终渲染的颜色和其他属性用的。

GLSL 不同于 JavaScript, 它是强类型语言，并且内置很多数学公式用于计算向量和矩阵。快速编写着色器非常复杂，但创建一个简单的着色器并不难。在这篇文章我们将介绍使用着色器的基础知识，并且构建一个使用 Three.js 的例子来加速代码编写。

你可能记得[基本原理](/zh-CN/docs/Games/Techniques/3D_on_the_web/Basic_theory)那篇文章，一个顶点 (vertex) 是在空间中有自己 3D 坐标的点，并且通常包含些被定义的其他信息。空间本身会被坐标系统定义。在那个 3D 空间中一切都是关于形状的呈现。

## 着色器类型

一个着色器实际上就是一个绘制东西到屏幕上的函数。着色器运行在 GPU 中，它对这些操作进行了很多的优化，这样你就可以卸载很多不必要的 CPU, 然后集中处理能力去执行你自己的代码。

### 顶点着色器

顶点着色器操作 3D 空间的坐标并且每个顶点都会调用一次这个函数。其目的是设置 `gl_Position` 变量——这是一个特殊的全局内置变量，它是用来存储当前顶点的位置：

```glsl
void main() {
  gl_Position = makeCalculationsToHaveCoordinates;
}
```

这个 `void main()` 函数是定义全局`gl_Position` 变量的标准方式。所有在这个函数里面的代码都会被着色器执行。如果将 3D 空间中的位置投射到 2D 屏幕上这些信息都会保存在计算结果的变量中。

### 片段着色器

片段 (或者纹理) 着色器 在计算时定义了每像素的 RGBA 颜色 — 每个像素只调用一次片段着色器。这个着色器的作用是设置 `gl_FragColor` 变量，也是一个 GLSL 内置变量：

```glsl
void main() {
  gl_FragColor = makeCalculationsToHaveColor;
}
```

计算结果包含 RGBA 颜色信息。

## 示例

让我们构建一个简单的例子来解释这些着色器的动作。假设你已经看过[Three.js 教程](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)并掌握了场景，物体和材质的基本概念。

> **备注：** 记住你没必要使用 Three.js 或者其他库来编写着色器——纯[WebGL](/zh-CN/docs/Web/API/WebGL_API) 完全够了。我们这里使用 Three.js 来制作背景代码更简单和易理解。所以你只需关注着色器代码。Three.js 和其他 3D 库给你抽象了很多东西出来——如果你想要用纯 WebGL 创建这个例子，你得写很多其他的代码才能运行。

### 环境设置

要开始编写 WebGL 着色器你不需要做太多，只需：

- 确保你在使用对 [WebGL](/zh-CN/docs/Web/API/WebGL_API) 有良好支持的现代浏览器，比如最新版的 Firefox 或 Chrome.
- 创建一个目录保存你的实验。
- 拷贝一份的 [压缩版的 Three.js 库](http://threejs.org/build/three.min.js) 到你的目录。

### HTML 结构

这是将用到的 HTML 结构。

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>MDN Games: Shaders demo</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-size: 0;
      }
      canvas {
        width: 100%;
        height: 100%;
      }
    </style>
    <script src="three.min.js"></script>
  </head>
  <body>
    <script id="vertexShader" type="x-shader/x-vertex">
      // 顶点着色器代码在这里
    </script>
    <script id="fragmentShader" type="x-shader/x-fragment">
      // 片段着色器代码在这里
    </script>
    <script>
      // 场景设置在这里
    </script>
  </body>
</html>
```

其包含了一些基本信息比如文档的 {{htmlelement("title")}}，并且设置了 {{htmlelement("canvas")}} 元素 css 样式的宽高，Three.js 会插入到页面中占满整个可视区域。{{htmlelement("script")}} 元素在包含 Three.js 库的 {{htmlelement("head")}} 中。我们的代码将写在 {{htmlelement("body")}} 标签中的 script 标签中：

1. 首先将包含顶点着色器。
2. 然后包含片段着色器。
3. 最后会包含一些生成实际场景的 JavaScript 代码。

阅读之前，复制这些代码到一个新的文本文件中，保存到你的工作目录作为 `index.html`. 我们将在这个文件中创建一个简单的立方体来解释着色器是如何工作的。

### 立方体源代码

我们可以复用[Building up a basic demo with Three.js](/zh-CN/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) 中立方体的源代码，大多数元素例如渲染器，摄像机和灯光都没有发生改变，但是基本的材质会用到自己写的着色器。

去[cube.html file on GitHub](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/cube.html)中，复制第二个{{htmlelement("script")}}元素中所有的 JavaScript 代码，粘贴到当前例子中的第三个`<script>` 标签中。保存并运行 `index.html` — 然后你会看到一个蓝色立方体

### 顶点着色器代码

让我们继续编写顶点着色器 — 添加下面这段代码到你 body 的第一个 `<script>` 标签：

```glsl
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x+10.0, position.y, position.z+5.0, 1.0);
}
```

每次的`gl_Position` 的结果是计算 model-view 矩阵和投射矩阵和投射矩阵相乘并得到最后的顶点位置。

> **备注：** 你可以在 [顶点处理](/zh-CN/docs/Games/Techniques/3D_on_the_web/Basic_theory#Vertex_processing)中学到更多关于模型，视图和投射变换，并且你可以在文末看到更多学习链接。

`projectionMatrix` 和 `modelViewMatrix` 两个函数都是 Three.js 提供的，并且传入了一个新的 3D 位置向量，转成着色器之后直接导致立方体向 `x` 轴移动 10 个单位，向`z` 轴移动了 5 个单位。我们可以忽略第四个参数并且保持为默认的`1.0` ; 这是用来控制 3D 空间中订单位置裁剪的，这个例子中不需要。

### 纹理着色器代码

现在我们将添加纹理着色器代码 — 将以下代码复制到第二个 `<script>` 标签中：

```glsl
void main() {
  gl_FragColor = vec4(0.0, 0.58, 0.86, 1.0);
}
```

这将设置一个 RGBA 颜色来重建当前的蓝色灯光 — 前三个浮点数 (范围是 0.0 到 1.0) 代表红，绿，蓝，第四个值代表 alpha 通道，控制透明度 (0.0 完全透明，1.0 是完全不透明).

### 设置着色器

实际上是创建了一个新的着色器给立方体，先用 `basicMaterial` 来定义：

```js
// var basicMaterial = new THREE.MeshBasicMaterial({color: 0x0095DD});
```

然后创建 [`shaderMaterial`](http://threejs.org/docs/#Reference/Materials/ShaderMaterial):

```js
var shaderMaterial = new THREE.ShaderMaterial({
  vertexShader: document.getElementById("vertexShader").textContent,
  fragmentShader: document.getElementById("fragmentShader").textContent,
});
```

这个着色器材质使用脚本中的代码并将它们赋予给材质所赋予的物体

然后，在定义立方体材质那一行我们需要替换`basicMaterial` :

```js
var cube = new THREE.Mesh(boxGeometry, basicMaterial);
```

使用新创建的 `shaderMaterial`:

```js
var cube = new THREE.Mesh(boxGeometry, shaderMaterial);
```

Three.js 编译和运行这两个这两个着色器到材质所在的网格 (mesh) 上。在这个例子中，为立方体添加了有顶点和纹理着色器。好了，你已经创建了最简单的着色器，祝贺！

下图是立方体最终效果：

![Three.js blue cube demo](cube.png)

它看起来好像和 Three.js 的立方体 demo 一样，但不同的是，位置有点轻微变化，而且同样的蓝色使用的是着色器实现。你可以看看实际操作，这里有最终代码:{{JSFiddleEmbed("https://jsfiddle.net/end3r/LL55bhrz/","","350")}}

你也可以在 [GitHub](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Shaders/shaders.html) 看这个例子。

## 总结

本文教了你最基本的着色器实现。我们虽然只能做这么多，但你可以用着色器做很更多炫酷的事情 — 在 [ShaderToy](http://shadertoy.com/) 上去看真正炫酷的例子找找灵感吧

## 其他链接

- [学习 WebGL](http://learningwebgl.com/blog/?page_id=1217) — 基本 WebGL 知识
- [WebGL 着色器和 WebGL 中的 GLSL 基础](http://webglfundamentals.org/webgl/lessons/webgl-shaders-and-glsl.html) — GLSL 特定信息
