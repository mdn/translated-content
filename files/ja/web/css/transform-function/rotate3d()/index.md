---
title: rotate3d()
slug: Web/CSS/transform-function/rotate3d()
tags:
  - CSS
  - CSS Function
  - CSS Transforms
  - CSS 変形
  - CSS 関数
  - Reference
translation_of: Web/CSS/transform-function/rotate3d()
---
<div>{{CSSRef}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>rotate3d()</code></strong> 関数は、要素を三次元空間内の固定した軸を中心に、変形させずに回転させます。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。</p>

<div>{{EmbedInteractiveExample("pages/css/rotate3d.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<p>3D 空間では、回転には三次元の自由度があり、これらが一緒になって単一の回転軸を表します。回転軸は [x, y, z] ベクトルによって定義され、 ({{ cssxref("transform-origin") }} プロパティで定義される) 原点を通過します。もし、指定値として、ベクトルが<em>正規化</em>されていない場合 (すなわち、3つの座標の2乗の合計が1ではない場合)、{{glossary("user agent", "ユーザーエージェント")}}が内部的に正規化します。正規化できないベクトル、例えば null ベクトル [0, 0, 0] では、回転が無視されますが、 CSS プロパティ全体を無効化はしません。</p>

<div class="note"><strong>メモ:</strong> 二次元平面での回転とは異なり、三次元での回転はふつう交換可能ではありません。言い換えれば、回転の順番が結果に影響を与えます。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>rotate3d()</code> で行う回転の量は、3つの {{cssxref("&lt;number&gt;")}} および1つの {{cssxref("&lt;angle&gt;")}} で指定します。 <code>&lt;number&gt;</code> は回転軸を表すベクトルの X, Y, Z 座標を表します。 <code>&lt;angle&gt;</code> は回転角を表します。正の数の場合、回転方向は時計回りで、負の数の場合、回転方向は反時計回りになります。</p>

<pre class="syntaxbox">rotate3d(<var>x</var>, <var>y</var>, <var>z</var>, <var>a</var>)
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code><var>x</var></code></dt>
 <dd>{{cssxref("&lt;number&gt;")}} で、回転軸を表すベクトルの X 座標を表し、 0 から 1 までの値を取ります。</dd>
 <dt><code><var>y</var></code></dt>
 <dd>{{cssxref("&lt;number&gt;")}} で、回転軸を表すベクトルの Y 座標を表し、 0 から 1 までの値を取ります。</dd>
 <dt><code><var>z</var></code></dt>
 <dd>{{cssxref("&lt;number&gt;")}} で、回転軸を表すベクトルの Z 座標を表し、 0 から 1 までの値を取ります。</dd>
 <dt><code><var>a</var></code></dt>
 <dd>{{ cssxref("&lt;angle&gt;") }} で、回転する角度を表します。正の数の角度は時計回りの回転を、負の数の角度は反時計回りの回転を表します。</dd>
</dl>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">ℝ<sup>2</sup> のデカルト座標</th>
   <td rowspan="2">この変形は三次元空間に適用され、平面で表すことはできません。</td>
  </tr>
  <tr>
   <th scope="col">ℝℙ<sup>2</sup> の同次座標</th>
  </tr>
  <tr>
   <th scope="col">ℝ<sup>3</sup> のデカルト座標</th>
   <td colspan="1"><a href="/@api/deki/files/5987/=transform-functions-rotate3d_cart.png"><img src="/@api/deki/files/5987/=transform-functions-rotate3d_cart.png?size=webview" style="height: 47px; width: 510px;"></a><math> <mfenced><mtable><mtr><mtd>1<mo>+</mo>(1<mo>-</mo>cos(<mi>a</mi>))(<msup><mi>x</mi><mn>2</mn></msup><mo>-</mo>1)</mtd><mtd><mi>z</mi><mo>·</mo>sin(<mi>a</mi>)+<mi>x</mi><mi>y</mi>(1<mo>-</mo>cos(<mi>a</mi>))</mtd><mtd><mo>-</mo><mi>y</mi><mo>·</mo>sin(<mi>a</mi>)<mo>+</mo><mi>x</mi><mi>z</mi><mo>·</mo>(1<mo>-</mo>cos(<mi>a</mi>))</mtd></mtr><mtr><mtd><mo>-</mo><mi>z</mi><mo>·</mo>sin(<mi>a</mi>)<mo>+</mo><mi>x</mi><mi>y</mi><mo>·</mo>(1<mo>-</mo>cos(<mi>a</mi>))</mtd><mtd>1+(1-cos(a))(y2-1)</mtd><mtd><mi>x</mi><mo>·</mo>sin(<mi>a</mi>)<mo>+</mo><mi>y</mi><mi>z</mi><mo>·</mo>(1<mo>-</mo>cos(<mi>a</mi>))</mtd><mtr><mtd>ysin(a) + xz(1-cos(a))</mtd><mtd>-xsin(a)+yz(1-cos(a))</mtd><mtd>1+(1-cos(a))(z2-1)</mtd><mtd>t</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr> </mtr></mtable></mfenced></math></td>
  </tr>
  <tr>
   <th scope="col">ℝℙ<sup>3</sup> の同次座標</th>
   <td colspan="1"><a href="/@api/deki/files/5986/=transform-functions-rotate3d_hom4.png"><img src="/@api/deki/files/5986/=transform-functions-rotate3d_hom4.png?size=webview" style="height: 61px; width: 522px;"></a></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Rotating_on_the_y-axis" name="Rotating_on_the_y-axis">Y 軸に沿って回転</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div&gt;Normal&lt;/div&gt;
&lt;div class="rotated"&gt;Rotated&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">body {
  perspective: 800px;
}

div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotate3d(0, 1, 0, 60deg);
  background-color: pink;
}
</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample("Rotating_on_the_y-axis", "auto", 180)}}</p>

<h3 id="Rotating_on_a_custom_axis" name="Rotating_on_a_custom_axis">独自の軸に沿って回転</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;div&gt;Normal&lt;/div&gt;
&lt;div class="rotated"&gt;Rotated&lt;/div&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">body {
  perspective: 800px;
}

div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotate3d(1, 2, -1, 192deg);
  background-color: pink;
}
</pre>

<h4 id="Result_2" name="Result_2">結果</h4>

<p>{{EmbedLiveSample("Rotating_on_a_custom_axis", "auto", 180)}}</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("CSS Transforms 2", "#funcdef-rotate3d", "rotate3d()")}}</td>
   <td>{{Spec2("CSS Transforms 2")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p><code><a href="/ja/docs/Web/CSS/transform-function#Browser_compatibility">&lt;transform-function&gt;</a></code> データ型の互換性情報をご覧ください。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("transform")}}</li>
 <li>{{cssxref("&lt;transform-function&gt;")}}</li>
</ul>
