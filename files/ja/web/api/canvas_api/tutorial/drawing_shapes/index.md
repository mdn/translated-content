---
title: キャンバスでの図形の描画
slug: Web/API/Canvas_API/Tutorial/Drawing_shapes
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}

[キャンバスの環境](/ja/docs/Web/API/Canvas_API/Tutorial/Basic_usage)をセットアップしましたので、キャンバスに描画する方法の詳細に入ることができます。この記事の終わりまでに、矩形、三角形、直線、円弧、曲線を描く方法を学び、基本的な図形について理解できます。キャンバスにオブジェクトを描く際はパスを扱うことが不可欠ですので、その方法を見ていきます。

## グリッド

描画を始める前に、キャンバスのグリッド、もしくは**座標空間**について話す必要があります。前のページの HTML スケルトンは、幅 150 ピクセル、高さ 150 ピクセルの canvas 要素を持っていました。

![](canvas_default_grid.png)

普通、グリッド上の 1 単位はキャンバス上の 1 ピクセルに相当します。このグリッドの原点は、*左上*の角に (0,0) の座標が配置されています。すべての要素がこの原点から相対的に配置されます。よって青い正方形の左上の場所は左から x ピクセル、上から y ピクセルの、 (x,y) の位置になります。このチュートリアルの後半では、原点を別の位置に移動したり、グリッドを回転させたり、拡大縮小したりする方法を紹介しますが、今は既定のままにしておきましょう。

## 矩形の描画

{{Glossary("SVG")}} とは異なり、 {{HTMLElement("canvas")}} は 2 つの基本的な図形、矩形とパス（直線で結んだ点のリスト）のみに対応しています。他の全ての図形は 1 つ以上のパスの組み合わせで作らなくてはなりません。幸いなことに、パスを描く一連の関数があり、とても複雑な図形を作ることができます。

最初に矩形を見ていきましょう。キャンバスに矩形を描く関数が 3 つあります。

- {{domxref("CanvasRenderingContext2D.fillRect", "fillRect(x, y, width, height)")}}
  - : 塗りつぶされた矩形を描きます。
- {{domxref("CanvasRenderingContext2D.strokeRect", "strokeRect(x, y, width, height)")}}
  - : 矩形の輪郭を描きます。
- {{domxref("CanvasRenderingContext2D.clearRect", "clearRect(x, y, width, height)")}}
  - : 指定された領域を消去し、完全な透明にします。

3 つの関数は同じ引数を取ります。 `x` と `y` はキャンバスにおける矩形の左上の角の位置（原点からの相対位置）を指定します。 `width` と `height` は矩形の大きさを指定します。

以下のものは前ページの `draw()` 関数ですが、ここではこれら 3 つの関数を使用しています。

