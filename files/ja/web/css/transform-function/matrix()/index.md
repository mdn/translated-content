---
title: matrix()
slug: Web/CSS/transform-function/matrix()
tags:
  - CSS
  - CSS 変換
  - CSS 関数
  - Reference
translation_of: Web/CSS/transform-function/matrix()
---
<div>{{CSSRef}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>matrix()</code></strong> 関数は、二次元同次変換行列を定義します。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。</p>

<div class="note">
<p><strong>メモ:</strong> <code>matrix(a, b, c, d, tx, ty)</code> は <code><a href="/ja/docs/Web/CSS/transform-function/matrix3d">matrix3d</a>(a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, tx, ty, 0, 1)</code> の短縮形です。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>matrix()</code> 関数は6つの値で指定されます。定数は内蔵されていて引数としては渡されず、その他の引数は列優先の順で記述されます。</p>

<div class="note"><strong>メモ:</strong> Firefox 16 までは、 Gecko は {{cssxref("&lt;length&gt;")}} 値を <var>tx</var> および <var>ty</var> で受け付けていました。</div>

<pre class="syntaxbox">matrix(<var>a</var>, <var>b</var>, <var>c</var>, <var>d</var>, <var>tx</var>, <var>ty</var>)
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><var>a</var> <var>b</var> <var>c</var> <var>d</var></dt>
 <dd>{{cssxref("&lt;number&gt;")}} で、線形変換を記述します。</dd>
 <dt><var>tx</var> <var>ty</var></dt>
 <dd>{{cssxref("&lt;number&gt;")}} で、適用する変換を記述します。</dd>
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
   <td colspan="1" rowspan="2"><math> <mfenced> <mtable> <mtr><mtd>a</mtd><mtd>c</mtd></mtr> <mtr><mtd>b</mtd><mtd>d</mtd></mtr> </mtable> </mfenced> </math></td>
   <td><math> <mfenced> <mtable> <mtr><mtd>a</mtd><mtd>c</mtd><mtd>tx</mtd></mtr><mtr><mtd>b</mtd><mtd>d</mtd><mtd>ty</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced> <mtable> <mtr><mtd>a</mtd><mtd>c</mtd><mtd>tx</mtd></mtr><mtr><mtd>b</mtd><mtd>d</mtd><mtd>ty</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced> <mtable> <mtr><mtd>a</mtd><mtd>c</mtd><mtd>0</mtd><mtd>tx</mtd></mtr><mtr><mtd>b</mtd><mtd>d</mtd><mtd>0</mtd><mtd>ty</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
  </tr>
  <tr>
   <td><code>[a b c d tx ty]</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;Normal&lt;/div&gt;
&lt;div class="changed"&gt;Changed&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.changed {
  transform: matrix(1, 2, -1, 1, 80, 80);
  background-color: pink;
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Examples", 350, 350)}}</p>

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
   <td>{{SpecName("CSS3 Transforms", "#funcdef-transform-matrix", "matrix()")}}</td>
   <td>{{Spec2("CSS3 Transforms")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p><code><a href="/ja/docs/Web/CSS/transform-function#Browser_compatibility">&lt;transform-function&gt;</a></code> データ型の互換性情報をご覧ください。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("transform")}}</li>
 <li>{{cssxref("&lt;transform-function&gt;")}}</li>
 <li><code><a href="/ja/docs/Web/CSS/transform-function/matrix3d">matrix3d()</a></code></li>
 <li><a href="https://dev.opera.com/articles/understanding-the-css-transforms-matrix/">Understanding the CSS Transforms Matrix</a></li>
</ul>
