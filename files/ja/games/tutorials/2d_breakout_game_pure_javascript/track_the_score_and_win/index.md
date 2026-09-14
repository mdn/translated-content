---
title: 得点と勝ち負けを記録する
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}

これは、[ゲーム開発キャンバスチュートリアル](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) の 10 ステップ中 **8 ステップ目**になります。このレッスンを終えた後のソースコードは、[Gamedev-Canvas-workshop/lesson8.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson08.html)で見ることができます。

レンガを破壊するのはとてもクールですが、ユーザーがレンガにぶつかるごとにこの点を与え、その合計点をカウントしていくことで、さらに素晴らしいゲームになります。

## 得点を数える

ゲーム中に自分の得点を見ることができれば、最終的には友達を感動させることができます。得点を記録するための変数が必要です。 JavaScript に以下のように、残りの変数の後に追加してください。

```js
let score = 0;
```

得点表示を作成し更新するために `drawScore()` 関数も必要です。次のコードを `collisionDetection()` 関数のあとに追加してください。

```js
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`得点: ${score}`, 8, 20);
}
```

文字をキャンバス上に描画するのは図形を描画するのと似ています。フォント定義は CSS 出するものとちょうど同じように描きます。大きさとフォントの種類は {{domxref("CanvasRenderingContext2D.font","font()")}} メソッドで設定できます。それからフォントの色を設定するには {{domxref("CanvasRenderingContext2D.fillStyle()","fillStyle()")}} を、キャンバス上に配置される実際の文章を設定するには {{domxref("CanvasRenderingContext2D.fillText","fillText()")}} を使用してください。最初の引数は文章自体です。上記のコードは現在のポイントの数を表示します。最後の 2 つの引数は文章がキャンバス上に置かれる座標です。

ブロックに当たるたびに得点を与えるには、衝突が検出されるたびに得点変数を増加させる1行を `collisionDetection()` 関数に追加します。次のハイライトされた行を自分のコードに追加してください。

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

`drawScore()` を `draw()` 関数から呼び続けることで新しいフレームごとに得点は最新の状態に保たれます。次の行を `draw()` の中、ちょうど `drawPaddle()` の呼び出しの下に追加してください。

```js
drawScore();
```

## 全てのブロックが崩されたときに勝利を伝えるメッセージを表示する

ポイントを集め続けるという動作はうまく働きますが、永久に増やし続けることは出来ません。全てのブロックが崩されたらどうなるのでしょうか。何においてもそれこそがゲームの主目標なのですから、得られる全てのポイントが集まったときには勝利を伝えるメッセージを表示すべきです。次のハイライトされた部分を自分の `collisionDetection()` 関数に追記してください。

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
            alert("YOU WIN, CONGRATULATIONS!");
            document.location.reload();
            clearInterval(interval); // Chrome でゲームを終わらせるのに必要
          }
        }
      }
    }
  }
}
```

これのおかげで、全てのブロックが崩されたときにユーザーは実際にゲームに勝つことができます。ゲームにおいてはこれは非常に重要です。アラートのボタンがクリックされたら `document.location.reload()` 関数はページを再読込しゲームをもう一度始めます。

## 自分のコードと比べよう

自分のものと比べたいときのために最新のコードをいかに示します。このように見え、そして動くはずです。

```html hidden
<canvas id="myCanvas" width="480" height="320"></canvas>
<button id="runButton">ゲーム開始</button>
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
            alert("YOU WIN, CONGRATS!");
            document.location.reload();
            clearInterval(interval); // Chrome でゲームを終わらせるのに必要
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
  ctx.fillText(`得点: ${score}`, 8, 20);
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
      alert("GAME OVER");
      document.location.reload();
      clearInterval(interval); // Chrome でゲームを終わらせるのに必要
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

{{embedlivesample("compare_your_code", 600, 360)}}

> [!NOTE]
> ブロックに当たるたびにより多くのポイントを追加し、ゲームの終わりに集めたポイントの数を表示するようにしましょう。

## 次のステップ

この時点でもこのゲームはかなりよく見えます。次のレッスンでは[マウス操作](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls)を追加することでゲームの魅力を広げます。

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}
