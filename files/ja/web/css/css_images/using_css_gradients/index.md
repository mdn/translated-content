---
title: CSS グラデーションの使用
slug: Web/CSS/CSS_Images/Using_CSS_gradients
tags:
  - Advanced
  - CSS
  - CSS Images
  - Example
  - Gradients
  - Guide
  - Web
translation_of: Web/CSS/CSS_Images/Using_CSS_gradients
---
<div>{{CSSRef}}</div>

<p><strong>CSS グラデーション</strong>は {{cssxref("&lt;gradient&gt;")}} データ型で表現され、2つ以上の色の間の連続的な変化から成る {{cssxref("&lt;image&gt;")}} の特殊型です。グラデーションは3種類から選択することができます。<ruby>線形<rp> (</rp><rt>linear</rt><rp>)</rp></ruby> ({{cssxref("linear-gradient")}} 関数によって生成)、<ruby>放射<rp> (</rp><rt>radial</rt><rp>)</rp></ruby> ({{cssxref("radial-gradient")}} 関数によって生成)、<ruby>扇形<rp> (</rp><rt>conic</rt><rp>)</rp></ruby> ({{cssxref("conic-gradient")}} 関数によって生成) の3種類です。 {{cssxref("repeating-linear-gradient")}}, {{cssxref("repeating-radial-gradient")}}, {{cssxref("repeating-conic-gradient")}} の各関数によって、反復グラデーションを生成することもできます。</p>

<p>グラデーションは、例えば背景など、 <code>&lt;image&gt;</code> が使えるところならば、どこでも利用できます。グラデーションは動的に生成されるため、従来は同様の効果を実現するために使用されていたラスタ画像ファイルを必要としません。加えて、グラデーションはブラウザーによって生成されるため、拡大した際に見栄えがより良く、その場で大きさを変更することもできます。</p>

<p>最初に線形グラデーションの紹介から始め、次にすべてのグラデーション型で対応している機能を、線形グラデーションを例として紹介し、それから放射グラデーション、扇形グラデーション、反復グラデーションへと移ります。</p>

<h2 id="Using_linear_gradients" name="Using_linear_gradients">線形グラデーションの使用</h2>

<p>線形グラデーションは、直線に沿った色の帯の変化を生成します。</p>

<div>
<h3 id="A_basic_linear_gradient" name="A_basic_linear_gradient">基本的な線形グラデーション</h3>

<p>グラデーションの最も基本的な形を作成するために必要なことは、2つの色を指定することです。これらは<ruby>色経由点<rp> (</rp><rt>color stops</rt><rp>) </rp></ruby>と呼ばれています。少なくとも2つ必要ですが、必要なだけの数を設定することができます。</p>

<div class="hidden">
<pre class="brush: html notranslate" dir="rtl">&lt;div class="simple-linear"&gt;&lt;/div&gt;</pre>

<pre class="brush: css notranslate">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css notranslate">.simple-linear {
  background: linear-gradient(blue, pink);
}</pre>

<p>{{ EmbedLiveSample('A_basic_linear_gradient', 120, 120) }}</p>
</div>

<div>
<h3 id="Changing_the_direction" name="Changing_the_direction">方向の変更</h3>

<p>既定では、線形グラデーションは上から下へ向けて変化します。方向を指定することで向きを変更することができます。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="horizontal-gradient"&gt;&lt;/div&gt;</pre>

<pre class="brush: css notranslate">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css notranslate">.horizontal-gradient {
  background: linear-gradient(to right, blue, pink);
}
</pre>

<p>{{ EmbedLiveSample('Changing_the_direction', 120, 120) }}</p>
</div>

<div>
<h3 id="Diagonal_gradients" name="Diagonal_gradients">対角グラデーション</h3>

<p>グラデーションを角から角へ、対角に作成することもできます。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="diagonal-gradient"&gt;&lt;/div&gt;</pre>

