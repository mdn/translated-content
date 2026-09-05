---
title: 游戏结束
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}

这是 [Gamedev Canvas 教程](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) 10 个步骤中的**第 5 步**。在你完成了本节教程之后，你可以在 [Gamedev-Canvas-workshop/lesson5.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson05.html) 看到源码。

看着球从墙上反弹，并且能够移动球板很有趣，但除此之外，游戏什么都不会发生，也没有进度或最终目标。从游戏玩法的角度来看，最好能让玩家输掉游戏。在打砖块游戏中，输掉游戏的逻辑是：如果你没有用球板接住球，让球到达屏幕底部边缘，那么游戏就结束了。

## 实现游戏结束

让我们尝试在游戏中实现游戏结束。下面是第三课中让球从墙上反弹的代码片段：

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}

if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

现在不要让球从四面墙上反弹，而是只允许它从三面墙反弹——左侧、顶部和右侧。碰到底部墙壁将结束游戏。我们会修改第二个 `if` 代码块，把它改成 `if...else` 代码块，在球碰到画布底部边缘时触发“游戏结束”状态。现在，我们会显示一个警告消息，并通过重新加载页面来重新开始游戏。

首先，在所有函数之前的顶层添加 `interval` 变量声明：

```js
let interval = 0;
```

然后，将最开始调用 `setInterval()` 的位置：

```js
setInterval(draw, 10);
```

替换成：

```js
interval = setInterval(draw, 10);
```

然后将第二个 if 语句替换为以下内容：

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  alert("游戏结束");
  document.location.reload();
  clearInterval(interval); // Chrome 需要这一行来结束游戏
}
```

## 让球板击球

本节教程最后要做的是在球和球板之间创建某种碰撞检测，这样球就可以从球板上反弹并回到游戏区域。最简单的做法是检查球的中心是否位于球板的左右边缘之间。再次更新你刚才修改的最后一段代码，改成如下内容：

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  if (x > paddleX && x < paddleX + paddleWidth) {
    dy = -dy;
  } else {
    alert("游戏结束");
    document.location.reload();
    clearInterval(interval);
  }
}
```

如果球碰到画布的底部边缘，我们需要检查它是否碰到了球板。如果碰到了，它就会如你预期那样反弹；如果没有，游戏就会像之前一样结束。

## 比较你的代码

看看你的代码与下面的实时示例相比如何：

```html hidden
<canvas id="myCanvas" width="480" height="320"></canvas>
<button id="runButton">开始游戏</button>
```

```css hidden
canvas {
  background: #eeeeee;
}
button {
  display: block;
}
```

```js hidden
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const ballRadius = 10;

let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

const paddleHeight = 10;
const paddleWidth = 75;

let paddleX = (canvas.width - paddleWidth) / 2;
let rightPressed = false;
let leftPressed = false;

let interval = 0;

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false;
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      alert("游戏结束");
      document.location.reload();
      clearInterval(interval); // Chrome 需要这一行来结束游戏
    }
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
}

function startGame() {
  interval = setInterval(draw, 10);
}

const runButton = document.getElementById("runButton");
runButton.addEventListener("click", () => {
  startGame();
  runButton.disabled = true;
});
```

{{embedlivesample("比较你的代码", 600, 360)}}

> [!NOTE]
> 试着让球在碰到球板时移动得更快。

## 下一步

到目前为止，我们做得相当不错。现在你会输掉游戏，游戏也开始变得更值得玩了！但它仍然缺少一些东西。让我们继续进入第六章——[构建砖块区域](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field)——并创建一些砖块让球去摧毁。

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}
