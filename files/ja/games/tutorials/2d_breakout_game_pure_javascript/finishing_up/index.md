---
title: 仕上げ
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

{{Previous("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}

これは、[ゲーム開発キャンバスチュートリアル](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) の 10 ステップ中 **10 ステップ目、最後のステップ**になります。このレッスンを終えた後のソースコードは、[Gamedev-Canvas-workshop/lesson10.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson10.html)で見ることができます。

私たちが書いているゲームには、常に改良の余地があります。例えば、プレイヤーに複数のライフを提供することができます。1 人や 2 人がミスをしても、ゲームを完了させることができるのです。また、コードのレンダリングを改善することもできます。

## プレイヤーにライフを与える

ライフを実装するのは極めて単純です。まずは他の変数を宣言したところと同じところにライフの数を保存する変数を追加しましょう。

```js
let lives = 3;
```

ライフカウンターを描画するのは得点カウンターを描画するのとほとんど同じです。次の関数を自分のコードの `drawScore()` の下に追加してください。

```js
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`ライフ: ${lives}`, canvas.width - 65, 20);
}
```

すぐにゲームを終了するのではなく、ライフがなくなるまでライフを減らしていきます。また、プレイヤーが次のライフで始めるときに、ボールとパドルの位置をリセットすることができます。そこで、 `draw()` 関数の中で、以下の 3 行を置き換えてください。

```js
alert("GAME OVER");
document.location.reload();
clearInterval(interval); // Chrome でゲームを終わらせるのに必要
```

これに以下で示すようなもう少し複雑なロジックを追加します。

```js
lives--;
if (!lives) {
  alert("GAME OVER");
  document.location.reload();
  clearInterval(interval); // Chrome でゲームを終わらせるのに必要
} else {
  x = canvas.width / 2;
  y = canvas.height - 30;
  dx = 2;
  dy = -2;
  paddleX = (canvas.width - paddleWidth) / 2;
}
```

ボールが画面下端に当たったときに `lives` 変数からライフを 1 つ引きます。もしライフが残っていなかったらゲームは負けです。ライフが残っている場合は、ボールの位置とパドルの位置がリセットされ、ボールの動きもリセットされます。

### ライフ表示を描画する

`drawLives()` への呼び出しを`draw()` 関数内に追加する必要があります。 `drawScore()` の呼び出しの下に追記してください。

```js
drawLives();
```

## requestAnimationFrame()で描画を改善する

ではゲーム機構に直結しない部分、描画に関わる部分にとりかかりましょう。 {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}} は今は {{domxref("Window.setInterval", "setInterval()")}} で実装している固定フレームレートよりもより良くブラウザーがゲームを描画できるようにします。

```js
interval = setInterval(draw, 10);
```

これを次の行で置き換えます。

```js
draw();
```

そして、それぞれのインスタンスを削除します。

```js
clearInterval(interval); // Chrome でゲームを終わらせるのに必要
```

次に、 `draw()` 関数の一番下（中括弧を閉じる直前）に、以下の行を追加します。これは、 `draw()` 関数が何度も繰り返し呼び出されるようにするためのものです。

```js
requestAnimationFrame(draw);
```

これで`draw()`関数が`requestAnimationFrame()`ループの中で何度も実行されるようになりましたが、固定の10ミリ秒のフレームレートではなくブラウザーに制御を託しています。ブラウザーはフレームレートを適切に同期し図形を必要なときだけ描画します。これは古い`setInterval()`メソッドよりも効率的で滑らかなアニメーションループを生み出します。

## 自分のコードを比べる

これで全部です。ゲームの最終版が準備でき、プレイできる状態になりました。

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
            alert("YOU WIN, CONGRATS!");
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
  ctx.fillText(`得点: ${score}`, 8, 20);
}
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`ライフ: ${lives}`, canvas.width - 65, 20);
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
        alert("GAME OVER");
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

{{embedlivesample("compare_your_code", 600, 360)}}

> [!NOTE]
> ライフの数とパドルでボールが跳ねる角度を替えてみましょう。

## ゲームクリア - 今のところは

おめでとうございます。これで全てのレッスンを終えました。ここまでで、キャンバス操作の基本と二次元のゲームの裏にあるロジックを学んだはずです。フレームワークを学びゲーム開発を続ける良い時期です。このシリーズに対応する [Phaser を使った二次元ブロックくずしゲーム](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser)や[デバイス回転方向を使った二次元迷路ゲーム](/ja/docs/Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation)チュートリアルを見てみると良いでしょう。 [MDN のゲームセクション](/ja/docs/Games)で発想やより多くの知識を探してみても良いでしょう。

また、[このチュートリアルシリーズの目次](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript)を見返せます。コーディングを楽しみましょう。

{{Previous("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}
