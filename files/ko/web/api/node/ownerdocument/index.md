---
title: Node.ownerDocument
slug: Web/API/Node/ownerDocument
translation_of: Web/API/Node/ownerDocument
---
<div>{{APIRef("DOM")}}</div>

<p><code><strong>Node.ownerDocument</strong></code> 읽기 전용 속성은 이 node 의 최상위 document 객체를 반환합니다.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><var>document</var> = <var>element</var>.ownerDocument
</pre>

<ul>
 <li><code>document</code> 는 element 의 부모 <a href="/en-US/docs/DOM/document"><code>document</code></a> 객체입니다.</li>
</ul>

<h2 id="Example">Example</h2>

<pre class="brush:js">// given a node "p", get the top-level HTML child
// of the document object

var d = p.ownerDocument;
var html = d.documentElement;
</pre>

<h2 id="Notes">Notes</h2>

<p>이 속성에 의해 반환된<code>document</code> 객체는 실제 HTML 문서의 모든 child 노드들이 생성되는 메인 객체입니다. 이 속성이 document 그 자체 노드에서 사용될 경우, 결과는 <code>null</code> 이 됩니다. </p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.Node.ownerDocument")}}</p>
