---
title: Element.after()
slug: Web/API/Element/after
tags:
  - API
  - DOM
  - Method
  - Node
  - Reference
browser-compat: api.Element.after
translation_of: Web/API/Element/after
---
<div>{{APIRef("DOM")}}</div>

<p><code><strong>Element.after()</strong></code> は、<code>Element</code> の親の子リストの、<code>Element</code> の直後に、 {{domxref("Node")}} または {{domxref("DOMString")}} オブジェクトのセットを挿入します。 {{domxref("DOMString")}} オブジェクトは {{domxref("Text")}} ノードと等価なノードとして挿入されます。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js">
after(... nodes)
</pre>

<h3 id="Parameters">引数</h3>

<dl>
  <dt><code>nodes</code></dt>
  <dd>挿入する一連の {{domxref("Node")}} または {{domxref("DOMString")}} オブジェクトです。</dd>
</dl>

<h3 id="Exceptions">例外</h3>

<ul>
  <li>{{domxref("HierarchyRequestError")}}: ノードを階層内の指定の位置に挿入できません。</li>
</ul>

<h2 id="Examples">例</h2>

<h3 id="Inserting_an_element">要素の挿入</h3>

<pre class="brush: js">let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.after(span);

console.log(container.outerHTML);
// "&lt;div&gt;&lt;p&gt;&lt;/p&gt;&lt;span&gt;&lt;/span&gt;&lt;/div&gt;"
</pre>

<h3 id="Inserting_text">テキストの挿入</h3>

<pre class="brush: js">let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);

p.after("Text");

console.log(container.outerHTML);
// "&lt;div&gt;&lt;p&gt;&lt;/p&gt;Text&lt;/div&gt;"</pre>

<h3 id="Inserting_an_element_and_text">要素とテキストの挿入</h3>

<pre class="brush: js">let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.after(span, "Text");

console.log(container.outerHTML);
// "&lt;div&gt;&lt;p&gt;&lt;/p&gt;&lt;span&gt;&lt;/span&gt;Text&lt;/div&gt;"</pre>

<h2 id="Specification">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>{{domxref("Element.before()")}}</li>
  <li>{{domxref("Element.append()")}}</li>
  <li>{{domxref("Node.appendChild()")}}</li>
  <li>{{domxref("Element.insertAdjacentElement()")}}</li>
  <li>{{domxref("NodeList")}}</li>
</ul>
