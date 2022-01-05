---
title: 一般兄弟結合子
slug: Web/CSS/General_sibling_combinator
tags:
  - CSS
  - Reference
  - Selectors
  - セレクター
translation_of: Web/CSS/General_sibling_combinator
---
<div>{{CSSRef("Selectors")}}</div>

<p><strong>一般兄弟結合子</strong> (general sibling combinator, <code>~</code>) は2個のセレクターを結びつけます。右側のセレクタで選択される要素のうち、次の条件をともにみたすものを選択します。</p>

<p>まず、右側のセレクタで選択される要素が、左側のセレクタで選択される要素より後に現れることです。（直後である必要はありません）</p>

<p>もうひとつは、これらの要素が同じ親要素（{{Glossary("element", "要素")}}）をもつことです。</p>

<pre class="brush: css no-line-numbers notranslate">/* 任意の画像の兄弟で、
   その画像より後方にある段落 */
img ~ p {
  color: red;
}</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">先行する要素 ~ 選択される要素 { <em>スタイルプロパティ</em> }
</pre>

<h2 id="Example" name="Example">例</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">p ~ span {
  color: red;
}</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;span&gt;This is not red.&lt;/span&gt;
&lt;p&gt;Here is a paragraph.&lt;/p&gt;
&lt;code&gt;Here is some code.&lt;/code&gt;
&lt;span&gt;And here is a red span!&lt;/span&gt;
&lt;code&gt;More code...&lt;/code&gt;
&lt;span&gt;And this is a red span!&lt;/span&gt;
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Example", "100%", 120)}}</p>

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
   <td>{{SpecName("CSS4 Selectors", "#general-sibling-combinators", "subsequent-sibling combinator")}}</td>
   <td>{{Spec2("CSS4 Selectors")}}</td>
   <td>名前を"subsequent-sibling combinator"に変更。</td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Selectors", "#general-sibling-combinators", "general sibling combinator")}}</td>
   <td>{{Spec2("CSS3 Selectors")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("css.selectors.general_sibling")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/Adjacent_sibling_combinator">隣接兄弟結合子</a></li>
</ul>
