---
title: Node.parentNode
slug: Web/API/Node/parentNode
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
  - Node
translation_of: Web/API/Node/parentNode
---
<div>
 {{ApiRef}}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p>指定されたノードの DOM ツリー内の親ノードを返します。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><var>parentNode</var> = <var>node</var>.parentNode
</pre>
<ul>
 <li><code>parentNode</code> : 指定ノードの親ノード。要素の親ノードは、<code>Element</code> ノード、<code>Document</code> ノード、または <code>DocumentFragment</code> になります。</li>
</ul>
<h2 id="Example" name="Example">例</h2>
<pre class="brush:js">if (node.parentNode) {
  // ツリー上に既に存在しない場合を除き、
  // ツリーからノードを削除します。
  node.parentNode.removeChild(node);
}</pre>
<h2 id="Notes" name="Notes">注記</h2>
<p><code>parentNode</code> は、以下の<a href="/ja/docs/Web/API/Node.nodeType">ノードタイプ</a>については <code>null</code> を返します : <code>Attr</code> 、<code>Document</code> 、<code>DocumentFragment</code> 、<code>Entity</code> 、<code>Notation</code></p>
<p>また、ノードが作成された直後でまだツリーに加えられていない場合も <code>null</code> を返します。</p>
<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザ実装状況</h2>

<p>{{Compat("api.Node.parentNode")}}</p>

<h2 id="Specification" name="Specification">仕様書</h2>
<ul>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1060184317">DOM Level 2 Core: Node.parentNode</a></li>
 <li><a href="http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1060184317">DOM Level 3 Core: Node.parentNode</a></li>
</ul>
<h2 id="See_also" name="See_also">関連情報</h2>
<ul>
 <li>{{Domxref("element.firstChild")}}</li>
 <li>{{Domxref("element.lastChild")}}</li>
 <li>{{Domxref("element.childNodes")}}</li>
 <li>{{Domxref("element.nextSibling")}}</li>
 <li>{{Domxref("element.previousSibling")}}</li>
 <li>{{Domxref("Node.removeChild")}}</li>
</ul>
