---
title: スタイルと色の適用
slug: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
tags:
  - キャンバス
  - グラフィック
  - HTML
  - HTML5
  - 中級者
  - チュートリアル
translation_of: Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
original_slug: Web/Guide/HTML/Canvas_tutorial/Applying_styles_and_colors
---
{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}

[図形の描画](/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)についての章では、既定の線と塗りつぶしのスタイルのみを使用しました。ここでは、私たちの絵を少しでも魅力的にするために、自由に使えるキャンバスのオプションについて探っていきます。色、線のスタイル、グラデーション、パターン、影を追加する方法を学びます。

## 色

今までは、描画コンテキストのメソッドだけを見てきました。もし、図形に色をつけたいのであれば、 2 つの重要なプロパティを使用することができます。 `fillStyle` と `strokeStyle` です。

- {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle = color")}}
  - : 図形を塗りつぶす際に使用するスタイルを設定します。
- {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle = color")}}
  - : 図形の輪郭のスタイルを設定します。

`color` は文字列で、 CSS の {{cssxref("&lt;color&gt;")}} やグラデーションオブジェクト、パターンオブジェクトを表します。グラデーションオブジェクトとパターンオブジェクトについては後で見ます。既定では、輪郭線と塗りつぶしの色は黒に設定されています（CSS 色では`#000000`）。

> **Note:** `strokeStyle` および `fillStyle` プロパティを設定すると、その設定した値が既定となって、それ以降に描かれる図形の線や塗りつぶしはその色で行なわれるようになります。それぞれの図形をそれぞれ別の色で描きたい場合は、図形を描くごとに `fillStyle` や `strokeStyle` プロパティを設定する必要があります。

入力できる有効な文字列は、 CSS の {{cssxref("&lt;color&gt;")}} 値である必要があります。 下記の例では同じ色について説明しています。

```js
// これらは全て fillStyle にオレンジ色を設定します

ctx.fillStyle = 'orange';
ctx.fillStyle = '#FFA500';
ctx.fillStyle = 'rgb(255, 165, 0)';
ctx.fillStyle = 'rgba(255, 165, 0, 1)';
```

### `fillStyle` の例

この例では、再び 2 つの `for` ループを使って、それぞれ異なる色の矩形を格子状に描画しています。出来上がった画像はスクリーンショットのようなものになるはずです。ここでは、あまり派手なことはしていません。 2 つの変数 `i` と `j` を使ってそれぞれの正方形に固有の RGB カラーを生成し、赤と緑の値だけを変更します。青チャンネルは固定値です。チャンネルを変更することで、あらゆる種類のパレットを生成することができます。ステップを増やせば、 Photoshop が使っているカラーパレットに近いものを実現することも可能です。

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ', ' +
                       Math.floor(255 - 42.5 * j) + ', 0)';
      ctx.fillRect(j * 25, i * 25, 25, 25);
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

結果は次のようになります。

{{EmbedLiveSample("A_fillStyle_example", 160, 160, "canvas_fillstyle.png")}}

### `strokeStyle` の例

この例は上の例と似ていますが、 `strokeStyle` プロパティを使って、図形の輪郭の色を変えています。また、 `arc()` メソッドを使って、四角形の代わりに円を描いています。

```js
  function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');
    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 6; j++) {
        ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * i) + ', ' +
                         Math.floor(255 - 42.5 * j) + ')';
        ctx.beginPath();
        ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
        ctx.stroke();
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

結果は次のようになります。

{{EmbedLiveSample("A_strokeStyle_example", "180", "180", "canvas_strokestyle.png")}}

## 透明度

キャンバスには不透明な図形を描くだけではなく、半透明の図形を描くこともできます。これは、 `globalAlpha` プロパティを設定するか、輪郭や塗りつぶしのスタイルに半透明の色を割り当てることで実現します。

- {{domxref("CanvasRenderingContext2D.globalAlpha", "globalAlpha = transparencyValue")}}
  - : 代入された透明度の値を、代入後にキャンバスに描画されるすべての図形に適用します。値は 0.0 （完全に透明）から 1.0 （完全に不透明）の間でなければなりません。既定では 1.0 （完全に不透明）が設定されています。

`globalAlpha` プロパティは、同様の透明度でキャンバスにいくつもの図形を描画する場合に役に立ちますが、それ以外の場合は、色を設定するときにそれぞれの図形に透明度を設定する方が一般的に便利です。

`strokeStyle` プロパティと `fillStyle` プロパティは CSS の rgba 表現を利用できるため、次のような表記を使用して透明な色を割り当てることもできます。

```js
// 輪郭線と塗りつぶしの色に透明色を割り当てる

ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)';
ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
```

`rgba()` 関数は `rgb()` 関数によく似ていますが、 1 つ引数が増えます。最後の引数には、この色の透明度の値を設定します。有効な値の範囲は、 0.0 （完全に透明）から 1.0 （完全に不透明）です。

### `globalAlpha` の例

この例では、 4 つの異なる色の正方形で背景を描きます。その上に、一連の半透明の円を描きます。このとき、 `globalAlpha` プロパティは `0.2` に設定され、これ以降すべての図形に使用されます。 `for` ループのそれぞれのステップでは、半径の大きな円を描画します。最終的な結果は放射状のグラデーションになります。より多くの円を重ねることで、すでに描かれている円の透明度を効果的に下げています。ステップ数を増やし、より多くの円を描くと、画像の中心から背景が完全に消えます。

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  // draw background
  ctx.fillStyle = '#FD0';
  ctx.fillRect(0, 0, 75, 75);
  ctx.fillStyle = '#6C0';
  ctx.fillRect(75, 0, 75, 75);
  ctx.fillStyle = '#09F';
  ctx.fillRect(0, 75, 75, 75);
  ctx.fillStyle = '#F30';
  ctx.fillRect(75, 75, 75, 75);
  ctx.fillStyle = '#FFF';

  // set transparency value
  ctx.globalAlpha = 0.2;

  // Draw semi transparent circles
  for (var i = 0; i < 7; i++) {
    ctx.beginPath();
    ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
    ctx.fill();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_globalAlpha_example", "180", "180", "canvas_globalalpha.png")}}

### `rgba()` の使用例

この 2 つ目の例では、上の例と似たようなことをしていますが、円を重ねて描くのではなく、小さな長方形を不透明度を上げながら描いています。 `rgba()` を使うと、塗りつぶしと輪郭線のスタイルを個別に設定できるので、もう少し制御と柔軟性が増します。

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // Draw background
  ctx.fillStyle = 'rgb(255, 221, 0)';
  ctx.fillRect(0, 0, 150, 37.5);
  ctx.fillStyle = 'rgb(102, 204, 0)';
  ctx.fillRect(0, 37.5, 150, 37.5);
  ctx.fillStyle = 'rgb(0, 153, 255)';
  ctx.fillRect(0, 75, 150, 37.5);
  ctx.fillStyle = 'rgb(255, 51, 0)';
  ctx.fillRect(0, 112.5, 150, 37.5);

  // Draw semi transparent rectangles
  for (var i = 0; i < 10; i++) {
    ctx.fillStyle = 'rgba(255, 255, 255, ' + (i + 1) / 10 + ')';
    for (var j = 0; j < 4; j++) {
      ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
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

{{EmbedLiveSample("An_example_using_rgba", "180", "180", "canvas_rgba.png")}}

## 線のスタイル

線のスタイル付けを可能にするプロパティがいくつかあります。

- {{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth = value")}}
  - : これから描かれる線の幅を設定します。
- {{domxref("CanvasRenderingContext2D.lineCap", "lineCap = type")}}
  - : 線の末端の外観を設定します。
- {{domxref("CanvasRenderingContext2D.lineJoin", "lineJoin = type")}}
  - : 線と線が交わる「角」の外観を設定します。
- {{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit = value")}}
  - : 2 本の線が鋭角に接合する際のマイターを制限し、接合部の太さを制御することができます。
- {{domxref("CanvasRenderingContext2D.getLineDash", "getLineDash()")}}
  - : 非負の偶数個を含む現在の線ダッシュのパターンの配列を返します。
- {{domxref("CanvasRenderingContext2D.setLineDash", "setLineDash(segments)")}}
  - : 現在の線ダッシュパターンを設定します。
- {{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset = value")}}
  - : ダッシュ配列の行頭位置を指定します。

以下の例をご覧いただくと、これらが何をするものなのか、より理解していただけると思います。

### `lineWidth` の例

このプロパティは、現在の線の太さを設定します。値は正の数でなければなりません。既定では、この値は 1.0 単位に設定されています。

線の幅は、与えられたパスを中心としたストロークの太さです。言い換えれば、描画される領域はパスの両側で線幅の半分まで広がります。キャンバスの座標はピクセルを直接参照するわけではないので、水平・垂直方向の線が鮮明になるように特別な注意を払う必要があります。

下の例では、 10 本の直線を線幅を大きくして描いています。一番左の線の幅は 1.0 単位です。しかし、一番左の線とその他の奇数幅の太い線は、パスの位置の関係で鮮明に表示されません。

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  for (var i = 0; i < 10; i++) {
    ctx.lineWidth = 1 + i;
    ctx.beginPath();
    ctx.moveTo(5 + i * 14, 5);
    ctx.lineTo(5 + i * 14, 140);
    ctx.stroke();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_lineWidth_example", "180", "180", "canvas_linewidth.png")}}

鮮明な線を得るには、パスがどのように描かれるかを理解する必要があります。下の画像で、グリッドはキャンバスの座標グリッドを表しています。グリッド線とグリッド線の間の矩形は、画面上の実際のピクセルです。下の最初のグリッド画像では、 (2,1) から (5,5) までの矩形が塗りつぶされています。その間の領域（薄赤色）はすべてピクセルの境界線に当たるので、塗りつぶされた矩形は鮮明なエッジを持つことになります。

![](canvas-grid.png)

(3,1) から (3,5) までのパスを線の太さを `1.0` にして考えてみると、 2 番目の画像のような状況になります。実際に塗りつぶされる領域（濃い青色）は、パスの両側のピクセルの半分までしか届きません。この近似値をレンダリングしなければならないので、これらのピクセルは部分的にしかシェーディングされず、その結果、領域全体（水色と濃紺）が実際のストローク色の半分の濃さでしか塗りつぶされないことになります。これは、前の例のコードで `1.0` の幅の行で起こることです。

これを解決するには、パスの作成を非常に正確に行う必要があります。 `1.0` の幅の線はパスの両側へ半単位伸びることを知っていて、パスを (3.5,1) から (3.5,5) まで作成すると、 3 番目の画像のような状況になります。 `1.0` の線幅は完全に、正確に 1 ピクセルの縦線を埋めることになります。

> **Note:** 縦線の例では、 Y 位置はまだ整数のグリッド線位置を参照していることに注意してください。もしそうでなければ、端点で半分しかカバーしていないピクセルが見えるでしょう（ただし、この動作は、既定値が `butt` である現在の `lineCap` スタイルに依存していることにも注意してください。奇数幅の線に対して半ピクセル座標で一貫したストロークを計算するには、 `lineCap` スタイルを `square` にして、端点周りのストロークの外枠が自動的にピクセル全体を正確に覆うまで拡張します）。
>
> また、パスの始点と終点のみが影響を受けることに注意してください。パスが `closePath()` で閉じられると、始点と終点がなくなります。その代わりに、パスのすべての端点は、現在の `lineJoin` スタイルの設定（既定値は `miter`）を使用して、接続された区間の外側の境界線をそれらの交点まで自動的に拡張する効果があり、レンダリングストロークは、接続された区間が水平または垂直である場合にそれぞれの端点を中心としたピクセル全体を正確に覆うようになります。これらの追加ラインスタイルのデモについては、次の 2 つのセクションを参照してください。

偶数幅の線は、それぞれの半分が整数のピクセルになるので、ピクセルの真ん中ではなく、ピクセルとピクセルの間（つまり (3,1) から (3,5)）にパスを設定する必要があります。

拡大縮小可能な二次元グラフィックを扱う最初のうちは少し面倒ですが、ピクセルグリッドとパスの位置に注意することで、拡大状況やその他の座標変換に関係なく、描画を正しく表示することができます。正しい位置に描かれた幅 1.0 の縦線は、 2 倍に拡大すると 2 ピクセルの鮮明な線となり、正しい位置に表示されます。

### `lineCap` の例

`lineCap` プロパティは、すべての線の端点がどのように描かれるかを決定します。このプロパティには3つの値があり、それらは `butt`, `round`, `quare` です。既定では、このプロパティは `butt` に設定されています。

- `butt`
  - : 線の両端は、末尾の点で四角く切り落とされます。
- `round`
  - : 線の両端は丸められます。
- `square`
  - : 線の両端は、線の太さと同じ幅と半分の高さのボックスを追加して四角くされます。

この例では、 3 本の線を描きます。それぞれの線は `lineCap` プロパティの値が異なっています。また、 3 つの正確な違いを見るために、 2 つのガイドを追加しました。それぞれの線は、これらのガイドの上で正確に始まり、終わります。

左側の線は、既定の `butt` オプションを使用しています。ガイドと完全に同じ高さに描かれているのがわかると思います。 2 番目の線は `round` オプションを使うように設定されています。これは線の幅の半分の半径を持つ半円を端に追加します。右の線は `square` オプションを使用しています。これは線の太さと同じ幅と半分の高さのボックスを追加します。

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var lineCap = ['butt', 'round', 'square'];

  // ガイドを描画
  ctx.strokeStyle = '#09f';
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(140, 10);
  ctx.moveTo(10, 140);
  ctx.lineTo(140, 140);
  ctx.stroke();

  // 線を描画
  ctx.strokeStyle = 'black';
  for (var i = 0; i < lineCap.length; i++) {
    ctx.lineWidth = 15;
    ctx.lineCap = lineCap[i];
    ctx.beginPath();
    ctx.moveTo(25 + i * 50, 10);
    ctx.lineTo(25 + i * 50, 140);
    ctx.stroke();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_lineCap_example", "180", "180", "Canvas_linecap.png")}}

### `lineJoin` の例

`lineJoin` プロパティは、形状内の長さがゼロでない 2 つの接続された区間（直線、円弧、曲線）をどのように結合するかを決定します（長さがゼロで、指定した端点と制御点が正確に同じ位置にある区間はスキップされます）。

このプロパティには、 3 つの値があります。このプロパティには、 `round`, `bevel`, `miter` の 3 つの値があります。既定では、このプロパティは `miter` に設定されています。なお、`lineJoin` の設定は、接続された 2 つの区間の方向が同じである場合には、接合領域が追加されないため、何の効果もありません。

- `round`
  - : 接続された区間の共通の端点を中心とする円盤の追加セクターを埋めることによって、形状の角を丸くします。この丸められた角の半径は、線幅の半分に等しくなります。
- `bevel`
  - : 接続された区間の共通の端点と、各区間にある個別の外側の長方形の角との間の三角形の領域を追加で埋めます。
- `miter`
  - : 接続された区間は、外側のエッジを延長して 1 点で接続され、追加のロゼンジ形状の領域を埋める効果があります。この設定は、以下に説明する `miterLimit` プロパティによって影響されます。

以下の例では、これら3つの `lineJoin` プロパティ設定をそれぞれ実演しながら、 3 つの異なるパスを描画しています。

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var lineJoin = ['round', 'bevel', 'miter'];
  ctx.lineWidth = 10;
  for (var i = 0; i < lineJoin.length; i++) {
    ctx.lineJoin = lineJoin[i];
    ctx.beginPath();
    ctx.moveTo(-5, 5 + i * 40);
    ctx.lineTo(35, 45 + i * 40);
    ctx.lineTo(75, 5 + i * 40);
    ctx.lineTo(115, 45 + i * 40);
    ctx.lineTo(155, 5 + i * 40);
    ctx.stroke();
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_lineJoin_example", "180", "180", "Canvas_linejoin.png")}}

### `miterLimit` プロパティのデモ

前の例で見たように、 `miter` オプションを使って 2 本の線をつなぐと、2 本の線の外側の端は、それらが出会う点まで延長されます。互いに大きな角度を持つ線の場合、この点は内側の接続点からそう遠くないところにあります。しかし、各ライン間の角度が小さくなるにつれて、これらのポイント間の距離（マイター長）は指数関数的に増加します。

`miterLimit` プロパティは、内側の接続点から外側の接続点をどれだけ遠くに配置できるかを決定します。もし、 2 本の線がこの値を超えた場合、代わりにベベルジョイントが描かれます。最大マイター長は、現在の座標系で測定された線の幅と、この `miterLimit` プロパティの値（既定値は HTML の {{HTMLElement("canvas") }} の 10.0）の積であることに注意してください。したがって `miterLimit` は現在の表示スケールやパスのアフィン変換とは独立して設定できます。それは、線の端の効果的なレンダリングの形状にのみ影響するものです。

より正確には、マイター制限とは、線幅の半分に対する延長長さ（HTML キャンバスでは、線の接続端の外側の角と、パスで指定した接続セグメントの共通の端点の間で測ります）の最大許容比率のことです。これは同様に、線幅全体に対する、辺の接合部の内側と外側の点間の距離の最大許容比率と定義することもできます。これは、接続セグメントの最小内角の半分の正接に等しく、それ以下ではマイター結合は描画されず、ベベル結合のみが描画されます。

- `miterLimit` = **max** `miterLength` / `lineWidth` = 1 / **sin** ( **min** _θ_ / 2 )
- 既定のマイター制限 10.0 は、約 11 度以下の鋭角のマイターをすべて解除します。
- マイター制限を √2 ≈ 1.4142136（切り上げ）とすると、すべての鋭角に対してマイターを剥がし、鈍角または直角に対してのみマイター結合を維持することができます。
- マイター制限を 1.0 に設定すると有効ですが、すべてのマイターが無効になります。
- 1.0 以下の値はマイター制限では無効です。

ここでは、 `miterLimit` を動的に設定し、それがキャンバス上の図形にどのように影響するかを見るための小さなデモを紹介します。青い線は、ジグザグ模様の各線の始点と終点を示しています。

もし `miterLimit` の値を 4 以下で指定した場合。 10 以上の `miterLimit` を指定すると、このデモのほとんどのコーナーは青い線から遠く離れたところでマイターで結合し、左から右へ角度を大きくして接続するため、コーナーの高さが減少するはずです。中間の値では、左側のコーナーは青い線の近くでベベルで結合し、右側のコーナーはマイターを延長（これも高さが減少する）するだけです。

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // キャンバスを消去
  ctx.clearRect(0, 0, 150, 150);

  // ガイドを描画
  ctx.strokeStyle = '#09f';
  ctx.lineWidth   = 2;
  ctx.strokeRect(-5, 50, 160, 50);

  // 線のスタイルを設定
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 10;

  // 入力をチェック
  if (document.getElementById('miterLimit').value.match(/\d+(\.\d+)?/)) {
    ctx.miterLimit = parseFloat(document.getElementById('miterLimit').value);
  } else {
    alert('Value must be a positive number');
  }

  // 線を描画
  ctx.beginPath();
  ctx.moveTo(0, 100);
  for (i = 0; i < 24 ; i++) {
    var dy = i % 2 == 0 ? 25 : -25;
    ctx.lineTo(Math.pow(i, 1.5) * 2, 75 + dy);
  }
  ctx.stroke();
  return false;
}
```

```html hidden
<table>
  <tr>
    <td><canvas id="canvas" width="150" height="150"></canvas></td>
    <td><code>miterLimit</code> を変更するには、下に新しい値を入力し、再描画ボタンをクリックしてください。<br><br>
      <form onsubmit="return draw();">
        <label>マイター制限</label>
        <input type="number" size="3" id="miterLimit"/>
        <input type="submit" value="Redraw"/>
      </form>
    </td>
  </tr>
</table>
```

```js hidden
document.getElementById('miterLimit').value = document.getElementById('canvas').getContext('2d').miterLimit;
draw();
```

{{EmbedLiveSample("A_demo_of_the_miterLimit_property", "400", "180", "canvas_miterlimit.png")}}

### 線ダッシュの使用

`setLineDash` メソッドと `lineDashOffset` プロパティは直線のダッシュパターンを指定します。`setLineDash` メソッドは、線と隙間を交互に描く距離を指定する数値のリストを受け取り、`lineDashOffset` プロパティはパターンを開始するオフセットを設定します。

この例では、蟻の行進のような効果を作成しています。これは、コンピュータグラフィックスプログラムの選択ツールでよく見られるアニメーション技術です。境界線をアニメーション化することで、ユーザーが画像の背景と選択範囲の境界線を区別するのに役立ちます。このチュートリアルの後半では、この方法とその他の[基本的なアニメーション](/ja/docs/Web/API/Canvas_API/Tutorial/Basic_animations)を行う方法を学習することができます。

```html hidden
<canvas id="canvas" width="110" height="110"></canvas>
```

```js
var ctx = document.getElementById('canvas').getContext('2d');
var offset = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setLineDash([4, 2]);
  ctx.lineDashOffset = -offset;
  ctx.strokeRect(10, 10, 100, 100);
}

function march() {
  offset++;
  if (offset > 16) {
    offset = 0;
  }
  draw();
  setTimeout(march, 20);
}

march();
```

{{EmbedLiveSample("Using_line_dashes", "120", "120", "marching-ants.png")}}

## グラデーション

通常の描画プログラムと同様に、線形、放射、扇形グラデーションを用いて図形を塗りつぶしたり描画したりすることができます。以下のメソッドのいずれかを使用して {{domxref("CanvasGradient")}} オブジェクトを作成します。そして、このオブジェクトを `fillStyle` または `strokeStyle` プロパティに代入することができます。

- {{domxref("CanvasRenderingContext2D.createLinearGradient", "createLinearGradient(x1, y1, x2, y2)")}}
  - : 線形グラデーションオブジェクトを、 (`x1`, `y1`) の点から始まり (`x2`, `y2`) の点から終える位置に生成します。
- {{domxref("CanvasRenderingContext2D.createRadialGradient", "createRadialGradient(x1, y1, r1, x2, y2, r2)")}}
  - : 放射グラデーションを生成します。引数は 2 つの円を表します。一つは (`x1`, `y1`) が中心で `r1` が半径、もう一つは (`x2`, `y2`) が中心で `r2` が半径です。
- {{domxref("CanvasRenderingContext2D.createConicGradient", "createConicGradient(angle, x, y)")}}
  - : 扇形グラデーションオブジェクトを、ラジアンの開始角 `angle`、位置を (`x`, `y`) で生成します。

例を示します。

```js
var lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
var radialgradient = ctx.createRadialGradient(75, 75, 0, 75, 75, 100);
```

`CanvasGradient` オブジェクトを作成したら、 `addColorStop()` メソッドを使って色を割り当てることができます。

- {{domxref("CanvasGradient.addColorStop", "gradient.addColorStop(position, color)")}}
  - : `gradient` オブジェクトに新しい色経由点を作成します。また、 `color` 引数は CSS の {{cssxref("&lt;color&gt;")}} を表す文字列である必要があり、グラデーションがそのオフセットで到達すべき色を表します。

グラデーションには、必要なだけ色経由点を追加することができます。以下は、白から黒へ非常にシンプルな線形グラデーションです。

```js
var lineargradient = ctx.createLinearGradient(0, 0, 150, 150);
lineargradient.addColorStop(0, 'white');
lineargradient.addColorStop(1, 'black');
```

### `createLinearGradient` の例

この例では、 2 つの異なるグラデーションを作成します。ここでわかるように、 `strokeStyle` と `fillStyle` の両プロパティは `canvasGradient` オブジェクトを有効な入力として受け入れることができます。

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // グラデーションを生成
  var lingrad = ctx.createLinearGradient(0, 0, 0, 150);
  lingrad.addColorStop(0, '#00ABEB');
  lingrad.addColorStop(0.5, '#fff');
  lingrad.addColorStop(0.5, '#26C000');
  lingrad.addColorStop(1, '#fff');

  var lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
  lingrad2.addColorStop(0.5, '#000');
  lingrad2.addColorStop(1, 'rgba(0, 0, 0, 0)');

  // グラデーションに塗りつぶしと輪郭のスタイルを割り当てる
  ctx.fillStyle = lingrad;
  ctx.strokeStyle = lingrad2;

  // 図形を描画
  ctx.fillRect(10, 10, 130, 130);
  ctx.strokeRect(50, 50, 50, 50);

}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

