---
title: rotate()
slug: Web/CSS/transform-function/rotate()
tags:
  - CSS
  - CSS 変換
  - CSS 関数
  - Reference
translation_of: Web/CSS/transform-function/rotate()
---
<div>{{CSSRef}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>rotate()</code></strong> 関数は、要素を二次元平面上の特定の点を中心に、変形させずに回転させます。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。</p>

<p>要素が回転する中心となる特定の点 — 前述 — は、<strong>変形原点</strong>とも呼ばれます。既定では要素の中央ですが、 {{ cssxref("transform-origin") }} プロパティを使用して独自の変形原点を設定することができます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>rotate()</code> で生成される回転の量は、 {{cssxref("&lt;angle&gt;")}} で指定します。正の数であれば、移動は時計回りです。負の数であれば、反時計回りになります。180度で回転したものは<em>点対称</em>と呼ばれます。</p>

<pre class="syntaxbox notranslate">rotate(<var>a</var>)
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><var>a</var></dt>
 <dd>{{ cssxref("&lt;angle&gt;") }} で、回転する角度を表します。正の数の角度は時計回りの回転を、負の数の角度は反時計回りの回転を表します。</dd>
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
   <td colspan="1" rowspan="2"><math> <mfenced> <mtable> <mtr><mtd>cos(a)</mtd><mtd>-sin(a)</mtd></mtr> <mtr><mtd>sin(a)</mtd><mtd>cos(a)</mtd></mtr></mtable></mfenced></math></td>
   <td><math> <mfenced><mtable><mtr><mtd>cos(a)</mtd><mtd>-sin(a)</mtd><mtd>0</mtd></mtr><mtr><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr><mtd>cos(a)</mtd><mtd>-sin(a)</mtd><mtd>0</mtd></mtr><mtr><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr><mtd>cos(a)</mtd><mtd>-sin(a)</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr><mtd>sin(a)</mtd><mtd>cos(a)</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
  </tr>
  <tr>
   <td><code>[cos(a) sin(a) -sin(a) cos(a) 0 0]</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Basic_example" name="Basic_example">基本的な例</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div&gt;Normal&lt;/div&gt;
&lt;div class="rotated"&gt;Rotated&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotate(45deg); /* rotateZ(45deg) と等価 */
  background-color: pink;
}
</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample("Basic_example", "auto", 180)}}</p>

<h3 id="Combining_rotation_with_another_transformation" name="Combining_rotation_with_another_transformation">回転とその他の変形の組み合わせ</h3>

<p>複数の変形を要素に適用したい場合は、変形を指定する順序に気を付けてください。例えば、平行移動前に回転すると、平行移動によって回転の軸が変わってしまいます。</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html notranslate">&lt;div&gt;Normal&lt;/div&gt;
&lt;div class="rotate"&gt;Rotated&lt;/div&gt;
&lt;div class="rotate-translate"&gt;Rotated + Translated&lt;/div&gt;
&lt;div class="translate-rotate"&gt;Translated + Rotated&lt;/div&gt;
</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css notranslate">div {
  position: absolute;
  left: 40px;
  top: 40px;
  width: 100px;
  height: 100px;
  background-color: lightgray;
}

.rotate {
  background-color: transparent;
  outline: 2px dashed;
  transform: rotate(45deg);
}

.rotate-translate {
  background-color: pink;
  transform: rotate(45deg) translateX(180px);
}

.translate-rotate {
  background-color: gold;
  transform: translateX(180px) rotate(45deg);
}
</pre>

<h4 id="結果">結果</h4>

<p>{{EmbedLiveSample("Combining_rotation_with_another_transformation", "auto", 320)}}</p>

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
   <td>{{SpecName("CSS3 Transforms", "#funcdef-transform-rotate", "rotate()")}}</td>
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
 <li><code><a href="/ja/docs/Web/CSS/transform-function/rotate3d">rotate3d()</a></code></li>
</ul>
