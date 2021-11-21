---
title: skew()
slug: Web/CSS/transform-function/skew()
tags:
  - CSS
  - CSS Function
  - CSS Transforms
  - Function
  - Reference
translation_of: Web/CSS/transform-function/skew()
---
<div>{{CSSRef}}</div>

<p><strong><code>skew()</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> <a href="/ja/docs/Web/CSS/CSS_Functions">関数</a>で、要素を二次元平面上でゆがめる変換を定義します。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。</p>

<div>{{EmbedInteractiveExample("pages/css/function-skew.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<p>この変換はシアー変形 ({{interwiki('wikipedia', 'せん断写像')}}) で、要素内のそれぞれの点を水平および垂直方向に指定された角度でゆがませます。要素のそれぞれの角を掴んで、一定の角度に沿って引っ張ったような効果があります。</p>

<p>それぞれの点の座標は、指定された角度と原点からの距離に比例した値によって変更されます。よって、原点から遠くなるにしたがって、加えられる値が大きくなります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>skew()</code> で生成される回転の量は、 {{cssxref("&lt;angle&gt;")}} で指定します。正の数であれば、移動は時計回りです。負の数であれば、反時計回りになります。1つだけ値を設定した場合は X 軸に使用され、 Y 軸方向の変形は行いません。</p>

<pre class="syntaxbox notranslate">skew(<var>ax</var>)

skew(<var>ax</var>, <var>ay</var>)
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code><var>ax</var></code></dt>
 <dd>{{cssxref("&lt;angle&gt;")}} で、 X 軸 (横座標) 方向にゆがめるのに使用する角度を表します。</dd>
 <dt><code><var>ay</var></code></dt>
 <dd>{{cssxref("&lt;angle&gt;")}} で、 Y 軸 (縦座標) 方向にゆがめるのに使用する角度を表します。定義されていない場合、既定値は <code>0</code> となり、水平方向にのみゆがめます。</dd>
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
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>1<mtd>tan(ax)</mtd></mtr><mtr>tan(ay)<mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td><math> <mfenced><mtable><mtr>1<mtd>tan(ax)</mtd><mtd>0</mtd></mtr><mtr>tan(ay)<mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr><mtr></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>1<mtd>tan(ax)</mtd><mtd>0</mtd></mtr><mtr>tan(ay)<mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>1<mtd>tan(ax)</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr>tan(ay)<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
  </tr>
  <tr>
   <td><code>[1 tan(ay) tan(ax) 1 0 0]</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Skewing_on_the_x-axis_only" name="Skewing_on_the_x-axis_only">X 軸のみの変形</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div&gt;Normal&lt;/div&gt;
&lt;div class="skewed"&gt;Skewed&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">body {
  margin: 20px;
}

div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.skewed {
  transform: skew(10deg); /* Equal to skewX(10deg) */
  background-color: pink;
}
</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample("Skewing_on_the_x-axis_only", 200, 200)}}</p>

<h3 id="Skewing_on_both_axes" name="Skewing_on_both_axes">両方の軸の変形</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html notranslate">&lt;div&gt;Normal&lt;/div&gt;
&lt;div class="skewed"&gt;Skewed&lt;/div&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css notranslate">body {
  margin: 20px;
}

div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.skewed {
  transform: skew(10deg, 10deg);
  background-color: pink;
}
</pre>

<h4 id="Result_2" name="Result_2">結果</h4>

<p>{{EmbedLiveSample("Skewing_on_both_axes", 200, 200)}}</p>

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
   <td>{{SpecName("CSS3 Transforms", "#funcdef-transform-skew", "skew()")}}</td>
   <td>{{Spec2("CSS3 Transforms")}}</td>
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
 <li><a href="/ja/docs/Web/CSS/transform-function/skewX">skewX()</a></li>
 <li><a href="/ja/docs/Web/CSS/transform-function/skewY">skewY()</a></li>
</ul>