### 矩形の例

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}
```

結果は以下のように見えるはずです。

{{EmbedLiveSample("Rectangular_shape_example", 160, 160, "canvas_rect.png")}}

`fillRect()` 関数は 100 ピクセル各の大きな黒い正方形を描きます。 `clearRect()` 関数は中心から 60x60 ピクセルの正方形を取り除き、最後に `strokeRect()` が消去された正方形の中に 50x50 ピクセルの矩形の輪郭を描きます。

後のページでは、 `clearRect()` に代わる 2 つのメソッドを紹介し、描画された図形の色と輪郭のスタイルを変更する方法について説明します。

次の節で見るパス関数とは異なり、 3 つの矩形関数はすべてキャンバスに即座に描画されます。

## パスを描く

ここで、パスについて見てみましょう。パスは点のリストであり、さまざまな形、曲線、幅、色の線分によって結ばれています。パスは、サブパスのように閉じることができます。パスを使って図形を作るには、いくつかの特別な手順を踏みます。

1. 始めに、パスを作成します。
2. 次に、パスへ描画するために[描画コマンド](/ja/docs/Web/API/CanvasRenderingContext2D#paths)を使用します。
3. パスを作成したら、パスを輪郭または塗りつぶしで描くことができます。

これらのステップで使用する関数を以下に示します。

- {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}}
  - : 新しいパスを作成します。パスを作成すると以降の描画コマンドは、そのパスを構築するために直接作用します。
- [パスのメソッド](/ja/docs/Web/API/CanvasRenderingContext2D#paths)
  - : オブジェクトのためにさまざまなパスを設定するメソッド群です。
- {{domxref("CanvasRenderingContext2D.closePath", "closePath()")}}
  - : 直線をパスに追加し、現在のサブパスの開始地点につなぎます。
- {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}}
  - : 輪郭をなぞる方式で、図形を描きます。
- {{domxref("CanvasRenderingContext2D.fill", "fill()")}}
  - : パスの内部領域を塗りつぶして、単色の図形を描きます。

パスを作る最初の作業は `beginPath()` メソッドを呼び出すことです。内部では、パスは図形を一緒に作るサブパス（線、円弧など）のリストとして保存されます。このメソッドが呼び出される毎に、リストはリセットされ新しい図形を始めることができます。

> **メモ:** `beginPath()` を呼び出した直後やキャンバスを新規作成した直後など、現在のパスが空であるときに最初にパスを構築するコマンドは、実際は何であるかにかかわらず常に `moveTo()` として扱われます。このためパスをリセットした後はほぼ必ず、開始位置を明示することが必要になるでしょう。

2 番目の作業は描かれる実際のパスを定義するメソッドを呼び出すことです。まもなくみることになります。

3 番目は任意の作業ですが、 `closePath()` メソッドを呼び出すことです。このメソッドは現在の点から始点に向けて直線を描くことで図形を閉じようとします。もし図形がすでに閉じられているかリストに点がひとつしかない場合はこの関数は何もしません。

> **メモ:** `fill()` が呼び出されたとき、開いている図形は自動的に閉じられるので、`closePath()` を呼び出す必要はありません。これは、`stroke()` を呼び出したときは**あてはまりません**。

### 三角形の描画

例えば、三角形を描くコードは次のようになります。

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="100" height="100"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}
```

表示結果は以下のようになります。

{{EmbedLiveSample("Drawing_a_triangle", 110, 110, "triangle.png")}}

### ペンの移動

非常に便利な関数のひとつに、 `moveTo()` 関数があります。これは実際には何も描画しませんが、上記のパスのリストの一部となります。これは、ペンや鉛筆を紙の上のある場所から持ち上げて、次の場所に置くようなものだと思えばよいでしょう。

- {{domxref("CanvasRenderingContext2D.moveTo", "moveTo(x, y)")}}
  - : `x` と `y` で指定した座標に、ペンを移動します。

キャンバスが初期化されるか `beginPath()` メソッドが呼び出されたとき、ふつうは `moveTo()` メソッドを使って始点を他の場所に配置します。 `moveTo()` メソッドを使って繋がっていないパスを描くこともできます。下のスマイリーを見てください。

これをあなた自身で試すには、以下のコードを使うことができます。さきほど見た `draw()` 関数に貼り付けるだけです。

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
     var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 外の円
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // 口 (時計回り)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // 左目
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // 右目
    ctx.stroke();
  }
}
```

表示結果は以下のようになります。

{{EmbedLiveSample("Moving_the_pen", 160, 160, "canvas_smiley.png")}}

もし、連続した線を見たい場合は、`moveTo()`を呼び出す行を削除してください。

> **メモ:** `arc()` 関数とそのパラメータの解説は[円弧](#円弧)の節をご覧下さい。

### 直線

直線を描くには `lineTo()` メソッドを使います。

- {{domxref("CanvasRenderingContext2D.lineTo", "lineTo(x, y)")}}
  - : 現在の描画位置から `x` と `y` で指定した位置に、線を描きます。

このメソッドは、線の終点の座標である `x` と `y` の 2 つの引数をとります。始点は以前に描かれたパスに依存し、前のパスの終点が次のパスの始点となる、といった具合です。始点は、 `moveTo()` メソッドを用いて変更することもできます。

次の例では 2 つの三角形が描かれています。 1 つは塗りつぶされ、もう 1 つは輪郭線が描かれます。

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // 塗りつぶした三角形
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // 輪郭の三角形
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
  }
}
```

