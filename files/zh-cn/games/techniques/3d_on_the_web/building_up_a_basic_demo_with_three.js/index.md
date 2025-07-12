---
title: 使用 Three.js 构建基础演示
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

游戏中的典型 3D 场景（即使是最简单的场景）包含一些标准项目，如位于坐标系中的形状、用于查看的摄像头、使其看起来更漂亮的灯光和材质、使其看起来更生动的动画等。与其他三维库一样，**Three.js** 也提供了内置辅助函数，以帮助你更快地实现常见的三维功能。在本文中，我们将带你了解使用 Three.js 的真正基础知识，包括设置开发环境、构建必要的 HTML、Three 的基本对象以及如何制作一个基本演示。

Three 是最流行的 [WebGL](/zh-CN/docs/Web/API/WebGL_API) 库之一，而且很容易上手。我们并不是说它比其他任何 WebGL 库都要好，你可以随意尝试其他库。

> [!NOTE]
> 本指南最近更新于 2024 年 11 月，与 Three.js `r79` 版本兼容。

## 开发环境设置

要开始使用 Three.js 进行开发，应确保使用的是支持 [WebGL](/zh-CN/docs/Web/API/WebGL_API) 的现代浏览器。

在你的代码中，你可以[使用 CDN 或 Node.js](https://threejs.org/docs/#manual/en/introduction/Installation) 导入 Three.js。如果选择使用 CDN 导入该库，可以在 HTML 代码中使用这个 URL：

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js"></script>
```

如果要根据特定的 Three.js 版本进行开发，那么将 Three.js 作为依赖项安装在 Node.js 设置中会很方便，而且还能加快协作和部署：

```bash
npm install --save three
npm install --save-dev vite # 开发环境需求
npx vite
```

或者，你也可以下载[最新的 Three.js 库](https://github.com/mrdoob/three.js/archive/master.zip)，并从位于 `build/three.module.min.js` 的解压压缩包中复制最小化版本的 Three.js 到你的项目中。请注意，压缩包包含源代码文件，因此下载大小约为 350MB。

无论你选择哪种方式开始工作，请确保在工作时打开 [Three.js 文档](https://threejs.org/docs/)以供参考。

## 用于 Three.js 的基本 HTML 结构

如果在本地集成开发环境中构建项目，以下是开始使用的 HTML 结构：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>MDN 游戏：Three.js 演示</title>
    <style>
      html,
      body,
      canvas {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        font-size: 0;
      }
    </style>
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/npm/three-js@79.0.0/three.min.js"></script>
    <script>
      const WIDTH = window.innerWidth;
      const HEIGHT = window.innerHeight;
      /* 我们所有的 JavaScript 代码会出现在这里 */
    </script>
  </body>
</html>
```

它包含一些基本信息，如文档的 {{htmlelement("title")}}，以及一些用于设置 {{htmlelement("canvas")}} 元素 `width` 和 `height` 的 CSS，Three.js 将在页面中插入该元素，并将其设置为 100% 以填充整个可用视口空间。第一个 {{htmlelement("script")}} 元素在页面中导入了 Three.js 库，我们将在第二个元素中编写示例代码。这里已经包含了两个辅助变量，分别存储窗口的 `width` 和 `height`。

在继续阅读之前，请将这些代码复制到一个新的文本文件中，并将其保存在工作目录中，文件名为 `index.html`。

## 渲染器

渲染器是一种在浏览器中直接显示场景的工具。有几种不同的渲染器：WebGL 是默认设置，你还可以使用 Canvas、SVG、CSS 和 DOM。它们的渲染方式各不相同，因此 WebGL 的实现方式与 CSS 的实现方式不同。尽管它们实现目标的方式各不相同，但用户的体验看起来都是一样的。有了这种方法，如果浏览器不支持所需的技术，就可以使用后备技术。

下面的代码创建了一个新的 WebGL 渲染器，将其大小设置为适合屏幕上的整个可用空间，并将 DOM 结构附加到页面上。你可能已经注意到了第一行中的 `antialias` 参数——它可以更平滑地渲染形状的边缘。`setClearColor()` 方法将背景设置为浅灰色，而不是默认的黑色。

```js
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);
```

将这些代码添加到第二个 {{htmlelement("script")}} 元素中，紧随 JavaScript 注释之后。

## 场景

场景是一切事件发生的地方。在演示中创建新对象时，我们会将它们全部添加到场景中，使它们在屏幕上可见。在 Three.js 中，场景由一个 `Scene` 对象表示。让我们在前面几行的下面添加以下几行来创建它：

```js
const scene = new THREE.Scene();
```

稍后我们将使用 `.add()` 方法将对象添加到场景中。

## 摄像机

我们有渲染场景，但是我们仍然需要一个摄像机来观察场景——想象没有摄像机的电影场景。下面的代码将摄像机放在三维坐标系中，并将其指向我们的场景，这样人们就能看到一些东西：

```js
const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 50;
scene.add(camera);
```

将这些代码添加到前面所述的代码的下方。

还有其他类型的摄像机（如立方体摄像机、正交摄像机），但最简单的还是透视摄像机。要初始化透视摄像机，我们必须设置它的视场角和长宽比：前者用于设置能看到多少物体，后者对于屏幕上的物体在渲染时拥有正确的比例以及看起来不被拉伸非常重要。让我们来解释一下上面代码中的设置值：

- 我们为视场角设置的数值 70 是可以尝试的：数值越大，摄像机显示的场景就越多。想象一下普通摄像机的视角和鱼眼效果的对比，鱼眼效果可以看到更多的景物。默认值为 50。
- 纵横比设置为窗口的当前宽度和高度，因此可以动态调整。我们可以设置一个固定的比例，例如 16 ⁄ 9，这是宽屏幕电视的纵横比。默认值为 1。
- `z` 坐标的值为 50 个单位，是摄像机与场景中心在 `z` 轴上的距离。在这里，我们将摄像机后移，这样就可以看到场景中的物体。50 感觉差不多。这样既不会太近，也不会太远，而且物体的大小也允许它们在给定的视野范围内停留在场景中。如果没有指定 `x` 和 `y` 值，默认值为 0。

你可以尝试使用这些值，看看它们会如何改变场景中看到的效果。距离值（例如摄像机 z 坐标位置）是无单位的，可以是你认为适合场景的任何数值：毫米、米、英尺或英里。一切由你决定。

## 渲染场景

一切准备就绪，但我们仍然看不到任何东西。虽然我们已经设置了渲染器，但仍需要渲染一切。在 [`requestAnimationFrame()`](/zh-CN/docs/Web/API/Window/requestAnimationFrame) 的帮助下，我们的 `render()` 函数将完成这项工作：

```js
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
```

在每一帧新画面中，`render` 函数都会被调用，`renderer` 会渲染 `scene` 和 `camera`。就在函数声明之后，我们第一次调用它来启动循环，之后它将被无限地使用。

同样，将这段新代码添加到之前添加的代码下面。保存文件并在浏览器中打开。现在你应该看到一个灰色的窗口。恭喜你！

## 几何体

现在我们的场景已经渲染完成，可以开始添加 3D 图形了。为了加快开发速度，Three.js 提供了大量预定义的图元，只需一行代码就能立即创建形状。有立方体、球体、圆柱体和更复杂的形状可供选择。为给定形状绘制所需的顶点和面等细节由 Three 框架处理，因此我们可以专注于更高层次的编码。让我们从定义立方体的几何形状开始，在 `render()` 函数上方添加以下内容：

```js
const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
```

在本例中，我们定义了一个 10 x 10 x 10 个单位的简单立方体。但仅有几何图形本身是不够的，我们还需要为形状选择一种材料。

## 材质

材质是物体表面的覆盖物、颜色或纹理。在本例中，我们将选择简单的蓝色来粉刷我们的盒子。有许多预定义的材质可以使用：Basic（基本）、Phong（芳香）、Lambert（兰伯特）。我们稍后再使用后两种材质，但现在使用“基本”材质就足够了：

```js
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
```

## 网格

要将材质应用到几何体上，需要使用网格。它获取一个形状，并在每个面上添加指定的材质：

```js
const cube = new THREE.Mesh(boxGeometry, basicMaterial);
```

## 将立方体添加到场景

现在我们使用之前定义的几何体和材质创建了一个立方体。最后要做的就是将立方体放置到场景中。在前一行下面添加这一行：

```js
scene.add(cube);
```

如果保存并刷新 Web 浏览器，我们的对象现在看起来就像一个正方形，因为它正对着摄像机。对象的好处在于，我们可以在场景中随意移动它们。例如，随意旋转和缩放。让我们对立方体进行一下旋转，这样我们就能看到不止一个面。同样，在前面的代码下面添加我们的代码：

```js
cube.rotation.set(0.4, 0.2, 0);
```

## Three.js 形状示例

如果你已经顺利地完成了所有步骤，那么你已经使用 Three.js 在 3D 环境中创建了第一个对象！这比你想象的要容易得多，对吗？你的代码应该与下面的实时示例相似。可以点击“Play”在 MDN 代码演练场中查看和编辑代码：

```html hidden live-sample___three-js-intro
<script src="https://cdn.jsdelivr.net/npm/three-js@79.0.0/three.min.js"></script>
```

```js hidden live-sample___three-js-intro
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 50;
scene.add(camera);

const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
const cube = new THREE.Mesh(boxGeometry, basicMaterial);
scene.add(cube);
cube.rotation.set(0.4, 0.2, 0);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
```

```css hidden live-sample___three-js-intro
body,
canvas {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
}
```

{{embedlivesample("three-js-intro", "", "400px")}}

## 更多图形和材质

现在，我们将在场景中添加更多形状，并探索其他形状、材质、灯光等。让我们把立方体移到左边，为一些朋友腾出空间。在前一行的下方添加以下一行：

```js
cube.position.x = -25;
```

现在我们来看看更多的形状和材料。如果添加一个用 Phong 材质包裹的环形体，会发生什么情况呢？试着在定义立方体的那行代码下方添加以下代码。

```js
const torusGeometry = new THREE.TorusGeometry(7, 1, 6, 12);
const phongMaterial = new THREE.MeshPhongMaterial({ color: 0xff9500 });
const torus = new THREE.Mesh(torusGeometry, phongMaterial);
torus.rotation.set(0.5, 0.5, 0);
scene.add(torus);
```

这些线条将添加一个圆环体；`TorusGeometry()` 方法的参数定义了 `radius`、`tube diameter`、`radial segment count` 和 `tubular segment count`。Phong 材质看起来应该比盒子的简单 Basic 材质更有光泽，不过现在我们的环看起来只是黑色的。添加旋转后，环状体会有一个初始深度，这样看起来就不会太平。

我们可以选择更多有趣的预定义形状。让我们再来探索一些。在定义圆环体的下面添加以下几行：

```js
const dodecahedronGeometry = new THREE.DodecahedronGeometry(7);
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xeaeff2 });
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);
```

这次我们要创建的十二面体是一个包含十二个平面的形状。`DodecahedronGeometry()` 的参数定义了对象的大小。我们在这里使用的是 Lambert 材质，它与 Phong 类似，但光泽度较低。同样，现在它还是黑色的。我们将物体向右移动，因此它与盒子或圆环物体的位置不同。

如上所述，新物体目前看起来只是黑色的。为了使 Phong 和 Lambert 材料都能正常显示，我们需要引入一个光源。

## 光照

Three.js 中有各种类型的光源。最基本的是 `PointLight`（点光源），它的工作原理类似于手电筒，向指定方向照射聚光灯。在形状定义下方添加以下几行：

```js
const light = new THREE.PointLight(0xffffff);
light.position.set(-10, 15, 50);
scene.add(light);
```

我们定义了一个白色光点，将其位置设置在离场景中心稍远的地方，这样它就可以照亮图形的某些部分，最后将其添加到场景中。现在一切正常，三个图形都清晰可见。你应该查看文档，了解其他类型的灯光，如环境光、方向光、半球光或聚光灯。尝试将它们放置在我们的场景中，看看它们对场景有什么影响。

这是一个很好的进展，但我们可以让它更精彩！在游戏中，通常会有一些事情发生。我们可能会看到动画之类的东西。因此，让我们尝试为这些图形注入一点活力，为它们制作动画！

## 动画

我们已经使用旋转来调整立方体的位置。我们还可以缩放形状或改变它们的位置。为了显示动画，我们需要在渲染循环中更改这些值，以便在每一帧中更新。

### 旋转

旋转非常简单。你可以在每一帧上为指定的旋转方向添加一个值。在 `render` 函数内的 `requestAnimationFrame()` 调用后添加这行代码：

```js
cube.rotation.y += 0.01;
```

它会在每一帧中将立方体旋转一点点，这样看起来就像一个平滑的动画。

### 缩放

我们还可以缩放对象。应用一个常量值，我们就能使其增长或缩小一次。让我们把事情变得更有趣。首先，我们实现一个名为 `t` 的辅助变量，用于计算经过的时间。将它添加到 `render()` 函数之前：

```js
let t = 0;
```

现在，让我们在动画的每一帧中以给定的常量增加数值。在 `requestAnimationFrame()` 调用下面添加以下几行：

```js
t += 0.01;
torus.scale.y = Math.abs(Math.sin(t));
```

我们使用 `Math.sin`，得到了一个非常有趣的结果。由于 `sin` 是一个周期性函数，这将对环形进行缩放，并重复这一过程。我们用 `Math.abs` 封装缩放值，以传递大于或等于 0 的绝对值。由于 sin 介于 -1 和 1 之间，负值可能会以意想不到的方式呈现圆环体。在这种情况下，它有一半时间看起来是黑色的。

### 移动

除了旋转和缩放，我们还可以在场景中移动对象。在我们的 `requestAnimationFrame()` 调用下方添加以下内容：

```js
dodecahedron.position.y = -7 * Math.sin(t * 2);
```

这将通过在每一帧的 Y 轴上应用 `sin()` 值来上下移动十二面体，并稍作调整使其看起来更酷。请尝试更改这些值，看看会对动画产生什么影响。

## Three.js 动画示例

下面是带有动画形状的最终代码。你可以点击“Play”在 MDN 代码演练场中编辑示例：

```html hidden live-sample___three-js-animation
<script src="https://cdn.jsdelivr.net/npm/three-js@79.0.0/three.min.js"></script>
```

```js live-sample___three-js-animation
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 0.1, 10000);
camera.position.z = 50;
scene.add(camera);

const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
const cube = new THREE.Mesh(boxGeometry, basicMaterial);
cube.position.x = -25;
cube.rotation.set(0.4, 0.2, 0);
scene.add(cube);

const torusGeometry = new THREE.TorusGeometry(7, 1, 16, 32);
const phongMaterial = new THREE.MeshPhongMaterial({ color: 0xff9500 });
const torus = new THREE.Mesh(torusGeometry, phongMaterial);
torus.rotation.set(0.5, 0.5, 0);
scene.add(torus);

const strangeGeometry = new THREE.DodecahedronGeometry(7);
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xeaeff2 });
const dodecahedron = new THREE.Mesh(strangeGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);

const light = new THREE.PointLight(0xffffff);
light.position.set(-10, 15, 50);
scene.add(light);

let t = 0;
function render() {
  t += 0.01;
  requestAnimationFrame(render);
  cube.rotation.y += 0.01;
  torus.scale.y = Math.abs(Math.sin(t));
  dodecahedron.position.y = -7 * Math.sin(t * 2);
  renderer.render(scene, camera);
}
render();
```

```css hidden live-sample___three-js-animation
body,
canvas {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
}
```

{{embedlivesample("three-js-animation", "", "400px")}}

## 总结

现在你已经了解 Three.js 的基础知识；祝实验愉快！如果你想了解更多，可以继续阅读 [Web 上的 3D 游戏](/zh-CN/docs/Games/Techniques/3D_on_the_web)文档。还可以尝试学习 WebGL，以便更好地了解 WebGL 底层发生了什么。更多信息请参阅我们的 [WebGL 文档](/zh-CN/docs/Web/API/WebGL_API)。
