---
title: NodeList.item
slug: Web/API/NodeList/item
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
  - NodeList
translation_of: Web/API/NodeList/item
---
<div>
 {{ApiRef}}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p><a href="/ja/docs/DOM/NodeList"><code>NodeList</code></a> 中の、引数に指定するインデックスの位置にあるノードを取得します。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><var>nodeItem</var> = <var>nodeList</var>.item(<var>index</var>)
</pre>
<ul>
 <li><code>nodeList</code> : <code>NodeList</code> 。これは <a href="/ja/docs/DOM/Node.childNodes" title="DOM/Node.childNodes">childNodes</a> などの DOM プロパティやメソッドで取得可能。</li>
 <li><code>index</code> : 取得するノードのインデックス。最初のノードの <var>index</var> は 0 となる。</li>
 <li><code>nodeItem</code> : <code>nodeList</code> 中の、<code>item</code> メソッドに指定した <var>index</var> の位置にあるノード。</li>
</ul>
<p>JavaScript にはノードリスト中のアイテムの取得に以下のような構文を用いる事も可能です。</p>
<pre class="syntaxbox"><var>nodeItem</var> = <var>nodeList</var>[<var>index</var>]
</pre>
<h2 id="Example" name="Example">例</h2>
<pre class="brush:js">var tables = document.getElementsByTagName("table"); // DOM 中に含まれるすべての table 要素のノードリストを取得
var secondTable = tables.item(1); // DOM 中の 2 番目の table 要素


// tables[1] でも取得可能。即ちアイテムが存在した場合、以下は true となる
alert( tables.item(1) === tables[1] );
</pre>
<h2 id="Notes" name="Notes">注記</h2>
<p>指定した <var>index</var> が範囲外の場合、このメソッドは例外をスローするのではなく、<code>null</code> を返します。</p>
<p><code>item()</code> メソッドは {{domxref("Element")}} や {{domxref("Node")}} のメソッドではなく、 {{domxref("NodeList")}} のメソッドです。</p>
<h2 id="Specification" name="Specification">仕様書</h2>
<ul>
 <li><a href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-item">DOM Level 1 Core: NodeList.item()</a></li>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-844377136">DOM Level 2 Core: NodeList.item()</a></li>
</ul>
