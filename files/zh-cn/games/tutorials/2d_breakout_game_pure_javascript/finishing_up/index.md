---
title: 收尾工作
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up
---

{{GamesSidebar}}

{{Previous("Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}

本篇为 [Gamedev Canvas tutorial](/zh-CN/docs/Games/Workflows/Breakout_game_from_scratch) 10 节教程中的**第 10 节也是最后一节。**完成这篇课程后，你可以在 [Gamedev-Canvas-workshop/lesson10.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson10.html) 找到我们的源代码。

不管我们做什么游戏，它总是存在优化的空间。例如，我们可以为玩家多提供几条命，让他们能在发生一两次失误的情况下顺利完成游戏。或者，我们也可以在渲染代码上下工夫。

## 加入生命机制

在游戏中实现生命机制的思路很直接。让我们先新增一个变量，用来存储其生命值。把下面这行代码和我们声明其他变量的代码放在一起：

```js
var lives = 3;
```

在 canvas 上绘制生命值计数的做法几乎和绘制分数一样——把下面的函数添加到`drawScore()` 函数后面：

```js
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Lives: " + lives, canvas.width - 65, 20);
}
```

当玩家失误时，我们不立即结束游戏，而是减少生命计数，直到为零。在玩家用掉一条命后，我们也可以重置小球和球板位置。那么，在函数 `draw()` 中将下面三行：

```js
alert("GAME OVER");
document.location.reload();
clearInterval(interval); // Needed for Chrome to end game
```

替换为下面的代码，注意到我们加入了一点点逻辑控制：

```js
lives--;
if (!lives) {
  alert("GAME OVER");
  document.location.reload();
  clearInterval(interval); // Needed for Chrome to end game
} else {
  x = canvas.width / 2;
  y = canvas.height - 30;
  dx = 2;
  dy = -2;
  paddleX = (canvas.width - paddleWidth) / 2;
}
```

现在，当小球碰到屏幕底边时，我们让变量`lives` 的值减一。如果生命用尽，游戏就宣告结束；否则就重置小球与球板的位置，以及小球的速度。

### 渲染生命值

现在只需在 `draw()` 函数内调用`drawLives()` 即可。让我们把它加到`drawScore()` 的下一行：

```js
drawLives();
```

## 用 requestAnimationFrame() 优化渲染

现在让我们处理一些与游戏机制无关，但与画面渲染相关的东西。和我们目前使用{{domxref("windowTimers.setInterval()", "setInterval()")}} 实现的固定帧率渲染相比，{{domxref("window.requestAnimationFrame", "requestAnimationFrame")}} 能让浏览器更好地渲染画面。让我们把下面这行代码：

```js
var interval = setInterval(draw, 10);
```

替换为：

```js
draw();
```

再把代码中的每一处

```js
clearInterval(interval); // Needed for Chrome to end game
```

删除。然后，在 `draw()` 函数的最下方（右花括号之前）加入下面这行代码。它的作用是使 `draw()` 函数递归调用自身：

```js
requestAnimationFrame(draw);
```

现在 `draw()` 函数在 `requestAnimationFrame()` 的循环中被反复调用，之先前做法最大的不同是，我们将帧率的控制权交给浏览器，而不是固定的 10 毫秒。浏览器会在适当的时机同步帧率，并且只在必要的时候才刷新渲染的图形。这使得我们的动画比之前的 `setInterval()` 方法更加流畅且高效。

## 比较你的代码

我们的游戏的最终版本已经完成！以上。

{{JSFiddleEmbed("https://jsfiddle.net/raymondjplante/dfh2tpu1/","","395")}}

> **备注：** 试着改变生命的数目和球从球板上反弹的角度。

## 游戏结束——暂时看来！

祝贺你——你完成了本教程的所有小节！现在，你应该已经掌握 canvas 操纵的基础和 2D 游戏背后的逻辑了。是时候去学习一些框架，继续你的游戏开发之旅了！你可以看看本系列的姊妹篇：[用 Phaser 制作 2D 打砖块游戏](/zh-CN/docs/Games/Workflows/2D_breakout_game_Phaser) 或者 [Cyber Orb built in Phaser](/zh-CN/docs/Games/Workflows/HTML5_Gamedev_Phaser_Device_Orientation) 。或者，你也可以在 [MDN 游戏区](/zh-CN/docs/Games) 中获得灵感和更多知识。

你也可以回到[本教程的目录页](/zh-CN/docs/Games/Workflows/Breakout_game_from_scratch)。祝编程愉快！

{{Previous("Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}
