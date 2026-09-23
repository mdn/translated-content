---
title: 收尾工作
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

{{Previous("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}

本篇为 [Gamedev Canvas 教程](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) 10 个步骤中的**第 10 步也是最后一步**。在你完成了本节教程之后，你可以在 [Gamedev-Canvas-workshop/lesson10.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson10.html) 看到源码。

不管我们做什么游戏，它总是存在优化的空间。例如，我们可以为玩家多提供几条命，让他们能在发生一两次失误的情况下顺利完成游戏。或者，我们也可以在渲染代码上下工夫。

## 加入生命机制

在游戏中实现生命机制的思路很直接。让我们先新增一个变量，用来存储其生命值。把下面这行代码和我们声明其他变量的代码放在一起：

```js
let lives = 3;
```

绘制生命值计数的做法几乎和绘制分数一样——把下面的函数添加到 `drawScore()` 函数后面：

```js
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`生命值：${lives}`, canvas.width - 65, 20);
}
```

我们不立即结束游戏，而是减少生命计数，直到生命值耗尽。在玩家用掉一条命后，我们也可以重置小球和球板位置。因此，在函数 `draw()` 中将以下三行代码：

```js
alert("游戏结束");
document.location.reload();
clearInterval(interval); // Chrome 需要这一行来结束游戏
```

替换为这些代码，我们可以为其添加稍显复杂的逻辑：

```js
lives--;
if (!lives) {
  alert("游戏结束");
  document.location.reload();
  clearInterval(interval); // Chrome 需要这一行来结束游戏
} else {
  x = canvas.width / 2;
  y = canvas.height - 30;
  dx = 2;
  dy = -2;
  paddleX = (canvas.width - paddleWidth) / 2;
}
```

现在，当小球碰到屏幕底边时，我们让变量 `lives` 的值减一。如果生命用尽，游戏就宣告结束；如果仍有剩余生命，则重置球和挡板的位置，同时重置球的运动状态。

### 渲染生命值

现在只需在 `draw()` 函数内调用 `drawLives()` 即可。让我们把它加到 `drawScore()` 调用的下面：

```js
drawLives();
```

## 用 requestAnimationFrame() 优化渲染

现在让我们处理一些与游戏机制无关，但与画面渲染相关的东西。和我们目前使用 {{domxref("Window.setInterval", "setInterval()")}} 实现的固定帧率渲染相比，{{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} 能让浏览器更好地渲染画面。让我们把下面这行代码：

```js
interval = setInterval(draw, 10);
```

替换为：

```js
draw();
```

再把代码中的每一处

```js
clearInterval(interval); // Chrome 需要这一行来结束游戏
```

删除。然后，在 `draw()` 函数的最下方（右花括号之前）加入下面这行代码。它的作用是使 `draw()` 函数递归调用自身：

```js
requestAnimationFrame(draw);
```

现在 `draw()` 函数在 `requestAnimationFrame()` 的循环中被反复调用，与先前做法最大的不同是，我们将帧率的控制权交给浏览器，而不是固定的 10 毫秒。浏览器会在适当的时机同步帧率，并且只在必要的时候才刷新渲染的图形。这使得我们的动画比之前的 `setInterval()` 方法更加流畅且高效。

## 比较你的代码

就是这样——游戏的最终版本已经准备就绪，随时可以发布！

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

const brickRowCount = 5;
const brickColumnCount = 3;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

let score = 0;
let lives = 3;

let bricks = [];

for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
document.addEventListener("mousemove", mouseMoveHandler);

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

function mouseMoveHandler(e) {
  let relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      let b = bricks[c][r];
      if (b.status === 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          score++;
          if (score === brickRowCount * brickColumnCount) {
            alert("你赢了，恭喜！");
            document.location.reload();
          }
        }
      }
    }
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
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status === 1) {
        const brickX = r * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = c * (brickHeight + brickPadding) + brickOffsetTop;
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
}
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`分数：${score}`, 8, 20);
}
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`生命值：${lives}`, canvas.width - 65, 20);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      lives--;
      if (!lives) {
        alert("游戏结束");
        document.location.reload();
      } else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 3;
        dy = -3;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
    }
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}

const runButton = document.getElementById("runButton");
runButton.addEventListener("click", () => {
  draw();
  runButton.disabled = true;
});
```

{{embedlivesample("比较你的代码", 600, 360)}}

> [!NOTE]
> 试着改变生命值和球从球板上反弹的角度。

## 游戏结束——暂时看来！

恭喜你完成了所有课程！现在，你应该已经掌握 canvas 操纵的基础和 2D 游戏背后的逻辑了。是时候去学习一些框架，继续你的游戏开发之旅了！你可以看看本系列的姊妹篇：[用 Phaser 制作 2D 打砖块游戏](/zh-CN/docs/Games/Tutorials/2D_breakout_game_Phaser) 或者 [用 Phaser 制作的 Cyber Orb 游戏](/zh-CN/docs/Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation)。或者，你也可以在 [MDN 游戏区](/zh-CN/docs/Games)中获得灵感和更多知识。

你也可以回到[本教程的目录页](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript)。祝编程愉快！

{{Previous("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}
