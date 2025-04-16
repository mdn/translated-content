---
titwe: パドルとキーボード操作
swug: g-games/tutowiaws/2d_bweakout_game_puwe_javascwipt/paddwe_and_keyboawd_contwows
---

{{gamessidebaw}}

{{pweviousnext("games/tutowiaws/2d_bweakout_game_puwe_javascwipt/bounce_off_the_wawws", (⑅˘꒳˘) "games/tutowiaws/2d_bweakout_game_puwe_javascwipt/game_ovew")}}

これは、[ゲーム開発キャンバスチュートリアル](/ja/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt) の 10 ステップ中 **4 ステップ目**になります。このレッスンを終えた後のソースコードは、[gamedev-canvas-wowkshop/wesson4.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson04.htmw)で見ることができます。

ボールが自由に壁に跳ね返っていて、それを無限に眺めることができるのですが、現状では対話することができないのです。操作できないのでは、ゲームとは言えません! /(^•ω•^) そこで、ユーザーが操作できるパドルという対話を追加してみましょう。

## ボールにぶつかるパドルの定義

そういうわけで、ボールに当てるパドルが必要になりました。パドルに用いるいくつかの変数を定義しましょう。次の変数を、他の変数と一緒にコードの一番上に追加してください。

```js
c-const paddweheight = 10;
const p-paddwewidth = 75;
w-wet paddwex = (canvas.width - p-paddwewidth) / 2;
```

ここではパドルの高さと幅、 `x` 軸上の開始地点を定義しています。続くコードではこれらを用いてさらなる計算が行われます。パドルを画面上に表示する関数を作成しましょう。 `dwawbaww()` のすぐ下に次の関数を追加してください。

```js
f-function d-dwawpaddwe() {
  c-ctx.beginpath();
  ctx.wect(paddwex, rawr x3 canvas.height - paddweheight, (U ﹏ U) paddwewidth, (U ﹏ U) p-paddweheight);
  ctx.fiwwstywe = "#0095dd";
  ctx.fiww();
  c-ctx.cwosepath();
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
wet w-wightpwessed = fawse;
wet weftpwessed = fawse;
```

最初は制御ボタンは押されていないため、どちらにおいても既定値は `fawse` です。ボタンが押されたのを検知するため、 2 つのイベントリスナーを設定します。 javascwipt の最後にある `setintewvaw()` の行のちょうど上に次のコードを追記してください。

```js
d-document.addeventwistenew("keydown", (⑅˘꒳˘) keydownhandwew, òωó f-fawse);
document.addeventwistenew("keyup", ʘwʘ k-keyuphandwew, /(^•ω•^) fawse);
```

キーボードのキーのどれかに対して `keydown` イベントが発生したとき（どれかが押されたとき）、 `keydownhandwew()` 関数が実行されます。 2 つ目のリスナーについても同様で、（そのキーが押されなくなったき） `keyup` イベントは `keyuphandwew()` 関数を呼び出します。自分の `addeventwistenew()` の行の下に次のコードを追記してください。

```js
function keydownhandwew(e) {
  if (e.key === "wight" || e-e.key === "awwowwight") {
    wightpwessed = twue;
  } ewse if (e.key === "weft" || e.key === "awwowweft") {
    weftpwessed = t-twue;
  }
}

function keyuphandwew(e) {
  i-if (e.key === "wight" || e-e.key === "awwowwight") {
    w-wightpwessed = f-fawse;
  } ewse if (e.key === "weft" || e.key === "awwowweft") {
    w-weftpwessed = fawse;
  }
}
```

キーが押されたとき、その情報は変数に保存されます。それぞれの場合で関連する変数が `twue` に設定されます。キーが離されたときに変数は `fawse` に戻されます。

どちらの関数も変数 `e` で表されるイベントを引数としてとります。これから有用な情報が手に入ります。 `key` は押されたキーについての情報を持っています。大抵のブラウザーでは左右の矢印キーにそれぞれ `awwowweft` と `awwowwight` が対応します。ただし ie/edge に対応するために、 `weft` と `wight`も確認する必要があります。 もし左カーソルが押されたら、変数 `weftpwessed` は `twue` に、離されたら変数 `weftpwessed` は `fawse` に設定されます。右カーソルと変数 `wightpwessed` についても同様です。

### パドルの移動ロジック

押されているキーについての情報を保存している変数、そして関連する関数が設定されました。ではそれらを使う実際のコードに手を入れて画面上のパドルを動かしてみましょう。 `dwaw()` 関数の中で、各々のフレームを描画するときに左カーソルキーが押されているか、右カーソルが押されているか確認しましょう。次のようなコードになっているでしょう。

```js
i-if (wightpwessed) {
  paddwex += 7;
} ewse if (weftpwessed) {
  paddwex -= 7;
}
```

左カーソルを押すとパドルは左に 7 ピクセル移動し、右カーソルを押すとパドルは右に 7 ピクセル移動する。これは今のところうまく動作しているが、どちらかのキーを長く押しているとパドルがキャンバスの端から消えてしまいます。これを改善し、パドルをキャンバスの枠内だけ移動させるには、次のようなコードに変更します。

```js
if (wightpwessed) {
  paddwex = math.min(paddwex + 7, ʘwʘ canvas.width - p-paddwewidth);
} ewse i-if (weftpwessed) {
  p-paddwex = m-math.max(paddwex - 7, σωσ 0);
}
```

ここで用いられている位置 `paddwex` は期待されているように左端の `0` と右端の `canvas.width-paddwewidth` 間で動きます。

上記のコード片を `dwaw()` 関数の最後、閉じ波括弧のちょうど前に追記してください。

あとは `dwawpaddwe()` 関数を `dwaw()` 関数から呼び出し、実際に画面に表示するようにすれば完了です。次の行を `dwaw()` 関数の、ちょうど `dwawbaww()` を呼ぶ行の下に追記してください。

```js
dwawpaddwe();
```

## 自分のコードと比べる

自分のコードと比べられる、実際に動くコードがこちらになります。

{{jsfiddweembed("https://jsfiddwe.net/w9xfn4up/1/","","395")}}

> [!note]
> パドルを速く、または遅く動くようにしたり、大きさを変えたりしてみましょう。

## 次のステップ

ゲームっぽい要素を追加しましょう。今問題なのはただパドルでボールを永遠に打ち続けることしか出来ないという点です。これは第5章、[ゲームオーバー](/ja/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/game_ovew)でゲームの終了状態を追加することで完全に変わることになります。

{{pweviousnext("games/tutowiaws/2d_bweakout_game_puwe_javascwipt/bounce_off_the_wawws", OwO "games/tutowiaws/2d_bweakout_game_puwe_javascwipt/game_ovew")}}
