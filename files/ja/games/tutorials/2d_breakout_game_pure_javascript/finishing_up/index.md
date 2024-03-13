---
title: 仕上げ
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up
---

{{GamesSidebar}}

{{Previous("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}

これは、[ゲーム開発キャンバスチュートリアル](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) の 10 ステップ中 **10 ステップ目、最後のステップ**になります。このレッスンを終えた後のソースコードは、[Gamedev-Canvas-workshop/lesson10.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson10.html)で見ることができます。

私たちが書くゲームには、常に改良の余地があります。例えば、プレイヤーに複数の人生を提供することができます。 1 人または 2 人がミスをしても、ゲームを完了させることができるのです。また、コードのレンダリングを改善することもできます。

## プレイヤーにライフを与える

ライフを実装するのは極めて単純です。まずは他の変数を宣言したところと同じところにライフの数を保存する変数を追加しましょう。

```js
let lives = 3;
```

ライフカウンタを描画するのはスコアカウンタを描画するのとほとんど同じです。次の関数を自分のコードの `drawScore()` の下に追加してください。

```js
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20);
}
```

すぐにゲームを終了するのではなく、ライフがなくなるまでライフを減らしていきます。また、プレイヤーが次のライフで始めるときに、ボールとパドルの位置をリセットすることができます。そこで、 `draw()` 関数の中で、以下の 3 行を置き換えてください。

```js
alert("GAME OVER");
document.location.reload();
clearInterval(interval); // クロームがゲームを終了するのに必要
```

これに以下で示すようなもう少し複雑なロジックを追加します。

```js
lives--;
if (!lives) {
  alert("GAME OVER");
  document.location.reload();
  clearInterval(interval); // クロームがゲームを終了するのに必要
} else {
  x = canvas.width / 2;
  y = canvas.height - 30;
  dx = 2;
  dy = -2;
  paddleX = (canvas.width - paddleWidth) / 2;
}
```

ボールが画面下端に当たったときに `lives` 変数からライフを 1 つ引きます。もしライフが残っていなかったらゲームは負けです。ライフが残っている場合は、ボールの位置とパドルの位置がリセットされ、ボールの動きもリセットされます。

### ライフ表示を描画する

`drawLives()` への呼び出しを`draw()` 関数内に追加する必要があります。 `drawScore()` の呼び出しの下に追記してください。

```js
drawLives();
```

## requestAnimationFrame()で描画を改善する

ではゲーム機構に直結しない部分、描画に関わる部分にとりかかりましょう。 {{domxref("window.requestAnimationFrame", "requestAnimationFrame")}} は今は {{domxref("setInterval()")}} で実装している固定フレームレートよりもより良くブラウザーがゲームを描画できるようにします。

```js
const interval = setInterval(draw, 10);
```

これを簡単に次の行で置き換えます。

```js
draw();
```

そして、それぞれのインスタンスを削除します。

```js
clearInterval(interval); // クロームがゲームを終了するのに必要
```

次に、 `draw()` 関数の一番下（中括弧を閉じる直前）に、以下の行を追加します。これは、 `draw()` 関数が何度も繰り返し呼び出されるようにするためのものです。

```js
requestAnimationFrame(draw);
```

これで`draw()`関数が`requestAnimationFrame()`ループの中で何度も実行されるようになりましたが、固定の10ミリ秒のフレームレートではなくブラウザーに制御を託しています。ブラウザーはフレームレートを適切に同期し図形を必要なときだけ描画します。これは古い`setInterval()`メソッドよりも効率的で滑らかなアニメーションループを生み出します。

## 自分のコードを比べる

これで全部です。ゲームの最終版が準備でき、プレイできる状態になりました。

{{JSFiddleEmbed("https://jsfiddle.net/raymondjplante/dfh2tpu1/","","395")}}

> **メモ:** ライフの数とパドルでボールが跳ねる角度を替えてみましょう。

## ゲームクリア - 今のところは

おめでとうございます。これで全てのレッスンを終えました。ここまでで、キャンバス操作の基本をと簡単な 2D ゲームの裏にあるロジックを学んだはずです。フレームワークを学びゲーム開発を続ける良い時期です。このシリーズに対応する [Phaser を使ったブロックくずしゲーム](/ja/docs/Games/Tutorials/2D_breakout_game_Phaser)や[デバイス回転方向を使った 2D 迷路ゲーム](/ja/docs/Games/Tutorials/HTML5_Gamedev_Phaser_Device_Orientation)チュートリアルを見てみると良いでしょう。 [MDN のゲームセクション](/ja/docs/Games)で発想やより多くの知識を探してみても良いでしょう。

また、[このチュートリアルシリーズの目次](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript)を見返せます。コーディングを楽しみましょう。

{{Previous("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}
