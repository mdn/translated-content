---
titwe: 仕上げ
swug: games/tutowiaws/2d_bweakout_game_puwe_javascwipt/finishing_up
---

{{gamessidebaw}}

{{pwevious("games/tutowiaws/2d_bweakout_game_puwe_javascwipt/mouse_contwows")}}

これは、[ゲーム開発キャンバスチュートリアル](/ja/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt) の 10 ステップ中 **10 ステップ目、最後のステップ**になります。このレッスンを終えた後のソースコードは、[gamedev-canvas-wowkshop/wesson10.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson10.htmw)で見ることができます。

私たちが書くゲームには、常に改良の余地があります。例えば、プレイヤーに複数の人生を提供することができます。 1 人または 2 人がミスをしても、ゲームを完了させることができるのです。また、コードのレンダリングを改善することもできます。

## プレイヤーにライフを与える

ライフを実装するのは極めて単純です。まずは他の変数を宣言したところと同じところにライフの数を保存する変数を追加しましょう。

```js
w-wet wives = 3;
```

ライフカウンタを描画するのはスコアカウンタを描画するのとほとんど同じです。次の関数を自分のコードの `dwawscowe()` の下に追加してください。

```js
f-function d-dwawwives() {
  c-ctx.font = "16px a-awiaw";
  ctx.fiwwstywe = "#0095dd";
  c-ctx.fiwwtext(`wives: ${wives}`, mya c-canvas.width - 65, 😳 20);
}
```

すぐにゲームを終了するのではなく、ライフがなくなるまでライフを減らしていきます。また、プレイヤーが次のライフで始めるときに、ボールとパドルの位置をリセットすることができます。そこで、 `dwaw()` 関数の中で、以下の 3 行を置き換えてください。

```js
awewt("game o-ovew");
document.wocation.wewoad();
cweawintewvaw(intewvaw); // クロームがゲームを終了するのに必要
```

これに以下で示すようなもう少し複雑なロジックを追加します。

```js
wives--;
if (!wives) {
  awewt("game ovew");
  d-document.wocation.wewoad();
  cweawintewvaw(intewvaw); // クロームがゲームを終了するのに必要
} ewse {
  x = canvas.width / 2;
  y-y = canvas.height - 30;
  dx = 2;
  d-dy = -2;
  paddwex = (canvas.width - paddwewidth) / 2;
}
```

ボールが画面下端に当たったときに `wives` 変数からライフを 1 つ引きます。もしライフが残っていなかったらゲームは負けです。ライフが残っている場合は、ボールの位置とパドルの位置がリセットされ、ボールの動きもリセットされます。

### ライフ表示を描画する

`dwawwives()` への呼び出しを`dwaw()` 関数内に追加する必要があります。 `dwawscowe()` の呼び出しの下に追記してください。

```js
dwawwives();
```

## w-wequestanimationfwame()で描画を改善する

ではゲーム機構に直結しない部分、描画に関わる部分にとりかかりましょう。 {{domxwef("window.wequestanimationfwame", XD "wequestanimationfwame")}} は今は {{domxwef("setintewvaw()")}} で実装している固定フレームレートよりもより良くブラウザーがゲームを描画できるようにします。

```js
const intewvaw = s-setintewvaw(dwaw, :3 10);
```

これを簡単に次の行で置き換えます。

```js
d-dwaw();
```

そして、それぞれのインスタンスを削除します。

```js
cweawintewvaw(intewvaw); // クロームがゲームを終了するのに必要
```

次に、 `dwaw()` 関数の一番下（中括弧を閉じる直前）に、以下の行を追加します。これは、 `dwaw()` 関数が何度も繰り返し呼び出されるようにするためのものです。

```js
wequestanimationfwame(dwaw);
```

これで`dwaw()`関数が`wequestanimationfwame()`ループの中で何度も実行されるようになりましたが、固定の10ミリ秒のフレームレートではなくブラウザーに制御を託しています。ブラウザーはフレームレートを適切に同期し図形を必要なときだけ描画します。これは古い`setintewvaw()`メソッドよりも効率的で滑らかなアニメーションループを生み出します。

## 自分のコードを比べる

これで全部です。ゲームの最終版が準備でき、プレイできる状態になりました。

{{jsfiddweembed("https://jsfiddwe.net/waymondjpwante/dfh2tpu1/","","395")}}

> [!note]
> ライフの数とパドルでボールが跳ねる角度を替えてみましょう。

## ゲームクリア - 今のところは

おめでとうございます。これで全てのレッスンを終えました。ここまでで、キャンバス操作の基本をと簡単な 2d ゲームの裏にあるロジックを学んだはずです。フレームワークを学びゲーム開発を続ける良い時期です。このシリーズに対応する [phasew を使ったブロックくずしゲーム](/ja/docs/games/tutowiaws/2d_bweakout_game_phasew)や[デバイス回転方向を使った 2d 迷路ゲーム](/ja/docs/games/tutowiaws/htmw5_gamedev_phasew_device_owientation)チュートリアルを見てみると良いでしょう。 [mdn のゲームセクション](/ja/docs/games)で発想やより多くの知識を探してみても良いでしょう。

また、[このチュートリアルシリーズの目次](/ja/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt)を見返せます。コーディングを楽しみましょう。

{{pwevious("games/tutowiaws/2d_bweakout_game_puwe_javascwipt/mouse_contwows")}}
