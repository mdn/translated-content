---
title: DOMTokenList.item()
slug: Web/API/DOMTokenList/item
tags:
- API
- DOM
- DOMTokenList
- Method
- Reference
- item
translation_of: Web/API/DOMTokenList/item
---
<p>{{APIRef("DOM")}}</p>

<p><code><strong>item()</strong></code> は {{domxref("DOMTokenList")}} インターフェイスのメソッドで、リスト内の要素をその位置から取得します。</p>

<h2 id="Syntax">構文</h2>

<pre
  class="brush: js"><var>tokenList</var>.item(<var>index</var>)</pre>

<h3 id="Parameters">引数</h3>

<dl>
  <dt><code><var>index</var></code></dt>
  <dd>32 ビット符号なし整数 ({{jsxref("Number")}}) で、返したい要素の位置を表します。
  </dd>
</dl>

<h3 id="Return_value">返値</h3>

<p>{{domxref("DOMString")}} で、返された要素を表します。数値がそのリストの <code>length</code> 以上であった場合は <code>null</code> を返します。</p>

<h2 id="Examples">例</h2>

<p>次の例は、 {{htmlelement("span")}} 要素に設定されたクラスのリストを {{domxref("Element.classList")}} を使用して <code>DOMTokenList</code> として取得します。それからリスト内の最後の要素を <code>item(<var>tokenList</var>.length - 1)</code> を使用して取得し、 <code>&lt;span&gt;</code> の {{domxref("Node.textContent")}} の中に書き込みます。</p>

<p>最初に HTML です。</p>

<pre class="brush: html">&lt;span class="a b c"&gt;&lt;/span&gt;</pre>

<p>そして JavaScript です。</p>

<pre class="brush: js">let span = document.querySelector("span");
let classes = span.classList;
let item = classes.item(classes.length-1);
span.textContent = item;</pre>

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
      <td>{{SpecName('DOM WHATWG','#dom-domtokenlist-item','item()')}}</td>
      <td>{{Spec2('DOM WHATWG')}}</td>
      <td>初回定義</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.DOMTokenList.item")}}</p>
