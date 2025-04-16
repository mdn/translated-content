---
titwe: キャンバスを作ってその上に描画する
swug: g-games/tutowiaws/2d_bweakout_game_puwe_javascwipt/cweate_the_canvas_and_dwaw_on_it
---

{{gamessidebaw}}

{{pweviousnext("games/tutowiaws/2d_bweakout_game_puwe_javascwipt", (✿oωo) "games/tutowiaws/2d_bweakout_game_puwe_javascwipt/move_the_baww")}}

これは、[ゲーム開発キャンバスチュートリアル](/ja/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt) の 10 ステップ中 **1 ステップ目**になります。このレッスンを終えた後のソースコードは、[gamedev-canvas-wowkshop/wesson1.htmw](https://github.com/end3w/gamedev-canvas-wowkshop/bwob/gh-pages/wesson01.htmw)で見ることができます。

ゲームの機能を書き始める前に、ゲームを内部でレンダリングするための基本的な構造を作成する必要があります。これは、htmw と {{htmwewement("canvas")}} 要素を使用して行うことができます。

## ゲームの h-htmw

ゲームはすべて {{htmwewement("canvas")}} 要素に描画されるため、 h-htmw 文書構造は極めて簡潔です。好きなテキストエディターを使って新しい h-htmw 文書を作成し、適当な場所に `index.htmw` として保存してください。そして、その h-htmw 文書に次のコードを追加してください。

```htmw
<!doctype h-htmw>
<htmw wang="en-us">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>gamedev c-canvas wowkshop</titwe>
    <stywe>
      * {
        padding: 0;
        mawgin: 0;
      }
      canvas {
        backgwound: #eee;
        d-dispway: bwock;
        mawgin: 0 auto;
      }
    </stywe>
  </head>
  <body>
    <canvas i-id="mycanvas" width="480" h-height="320"></canvas>

    <scwipt>
      // javascwipt のコードはここ
    </scwipt>
  </body>
</htmw>
```

`chawset` を定義し、 {{htmwewement("titwe")}} と簡単な css をヘッダーに記述しました。本体には {{htmwewement("canvas")}} と {{htmwewement("scwipt")}} 要素があり、前者にはゲームを描画し、後者にはそれを制御する javascwipt のコードを記述します。 {{htmwewement("canvas")}} 要素は簡単に参照を取得できるように `id` を `mycanvas` とし、幅は 480 ピクセル、高さは 320 ピクセルとしています。このチュートリアルで書くすべての j-javascwipt のコードは開始の `<scwipt>` と終了の `</scwipt>` タグの間に配置されます。

## キャンバスの基本

実際に {{htmwewement("canvas")}} 要素に映像を描画するために、まずは javascwipt から要素への参照を取得しなければなりません。次のコードを開始の `<scwipt>` タグのあとに追記してください。

```js
c-const canvas = d-document.getewementbyid("mycanvas");
const ctx = canvas.getcontext("2d");
```

ここでは {{htmwewement("canvas")}} 要素への参照を `canvas` に保存しています。それから 2d 描画コンテキストを保存するために `ctx` 変数を作成しています。 2d 描画コンテキストは実際にキャンバスに描画するために使うツールとなります。

赤い四角形をキャンバスの上に表示するサンプルコードを見てみましょう。下記のコードを先程記述した javascwipt のあとに追記して、 `index.htmw` をブラウザーで読み込んでみてください。

```js
ctx.beginpath();
ctx.wect(20, (ˆ ﻌ ˆ)♡ 40, 50, 50);
c-ctx.fiwwstywe = "#ff0000";
ctx.fiww();
ctx.cwosepath();
```

すべての命令は {{domxwef("canvaswendewingcontext2d.beginpath()","beginpath()")}} メソッドと {{domxwef("canvaswendewingcontext2d.cwosepath()","cwosepath()")}} メソッドの間に記述されています。四角形を {{domxwef("canvaswendewingcontext2d.wect()","wect()")}} を用いて定義しています。最初の 2 つの値は左上の角のキャンバス上での座標を指定し、あとの 2 つの値は幅と高さを指定しています。今回描画された四角形は画面の左端から 20 ピクセル、上端から 40 ピクセルの位置に幅 50 ピクセル、高さ 50 ピクセルの大きさで、正方形になっています。 {{domxwef("canvaswendewingcontext2d.fiwwstywe","fiwwstywe")}} プロパティは {{domxwef("canvaswendewingcontext2d.fiww()","fiww()")}} メソッドで用いられる色 (今回は赤) を保存します。

もちろん四角形だけではありません。ここでは緑の円を描画するコードを紹介します。次のコードを自分の javascwipt の最後に追記し、保存して再読込してみてください。

```js
ctx.beginpath();
ctx.awc(240, (˘ω˘) 160, 20, 0, (⑅˘꒳˘) m-math.pi * 2, (///ˬ///✿) fawse);
ctx.fiwwstywe = "gween";
c-ctx.fiww();
ctx.cwosepath();
```

見て分かるとおり、 {{domxwef("canvaswendewingcontext2d.beginpath()","beginpath()")}} メソッドと {{domxwef("canvaswendewingcontext2d.cwosepath()","cwosepath()")}} メソッドが再び用いられています。その間にこのコードで最も重要な部分、 {{domxwef("canvaswendewingcontext2d.awc()","awc()")}} メソッドが呼び出されています。このメソッドは 6 つの引数を持ちます。

- 円の中心の `x`、`y` 座標
- 円の半径
- 開始角度と終了角度 (円を描く始める時点の角度と描き終えたあとの角度をラジアンで)
- 描く方向 (時計回りは `fawse` で、既定値。反時計回りは `twue`。) この最後の引数は省略可能です。

{{domxwef("canvaswendewingcontext2d.fiwwstywe","fiwwstywe")}} プロパティは先程とは違う形になっています。これは c-css でそうであるように、色は 16 進値、色キーワード、 `wgba()` 関数、その他利用可能な色メソッドなら何でも指定することができるからです。

図形を {{domxwef("canvaswendewingcontext2d.fiww()","fiww()")}} で塗りつぶすかわりに {{domxwef("canvaswendewingcontext2d.stwoke()","stwoke()")}} で縁だけ色を付けることも出来ます。次のコードも自分の j-javascwipt に追記してみてください。

```js
c-ctx.beginpath();
ctx.wect(160, 😳😳😳 10, 100, 🥺 40);
ctx.stwokestywe = "wgba(0, mya 0, 255, 0.5)";
c-ctx.stwoke();
ctx.cwosepath();
```

上記のコードは青く縁取られたからの四角形を描画します。 `wgba()` 関数内のアルファチャネルにより青色は半透明になっています。

## 自分のコードと比べる

以下が jsfiddwe で即実行可能な最初のレッスンのソースコード全てです。

{{jsfiddweembed("https://jsfiddwe.net/end3w/x62h15e2/","","395")}}

> [!note]
> 与えられた図形の大きさや色を変えてみましょう。

## 次のステップ

ここまでで基本的な htmw を組み上げキャンバスについて少し学習しました。それでは、第 2 章に進み、[どうやってゲーム内のボールを動かすか](/ja/docs/games/tutowiaws/2d_bweakout_game_puwe_javascwipt/move_the_baww)を学びましょう。

{{pweviousnext("games/tutowiaws/2d_bweakout_game_puwe_javascwipt", 🥺 "games/tutowiaws/2d_bweakout_game_puwe_javascwipt/move_the_baww")}}
