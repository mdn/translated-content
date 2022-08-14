---
title: Node.hasChildNodes()
slug: Web/API/Node/hasChildNodes
tags:
  - API
  - DOM
  - Method
  - Node
translation_of: Web/API/Node/hasChildNodes
---
<div>
<div>{{APIRef("DOM")}}</div>
</div>

<p><code><strong>Node.hasChildNodes()</strong></code> 메소드는 현재 노드({{domxref("Node")}})에게 자식노드(<a href="/en-US/docs/Web/API/Node.childNodes" title="DOM/Node.childNodes">child nodes</a>)가 있는지를 {{jsxref("Boolean")}} 값으로 반환합니다.</p>

<h2 id="Syntax" name="Syntax">구문</h2>

<pre class="syntaxbox"><code>node.hasChildNodes()</code></pre>

<h2 id="Example" name="Example">예시</h2>

<p>아래 예시에서는 "foo"라는 id를 가진 요소를 찾고 "foo" 요소에게 자식노드가 있으면 첫번째 자식노드를 제거해줍니다.</p>

<pre class="brush:js;highlight:[3];">var foo = document.getElementById("foo");

if ( foo.hasChildNodes() ) {
  foo.removeChild( foo.childNodes[0] );
}</pre>

<h2 id="Specification">명세</h2>

{{Specifications}}

<h2 id="See_also" name="See_also">같이 보기</h2>

<ul>
 <li>{{domxref("Node.childNodes")}}</li>
 <li>{{domxref("Node.hasAttributes")}}</li>
</ul>
