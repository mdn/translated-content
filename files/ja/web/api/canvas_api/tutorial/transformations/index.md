---
title: 座標変換
slug: Web/API/Canvas_API/Tutorial/Transformations
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Using_images", "Web/API/Canvas_API/Tutorial/Compositing")}}

これまでのチュートリアルで、[キャンバスのグリッド](/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)や**座標空間**について学びました。今までは既定のグリッドしか使用しておらず、また必要に応じてキャンバス全体のサイズを変更していました。座標変換 (transformations) には、原点を別の場所に移したり、回転したり、拡大縮小したりといった、より強力な手段があります。

## 状態の保存と復元

座標変換のメソッドを見ていく前に、より複雑な描画を始めたときに不可欠になメソッドを 2 つ見ておきましょう。

- {{domxref("CanvasRenderingContext2D.save", "save()")}}
  - : キャンバス全体の状態を保存します。
- {{domxref("CanvasRenderingContext2D.restore", "restore()")}}
  - : 直近に保存したキャンバスの状態を復元します。

キャンバスの状態は、スタックに保存されます。 `save()` メソッドを呼び出すたびに、現在の描画状態をスタックにプッシュします。描画状態は以下の情報で構成されます。

- 適用された座標変換操作 (すなわち、後述する `translate`、`rotate`、`scale`)。
- {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}、{{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}、{{domxref("CanvasRenderingContext2D.globalAlpha", "globalAlpha")}}、{{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth")}}、{{domxref("CanvasRenderingContext2D.lineCap", "lineCap")}}、{{domxref("CanvasRenderingContext2D.lineJoin", "lineJoin")}}、{{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit")}}、{{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset")}}、{{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}}、{{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}}、{{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}、{{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}}、{{domxref("CanvasRenderingContext2D.globalCompositeOperation", "globalCompositeOperation")}}、{{domxref("CanvasRenderingContext2D.font", "font")}}、{{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}、{{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}}、{{domxref("CanvasRenderingContext2D.direction", "direction")}}、{{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}} 属性の現在の値。
- 現在の[クリッピングパス](/ja/docs/Web/API/Canvas_API/Tutorial/Compositing#Clipping_paths)。これは次の章で説明します。

`save()` メソッドは、何回でも呼び出すことができます。`restore()` メソッドを呼び出すたびに、最後に保存された状態をスタックからポップして、すべての保存済み設定を復元します。

### `save` および `restore` の例

この例は、連続した一連の矩形を描画するときに、描画状態のスタックがどのように機能するかを示します。

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.fillRect(0, 0, 150, 150);   // 既定の設定で矩形を描画
  ctx.save();                  // 既定の状態を保存

  ctx.fillStyle = '#09F';      // 設定変更
  ctx.fillRect(15, 15, 120, 120); // 新たな設定で矩形を描画

  ctx.save();                  // 現在の状態を保存
  ctx.fillStyle = '#FFF';      // 設定変更
  ctx.globalAlpha = 0.5;
  ctx.fillRect(30, 30, 90, 90);   // 新たな設定で矩形を描画

  ctx.restore();               // 以前の状態を復元
  ctx.fillRect(45, 45, 60, 60);   // 復元した設定で矩形を描画

  ctx.restore();               // 以前の状態を復元
  ctx.fillRect(60, 60, 30, 30);   // 復元した設定で矩形を描画
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

最初のステップで、大きな矩形を既定の設定で描きます。次にこの状態を保存して、塗りつぶし色を変更します。そして、 2 番目のやや小さい青色の矩形を描いて、状態を保存します。もう一度描画設定を変更して、 3 番目の半透明な白色の矩形を描きます。

ここまでは、これまでの章で行ってきたことによく似ています。しかし最初に `restore()` 文を呼び出したとき、スタックの先頭の描画状態が削除されて、その設定が復元されます。`save()` を使用して状態を保存しなければ、前の状態に戻すために塗りつぶし色や透過性を手動で変更しなければなりません。ここではプロパティが 2 つであり容易ですが、プロパティが多ければコードが一気にとても長くなります。

2 番目の `restore()` 文を呼び出すと、元の状態（1 番目の `save` を呼び出す前に設定した状態）を復元して、最後の矩形を再び黒色で描きます。

{{EmbedLiveSample("A_save_and_restore_canvas_state_example", "180", "180", "canvas_savestate.png")}}

## 移動

最初の座標変換メソッドとして、`translate()` を見ていきましょう。このメソッドは、キャンバスおよびその原点をグリッド内の別の場所に移動するために使用されます。

- {{domxref("CanvasRenderingContext2D.translate", "translate(x, y)")}}
  - : キャンバスやその原点をグリッド上で移動します。`x` は水平方向の移動距離、`y` はグリッドを垂直方向の移動距離を示します。

![](canvas_grid_translate.png)

座標変換を行う前にキャンバスの状態を保存しておくことは、よいアイデアです。ほとんどの場合、元の状態に戻すためには逆の座標変換を行うよりも `restore` メソッドを呼び出すほうが簡単です。また、ループ内で座標変換を行っているときにキャンバスの状態の保存や復元を行わなければ、キャンバスの端の外側に描画することになり、描いたものの一部を失ってしまうかもしれません。

### `translate` の例

この例は、キャンバスの原点を移動する利点をいくつか示しています。 `translate()` メソッドを使用しなければ、すべての矩形が同じ位置 (0,0) に描かれます。また `translate()` によって、 `fillRect()` 関数で座標を手動で調整する必要なく、どこにでも自由に矩形を置くことができます。これにより若干理解しやすく、また使いやすくなります。

`draw()` 関数で、`for` ループを使用して `fillRect()` 関数を 9 回呼び出しています。それぞれのループで canvas を移動して矩形を描き、その後に元の状態を復元します。描画位置を調節する `translate()` を頼って、`fillRect()` は毎回同じ座標を使用していることに注目してください。

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      ctx.save();
      ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';
      ctx.translate(10 + j * 50, 10 + i * 50);
      ctx.fillRect(0, 0, 25, 25);
      ctx.restore();
    }
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_translate_example", "160", "160", "translate.png")}}

## 回転

2 番目の座標変換メソッドは `rotate()` です。現在の原点を中心にしてキャンバスを回転させるために使用します。

- {{domxref("CanvasRenderingContext2D.rotate", "rotate(angle)")}}
  - : 現在の原点を中心にしてラジアンで示した `angle` の分、キャンバスを時計回りに回転します。

![](canvas_grid_rotate.png)

回転の中心は、常にキャンバスの原点です。中心を変更するには、`translate()` メソッドを使用してキャンバスを移動しなければなりません。

### `rotate` の例

この例は、まずはキャンバスの原点で矩形を回転するために `rotate()` メソッドを使用して、次に矩形自身の中心で回転するために `translate()` の助けを借りています。

> **メモ:** 角度はラジアン (radians) で表しており、度数 (degrees) ではありません。これは `radians = (Math.PI/180)*degrees` のようにすると変換できます。

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // 左の矩形を canvas の原点で回転する
  ctx.save();
  // 青い矩形
  ctx.fillStyle = '#0095DD';
  ctx.fillRect(30, 30, 100, 100);
  ctx.rotate((Math.PI / 180) * 25);
  // 灰色の矩形
  ctx.fillStyle = '#4D4E53';
  ctx.fillRect(30, 30, 100, 100);
  ctx.restore();

  // 右の矩形を矩形の中心で回転する
  // draw blue rect
  ctx.fillStyle = '#0095DD';
  ctx.fillRect(150, 30, 100, 100);

  ctx.translate(200, 80); // 矩形の中心に移動する
                          // x = x + 0.5 * 幅
                          // y = y + 0.5 * 高さ
  ctx.rotate((Math.PI / 180) * 25); // 回転する
  ctx.translate(-200, -80); // 元の位置に移動する

  // 灰色の矩形を描く
  ctx.fillStyle = '#4D4E53';
  ctx.fillRect(150, 30, 100, 100);
}
```

矩形を中心で回転するために、キャンバスを矩形の中心へ移動した後にキャンバスを回転しています。そして canvas を 0,0 へ移動した後に矩形を描きます。

```html hidden
<canvas id="canvas" width="300" height="200"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_rotate_example", "310", "210", "rotate.png")}}

## 拡大縮小

次の座標変換メソッドは拡大縮小です。キャンバスのグリッドの単位を増減するために使用します。これは、図形やビットマップを縮小または拡大して描くために使用できます。

- {{domxref("CanvasRenderingContext2D.scale", "scale(x, y)")}}
  - : キャンバスの単位を x （水平方向）または y （垂直方向）で指定した分拡大縮小します。どちらの引数も実数です。1.0 より小さい値は単位あたりのサイズが減少、1.0 より大きい値は単位あたりのサイズが増加します。1.0 では単位あたりのサイズが変わりません。

負数を使用すると軸を反転できます（例えば `translate(0,canvas.height); scale(1,-1);` で、原点が左下の隅にある有名なデカルト座標系になります）。

既定では、キャンバスの 1 単位は 1 ピクセルとまったく同じです。例えば、拡大率に 0.5 を適用すると 1 単位が 0.5 ピクセルになり、図形が半分のサイズで描かれます。同様に拡大率を 2.0 に設定すると単位あたりのサイズが増えて、1 単位あたり 2 ピクセルになります。この結果、図形は 2 倍の大きさで描かれます。

### `scale` の例

この例は、図形をさまざまな拡大率で描きます。

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // シンプルな図形を描いて、拡大する
  ctx.save();
  ctx.scale(10, 3);
  ctx.fillRect(1, 10, 10, 10);
  ctx.restore();

  // 水平方向に反転する
  ctx.scale(-1, 1);
  ctx.font = '48px serif';
  ctx.fillText('MDN', -135, 120);
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_scale_example", "160", "160", "scale.png")}}

## 座標変換

最後に、以下の座標変換メソッドでは、変換行列によって直接変更を行うことができます。

- {{domxref("CanvasRenderingContext2D.transform", "transform(a, b, c, d, e, f)")}}

  - : 引数で表した行列と、現在の変換行列で乗算を行います。変換行列は以下のとおりです。

    <math><semantics><mrow><mo>[</mo><mtable columnalign="center center center" rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left[ \begin{array}{ccc} a &#x26; c &#x26; e \\ b &#x26; d &#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{array} \right]</annotation></semantics></math>

  - : いずれかの引数が [`Infinity`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Infinity) になる場合は、メソッドで例外を発生させないように行列を infinite としてマークしなければなりません。

この関数の引数は以下のとおりです。

- `a (m11)`
  - : 水平方向の拡大。
- _`b (m12)`_
  - : 水平方向の歪み。
- `c (m21)`
  - : 垂直方向の歪み。
- `d (m22)`
  - : 垂直方向の拡大。
- `e (dx)`
  - : 水平方向の移動。
- `f (dy)`
  - : 垂直方向の移動。
- {{domxref("CanvasRenderingContext2D.setTransform", "setTransform(a, b, c, d, e, f)")}}
  - : 現在の座標変換を単位行列にリセットして、同じ引数で `transform()` メソッドを呼び出します。これは基本的に、現在の座標変換をアンドゥしてから指定した座標変換を行う操作を一度に行うものです。
- {{domxref("CanvasRenderingContext2D.resetTransform", "resetTransform()")}}
  - : 現在の座標変換を単位行列にリセットします。これは `ctx.setTransform(1, 0, 0, 1, 0, 0);` を呼び出すことと同じです。

### `transform` と `setTransform` の例

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  var sin = Math.sin(Math.PI / 6);
  var cos = Math.cos(Math.PI / 6);
  ctx.translate(100, 100);
  var c = 0;
  for (var i = 0; i <= 12; i++) {
    c = Math.floor(255 / 12 * i);
    ctx.fillStyle = 'rgb(' + c + ', ' + c + ', ' + c + ')';
    ctx.fillRect(0, 0, 100, 10);
    ctx.transform(cos, sin, -sin, cos, 0, 0);
  }

  ctx.setTransform(-1, 0, 0, 1, 100, 100);
  ctx.fillStyle = 'rgba(255, 128, 255, 0.5)';
  ctx.fillRect(0, 50, 100, 100);
}
```

```html hidden
<canvas id="canvas" width="200" height="250"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("Example_for_transform_and_setTransform", "230", "280", "canvas_transform.png")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Using_images", "Web/API/Canvas_API/Tutorial/Compositing")}}
