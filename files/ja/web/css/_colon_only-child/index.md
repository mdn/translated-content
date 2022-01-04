---
title: ':only-child'
slug: 'Web/CSS/:only-child'
tags:
  - CSS
  - ウェブ
  - セレクター
  - リファレンス
  - レイアウト
  - 擬似クラス
translation_of: 'Web/CSS/:only-child'
---
<div>{{CSSRef}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>:only-child</code></strong> <a href="/ja/docs/Web/CSS/Pseudo-classes" title="Pseudo-classes">疑似クラス</a>は、兄弟要素がない要素を表します。 <code>:first-child:last-child</code> または <code>:nth-child(1):nth-last-child(1)</code> と同じですが、詳細度はより低くなります。</p>

<pre class="brush: css no-line-numbers">/* 親の唯一の子である &lt;p&gt; 要素をすべて選択 */
p:only-child {
  background-color: lime;
}</pre>

<div class="note">
<p><strong>メモ:</strong> 最初の定義では、親のある要素のみが選択されていました。 Selectors Level 4 の初期に、これは必要なくなりました。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Basic_example" name="Basic_example">基本的な例</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;div&gt;
  &lt;div&gt;I am an only child.&lt;/div&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;div&gt;I am the 1st sibling.&lt;/div&gt;
  &lt;div&gt;I am the 2nd sibling.&lt;/div&gt;
  &lt;div&gt;I am the 3rd sibling, &lt;div&gt;but this is an only child.&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">div:only-child {
  color: red;
}

div {
  display: inline-block;
  margin: 6px;
  outline: 1px solid;
}
</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample('Basic_example','100%',180)}}</p>

<h3 id="A_list_example" name="A_list_example">リストの例</h3>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;ol&gt;
  &lt;li&gt;First
    &lt;ul&gt;
      &lt;li&gt;This list has just one element.&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Second
    &lt;ul&gt;
      &lt;li&gt;This list has three elements.&lt;/li&gt;
      &lt;li&gt;This list has three elements.&lt;/li&gt;
      &lt;li&gt;This list has three elements.&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ol&gt;
</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">li li {
  list-style-type: disc;
}

li:only-child {
  color: red;
  list-style-type: square;
}</pre>

<h4 id="Result_2" name="Result_2">結果</h4>

<p>{{EmbedLiveSample('A_list_example', '100%', 210)}}</p>

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
   <td>{{SpecName('CSS4 Selectors', '#only-child-pseudo', ':only-child')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>選択する要素に親を必要としないようにした。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#only-child-pseudo', ':only-child')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<div>
<p>{{Compat("css.selectors.only-child")}}</p>
</div>
</div>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li>{{Cssxref(":only-of-type")}}</li>
 <li>{{Cssxref(":first-child")}}</li>
 <li>{{Cssxref(":last-child")}}</li>
 <li>{{Cssxref(":nth-child")}}</li>
</ul>
