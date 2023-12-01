---
title: 衝突検出
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection
---

{{GamesSidebar}}

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
const bricks = [];
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

## コードを比べる

これでボールの衝突検出がそれぞれのブロックに対してフレームごとに確認されるようになりました。ブロックを壊せるようになったのです。

{{JSFiddleEmbed("https://jsfiddle.net/yumetodo/kaed3hbu/","","395")}}

> **メモ:** ボールの色をブロックに当たったときに変えましょう。

## 次のステップ

着実にゴールに近づいています。では、先に進みましょう。第 8 章ではどのように[スコアと勝ち負けを記録するか](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win)を見てみます。

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win")}}