<pre class="brush: css notranslate">div {
  width: 200px;
  height: 100px;
}</pre>
</div>

<pre class="brush: css notranslate">.diagonal-gradient {
  background: linear-gradient(to bottom right, blue, pink);
}
</pre>

<p>{{ EmbedLiveSample('Diagonal_gradients', 200, 100) }}</p>
</div>

<div>
<h3 id="Using_angles" name="Using_angles">角度の指定</h3>

<p>方向についてもっと制御したい場合は、グラデーションに特定の角度を設定することができます。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="angled-gradient"&gt;&lt;/div&gt;</pre>

<pre class="brush: css notranslate">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css notranslate">.angled-gradient {
  background: linear-gradient(70deg, blue, pink);
}
</pre>

<p>{{ EmbedLiveSample('Using_angles', 120, 120) }}</p>

<p>角度を指定した場合、 <code>0deg</code> は下から上への垂直グラデーションを生成し、 <code>90deg</code> は左から右への水平グラデーションを生成し、同様に、時計回りに回転します。負の数の角度を指定すると、反時計回りになります。</p>

<p><img alt="linear_redangles.png" class="default internal" src="/files/3811/linear_red_angles.png"></p>
</div>

<h2 id="Declaring_colors_creating_effects" name="Declaring_colors_creating_effects">色の宣言と効果の生成</h2>

<p>すべての<span class="js-about-item-abstr">CSS グラデーション型は位置に依存した色の範囲です。 CSS グラデーションで生成される色は、位置によって連続的に変化し、円滑な色の遷移を生み出します。単色の帯や、二つの色の間の急な遷移を生成することもできます。以下のことはすべてのグラデーション関数に言えます。</span></p>

<div>
<h3 id="Using_more_than_two_colors" name="Using_more_than_two_colors">3つ以上の色の使用</h3>

<p>2つの色に限定する必要はありません — 好きなだけ使うことができます。既定では、各色はグラデーション内で等分の幅になります。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="auto-spaced-linear-gradient"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css notranslate">.auto-spaced-linear-gradient {
  background: linear-gradient(red, yellow, blue, orange);
}
</pre>

<p>{{ EmbedLiveSample('Using_more_than_two_colors', 120, 120) }}</p>
</div>

<div>
<h3 id="Positioning_color_stops" name="Positioning_color_stops">色経由点の配置</h3>

<p>色経由点は既定の位置から動かすこともできます。位置を細かく調整するには、それぞれの色経由点に0～2個のパーセント値、または放射・線形グラデーションの場合は絶対的な長さの値を指定することができます。一をパーセント値で指定する場合は、 <code>0%</code> が開始点を示し、 <code>100%</code> が終了点を示します。但し、実現したい効果を得るために必要であれば、この範囲外の値を使用することもできます。位置を指定しないままにした場合は、その色経由点の位置は自動的に計算され、最初の色経由点は <code>0%</code> に、最後の色経由点は <code>100%</code> になり、他の色経由点は隣の色経由点の間の中間点になります。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="multicolor-linear"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css notranslate">.multicolor-linear {
   background: linear-gradient(to left, lime 28px, red 77%, cyan);
}
</pre>

<p>{{ EmbedLiveSample('Positioning_color_stops', 120, 120) }}</p>
</div>

<div>
<h3 id="Creating_hard_lines" name="Creating_hard_lines">不連続線の生成</h3>

<p>2つの色の間に不連続線を生成して、グラデーションの遷移の代わりに縞模様を生成するなら、隣り合う色経由点を同じ位置に設定することができます。この例では、二つの色がグラデーションの中央である <code>50%</code> の色経由点を共有しています。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="striped"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css notranslate">.striped {
   background: linear-gradient(to bottom left, cyan 50%, palegoldenrod 50%);
}</pre>

<p>{{ EmbedLiveSample('Creating_hard_lines', 120, 120) }}</p>
</div>

