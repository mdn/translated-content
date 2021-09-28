---
title: border-inline-width
slug: Web/CSS/border-inline-width
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - CSS プロパティ
  - CSS 論理的プロパティ
  - Experimental
  - Reference
translation_of: Web/CSS/border-inline-width
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p><strong><code>border-inline-width</code></strong> は <a href="/ja/docs/Web/CSS" title="CSS">CSS</a> のプロパティで、要素の論理的なインライン方向の境界の幅を定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界の幅に対応付けられます。これは {{cssxref("border-top-width")}} と {{cssxref("border-bottom-width")}}、または {{cssxref("border-left-width")}} と {{cssxref("border-right-width")}} の組み合わせのどちらか対応し、どちらに対応するかは {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値によって決まります。</p>

<pre class="brush:css no-line-numbers">/* &lt;'border-width'&gt; 値 */
border-inline-width: 5px 10px;
border-inline-width: 5px;
border-inline-width: thick;
</pre>

<p>他の方向の境界の幅については、 {{cssxref("border-block-width")}} によって、 {{cssxref("border-block-start-width")}} と {{cssxref("border-block-end-width")}} を設定することができます。</p>

<p>{{cssinfo}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>&lt;'border-width'&gt;</code></dt>
 <dd>境界の幅です。 {{cssxref("border-width")}} を参照してください。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Example" name="Example">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;div&gt;
  &lt;p class="exampleText"&gt;Example text&lt;/p&gt;
&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  border: 1px solid blue;
  border-inline-width: 5px 10px;
}</pre>

<p>{{EmbedLiveSample("Example", 140, 140)}}</p>

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
   <td>{{SpecName("CSS Logical Properties", "#propdef-border-inline-width", "border-inline-width")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.border-inline-width")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>このプロパティは {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, {{cssxref("border-left-width")}} のうちの1つに対応します</li>
 <li>{{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}</li>
</ul>
