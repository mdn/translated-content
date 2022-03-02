---
title: Element.append()
slug: Web/API/Element/append
tags:
  - API
  - DOM
  - Method
  - Node
  - Element
  - Reference
browser-compat: api.Element.append
translation_of: Web/API/Element/append
original_slug: Web/API/ParentNode/append
---
<p>{{APIRef("DOM")}}</p>

<p><strong><code>Element.append()</code></strong> メソッドは、一連の {{domxref("Node")}} または {{domxref("DOMString")}} オブジェクトを <code>Element</code> のの最後の子の後に挿入します。 {{domxref("DOMString")}} オブジェクトは等価な {{domxref("Text")}} ノードとして挿入されます。</p>

<p>{{domxref("Node.appendChild()")}} との違いは次の通りです。</p>

<ul>
  <li><code>Element.append()</code> は {{domxref("DOMString")}} も追加することができますが、<code>Node.appendChild()</code> は{{domxref("Node")}} オブジェクトのみを受け付けます。</li>
  <li><code>Element.append()</code> には返値がありませんが、<code>Node.appendChild()</code> は追加された{{domxref("Node")}} オブジェクトを返します。</li>
  <li><code>Element.append()</code> は複数のノードや文字列を追加することができますが、<code>Node.appendChild()</code> はノードを 1 つだけしか追加することができせん。</li>
</ul>

<h2 id="Syntax">構文</h2>

<pre class="brush: js">
append(...nodesOrDOMStrings)
</pre>

<h3 id="Parameters">引数</h3>

<dl>
  <dt><code>nodesOrDOMStrings</code></dt>
  <dd>挿入する一連の {{domxref("Node")}} または {{domxref("DOMString")}} オブジェクトです。</dd>
</dl>

<h3 id="Exceptions">例外</h3>

<ul>
  <li>{{domxref("HierarchyRequestError")}}: ノードを階層の特定の位置に挿入することができません。</li>
</ul>

<h2 id="Examples">例</h2>

<h3 id="Appending_an_element">要素の追加</h3>

<pre class="brush: js">let div = document.createElement("div")
let p = document.createElement("p")
div.append(p)

console.log(div.childNodes) // NodeList [ &lt;p&gt; ]
</pre>

<h3 id="Appending_text">テキストの追加</h3>

<pre class="brush: js">let div = document.createElement("div")
div.append("Some text")

console.log(div.textContent) // "Some text"</pre>

<h3 id="Appending_an_element_and_text">要素とテキストの追加</h3>

<pre class="brush: js">let div = document.createElement("div")
let p = document.createElement("p")
div.append("Some text", p)

console.log(div.childNodes) // NodeList [ #text "Some text", &lt;p&gt; ]</pre>

<h3 id="The_append_method_is_unscopable">append メソッドはスコープが効かない</h3>

<p><code>append()</code> メソッドは <code>with</code> 文の中ではスコープが効きません。詳しくは {{jsxref("Symbol.unscopables")}} をご覧ください。</p>

<pre class="brush: js">let div = document.createElement("div")

with(div) {
  append("foo")
}
// ReferenceError: append is not defined </pre>


<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>{{domxref("Element.prepend()")}}</li>
  <li>{{domxref("Node.appendChild()")}}</li>
  <li>{{domxref("Element.after()")}}</li>
  <li>{{domxref("Element.insertAdjacentElement()")}}</li>
  <li>{{domxref("NodeList")}}</li>
</ul>
