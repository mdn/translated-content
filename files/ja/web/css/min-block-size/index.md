---
title: min-block-size
slug: Web/CSS/min-block-size
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - Experimental
  - Reference
  - min-block-size
  - 'recipe:css-property'
translation_of: Web/CSS/min-block-size
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><code>min-block-size</code> は <a href="/ja/docs/Web/CSS" title="CSS">CSS</a> のプロパティで、書字方向に応じて要素ブロックの水平または垂直方向の最小の寸法を定義します。これは {{cssxref("min-width")}} または {{cssxref("min-height")}} のどちらかのプロパティと、 {{cssxref("writing-mode")}} の値に応じて対応します。</span></p>

<p>書字方向が垂直方向であった場合、 <code>min-block-size</code> の値は要素の最小幅に対応します。そうでなければ、要素の最小の高さに対応します。関連プロパティの {{cssxref("min-inline-size")}} が要素のもう一方の寸法を定義します。</p>

<div>{{EmbedInteractiveExample("pages/css/min-block-size.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers notranslate">/* &lt;length&gt; 値 */
min-block-size: 100px;
min-block-size: 5em;

/* &lt;percentage&gt; 値 */
min-block-size: 10%;

/* キーワード値 */
min-block-size: max-content;
min-block-size: min-content;
min-block-size: fit-content(20em);

/* グローバル値 */
min-block-size: inherit;
min-block-size: initial;
min-block-size: unset;
</pre>

<h3 id="Values" name="Values">値</h3>

<p><code>min-block-size</code> プロパティは {{cssxref("min-width")}} および {{cssxref("min-height")}} の各プロパティと同じ値を取ります。</p>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{cssinfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Setting_minimum_block_size_for_vertical_text" name="Setting_minimum_block_size_for_vertical_text">縦書きでブロック方向の最小寸法を設定</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;p class="exampleText"&gt;Example text&lt;/p&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  min-block-size: 200px;
}</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample("Setting_minimum_block_size_for_vertical_text")}}</p>

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
   <td>{{SpecName("CSS Logical Properties", "#propdef-min-block-size", "min-block-size")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.min-block-size")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>対応付けされる物理的プロパティ: {{cssxref("min-width")}} および {{cssxref("min-height")}}</li>
 <li>{{cssxref("writing-mode")}}</li>
</ul>
