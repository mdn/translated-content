---
title: ':any-link'
slug: 'Web/CSS/:any-link'
tags:
  - CSS
  - CSS 疑似クラス
  - Experimental
  - Reference
  - Web
  - セレクター
  - レイアウト
translation_of: 'Web/CSS/:any-link'
---
<div>{{CSSRef}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>:any-link</code></strong> <a href="/ja/docs/Web/CSS/Pseudo-classes">疑似クラス</a>セレクターは、訪問の有無とは独立したソースアンカーとして振る舞う要素を表します。言い換えれば、 <code>href</code> 属性を持つすべての {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("link")}} の各要素を選択します。つまり、 {{cssxref(":link")}} または {{cssxref(":visited")}} に一致するすべての要素を選択します。</p>

<pre class="brush: css no-line-numbers">/* :link または :visited に該当するすべての要素を選択 */
:any-link {
  color: green;
}</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

{{csssyntax}}

<h2 id="Example" name="Example">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;a href="https://example.com"&gt;External link&lt;/a&gt;&lt;br&gt;
&lt;a href="#"&gt;Internal target link&lt;/a&gt;&lt;br&gt;
&lt;a&gt;Placeholder link (won't get styled)&lt;/a&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">a:any-link {
  border: 1px solid blue;
  color: orange;
}

/* WebKit browsers */
a:-webkit-any-link {
  border: 1px solid blue;
  color: orange;
}
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample('Example')}}</p>

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
   <td>{{SpecName("CSS4 Selectors", "#the-any-link-pseudo", ":any-link")}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.selectors.any-link")}}</p>
