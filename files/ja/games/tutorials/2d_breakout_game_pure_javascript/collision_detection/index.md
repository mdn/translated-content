---
title: 衝突検出
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection
l10n:
  sourceCommit: 6036cd414b2214f85901158bdf3e3a96123d4553
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win")}}

これは、[ゲーム開発キャンバスチュートリアル](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) の 10 ステップ中 **7 ステップ目**になります。このレッスンを終えた後のソースコードは、[Gamedev-Canvas-workshop/lesson7.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson07.html)で見ることができます。

ブロックはすでに画面の内側へ現れていますが、ボールがその中を通過していくので、ゲームはまだそれほど面白くはありません。レンガを跳ね返して壊せるように、衝突判定を追加することを考えなければなりません。

もちろん、これをどのように実装するかは自由ですが、ボールが矩形に触れているかどうかを計算するのは大変です。なぜなら、キャンバスにはこのためのヘルパー関数がないからです。このチュートリアルでは、可能な限り簡単な方法で実装することにします。ボールの中心が与えられたレンガのどれかに衝突しているかどうかをチェックします。これは毎回完璧な結果を得られるわけではありませんし、衝突検出を行うにはもっと洗練された方法がありますが、基本的な概念を学ぶにはこの著作物で十分です。

## 衝突検出関数

最初の第一歩として、毎フレーム描画されるたびに全てのブロックを通してループし、ひとつひとつのブロックの位置をボールの座標と比較する衝突検出関数を作成しましょう。コードがより読みやすくなるように、衝突検出のループの中でブロックオブジェクトを保存する変数 `b` を定義します。

```js
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];
      // 計算
    }
  }
}
```

もしボールの中央がブロックの 1 つの座標の内部だったらボールの向きを変えます。ボールの中央がブロックの内部にあるためには次の 4 つの命題が全て真でなければなりません。

- ボールの x 座標がブロックの x 座標より大きい
- ボールの x 座標がブロックの x 座標とその幅の和より小さい
- ボールの y 座標がブロックの y 座標より大きい
- ボールの y 座標がブロックの y 座標とその高さの和より小さい

コードに書き下ろしてみましょう。

```js
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      const b = bricks[c][r];
      if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
        dy = -dy;
      }
    }
  }
}
```

上記のブロックを自分のコードの `keyUpHandler()` 関数の下に追加してください。

## ブロックが当たった後に消えるようにする

上記のコードは期待したとおり動作し、ボールの向きを変えるはずです。問題はブロックがそのままとどまっているということです。ボールに既に当たったブロックを取り除く方法を考え出さなければなりません。これはそれぞれのブロックを画面上に描画したいかどうかを示す新たなパラメーターを追加することで達成できます。ブロックを初期化している部分のコードで、それぞれのブロックオブジェクトに `status` プロパティを追加しましょう。次の部分のコードをハイライトした行で示したように更新してください。

```js
let bricks = [];

for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}
```

次に、それぞれのブロックを描画する前に `status` プロパティの値を `drawBricks()` 関数で確認します。もし `status` が `1` なら描画します。でももし `0` ならそのブロックは既にボールに当たっていますから、これ以上画面上に描画されてほしくありません。自分の `drawBricks()` 関数を次のように更新してください。

```js
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status === 1) {
        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
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
```

## 衝突検出関数で状態を追跡、更新する

ここでは `collisionDetection()` 関数内で `status` プロパティをブロックに紐づけていきます。もしブロックがアクティブ (状態が `1`) なら衝突が起きるかどうか確認します。もし衝突が起きるのなら、画面上に描画されないようにそのブロックの状態を `0` に設定します。自分の `collisionDetection()` 関数を以下に示すように更新してください。

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
        }
      }
    }
  }
}
```

## 衝突検出を有効にする

`collisionDetection()` 関数への呼び出しをメインの `draw()` 関数に追加して仕上げとします。次の行を `draw()` 関数の、 `drawPaddle()` の呼び出しのすぐ下に追加してください。

```js
collisionDetection();
```

## 自分のコードと比べよう

これでボールの衝突検出がそれぞれのブロックに対してフレームごとに確認されるようになりました。ブロックを壊せるようになったのです。 :-)

```html hidden
<canvas id="myCanvas" width="480" height="320"></canvas>
<button id="runButton">Start game</button>
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

const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

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
        let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        let brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
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

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  collisionDetection();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      if ((y -= paddleHeight)) {
        dy = -dy;
      }
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

## 次のステップ

着実にゴールに近づいています。では、先に進みましょう。第 8 章ではどのように[得点と勝ち負けを記録するか](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win)を見てみます。

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win")}}
