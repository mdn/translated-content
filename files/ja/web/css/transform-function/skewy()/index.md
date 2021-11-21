---
title: skewY()
slug: Web/CSS/transform-function/skewY()
tags:
  - CSS
  - CSS Function
  - CSS Transforms
  - Function
  - Reference
translation_of: Web/CSS/transform-function/skewY()
---
<div>{{CSSRef}}</div>

<p><strong><code>skewY()</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> <a href="/ja/docs/Web/CSS/CSS_Functions">関数</a>で、要素を二次元平面上で垂直方向にゆがめる変換を定義します。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。</p>

<div>{{EmbedInteractiveExample("pages/css/function-skewY.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<p>この変換はシアー変形 ({{interwiki('wikipedia', 'せん断写像')}}) で、要素内のそれぞれの点を垂直方向に指定された角度でゆがませます。それぞれの点の縦座標は、指定された角度と原点からの距離に比例した値によって変更されます。よって、原点から遠くなるにしたがって、加えられる値が大きくなります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">skewY(<var>a</var>)
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code><var>a</var></code></dt>
 <dd>{{cssxref("&lt;angle&gt;")}} で、縦座標方向にゆがめるのに使用する角度を表します。</dd>
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
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>1<mtd>0</mtd></mtr><mtr>tan(a)<mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td><math> <mfenced><mtable><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr><mtr>tan(a)<mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>1<mtd>0</mtd><mtd>0</mtd></mtr><mtr>tan(a)<mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr>tan(a)<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
  </tr>
  <tr>
   <td><code>[1 tan(a) 0 1 0 0]</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;div&gt;Normal&lt;/div&gt;
&lt;div class="skewed"&gt;Skewed&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.skewed {
  transform: skewY(40deg);
  background-color: pink;
}
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Examples", 200, 200)}}</p>

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
   <td>{{SpecName("CSS3 Transforms", "#funcdef-transform-skewy", "skewY()")}}</td>
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
</ul>
