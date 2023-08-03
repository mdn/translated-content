---
title: キャンバスを作ってその上に描画する
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
---

{{GamesSidebar}}

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}

これは、[ゲーム開発キャンバスチュートリアル](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) の 10 ステップ中 **1 ステップ目**になります。このレッスンを終えた後のソースコードは、[Gamedev-Canvas-workshop/lesson1.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson01.html)で見ることができます。

ゲームの機能を書き始める前に、ゲームを内部でレンダリングするための基本的な構造を作成する必要があります。これは、HTML と {{htmlelement("canvas")}} 要素を使用して行うことができます。

## ゲームの HTML

ゲームはすべて {{htmlelement("canvas")}} 要素に描画されるため、 HTML 文書構造は極めて簡潔です。好きなテキストエディターを使って新しい HTML 文書を作成し、適当な場所に `index.html` として保存してください。そして、その HTML 文書に次のコードを追加してください。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Gamedev Canvas Workshop</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      canvas {
        background: #eee;
        display: block;
        margin: 0 auto;
      }
    </style>
  </head>
  <body>
    <canvas id="myCanvas" width="480" height="320"></canvas>

    <script>
      // JavaScript のコードはここ
    </script>
  </body>
</html>
```

`charset` を定義し、 {{htmlelement("title")}} と簡単なな CSS をヘッダーに記述しました。本体には {{htmlelement("canvas")}} と {{htmlelement("script")}} 要素があり、前者にはゲームを描画し、後者にはそれを制御する JavaScript のコードを記述します。 {{htmlelement("canvas")}} 要素は簡単に参照を取得できるように `id` を `myCanvas` とし、幅は 480 ピクセル、高さは 320 ピクセルとしています。このチュートリアルで書くすべての JavaScript のコードは開始の `<script>` と終了の `</script>` タグの間に配置されます。

## キャンバスの基本

実際に {{htmlelement("canvas")}} 要素に映像を描画するために、まずは JavaScript から要素への参照を取得しなければなりません。次のコードを開始の `<script>` タグのあとに追記してください。

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
```

ここでは {{htmlelement("canvas")}} 要素への参照を `canvas` に保存しています。それから 2D 描画コンテキストを保存するために `ctx` 変数を作成しています。 2D 描画コンテキストは実際にキャンバスに描画するために使うツールとなります。

赤い四角形をキャンバスの上に表示するコード例を見てみましょう。下記のコードを先程記述した JavaScript のあとに追記して、 `index.html` をブラウザーで読み込んでみてください。

```js
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
```

すべての命令は {{domxref("CanvasRenderingContext2D.beginPath()","beginPath()")}} メソッドと {{domxref("CanvasRenderingContext2D.closePath()","closePath()")}} メソッドの間に記述されています。四角形を {{domxref("CanvasRenderingContext2D.rect()","rect()")}} を用いて定義しています。最初の 2 つの値は左上の角のキャンバス上での座標を指定し、あとの 2 つの値は幅と高さを指定しています。今回描画された四角形は画面の左端から 20 ピクセル、上端から 40 ピクセルの位置に幅 50 ピクセル、高さ 50 ピクセルの大きさで、正方形になっています。 {{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}} プロパティは {{domxref("CanvasRenderingContext2D.fill()","fill()")}} メソッドで用いられる色 (今回は赤) を保存します。

もちろん四角形だけではありません。ここでは緑の円を描画するコードを紹介します。次のコードを自分の JavaScript の最後に追記し、保存して再読込してみてください。

```js
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
```

見て分かるとおり、 {{domxref("CanvasRenderingContext2D.beginPath()","beginPath()")}} メソッドと {{domxref("CanvasRenderingContext2D.closePath()","closePath()")}} メソッドが再び用いられています。その間にこのコードで最も重要な部分、 {{domxref("CanvasRenderingContext2D.arc()","arc()")}} メソッドが呼び出されています。このメソッドは 6 つの引数を持ちます。

- 円の中心の `x`、`y` 座標
- 円の半径
- 開始角度と終了角度 (円を描く始める時点の角度と描き終えたあとの角度をラジアンで)
- 描く方向 (時計回りは `false` で、既定値。反時計回りは `true`。) この最後の引数は省略可能です。

{{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}} プロパティは先程とは違う形になっています。これは CSS でそうであるように、色は 16 進値、色キーワード、 `rgba()` 関数、その他利用可能な色メソッドなら何でも指定することができるからです。

図形を {{domxref("CanvasRenderingContext2D.fill()","fill()")}} で塗りつぶすかわりに {{domxref("CanvasRenderingContext2D.stroke()","stroke()")}} で縁だけ色を付けることも出来ます。次のコードも自分の JavaScript に追記してみてください。

```js
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();
```

上記のコードは青く縁取られたからの四角形を描画します。 `rgba()` 関数内のアルファチャネルにより青色は半透明になっています。

## 自分のコードと比べる

以下が JSFiddle で即実行可能な最初のレッスンのソースコード全てです。

{{JSFiddleEmbed("https://jsfiddle.net/end3r/x62h15e2/","","395")}}

> **メモ:** 与えられた図形の大きさや色を変えてみましょう。

## 次のステップ

ここまでで基本的な HTML を組み上げキャンバスについて少し学習しました。それでは、第 2 章に進み、[どうやってゲーム内のボールを動かすか](/ja/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball)を学びましょう。

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}
