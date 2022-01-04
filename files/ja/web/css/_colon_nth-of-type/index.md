---
title: ':nth-of-type()'
slug: 'Web/CSS/:nth-of-type'
tags:
  - CSS
  - Layout
  - Pseudo-class
  - Reference
  - Web
  - セレクター
  - 擬似クラス
translation_of: 'Web/CSS/:nth-of-type'
---
<div>{{CSSRef}}</div>

<p><strong><code>:nth-of-type()</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の<a href="/ja/docs/Web/CSS/Pseudo-classes">擬似クラス</a>で、兄弟要素のグループの中で指定された型 (タグ名) の要素を、位置に基づいて選択します。</p>

<pre class="brush: css no-line-numbers  language-css notranslate">/* 兄弟の &lt;p&gt; 要素の中で、
   3つおきに選択 */
p:nth-of-type(4n) {
  color: lime;
}</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>nth-of-type</code> 擬似クラスは、要素を選択する最後から数えるパターンを表す引数を1つ取ります。</p>

<p>構文の詳しい説明は {{Cssxref(":nth-child")}} を参照してください。</p>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Example" name="Example">例</h2>

<h3 id="Basic_example" name="Basic_example">基本的な例</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html notranslate">&lt;div&gt;
  &lt;div&gt;This element isn't counted.&lt;/div&gt;
  &lt;p&gt;1st paragraph.&lt;/p&gt;
  &lt;p&gt;2nd paragraph.&lt;/p&gt;
  &lt;div&gt;This element isn't counted.&lt;/div&gt;
  &lt;p&gt;3rd paragraph.&lt;/p&gt;
  &lt;p class="fancy"&gt;4th paragraph.&lt;/p&gt;
&lt;/div&gt;</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css notranslate">/* 奇数の段落 */
p:nth-of-type(2n+1) {
  color: red;
}

/* 偶数の段落 */
p:nth-of-type(2n) {
  color: blue;
}

/* 最初の段落 */
p:nth-of-type(1) {
  font-weight: bold;
}

/* .fancy クラスは1番目ではなく4番目の p 要素にしかついていないので、これは効果がありません */
p.fancy:nth-of-type(1) {
  text-decoration: underline;
}
</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample('Basic_example', 250, 200)}}</p>

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
   <td>{{SpecName('CSS4 Selectors', '#nth-of-type-pseudo', ':nth-of-type')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>親を持たない要素も該当するよう追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#nth-of-type-pseudo', ':nth-of-type')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>初回定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("css.selectors.nth-of-type")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{Cssxref(":nth-child")}}, {{Cssxref(":nth-last-of-type")}}</li>
</ul>
