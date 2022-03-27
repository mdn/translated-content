---
title: DOMTokenList.entries()
slug: Web/API/DOMTokenList/entries
tags:
- DOM
- DOMTokenList
- Iterable
- Method
- Reference
- Web
translation_of: Web/API/DOMTokenList/entries
---
<div>{{APIRef("DOM")}}</div>

<p><span class="seoSummary"><code><strong>DOMTokenList.entries()</strong></code> メソッドは、このオブジェクトに含まれるすべてのキー/値の組を処理することができる{{jsxref("Iteration_protocols","反復子","",1)}}を返します。値は {{domxref("DOMString")}} オブジェクトであり、それぞれが単一のトークンを表します。</span></p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js"><var>tokenList</var>.entries();</pre>

<h3 id="Return_value">返値</h3>

<p>{{jsxref("Iteration_protocols","反復子","",1)}}を返します。</p>

<h2 id="Examples">例</h2>

<p>次の例では、 {{htmlelement("span")}} 要素に設定されたクラスのリストを <code>DOMTokenList</code> として受け取るのに {{domxref("Element.classList")}} を使用しています。 <code>entries()</code> を使用してキー/値の組を含む反復子を取得してから、 {{jsxref("Statements/for...of", "for...of")}} ループを使用してそれぞれを反復処理し、それを <code>&lt;span&gt;</code> の {{domxref("Node.textContent")}} に書き込みます。</p>

<p>最初に HTML です。</p>

<pre class="brush: html">&lt;span class="a b c"&gt;&lt;/span&gt;</pre>

<p>そして JavaScript です。</p>

<pre class="brush: js">let span = document.querySelector("span");
let classes = span.classList;
let iterator = classes.entries();

for (let value of iterator) {
  span.textContent += value + ' ++ ';
}</pre>

<p>出力結果は以下のようになります。</p>

<p>{{ EmbedLiveSample('Examples', '100%', 60) }}</p>

<h2 id="Specifications">仕様書</h2>

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
      <td>{{SpecName('DOM WHATWG','#domtokenlist','entries() (as iterable&lt;Node&gt;)')}}
      </td>
      <td>{{Spec2('DOM WHATWG')}}</td>
      <td>初回定義</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.DOMTokenList.entries")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>{{domxref("DOMSettableTokenList")}} (DOMTokenList を設定可能な <em>.value</em> プロパティで拡張したオブジェクト)</li>
</ul>
