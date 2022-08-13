---
title: ゲームオーバー
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over
original_slug: Games/Workflows/2D_Breakout_game_pure_JavaScript/Game_over
---
{{GamesSidebar}}{{IncludeSubnav("/ja/docs/Games")}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}

これは[ゲーム開発 Canvas チュートリアル](/ja/docs/Games/Workflows/Breakout_game_from_scratch)の 10 ステップのうち**5 番目**のステップです。このレッスンを終えたあとの完成予想のソースコードは[Gamedev-Canvas-workshop/lesson5.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson05.html)で入手できます。

ボールが壁で弾むのを見たりパドルを左右雨に動かしたりできるのは楽しいですが、そのことを除くとこのゲームは何もせず、進捗や最終目標といったものが全くありません。ゲームプレイの観点からすると、まず負けることができるようにするのが良いでしょう。ブロック崩しで負けるということの裏にある論理は簡潔です。もしパドルでボールを逃してボールが画面の下端についてしまったらゲームオーバーになるのです。

## ゲームオーバーを実装する

自分のゲームにゲームオーバーを実装してみましょう。3 章ではボールを壁で弾むようにしました。以下はその引用です。

```js
if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
}

if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
    dy = -dy;
}
```

4 辺全てでボールを弾ませるのではなく、3 辺、すなわち上端と左右のみで弾むようにしましょう。底を打ったときゲームは終わりになります。2 番目の if 節を編集して、ボールがキャンバスの下端で衝突したときにゲームオーバー状態が発動する if else 節にしましょう。ここでは簡単に、アラートメッセージを表示して、ページの再読込によりゲームを再開するだけにしましょう。

まず、 `setInterval()` を最初に呼び出しているところを置き換えます。

```html
setInterval(draw, 10);
```

置き換え後

```html
var interval = setInterval(draw, 10);
```

次に 2 番目の if 節を次の内容で置き換えましょう。

```js
if(y + dy < ballRadius) {
    dy = -dy;
} else if(y + dy > canvas.height-ballRadius) {
    alert("GAME OVER");
    document.location.reload();
    clearInterval(interval); // Needed for Chrome to end game
}
```

## パドルをボールに当てる

このレッスンのしあげに、ボールとパドルの衝突検出を作り、ボールが弾んでプレイエリアに戻ってくるようにしましょう。最も簡単なやり方はボールがパドルの左端と右端の間にあるか確認することです。最後に編集したコードを今度は次のように書き換えます。

```js
if(y + dy < ballRadius) {
    dy = -dy;
} else if(y + dy > canvas.height-ballRadius) {
    if(x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
    }
    else {
        alert("GAME OVER");
        document.location.reload();
    }
}
```

ボールが Canvas の下端に当たっていたら、パドルにも当たっているかどうか確認します。もしパドルに当たっていたら、思ったとおりにボールは弾みます。当たらなかったら、先ほどと同じようにゲームオーバーになります。

## 自分のコードと比べる

自分のコードと比べられるように、実際に動くコードを以下に示します。

{{JSFiddleEmbed("https://jsfiddle.net/raymondjplante/L61c9y50/","","395")}}

> **Note:** **練習**: ボールがパドルに当たったときに速く動くようにしましょう。

## 次のステップ

今のところかなり順調に進歩してきていて、ゲームも負けるようになったことでもっと遊ぶ価値が感じられるようになってきました。第六章[『ブロックのかたまりを作る』](/ja/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field)に進み、ボールが壊せるブロックを作りましょう。

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Build_the_brick_field")}}