1 つ目は、背景のグラデーションです。ご覧のように、同じ位置に 2 つの色を割り当てています。これは、非常にシャープな色の遷移を行うためで、この場合は白から緑への遷移です。通常は、色経由点をどのような順番で定義しても問題ありませんが、この特殊なケースでは、それが大きな意味を持ちます。表示させたい順番に割り当てておけば、問題にはなりません。

2 つ目のグラデーションでは、開始色（位置 0.0）を割り当てませんでした。なぜなら、次の色経由点の色を自動的に仮定するため、厳密には必要ないからです。したがって、位置 0.5 に黒を割り当てると、グラデーションの開始からこの停止位置までが自動的に黒になります。

{{EmbedLiveSample("A_createLinearGradient_example", "180", "180", "canvas_lineargradient.png")}}

### `createRadialGradient` の例

この例では、 4 つの異なる放射状グラデーションを定義します。グラデーションの開始点と終了点を制御できるので、 Photoshop などで見られる「古典的な」放射グラデーション（つまり、グラデーションが円形に広がる 1 つの中心点を持つグラデーション）よりも複雑な効果を得ることができます。

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // グラデーションを作成
  var radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
  radgrad.addColorStop(0, '#A7D30C');
  radgrad.addColorStop(0.9, '#019F62');
  radgrad.addColorStop(1, 'rgba(1, 159, 98, 0)');

  var radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
  radgrad2.addColorStop(0, '#FF5F98');
  radgrad2.addColorStop(0.75, '#FF0188');
  radgrad2.addColorStop(1, 'rgba(255, 1, 136, 0)');

  var radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
  radgrad3.addColorStop(0, '#00C9FF');
  radgrad3.addColorStop(0.8, '#00B5E2');
  radgrad3.addColorStop(1, 'rgba(0, 201, 255, 0)');

  var radgrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
  radgrad4.addColorStop(0, '#F4F201');
  radgrad4.addColorStop(0.8, '#E4C700');
  radgrad4.addColorStop(1, 'rgba(228, 199, 0, 0)');

  // 図形を描画
  ctx.fillStyle = radgrad4;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad3;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad2;
  ctx.fillRect(0, 0, 150, 150);
  ctx.fillStyle = radgrad;
  ctx.fillRect(0, 0, 150, 150);
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