<div>
<h3 id="Gradient_hints" name="Gradient_hints">グラデーションのヒント</h3>

<p>既定では、グラデーションは1つの色から次の色へ均等に変化します。色ヒントを加えることで、変化値の中央点をグラデーションの特定の位置に移動することができます。この例では、変化の中央点を 50% の位置から 10% の位置へ移動します。</p>

<div class="hidden">
<pre class="brush: html notranslate" dir="rtl">&lt;div class="color-hint"&gt;&lt;/div&gt;
&lt;div class="simple-linear"&gt;&lt;/div&gt;</pre>

<pre class="brush: css notranslate">div {
  width: 120px;
  height: 120px; float: left; margin-right: 10px;
}</pre>
</div>

<pre class="brush: css notranslate">.color-hint {
  background: linear-gradient(blue, 10%, pink);
}
.simple-linear {
  background: linear-gradient(blue, pink);
}</pre>

<p>{{ EmbedLiveSample('Gradient_hints', 120, 120) }}</p>
</div>

<div>
<h3 id="Creating_color_bands_stripes" name="Creating_color_bands_stripes">色の帯と縞の生成</h3>

<p>グラデーションの中に単色で遷移しない色の領域を含めるには、色経由点に2つの位置を含めます。色経由点には2つの位置を設定することができ、これは、異なる位置に同じ色を持つ2つの連続した色経由点に相当します。色は、第1の色経由点で完全な彩度に達し、第2の色経由点までその彩度を維持し、隣接する色経由点の第1の位置を介して隣接する色経由点の色に遷移します。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="multiposition-stops"&gt;&lt;/div&gt;
&lt;div class="multiposition-stop2"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">div {
  width: 120px;
  height: 120px;
  float: left; margin-right: 10px; box-sizing: border-box;
}</pre>
</div>

<pre class="brush: css notranslate">.multiposition-stops {
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
</pre>

<p>{{ EmbedLiveSample('Creating_color_bands_stripes', 120, 120) }}</p>

<p>上記の第1の例では、ライムは、暗黙の 0% の位置から 20% の位置まで進み、グラデーションの幅の次の 10% の間にライムから赤へと変化し、 30% の位置で単色の赤に到達し、グラデーションを通して 45% まで単色の赤のままであり、ここでシアンにフェードアウトし、グラデーションの 15% の間は完全にシアンになる、というようになっています。</p>

<p>第2の例では、各色の2番目の色経由点は、隣接する色の第1の色経由点と同じ位置にあり、縞模様の効果を生み出しています。</p>

<p>いずれの例でも、グラデーションは2回書かれます。第1の例は CSS Images Level 3 の方法で、色経由点ごとに色を繰り返しており、第2の例は CSS Images Level 4 の方法で、それぞれの色経由点の宣言に色経由の長さが2つずつ含まれています。</p>
</div>

<div>
<h3 id="Controlling_the_progression_of_a_gradient" name="Controlling_the_progression_of_a_gradient">グラデーションの進行の制御</h3>

<p>既定では、グラデーションは隣接する2つの色経由点の色の間で均等に進行し、それら2つの色経由点の間の中間点が中間の色の値となります。カラーヒントの位置を指定することで、2つの色経由点間の補間、つまり進行を制御することができます。この例では、色はグラデーションの途中でライムとシアンの間の中間点に到達しますが、 50% の割合ではなく、 20% の割合で到達しています。第2の例では、カラーヒントが作ることができる違いをハイライトするためのヒントは含まれていません。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="colorhint-gradient"&gt;&lt;/div&gt; &lt;div class="regular-progression"&gt;&lt;/div&gt;

</pre>

<pre class="brush: css notranslate">div {
  width: 120px;
  height: 120px;
  float: left; margin-right: 10px; box-sizing: border-box;
}</pre>
</div>

<pre class="brush: css notranslate">.colorhint-gradient {
  background: linear-gradient(to top, black, 20%, cyan);
}
.regular-progression {
  background: linear-gradient(to top, black, cyan);
}
</pre>

<p>{{ EmbedLiveSample('Controlling_the_progression_of_a_gradient', 120, 120) }}</p>
</div>

<h3 id="Overlaying_gradients" name="Overlaying_gradients">グラデーションの重ね合わせ</h3>

<p>グラデーションは透明度に対応しているので、複数の背景を重ねて、かなり派手な効果を得ることができます。背景は上から下に重ねられ、最初に指定されたものが上になります。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="layered-image"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">div {
  width: 300px;
  height: 150px;
}</pre>
</div>

