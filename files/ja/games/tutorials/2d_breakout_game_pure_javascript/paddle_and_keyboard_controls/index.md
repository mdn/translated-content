---
title: パドルとキーボード操作
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls
l10n:
  sourceCommit: 56718ef243af7c00ad3e848d436e718499c0590f
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over")}}

これは、[ゲーム開発キャンバスチュートリアル](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) の 10 ステップ中 **4 ステップ目**になります。このレッスンを終えた後のソースコードは、[Gamedev-Canvas-workshop/lesson4.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson04.html)で見ることができます。

ボールが自由に壁に跳ね返っていて、それを無限に眺めることができるのですが、現状では対話することができないのです。操作できないのでは、ゲームとは言えません! そこで、ユーザーが操作できるパドルという対話を追加してみましょう。

## ボールにぶつかるパドルの定義

そういうわけで、ボールに当てるパドルが必要になりました。パドルに用いるいくつかの変数を定義しましょう。次の変数を、他の変数と一緒にコードの一番上に追加してください。

```js
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
```

ここではパドルの高さと幅、 `x` 軸上の開始地点を定義しています。続くコードではこれらを用いてさらなる計算が行われます。パドルを画面上に表示する関数を作成しましょう。 `drawBall()` のすぐ下に次の関数を追加してください。

```js
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
```

## パドルを操作できるようにする

こにパドルを描画しても良いですが、ユーザーの行動に応答する必要があります。キーボード操作を実装するのです。必要なものは次のとおりです。

- 左の操作ボタンが押されているか、右の操作ボタンが押されているかという情報を保存する 2 つの変数。
- `keydown` イベントと `keyup` イベントの 2 つのイベントリスナー。ボタンが押されたときにパドルの動きを扱うコードを走らせたいのです。
- `keydown` イベントと `keyup` イベントを扱い、ボタンが押されたときに実行されるコード。
- パドルを左や右に動かす機能

押されているボタンはこのとおり、論理値として定義、初期化できます。このコードをどこか他の変数の近くに追記してください。

```js
let rightPressed = false;
let leftPressed = false;
```

最初は制御ボタンは押されていないため、どちらにおいても既定値は `false` です。ボタンが押されたのを検知するため、 2 つのイベントリスナーを設定します。`drawBall` 関数の定義のすぐ上に、次の行を追加してください。

```js
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
```

キーボードのキーのどれかに対して `keydown` イベントが発生したとき（どれかが押されたとき）、 `keyDownHandler()` 関数が実行されます。 2 つ目のリスナーについても同様で、（そのキーが押されなくなったき） `keyup` イベントは `keyUpHandler()` 関数を呼び出します。自分の `addEventListener()` の行の下に次のコードを追記してください。

```js
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
```

キーが押されたとき、その情報は変数に保存されます。それぞれの場合で関連する変数が `true` に設定されます。キーが離されたときに変数は `false` に戻されます。

どちらの関数も変数 `e` で表されるイベントを引数としてとります。これから有用な情報が手に入ります。 `key` は押されたキーについての情報を持っています。大抵のブラウザーでは左右の矢印キーにそれぞれ `ArrowLeft` と `ArrowRight` が対応します。ただし IE/Edge に対応するために、 `Left` と `Right`も確認する必要があります。 もし左カーソルが押されたら、変数 `leftPressed` は `true` に、離されたら変数 `leftPressed` は `false` に設定されます。右カーソルと変数 `rightPressed` についても同様です。

### パドルの移動ロジック

押されているキーについての情報を保存している変数、そして関連する関数が設定されました。ではそれらを使う実際のコードに手を入れて画面上のパドルを動かしてみましょう。 `draw()` 関数の中で、各々のフレームを描画するときに左カーソルキーが押されているか、右カーソルが押されているか確認しましょう。次のようなコードになっているでしょう。

```js
if (rightPressed) {
  paddleX += 7;
} else if (leftPressed) {
  paddleX -= 7;
}
```

左カーソルを押すとパドルは左に 7 ピクセル移動し、右カーソルを押すとパドルは右に 7 ピクセル移動する。これは今のところうまく動作しているが、どちらかのキーを長く押しているとパドルがキャンバスの端から消えてしまいます。これを改善し、パドルをキャンバスの枠内だけ移動させるには、次のようなコードに変更します。

```js
if (rightPressed) {
  paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
} else if (leftPressed) {
  paddleX = Math.max(paddleX - 7, 0);
}
```

ここで用いられている位置 `paddleX` は期待されているように左端の `0` と右端の `canvas.width-paddleWidth` 間で動きます。

上記のコード片を `draw()` 関数の最後、閉じ波括弧のちょうど前に追記してください。

あとは `drawPaddle()` 関数を `draw()` 関数から呼び出し、実際に画面に表示するようにすれば完了です。次の行を `draw()` 関数の、ちょうど `drawBall()` を呼ぶ行の下に追記してください。

```js
drawPaddle();
```

## 自分のコードと比べよう

自分のコードと比べられる、実際に動くコードがこちらになります。

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
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  if (rightPressed) {
    paddleX += 7;
    if (paddleX + paddleWidth > canvas.width) {
      paddleX = canvas.width - paddleWidth;
    }
  } else if (leftPressed) {
    paddleX -= 7;
    if (paddleX < 0) {
      paddleX = 0;
    }
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

{{embedlivesample("compare_your_code", 600, 360)}}

> [!NOTE]
> パドルを速く、または遅く動くようにしたり、大きさを変えたりしてみましょう。

## 次のステップ

ゲームっぽい要素を追加しましょう。今問題なのはただパドルでボールを永遠に打ち続けることしか出来ないという点です。これは第5章、[ゲームオーバー](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over)でゲームの終了状態を追加することで完全に変わることになります。

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over")}}