この場合、始点と終点を少しずらして、球状の三次元効果を出しています。内円と外円が重ならないようにすると、予測しにくい不思議な効果が得られます。

4 つのグラデーションの最後の色経由点は、完全に透明な色を使っています。この色から前の色への移行を美しくしたい場合は、両方の色を同じにする必要があります。このコードでは、 2 つの異なる CSS カラーメソッドをデモンストレーションとして使用しているので、これはあまり明らかではありませんが、最初のグラデーションでは `#019F62 = rgba(1,159,98,1)` です。

{{EmbedLiveSample("A_createRadialGradient_example", "180", "180", "canvas_radialgradient.png")}}

<!-- ------------------------ -->

### `createConicGradient` 例

この例では、 2 つの異なる扇形グラデーションを定義します。扇形グラデーションは放射グラデーションとは異なり、円を描くのではなく、点の周りを一周します。

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // グラデーションの作成
  var conicGrad1 = ctx.createConicGradient(2, 62, 75);
  conicGrad1.addColorStop(0, '#A7D30C');
  conicGrad1.addColorStop(1, '#fff');

  var conicGrad2 = ctx.createConicGradient(0, 187, 75);
  // we multiple our values by Math.PI/180 to convert degrees to radians
  conicGrad2.addColorStop(0, 'black');
  conicGrad2.addColorStop(0.25, 'black');
  conicGrad2.addColorStop(0.25, 'white');
  conicGrad2.addColorStop(0.5, 'white');
  conicGrad2.addColorStop(0.5, 'black');
  conicGrad2.addColorStop(0.75, 'black');
  conicGrad2.addColorStop(0.75, 'white');
  conicGrad2.addColorStop(1, 'white');

  // 図形を描画
  ctx.fillStyle = conicGrad1;
  ctx.fillRect(12, 25, 100, 100);
  ctx.fillStyle = conicGrad2;
  ctx.fillRect(137, 25, 100, 100);
}
```

```html hidden
<canvas id="canvas" width="250" height="150"></canvas>
```

```js hidden
draw();
```

最初のグラデーションは、最初の矩形の中央に配置され、開始時に緑の色経由点を移動し、終了時に白の色経由点を移動します。角度は 2 ラジアンから始まり、始まりと終わりの線が南東を指しているため、顕著に現れています。

2 つ目のグラデーションも、 2 つ目の矩形の中心に配置されています。こちらは複数の色経由点があり、回転の 1/4 ごとに黒から白に交互に変化します。これにより、市松模様のような効果が得られます。

{{EmbedLiveSample("A_createConicGradient_example", "180", "180", "canvas_conicgrad.png")}}

## パターン

前ページの例では、一連のループを使って画像のパターンを作成しました。しかし、もっと簡単な方法があります。 `createPattern()` メソッドです。

- {{domxref("CanvasRenderingContext2D.createPattern", "createPattern(image, type)")}}
  - : 新しいキャンバスパターンオブジェクトを作成し、返します。 `image` は {{domxref("CanvasImageSource")}} です（つまり、{{domxref("HTMLImageElement")}}、他のキャンバス、 {{HTMLElement("video")}} 要素などです）。`type` は、画像の利用方法を示す文字列です。

type は、パターンを作成するための画像の使用方法を指定し、以下の文字列値のいずれかでなければなりません。

- `repeat`
  - : 垂直・水平方向に画像を並べます。
- `repeat-x`
  - : 画像を水平方向に並べますが、垂直方向には並べません。
- `repeat-y`
  - : 画像を垂直方向に並べますが、水平方向には並べません。
- `no-repeat`
  - : 画像をタイル配置しません。一度だけ使用されます。

このメソッドを使って {{domxref("CanvasPattern")}} オブジェクトを作成します。これは上で見たグラデーションのメソッドと非常によく似ています。パターンを作成したら、それを `fillStyle` または `strokeStyle` プロパティに代入します。例えば次のようにします。

```js
var img = new Image();
img.src = 'someimage.png';
var ptrn = ctx.createPattern(img, 'repeat');
```

> **Note:** `drawImage()` メソッドと同様に、このメソッドを呼び出す前に使用する画像が読み込まれていることを確認する必要があります。そうしないと、パターンが正しく描画されない可能性があります。

### `createPattern` の例

この最後の例では、 `fillStyle` プロパティに割り当てるパターンを作成します。唯一の注目すべき点は、画像の `onload` ハンドラーを使用していることです。これは、パターンに割り当てる前に画像が読み込まていれることを保証するためです。

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  // 新しい画像オブジェクトを生成して、パターンとして使用する
  var img = new Image();
  img.src = 'canvas_createpattern.png';
  img.onload = function() {

    // パターンを作成
    var ptrn = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = ptrn;
    ctx.fillRect(0, 0, 150, 150);

  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_createPattern_example", "180", "180", "canvas_createpattern.png")}}

## 影

影を使うには、ちょうど 4 つのプロパティが必要です。

- {{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX = float")}}
  - : 影がオブジェクトから伸びるべき水平距離を示します。この値は、変換行列の影響を受けません。既定値は 0 です。
- {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY = float")}}
  - : 影がオブジェクトから伸びるべき垂直距離を示します。この値は、変換行列の影響を受けません。既定値は 0 です。
- {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur = float")}}
  - : ぼかし効果の大きさを示します。この値はピクセル数には対応せず、現在の変換行列の影響を受けません。既定値は 0 です。
- {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor = color")}}
  - : 影の効果の色を示す CSS 標準の色の値です。は、既定では完全透過の黒です。

プロパティ `shadowOffsetX` と `shadowOffsetY` は、影がオブジェクトから X と Y 方向にどれだけ伸びるかを示します。これらの値は、現在の変換行列には影響されません。影を上または左に伸ばすには負の値を使用し、影を下または右に伸ばすには正の値を使用します。既定値はどちらも 0 です。

`shadowBlur` プロパティはぼかし効果の大きさを示します。この値はピクセル数には対応せず、現在の変換行列の影響を受けません。既定値は 0 です。

`shadowColor` プロパティは影の効果の色を示す CSS 標準の色の値です。は、既定では完全透過の黒です。

> **Note:** 影は `source-over` [合成操作](/ja/docs/Web/API/Canvas_API/Tutorial/Compositing)でのみ描画されます。

### 影付きテキストの例

この例では、文字列を影付きで描画しています。

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  ctx.shadowBlur = 2;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

  ctx.font = '20px Times New Roman';
  ctx.fillStyle = 'Black';
  ctx.fillText('Sample String', 5, 30);
}
```

