---
title: 让球动起来
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball
---

{{GamesSidebar}}{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls")}}

本篇是 [Gamedev Canvas tutorial](/zh-CN/docs/Games/Workflows/Breakout_game_from_scratch) 10 节教程中的第二节。如果你完成了本篇教程之后，你可以从 [Gamedev-Canvas-workshop/lesson2.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson02.html) 看到源码。

从上一节中你已经知道如何去绘制一个球。现在让我们使它动起来。从技术上讲，我们将在画布上绘制一个球，之后让它消失，然后在一个稍微不用的位置上再绘制一个一样的球。就想电影里的每一帧动起来的感觉。

我们需要定义一个绘图函数，每次使用一组不同的变量改变球体的位置；循环调用以保持画布上每一帧不断更新。你可以使用 JavaScript 时间函数 {{domxref("WindowTimers.setInterval()", "setInterval()")}} 或者 {{domxref("window.requestAnimationFrame()")}}。

在你的 HTML 文件只保留前两行，删除其他所有的 JavaScript 代码并在 draw() 函数中添加以下内容保证每 10 毫秒执行一次 draw() 函数：

```js
function draw() {
  // drawing code
}
setInterval(draw, 10);
```

得益于 `setInterval` 的无限性，使得 `draw()` 函数将每 10 毫秒就会被调用，除非我们停止它。现在，我们来绘制小球吧，在 `draw()` 函数中添加以下内容：

```js
ctx.beginPath();
ctx.arc(50, 50, 10, 0, Math.PI * 2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
```

现在，尝试更新你的代码，球会在每一帧画面被绘制

## 让球动起来

你不会注意到球正在不停地被重新刷，因为它没有移动。让我们改变这种情况。首先，我们不再使用固定位置 (50,50)，而是用 x 和 y 的变量来定义画布底部的起始点，然后使用这些变量来定义圆被绘制的位置。

首先，在`draw()`函数上方添加以下两行，以定义`x`和`y`：

```js
var x = canvas.width / 2;
var y = canvas.height - 30;
```

接下来更新 `draw()` 函数，在 `arc()` 方法中使用 `x` 和 `y` 变量，如下面高亮行所示：

```js
function draw() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

现在到了最重要的部分：我们想要在每一帧都被绘制出来之后，给 `x` 和 `y` 添加一个较小的值，让它看起来像是在移动。让我们将这些值定义为 `dx` 和 `dy`，并将它们的值分别设为 `2` 和 `-2`。在你的 x 和 y 变量声明下方添加以下内容：

```js
var dx = 2;
var dy = -2;
```

最后要做的是在每一帧上更新 `x` 和 `y`，在每一次更新中，把球画在新的位置上。将下面的两条新线添加到你的 `draw()` 函数：

```js
function draw() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
}
```

再次保存代码，并在浏览器中尝试。很好，尽管看起来球在后面留下了痕迹：

![](ball-trail.png)

## 在每一帧更新之前清空画布

球移动时留下了轨迹，因为我们在每一帧上都画了一个新的圆，而没有去掉之前的一个圆。不要担心，因为有一个方法来清空画布的内容：[`clearRect()`](/zh-CN/docs/Web/API/CanvasRenderingContext2D/clearRect)。该方法有四个参数：矩形左上角的 `x` 和 `y` 坐标，以及矩形的右下角的 `x` 和 `y` 坐标。这个矩形覆盖的整个区域里，之前所画的任何内容将被清除。

将下列高亮显示行添加到 `draw()` 函数：

```js
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
}
```

保存您的代码并再次尝试，这次你将看到球移动后没有留下轨迹。每隔 10 毫秒，画布就会被清除，蓝色的圆圈 (我们的球) 将被绘制在一个给定的位置上，而 `x` 和 `y` 的值将在下一个帧被更新。

## 保持代码整洁

在接下来的几篇文章中，我们将在 `draw()` 函数中添加越来越多的命令，因此尽可能保持简单和整洁是很好的。让我们从把绘制球的代码移至一个单独的函数。

用以下两个函数替换现有的 `draw()` 函数：

```js
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;
}
```

## 比较你的代码

您可以在下面的实时演示中查看本文的代码，并使用它来更好地了解其工作原理：

{{JSFiddleEmbed("https://jsfiddle.net/end3r/3x5foxb1/","","415")}}

练习：尝试改变移动球的速度，或者移动球的方向。

## 下一步

我们已经画了我们的球，并将其移动，但它仍然消失在画布的边缘。在第三章中，我们将探讨如何使其 [从墙壁上反弹](/zh-CN/docs/Games/Workflows/Breakout_game_from_scratch/Bounce_off_the_walls).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls")}}
