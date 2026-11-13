---
title: 게임 오버
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Game_over
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Build_the_brick_field")}}

이것은 [Gamedev Canvas tutorial](/ko/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript) 의 다섯 번째 학습입니다. 이 학습을 통해 완성된 코드는 [Gamedev-Canvas-workshop/lesson5.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson05.html) 에서 확인할 수 있습니다.

공이 벽에서 튕겨져 나오는 것과 패들을 움직이는 것을 보는건 재밌지만, 더 진전이 필요합니다. 게임에서 질 수 있다면 좋겠습니다. 벽돌 깨기 게임에서 패배하는 구조는 꽤 단순합니다. 만약 패들이 공을 놓친다면, 공은 캔버스의 아래 면에 닿을 것이고, 그대로 게임은 끝납니다.

## 게임 오버 기능 적용하기

'게임 오버' 기능을 만들어봅시다. 아래에 세 번째 학습에서 작성한, 벽에서 공을 반사시키는 코드의 일부가 있습니다.

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}

if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

사면 모두에서 공을 튕겨내지 말고 왼쪽, 위쪽, 오른쪽, 세 면에만 적용해봅시다. 아래쪽 면에 닿는 순간 게임은 끝납니다. 우리는 공이 밑면에 충돌하는 순간 "게임 오버" 상태로 바뀌게 하기 위해 두 번째 `if` 블록을 수정할 것입니다. 우선 경고 메시지를 보여주고 페이지를 리로딩해서 게임을 다시 시작하게 할 것입니다. 두번째 `if` 블록을 아래와 같이 수정해봅시다.

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  alert("GAME OVER");
  document.location.reload();
}
```

## Paddle은 공을 튕겨내야지

이번 학습에서 할 마지막 일은 공과 패들 사이의 충돌 감지같은, 공을 게임 화면으로 되돌아가게 튕겨내는 기능을 만드는 것입니다. 가장 쉬운 방법은 공의 중심이 패들의 내부에 있는지 확인하는 것이다. 위에서 수정한 코드를 약간 고쳐봅시다.

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  if (x > paddleX && x < paddleX + paddleWidth) {
    dy = -dy;
  } else {
    alert("GAME OVER");
    document.location.reload();
  }
}
```

공이 캔버스의 밑면에 닿는 순간, 공이 패들의 안쪽에 있는지 확인해야 합니다. 만약 그렇다면, 우리가 기대하는대로 공은 튕겨져야 합니다. 그게 아니라면, 게임의 전과 같이 끝나야 합니다.

## 코드 비교하기

여기 완성된 코드가 있으니 작성한 코드와 비교해봅시다.

> [!NOTE]
> 라이브 샘플이 자동으로 실행되지 않도록 "게임 시작" 버튼을 추가했습니다. 게임이 자동으로 시작되면서 알림 등의 이벤트가 과도하게 발생하는 것을 방지하기 위해서입니다.

```html hidden
<canvas id="myCanvas" width="480" height="320"></canvas>
<button id="runButton">게임 시작</button>
```

```css hidden
canvas {
  background: #eee;
}
button {
  display: block;
}
```

```js hidden
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  }
}
function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
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
      alert("GAME OVER");
      document.location.reload();
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
  setInterval(draw, 10);
}

const runButton = document.getElementById("runButton");
runButton.addEventListener("click", () => {
  startGame();
  runButton.disabled = true;
});
```

{{EmbedLiveSample("코드 비교하기", 600, 360)}}

> [!NOTE]
> **연습**: 공이 패들에 닿았을 때 공의 속도를 빠르게 만들어봅시다.

## 다음 단계

지금까지 아주 잘 하고 있습니다. 게임은 플레이 할 가치가 생겼고 이젠 게임이 끝날 수도 있습니다. 하지만 뭔가가 빠졌습니다. 여섯 번째 학습 — [벽돌 영역을 만들어보기](/ko/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Build_the_brick_field) — 로 이동해서 몇 개의 벽돌을 만들어 봅시다.

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript/Player_paddle_and_controls", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Build_the_brick_field")}}