<pre class="brush: css notranslate">.layered-image {
  background: linear-gradient(to right, transparent, mistyrose),
      url("https://mdn.mozillademos.org/files/15525/critters.png");
}
</pre>

<p>{{ EmbedLiveSample('Overlaying_gradients', 300, 150) }}</p>

<h3 id="Stacked_gradients" name="Stacked_gradients">グラデーションの積み重ね</h3>

<p>グラデーションを他のグラデーションと重ねることもできます。上のグラデーションが完全に不透明でない限り、下のグラデーションは表示されます。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="stacked-linear"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">div {
  width: 200px;
  height: 200px;
}</pre>
</div>

<pre class="brush: css notranslate">.stacked-linear {
  background:
      linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
      linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
      linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
}
</pre>

<p>{{ EmbedLiveSample('Stacked_gradients', 200, 200) }}</p>

<h2 id="Using_radial_gradients" name="Using_radial_gradients">放射グラデーションの使用</h2>

<p>放射グラデーションは線形グラデーションと似ていますが、中心点から放射状に広がる点が異なります。中心点をどこに置くかは決めることができます。円形や楕円形を作成することもできます。</p>

<h3 id="A_basic_radial_gradient" name="A_basic_radial_gradient">基本的な放射グラデーション</h3>

<p>線形グラデーションと同様に、放射グラデーションを作成するために必要なのは 2 つの色だけです。既定では、グラデーションの中心は 50% 50% の位置にあり、グラデーションはボックスの縦横比に合わせて楕円形になっています。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="simple-radial"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">div {
  width: 240px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css notranslate">.simple-radial {
  background: radial-gradient(red, blue);
}
</pre>

<p>{{ EmbedLiveSample('A_basic_radial_gradient', 120, 120) }}</p>

<h3 id="Positioning_radial_color_stops" name="Positioning_radial_color_stops">放射色経由点の配置</h3>

<p>ここでも線形グラデーションのように、放射の各色経由点をパーセント値または絶対長で配置することができます。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="radial-gradient"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css notranslate">.radial-gradient {
  background: radial-gradient(red 10px, yellow 30%, #1e90ff 50%);
}
</pre>

<p>{{ EmbedLiveSample('Positioning_radial_color_stops', 120, 120) }}</p>

<h3 id="Positioning_the_center_of_the_gradient" name="Positioning_the_center_of_the_gradient">グラデーションの中心の配置</h3>

<p>グラデーションの中心の位置は、キーワード、パーセント値、絶対的な長さで配置することができ、長さとパーセント値が1つだけの場合は繰り返して用いられ、それ以外の場合は左からの位置と上からの位置の順で用いられます。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="radial-gradient"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">div {
  width: 120px;
  height: 240px;
}</pre>
</div>

