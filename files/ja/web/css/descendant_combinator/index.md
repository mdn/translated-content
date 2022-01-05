---
title: 子孫結合子
slug: Web/CSS/Descendant_combinator
tags:
  - CSS
  - Reference
  - Selector
  - Selectors
translation_of: Web/CSS/Descendant_combinator
---
<div>{{CSSRef("Selectors")}}</div>

<p><ruby><strong>子孫結合子</strong><rp> (</rp><rt>descendant combinator</rt><rp>)</rp></ruby> — 通常は単一の空白文字 (<code> </code>) で表される — は2つの CSS セレクターを結合し、1つ目のセレクターに一致する要素が祖先 (親、親の親、親の親の親、など) となっている2つ目のセレクターに一致します。子孫結合子を利用したセレクターは<dfn>子孫セレクター</dfn>と呼ばれます。</p>

<pre class="brush: css no-line-numbers notranslate">/* "my-things" リストの子孫のリスト項目 */
ul.my-things li {
  margin: 2em;
}</pre>

<p>子孫結合子は、技術的には他の結合子がない2つのセレクターの間にある1つ以上の {{Glossary("CSS")}} {{Glossary("Whitespace", "ホワイトスペース")}}文字 ― 空白文字や4種類の制御文字 (復帰、ページ送り、改行、タブ文字) のうちの1つ ― です。さらに、結合子としてのホワイトスペース文字には任意の数の CSS コメントを含めることができます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>セレクター1</var> <var>セレクター2</var> {
  <var>/* プロパティ宣言 */</var>
}</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">li {
  list-style-type: disc;
}

li li {
  list-style-type: circle;
}
</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;ul&gt;
  &lt;li&gt;
    &lt;div&gt;Item 1&lt;/div&gt;
    &lt;ul&gt;
      &lt;li&gt;Subitem A&lt;/li&gt;
      &lt;li&gt;Subitem B&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;div&gt;Item 2&lt;/div&gt;
    &lt;ul&gt;
      &lt;li&gt;Subitem A&lt;/li&gt;
      &lt;li&gt;Subitem B&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ul&gt;
</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample("Examples", "100%", 160)}}</p>

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
   <td>{{SpecName("CSS4 Selectors", "#descendant-combinators", "descendant combinator")}}</td>
   <td>{{Spec2("CSS4 Selectors")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Selectors", "#descendant-combinators", "descendant combinator")}}</td>
   <td>{{Spec2("CSS3 Selectors")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("CSS2.1", "selector.html#descendant-selectors", "descendant selectors")}}</td>
   <td>{{Spec2("CSS2.1")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("CSS1", "#contextual-selectors", "contextual selectors")}}</td>
   <td>{{Spec2("CSS1")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.selectors.descendant")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/Child_combinator">子結合子</a></li>
</ul>
