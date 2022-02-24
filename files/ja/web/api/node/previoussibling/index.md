---
title: Node.previousSibling
slug: Web/API/Node/previousSibling
tags:
  - DOM
  - Gecko
  - Node
translation_of: Web/API/Node/previousSibling
---
<div>{{ApiRef}}</div>

<h2 id="Summary" name="Summary">概要</h2>

<p>指定のノードの親ノードの <a href="/ja/docs/Web/API/Node.childNodes"><code>childNodes</code></a> リストの中で直前のノードを返します。また、指定のノードがそのリストの中で先頭の場合は <code>null</code> を返します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>previousNode</var> = <var>node</var>.previousSibling;
</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="brush:js">// &lt;a&gt;&lt;b1 id="b1"/&gt;&lt;b2 id="b2"/&gt;&lt;/a&gt;

alert( document.getElementById("b1").previousSibling ); // null
alert( document.getElementById("b2").previousSibling.id ); // "b1"
</pre>

<h2 id="Notes" name="Notes">注記</h2>

 <p>Geckoベースのブラウザーはソースマークアップの中で空白を表現するためにテキストノードをドキュメントに挿入します。ですので、例えば <a href="/ja/docs/Web/API/Node/firstChild" title="ノードのツリーの中で最初の子ノード、もしくは子ノードがなければ null を返します。ノードが Document の場合は、その直接の子のリスト内の最初のノードを返します。"><code>Node.firstChild</code></a> や <a href="/ja/docs/Web/API/Node/previousSibling" title="指定のノードの親ノードの childNodes リストの中で直前のノードを返します。また、指定のノードがそのリストの中で先頭の場合は null を返します。"><code>Node.previousSibling</code></a> で得られるノードが、作者が取得しようとした実際の要素ではなく、空白のテキストノードを参照していることがあります。</p>
    <p>より多くの情報を得るには『<a href="/ja/docs/Web/Guide/DOM/Whitespace_in_the_DOM">DOM 中の空白文字</a>』と『<a class="external" href="http://www.w3.org/DOM/faq.html#emptytext" rel="noopener">W3C DOM 3 FAQ: Why are some Text nodes empty?</a>』を参照してください。</p>

<p><code>childNode</code> リスト内の、指定ノードの次のノードの取得には {{domxref("Node.nextSibling")}} を用います。</p>

<h2 id="Specification" name="Specification">仕様書</h2>

<ul>
 <li><a href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#attribute-previousSibling">DOM Level 1 Core: previousSibling</a></li>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-640FB3C8">DOM Level 2 Core: previousSibling</a></li>
 <li><a href="http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-640FB3C8">DOM Level 3 Core: previousSibling</a></li>
</ul>