<pre class="brush: css notranslate">.radial-gradient {
  background: radial-gradient(at 0% 30%, red 10px, yellow 30%, #1e90ff 50%);
}
</pre>

<p>{{ EmbedLiveSample('Positioning_the_center_of_the_gradient', 120, 120) }}</p>

<h3 id="Sizing_radial_gradients" name="Sizing_radial_gradients">放射グラデーションの大きさの変更</h3>

<p>線形グラデーションとは異なり、放射グラデーションは大きさを指定することができます。指定可能な値には、 closest-corner, closest-side, farthest-corner, farthest-side があり、 farthest-corner が既定値です。</p>

<h4 id="Example_closest-side_for_ellipses" name="Example_closest-side_for_ellipses">例: 楕円の closest-side</h4>

<p>This example uses the <code>closest-side</code> size value, which means the size is set by the distance from the starting point (the center) to the closest side of the enclosing box.</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="radial-ellipse-side"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">div {
  width: 240px;
  height: 100px;
}</pre>
</div>

<pre class="brush: css notranslate">.radial-ellipse-side {
  background: radial-gradient(ellipse closest-side,
      red, yellow 10%, #1e90ff 50%, beige);
}
</pre>

<p>{{ EmbedLiveSample('Example_closest-side_for_ellipses', 240, 100) }}</p>

<h4 id="Example_farthest-corner_for_ellipses" name="Example_farthest-corner_for_ellipses">例: 楕円の farthest-corner</h4>

<p>This example is similar to the previous one, except that its size is specified as <code>farthest-corner</code>, which sets the size of the gradient by the distance from the starting point to the farthest corner of the enclosing box from the starting point.</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="radial-ellipse-far"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">div {
  width: 240px;
  height: 100px;
}</pre>
</div>

<pre class="brush: css notranslate">.radial-ellipse-far {
  background: radial-gradient(ellipse farthest-corner at 90% 90%,
      red, yellow 10%, #1e90ff 50%, beige);
}
</pre>

<p>{{ EmbedLiveSample('Example_farthest-corner_for_ellipses', 240, 100) }}</p>

<h4 id="Example_closest-side_for_circles" name="Example_closest-side_for_circles">例: 縁の closest-side</h4>

<p>This example uses <code>closest-side</code>, which makes the circle's size to be the distance between the starting point (the center) and the closest side. The circle's radius is the distance between the center of the gradient and the closest edge, which due to the positioning of the 25% from the top and 25% from the bottom, is closest to the bottom, since the height in this case is narrower than the width.</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="radial-circle-close"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">div {
  width: 240px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css notranslate">.radial-circle-close {
  background: radial-gradient(circle closest-side at 25% 75%,
      red, yellow 10%, #1e90ff 50%, beige);
}
</pre>

<p>{{ EmbedLiveSample('Example_closest-side_for_circles', 240, 120) }}</p>

<h3 id="Stacked_radial_gradients" name="Stacked_radial_gradients">放射グラデーションの積み重ね</h3>

<p>Just like linear gradients, you can also stack radial gradients. The first specified is on top, the last on the bottom.</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="stacked-radial"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">div {
  width: 200px;
  height: 200px;
}</pre>
</div>

<pre class="brush: css notranslate">.stacked-radial {
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
</pre>

<p>{{ EmbedLiveSample('Stacked_radial_gradients', 200, 200) }}</p>

<h2 id="Using_conic_gradients" name="Using_conic_gradients">扇形グラデーションの使用</h2>

<p><strong><code>conic-gradient()</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の関数で、 (中心から広がるのではなく) 中心点の周りを回りながら色が変化するグラデーションから成る画像を生成します。扇型グラデーションの例としては、円グラフや色相環などがありますが、チェッカーボードやその他の面白い効果を生み出すために使用することもできます。</p>

<p>扇形グラデーションは放射グラデーションの構文と似ていますが、色経由点はグラデーションの中心から現れるグラデーションライン上ではなく、グラデーションアーク、すなわち円周上に配置され、色経由点はパーセント値または角度で表します。絶対的な長さは有効ではありません。</p>

<p>In a radial gradient, the colors transition from the center of an ellipse, outward, in all directions. With conic gradients, the colors transition as as if spun around the center of a circle, starting at the top and going clockwise. Similar to radial gradients, you can position the center of the gradient. Similar to linear gradients, you can change the gradient angle.</p>

<div>
<h3 id="A_basic_conic_gradient" name="A_basic_conic_gradient">基本的な扇形グラデーション</h3>

<p>As with linear and radial gradients, all you need to create a conic gradient are two colors. By default, the center of the gradient is at the 50% 50% mark, with the start of the gradient facing up:</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="simple-conic"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css notranslate">.simple-conic {
  background: conic-gradient(red, blue);
}
</pre>

