---
title: HTMLTableElement.rows
slug: Web/API/HTMLTableElement/rows
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/HTMLTableElement/rows
---
<div>
 {{ApiRef}}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p><strong>rows</strong> は、テーブル内の全ての<a href="/ja/docs/DOM/tableRow" title="DOM/tableRow">行</a>のコレクションを返します。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><i>HTMLCollectionObject</i> = table.rows</pre>
<h2 id="Example" name="Example">例</h2>
<pre class="brush:js">var mytable = document.getElementById("mytable");

var myrows = mytable.rows; // mytable の行コレクション
var firstRow = mytable.rows[0]; // mytable の最初の行
var lastRow = mytable.rows[ mytable.rows.length - 1 ]; // mytable の最後の行</pre>
<h2 id="Notes" name="Notes">注記</h2>
<p>Table オブジェクトの rows プロパティによって返されるコレクションには {{htmlelement("thead")}} 内、{{htmlelement("tfoot")}} 内、{{htmlelement("tfoot")}} 内、{{htmlelement("tbody")}} 内の、全ての行が含まれます。</p>
<p>テーブルセクション要素 (<code>thead</code>、<code>tfoot</code>、<code>tbody</code>) の <code>rows</code> プロパティには、そのテーブルセクション要素の行のみが含まれます。</p>
<h2 id="Specification" name="Specification">仕様書</h2>
<ul>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-6156016">rows</a></li>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-75708506">HTMLcollection</a></li>
</ul>
