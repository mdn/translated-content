---
title: perspective()
slug: Web/CSS/transform-function/perspective()
tags:
  - CSS
  - CSS 変換
  - CSS 関数
  - Reference
translation_of: Web/CSS/transform-function/perspective()
---
<div>{{CSSRef}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>perspective()</code></strong> 関数は、ユーザーと z=0 平面との間の距離を定義し、閲覧者からの視点は二次元のインターフェイスが三次元であったかのようになります。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。</p>

<div>{{EmbedInteractiveExample("pages/css/function-perspective.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<p><code>perspective()</code> 変形関数は、変形される要素に適用される {{cssxref('transform')}} 値の一部です。これは {{cssxref('perspective')}} および {{cssxref('perspective-origin')}} の各プロパティが三次元空間に変形される子の親に付けられるのとは異なります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>perspective()</code> を使用してしている視点距離は {{cssxref("&lt;length&gt;")}} 値で指定し、ユーザーと z=0 平面との間の距離を表します。 z=0 平面は二次元で表示されるすべてのものが表示される平面であり、または画面の平面です。正の数を指定すると、要素はインターフェイスの他のものよりもユーザーの近くに表示され、負の数を指定すると、遠くに表示されます。値がより大きくなるほど、ユーザーの視点は遠ざかります。</p>

<pre class="syntaxbox notranslate">perspective(d)
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><var>d</var></dt>
 <dd>{{cssxref("&lt;length&gt;")}} で、ユーザーと z=0 平面との間の距離を表します。 0 または負の数であった場合は、距離の変換は適用されません。</dd>
</dl>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">ℝ<sup>2</sup> のデカルト座標</th>
   <th scope="col">ℝℙ<sup>2</sup> の同次座標</th>
   <th scope="col">ℝ<sup>3</sup> のデカルト座標</th>
   <th scope="col">ℝℙ<sup>3</sup> の同次座標</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td colspan="2" rowspan="2">
    <p>この変換は三次元空間に適用され、平面で表現することはできません。</p>
   </td>
   <td colspan="1" rowspan="2">この変換は ℝ<sup>3</sup> では線形変換ではないので、デカルト座標行列を使用して表現することはできません。</td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd><mo>−</mo>1<mo>/</mo>d</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;p&gt;Without perspective:&lt;/p&gt;
&lt;div class="no-perspective-box"&gt;
  &lt;div class="face front"&gt;A&lt;/div&gt;
  &lt;div class="face top"&gt;B&lt;/div&gt;
  &lt;div class="face left"&gt;C&lt;/div&gt;
&lt;/div&gt;

&lt;p&gt;With perspective (9cm):&lt;/p&gt;
&lt;div class="perspective-box-far"&gt;
  &lt;div class="face front"&gt;A&lt;/div&gt;
  &lt;div class="face top"&gt;B&lt;/div&gt;
  &lt;div class="face left"&gt;C&lt;/div&gt;
&lt;/div&gt;

&lt;p&gt;With perspective (4cm):&lt;/p&gt;
&lt;div class="perspective-box-closer"&gt;
  &lt;div class="face front"&gt;A&lt;/div&gt;
  &lt;div class="face top"&gt;B&lt;/div&gt;
  &lt;div class="face left"&gt;C&lt;/div&gt;
&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">.face {
  position: absolute;
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-size: 100px;
  text-align: center;
}

p + div {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  margin-left: 100px;
}
.no-perspective-box {
  transform: rotateX(-15deg) rotateY(30deg);
}

.perspective-box-far {
  transform: perspective(9cm) rotateX(-15deg) rotateY(30deg);
}

.perspective-box-closer {
  transform: perspective(4cm) rotateX(-15deg) rotateY(30deg);
}

.top {
  background-color: skyblue;
  transform: rotateX(90deg) translate3d(0, 0, 50px);
}

.left {
  background-color: pink;
  transform: rotateY(-90deg) translate3d(0, 0, 50px);
}

.front {
  background-color: limegreen;
  transform: translate3d(0, 0, 50px);
}
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{ EmbedLiveSample('Examples', '250', '350') }}</p>

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
   <td>{{SpecName("CSS Transforms 2", "#funcdef-perspective", "perspective()")}}</td>
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
