---
title: Document.childElementCount
slug: Web/API/Document/childElementCount
tags:
  - API
  - DOM
  - Property
  - Reference
browser-compat: api.Document.childElementCount
translation_of: Web/API/Document/childElementCount
---
<div>{{ APIRef("DOM") }}</div>

<p><code><strong>Document.childElementCount</strong></code> は読み取り専用のプロパティで、文書の子要素の数を返します。</p>

<p>特定の要素の子要素の数を取得する場合は、 {{domxref("Element.childElementCount")}} を参照してください。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js"><em>document</em>.childElementCount;
</pre>

<h2 id="Example">例</h2>

<pre class="brush:js">
document.children;
// HTMLCollection で、ふつうは &lt;html&gt; 要素をこの文書の唯一の子として含んでいる

document.childElementCount;
// 1
</pre>

<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
  <li>{{domxref("Element.childElementCount")}}</li>
  <li>{{domxref("DocumentFragment.childElementCount")}}</li>
</ul>
