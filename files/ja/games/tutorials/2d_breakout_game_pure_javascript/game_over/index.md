---
title: ゲームオーバー
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over
---

{{GamesSidebar}}

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}

これは、[ゲーム開発キャンバスチュートリアル](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) の 10 ステップ中 **5 ステップ目**になります。このレッスンを終えた後のソースコードは、[Gamedev-Canvas-workshop/lesson5.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson05.html)で見ることができます。

ボールが壁に当たって跳ねているのを見たり、パドルを移動させたりできるのは楽しいのですが、それ以外は何もせず、ゲームの進行や最終目標がありません。ゲームプレイの観点からは、負けることがあってもいいのではないでしょうか。ブロック崩しで負ける理屈は簡単です。パドルでボールを飛ばして画面の下端へ到達させたらゲームオーバーです。

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

4 辺全てでボールを弾ませるのではなく、 3 辺、すなわち上端と左右のみで跳ね返るようにしましょう。底を打ったときゲームは終わりになります。 2 番目の if 節を編集して、ボールがキャンバスの下端で衝突したときにゲームオーバー状態が発動する if else 節にしましょう。ここでは簡単に、アラートメッセージを表示して、ページの再読み込みによりゲームを再開するだけにしましょう。

まず、 `setInterval()` を最初に呼び出しているところを置き換えます。

```js
setInterval(draw, 10);
```

置き換えるとこうなります。

```js
const interval = setInterval(draw, 10);
```

次に 2 番目の if 節を次の内容で置き換えましょう。

```js
if (y + dy < ballRadius) {
  dy = -dy;
} else if (y + dy > canvas.height - ballRadius) {
  alert("GAME OVER");
  document.location.reload();
  clearInterval(interval); // Needed for Chrome to end game
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

## 自分のコードと比べる

自分のコードと比べられるように、実際に動くコードを以下に示します。

{{JSFiddleEmbed("https://jsfiddle.net/raymondjplante/L61c9y50/","","395")}}

> **メモ:** ボールがパドルに当たったときに速く動くようにしましょう。

## 次のステップ

今のところかなり順調に進歩してきていて、ゲームも負けるようになったことでもっと遊ぶ価値が感じられるようになってきました。第 6 章の[ブロックのかたまりを作る](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field)に進み、ボールが壊せるブロックを作りましょう。

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}
