---
title: DOMTokenList.toggle()
slug: Web/API/DOMTokenList/toggle
tags:
- API
- DOM
- DOMTokenList
- Method
- Reference
- toggle
translation_of: Web/API/DOMTokenList/toggle
---
<p>{{APIRef("DOM")}}</p>

<p><code><strong>toggle()</strong></code> は {{domxref("DOMTokenList")}} インターフェイスのメソッドで、渡された <code><var>token</var></code> をリストから削除し、 <code>false</code> を返します。 <em>token</em> が存在しなかった場合は、追加して <code>true</code> を返します。</p>

<h2 id="Syntax">構文</h2>

<pre
  class="brush: js"><var>tokenList</var>.toggle(<var>token</var> [, <var>force</var>]);</pre>

<h3 id="Parameters">引数</h3>

<dl>
  <dt><code><var>token</var></code></dt>
  <dd>{{domxref("DOMString")}} で、存在をトグル切り替えしたいトークンを表します。</dd>
  <dt><code><var>force</var></code> {{optional_inline}}</dt>
  <dd>{{jsxref("Boolean")}} で、存在する場合は、片方の操作のみを行います。 <code>false</code> に設定すると、 <code><var>token</var></code> を削除する<em>だけ</em>となり、追加は行いません。 <code>true</code> に設定すると、 <code><var>token</var></code> を追加する<em>だけ</em>となり、削除は行いません。</dd>
</dl>

<h3 id="Return_value">返値</h3>

<p>{{jsxref("Boolean")}} で、呼び出し後に <code><var>token</var></code> がリストに存在するかどうかを示します。</p>

<h2 id="Examples">例</h2>

<p>以下の例では、 {{htmlelement("span")}} 要素に設定されたクラスのリストを <code>DOMTokenList</code> として受け取るのに {{domxref("Element.classList")}} を使用しています。それからリスト内のトークンを置き換え、リストを <code>&lt;span&gt;</code> の {{domxref("Node.textContent")}} に書き込みます。</p>

<p>最初に HTML です。</p>

<pre class="brush: html">&lt;span class="a b"&gt;classList is 'a b'&lt;/span&gt;</pre>

<p>そして JavaScript です。</p>

<pre class="brush: js">let span = document.querySelector("span");
let classes = span.classList;

span.addEventListener('click', function() {
  let result = classes.toggle("c");

  if (result) {
    span.textContent = `'c' added; classList is now "${classes}".`;
  } else {
    span.textContent = `'c' removed; classList is now "${classes}".`;
  }
})
</pre>

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
      <td>{{SpecName('DOM WHATWG','#dom-domtokenlist-toggle','toggle()')}}</td>
      <td>{{Spec2('DOM WHATWG')}}</td>
      <td>初回定義</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.DOMTokenList.toggle")}}</p>