<p>{{ EmbedLiveSample('A_basic_conic_gradient', 120, 120) }}</p>
</div>

<div>
<h3 id="Positioning_the_conic_center" name="Positioning_the_conic_center">扇形の中央の配置</h3>

<p>Like radial gradients, you can position the center of the conic gradient with keyterms, percentage, or absolute lengths, with the keyword "at"</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="conic-gradient"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css notranslate">.conic-gradient {
  background: conic-gradient(at 0% 30%, red 10%, yellow 30%, #1e90ff 50%);
}
</pre>

<p>{{ EmbedLiveSample('Positioning_the_conic_center', 120, 120) }}</p>
</div>

<div>
<h3 id="Changing_the_angle" name="Changing_the_angle">角度の変更</h3>

<p>Like radial gradients, you can position the center of the conic gradient with keyterms, percentage, or absolute lengths, with the keyword "at"</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="conic-gradient"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css notranslate">.conic-gradient {
  background: conic-gradient(from 45deg, red, orange, yellow, green, blue, purple);
}
</pre>

<p>{{ EmbedLiveSample('Changing_the_angle', 120, 120) }}</p>
</div>

<h2 id="Using_repeating_gradients" name="Using_repeating_gradients">反復グラデーションの使用</h2>

<p>The {{cssxref("linear-gradient")}}, {{cssxref("radial-gradient")}}, and {{cssxref("conic-gradient")}} functions don't support automatically repeated color stops. However, the {{cssxref("repeating-linear-gradient")}}, {{cssxref("repeating-radial-gradient")}}, and {{cssxref("repeating-conic-gradient")}} functions are available to offer this functionality.</p>

<p>The size of the gradient line or arc that repeats is the length between the first color stop value and the last color stop length value. If the first color stop just has a color and no color stop length, the value defaults to 0. If the last color stop has just a color and no color stop length, the value defaults to 100%. If neither is declared, the gradient line is 100% meaning the linear and conic gradients will not repeat and the radial gradient will only repeat if the radius of the gradient is smaller than the length between the center of the gradient and the farthest corner. If the first color stop is declared, and the value is greater than 0, the gradient will repeat, as the size of the line or arc is the difference between the first color stop and last color stop is less than 100% or 360 degrees.</p>

<div>
<h3 id="Repeating_linear_gradients" name="Repeating_linear_gradients">反復線形グラデーション</h3>

<p>This example uses {{cssxref("repeating-linear-gradient")}} to create a gradient that progresses repeatedly in a straight line. The colors get cycled over again as the gradient repeats. In this case the gradient line is 10px long.</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="repeating-linear"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css notranslate">.repeating-linear {
  background: repeating-linear-gradient(-45deg, red, red 5px, blue 5px, blue 10px);
}
</pre>

<p>{{ EmbedLiveSample('Repeating_linear_gradients', 120, 120) }}</p>
</div>

<div>
<h3 id="Multiple_repeating_linear_gradients" name="Multiple_repeating_linear_gradients">複数の反復線形グラデーション</h3>

<p>Similar to regular linear and radial gradients, you can include multiple gradients, one on top of the other. This only makes sense if the gradients are partially transparent allowing subsequent gradients to show through the transparent areas, or if you include different <a href="/ja/docs/Web/CSS/background-size">background-sizes</a>, optionally with different <a href="/ja/docs/Web/CSS/background-position">background-position</a> property values, for each gradient image. We are using transparency.</p>

