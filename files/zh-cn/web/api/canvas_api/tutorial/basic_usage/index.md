---
title: Canvas 的基本用法
slug: Web/API/Canvas_API/Tutorial/Basic_usage
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}

让我们通过了解 {{HTMLElement("canvas")}} {{Glossary("HTML")}} 元素本身开始本教程。在本页结束时，你会了解到如何去设置一个 canvas 2D 上下文以及如何在你的浏览器上创建第一个例子。

## `<canvas>` 元素

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```

{{HTMLElement("canvas")}} 看起来和 {{HTMLElement("img")}} 元素很相像，唯一的不同就是它并没有 src 和 alt 属性。实际上，`<canvas>` 标签只有两个属性**——** [`width`](/zh-CN/docs/Web/HTML/Element/canvas#width)和[`height`](/zh-CN/docs/Web/HTML/Element/canvas#height)。这些都是可选的，并且同样利用 {{Glossary("DOM")}} [properties](/zh-CN/docs/Web/API/HTMLCanvasElement) 来设置。当没有设置宽度和高度的时候，canvas 会初始化宽度为 300 像素和高度为 150 像素。该元素可以使用{{Glossary("CSS")}}来定义大小，但在绘制时图像会伸缩以适应它的框架尺寸：如果 CSS 的尺寸与初始画布的比例不一致，它会出现扭曲。

> **备注：** 如果你绘制出来的图像是扭曲的，尝试用 width 和 height 属性为\<canvas>明确规定宽高，而不是使用 CSS。

[`id`](/zh-CN/docs/Web/HTML/Global_attributes/id)属性并不是\<canvas>元素所特有的，而是每一个 HTML 元素都默认具有的属性（比如 class 属性）。给每个标签都加上一个 id 属性是个好主意，因为这样你就能在我们的脚本中很容易的找到它。

\<canvas>元素可以像任何一个普通的图像一样（有{{cssxref("margin")}}，{{cssxref("border")}}，{{cssxref("background")}}等等属性）被设计。然而，这些样式不会影响在 canvas 中的实际图像。我们将会在一个[专门的章节](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)里看到这是如何解决的。当开始时没有为 canvas 规定样式规则，其将会完全透明。

### 替换内容

\<canvas>元素与{{HTMLElement("img")}}标签的不同之处在于，就像{{HTMLElement("video")}}，{{HTMLElement("audio")}}，或者 {{HTMLElement("picture")}}元素一样，很容易定义一些替代内容。由于某些较老的浏览器（尤其是 IE9 之前的 IE 浏览器）或者文本浏览器不支持 HTML 元素"canvas"，在这些浏览器上你应该总是能展示替代内容。

这非常简单：我们只是在\<canvas>标签中提供了替换内容。不支持\<canvas>的浏览器将会忽略容器并在其中渲染后备内容。而支持\<canvas>的浏览器将会忽略在容器中包含的内容，并且只是正常渲染 canvas。

举个例子，我们可以提供对 canvas 内容的文字描述或者是提供动态生成内容相对应的静态图片，如下所示：

```html
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 +0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt="" />
</canvas>
```

### `</canvas>` 标签不可省

与 {{HTMLElement("img")}} 元素不同，{{HTMLElement("canvas")}} 元素**需要**结束标签 (`</canvas>`)。如果结束标签不存在，则文档的其余部分会被认为是替代内容，将不会显示出来。

如果不需要替代内容，一个简单的 `<canvas id="foo" ...></canvas>` 在所有支持 canvas 的浏览器中都是完全兼容的。

## 渲染上下文（The rendering context）

{{HTMLElement("canvas")}} 元素创造了一个固定大小的画布，它公开了一个或多个**渲染上下文**，其可以用来绘制和处理要展示的内容。我们将会将注意力放在 2D 渲染上下文中。其他种类的上下文也许提供了不同种类的渲染方式；比如， [WebGL](/zh-CN/docs/Web/WebGL) 使用了基于[OpenGL ES](http://www.khronos.org/opengles/)的 3D 上下文 ("experimental-webgl") 。

canvas 起初是空白的。为了展示，首先脚本需要找到渲染上下文，然后在它的上面绘制。{{HTMLElement("canvas")}} 元素有一个叫做 {{domxref("HTMLCanvasElement.getContext", "getContext()")}} 的方法，这个方法是用来获得渲染上下文和它的绘画功能。`getContext()`接受一个参数，即上下文的类型。对于 2D 图像而言，如本教程，你可以使用 {{domxref("CanvasRenderingContext2D")}}。

```js
var canvas = document.getElementById("tutorial");
var ctx = canvas.getContext("2d");
```

代码的第一行通过使用 {{domxref("document.getElementById()")}} 方法来为 {{HTMLElement("canvas")}} 元素得到 DOM 对象。一旦有了元素对象，你可以通过使用它的 getContext() 方法来访问绘画上下文。

## 检查支持性

替换内容是用于在不支持 {{HTMLElement("canvas")}} 标签的浏览器中展示的。通过简单的测试 `getContext()` 方法的存在，脚本可以检查编程支持性。上面的代码片段现在变成了这个样子：

```js
var canvas = document.getElementById("tutorial");

if (canvas.getContext) {
  var ctx = canvas.getContext("2d");
  // drawing code here
} else {
  // canvas-unsupported code here
}
```

## 一个模板骨架

这里的是一个最简单的模板，我们之后就可以把它作为之后的例子的起点。

> **备注：** 为了简洁，我们在 HTML 中内嵌了 script 元素，但并不推荐这种做法。

```html
<html>
  <head>
    <title>Canvas tutorial</title>
    <script type="text/javascript">
      function draw() {
        var canvas = document.getElementById("tutorial");
        if (canvas.getContext) {
          var ctx = canvas.getContext("2d");
        }
      }
    </script>
    <style type="text/css">
      canvas {
        border: 1px solid black;
      }
    </style>
  </head>
  <body onload="draw();">
    <canvas id="tutorial" width="150" height="150"></canvas>
  </body>
</html>
```

上面的脚本中包含一个叫做 draw() 的函数，当页面加载结束的时候就会执行这个函数。通过使用在文档上加载事件来完成。只要页面加载结束，这个函数，或者像是这个的，同样可以使用 {{domxref("WindowTimers.setTimeout", "window.setTimeout()")}}， {{domxref("WindowTimers.setInterval", "window.setInterval()")}}，或者其他任何事件处理程序来调用。

模板看起来会是这样。如这里所示，它最初是空白的。

{{EmbedLiveSample("一个模板骨架", 160, 160)}}

## 一个简单例子

一开始，让我们来看个简单的例子，我们绘制了两个有趣的长方形，其中的一个有着 alpha 透明度。我们将在接下来的例子里深入探索一下这是如何工作的。

```html
<html>
  <head>
    <script type="application/javascript">
      function draw() {
        var canvas = document.getElementById("canvas");
        if (canvas.getContext) {
          var ctx = canvas.getContext("2d");

          ctx.fillStyle = "rgb(200,0,0)";
          ctx.fillRect(10, 10, 55, 50);

          ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
          ctx.fillRect(30, 30, 55, 50);
        }
      }
    </script>
  </head>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

例子看起来像是这样：:

{{EmbedLiveSample("一个简单例子", 160, 160, "canvas_ex1.png")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}
