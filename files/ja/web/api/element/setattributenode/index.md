---
title: element.setAttributeNode
slug: Web/API/Element/setAttributeNode
tags:
  - DOM
  - Gecko
  - 翻訳中
translation_of: Web/API/Element/setAttributeNode
---
<p>{{ ApiRef("DOM") }}</p>

<h3 id="Summary" name="Summary">Summary</h3>

<p><code>setAttributeNode()</code> adds a new <code>Attr</code> node to the specified element.</p>

<h3 id="Syntax" name="Syntax">Syntax</h3>

<pre class="eval"><em>replacedAttr</em> =<em>element</em>.setAttributeNode(<em>attribute</em>)
</pre>

<ul>
 <li><code>attribute</code> is the <code>Attr</code> node to set on the element.</li>
 <li><code>replacedAttr</code> is the replaced attribute node, if any, returned by this function.</li>
</ul>

<h3 id="Example" name="Example">Example</h3>

<pre>// &lt;div id="one" align="left"&gt;one&lt;/div&gt;
// &lt;div id="two"&gt;two&lt;/div&gt;
var d1 = document.getElementById("one");
var d2 = document.getElementById("two");
var a = d1.getAttributeNode("align");
d2.setAttributeNode(a);
alert(d2.attributes[1].value)
// returns: `left'
</pre>

<h3 id="Notes" name="Notes">Notes</h3>

<p>If the attribute named already exists on the element, that attribute is replaced with the new one and the replaced one is returned.</p>

<p>This method is seldom used, with <code><a href="/ja/DOM/element.setAttribute">setAttribute()</a></code> usually being used to change element's attributes.</p>

<p>{{ DOMAttributeMethods() }}</p>

<h3 id="Specification" name="Specification">Specification</h3>

<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-887236154">DOM Level 2 Core: setAttributeNode</a> (introduced in <a class="external" href="http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttributeNode">DOM Level 1 Core</a>)</p>
