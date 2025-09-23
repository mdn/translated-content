---
title: 创建、绘制画布
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}

本篇是[游戏开发 Canvas 教程](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) 10 节教程中的第一节。如果你完成了本篇教程之后，你可以在 [Gamedev-Canvas-workshop/lesson1.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson01.html) 看到源码。

在我们开始编写游戏功能之前，我们可以通过 HTML 的 {{htmlelement("canvas")}} 元素创建支撑游戏的基本结构。

## 页面部分

HTML 文档的结构是非常精简的，我们的游戏将完全呈现在这个 HTML 的 {{htmlelement("canvas")}} 元素中。你可以选择一款你最喜欢的文本编辑器，创建一个 HTML 文件，保存到你理想的位置，名称为 `index.html`。并添加以下代码：

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>游戏开发 Canvas 工作坊</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      canvas {
        background: #eeeeee;
        display: block;
        margin: 0 auto;
      }
    </style>
  </head>
  <body>
    <canvas id="myCanvas" width="480" height="320"></canvas>

    <script>
      // 在这里编写 JavaScript 代码
    </script>
  </body>
</html>
```

在 head 标签中我们需要定义字符集（`charset`）、标题（{{htmlelement("title")}}）和一些基本的 CSS。在 body 标签中包含 {{htmlelement("canvas")}} 和 {{htmlelement("script")}} 元素，我们将在前者中渲染游戏，并在后者中编写 JavaScript 代码来控制渲染。在 {{htmlelement("canvas")}} 元素有一个名为 `myCanvas` 的 `id`，根据这个属性我们可以很容易的获取到这个元素的引用，并设置它的宽为 480 像素，高为 320 像素。之后我们会将所有的 JavaScript 代码全部写到开标签 `<script>` 和闭标签 `</script>` 之间。

## canvas 基础

要想在 {{htmlelement("canvas")}} 元素中渲染图像内容，我们必须在 JavaScript 代码中获取到这个元素的引用。在开标签 `<script>` 之后添加以下代码。

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
```

在这里我们可以将 {{htmlelement("canvas")}} 元素的引用保存到 `canvas` 变量中。然后我们需要创建变量 `ctx` 来存储 2d 的渲染上下文，我们实际上就用它在 canvas 上绘制内容。

让我们来看一个例子，打印在画布上的红色正方形。添加以下代码到你之前的 JavaScript 代码行下方，然后在浏览器中打开 `index.html` 来看看效果。

```js
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();
```

全部指令都位于 {{domxref("CanvasRenderingContext2D.beginPath()","beginPath()")}} 方法和 {{domxref("CanvasRenderingContext2D.closePath()","closePath()")}} 方法之间。我们使用 {{domxref("CanvasRenderingContext2D.rect()","rect()")}} 方法创建了一个矩形。这个方法的第一组参数（20，40）是确定这个矩形的左上角在画布上的坐标，第二组参数（50, 50）是指定矩形的宽度和高度。例子中矩形左上角的 x 坐标为 20 像素，y 坐标为 40 像素；宽和高各为 50 像素，这样画出一个完美的正方形。{{domxref("CanvasRenderingContext2D.fill()","fill()")}} 方法根据 {{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}} 属性填充矩形的颜色，在本例中为红色。

我们不局限于绘制矩形——下面这段代码会绘制出一个绿色的圆；尝试添加它到你的 JavaScript 代码的底部，保存并刷新：

```js
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
```

正如你所见，我们再一次使用了 {{domxref("CanvasRenderingContext2D.beginPath()","beginPath()")}} 方法和 {{domxref("CanvasRenderingContext2D.closePath()","closePath()")}} 方法；在这两个方法中间，最重要的部分是 {{domxref("CanvasRenderingContext2D.arc()","arc()")}} 方法。它需要六个参数：

- 圆心的 `x` 和 `y` 轴坐标
- 半径
- 起始角度，结束角度。以弧度计（弧的圆形的三点钟位置是 0 度）
- 绘制的方向（`false` 为顺时针，`true` 为逆时针）。最后一个参数为可选参数。

{{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}} 属性的值看起来和之前不大一样。这是因为它与 CSS 一样，颜色可以指定为十六进制值也可以指定为 `rgba()` 函数，或者任何其他可用的颜色值函数。

当然我们也可以不使用 {{domxref("CanvasRenderingContext2D.fill()","fill()")}} 函数来填充颜色，可改用 {{domxref("CanvasRenderingContext2D.stroke()","stroke()")}} 函数来仅为外轮廓上色。试着将这段代码添加到你的 JavaScript：

```js
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgb(0 0 255 / 50%)";
ctx.stroke();
ctx.closePath();
```

上面的代码绘制出一个蓝色边框的空心矩形。由于 `rgb()` 函数中包含的 alpha 通道，蓝色呈现半透明效果。

## 比对你的代码

以上是第一节的全部代码，在线运行：

```html
<canvas id="myCanvas" width="480" height="320"></canvas>
```

```css
canvas {
  background: #eeeeee;
}
```

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgb(0 0 255 / 0.5)";
ctx.stroke();
ctx.closePath();
```

{{embedlivesample("比对你的代码", 600, 340)}}

> [!NOTE]
> 练习：尝试改变给定几何图形的大小和颜色。

## 下一节

现在我们已经创建了基本的 HTML 和关于画布的基本知识。我们继续第二节，如何让球在游戏中动起来——[让球动起来](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball)。

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}