<p>In this case the gradient lines are 300px, 230px, and 300px long.</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="multi-repeating-linear"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">div {
  width: 600px;
  height: 400px;
}</pre>
</div>

<pre class="brush: css notranslate">.multi-repeating-linear {
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
</pre>

<p>{{ EmbedLiveSample('Multiple_repeating_linear_gradients', 600, 400) }}</p>
</div>

<h3 id="Plaid_gradient" name="Plaid_gradient">格子縞のグラデーション</h3>

<p>To create plaid we include several overlapping gradients with transparency. In the first background declaration we listed every color stop separately. The second background property declaration using the multiple position color stop syntax:</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="plaid-gradient"&gt;&lt;/div&gt;</pre>

<pre class="brush: css notranslate">div {
  width: 200px;
  height: 200px;
}</pre>
</div>

<pre class="brush: css notranslate">.plaid-gradient {
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
</pre>

<p>{{ EmbedLiveSample('Plaid_gradient', 200, 200) }}</p>

<h3 id="Repeating_radial_gradients" name="Repeating_radial_gradients">反復放射グラデーション</h3>

<p>この例は {{cssxref("repeating-radial-gradient")}} を使用して、中央店から放射状に反復されるグラデーションを生成します。色はグラデーションが反復するたびに周期的に繰り返されます。</p>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="repeating-radial"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">div {
  width: 120px;
  height: 120px;
}</pre>
</div>

<pre class="brush: css notranslate">.repeating-radial {
  background: repeating-radial-gradient(black, black 5px, white 5px, white 10px);
}
</pre>

<p>{{ EmbedLiveSample('Repeating_radial_gradients', 120, 120) }}</p>

<h3 id="複数の反復放射グラデーション">複数の反復放射グラデーション</h3>

<div class="hidden">
<pre class="brush: html notranslate">&lt;div class="multi-target"&gt;&lt;/div&gt;
</pre>

<pre class="brush: css notranslate">div {
  width: 250px;
  height: 150px;
}</pre>
</div>

<pre class="brush: css notranslate">.multi-target {
  background:
      repeating-radial-gradient(ellipse at 80% 50%,rgba(0,0,0,0.5),
        rgba(0,0,0,0.5) 15px, rgba(255,255,255,0.5) 15px,
        rgba(255,255,255,0.5) 30px) top left no-repeat,
      repeating-radial-gradient(ellipse at 20% 50%,rgba(0,0,0,0.5),
        rgba(0,0,0,0.5) 10px, rgba(255,255,255,0.5) 10px,
        rgba(255,255,255,0.5) 20px) top left no-repeat yellow;
  background-size: 200px 200px, 150px 150px;
}
</pre>

<p>{{ EmbedLiveSample('Multiple_repeating_radial_gradients', 250, 150) }}</p>

<h2 id="See_also" name="See_also">関連記事</h2>

<ul>
 <li>グラデーション関数: {{cssxref("linear-gradient")}}, {{cssxref("radial-gradient")}}, {{cssxref("conic-gradient")}}, {{cssxref("repeating-linear-gradient")}}, {{cssxref("repeating-radial-gradient")}}, {{cssxref("repeating-conic-gradient")}}</li>
 <li>グラデーション関連の CSS データ型: {{cssxref("&lt;gradient&gt;")}}, {{cssxref("&lt;image&gt;")}}</li>
 <li>グラデーション関連の CSS プロパティ: {{cssxref("background")}}, {{cssxref("background-image")}}</li>
 <li><a class="external" href="http://lea.verou.me/css3patterns/">CSS Gradients Patterns Gallery, by Lea Verou</a></li>
 <li><a class="external" href="http://standardista.com/cssgradients">CSS3 Gradients Library, by Estelle Weyl</a></li>
 <li><a href="https://cssgenerator.org/gradient-css-generator.html">Gradient CSS Generator</a></li>
</ul>
