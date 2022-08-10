---
title: Range.intersectsNode()
slug: Web/API/Range/intersectsNode
translation_of: Web/API/Range/intersectsNode
---
<div>{{ApiRef("DOM")}} {{SeeCompatTable}}</div>

<p><strong><code>Range.intersectsNode()</code> </strong>方法返回一个布尔值，表明其给定的 {{domxref("Node")}} 节点是否与{{domxref("Range")}}的范围相交</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><em>bool</em> = <em>range</em>.intersectsNode( <em>referenceNode</em> )
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><em>referenceNode</em></dt>
 <dd>与{{domxref("Range")}}做比较的{{domxref("Node")}}节点</dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="brush:js">var range = document.createRange();

range.selectNode(document.getElementsByTagName("div").item(0));
var bool = range.intersectsNode(document.getElementsByTagName("p").item(0));</pre>

<h2 id="Specification">Specification</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat("api.Range.intersectsNode")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/DOM/DOM_Reference">The DOM interfaces index</a></li>
</ul>
