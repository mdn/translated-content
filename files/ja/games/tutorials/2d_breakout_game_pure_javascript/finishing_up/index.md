---
title: 仕上げ
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up
translation_of: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up
original_slug: Games/Workflows/2D_Breakout_game_pure_JavaScript/Finishing_up
---
{{GamesSidebar}}{{IncludeSubnav("/ja/docs/Games")}}

{{Previous("Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}

これは[ゲーム開発 Canvas チュートリアル](/ja/docs/Games/Workflows/Breakout_game_from_scratch)の 10 ステップのうち**10 番目、最後**のステップです。このレッスンを終えたあとの完成予想のソースコードは[Gamedev-Canvas-workshop/lesson10.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson10.html)で入手できます。

書いたゲームのどれも常に改善の余地があります。例えば、プレイヤーに 1 つ以上のライフを与えることができます。1 回や 2 回間違えてもゲームを終わらせられるようにするのです。また、描画も改善できます。

## プレイヤーにライフを与える

ライフを実装するのは極めて単純です。まずは他の変数を宣言したところと同じところにライフの数を保存する変数を追加しましょう。

```js
var lives = 3;
```

ライフカウンタを描画するのはスコアカウンタを描画するのとほとんど同じです。次の関数を自分のコードの`drawScore()`の下に追加してください。

```js
function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}
```

ライフがなくなるまで、ゲームをすぐ終わらせるかわりにライフの数を減らします。`draw()`関数内の次の 2 行を置き換えます。

```js
alert("GAME OVER");
document.location.reload();
```

これに以下で示すようなもう少し複雑なロジックを追加します。

```js
lives--;
if(!lives) {
    alert("GAME OVER");
    document.location.reload();
}
else {
    x = canvas.width/2;
    y = canvas.height-30;
    dx = 2;
    dy = -2;
    paddleX = (canvas.width-paddleWidth)/2;
}
```

ボールが画面下端に当たったときに`lives`変数からライフを 1 つひきます。もしライフが残っていなかったらゲームは負けです。まだ残っているライフがあったらボールとパドルの位置、ボールの動きがリセットされます。

### ライフ表示を描画する

`draw()`関数内に`drawLives()`への呼び出しを追加する必要があります。`drawScore()`の呼び出しの下に追記してください。

```js
drawLives();
```

## requestAnimationFrame()で描画を改善する

ではゲーム機構に直結しない部分、描画に関わる部分にとりかかりましょう。{{domxref("window.requestAnimationFrame", "requestAnimationFrame")}}は今は{{domxref("windowTimers.setInterval()", "setInterval()")}}で実装している固定フレームレートよりもより良くブラウザがゲームを描画できるようにします。

```js
setInterval(draw, 10);
```

これを簡単に次の行で置き換えます。

```js
draw();
```

それから、`draw()`関数の一番下 (閉じ波括弧のすぐ前) に次の行を追加し、`draw()`関数が自分自身を何度も呼び出すようにします。

```js
requestAnimationFrame(draw);
```

これで`draw()`関数が`requestAnimationFrame()`ループの中で何度も実行されるようになりましたが、固定の 10 ミリ秒のフレームレートではなくブラウザに制御を託しています。ブラウザはフレームレートを適切に同期し図形を必要なときだけ描画します。これは古い`setInterval()`メソッドよりも効率的で滑らかなアニメーションループを生み出します。

## 自分のコードを比べる

これで全部です。ゲームの最終版が準備でき、プレイできる状態になりました。

{{JSFiddleEmbed("https://jsfiddle.net/raymondjplante/dfh2tpu1/","","395")}}

> **Note:** **練習**: ライフの数とパドルでボールが跳ねる角度を替えてみましょう。

## ゲームクリア - 今のところは。

おめでとうございます。これで全てのレッスンを終えました。ここまでで、キャンバス操作の基本をと簡単な 2D ゲームの裏にあるロジックを学んだはずです。フレームワークを学びゲーム開発を続ける良い時期です。このシリーズに対応する[Phaser を使ったブロックくずしゲーム](/ja/docs/Games/Workflows/2D_breakout_game_Phaser)や[デバイス回転方向を使った 2D 迷路ゲーム](/ja/docs/Games/Workflows/HTML5_Gamedev_Phaser_Device_Orientation)チュートリアルを見てみると良いでしょう。[MDN のゲームセクション](/ja/docs/Games)で発想やより多くの知識を探してみても良いでしょう。

また、[このチュートリアルシリーズの目次](/ja/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript)を見返せます。コーディングを楽しみましょう。

{{Previous("Games/Workflows/2D_Breakout_game_pure_JavaScript/Mouse_controls")}}
