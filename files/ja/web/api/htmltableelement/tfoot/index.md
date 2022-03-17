---
title: HTMLTableElement.tFoot
slug: Web/API/HTMLTableElement/tFoot
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/HTMLTableElement/tFoot
---
<div>
 {{ ApiRef() }}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p><code>tFoot</code> は、対象テーブル内の {{htmlelement("tfoot")}} 要素を返します。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><i>HTMLTableSectionElementObject</i> = table.tFoot</pre>
<h2 id="Example" name="Example">例</h2>
<pre class="brush:js">if (table.tFoot == my_foot) {
   //...
}</pre>
<h2 id="Notes" name="Notes">注記</h2>
<p>対象テーブル内に {{htmlelement("tfoot")}} 要素が存在しない場合、このプロパティは <code>void</code> を返します。</p>
<h2 id="Specification" name="Specification">仕様書</h2>
<ul>
 <li><a class="external" href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-64197097">tfoot</a></li>
 <li><a class="external" href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-67417573">Interface HTMLTableSectionElement</a></li>
</ul>