最初に新しい図形のパスを始めるために `beginPath()` メソッドが呼ばれています。次に 始点を望む位置に移動するために `moveTo()` メソッドが呼ばれています。三角形の両側の辺を作る 2 つの線が描かれています。

{{EmbedLiveSample("Lines", 160, 160, "canvas_lineto.png")}}

塗りつぶされた三角形と輪郭線の三角形の違いに気づくでしょう。これは前述したように、図形はパスが塗りつぶされたときには自動的に閉じられますが、輪郭線のときには閉じられないからです。もし、描画された三角形の `closePath()` を省いたら、完全な三角形ではなく、 2 本の線だけが描画されることになります。

### 円弧

円弧や円を描くために `arc()` または `arcTo()` メソッドを使います。

- {{domxref("CanvasRenderingContext2D.arc", "arc(x, y, radius, startAngle, endAngle, counterclockwise)")}}
  - : _(x, y)_ を中心の位置、 _radius_ を半径、 _startAngle_ を開始角度、 _endAngle_ を終了角度、 _counterclockwise_ を方向（既定では時計回り）とする円弧を描きます。
- {{domxref("CanvasRenderingContext2D.arcTo", "arcTo(x1, y1, x2, y2, radius)")}}
  - : 指定した制御点と半径によって円弧を描き、その前の描画位置と直線で接続します。

もっと詳しく `arc` メソッドを見てみましょう。このメソッドは 6 つの引数を取ります。 `x` と `y` は円弧を描画する円の中心の座標です。 `x` と `y` は円弧を描画する円の中心の座標で、 `radius` はその名の通り半径です。 `startAngle` および `endAngle` 引数は、円のカーブに沿った円弧の始点と終点をラジアン単位で指定します。これらは x 軸から測定されます。 `counterclockwise` 引数は論理値で、 `true` の場合は反時計回りに、それ以外の場合は時計回りに円弧が描かれます。

> **メモ:** `arc` 関数の角度は度ではなく、ラジアンで計算されます。度からラジアンに変換するには、 JavaScript の式では `radians = (Math.PI/180)*degrees` を使うことができます。

次の例は、上で見たものよりも少し複雑です。これは 12 種類の円弧を、それぞれ異なる角度と塗りつぶしで描画します。

2 つの [`for` ループ](/ja/docs/Web/JavaScript/Reference/Statements/for)は円弧の行と列のループです。すべての円弧毎に `beginPath()` を使って新しいパスを始めます。コードでは、わかりやすくするために円弧の各引数を変数にしていますが、実生活では必ずしもそうする必要はないでしょう。

`x` と `y` の座標は十分に明確であるはずです。 `radius` と `startAngle` は固定です。 `endAngle` は最初の列で 180 度（半円）から始まり、90 度ずつ増加し、最後の列で完全な円になります。

`clockwise` 引数の文は最初と 3 番目の列では時計回りの円弧として 2 番目と 4 番目の列では反時計回りの円弧という結果になります。最後に、 `if` 文は上半分は輪郭を描画された円弧を、下半分は塗られた円弧を作ります。

