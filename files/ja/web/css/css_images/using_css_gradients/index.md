---
title: CSS グラデーションの使用
slug: Web/CSS/CSS_Images/Using_CSS_gradients
tags:
  - 上級者
  - CSS
  - CSS 画像
  - 例
  - グラデーション
  - ガイド
  - ウェブ
translation_of: Web/CSS/CSS_Images/Using_CSS_gradients
---
{{CSSRef}}

**CSS グラデーション**は {{cssxref("&lt;gradient&gt;")}} データ型で表現され、2つ以上の色の間の連続的な変化から成る {{cssxref("&lt;image&gt;")}} の特殊型です。グラデーションは3種類から選択することができます。線形 (_linear_) ({{cssxref("gradient/linear-gradient()", "linear-gradient()")}} 関数によって生成)、放射 (_radial_) ({{cssxref("gradient/radial-gradient()", "radial-gradient()")}} 関数によって生成)、扇形 (_conic_) ({{cssxref("gradient/conic-gradient()", "conic-gradient()")}} 関数によって生成) の3種類です。 {{cssxref("gradient/repeating-linear-gradient()", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient()", "repeating-radial-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient()", "repeating-conic-gradient()")}} の各関数によって、反復グラデーションを生成することもできます。

グラデーションは、例えば背景など、`<image>` が使えるところならば、どこでも利用できます。グラデーションは動的に生成されるため、従来は同様の効果を実現するために使用されていたラスタ画像ファイルを必要としません。加えて、グラデーションはブラウザーによって生成されるため、拡大した際に見栄えがより良く、その場で大きさを変更することもできます。

最初に線形グラデーションの紹介から始め、次にすべてのグラデーション型で対応している機能を、線形グラデーションを例として紹介し、それから放射グラデーション、扇形グラデーション、反復グラデーションへと移ります。

## 線形グラデーションの使用

線形グラデーションは、直線に沿った色の帯の変化を生成します。

<h3 id="A_basic_linear_gradient">基本的な線形グラデーション</h3>

グラデーションの最も基本的な形を作成するために必要なことは、2 つの色を指定することです。これらは色経由点 (color stops) と呼ばれています。少なくとも 2 つ必要ですが、必要なだけの数を設定することができます。

```html hidden
<div class="simple-linear"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.simple-linear {
  background: linear-gradient(blue, pink);
}
```

{{ EmbedLiveSample('A_basic_linear_gradient', 120, 120) }}

<h3 id="Changing_the_direction">方向の変更</h3>

既定では、線形グラデーションは上から下へ向けて変化します。方向を指定することで向きを変更することができます。

```html hidden
<div class="horizontal-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.horizontal-gradient {
  background: linear-gradient(to right, blue, pink);
}
```

{{ EmbedLiveSample('Changing_the_direction', 120, 120) }}

<h3 id="Diagonal_gradients">対角グラデーション</h3>

グラデーションを角から角へ、対角に作成することもできます。

```html hidden
<div class="diagonal-gradient"></div>
```

```css hidden
div {
  width: 200px;
  height: 100px;
}
```

```css
.diagonal-gradient {
  background: linear-gradient(to bottom right, blue, pink);
}
```

{{ EmbedLiveSample('Diagonal_gradients', 200, 100) }}

<h3 id="Using_angles">角度の指定</h3>

方向についてもっと制御したい場合は、グラデーションに特定の角度を設定することができます。

```html hidden
<div class="angled-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.angled-gradient {
  background: linear-gradient(70deg, blue, pink);
}
```

{{ EmbedLiveSample('Using_angles', 120, 120) }}

角度を指定した場合、 `0deg` は下から上への垂直グラデーションを生成し、 `90deg` は左から右への水平グラデーションを生成し、同様に、時計回りに回転します。負の数の角度を指定すると、反時計回りになります。

![](linear_red_angles.png)

<h2 id="Declaring_colors_creating_effects">色の宣言と効果の生成</h2>

すべての CSS グラデーション型は位置に依存した色の範囲です。 CSS グラデーションで生成される色は、位置によって連続的に変化し、円滑な色の遷移を生み出します。単色の帯や、2 つの色の間の急な遷移を生成することもできます。以下のことはすべてのグラデーション関数に言えます。

<h3 id="Using_more_than_two_colors">3 つ以上の色の使用</h3>

2 つの色に限定する必要はありません — 好きなだけ使うことができます。既定では、各色はグラデーション内で等分の幅になります。

```html hidden
<div class="auto-spaced-linear-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.auto-spaced-linear-gradient {
  background: linear-gradient(red, yellow, blue, orange);
}
```

{{ EmbedLiveSample('Using_more_than_two_colors', 120, 120) }}

<h3 id="Positioning_color_stops">色経由点の配置</h3>

色経由点は既定の位置から動かすこともできます。位置を細かく調整するには、それぞれの色経由点に0～2個のパーセント値、または放射・線形グラデーションの場合は絶対的な長さの値を指定することができます。一をパーセント値で指定する場合は、 `0%` が開始点を示し、 `100%` が終了点を示します。但し、実現したい効果を得るために必要であれば、この範囲外の値を使用することもできます。位置を指定しないままにした場合は、その色経由点の位置は自動的に計算され、最初の色経由点は `0%` に、最後の色経由点は `100%` になり、他の色経由点は隣の色経由点の間の中間点になります。

```html hidden
<div class="multicolor-linear"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.multicolor-linear {
   background: linear-gradient(to left, lime 28px, red 77%, cyan);
}
```

{{ EmbedLiveSample('Positioning_color_stops', 120, 120) }}

<h3 id="Creating_hard_lines">不連続線の生成</h3>

2 つの色の間に不連続線を生成して、グラデーションの遷移の代わりに縞模様を生成するなら、隣り合う色経由点を同じ位置に設定することができます。この例では、2 つの色がグラデーションの中心である `50%` の色経由点を共有しています。

```html hidden
<div class="striped"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.striped {
   background: linear-gradient(to bottom left, cyan 50%, palegoldenrod 50%);
}
```

{{ EmbedLiveSample('Creating_hard_lines', 120, 120) }}

<h3 id="Gradient_hints">グラデーションのヒント</h3>

既定では、グラデーションは 1 つの色から次の色へ均等に変化します。色ヒントを加えることで、変化値の中心点をグラデーションの特定の位置に移動することができます。この例では、変化の中心点を 50% の位置から 10% の位置へ移動します。

```html hidden
<div class="color-hint"></div>
<div class="simple-linear"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px; float: left; margin-right: 10px;
}
```

```css
.color-hint {
  background: linear-gradient(blue, 10%, pink);
}
.simple-linear {
  background: linear-gradient(blue, pink);
}
```

{{ EmbedLiveSample('Gradient_hints', 120, 120) }}

<h3 id="Creating_color_bands_stripes">色の帯と縞の生成</h3>

グラデーションの中に単色で遷移しない色の領域を含めるには、色経由点に 2 つの位置を含めます。色経由点には 2 つの位置を設定することができ、これは、異なる位置に同じ色を持つ 2 つの連続した色経由点に相当します。色は、第 1 の色経由点で完全な彩度に達し、第 2 の色経由点までその彩度を維持し、隣接する色経由点の第 1 の位置を介して隣接する色経由点の色に遷移します。

```html hidden
<div class="multiposition-stops"></div>
<div class="multiposition-stop2"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  float: left; margin-right: 10px; box-sizing: border-box;
}
```

```css
.multiposition-stops {
   background: linear-gradient(to left,
       lime 20%, red 30%, red 45%, cyan 55%, cyan 70%, yellow 80% );
   background: linear-gradient(to left,
       lime 20%, red 30% 45%, cyan 55% 70%, yellow 80% );
}
.multiposition-stop2 {
   background: linear-gradient(to left,
      lime 25%, red 25%, red 50%, cyan 50%, cyan 75%, yellow 75% );
   background: linear-gradient(to left,
      lime 25%, red 25% 50%, cyan 50% 75%, yellow 75% );
}
```

{{ EmbedLiveSample('Creating_color_bands_stripes', 120, 120) }}

上記の第 1 の例では、ライムは、暗黙の 0% の位置から 20% の位置まで進み、グラデーションの幅の次の 10% の間にライムから赤へと変化し、 30% の位置で単色の赤に到達し、グラデーションを通して 45% まで単色の赤のままであり、ここでシアンにフェードアウトし、グラデーションの 15% の間は完全にシアンになる、というようになっています。

第 2 の例では、各色の 2 番目の色経由点は、隣接する色の第1の色経由点と同じ位置にあり、縞模様の効果を生み出しています。

いずれの例でも、グラデーションは2回書かれます。第 1 の例は CSS Images Level 3 の方法で、色経由点ごとに色を繰り返しており、第 2 の例は CSS Images Level 4 の方法で、それぞれの色経由点の宣言に色経由の長さが 2 つずつ含まれています。

<h3 id="Controlling_the_progression_of_a_gradient">グラデーションの進行の制御</h3>

既定では、グラデーションは隣接する2つの色経由点の色の間で均等に進行し、それら2つの色経由点の間の中間点が中間の色の値となります。カラーヒントの位置を指定することで、2つの色経由点間の補間、つまり進行を制御することができます。この例では、色はグラデーションの途中でライムとシアンの間の中間点に到達しますが、50% の割合ではなく、20% の割合で到達しています。第2の例では、カラーヒントが作ることができる違いをハイライトするためのヒントは含まれていません。

```html hidden
<div class="colorhint-gradient"></div> <div class="regular-progression"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
  float: left; margin-right: 10px; box-sizing: border-box;
}
```

```css
.colorhint-gradient {
  background: linear-gradient(to top, black, 20%, cyan);
}
.regular-progression {
  background: linear-gradient(to top, black, cyan);
}
```

{{ EmbedLiveSample('Controlling_the_progression_of_a_gradient', 120, 120) }}

<h3 id="Overlaying_gradients">グラデーションの重ね合わせ</h3>

グラデーションは透明度に対応しているので、複数の背景を重ねて、かなり派手な効果を得ることができます。背景は上から下に重ねられ、最初に指定されたものが上になります。

```html hidden
<div class="layered-image"></div>
```

```css hidden
div {
  width: 300px;
  height: 150px;
}
```

```css
.layered-image {
  background: linear-gradient(to right, transparent, mistyrose),
      url("critters.png");
}
```

{{ EmbedLiveSample('Overlaying_gradients', 300, 150) }}

<h3 id="Stacked_gradients">グラデーションの重ね合わせ</h3>

グラデーションを他のグラデーションと重ねることもできます。上のグラデーションが完全に不透明でない限り、下のグラデーションは表示されます。

```html hidden
<div class="stacked-linear"></div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.stacked-linear {
  background:
      linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
      linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
      linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
}
```

{{ EmbedLiveSample('Stacked_gradients', 200, 200) }}

<h2 id="Using_radial_gradients">放射グラデーションの使用</h2>

放射グラデーションは線形グラデーションと似ていますが、中心点から放射状に広がる点が異なります。中心点をどこに置くかは決めることができます。円形や楕円形を作成することもできます。

<h3 id="A_basic_radial_gradient">基本的な放射グラデーション</h3>

線形グラデーションと同様に、放射グラデーションを作成するために必要なのは 2 つの色だけです。既定では、グラデーションの中心は 50% 50% の位置にあり、グラデーションはボックスの縦横比に合わせて楕円形になっています。

```html hidden
<div class="simple-radial"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.simple-radial {
  background: radial-gradient(red, blue);
}
```

{{ EmbedLiveSample('A_basic_radial_gradient', 120, 120) }}

<h3 id="Positioning_radial_color_stops">放射色経由点の配置</h3>

ここでも線形グラデーションのように、放射の各色経由点をパーセント値または絶対長で配置することができます。

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.radial-gradient {
  background: radial-gradient(red 10px, yellow 30%, #1e90ff 50%);
}
```

{{ EmbedLiveSample('Positioning_radial_color_stops', 120, 120) }}

<h3 id="Positioning_the_center_of_the_gradient">グラデーションの中心の配置</h3>

グラデーションの中心の位置は、キーワード、パーセント値、絶対的な長さで配置することができ、長さとパーセント値が 1 つだけの場合は繰り返して用いられ、それ以外の場合は左からの位置と上からの位置の順で用いられます。

```html hidden
<div class="radial-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 240px;
}
```

```css
.radial-gradient {
  background: radial-gradient(at 0% 30%, red 10px, yellow 30%, #1e90ff 50%);
}
```

{{ EmbedLiveSample('Positioning_the_center_of_the_gradient', 120, 120) }}

<h3 id="Sizing_radial_gradients">放射グラデーションの大きさの変更</h3>

線形グラデーションとは異なり、放射グラデーションは大きさを指定することができます。指定可能な値には、`closest-corner`, `closest-side`, `farthest-corner`, `farthest-side` があり、`farthest-corner` が既定値です。

<h4 id="Example_closest-side_for_ellipses">例: 楕円の closest-side</h4>

この例では大きさに `closest-side` の値を使用しています。つまり、開始点 (中心) からボックスを囲む最近接の辺までの距離で大きさが設定されます。

```html hidden
<div class="radial-ellipse-side"></div>
```

```css hidden
div {
  width: 240px;
  height: 100px;
}
```

```css
.radial-ellipse-side {
  background: radial-gradient(ellipse closest-side,
      red, yellow 10%, #1e90ff 50%, beige);
}
```

{{ EmbedLiveSample('Example_closest-side_for_ellipses', 240, 100) }}

<h4 id="Example_farthest-corner_for_ellipses">例: 楕円の farthest-corner</h4>

この例は、大きさが `farthest-corner` と指定されていることを除けば、前の例と似ています。これは、グラデーションの大きさを、出発点から囲んだボックスの出発点から最も遠い角までの距離で設定するものです。

```html hidden
<div class="radial-ellipse-far"></div>
```

```css hidden
div {
  width: 240px;
  height: 100px;
}
```

```css
.radial-ellipse-far {
  background: radial-gradient(ellipse farthest-corner at 90% 90%,
      red, yellow 10%, #1e90ff 50%, beige);
}
```

{{ EmbedLiveSample('Example_farthest-corner_for_ellipses', 240, 100) }}

<h4 id="Example_closest-side_for_circles">例: 円の closest-side</h4>

この例では `closest-side` を使用しており、円の大きさが開始点 (中心) と最も近い辺との間の距離になります。円の半径は、グラデーションの中心と最も近い辺との間の距離で、上から 25%、下から 25% の位置関係から、この場合は高さが幅よりも狭いので、最も下に近い位置になります。

```html hidden
<div class="radial-circle-close"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.radial-circle-close {
  background: radial-gradient(circle closest-side at 25% 75%,
      red, yellow 10%, #1e90ff 50%, beige);
}
```

{{ EmbedLiveSample('Example_closest-side_for_circles', 240, 120) }}

<h4 id="Example_length_or_percentage_for_ellipses">例: 楕円の長さまたはパーセント値</h4>

楕円のみの場合、長さまたはパーセント値を使って楕円の大きさを決めることができます。最初の値は水平方向の半径、2 番目の値は垂直方向の半径を表し、パーセント値を使用した場合は、その次元でのボックスの大きさに対応します。以下の例では、水平方向の半径にパーセント値を使用しています。

```html hidden
<div class="radial-ellipse-size"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.radial-ellipse-size {
   background: radial-gradient(ellipse 50% 50px,
      red, yellow 10%, #1e90ff 50%, beige);
}
```

{{ EmbedLiveSample('Example_length_or_percentage_for_ellipses', 240, 120) }}

<h4 id="Example_length_for_circles">例: 円の長さ</h4>

円においては大きさを [\<length>](/ja/docs/Web/CSS/length) で指定することができ、これが円の大きさになります。

```html hidden
<div class="radial-circle-size"></div>
```

```css hidden
div {
  width: 240px;
  height: 120px;
}
```

```css
.radial-circle-size {
  background: radial-gradient(circle 50px,
      red, yellow 10%, #1e90ff 50%, beige);
}
```

{{ EmbedLiveSample('Example_length_for_circles', 240, 120) }}

<h3 id="Stacked_radial_gradients">放射グラデーションの重ね合わせ</h3>

線形グラデーションのように、放射グラデーションも重ね合わせることができます。最初に指定されたものが最上位に、最後のものが最下位になります。

```html hidden
<div class="stacked-radial"></div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.stacked-radial {
  background:
      radial-gradient(circle at 50% 0,
        rgba(255,0,0,.5),
        rgba(255,0,0,0) 70.71%),
      radial-gradient(circle at 6.7% 75%,
        rgba(0,0,255,.5),
        rgba(0,0,255,0) 70.71%),
      radial-gradient(circle at 93.3% 75%,
        rgba(0,255,0,.5),
        rgba(0,255,0,0) 70.71%) beige;
  border-radius: 50%;
}
```

{{ EmbedLiveSample('Stacked_radial_gradients', 200, 200) }}

<h2 id="Using_conic_gradients">扇形グラデーションの使用</h2>

**`conic-gradient()`** は [CSS](/ja/docs/Web/CSS) の関数で、 (中心から広がるのではなく) 中心点の周りを回りながら色が変化するグラデーションから成る画像を生成します。扇型グラデーションの例としては、円グラフや色相環などがありますが、チェッカーボードやその他の面白い効果を生み出すために使用することもできます。

扇形グラデーションは放射グラデーションの構文と似ていますが、色経由点はグラデーションの中心から現れるグラデーション線上ではなく、グラデーション弧、すなわち円周上に配置され、色経由点はパーセント値または角度で表します。絶対的な長さは有効ではありません。

放射グラデーションでは、楕円の中心から外側に向かって、すべての方向に色が変化していきます。扇形グラデーションでは、円の中心を中心にして、上から時計回りに回転するように色が変化します。放射グラデーションと同様に、グラデーションの中心の位置を決めることができます。線形グラデーションと同様に、グラデーションの角度を変更することができます。

<h3 id="A_basic_conic_gradient">基本的な扇形グラデーション</h3>

線形グラデーションや放射グラデーションと同様に、扇形グラデーションを作成するのに必要なのは 2 つの色だけです。既定では、グラデーションの中心は 50% 50% の位置で、グラデーションの開始点は上向きです。

```html hidden
<div class="simple-conic"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.simple-conic {
  background: conic-gradient(red, blue);
}
```

{{ EmbedLiveSample('A_basic_conic_gradient', 120, 120) }}

<h3 id="Positioning_the_conic_center">扇形の中心の配置</h3>

放射グラデーションのように、扇形グラデーションの中心を配置するには、キーワード、パーセント値、絶対的な長さの何れかをキーワード "at" の後に続けます。

```html hidden
<div class="conic-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.conic-gradient {
  background: conic-gradient(at 0% 30%, red 10%, yellow 30%, #1e90ff 50%);
}
```

{{ EmbedLiveSample('Positioning_the_conic_center', 120, 120) }}

<h3 id="Changing_the_angle">角度の変更</h3>

既定では、指定したそれぞれの色経由点は、円の周囲に等間隔に配置されます。扇形グラデーションの開始角度を指定するには、最初に "from" キーワードを使用し、その後に角度または長さを指定します。また、色経由点の位置を指定するには、それらの後に角度または長さを指定します。

```html hidden
<div class="conic-gradient"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.conic-gradient {
  background: conic-gradient(from 45deg, red, orange 50%, yellow 85%, green);
}
```

{{ EmbedLiveSample('Changing_the_angle', 120, 120) }}

<h2 id="Using_repeating_gradients">反復グラデーションの使用</h2>

{{cssxref("gradient/linear-gradient()", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient()", "radial-gradient()")}}, {{cssxref("gradient/conic-gradient()", "conic-gradient()")}} の各関数は自動的に反復される色経由点に対応していません。しかし、 {{cssxref("gradient/repeating-linear-gradient()", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient()", "repeating-radial-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient()", "repeating-conic-gradient()")}} の各関数はこの機能を提供することができます。

繰り返されるグラデーション線または弧の大きさは、最初の色経由点の位置と最後の色経由点の位置の間の長さです。最初の色経由点が色だけで、色経由点の位置がなかった場合、値は既定で 0 になります。最後の色経由点が色だけで、色経由点の長さがなかった場合、値はデフォルトで100%になります。どちらも宣言されていない場合、グラデーション線は 100% になります。つまり、線形グラデーションと扇形グラデーションの場合は繰り返されず、放射グラデーションの場合は、グラデーションの半径がグラデーションの中心から最も遠い角までの長さよりも小さい場合にのみ繰り返されます。最初の色経由点が宣言されていて、その値が 0 より大きい場合、最初の色経由点と最後の色経由点の差が 100% または 360 度より小さいため、線または円弧の大きさはグラデーションが繰り返されます。

<h3 id="Repeating_linear_gradients">反復線形グラデーション</h3>

この例では、{{cssxref("gradient/repeating-linear-gradient()", "repeating-linear-gradient()")}} を使用して、直線的に繰り返し進行するグラデーションを作成しています。グラデーションが繰り返されることで、色が循環していきます。この例では、グラデーションの線の長さは 10px です。

```html hidden
<div class="repeating-linear"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.repeating-linear {
  background: repeating-linear-gradient(-45deg, red, red 5px, blue 5px, blue 10px);
}
```

{{ EmbedLiveSample('Repeating_linear_gradients', 120, 120) }}

<h3 id="Multiple_repeating_linear_gradients">複数の反復線形グラデーション</h3>

通常の線形グラデーションや放射グラデーションと同様に、複数のグラデーションを重ねて表示することができます。これは、グラデーションの一部を透明にして、透明部分から後続のグラデーションが見えるようにしたり、各グラデーション画像に異なる [background-size](/ja/docs/Web/CSS/background-size) や、オプションで異なる [background-position](/ja/docs/Web/CSS/background-position) のプロパティ値を含める場合にのみ意味を持ちます。透過性を利用しています。

この例では、グラデーション線の長さは 300px、230px、300px です。

```html hidden
<div class="multi-repeating-linear"></div>
```

```css hidden
div {
  width: 600px;
  height: 400px;
}
```

```css
.multi-repeating-linear {
  background:
      repeating-linear-gradient(190deg, rgba(255, 0, 0, 0.5) 40px,
        rgba(255, 153, 0, 0.5) 80px, rgba(255, 255, 0, 0.5) 120px,
        rgba(0, 255, 0, 0.5) 160px, rgba(0, 0, 255, 0.5) 200px,
        rgba(75, 0, 130, 0.5) 240px, rgba(238, 130, 238, 0.5) 280px,
        rgba(255, 0, 0, 0.5) 300px),
      repeating-linear-gradient(-190deg, rgba(255, 0, 0, 0.5) 30px,
        rgba(255, 153, 0, 0.5) 60px, rgba(255, 255, 0, 0.5) 90px,
        rgba(0, 255, 0, 0.5) 120px, rgba(0, 0, 255, 0.5) 150px,
        rgba(75, 0, 130, 0.5) 180px, rgba(238, 130, 238, 0.5) 210px,
        rgba(255, 0, 0, 0.5) 230px),
      repeating-linear-gradient(23deg, red 50px, orange 100px,
        yellow 150px, green 200px, blue 250px,
        indigo 300px, violet 350px, red 370px);
}
```

{{ EmbedLiveSample('Multiple_repeating_linear_gradients', 600, 400) }}

<h3 id="Plaid_gradient">格子縞のグラデーション</h3>

格子模様を作るために、透明度のあるグラデーションをいくつか重ねています。最初の背景宣言では、すべての色経由点を個別にリストアップしています。2 つ目の背景のプロパティ宣言では、複数の位置にある色経由点の構文を使用しています。

```html hidden
<div class="plaid-gradient"></div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.plaid-gradient {
  background:
      repeating-linear-gradient(90deg, transparent, transparent 50px,
        rgba(255, 127, 0, 0.25) 50px, rgba(255, 127, 0, 0.25) 56px,
        transparent 56px, transparent 63px,
        rgba(255, 127, 0, 0.25) 63px, rgba(255, 127, 0, 0.25) 69px,
        transparent 69px, transparent 116px,
        rgba(255, 206, 0, 0.25) 116px, rgba(255, 206, 0, 0.25) 166px),
      repeating-linear-gradient(0deg, transparent, transparent 50px,
        rgba(255, 127, 0, 0.25) 50px, rgba(255, 127, 0, 0.25) 56px,
        transparent 56px, transparent 63px,
        rgba(255, 127, 0, 0.25) 63px, rgba(255, 127, 0, 0.25) 69px,
        transparent 69px, transparent 116px,
        rgba(255, 206, 0, 0.25) 116px, rgba(255, 206, 0, 0.25) 166px),
      repeating-linear-gradient(-45deg, transparent, transparent 5px,
        rgba(143, 77, 63, 0.25) 5px, rgba(143, 77, 63, 0.25) 10px),
      repeating-linear-gradient(45deg, transparent, transparent 5px,
        rgba(143, 77, 63, 0.25) 5px, rgba(143, 77, 63, 0.25) 10px);

  background:
      repeating-linear-gradient(90deg, transparent 0 50px,
        rgba(255, 127, 0, 0.25) 50px 56px,
        transparent 56px 63px,
        rgba(255, 127, 0, 0.25) 63px 69px,
        transparent 69px 116px,
        rgba(255, 206, 0, 0.25) 116px 166px),
      repeating-linear-gradient(0deg, transparent 0 50px,
        rgba(255, 127, 0, 0.25) 50px 56px,
        transparent 56px 63px,
        rgba(255, 127, 0, 0.25) 63px 69px,
        transparent 69px 116px,
        rgba(255, 206, 0, 0.25) 116px 166px),
      repeating-linear-gradient(-45deg, transparent 0 5px,
        rgba(143, 77, 63, 0.25) 5px 10px),
      repeating-linear-gradient(45deg, transparent 0 5px,
        rgba(143, 77, 63, 0.25) 5px 10px);
}
```

{{ EmbedLiveSample('Plaid_gradient', 200, 200) }}

<h3 id="Repeating_radial_gradients">反復放射グラデーション</h3>

この例は {{cssxref("gradient/repeating-radial-gradient()", "repeating-radial-gradient()")}} を使用して、中心点から放射状に反復されるグラデーションを生成します。色はグラデーションが反復するたびに周期的に繰り返されます。

```html hidden
<div class="repeating-radial"></div>
```

```css hidden
div {
  width: 120px;
  height: 120px;
}
```

```css
.repeating-radial {
  background: repeating-radial-gradient(black, black 5px, white 5px, white 10px);
}
```

{{ EmbedLiveSample('Repeating_radial_gradients', 120, 120) }}

<h3 id="Multiple_repeating_radial_gradients">複数の反復放射グラデーション</h3>

```html hidden
<div class="multi-target"></div>
```

```css hidden
div {
  width: 250px;
  height: 150px;
}
```

```css
.multi-target {
  background:
      repeating-radial-gradient(ellipse at 80% 50%,rgba(0,0,0,0.5),
        rgba(0,0,0,0.5) 15px, rgba(255,255,255,0.5) 15px,
        rgba(255,255,255,0.5) 30px) top left no-repeat,
      repeating-radial-gradient(ellipse at 20% 50%,rgba(0,0,0,0.5),
        rgba(0,0,0,0.5) 10px, rgba(255,255,255,0.5) 10px,
        rgba(255,255,255,0.5) 20px) top left no-repeat yellow;
  background-size: 200px 200px, 150px 150px;
}
```

{{ EmbedLiveSample('Multiple_repeating_radial_gradients', 250, 150) }}

## 関連記事

- グラデーション関数: {{cssxref("gradient/linear-gradient()", "linear-gradient()")}}, {{cssxref("gradient/radial-gradient()", "radial-gradient()")}}, {{cssxref("gradient/conic-gradient()", "conic-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient()", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient()", "repeating-radial-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient()", "repeating-conic-gradient()")}}
- グラデーション関連の CSS データ型: {{cssxref("&lt;gradient&gt;")}}, {{cssxref("&lt;image&gt;")}}
- グラデーション関連の CSS プロパティ: {{cssxref("background")}}, {{cssxref("background-image")}}
- [CSS Gradients Patterns Gallery, by Lea Verou](https://lea.verou.me/css3patterns/)
- [CSS3 Gradients Library, by Estelle Weyl](http://standardista.com/cssgradients)
- [Gradient CSS Generator](https://cssgenerator.org/gradient-css-generator.html)
