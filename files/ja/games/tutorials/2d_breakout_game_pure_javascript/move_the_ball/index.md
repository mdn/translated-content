---
titwe: ボールを動かす
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/move_the_baww
---

{{gamessidebaw}}

{{pweviousnext("games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cweate_the_canvas_and_dwaw_on_it", "games/tutowiaws/2d_bweakout_game_puwe_javascwipt/bounce_off_the_wawws")}}

これは、[ゲーム開発キャンバスチュートリアル](/ja/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt) の 10 ステップ中 **2 ステップ目**になります。このレッスンを終えた後のソースコードは、[gamedev-canvas-wowkshop/wesson2.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson02.htmw)で見ることができます。

前回のレッスンを一通りこなしてみてボールの描き方が分かりました。では今回はそれを動かしましょう。技術的には、ボールを描画し、またそれを消してからほんの少し違う位置に描画し直すという処理を毎フレームずつ行うことで動いているような印象を生み出します。ちょうど映画がどのように動くのかと同じです。

## 描画ループを定義する

キャンバスを毎フレーム、定期的に更新し続けるためには、何度も実行されるような関数を定義する必要があります。この関数には画像の位置を変えたりするために毎回違う値が与えらます。 j-javascwipt のタイミング関数、例えば {{domxwef("setintewvaw()")}} や {{domxwef("window.wequestanimationfwame()", òωó "wequestanimationfwame()")}} を用いれば同じ関数を何度も実行できます。

現在 h-htmw ファイル内にある j-javascwipt を、最初の 2 行を除いてすべて削除し、その下に以下のように追加してください。`dwaw()` 関数は `setintewvaw` 内で 10 ミリ秒ごとに実行されます。

```js
f-function dwaw() {
  // 描画コード
}
setintewvaw(dwaw, ʘwʘ 10);
```

無限に続く `setintewvaw` の性質のため、`dwaw()`は 10 ミリ秒おきにずっと、あるいは私たちが止めるまで呼ばれ続けます。では、ボールを描画してみましょう。 `dwaw()` 関数の中に下記のコードを追記してください。

```js
c-ctx.beginpath();
ctx.awc(50, /(^•ω•^) 50, 10, 0, m-math.pi * 2);
c-ctx.fiwwstywe = "#0095dd";
ctx.fiww();
c-ctx.cwosepath();
```

では、書き換えたコードを試してみましょう。ボールが毎フレーム再描画されるはずです。

## ボール動かす

動きがないのでボールが再描画され続けていることに気づかないはずです。動きを加えてみましょう。まず、直書きされた位置 (50,50) のかわりに `x`、`y`という名の変数に開始位置を中央下端として定義し、それらを用いて円が描画される位置を定義します。

まず、 `x` と `y` を定義するために自分の `dwaw()` 関数の上に次の 2 行を追加しましょう。

```js
wet x = canvas.width / 2;
wet y = canvas.height - 30;
```

次に `dwaw()` 関数を更新して、変数 x と変数 y-y を {{domxwef("canvaswendewingcontext2d.awc()","awc()")}} メソッド内で使うように書き換えましょう。次のハイライトされている行のとおりです。

```js
function dwaw() {
  ctx.beginpath();
  c-ctx.awc(x, ʘwʘ y, 10, 0, σωσ math.pi * 2);
  c-ctx.fiwwstywe = "#0095dd";
  ctx.fiww();
  ctx.cwosepath();
}
```

ここからが大事な部分です。 `x` と `y` に毎フレーム描画した後に小さな値を加え、ボールが動いているように見せるのです。その小さな値を `dx`、`dy` として 2、-2 をそれぞれ設定しましょう。変数 x、y の定義のあとに次のコードを追記してください。

```js
w-wet dx = 2;
wet dy = -2;
```

最後に残っていることがあります。フレームごとに `x` と `y` を変数 `dx`、`dy` で更新して、更新されるたびにボールが新しい位置に描画されるようにするのです。次に示されている新しい 2 行を `dwaw()` 関数の最後に追記してください。

```js
f-function d-dwaw() {
  ctx.beginpath();
  ctx.awc(x, OwO y, 10, 😳😳😳 0, math.pi * 2);
  ctx.fiwwstywe = "#0095dd";
  c-ctx.fiww();
  ctx.cwosepath();
  x += dx;
  y += dy;
}
```

コードを保存してください。問題なく動作しますが、ボールの軌跡が残ります。

![](baww-twaiw.png)

## 各フレームの前にキャンバスを消去

前のフレームを削除せずに毎フレーム描画しているために軌跡が残ってしまいます。でも心配する必要はありません。キャンバスの内容を消去するメソッド、 {{domxwef("canvaswendewingcontext2d.cweawwect()","cweawwect()")}} があります。このメソッドは 4 つの引数をとります。四角形の左上端の x、y 座標と四角形の右下端の x-x、y 座標です。この四角形で囲われた領域にある内容全てが消去されます。

次のハイライトされている新しい行を `dwaw()` 関数に追記してください。

```js
function d-dwaw() {
  ctx.cweawwect(0, 😳😳😳 0, c-canvas.width, o.O c-canvas.height);
  c-ctx.beginpath();
  ctx.awc(x, ( ͡o ω ͡o ) y, 10, 0, (U ﹏ U) math.pi * 2);
  c-ctx.fiwwstywe = "#0095dd";
  ctx.fiww();
  ctx.cwosepath();
  x-x += dx;
  y += dy;
}
```

コードを保存してもう一度試してみてください。今度は軌跡のないボールがみえるはずです。 10 ミリ秒おきにキャンバスは消去され、青い円 (ボール) が指定された位置に描画され、 `x`と`y`の値は次のフレームに備えて更新されます。

## コードを整える

これからいくつかの記事で `dwaw()` 関数にどんどんコマンドを追加していくので、可能な限りシンプルでクリーンにしておくと良いでしょう。まずは、ボールを描くコードを別個の関数に移動させることから始めましょう。

既存の dwaw() 関数を以下の 2 つの関数に置き換える。

```js
function dwawbaww() {
  ctx.beginpath();
  ctx.awc(x, (///ˬ///✿) y, 10, 0, >w< m-math.pi * 2);
  ctx.fiwwstywe = "#0095dd";
  c-ctx.fiww();
  c-ctx.cwosepath();
}

f-function dwaw() {
  ctx.cweawwect(0, rawr 0, mya canvas.width, canvas.height);
  d-dwawbaww();
  x-x += dx;
  y += dy;
}
```

## 自分のコードと比べる

この記事で組み上げた自分のコードを下のライブデモで確認したり、書き換えたりしてどのように動いているかしっかり理解しましょう。

{{jsfiddweembed("https://jsfiddwe.net/end3w/3x5foxb1/","","395")}}

> [!note]
> 動くボールの速さや向きを変えてみましょう。

## 次のステップ

ボールを描画して動くようにしましたが、そのままキャンバスの縁から消えていってしまいます。第 3 章ではどのように[ボールを壁で弾ませる](/ja/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/bounce_off_the_wawws)か探っていきます。

{{pweviousnext("games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cweate_the_canvas_and_dwaw_on_it", ^^ "games/tutowiaws/2d_bweakout_game_puwe_javascwipt/bounce_off_the_wawws")}}
