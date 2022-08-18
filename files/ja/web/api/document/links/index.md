---
title: document.links
slug: Web/API/Document/links
tags:
  - DOM
  - Document
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/Document/links
---
<div>
 {{ApiRef}}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p><code>links</code> プロパティは、文書中の、 <code>href</code> 属性の値を持つすべての {{htmlelement("area")}} 要素とアンカー要素のコレクションを返します。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><var>nodeList</var> = document.links;
</pre>
<h2 id="Example" name="Example">例</h2>
<pre class="brush:js">var links = document.links;

for(var i = 0; i &lt; links.length; i++) {
  var linkHref = document.createTextNode(links[i].href);
  var lineBreak = document.createElement("br");

  document.body.appendChild(linkHref);
  document.body.appendChild(lineBreak);
}</pre>
<h2 id="Specification" name="Specification">仕様書</h2>
<ul>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-7068919">DOM Level 2 HTML: links</a></li>
</ul>
