---
title: ':not()'
slug: 'Web/CSS/:not'
tags:
  - ':not()'
  - CSS
  - Layout
  - Negation
  - Pseudo-class
  - Reference
  - Selector
  - Web
translation_of: 'Web/CSS/:not'
---
<div>{{CSSRef}}</div>

<p><strong><code>:not()</code></strong> は <a href="/ja/docs/Web/CSS">CSS</a> の<a href="/ja/docs/Web/CSS/Pseudo-classes">擬似クラス</a>で、列挙されたセレクターに一致しない要素を表します。特定の項目が選択されることを防ぐため、<em>否定擬似クラス (negation pseudo-class)</em> と呼ばれています。</p>

<pre class="brush: css no-line-numbers notranslate">/* 段落以外の要素を選択 */
:not(p) {
  color: blue;
}</pre>

<p><code>:not()</code> 擬似クラスには、使用する前に知っておいた方が良い<a href="/ja/docs/Web/CSS/:not#Description">クセやコツ、予想外の結果</a>がいくつかあります。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<p><code>:not()</code> 擬似クラスは引数として、1つまたは複数のセレクターをカンマで区切ったものを要求します。リストには否定セレクターや<a href="/ja/docs/Web/CSS/Pseudo-elements">擬似要素</a>を含めることはできません。</p>

<div class="warning">
<p>複数のセレクターを指定することは実験的な機能で、広くは対応されていません。</p>
</div>

{{csssyntax}}

<h2 id="Description" name="Description">解説</h2>

<p><code>:not()</code> を使用する際のふつうではない効果や結果がいくつかありますので、使用する際には気を付けてください。</p>

<ul>
 <li><code>:not</code> 擬似クラスは入れ子にすることができません。すなわち <code>:not(:not(...))</code> は無効です。</li>
 <li>擬似要素は単純セレクターではありませんので、 <code>:not()</code> で有効な引数にはなりません。従って、 <code>:not(p::before)</code> のようなセレクターは動作しません。</li>
 <li>この擬似クラスを使用して無意味なセレクターを書くことができます。例えば、 <code>:not(*)</code> は要素ではないすべての要素を選択するので、規則は適用されません。</li>
 <li>この擬似クラスは規則の<a href="/ja/docs/Web/CSS/Specificity">詳細度</a>を上げることができます。例えば、 <code>#foo:not(#bar)</code> は単純な <code>#foo</code> と同じ要素を選択しますが、詳細度はより高くなります。</li>
 <li><code>:not(.foo)</code> は <code>.foo</code> ではないすべての要素を選択するため、<em>{{HTMLElement("html")}} や {{HTMLElement("body")}} も選択します。</em></li>
 <li>このセレクターは1つの要素のみに適用されます。先祖要素を除外することはできません。例えば、 <code>body :not(table) a</code> はテーブル内のリンクにも適用されます。 {{HTMLElement("tr")}} がセレクターの <code>:not()</code> の部分に該当するからです。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html notranslate">&lt;p&gt;I am a paragraph.&lt;/p&gt;
&lt;p class="fancy"&gt;I am so very fancy!&lt;/p&gt;
&lt;div&gt;I am NOT a paragraph.&lt;/div&gt;
</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css notranslate">.fancy {
  text-shadow: 2px 2px 3px gold;
}

/* '.fancy' クラスの中にない &lt;p&gt; 要素 */
p:not(.fancy) {
  color: green;
}

/* &lt;p&gt; 要素ではない要素 */
body :not(p) {
  text-decoration: underline;
}

/* &lt;div&gt; または &lt;span&gt; 要素ではない要素 */
body :not(div):not(span) {
  font-weight: bold;
}

/* '.crazy' または '.fancy' ではない要素 */
/* なお、この文法は十分に対応されていません。 */
body :not(.crazy, .fancy) {
  font-family: sans-serif;
}</pre>

<h3 id="Result" name="Result">結果</h3>

<p>{{EmbedLiveSample('Examples')}}</p>

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
   <td>{{SpecName('CSS4 Selectors', '#negation', ':not()')}}</td>
   <td>{{Spec2('CSS4 Selectors')}}</td>
   <td>引数で単純セレクター以外も許容数量に拡張。</td>
  </tr>
  <tr>
   <td>{{SpecName('CSS3 Selectors', '#negation', ':not()')}}</td>
   <td>{{Spec2('CSS3 Selectors')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("css.selectors.not")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/CSS/Pseudo-classes">擬似クラス</a></li>
 <li><a href="/ja/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements">擬似クラスと擬似要素</a></li>
 <li>関連する CSS 擬似クラス:
  <ul>
   <li>{{cssxref(":has", ":has()")}}</li>
   <li>{{cssxref(":is", ":is()")}}</li>
   <li>{{cssxref(":where", ":where()")}}</li>
  </ul>
 </li>
</ul>
</div>
