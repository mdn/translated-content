---
title: border-inline-start-style
slug: Web/CSS/border-inline-start-style
tags:
  - CSS
  - CSS Logical Property
  - CSS Property
  - CSS プロパティ
  - CSS 論理的プロパティ
  - Experimental
  - Reference
  - border-inline
  - border-inline-start
  - border-inline-start-style
  - border-inline-style
translation_of: Web/CSS/border-inline-start-style
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p><strong><code>border-inline-start-style</code></strong> は <a href="/ja/docs/Web/CSS" title="CSS">CSS</a> のプロパティで、要素の論理的なブロックの先頭側の境界のスタイルを定義し、それが要素の書字方向やテキストの方向に応じて物理的な境界のスタイルに対応付けられます。これは {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, {{cssxref("border-left-style")}} の何れかに対応し、どれに対応するかは {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}} で定義された値によって決まります。</p>

<div>{{EmbedInteractiveExample("pages/css/border-inline-start-style.html")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush:css no-line-numbers">/* &lt;'border-style'&gt; 値 */
border-inline-start-style: dashed;
border-inline-start-style: dotted;
border-inline-start-style: groove;
</pre>

<p>関連するプロパティとしては、 {{cssxref("border-block-start-style")}}, {{cssxref("border-block-end-style")}}, {{cssxref("border-inline-end-style")}} が要素の他の境界のスタイルを定義します。</p>

<p>{{cssinfo}}</p>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt><code>&lt;'border-style'&gt;</code></dt>
 <dd>境界の線のスタイルです。 {{cssxref("border-style")}} を参照してください。</dd>
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
  border: 5px solid blue;
  border-inline-start-style: dashed;
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
   <td>{{SpecName("CSS Logical Properties", "#propdef-border-inline-start-style", "border-inline-start-style")}}</td>
   <td>{{Spec2("CSS Logical Properties")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.properties.border-inline-start-style")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>このプロパティは {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}}, {{cssxref("border-left-style")}} のうちの一つに対応付けられます</li>
 <li>{{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}</li>
</ul>
