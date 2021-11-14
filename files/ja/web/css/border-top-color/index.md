---
title: border-top-color
slug: Web/CSS/border-top-color
tags:
  - CSS
  - CSS Borders
  - CSS Property
  - Reference
  - 'recipe:css-property'
translation_of: Web/CSS/border-top-color
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><strong><code>border-top-color</code></strong> は CSS のプロパティで、要素の上側の<a href="/ja/docs/Web/CSS/border">境界線</a>の色を設定します。</span>一括指定プロパティの {{cssxref("border-color")}} または {{cssxref("border-top")}} でも設定することができます。</p>

<div>{{EmbedInteractiveExample("pages/css/border-top-color.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: css no-line-numbers  language-css notranslate">/* &lt;color&gt; 値 */
border-top-color: red;
border-top-color: #ffbb00;
border-top-color: rgb(255, 0, 0);
border-top-color: hsla(100%, 50%, 25%, 0.75);
border-top-color: currentcolor;
border-top-color: transparent;

/* グローバル値 */
border-top-color: inherit;
border-top-color: initial;
border-top-color: unset;
</pre>

<p><code>border-top-color</code> プロパティは1つの値で指定します。</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt>{{cssxref("&lt;color&gt;")}}</dt>
 <dd>上の境界線の色を定義します。</dd>
</dl>

<h2 id="Formal_definition" name="Formal_definition">公式定義</h2>

<p>{{CSSInfo}}</p>

<h2 id="Formal_syntax" name="Formal_syntax">形式文法</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="A_simple_div_with_a_border" name="A_simple_div_with_a_border">境界線が付いた単純な div</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div class="mybox"&gt;
  &lt;p&gt;これは周囲に境界線があるボックスです。
     なお、ボックスのその辺が
     &lt;span class="redtext"&gt;赤&lt;/span&gt;になっています。&lt;/p&gt;
&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">.mybox {
  border: solid 0.3em gold;
  border-top-color: red;
  width: auto;
}

.redtext {
  color: red;
}</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample('A_simple_div_with_a_border')}}</p>

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
   <td>{{SpecName('CSS3 Backgrounds', '#border-top-color', 'border-top-color')}}</td>
   <td>{{Spec2('CSS3 Backgrounds')}}</td>
   <td>目立った変更はないが、<code>transparent</code> キーワードが {{cssxref("&lt;color&gt;")}} 含められたので、形式的には削除された。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'box.html#propdef-border-top-color', 'border-top-color')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.border-top-color")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>境界に関する CSS 一括指定プロパティ: {{cssxref("border")}}, {{cssxref("border-top")}}, {{cssxref("border-color")}}.</li>
 <li>他の境界線の色に関する CSS プロパティ: {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}}, {{cssxref("border-left-color")}}</li>
 <li>同じ境界線に適用される他の境界関連の CSS プロパティ: {{cssxref("border-top-style")}}, {{cssxref("border-top-width")}}</li>
</ul>
