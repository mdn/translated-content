---
title: Element.children
slug: Web/API/Element/children
tags:
  - API
  - DOM
  - Element
  - HTMLCollection
  - Property
  - children
browser-compat: api.Element.children
translation_of: Web/API/Element/children
original_slug: Web/API/ParentNode/children
---
<div>{{ APIRef("DOM") }}</div>

<p><strong><code>children</code></strong> は読み取り専用のプロパティで、生きた {{domxref("HTMLCollection")}} で呼び出された要素の子{{domxref("Element", "要素", "", 1)}}をすべて返します。</p>

<p><code>Element.children</code> は要素のノードしか含みません。すべての子ノード、例えばテキストやコメントノードなどを取得するには、 {{domxref("Node.childNodes")}} を使用してください。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js">
// Getter
collection = myElement.children;

// No setter; read-only property
</pre>

<h3 id="Return_value">返値</h3>

<p>生きた {{ domxref("HTMLCollection") }} で、 <code><var>node</var></code> の子の DOM 要素の順序付きコレクションを返します。コレクションの {{domxref("HTMLCollection.item()", "item()")}} メソッドか、 JavaScript の配列スタイルの記法を使って、コレクション内の個々の子ノードにアクセスすることができます。</p>

<p>ノードが子要素を持たない場合、 <code>children</code> は要素を含まず、<code>length</code> は <code>0</code> です。</p>

<h2 id="Example">例 </h2>

<pre class="brush: js">const myElement = document.getElementById('foo');
for (let i = 0; i &lt; myElement.children.length; i++) {
  console.log(myElement.children[i].tagName);
}
</pre>

<h2 id="Specification">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>
    {{domxref("Node.childNodes")}}
  </li>
</ul>
