---
title: ブロックのかたまりを作る
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field
original_slug: Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field
---
{{GamesSidebar}}{{IncludeSubnav("/ja/docs/Games")}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection")}}

これは[ゲーム開発 Canvas チュートリアル](/ja/docs/Games/Workflows/Breakout_game_from_scratch)の 10 ステップのうち**6 番目**のステップです。このレッスンを終えたあとの完成予想のソースコードは[Gamedev-Canvas-workshop/lesson6.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson06.html)で入手できます。

ゲームプレイ制御を修正することにより負けることができるようになります。この大きな変更により、ついにゲームらしさを感じられるようになりました。ですが、壁とパドルでボールが弾むだけではすぐに空きてしまいます。ブロック崩しで本当に必要な要素、それはボールで崩すことができるブロックです。これが今回作り込んでいく部分になります。

## ブロック変数を設定する

このレッスンのおおまかな目標は、ブロックのための、2 次元配列を走査する入れ子のループを使った数行のコードを書き上げることです。しかしその前に幅と高さ、行と列などといった情報を定義するいくつかの変数が必要です。自分のコードの、以前変数を宣言した場所の下に次のコードを追加してください。

```js
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
```

ここではブロックの行と列の数、幅と高さ、ブロックがくっつかないようにするブロック間の隙間、そしてキャンバスの端に描画されないようにするための上端、左端からの相対位置を定義しました。

1 つの 2 次元配列で全てのブロックを記録します。2 次元配列はブロックの列 (c) を含んでおり、列は行 (r) を含み、行はそれぞれのブロックが描画される画面上の`x`座標と`y`座標をもつオブジェクトを含んでいます。

```js
var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0 };
    }
}
```

上記のコードは行と列を通してループし、新しいブロックを作ります。このブロックオブジェクトは後に**衝突検出のためにも使われる**ことを覚えておいてください。

## ブロック描画ロジック

配列に含まれる全てのブロックを通してループする関数を作成し、画面上に描画しましょう。コードは次のようになります。

```js
function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
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

もう一度、行と列を通してループし、それぞれのブロックの`x`座標と`y`座標を設定するとともに、1 回ループを回るごとに大きさ`brickWidth` x `brickHeight`のブロックを Canvas 上に描画しています。問題はそれら全てを 1 箇所、座標`(0,0)`に描画していることです。それぞれのブロックの`x`座標と`y`座標を導出する計算を一回一回のループに含める必要があります。

```js
var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
```

それぞれの座標`brickX`は`brickWidth` + `brickPadding`に列番号`c`をかけ、`brickOffsetLeft`をたしたものとして導出されます。brickY のロジックも同様ですが、行番号`r`、`brickHeight`、そして`brickOffsetTop`が用いられます。これで、それぞれのブロックは正しい行、列に間隔を空けて置かれ、左上端から一定の位置に描画されるようになりました。

次のように`brickX`と`brickY`の値を`(0,0)`の代わりに座標として代入するようにしたものが`drawBricks()`の最終版となります。これを`drawPaddle()`関数の下に追加してください。

```js
function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
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

## ブロックを描画する

`drawBricks()`へ呼び出しを`draw()`関数のどこかに追加して、このレッスンの仕上げとしましょう。最初のあたりの、Canvas を消去する部分とボールを描画する部分の間あたりが良いでしょう。`drawBall()`の呼び出しのすぐ前に次の行を追加してください。

```js
drawBricks();
```

## 自分のコードと比べる

ここまででゲームは更にもう少し面白くなりました。

{{JSFiddleEmbed("https://jsfiddle.net/raymondjplante/Lu3vtejz/","","395")}}

> **Note:** 練習: 行や列にあるブロックの数や位置を替えてみましょう。

## 次のステップ

というわけでついにブロックができました。でもボールはブロックに全く反応しません。第 7 章、[衝突検知](/ja/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection)ではこれを変えます。

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Collision_detection")}}
