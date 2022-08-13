---
title: Canvasを作ってその上に描画する
slug: >-
  Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
translation_of: >-
  Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
original_slug: >-
  Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
---
{{GamesSidebar}}{{IncludeSubnav("/ja/docs/Games")}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}

これは[ゲーム開発 Canvas チュートリアル](/ja/docs/Games/Workflows/Breakout_game_from_scratch)の 10 ステップのうち**1 番最初**のステップです。このレッスンを終えたあとの完成予想のソースコードは[Gamedev-Canvas-workshop/lesson1.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson01.html)で入手できます。

ゲームの機能を書き始める前に、ゲーム内部を記述する基本的な構造を作る必要があります。これには HTML と{{htmlelement("canvas")}}要素を用います。

## ゲームの HTML

ゲームは全て{{htmlelement("canvas")}}要素に描画されるため、HTML 文書構造は極めて簡潔です。好きなテキストエディタを使って新しい HTML 文書を作成し、適当な場所に`index.html`として保存してください。そして、その HTML 文書に次のコードを追加します。

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>Gamedev Canvas Workshop</title>
    <style>
    	* { padding: 0; margin: 0; }
    	canvas { background: #eee; display: block; margin: 0 auto; }
    </style>
</head>
<body>

<canvas id="myCanvas" width="480" height="320"></canvas>

<script>
	// JavaScriptのコードがここに入ります
</script>

</body>
</html>
```

`charset` を定義し、{{htmlelement("title")}}と簡単なな CSS をヘッダに記述しました。本体には{{htmlelement("canvas")}}と{{htmlelement("script")}}要素があり、前者にはゲームを描画し、後者にはそれを制御する JavaScript のコードを記述します。{{htmlelement("canvas")}}要素は簡単に参照を取得できるように`myCanvas`という`id`を持ち、幅は 480 ピクセル、高さは 320 ピクセルとしています。このチュートリアルで書く全ての JavaScript のコードは開始の`<script>`と終了の`</script>`タグの間に配置されます。

## Canvas の基本

実際に{{htmlelement("canvas")}}要素に映像を描画するために、まずは JavaScript から要素への参照を取得しなければなりません。次のコードを開始の`<script>`タグのあとに追記してください。

```js
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
```

ここでは{{htmlelement("canvas")}}要素への参照を`canvas`に保存しています。それから 2D 描画コンテキストを保存するために`ctx`変数を作成しています。2D 描画コンテキストは実際に Canvas に描画するために使うツールとなります。

赤い四角形をキャンバスの上に表示するコード例を見てみましょう。下記のコードを先程記述した JavaScript のあとに追記して、`index.html`をブラウザで読み込んでみてください。

```js
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
```

全ての命令は{{domxref("CanvasRenderingContext2D.beginPath()","beginPath()")}}メソッドと {{domxref("CanvasRenderingContext2D.closePath()","closePath()")}}メソッドの間に記述されています。四角形を{{domxref("CanvasRenderingContext2D.rect()","rect()")}}を用いて定義しています。最初の 2 つの値は左上の角のキャンバス上での座標を指定し、あとの 2 つの値は幅と高さを指定しています。今回描画された四角形は画面の左端から 20 ピクセル、上端から 40 ピクセルの位置に幅 50 ピクセル、高さ 50 ピクセルの大きさで、正方形になっています。{{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}}プロパティは{{domxref("CanvasRenderingContext2D.fill()","fill()")}}メソッドで用いられる色 (今回は赤) を保存します。

もちろん四角形だけではありません。ここでは緑の円を描画するコードを紹介します。次のコードを自分の JavaScript の最後に追記し、保存して再読込してみてください。

```js
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
```

見て分かるとおり、{{domxref("CanvasRenderingContext2D.beginPath()","beginPath()")}}メソッドと{{domxref("CanvasRenderingContext2D.closePath()","closePath()")}}メソッドが再び用いられています。その間にこのコードで最も重要な部分、{{domxref("CanvasRenderingContext2D.arc()","arc()")}}メソッドが呼び出されています。このメソッドは 6 つのパラメーターを持ちます。

- 円の中心の`x`、`y`座標
- 円の半径
- 開始角度と終了角度 (円を描く始める時点の角度と描き終えたあとの角度をラジアンで)
- 描く方向 (時計回りは`false`で、デフォルト。半時計回りは`true`。) この最後のパラメーターは省略可能です。

{{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}}プロパティは先程とは違う形になっています。これは CSS でそうであるように、色は 16 進値、色キーワード、`rgba()`関数、その他利用可能な色メソッドなら何でも指定することができるからです。

図形を{{domxref("CanvasRenderingContext2D.fill()","fill()")}}で塗りつぶすかわりに{{domxref("CanvasRenderingContext2D.stroke()","stroke()")}}で縁だけ色を付けることも出来ます。次のコードも自分の JavaScript に追記してみてください。

```js
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)";
ctx.stroke();
ctx.closePath();
```

上記のコードは青く縁取られたからの四角形を描画します。`rgba()`関数内のアルファチャネルにより青色は半透明になっています。

## 自分のコードと比べる

以下が JSFiddle で即実行可能な最初のレッスンのソースコード全てです。

{{JSFiddleEmbed("https://jsfiddle.net/end3r/x62h15e2/","","395")}}

> **Note:** **練習**: 与えられた図形の大きさや色を変えてみましょう。

## 次のステップ

ここまでで基本的な HTML を組み上げ canvas に少し学習しました。それでは、第 2 章に進み[どうやってゲーム内のボールを動かすか](/ja/docs/Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball)学びましょう。

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}
