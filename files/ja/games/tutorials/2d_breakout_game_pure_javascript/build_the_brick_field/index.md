---
title: ブロックのかたまりを作る
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field
---

{{GamesSidebar}}

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection")}}

これは、[ゲーム開発キャンバスチュートリアル](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) の 10 ステップ中 **6 ステップ目**になります。このレッスンを終えた後のソースコードは、[Gamedev-Canvas-workshop/lesson6.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson06.html)で見ることができます。

ゲームプレイの仕組みを修正した結果、負けることができるようになりました。これは、ゲームがようやくゲームらしくなってきたという意味で、とてもいいことです。しかし、壁やパドルでボールを跳ね返すだけでは、すぐに飽きられてしまいます。ブロック崩しに必要なのは、ボールでレンガを破壊すること。

## ブロック変数を設定する

このレッスンの全体的な目的は、二次元配列で動作する入れ子ループを使用して、レンガのコードをいくつかレンダリングすることです。しかし、最初の段階では、レンガの幅や高さ、行や列などの情報を定義するために、いくつかの変数を設定する必要があります。次の行を、あらかじめプログラムで宣言しておいた変数の下に追加してください。

```js
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
```

ここではブロックの行と列の数、幅と高さ、ブロックがくっつかないようにするブロック間の隙間、そしてキャンバスの端に描画されないようにするための上端、左端からの相対位置を定義しました。

1 つの二次元配列で全てのブロックを記録します。二次元配列はブロックの列 (c) を含んでおり、列は行 (r) を含み、行はそれぞれのブロックが描画される画面上の `x` 座標と `y` 座標をもつオブジェクトを含んでいます。

```js
const bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0 };
  }
}
```

上記のコードは行と列を通してループし、新しいブロックを作ります。このブロックオブジェクトは後に衝突検出のためにも使われることを覚えておいてください。

## ブロック描画ロジック

配列に含まれる全てのブロックを通してループする関数を作成し、画面上に描画しましょう。コードは次のようになります。

```js
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      bricks[c][r].x = 0;
      bricks[c][r].y = 0;
      ctx.beginPath();
      ctx.rect(0, 0, brickWidth, brickHeight);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
  }
}
```

もう一度、行と列を通してループし、それぞれのブロックの `x` 座標と `y` 座標を設定するとともに、 1 回ループを回るごとに大きさ `brickWidth` x `brickHeight` のブロックをキャンバス上に描画しています。問題はそれら全てを 1 箇所、座標 `(0,0)` に描画していることです。それぞれのブロックの `x` 座標と `y` 座標を導出する計算を一回一回のループに含める必要があります。

```js
const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
```

それぞれの座標 `brickX` は `brickWidth` + `brickPadding` に列番号 `c` をかけ、 `brickOffsetLeft` を足したものとして導出されます。 brickY のロジックも同様ですが、行番号 `r`、`brickHeight`、そして `brickOffsetTop` が用いられます。これで、それぞれのブロックは正しい行、列に間隔を空けて置かれ、左上端から一定の位置に描画されるようになりました。

`drawBricks()` の最終版は、次のように `brickX` と `brickY` の値を `(0,0)` の代わりに座標として代入するようにしたものとなります。これを `drawPaddle()` 関数の下に追加してください。

```js
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
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
```

## 実際のブロックの描画

`drawBricks()` へ呼び出しを `draw()` 関数のどこかに追加して、このレッスンの仕上げとしましょう。最初のあたりの、キャンバスを消去する部分とボールを描画する部分の間あたりが良いでしょう。 `drawBall()` の呼び出しのすぐ前に次の行を追加してください。

```js
drawBricks();
```

## 自分のコードと比べる

ここまででゲームは更にもう少し面白くなりました。

{{JSFiddleEmbed("https://jsfiddle.net/raymondjplante/Lu3vtejz/","","395")}}

> **メモ:** 行や列にあるブロックの数や位置を替えてみましょう。

## 次のステップ

というわけでついにブロックができました。でもボールはブロックに全く反応しません。第 7 章、[衝突検知](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection)ではこれを変えます。

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection")}}
