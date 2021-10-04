---
title: tab-size
slug: Web/CSS/tab-size
tags:
  - CSS
  - CSS Property
  - CSS テキスト
  - CSS プロパティ
  - Experimental
  - Reference
translation_of: Web/CSS/tab-size
---
<div>{{CSSRef}}{{SeeCompatTable}}</div>

<p>CSS の <strong><code>tab-size</code></strong> プロパティは、タブ文字 (<code>U+0009</code>) の表示幅の指定に用います。</p>

<pre class="brush:css">/* &lt;integer&gt; 値 */
tab-size: 4;
tab-size: 0;

/* &lt;length&gt; 値 */
tab-size: 10px;
tab-size: 2em;

/* グローバル値 */
tab-size: inherit;
tab-size: initial;
tab-size: unset;
</pre>

<p>{{CSSInfo}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<h3 id="Values" name="Values">値</h3>

<dl>
 <dt>{{CSSxRef("&lt;integer&gt;")}}</dt>
 <dd>タブの空白文字の文字数です。正の数でなければなりません。</dd>
 <dt>{{CSSxRef("&lt;length&gt;")}}</dt>
 <dd>タブの幅です。正の数でなければなりません。</dd>
</dl>

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: css">pre {
  tab-size: 4; /* スペース 4 つ分となります */
}
</pre>

<pre class="brush: css">pre {
  tab-size: 0; /* インデント除去 */
}
</pre>

<pre class="brush: css">pre {
  tab-size: 2; /* タブの幅をスペース 2 個分に設定 */
}
</pre>

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
   <td>{{SpecName('CSS3 Text', '#tab-size-property', 'tab-size')}}</td>
   <td>{{Spec2('CSS3 Text')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>



<p>{{Compat("css.properties.tab-size")}}</p>

<p> </p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a class="external" href="https://lists.w3.org/Archives/Public/www-style/2008Dec/0009.html"><cite>Controlling size of a tab character (U+0009)</cite></a> - Anne van Kesteren 氏 (Opera) からの CSSWG へのメール</li>
</ul>
