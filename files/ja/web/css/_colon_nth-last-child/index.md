---
title: ':nth-last-child()'
slug: 'Web/CSS/:nth-last-child'
tags:
  - CSS
  - ウェブ
  - セレクター
  - リファレンス
  - レイアウト
  - 疑似クラス
translation_of: 'Web/CSS/:nth-last-child'
---
<div>{{CSSRef}}</div>

<p><a href="/ja/docs/Web/CSS">CSS</a> の <strong><code>:nth-last-child()</code></strong> <a href="/ja/docs/CSS/Pseudo-classes" title="Pseudo-classes">疑似クラス</a>は、兄弟要素のグループの中での位置に基づいて選択します。</p>

<pre class="brush: css no-line-numbers">/* 兄弟要素の中で、後ろから数えて
   3つおきに要素を選択 */
:nth-last-child(4n) {
  color: lime;
}</pre>

<div class="note">
<p><strong>メモ:</strong> この疑似クラスは、最初から後に向けてではなく<em>最後</em>から前に向けて数えるという点を除けば、本質的に {{Cssxref(":nth-child")}} と同じです。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>nth-last-child</code> 疑似クラスは、要素を選択する最後から数えるパターンを表す引数を1つ取ります。</p>

<h3 id="Keyword_values" name="Keyword_values">キーワード値</h3>

<dl>
 <dt><code>odd</code></dt>
 <dd>一連の兄弟要素の中で、最後から奇数番目の要素 (1, 3, 5, など) を表します。</dd>
 <dt><code>even</code></dt>
 <dd>一連の兄弟要素の中で、最後から偶数番目の要素 (2, 4, 6, など) を表します。</dd>
</dl>

<h3 id="Functional_notation" name="Functional_notation">関数表記</h3>

<dl>
 <dt><code>&lt;An+B&gt;</code></dt>
 <dd>一連の兄弟要素の中で、 <code>n</code> に正の整数か0が入るとき、 <code>An+B</code> のパターンに一致する位置の要素を表します。後ろから数えた最初の要素の番号は <code>1</code> です。 <code>A</code> と <code>B</code> の値は両方とも {{cssxref("&lt;integer&gt;")}} です。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Example_selectors" name="Example_selectors">セレクターの例</h3>

<dl>
 <dt><code>tr:nth-last-child(odd)</code> または <code>tr:nth-last-child(2n+1)</code></dt>
 <dd>HTML テーブルの最後から数えた奇数行 (1, 3, 5, など) を表します。</dd>
 <dt><code>tr:nth-last-child(even)</code> または <code>tr:nth-last-child(2n)</code></dt>
 <dd>HTML テーブルの最後から数えた偶数行 (2, 4, 6, など) を表します。</dd>
 <dt><code>:nth-last-child(7)</code></dt>
 <dd>最後から数えて 7 番目の要素を表します。</dd>
 <dt><code>:nth-last-child(5n)</code></dt>
 <dd>最後から数えて 5, 10, 15 番目などの要素を表します。</dd>
 <dt><code>:nth-last-child(3n+4)</code></dt>
 <dd>最後から数えて 4, 7, 10, 13 番目などの要素を表します。</dd>
 <dt><code>:nth-last-child(-n+3)</code></dt>
 <dd>兄弟要素のグループの中で最後の3つの要素を表します。</dd>
 <dt><code>p:nth-last-child(n)</code> 又は <code>p:nth-last-child(n+1)</code></dt>
 <dd>兄弟要素のグループの中ですべての <code>&lt;p&gt;</code> 要素を表します。これは単純な <code>p</code> セレクターと同じです。 (<code>n</code> はゼロから始まるので、最後の要素が1で始まり、 <code>n</code> 及び <code>n+1</code> が共に同じ要素を選択します。)</dd>
 <dt><code>p:nth-last-child(1)</code> または <code>p:nth-last-child(0n+1)</code></dt>
 <dd>兄弟要素のグループの中で最初の <code>&lt;p&gt;</code> 要素すべてを表します。これは {{cssxref(":last-child")}} セレクターと同じです。</dd>
</dl>

<h3 id="Detailed_example" name="Detailed_example">詳細な例</h3>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;table&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;First line&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Second line&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Third line&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Fourth line&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Fifth line&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
</pre>

<h4 id="CSS">CSS</h4>

<pre class="brush: css">table {
  border: 1px solid blue;
}

/* 最後から3つの要素を選択 */
tr:nth-last-child(-n+3) {
  background-color: pink;
}

/* 後ろから2番目から最初までの要素を選択 */
tr:nth-last-child(n+2) {
  color: blue;
}

/* 後ろから2番目の要素のみを選択 */
tr:nth-last-child(2) {
  font-weight: 600;
}
</pre>

<h4 id="Result" name="Result">結果</h4>

<p>{{EmbedLiveSample('Table_example', 300, 150)}}</p>

<h3 id="Quantity_query" name="Quantity_query">数量クエリ</h3>

<p><em>数量クエリ</em>は、要素が存在する数に応じてスタイル付けします。この例では、リストの中に項目が3つ以上ある場合にリスト項目が赤に変わります。これは <code>nth-last-child</code> 疑似クラスと <a href="/ja/docs/Web/CSS/General_sibling_selectors">一般兄弟結合子</a>の機能を組み合わせることで実現できます。</p>

<h4 id="HTML_2">HTML</h4>

<pre class="brush: html">&lt;h4&gt;4項目のリスト (スタイル付き):&lt;/h4&gt;
&lt;ol&gt;
  &lt;li&gt;One&lt;/li&gt;
  &lt;li&gt;Two&lt;/li&gt;
  &lt;li&gt;Three&lt;/li&gt;
  &lt;li&gt;Four&lt;/li&gt;
&lt;/ol&gt;

&lt;h4&gt;2項目のリスト (スタイルなし):&lt;/h4&gt;
&lt;ol&gt;
  &lt;li&gt;One&lt;/li&gt;
  &lt;li&gt;Two&lt;/li&gt;
&lt;/ol&gt;</pre>

<h4 id="CSS_2">CSS</h4>

<pre class="brush: css">/* 3つ以上のリスト項目がある場合、
   すべてにスタイル付けする */
li:nth-last-child(n+3),
li:nth-last-child(n+3) ~ li {
  color: red;
}</pre>

<h4 id="Result_2" name="Result_2">結果</h4>

<p>{{EmbedLiveSample('Edge_case_example')}}</p>

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
   <td>{{SpecName('CSS4 Selectors', '#nth-last-child-pseudo', ':nth-last-child')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>親を持たない要素も一致するよう追加。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#nth-last-child-pseudo', ':nth-last-child')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<div>
<p>{{Compat("css.selectors.nth-last-child")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{Cssxref(":nth-child")}}, {{Cssxref(":nth-last-of-type")}}</li>
 <li><a href="https://alistapart.com/article/quantity-queries-for-css">CSS の数量クエリ</a></li>
</ul>