> **メモ:** この例では、ほかの例より若干大きなサイズである 150 x 200 ピクセルのキャンバスが必要です。

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="200"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 3; j++) {
        ctx.beginPath();
        var x = 25 + j * 50; // x 座標
        var y = 25 + i * 50; // y 座標
        var radius = 20; // 円弧の半径
        var startAngle = 0; // 円孤の始点
        var endAngle = Math.PI + (Math.PI * j) / 2; // 円孤の終点
        var counterclockwise = i % 2 !== 0; // 時計回りまたは反時計回り

        ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

        if (i > 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  }
}
```

{{EmbedLiveSample("Arcs", 160, 210, "canvas_arc.png")}}

### ベジェと二次曲線

次に見ていく種類のパスは[ベジェ曲線](/ja/docs/Glossary/Bézier_curve)です。三次関数と二次関数が利用可能です。一般に、複雑な自然の図形を描くのに使われます。

- {{domxref("CanvasRenderingContext2D.quadraticCurveTo", "quadraticCurveTo(cp1x, cp1y, x, y)")}}
  - : 現在のペンの位置から `x` および `y` で指定した終端へ、 `cp1x` および `cp1y` で指定した制御点を使用して二次ベジェ曲線を描きます。
- {{domxref("CanvasRenderingContext2D.bezierCurveTo", "bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)")}}
  - : 現在のペンの位置から `x` および `y` で指定した終端へ、(`cp1x`, `cp1y`) および (`cp2x`, `cp2y`) で指定した制御点を使用して三次ベジェ曲線を描きます。

これらの違いは右の画像を使うことで説明することができます。二次ベジェ曲線は始点と終点（青い点）と 1 つの**制御点**（赤い点で示したもの） を持つのに対して、三次ベジェ曲線は 2 つの制御点を持ちます。
![](canvas_curves.png)

それらのメソッドの両方の `x` と `y` パラメータは終点の座標です。`cp1x` と `cp1y` は最初の制御点、`cp2x` と `cp2y` は 2 番目の制御点の座標です。

二次・三次ベジェ曲線は、 Adobe Illustrator のようなベクトル描画ソフトとは異なり、何をしているのかが直接視覚的にわからないため、かなり難易度が高いです。そのため、複雑な形状を描くのはかなり難しいです。次の例では、単純な有機的な形状をいくつか描きますが、時間と忍耐力があれば、もっと複雑な形状を作成することが可能です。

これらの例で非常に難しいものは何もありません。 どちらの場合も、最終的に描かれた一連の曲線が完全な図形となるのを見ることになります。

#### 二次ベジェ曲線

この例では、吹き出しをレンダリングするために複数の二次ベジェ曲線を使用しています。

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // 二次曲線の例
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
  }
}
```

{{EmbedLiveSample("Quadratic_Bezier_curves", 160, 160, "canvas_quadratic.png")}}

#### 三次ベジェ曲線

この例では、三次ベジェ曲線を使ってハートを描画します。

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // 三次ベジェ曲線の例
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();
  }
}
```

{{EmbedLiveSample("Cubic_Bezier_curves", 160, 160, "canvas_bezier.png")}}

### 矩形

[矩形の描画](#矩形の描画)で見た、キャンバスに直接矩形を描く 3つ のメソッドに加え、現在開いているパスに矩形のパスを追加する `rect()` メソッドも用意されています。

- {{domxref("CanvasRenderingContext2D.rect", "rect(x, y, width, height)")}}
  - : (`x`, `y`) で指定した位置を左上の角にして、 `width` および `height` で指定した幅および高さの矩形を描きます。

このメソッドが実行される前に、引数に (x,y) を持った `moveTo()` メソッドが自動的に呼ばれます。すなわち、始点が標準の位置に置かれます。

### 組み合わせ

このページのすべての例で図形につき一種類のパス関数のみを使ってきました。しかし、図形を作るのに使用できるパスの種類の制限は一切ありません。そこで、この最後の例では非常に有名なゲームのキャラクターを作るために、全てのパス関数を組み合わせてみましょう。

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    roundedRect(ctx, 12, 12, 150, 150, 15);
    roundedRect(ctx, 19, 19, 150, 150, 9);
    roundedRect(ctx, 53, 53, 49, 33, 10);
    roundedRect(ctx, 53, 119, 49, 16, 6);
    roundedRect(ctx, 135, 53, 49, 33, 10);
    roundedRect(ctx, 135, 119, 25, 49, 10);

    ctx.beginPath();
    ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    ctx.lineTo(31, 37);
    ctx.fill();

    for (var i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 35, 4, 4);
    }

    for (i = 0; i < 6; i++) {
      ctx.fillRect(115, 51 + i * 16, 4, 4);
    }

    for (i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 99, 4, 4);
    }

    ctx.beginPath();
    ctx.moveTo(83, 116);
    ctx.lineTo(83, 102);
    ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
    ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
    ctx.lineTo(111, 116);
    ctx.lineTo(106.333, 111.333);
    ctx.lineTo(101.666, 116);
    ctx.lineTo(97, 111.333);
    ctx.lineTo(92.333, 116);
    ctx.lineTo(87.666, 111.333);
    ctx.lineTo(83, 116);
    ctx.fill();

    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(91, 96);
    ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
    ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
    ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
    ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
    ctx.moveTo(103, 96);
    ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
    ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
    ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
    ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
    ctx.fill();

    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();
  }
}

// 角丸の四角形を描画するためのユーティリティ関数

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}
```

