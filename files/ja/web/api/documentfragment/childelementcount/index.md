---
title: DocumentFragment.childElementCount
slug: Web/API/DocumentFragment/childElementCount
tags:
  - API
  - DOM
  - Property
  - Reference
browser-compat: api.DocumentFragment.childElementCount
translation_of: Web/API/DocumentFragment/childElementCount
---
<div>{{ APIRef("DOM") }}</div>

<p><code><strong>Document.childElementCount</strong></code> は読み取り専用のプロパティで、 <code>DocumentFragment</code> の子要素の数を返します。</p>

<p>特定の要素の子要素の数を取得する場合は、 {{domxref("Element.childElementCount")}} を参照してください。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js"><em>fragment</em>.childElementCount;
</pre>

<h2 id="Example">例</h2>

<pre class="brush:js">
let fragment = new DocumentFragment()
fragment.childElementCount; // 0

let paragraph = document.createElement('p')
fragment.appendChild(paragraph)

fragment.childElementCount; // 1
</pre>

<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>{{domxref("Element.childElementCount")}}</li>
  <li>{{domxref("Document.childElementCount")}}</li>
</ul>
