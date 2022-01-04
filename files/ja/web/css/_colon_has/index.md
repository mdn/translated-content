---
title: ':has()'
slug: 'Web/CSS/:has'
tags:
  - CSS
  - Experimental
  - Reference
  - セレクター
  - リファレンス
  - 擬似クラス
translation_of: 'Web/CSS/:has'
---
<div>{{CSSRef}}</div>

<p><span class="seoSummary"><strong><code>:has()</code></strong> は CSS の<a href="/ja/docs/Web/CSS/Pseudo-classes">擬似クラス</a>で、引数として渡されたセレクターに (指定された要素の {{cssxref(":scope")}} の相対で) 該当する要素が一つ以上の要素に一致することを表します。</span></p>

<p><code>:has()</code> 擬似クラスは、セレクターの相対的なリストを引数に取ります。 CSS Selectors Level 4 仕様書よりも前の版では、 <code>:has</code> はスタイルシート内で使用することができず、 {{domxref("document.querySelector()")}} のような関数でのみ利用することができるという制限がありました (性能上の問題です)。そのように実装するブラウザーはなかったので、この制限は撤廃されました。</p>

<pre class="brush: css no-line-numbers">/* &lt;img&gt; 要素を直接中に含む &lt;a&gt; を選択する */
/* なお、これはまだブラウザーが対応していません */
var test = document.querySelector('a:has(&gt; img)');</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

{{CSSSyntax}}

<h2 id="Examples" name="Examples">例</h2>

<p>次のセレクターは、 {{HTMLElement("img")}} を直接子に持つ {{HTMLElement("a")}} 要素のみに一致します。</p>

<pre>a:has(&gt; img)
</pre>

<p>次のセレクターは、直後に {{htmlelement("p")}} 要素を持つ {{HTMLElement("h1")}} 要素のみに一致します。</p>

<pre>h1:has(+ p)</pre>

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
   <td>{{SpecName("CSS4 Selectors", "#relational", ":has()")}}</td>
   <td>{{Spec2("CSS4 Selectors")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("css.selectors.has")}}</p>
