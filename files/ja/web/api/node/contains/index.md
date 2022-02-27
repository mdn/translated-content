---
title: Node.contains
slug: Web/API/Node/contains
tags:
  - API
  - DOM
  - Method
  - Node
translation_of: Web/API/Node/contains
---
<div>{{APIRef("DOM")}}</div>

<p><strong><code>Node.contains</code></strong> メソッドは指定ノードの子孫ノードに特定の子ノード（※自身も含む）が含まれるかどうかを示す真偽値を返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">node.contains( otherNode )
</pre>

<h2 id="Example" name="Example">例</h2>

<p>この関数は、ある要素がそのページの body 要素に含まれるかどうかをチェックするものです。<code>contains</code> は包括的かつ決定的であるため、body がそれ自身を含むかどうかは <code>isInPage</code> の意図ではないため明示的に <code>false</code> を返します。</p>

<pre class="brush:js">function isInPage(node) {
  return (node === document.body) ? false : document.body.contains(node);
}</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("DOM WHATWG", "#dom-node-contains", "Node.contains()")}}</td>
   <td>{{Spec2("DOM WHATWG")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ実装状況">ブラウザ実装状況</h2>

<p>{{Compat("api.Node.contains")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Node.compareDocumentPosition")}}</li>
 <li>{{domxref("Node.hasChildNodes")}}</li>
</ul>
