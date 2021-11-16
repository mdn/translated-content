---
title: padding-inline
slug: Web/CSS/padding-inline
tags:
  - CSS
  - padding-inline
  - 'recipe:css-shorthand-property'
translation_of: Web/CSS/padding-inline
---
<div>{{CSSRef}}</div>

<p><strong><code>padding-inline</code></strong> は <a href="/ja/docs/Web/CSS" title="CSS">CSS</a> の<a href="/ja/docs/Web/CSS/Shorthand_properties">一括指定プロパティ</a>で、論理的なインライン方向の先頭と末尾のパディングを設定します。これは要素の書字方向やテキストの向きに応じて物理的なパディングに変換されます。</p>

<pre class="brush:css no-line-numbers notranslate">/* &lt;length&gt; 値 */
padding-inline: 10px 20px;  /* 絶対的な長さ */
padding-inline: 1em 2em;   /* テキストの大きさに対する相対値 */
padding-inline: 10px; /* 先頭と末尾の両方を設定 */

/* &lt;percentage&gt; 値 */
padding-block: 5% 2%; /* 直近のブロックコンテナーの幅に対する相対値 */

/* グローバル値 */
padding-inline: inherit;
padding-inline: initial;
padding-inline: unset;
</pre>

<h2 id="Constituent_properties" name="Constituent_properties">構成要素のプロパティ</h2>

<p>このプロパティは以下の CSS プロパティの一括指定です。</p>

<ul>
 <li>{{cssxref("padding-inline-end")}}</li>
 <li>{{cssxref("padding-inline-start")}}</li>
</ul>

<h2 id="Syntax" name="Syntax">構文</h2>

<h3 id="Values" name="Values">値</h3>

<p><code>padding-inline</code> プロパティは、 {{CSSxRef("padding-left")}} プロパティと同じ値を取ります。</p>

<h2 id="Description" name="Description">解説</h2>

<p>これらの値は、 {{cssxref("padding-top")}} と {{cssxref("padding-bottom")}}、または {{cssxref("padding-right")}} と {{cssxref("padding-left")}} プロパティに、 {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値に従って対応します。</p>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Setting_inline_padding_for_vertical_text" name="Setting_inline_padding_for_vertical_text">縦書きテキストにおけるインライン方向のパディングの設定</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div&gt;
  &lt;p class="exampleText"&gt;Example text&lt;/p&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  padding-inline: 20px 40px;
  background-color: #c8c800;
}</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample("Setting_inline_padding_for_vertical_text", 140, 140)}}</p>

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
   <td>{{SpecName("CSS Logical Properties", "#propdef-padding-inline", "padding-inline")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.padding-inline")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>対応する物理的プロパティ: {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}</li>
 <li>{{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}</li>
</ul>
