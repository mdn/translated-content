---
title: HTMLTableElement.tHead
slug: Web/API/HTMLTableElement/tHead
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/HTMLTableElement/tHead
---
<div>
 {{ ApiRef() }}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p><code>tHead</code> は、対象テーブルの {{HTMLelement('thead')}} 要素を返します。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><i>th_el</i> = table.tHead</pre>
<h3 id="Parameters" name="Parameters">引数</h3>
<ul>
 <li><code>th_el</code> は <a href="/ja/docs/HTMLTableSectionElement">HTMLTableSectionElement</a> インターフェース</li>
</ul>
<h2 id="Example" name="Example">例</h2>
<pre class="brush:js">if (table.tHead == my_head_el) {
    //...
}</pre>
<h2 id="Notes" name="Notes">注記</h2>
<p>対象テーブル内に {{HTMLelement('thead')}} 要素が存在しない場合、このプロパティは <code>void</code> を返します。</p>
<h2 id="Specification" name="Specification">仕様書</h2>
<ul>
 <li><a class="external" href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-9530944">thead</a></li>
 <li><a class="external" href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-67417573">Interface HTMLTableSectionElement</a></li>
</ul>
