---
title: 跟踪得分和获胜
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}

这是 [Gamedev Canvas 教程](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) 10 个步骤中的**第 8 步**。完成本课后，你可以在 [Gamedev-Canvas-workshop/lesson8.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson08.html) 查看本节对应的源码。

打掉砖块确实很酷，但如果游戏能在每次击中砖块时给玩家加分，并持续统计总分，就会更有成就感。

## 计算分数

如果你可以在游戏过程中随时看到分数，就有机会向朋友炫耀成绩。我们先需要一个变量来记录分数。请在现有变量定义之后，将以下代码添加到你的 JavaScript 代码中：

```js
let score = 0;
```

你还需要一个 `drawScore()` 函数来创建和更新分数显示。在 `collisionDetection()` 函数后添加以下代码：

```js
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`分数：${score}`, 8, 20);
}
```

在画布上绘制文本与绘制图形类似。字体定义与 CSS 中的写法完全一致，你可以通过 {{domxref("CanvasRenderingContext2D.font","font()")}} 方法设置大小和字体。然后使用 {{domxref("CanvasRenderingContext2D.fillStyle()","fillStyle()")}} 设置字体颜色，再用 {{domxref("CanvasRenderingContext2D.fillText","fillText()")}} 设置要绘制的文本内容及其位置。第一个参数是文本本身（上面的代码会显示当前得分），最后两个参数是文本在画布上的坐标。

要在每次击中砖块时加分，需要在 `collisionDetection()` 函数中添加一行代码，使其每次检测到碰撞时都递增 `score` 变量。请在代码中加入下方高亮行：

```js
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];
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
        }
      }
    }
  }
}
```

在 `draw()` 函数中调用 `drawScore()`，即可让分数在每一帧都保持更新——请在 `draw()` 内 `drawPaddle()` 调用的下面添加以下行：

```js
drawScore();
```

## 当所有砖块被破坏时显示获胜消息

计分功能已经可用，但分数不会无限增加：当所有砖块都被打掉时该怎么办？这毕竟是游戏的主要目标，所以当玩家拿到全部可得分数时，应该显示胜利提示。请将下面高亮部分添加到 `collisionDetection()` 函数中：

```js
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];
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
            clearInterval(interval); // Chrome 结束游戏需要它
          }
        }
      }
    }
  }
}
```

这样一来，用户在打掉全部砖块后就真的可以赢下游戏了，这对游戏体验非常重要。`document.location.reload()` 会在用户点击提示的按钮后重新加载页面并重启游戏。

## 比较你的代码

如果你想与自己的代码进行对比，下面是本节最新版本（并且可以正常运行）：

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
const brickRowCount = 5;
const brickColumnCount = 3;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
let score = 0;

let bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

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
            clearInterval(interval); // Chrome 结束游戏需要它
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

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
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
      alert(`游戏结束！你的得分是：${score}`);
      document.location.reload();
      clearInterval(interval); // Chrome 结束游戏需要它
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
> 试着把每次击中砖块获得的分数调高一些，并在游戏结束提示框中输出最终收集到的分数。

## 下一步

目前来看，游戏效果相当不错。在下一课中，我们会通过加入[鼠标控制](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls)来进一步提升可玩性。

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}
