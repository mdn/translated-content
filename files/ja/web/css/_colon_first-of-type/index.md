---
title: ':first-of-type'
slug: 'Web/CSS/:first-of-type'
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Web
  - セレクター
  - 疑似クラス
translation_of: 'Web/CSS/:first-of-type'
---
<div>{{CSSRef}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>:first-of-type</code></strong> <a href="/ja/docs/CSS/Pseudo-classes" title="Pseudo-classes">疑似クラス</a>は、兄弟要素のグループの中でその種類の最初の要素を表します。</p>

<pre class="brush: css no-line-numbers">/* 兄弟要素の中で最初の &lt;p&gt; 要素をすべて選択 */
p:first-of-type {
  color: red;
}</pre>

<div class="note">
<p><strong>メモ:</strong> 当初の定義では、親のある要素のみが選択されていました。 Selectors Level 4 の初期に、これは必要なくなりました。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Styling_the_first_paragraph" name="Styling_the_first_paragraph">最初の段落の整形</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;h2&gt;Heading&lt;/h2&gt;
&lt;p&gt;Paragraph 1&lt;/p&gt;
&lt;p&gt;Paragraph 2&lt;/p&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">p:first-of-type {
  color: red;
  font-style: italic;
}</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample('Styling_the_first_paragraph')}}</p>

<h3 id="Nested_elements" name="Nested_elements">ネストした要素</h3>

<p>この例は、どうやった入れ子になった要素を対象にするかを示します。なお、単純セレクターが書かれていない場合は、<a href="/ja/docs/Web/CSS/Universal_selectors">ユニバーサルセレクター</a> (<code>*</code>) が暗黙に含まれています。</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;article&gt;
  &lt;div&gt;This `div` is first!&lt;/div&gt;
  &lt;div&gt;This &lt;span&gt;nested `span` is first&lt;/span&gt;!&lt;/div&gt;
  &lt;div&gt;This &lt;em&gt;nested `em` is first&lt;/em&gt;, but this &lt;em&gt;nested `em` is last&lt;/em&gt;!&lt;/div&gt;
  &lt;div&gt;This &lt;span&gt;nested `span` gets styled&lt;/span&gt;!&lt;/div&gt;
  &lt;b&gt;This `b` qualifies!&lt;/b&gt;
  &lt;div&gt;This is the final `div`.&lt;/div&gt;
&lt;/article&gt;
</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">article :first-of-type {
  background-color: pink;
}</pre>

<h4 id="Result_2" name="Result_2">結果</h4>

<p>{{EmbedLiveSample('Nested_elements', 500)}}</p>

<h2 id="Specifications" name="Specifications"><span>仕様書</span></h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('CSS4 Selectors', '#first-of-type-pseudo', ':first-of-type')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>選択する要素に親を必要としないようにした。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#first-of-type-pseudo', ':first-of-type')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>初回定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>
<p>{{Compat("css.selectors.first-of-type")}}</p>
</div>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li>{{Cssxref(":first-child")}}, {{Cssxref(":last-of-type")}}, {{Cssxref(":nth-of-type")}}</li>
</ul>
