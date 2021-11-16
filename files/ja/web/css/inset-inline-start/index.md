---
title: inset-inline-start
slug: Web/CSS/inset-inline-start
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Experimental
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/inset-inline-start
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><strong><code>inset-inline-start</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> のプロパティで、要素における行頭からの論理的な内部位置を定義し、要素の書字方向やテキストの向きに従って物理的なオフセットに対応付けられます。</span> {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}} のいずれかのプロパティに、 {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値に従って対応します。</p>

<pre class="brush:css no-line-numbers notranslate">/* &lt;length&gt; 値 */
inset-inline-start: 3px;
inset-inline-start: 2.4em;

/* 包含ブロックの幅または高さに対する &lt;percentage&gt; 値 */
inset-inline-start: 10%;

/* キーワード値 */
inset-inline-start: auto;

/* グローバル値 */
inset-inline-start: inherit;
inset-inline-start: initial;
inset-inline-start: unset;
</pre>

<p><code>inset-inline-start</code> と {{cssxref("inset-inline-end")}} の一括指定は {{cssxref("inset-inline")}} です。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<h3 id="Values" name="Values">値</h3>

<p><code>inset-inline-start</code> プロパティは {{cssxref("left")}} プロパティと同じ値を取ります。</p>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Setting_inline_start_offset" name="Setting_inline_start_offset">インライン方向の先頭のオフセットの設定</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div&gt;
  &lt;p class="exampleText"&gt;テキストの例&lt;/p&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  position: relative;
  inset-inline-start: 20px;
  background-color: #c8c800;
}</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample("Setting_inline_start_offset", 140, 140)}}</p>

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
   <td>{{SpecName("CSS Logical Properties", "#propdef-inset-inline-start", "inset-inline-start")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.inset-inline-start")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>内部位置を定義する他のプロパティ: {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-end")}}</li>
 <li>対応する物理プロパティ: {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, {{cssxref("left")}}</li>
 <li>{{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}</li>
</ul>