以下の様な表示結果となります。

{{EmbedLiveSample("Making_combinations", 160, 160, "combinations.png")}}

実際には驚くほど簡単なので、ここでは詳しく説明しません。最も重要なことは、描画コンテキストで `fillStyle` プロパティを使用することと、ユーティリティ関数（この場合は `roundedRect()`）を使用することです。ユーティリティ関数を使用すると、必要なコードの量や複雑さを減らすことができ、とても便利です。

このチュートリアルの後半で、 `fillStyle` について、より詳しく見ていきます。ここでは、パスの塗りつぶし色を既定の黒から白に変更し、また元に戻すために使用しているだけです。

## Path2D オブジェクト

最後の例で見たように、オブジェクトを描くための一連のパスや描画コマンドをキャンバスに置くことができます。コードをシンプルにしてパフォーマンスを向上させるために最近の版のブラウザーで使用できる {{domxref("Path2D")}} オブジェクトは、描画コマンドをキャッシュあるいは記録することを可能にしています。これにより、パスをすばやく再実行できます。 `Path2D` オブジェクトの構築方法を見ていきましょう。

- {{domxref("Path2D.Path2D", "Path2D()")}}
  - : **`Path2D()`** コンストラクターは、新たにインスタンス化した `Path2D` オブジェクトを返します。任意で引数として別のパス、あるいは [SVG パス](/ja/docs/Web/SVG/Tutorial/Paths)データを構成する文字列を指定できます（コピーを作成）。

```js
new Path2D();     // 空のパスオブジェクトを作成する
new Path2D(path); // 別の Path2D オブジェクトを複製する
new Path2D(d);    // SVG パスデータからパスを作成する
```

これまで見てきたすべての[パスメソッド](/ja/docs/Web/API/CanvasRenderingContext2D#paths)、`moveTo`、`rect`、`arc`、`quadraticCurveTo` などを、 `Path2D` オブジェクトで使用することができます。

また `Path2D` API には、パスを結合するための `addPath` メソッドが追加されています。これは、複数の部品を組み合わせてオブジェクトを構築したい場合などに役立ちます。

- {{domxref("Path2D.addPath", "Path2D.addPath(path [, transform])")}}
  - : 現在のパスに、変換行列（任意指定）とともに、パスを追加します。

### Path2D の例

この例では、矩形と円を作成します。どちらも `Path2D` オブジェクトとして保存しており、後で使用することができます。新たな `Path2D` API に合わせて、いくつかのメソッドが現在のパスに代わり任意で `Path2D` を受け入れられるように更新されました。ここでは、キャンバスに両方のオブジェクトを描くため、 1 つの path 引数を `stroke` および `fill` で使用しています。

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="130" height="100"></canvas>
 </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    var rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    var circle = new Path2D();
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctx.stroke(rectangle);
    ctx.fill(circle);
  }
}
```

{{EmbedLiveSample("Path2D_example", 130, 110, "path2d.png")}}

### SVG パスの使用

キャンバスの新たな `Path2D` API の、もうひとつの強力な機能が、 [SVG パスデータ](/ja/docs/Web/SVG/Tutorial/Paths)を使用してキャンバスのパスを初期化ができることです。これにより、パスデータを SVG キャンバスの両方で使い回すことができるようになります。

このパスはある点に移動して (`M10 10`) 、そこから右へ水平に 80 ポイント移動 (`h 80`)、下へ 80 ポイント移動 (`v 80`) 、 80 ポイント 左へ移動 (`h -80`) 、そして始点へ戻ります (`z`)。この例は [`Path2D` コンストラクター](/ja/docs/Web/API/Path2D/Path2D#using_svg_paths)のページで確認できます。

```js
var p = new Path2D('M10 10 h 80 v 80 h -80 Z');
```

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}
