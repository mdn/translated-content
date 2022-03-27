---
title: DOMTokenList.values()
slug: Web/API/DOMTokenList/values
tags:
- DOM
- DOMTokenList
- Iterable
- Method
- Reference
- Web
- values
translation_of: Web/API/DOMTokenList/values
---
<p>{{APIRef("DOM")}}</p>

<p><code><strong>values()</strong></code> は {{domxref("DOMTokenList")}} インターフェイスのメソッドで、開発者がこの <code>DOMTokenList</code> に含まれるすべての値を処理することができる{{jsxref("Iteration_protocols","反復子","",1)}}を返します。それぞれの値の型は {{domxref("DOMString")}} オブジェクトです。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js">tokenList.values();</pre>

<h3 id="Parameters">引数</h3>

<p>なし</p>

<h3 id="Return_value">返値</h3>

<p>{{jsxref("Iteration_protocols","反復子","",1)}}を返します。</p>

<h2 id="Examples">例</h2>

<p>次の例では、 {{domxref("Element.classList")}} を使用して {{htmlelement("span")}} 要素に設定されたクラスのリストを <code>DOMTokenList</code> として受け取ります。 <code>values()</code> を使用して値を含む反復子を取得してから、 <a href="/ja/docs/Web/JavaScript/Reference/Statements/for...of">for ... of</a> ループを使用してそれぞれを反復処理し、それを <code>&lt;span&gt;</code> の {{domxref("Node.textContent")}} に書き込みます。</p>

<p>最初に HTML です。</p>

<pre class="brush: html">&lt;span class="a b c"&gt;&lt;/span&gt;</pre>

<p>そして JavaScript です。</p>

<pre class="brush: js">var span = document.querySelector("span");
var classes = span.classList;
var iterator = classes.values();

for(var value of iterator) {
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
      <td>{{SpecName('DOM WHATWG','#domtokenlist','values() (as iterable&lt;Node&gt;)')}}
      </td>
      <td>{{Spec2('DOM WHATWG')}}</td>
      <td>初回定義</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.DOMTokenList.values")}}</p>
