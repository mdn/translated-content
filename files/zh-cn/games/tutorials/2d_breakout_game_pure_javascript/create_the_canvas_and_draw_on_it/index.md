---
title: 创建、绘制画布
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}

本篇是 [Gamedev Canvas tutorial](/zh-CN/docs/Games/Workflows/Breakout_game_from_scratch) 10 节教程中的第一节。如果你完成了本篇教程之后，你可以从 [Gamedev-Canvas-workshop/lesson1.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson01.html) 看到源码。

在我们开始编写游戏功能之前，我们可以通过 HTML 的 canvas 标签创建支撑游戏的基本结构。

## 页面部分

HTML 文档的结构是非常简单的，我们的游戏将完全呈现在这个 HTML 的 canvas 标签中。你可以选择一款你最喜欢的文本编辑器，创建一个 HTML 文件，保存到你理想的位置，名称为 index.html。并添加以下代码：

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Gamedev Canvas Workshop</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      canvas {
        background: #eee;
        display: block;
        margin: 0 auto;
      }
    </style>
  </head>
  <body>
    <canvas id="myCanvas" width="480" height="320"></canvas>

    <script>
      // JavaScript code goes here
    </script>
  </body>
</html>
```

在 head 标签中我们需要定义字符集（charset），标题（title）和一些基本的样式。在 body 标签中包含 canvas 标签和 javascript 标签，我们将在 javascript 标签中使用 JavaScript 代码来控制 canvas 标签中的内容展现。在 canvas 标签有一个名为 myCanvas 的 Id，根据这个属性我们可以很容易的获取到这个元素并设置他的宽为 480 像素，高为 320 像素。之后我们会将所有的 JavaScript 代码全部写到 javascript 标签中（\<script>...\</script>）。

## 画布的基本属性

要想在 canvas 标签中呈现图像内容，我们必须在 JavaScript 代码中获取到这个元素。在 javascript 标签中添加以下代码；

```js
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
```

在这里我们可以声明一个变量保存 canvas 标签，然后我们需要创建变量 ctx, 这个变量可用来存储 2d 的渲染上下文，我们实际上就用它在 canvas 标签上绘制内容。

让我们来看一个例子，打印在画布上的红色正方形。添加以下代码到你的 JavaScript 里，然后在浏览器中打开 index.html 来看看效果。

```js
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
```

把全部指令放到 ctx.beginPath() 方法 和 ctx.closePath() 方法之间。我们使用 ctx.rect() 方法创建了一个矩形。这个方法的第一组参数（20，40）是确定这个矩形的左上角在画布上的坐标，第二组参数（50, 50）是指定矩形的宽度和高度。例子中矩形左上角的 x 坐标为 20 像素，y 坐标为 40 像素；宽和高各为 50 像素，这样画出一个完美的正方形。ctx.fillStyle 属性是用于填充绘画的颜色，这里填充的颜色为红色。ctx.fill() 方法是填充路径的内容区域生成实心的图形。

我们不局限于绘制矩形 — 下面这段代码会绘制出一个绿色的圆；尝试添加到 JavaScript 代码的底部，保存并刷新：

```js
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
```

正如你所见，我们再一次使用了 ctx.beginPath() 方法 和 ctx.closePath() 方法；在这两个方法中间，最重要的部分是 ctx.arc() 方法。它需要六个参数：

- 圆心的 `x` 和 `y` 轴坐标
- 半径
- 起始角度，结束角度。以弧度计（弧的圆形的三点钟位置是 0 度）
- 规定应该逆时针还是顺时针绘图。false = 顺时针，true = 逆时针。（可选）

ctx.fillStyle 属性的值看起来和之前不大一样。这是因为它与 CSS 一样，颜色可以指定为十六进制值也可以指定为 rgba() 函数，或者任何其他可用的颜色值函数。

当然我们也可以不使用 ctx.fill() 函数来填充图形和颜色，用 ctx.stroke() 函数来绘制定义图形的路径。试着将这段代码添加到您的 JavaScript:

```js
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();
```

上面的代码绘制出一个蓝色边框的空心矩形。由于 rgba() 函数的特性，边框为蓝色半透明的状态。

## 比对你的代码

以上是第一节的全部代码，可以运行在 JSFiddle（在线 JS 代码调试工具）上：

{{JSFiddleEmbed("https://jsfiddle.net/end3r/x62h15e2/","","370")}}

> **备注：** 练习：尝试改变给定几何图形的大小和颜色。

## 下一节

现在我们已经创建了基本的 HTML 和关于画布的基本知识。我们继续第二节，如何让球在游戏中动起来 — [让球动起来](/zh-CN/docs/Games/Workflows/Breakout_game_from_scratch/Move_the_ball)。

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}
