---
title: ボールを壁で跳ね返らせる
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}

これは、[ゲーム開発キャンバスチュートリアル](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) の 10 ステップ中 **3 ステップ目**になります。このレッスンを終えた後のソースコードは、[Gamedev-Canvas-workshop/lesson3.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson03.html)で見ることができます。

ボールが移動するのを見るのは楽しいですが、すばやく画面の内側へ消えてしまうので、ボールの楽しみが半減してしまいます。この問題を解決するために、衝突判定（詳しくは[後ほど](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection)説明します）を実装して、ボールをキャンバスの 4 つの辺で跳ね返らせるようにしましょう。

## 簡単な衝突検出

衝突を検出するために、ボールが壁に触れているか（衝突しているか）どうかをチェックし、触れていればそれに応じてボールの移動方向を変更します。

計算するために、描画された円の半径を保持し、計算に使用する `ballRadius` という変数を定義しましょう。これをコードに追加してください。既存の変数宣言の下のどこかです。

```js
const ballRadius = 10;
```

あわせて `drawBall()` 関数内のボールを描画している行も次のように更新しましょう。

```js
ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
```

### 上端と下端で跳ね返らせる

ボールを跳ね返らせる壁は 4 つあります。まずは上端に注目しましょう。毎フレーム、ボールがキャンバスの上端に触っているかどうか確認する必要があります。もし触っているなら、ボールの動きを反転させ、ボールが反対方向に動き、視界の範囲内に留まるようにしましす。座標系は左上端から始まることを思い出しながら考えてみれば、次のようなコードが思いつくでしょう。

```js
if (y + dy < 0) {
  dy = -dy;
}
```

もしボールの位置の `y` の値が 0 未満だったら、符号反転させた値を設定することで y 軸方向の動きの向きを変えます。もしボールが上に向かって毎フレーム 2 ピクセルの速さで動いていたら、今度は「上」に向かって毎フレーム -2 ピクセルの速さで動く、つまり下に向かって毎フレーム 2 ピクセルの速さで動きます。

上記のコードは上端でボールを跳ね返らせていました。では今度は下端について考えてみましょう。

```js
if (y + dy > canvas.height) {
  dy = -dy;
}
```

`y` 座標がキャンバスの高さより高かったら（左上端から `y` の値を数えているため、上端は 0 で始まり下端はキャンバスの高さである 480 ピクセルとなることを思い出してください）、先程のように `y` 軸方向の動きを反転させます。

これら 2 つの文を合わせればコードの冗長さを減らせます。

```js
if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

2 つの文のどちらかが `true` だったら、ボールの動きを反転させます。

### 左端と右端で跳ね返らせる

上端と下端を対処したところで、左端と右端を考えてみましょう。実のところとても良く似ていて、 `y` を `x` で置き換えて文を繰り返すだけでよいのです。

```js
if (x + dx > canvas.width || x + dx < 0) {
  dx = -dx;
}

if (y + dy > canvas.height || y + dy < 0) {
  dy = -dy;
}
```

ここで上記のコードを draw() 関数の、ちょうど閉じ波括弧の前に挿入しておいてください。

### まだボールが壁に隠れる!

ここでコードを試してみましょう。驚くはずです。キャンバスの四辺全てでボールが跳ね返っています。でも別の問題がありました。ボールが壁にぶつかるとき、位置を変える少し前に壁に沈んでしまいます。

![白い壁の上部に、空色のボールが消えていく。](ball-in-wall.png)

壁と円周の衝突地点を計算すべきところで、壁と円の中心の衝突地点を計算しているのがこの理由です。ボールは壁に触ったときに跳ね返る、壁に半分のめり込んだときに跳ね返っても仕方ありません。そこで円周を含めるために文を少し調節します。最後に追加したコードを次のように書き換えます。

```js
if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
  dx = -dx;
}
if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
  dy = -dy;
}
```

ボールの中心と辺の距離がボールの半径とちょうど等しくなったときに動く向きを変えます。半径を辺の長さから引き、もう一方では足すことで衝突検出が正しく行われたような印象が出ます。思ったとおり、壁にぶつかった時点でボールが弾むようになります。

## 自分のコードと比べよう

もう一度、このパートを終えた後にできたコードと比べてみて、それからコードで遊んでみてください。

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

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
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
> 壁に当たるたびにボールの色をランダムに変えてみてください。

## 次のステップ

ボールが動き、かつゲームボードに留まるようになることまでこぎつけました。第 4 章では操作できるパドルを実装してみます。[パドルとキーボード操作](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls)を見てみましょう。

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls")}}
