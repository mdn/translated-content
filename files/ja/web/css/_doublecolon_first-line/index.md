---
title: '::first-line (:first-line)'
slug: 'Web/CSS/::first-line'
tags:
  - CSS
  - Layout
  - Pseudo-element
  - Reference
  - Selector
translation_of: 'Web/CSS/::first-line'
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><strong><code>::first-line</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の<a href="/ja/docs/Web/CSS/Pseudo-elements">擬似要素</a>で、<a href="/ja/docs/Web/CSS/Visual_formatting_model#Block-level_elements_and_block_boxes">ブロックレベル要素</a>の最初の行にスタイルを適用します。</span>なお、最初の行の長さは要素の幅、文書の幅、文字列のフォントの大きさなど、様々な要因に左右されます。</p>

<pre class="brush: css no-line-numbers notranslate">/* &lt;p&gt; の最初の行を選択 */
p::first-line {
  color: red;
}</pre>

<div class="note">
<p>CSS3 では <code>::first-line</code> という (二重コロン付き) 表記が、 <a href="/ja/docs/Web/CSS/Pseudo-classes">擬似クラス</a>と<a href="/ja/docs/Web/CSS/Pseudo-elements">擬似要素</a>を見分けやすくするために導入されました。ブラウザーでは CSS2 で導入された <code>:first-line</code> も使用できます。</p>
</div>

<h2 id="Allowable_properties" name="Allowable_properties">利用可能なプロパティ</h2>

<p><code>::first-line</code> 擬似要素では、一部の CSS プロパティのみが利用できます。</p>

<ul>
 <li>フォントに関する全プロパティ: {{Cssxref("font")}}, {{cssxref("font-kerning")}}, {{Cssxref("font-style")}}, {{Cssxref("font-variant")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-synthesis")}}, {{cssxref("font-feature-settings")}}, {{cssxref("font-language-override")}}, {{Cssxref("font-weight")}}, {{Cssxref("font-size")}}, {{cssxref("font-size-adjust")}}, {{cssxref("font-stretch")}}, {{Cssxref("font-family")}}</li>
 <li>背景に関する全プロパティ: {{Cssxref("background-color")}}, {{cssxref("background-clip")}}, {{Cssxref("background-image")}}, {{cssxref("background-origin")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}}, {{cssxref("background-size")}}, {{Cssxref("background-attachment")}}, and {{cssxref("background-blend-mode")}}</li>
 <li>{{cssxref("color")}} プロパティ</li>
 <li>{{cssxref("word-spacing")}}, {{cssxref("letter-spacing")}}, {{cssxref("text-decoration")}}, {{cssxref("text-transform")}}, {{cssxref("line-height")}}</li>
 <li>{{cssxref("text-shadow")}}, {{cssxref("text-decoration")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, {{cssxref("vertical-align")}}.</li>
</ul>

<h2 id="Syntax" name="Syntax">構文</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;p&gt;スタイルはこの段落の最初の行にのみ適用されます。
その後のすべての文字列は普通のスタイルになります。分かりますか？&lt;/p&gt;

&lt;span&gt;ブロックレベル要素ではないので、この文字列の最初の行は、
特殊なスタイルになりません。&lt;/span&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">::first-line {
  color: blue;
  text-transform: uppercase;


  /* 警告: これらを使用しないでください */
  /* ::first-line 擬似要素では多くのプロパティが無効になります */
  margin-left: 20px;
  text-indent: 20px;
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample('Examples', 350, 160)}}</p>

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
   <td>{{SpecName('CSS4 Pseudo-Elements', '#first-line-pseudo', '::first-line')}}</td>
   <td>{{Spec2('CSS4 Pseudo-Elements')}}</td>
   <td><code>::first-letter</code> を利用できる場所をもっと厳密に定義。<br>
    利用できるプロパティを組版、文字装飾、インライン配置、 {{cssxref("opacity")}} に一般化。<br>
    <code>::first-letter</code> の継承を定義。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Text Decoration', '#text-shadow-property', 'text-shadow with ::first-line')}}</td>
   <td>{{Spec2('CSS3 Text Decoration')}}</td>
   <td><code>::first-letter</code> で {{cssxref("text-shadow")}} が使用できるようになった。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#first-line', '::first-line')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>擬似要素用の二重コロン構文の導入。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS2.1', 'selector.html#first-line-pseudo', '::first-line')}}</td>
   <td>{{Spec2('CSS2.1')}}</td>
   <td>変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS1', '#the-first-line-pseudo-element', '::first-line')}}</td>
   <td>{{Spec2('CSS1')}}</td>
   <td>初回定義、単一コロン構文を使用。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("css.selectors.first-line")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{cssxref("::first-letter")}}</li>
</ul>