```html hidden
<canvas id="canvas" width="150" height="80"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_shadowed_text_example", "180", "100", "shadowed-string.png")}}

font` プロパティと `fillText` メソッドについては、次の章の [テキストの描画](/ja/docs/Web/API/Canvas_API/Tutorial/Drawing_text)で見ていくことにしましょう。

## キャンバスの塗りつぶしルール

`fill` （または {{domxref("CanvasRenderingContext2D.clip", "clip")}} と {{domxref("CanvasRenderingContext2D.isPointInPath", "isPointInPath")}}）を使う場合、オプションとして、ある点がパスの内側か外側か、したがってそれが埋められたかどうかを判断する充填規則のアルゴリズムを指定することが出来ます。これは、パスがそれ自身と交差していたり、入れ子になっていたりする場合に便利です。

2 つの値が可能です。

- **`"nonzero"`**: [非ゼロワインディングルール](https://en.wikipedia.org/wiki/Nonzero-rule)です。こちらが既定のルールです。
- **`"evenodd"`**: [偶奇ワインディングルール](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule)です。

この例では `evenodd` ルールを使用しています。

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.beginPath();
  ctx.arc(50, 50, 30, 0, Math.PI * 2, true);
  ctx.arc(50, 50, 15, 0, Math.PI * 2, true);
  ctx.fill('evenodd');
}
```

```html hidden
<canvas id="canvas" width="100" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("Canvas_fill_rules", "110", "110", "fill-rule.png")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Drawing_shapes", "Web/API/Canvas_API/Tutorial/Drawing_text")}}
