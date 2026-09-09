---
title: 鼠标控制
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up")}}

这是 [Gamedev Canvas 教程](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) 10 个步骤中的**第 9 步**。完成本课程后，你可以在 [Gamedev-Canvas-workshop/lesson9.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson09.html) 找到本节对应的源代码。

游戏本身其实已经完成了，所以接下来让我们对它进行润色。我们已经添加了键盘控制，不过也可以很容易地添加鼠标控制。

## 监听鼠标移动

监听鼠标移动比监听按键更简单：我们只需要监听 {{domxref("Element/mousemove_event", "mousemove")}} 事件。把下面这行代码和其他事件监听代码放在一起，放在 `keyup` 事件的下一行：

```js
document.addEventListener("mousemove", mouseMoveHandler);
```

## 将球板移动与鼠标移动绑定

我们可以根据指针坐标来更新球板位置——下面这个处理函数正是做这件事的。把这个函数添加到你的代码中，放在刚刚添加的那行代码下面：

```js
function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}
```

在这个函数中，我们首先计算 `relativeX` 的值，它等于鼠标在视口中的水平位置（`e.clientX`）减去画布左边缘到视口左边缘的距离（`canvas.offsetLeft`）——实际上就是画布左边缘到鼠标指针之间的距离。如果指针的相对 X 坐标大于 0 且小于画布宽度，就说明指针位于画布边界内。此时，将 `paddleX`（球板左边缘的坐标）设为 `relativeX` 减去球板宽度的一半，这样移动就会相对于球板中心进行。

现在球板会跟随鼠标指针。不过，由于我们将球板的移动限制在画布大小范围内，它不会从任意一侧完全消失。

## 比较你的代码

这是可进行比较的最新代码状态：

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
  const relativeX = e.clientX - canvas.offsetLeft;
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
            clearInterval(interval); // Chrome 需要它来结束游戏
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
      alert("游戏结束");
      document.location.reload();
      clearInterval(interval); // Chrome 需要它来结束游戏
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
> 试着调整球板移动的边界，使球板在画布两侧都能完整显示，而不是只显示一半。

## 下一步

现在我们已经拥有一个完整的游戏。接下来，我们会通过一些小调整来结束这一系列课程——[收尾工作](/zh-CN/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up)。

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up")}}
