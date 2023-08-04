---
title: Build the brick field
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection")}}

这是 [Gamedev Canvas tutorial](/zh-CN/docs/Games/Workflows/Breakout_game_from_scratch)教程 10 节的第 6 节。您可以在完成本课程后在这里[Gamedev-Canvas-workshop/lesson6.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson06.html)找到源代码。

在修改游戏机制后，我们可以输了 — 这样这游戏看起来终于像是一个游戏了，这真是太好了。但是，如果你总是让球与墙、板碰撞的话，很快就会感到无聊的。好游戏需要的是让球消灭砖，这就是我们即将要做的！

## 设置砖变量

本课题的总体目标是使用一个二维数组嵌套的循环，给出砖的几行代码。首先我们需要设置一些变量定义的砖，如宽度和高度信息，行和列，等。在之前的变量声明处加入以下几行代码。

```js
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
```

在这里，我们定义了砖的行数和列，宽度和高度，砖块之间的填充物，这样它们就不会互相接触；有一个上、左偏移量，所以它们不会从画布的边缘开始绘制。

我们将在一个二维数组容纳我们所有的砖。它将包含砖列（c），砖行（R），每一个包含一个对象，其中包含 x 和 y 位置，让每个砖显示在屏幕上。在变量下面添加以下代码：

```js
var bricks = [];
for (c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0 };
  }
}
```

上面的代码将通过行和列的循环和创造新砖。注意，砖块对象稍后也将用于碰撞检测。

## 画砖的逻辑

现在让我们创建一个函数来遍历数组中的所有砖块并在屏幕上绘制它们。. 代码如下：

```js
function drawBricks() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      bricks[c][r].x = 0;
      bricks[c][r].y = 0;
      ctx.beginPath();
      ctx.rect(0, 0, brickWidth, brickHeight);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
  }
}
```

再次，我们遍历的行和列，给每一块砖的位置设置`X`和`Y`，我们也画布上画砖，---`brickwidth` X `brickheight` 。问题是我们都画在一个地方坐标`（0,0）`处。我们需要做的是增加一些计算，计算每个循环迭代后的砖块的 x 和 y 位置：

```js
var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
```

每个`brickX`位置是 `brickWidth + brickPadding`，乘以列数`C`，再加上`brickOffsetLeft`；对于砖`brickY`的逻辑相同，除了名称不同，使用行数`R`，`brickHeight`，和`brickOffsetTop`。现在，每一块砖都可以放在正确的地方，排成一排，每一块砖之间都有填充物，从左上角和顶部的帆布边缘偏移。

在设置`brickX`和`brickY`作为对应砖的坐标之后，形成了 `drawBricks()`函数的最终版本。将以下代码加在`drawPaddle()`函数后面：

```js
function drawBricks() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      var brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
      var brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
      bricks[c][r].x = brickX;
      bricks[c][r].y = brickY;
      ctx.beginPath();
      ctx.rect(brickX, brickY, brickWidth, brickHeight);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
  }
}
```

## 到了展现真正画砖的时候了

最后一件事就是在`draw()`中调用`drawBricks()`, 位置最好在函数开始处，在清除画布和画球之间。直接将下面代码加在`drawBall()` 处：

```js
drawBricks();
```

## 比较你的代码

这样，游戏变得更有趣了 :

{{JSFiddleEmbed("https://jsfiddle.net/kundan333/myd4vbwg/2/","","320")}}

> **备注：** 练习：尝试在行或列上改变砖块数量，或者它们的位置。

## 下一节

现在，我们有砖啦！但是球根本就没有和它们互动 —— 接下来的第七章我们将让球和砖产生碰撞：[碰撞检测](/zh-CN/docs/Games/Workflows/Breakout_game_from_scratch/Collision_detection)。

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection")}}
