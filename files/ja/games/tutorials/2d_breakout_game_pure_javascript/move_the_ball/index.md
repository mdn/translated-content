---
title: ボールを動かす
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball
original_slug: Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball
---
{{GamesSidebar}}{{IncludeSubnav("/ja/docs/Games")}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls")}}

これは[ゲーム開発 Canvas チュートリアル](/ja/docs/Games/Workflows/Breakout_game_from_scratch)の 10 ステップのうち**2 番目**のステップです。このレッスンを終えたあとの完成予想のソースコードは[Gamedev-Canvas-workshop/lesson2.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson02.html)で入手できます。

前回のレッスンを一通りこなしてみてボールの描き方が分かりました。では今回はそれを動かしましょう。技術的には、ボールを描画し、またそれを消してからほんの少し違う位置に描画し直すという処理を毎フレームずつ行うことで動いているような印象を生み出します。ちょうど映画がどのように動くのかと同じです。

## 描画ループを定義する

Canvas の映像を毎フレーム、定期的に更新し続けるためには、何度も実行されるような関数を定義する必要があります。この関数には画像の位置を変えたりするために毎回違う値が与えらます。{{domxref("WindowTimers.setInterval()", "setInterval()")}}や{{domxref("window.requestAnimationFrame()", "requestAnimationFrame()")}}といった JavaScript のタイミング関数を用いれば同じ関数を何度も実行できます。

HTML ファイル内に既に書かれている JavaScript を最初の 2 行を除いて全て削除し、次のコードを追記してください。`draw()`関数が`setInterval`の中で 10 ミリ秒おきに実行されます。

```js
function draw() {
    // 描画コード
}
setInterval(draw, 10);
```

無限に続く `setInterval` の性質のため、`draw()`は 10 ミリ秒おきにずっと、あるいは私達が止めるまで呼ばれ続けます。では、ボールを描画してみましょう。`draw()`関数の中に下記のコードを追記してください。

```js
ctx.beginPath();
ctx.arc(50, 50, 10, 0, Math.PI*2);
ctx.fillStyle = "#0095DD";
ctx.fill();
ctx.closePath();
```

では、書き換えたコードを試してみましょう。ボールが毎フレーム再描画されるはずです。

## ボール動かす

動きがないのでボールが再描画され続けていることに気づかないはずです。動きを加えてみましょう。まず、直書きされた位置 (50,50) のかわりに `x`、`y`という名の変数に開始位置を中央下端として定義し、それらを用いて円が描画される位置を定義します。

まず、`x`と`y`を定義するために自分の `draw()`関数の上に次の 2 行を追加しましょう。

```js
var x = canvas.width/2;
var y = canvas.height-30;
```

次に、{{domxref("CanvasRenderingContext2D.arc()","arc()")}}メソッド内で変数 x と変数 y を使うように`draw()` 関数を書き換えましょう。次のハイライトされている行のとおりです。

```js
function draw() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
```

ここからが大事な部分です。`x`と`y`に毎フレーム描画した後に小さな値を加え、ボールが動いているように見せるのです。その小さな値を`dx`、`dy`として 2、-2 をそれぞれ設定しましょう。変数 x、y の定義のあとに次のコードを追記してください。

```js
var dx = 2;
var dy = -2;
```

最後に残っていることがあります。フレームごとに`x`と`y`を変数`dx`、`dy`で更新して、更新されるたびにボールが新しい位置に描画されるようにするのです。次に示されている新しい 2 行を`draw()`関数の最後に追記してください。

```js
function draw() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;
}
```

コードを保存してください。問題なく動作しますが、ボールの軌跡が残ります。

![](https://mdn.mozillademos.org/files/10430/ball-trail.png)

## フレームの後に Canvas を消去する

前のフレームを削除せずに毎フレーム描画しているために軌跡が残ってしまいます。でも心配する必要はありません。Canvas の内容を消去するメソッド、{{domxref("CanvasRenderingContext2D.clearRect()","clearRect()")}}があります。このメソッドは 4 つのパラメータをとります。四角形の左上端の x、y 座標と四角形の右下端の x、y 座標です。この四角形で囲われた領域にある内容全てが消去されます。

次のハイライトされている新しい行を`draw()`関数に追記してください。

```js
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;
}
```

コードを保存してもう一度試してみてください。今度は軌跡のないボールがみえるはずです。10 ミリ秒おきにキャンバスは消去され、青い円 (ボール) が指定された位置に描画され、 `x`と`y`の値は次のフレームに備えて更新されます。

## コードを整える

次のいくつかの記事では`draw()`関数にもっと命令を追加します。ですから`draw()`関数をできるだけ簡潔にしておくのは大事なことです。ボールを描画するコードを別の関数に移しましょう。

既にある draw()関数を次の 2 つの関数で置き換えてください。

```js
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
}
```

## 自分のコードと比べる

この記事で組み上げた自分のコードを下のライブデモで確認したり、書き換えたりしてどのように動いているかしっかり理解しましょう。

{{JSFiddleEmbed("https://jsfiddle.net/end3r/3x5foxb1/","","395")}}

練習: 動くボールの速さや向きを変えてみましょう。

## 次のステップ

ボールを描画して動くようにしましたが、そのまま Canvas の縁から消えていってしまいます。第 3 章ではどのように[ボールを壁で弾ませる](/ja/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls)か探っていきます。

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls")}}
