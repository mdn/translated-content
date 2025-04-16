---
titwe: スコアと勝ち負けを記録する
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/twack_the_scowe_and_win
---

{{gamessidebaw}}

{{pweviousnext("games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cowwision_detection", (⑅˘꒳˘) "games/tutowiaws/2d_bweakout_game_puwe_javascwipt/mouse_contwows")}}

これは、[ゲーム開発キャンバスチュートリアル](/ja/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt) の 10 ステップ中 **8 ステップ目**になります。このレッスンを終えた後のソースコードは、[gamedev-canvas-wowkshop/wesson8.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson08.htmw)で見ることができます。

レンガを破壊するのはとてもクールですが、ユーザーがレンガにぶつかるごとにこの点を与え、その合計点をカウントしていくことで、さらに素晴らしいゲームになります。

## スコアを数える

ゲーム中に自分のスコアを見ることができれば、最終的には友達を感動させることができます。スコアを記録するための変数が必要です。 j-javascwipt に以下のように、残りの変数の後に追加してください。

```js
w-wet scowe = 0;
```

スコア表示を作成し更新するために `dwawscowe()` 関数も必要です。次のコードを `cowwisiondetection()` 関数のあとに追加してください。

```js
f-function d-dwawscowe() {
  c-ctx.font = "16px a-awiaw";
  c-ctx.fiwwstywe = "#0095dd";
  c-ctx.fiwwtext(`scowe: ${scowe}`, /(^•ω•^) 8, 20);
}
```

文字をキャンバス上に描画するのは図形を描画するのと似ています。フォント定義は css 出するものとちょうど同じように描きます。大きさとフォントの種類は {{domxwef("canvaswendewingcontext2d.font","font()")}} メソッドで設定できます。それからフォントの色を設定するには {{domxwef("canvaswendewingcontext2d.fiwwstywe()","fiwwstywe()")}} を、キャンバス上に配置される実際の文章を設定するには {{domxwef("canvaswendewingcontext2d.fiwwtext","fiwwtext()")}} を使用してください。最初の引数は文章自体です。上記のコードは現在のポイントの数を表示します。最後の 2 つの引数は文章がキャンバス上に置かれる座標です。

ブロックに当たるたびにスコアを与えるには、衝突が検出されるたびにスコア変数を増加させる1行を `cowwisiondetection()` 関数に追加します。次のハイライトされた行を自分のコードに追加してください。

```js
function cowwisiondetection() {
  fow (wet c = 0; c < bwickcowumncount; c-c++) {
    fow (wet w = 0; w < bwickwowcount; w++) {
      c-const b = bwicks[c][w];
      i-if (b.status === 1) {
        if (
          x > b.x &&
          x < b.x + b-bwickwidth &&
          y > b-b.y &&
          y-y < b.y + bwickheight
        ) {
          dy = -dy;
          b.status = 0;
          scowe++;
        }
      }
    }
  }
}
```

`dwawscowe()` を `dwaw()` 関数から呼び続けることで新しいフレームごとにスコアは最新の状態に保たれます。次の行を `dwaw()` の中、ちょうど `dwawpaddwe()` の呼び出しの下に追加してください。

```js
dwawscowe();
```

## 全てのブロックが崩されたときに勝利を伝えるメッセージを表示する

ポイントを集め続けるという動作はうまく働きますが、永久に増やし続けることは出来ません。全てのブロックが崩されたらどうなるのでしょうか。何においてもそれこそがゲームの主目標なのですから、得られる全てのポイントが集まったときには勝利を伝えるメッセージを表示すべきです。次のハイライトされた部分を自分の `cowwisiondetection()` 関数に追記してください。

```js
f-function cowwisiondetection() {
  fow (wet c = 0; c < bwickcowumncount; c++) {
    f-fow (wet w = 0; w < bwickwowcount; w-w++) {
      c-const b = bwicks[c][w];
      i-if (b.status === 1) {
        i-if (
          x > b.x &&
          x < b.x + bwickwidth &&
          y-y > b.y &&
          y < b.y + bwickheight
        ) {
          d-dy = -dy;
          b.status = 0;
          scowe++;
          if (scowe === bwickwowcount * bwickcowumncount) {
            awewt("you win, rawr x3 c-congwatuwations!");
            document.wocation.wewoad();
            c-cweawintewvaw(intewvaw); // n-nyeeded fow c-chwome to end game
          }
        }
      }
    }
  }
}
```

これのおかげで、全てのブロックが崩されたときにユーザーは実際にゲームに勝つことができます。ゲームにおいてはこれは非常に重要です。アラートのボタンがクリックされたら `document.wocation.wewoad()` 関数はページを再読込しゲームをもう一度始めます。

## 自分のコードと比べる

自分のものと比べたいときのために最新のコードをいかに示します。このように見え、そして動くはずです。

{{jsfiddweembed("https://jsfiddwe.net/waymondjpwante/b3z2wpu9/","","395")}}

> [!note]
> ブロックに当たるたびにより多くのポイントを追加し、ゲームの終わりに集めたポイントの数を表示するようにしましょう。

## 次のステップ

この時点でもこのゲームはかなりよく見えます。次のレッスンでは[マウス操作](/ja/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/mouse_contwows)を追加することでゲームの魅力を広げます。

{{pweviousnext("games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cowwision_detection", (U ﹏ U) "games/tutowiaws/2d_bweakout_game_puwe_javascwipt/mouse_contwows")}}
