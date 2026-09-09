---
title: ゲームオーバー
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}

これは、[ゲーム開発キャンバスチュートリアル](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) の 10 ステップ中 **5 ステップ目**になります。このレッスンを終えた後のソースコードは、[Gamedev-Canvas-workshop/lesson5.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson05.html)で見ることができます。

ボールが壁に当たって跳ねているのを見たり、パドルを移動させたりできるのは楽しいのですが、それ以外は何もせず、ゲームの進行や最終目標がありません。ゲームプレイの観点からは、負けることがあってもいいのではないでしょうか。ブロック崩しで負けるのは、パドルでボールを飛ばして画面の下端へ到達させたらゲームオーバーです。

## ゲームオーバーを実装する

自分のゲームにゲームオーバーを実装してみましょう。第 3 章ではボールを壁で跳ね返るようにしました。以下はその引用です。

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}

if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

4 辺全てでボールを弾ませるのではなく、 3 辺、すなわち上端と左右のみで跳ね返るようにしましょう。底を打ったときゲームは終わりになります。 2 番目の if 節を編集して、ボールがキャンバスの下端で衝突したときにゲームオーバー状態が発動する if else 節にしましょう。ここではアラートメッセージを表示して、ページの再読み込みによりゲームを再開するだけにしましょう。

まず、どの関数よりも前に、最上位レベルで `interval` 変数の宣言を追加します。

```js
let interval = 0;
```

そして、`setInterval()` を最初に呼び出しているところを置き換えます。

```js
setInterval(draw, 10);
```

置き換えるとこうなります。

```js
interval = setInterval(draw, 10);
```

次に 2 番目の if 節を次の内容で置き換えましょう。

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  alert("GAME OVER");
  document.location.reload();
  clearInterval(interval); // Chrome でゲームを終わらせるのに必要
}
```

## パドルをボールに当てる

このレッスンの最後に、ボールとパドルの間に何らかの衝突判定を作成し、ボールがパドルで跳ねてプレイエリアに戻れるようにします。最も簡単なのは、ボールの中心がパドルの左端と右端の間にあるかどうかをチェックすることです。最後に修正したコードを再び以下のように更新してください。

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  if (x > paddleX && x < paddleX + paddleWidth) {
    dy = -dy;
  } else {
    alert("GAME OVER");
    document.location.reload();
    clearInterval(interval);
  }
}
```

ボールがキャンバスの下端に当たっていたら、パドルにも当たっているかどうか確認します。もしパドルに当たっていたら、思ったとおりにボールは弾みます。当たらなかったら、先ほどと同じようにゲームオーバーになります。

## 自分のコードと比べよう

自分のコードと比べられるように、実際に動くコードを以下に示します。

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
> ボールがパドルに当たったときに速く動くようにしましょう。

## 次のステップ

今のところかなり順調に進歩してきていて、ゲームも負けるようになったことでもっと遊ぶ価値が感じられるようになってきました。第 6 章の[ブロックのかたまりを作る](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field)に進み、ボールが壊せるブロックを作りましょう。

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}
