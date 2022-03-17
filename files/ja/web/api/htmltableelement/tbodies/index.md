---
title: HTMLTableElement.tBodies
slug: Web/API/HTMLTableElement/tBodies
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/HTMLTableElement/tBodies
---
<div>
 {{ ApiRef() }}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p><b>tBodies</b> は、テーブル内の {{htmlelement("tbody")}} のコレクションを返します。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><i>HTMLCollectionObject</i> = table.tBodies</pre>
<h2 id="Example" name="Example">例</h2>
<pre class="brush:js;gutter:false">length(mytable.tBodies);</pre>
<h2 id="Notes" name="Notes">注記</h2>
<p>返されるコレクションには、暗黙の {{htmlelement("tbody")}} も含まれます。</p>
<pre class="brush:html">&lt;table&gt;
  &lt;tr&gt;
    &lt;td&gt;cell one&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
</pre>
<p>上記の HTML ソースの様に tbody 要素が無い場合でも、DOM は tbody 要素が存在するものと見做し、これを含めてコレクションを返します。</p>
<h2 id="Specification" name="Specification">仕様書</h2>
<ul>
 <li><a class="external" href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-63206416">tBodies</a></li>
 <li><a class="external" href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-75708506">Interface HTMLCollection</a></li>
</ul>
