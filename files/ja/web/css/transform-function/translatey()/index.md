---
title: translateY()
slug: Web/CSS/transform-function/translateY()
tags:
  - CSS
  - CSS Function
  - CSS Transforms
  - Function
  - Reference
translation_of: Web/CSS/transform-function/translateY()
---
<div>{{CSSRef}}</div>

<p><strong><code>translateX()</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の<a href="/ja/s/Web/CSS/CSS_Functions">function</a>で、要素を二次元平面上の水平方向で再配置します。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/3544/transform-functions-translateX_2.png" style="height: 146px; width: 243px;"></p>

<div class="note">
<p><strong>注:</strong> <code>translateX(tx)</code> は <code><a href="/ja/s/Web/CSS/transform-function/translate">translate</a>(tx, 0)</code> または <code><a hrehref="/ja/eb/CSS/transform-function/translate3d">translate3d</a>(tx, 0, 0)</code> と等価です。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css notranslate">/* &lt;length-percentage&gt; values */
transform: translateX(200px);
transform: translateX(50%);
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>&lt;length-percentage&gt;</code></dt>
 <dd>変換ベクトルの横座標を表す {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} です。パーセント値は {{cssxref("transform-box")}} プロパティで定義される参照ボックスの幅からの相対値です。</dd>
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
   <td colspan="1" rowspan="2">
    <p>ℝ<sup>2</sup> では線形変換ではないので、デカルト座標の行列で表すことはできない。</p>
   </td>
   <td><math> <mfenced><mtable><mtr>1<mtd>0</mtd><mtd>t</mtd></mtr><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>1<mtd>0</mtd><mtd>t</mtd></mtr><mtr>0<mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>t</mtd></mtr><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
  </tr>
  <tr>
   <td><code>[1 0 0 1 t 0]</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;div&gt;Static&lt;/div&gt;
&lt;div class="moved"&gt;Moved&lt;/div&gt;
&lt;div&gt;Static&lt;/div&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translateX(10px); /* translate(10px) と等価 */
  background-color: pink;
}
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Examples", 250, 250)}}</p>

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
   <td>{{SpecName("CSS3 Transforms", "#funcdef-transform-translatex", "translateX()")}}</td>
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
