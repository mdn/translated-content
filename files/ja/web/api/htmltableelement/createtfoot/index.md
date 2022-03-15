---
title: HTMLTableElement.createTFoot
slug: Web/API/HTMLTableElement/createTFoot
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/HTMLTableElement/createTFoot
---
<div>
 {{ApiRef}}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p><b>createTFoot</b> は、テーブル内に新たに {{htmlelement("tfoot")}} 要素を生成します。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><i>HTMLTableElement</i> = table.createTFoot()</pre>
<h2 id="Example" name="Example">例</h2>
<pre class="brush:js">var mytable = document.getElementsByClassName("mytable")[0];

var myfoot = mytable.createTFoot();

//チェック用コード: myfoot == mytable.tFoot</pre>
<h2 id="Notes" name="Notes">注記</h2>
<p>既にテーブル内に <code>tfoot</code> 要素が存在した場合、このメソッドはその <code>tfoot</code> 要素を返します。</p>
<h2 id="Specification" name="Specification">仕様書</h2>
<ul>
 <li><a class="external" href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-8453710">createTFoot</a></li>
</ul>
