---
title: DOMTokenList.forEach()
slug: Web/API/DOMTokenList/forEach
tags:
- DOM
- DOMTokenList
- Iterable
- Method
- Reference
- Web
- forEach
translation_of: Web/API/DOMTokenList/forEach
---
<p>{{APIRef("DOM")}}</p>

<p><strong><code>forEach()</code></strong> は {{domxref("DOMTokenList")}} インターフェイスのメソッドで、リスト中のそれぞれの値の組に対して挿入順で 1 回ずつ、引数で渡されたコールバックを呼び出します。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js"><var>tokenList</var>.forEach(<var>callback</var> [, <var>thisArg</var>]);
</pre>

<h3 id="Parameters">引数</h3>

<dl>
  <dt><code><var>callback</var></code></dt>
  <dd>それぞれの要素に対して呼び出す関数で、 3 つの引数を取ります。
    <dl>
      <dt><code><var>currentValue</var></code></dt>
      <dd>配列内で処理中の現在の要素です。</dd>
      <dt><code><var>currentIndex</var></code></dt>
      <dd>配列内で処理中の現在の要素の位置です。</dd>
      <dt><code><var>listObj</var></code></dt>
      <dd><code>forEach()</code> を実行中の配列です。</dd>
    </dl>
  </dd>
  <dt><code><var>thisArg</var></code> {{Optional_inline}}</dt>
  <dd><code><var>callback</var></code> を実行する際に {{jsxref("Operators/this", "this")}} として使用する値です。
  </dd>
</dl>

<h3 id="Return_value">返値</h3>

<p>{{jsxref('undefined')}}.</p>

<h2 id="Example">例</h2>

<p>次の例では、 {{htmlelement("span")}} 要素に設定されたクラスのリストを <code>DOMTokenList</code> として受け取るのに {{domxref("Element.classList")}} を使用しています。 <code>forEach()</code> を使用して値を含む反復子を取得し、それぞれの値を <code>&lt;span&gt;</code> の {{domxref("Node.textContent")}} に <code>forEach()</code> の中の関数から書き込みます。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;span class="a b c"&gt;&lt;/span&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">let span = document.querySelector("span");
let classes = span.classList;
let iterator = classes.values();

classes.forEach(
  function(value, key, listObj) {
    span.textContent += `${value} ${key}/${this}  ++  `;
  },
  "arg"
);</pre>

<h3 id="Result">結果</h3>

<p>{{ EmbedLiveSample('Example', '100%', 60) }}</p>

<h2 id="Polyfill">ポリフィル</h2>

<p>この{{Glossary("Polyfill","ポリフィル")}}は、 <a href="https://caniuse.com/#search=es5">ES5</a> に対応しているすべてのブラウザーに互換性を追加します。</p>

<pre class="brush: js">if (window.DOMTokenList &amp;&amp; !DOMTokenList.prototype.forEach) {
  DOMTokenList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i &lt; this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
</pre>

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
      <td>{{SpecName('DOM WHATWG','#domtokenlist','forEach() (as iterable&lt;Node&gt;)')}}
      </td>
      <td>{{Spec2('DOM WHATWG')}}</td>
      <td>初回定義</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.DOMTokenList.forEach")}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>{{domxref("DOMSettableTokenList")}} (DOMTokenList を設定可能な <em>.value</em> プロパティで拡張したオブジェクト)</li>
</ul>
