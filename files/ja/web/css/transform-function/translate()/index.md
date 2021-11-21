---
title: translate()
slug: Web/CSS/transform-function/translate()
tags:
  - CSS
  - CSS Function
  - CSS Transforms
  - Function
  - Reference
translation_of: Web/CSS/transform-function/translate()
---
<div>{{CSSRef}}</div>

<p><strong><code>translate()</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の<a href="/ja/docs/Web/CSS/CSS_Functions">関数</a>は、要素を水平方向や垂直方向で再配置します。結果は {{cssxref("&lt;transform-function&gt;")}} データ型になります。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/12121/translate.png" style="height: 195px; width: 249px;"></p>

<p>この変換は、二次元ベクトルであることが特徴です。それぞれの方向にどれだけ要素が動くかの座標を定義します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css notranslate">/* 単一の &lt;length-percentage&gt; 値 */
transform: translate(200px);
transform: translate(50%);

/* 二つの &lt;length-percentage&gt; 値 */
transform: translate(100px, 200px);
transform: translate(100px, 50%);
transform: translate(30%, 200px);
transform: translate(30%, 50%);
</pre>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt>単一の <code>&lt;length-percentage&gt;</code> values</dt>
 <dd>この値は {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} で、変換ベクトルの横軸 (水平方向、X 座標) を表します。変換ベクトルの縦軸 (垂直方向、Y 座標) は <code>0</code> に設定されます。例えば、 <code>translate(2)</code> は <code>translate(2, 0)</code> と等価です。パーセント値の場合は、 {{cssxref("transform-box")}} で定義される参照ボックスの幅からの相対値です。</dd>
 <dt>二つの <code>&lt;length-percentage&gt;</code> 値</dt>
 <dd>この値は2つの {{cssxref("&lt;length&gt;")}} または {{cssxref("&lt;percentage&gt;")}} 値で、変換ベクトルの横軸 (水平方向、X 座標) と縦軸 (垂直方向、Y 座標) を表します。1つ目にパーセント値が使用された場合は、 {{cssxref("transform-box")}} で定義された参照ボックスの幅からの相対値で、2つ目にパーセント値が使用された場合は、高さからの相対値です。</dd>
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
   <td><math> <mfenced><mtable><mtr>1<mtd>0</mtd><mtd>tx</mtd></mtr><mtr>0<mtd>1</mtd><mtd>ty</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>1<mtd>0</mtd><mtd>tx</mtd></mtr><mtr>0<mtd>1</mtd><mtd>ty</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
   <td colspan="1" rowspan="2"><math> <mfenced><mtable><mtr>1<mtd>0</mtd><mtd>0</mtd><mtd>tx</mtd></mtr><mtr>0<mtd>1</mtd><mtd>0</mtd><mtd>ty</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd><mtd>0</mtd></mtr><mtr><mtd>0</mtd><mtd>0</mtd><mtd>0</mtd><mtd>1</mtd></mtr></mtable> </mfenced> </math></td>
  </tr>
  <tr>
   <td><code>[1 0 0 1 tx ty]</code></td>
  </tr>
 </tbody>
</table>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

<pre class="syntaxbox notranslate">translate({{cssxref("&lt;length-percentage&gt;")}} , {{cssxref("&lt;length-percentage&gt;")}}<a href="/ja/docs/Web/CSS/Value_definition_syntax#Question_mark_()">?</a>)
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_a_single-axis_translation" name="Using_a_single-axis_translation">単一軸を使用した変形</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div&gt;Static&lt;/div&gt;
&lt;div class="moved"&gt;Moved&lt;/div&gt;
&lt;div&gt;Static&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translate(10px); /* translateX(10px) または translate(10px, 0) と同じ */
  background-color: pink;
}
</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample("Using_a_single-axis_translation", 250, 250)}}</p>

<h3 id="Combining_y-axis_and_x-axis_translation" name="Combining_y-axis_and_x-axis_translation">Y 軸と X 軸の変換の組み合わせ</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html notranslate">&lt;div&gt;Static&lt;/div&gt;
&lt;div class="moved"&gt;Moved&lt;/div&gt;
&lt;div&gt;Static&lt;/div&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css notranslate">div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translate(10px, 10px);
  background-color: pink;
}
</pre>

<h4 id="Result_2" name="Result_2">結果</h4>

<p>{{EmbedLiveSample("Combining_y-axis_and_x-axis_translation", 250, 250)}}</p>

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
   <td>{{SpecName('CSS3 Transforms', '#funcdef-transform-translate', 'translate()')}}</td>
   <td>{{Spec2('CSS3 Transforms')}}</td>
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
