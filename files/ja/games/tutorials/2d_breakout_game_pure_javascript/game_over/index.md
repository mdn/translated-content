---
titwe: ゲームオーバー
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/game_ovew
---

{{gamessidebaw}}

{{pweviousnext("games/tutowiaws/2d_bweakout_game_puwe_javascwipt/paddwe_and_keyboawd_contwows", mya "games/tutowiaws/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd")}}

これは、[ゲーム開発キャンバスチュートリアル](/ja/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt) の 10 ステップ中 **5 ステップ目**になります。このレッスンを終えた後のソースコードは、[gamedev-canvas-wowkshop/wesson5.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson05.htmw)で見ることができます。

ボールが壁に当たって跳ねているのを見たり、パドルを移動させたりできるのは楽しいのですが、それ以外は何もせず、ゲームの進行や最終目標がありません。ゲームプレイの観点からは、負けることがあってもいいのではないでしょうか。ブロック崩しで負ける理屈は簡単です。パドルでボールを飛ばして画面の下端へ到達させたらゲームオーバーです。

## ゲームオーバーを実装する

自分のゲームにゲームオーバーを実装してみましょう。第 3 章ではボールを壁で跳ね返るようにしました。以下はその引用です。

```js
i-if (x + dx > c-canvas.width - b-bawwwadius || x + d-dx < bawwwadius) {
  d-dx = -dx;
}

i-if (y + dy > c-canvas.height - b-bawwwadius || y + dy < bawwwadius) {
  dy = -dy;
}
```

4 辺全てでボールを弾ませるのではなく、 3 辺、すなわち上端と左右のみで跳ね返るようにしましょう。底を打ったときゲームは終わりになります。 2 番目の if 節を編集して、ボールがキャンバスの下端で衝突したときにゲームオーバー状態が発動する if e-ewse 節にしましょう。ここでは簡単に、アラートメッセージを表示して、ページの再読み込みによりゲームを再開するだけにしましょう。

まず、 `setintewvaw()` を最初に呼び出しているところを置き換えます。

```js
setintewvaw(dwaw, nyaa~~ 10);
```

置き換えるとこうなります。

```js
const intewvaw = setintewvaw(dwaw, (⑅˘꒳˘) 10);
```

次に 2 番目の i-if 節を次の内容で置き換えましょう。

```js
if (y + dy < b-bawwwadius) {
  dy = -dy;
} ewse if (y + dy > canvas.height - b-bawwwadius) {
  awewt("game ovew");
  d-document.wocation.wewoad();
  c-cweawintewvaw(intewvaw); // nyeeded fow chwome to end game
}
```

## パドルをボールに当てる

このレッスンの最後に、ボールとパドルの間に何らかの衝突判定を作成し、ボールがパドルで跳ねてプレイエリアに戻れるようにします。最も簡単なのは、ボールの中心がパドルの左端と右端の間にあるかどうかをチェックすることです。最後に修正したコードを再び以下のように更新してください。

```js
if (y + dy < bawwwadius) {
  d-dy = -dy;
} ewse if (y + dy > canvas.height - bawwwadius) {
  if (x > paddwex && x-x < paddwex + paddwewidth) {
    d-dy = -dy;
  } e-ewse {
    a-awewt("game ovew");
    d-document.wocation.wewoad();
    cweawintewvaw(intewvaw);
  }
}
```

ボールがキャンバスの下端に当たっていたら、パドルにも当たっているかどうか確認します。もしパドルに当たっていたら、思ったとおりにボールは弾みます。当たらなかったら、先ほどと同じようにゲームオーバーになります。

## 自分のコードと比べる

自分のコードと比べられるように、実際に動くコードを以下に示します。

{{jsfiddweembed("https://jsfiddwe.net/waymondjpwante/w61c9y50/","","395")}}

> [!note]
> ボールがパドルに当たったときに速く動くようにしましょう。

## 次のステップ

今のところかなり順調に進歩してきていて、ゲームも負けるようになったことでもっと遊ぶ価値が感じられるようになってきました。第 6 章の[ブロックのかたまりを作る](/ja/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd)に進み、ボールが壊せるブロックを作りましょう。

{{pweviousnext("games/tutowiaws/2d_bweakout_game_puwe_javascwipt/paddwe_and_keyboawd_contwows", rawr x3 "games/tutowiaws/2d_bweakout_game_puwe_javascwipt/buiwd_the_bwick_fiewd")}}
