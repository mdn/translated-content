---
title: element.getAttributeNodeNS
slug: Web/API/Element/getAttributeNodeNS
tags:
  - DOM
  - Gecko
  - 翻訳中
translation_of: Web/API/Element/getAttributeNodeNS
---
<p>{{ ApiRef("DOM") }}<span class="comment">== Summary ==</span></p>

<h3 id=".E6.A6.82.E8.A6.81" name=".E6.A6.82.E8.A6.81">概要</h3>

<p><span class="comment">Returns the &lt;code&gt;Attr&lt;/code&gt; node for the attribute with the given namespace and name.</span> getAttributeNodeNS は指定の名前空間と名前の属性に対する Attr ノードを返します。<span class="comment">== Syntax ==</span></p>

<h3 id=".E6.A7.8B.E6.96.87" name=".E6.A7.8B.E6.96.87">構文</h3>

<pre class="eval"><em>attributeNode</em> = element.getAttributeNodeNS(<em>namespace</em>, <em>nodeName</em>)
</pre>

<p><span class="comment">* &lt;code&gt;attributeNode&lt;/code&gt; is the node for specified attribute. * &lt;code&gt;namespace&lt;/code&gt; is a string specifying the namespace of the attribute. * &lt;code&gt;nodeName&lt;/code&gt; is a string specifying the name of the attribute.</span></p>

<ul>
 <li><code>attributeNode</code> は指定された属性に対するノードです。</li>
 <li><code>namespace</code> は属性の名前空間を特定する文字列です。</li>
 <li><code>nodeName</code> は属性の名前を指定する文字列です。<span class="comment">== Example == == 例 == TBD The example needs to be fixed TBD この例は修正の必要があります。 &lt;pre&gt; // html: &lt;div id="top" /&gt; t = document.getElementById("top"); specialNode = t.getAttributeNodeNS( "<a class="external" href="http://www.mozilla.org/ns/specialspace" rel="freelink">http://www.mozilla.org/ns/specialspace</a>", "id"); // iNode.value = "full-top" &lt;/pre&gt;== Notes</span></li>
</ul>

<h3 id=".E6.B3.A8.E8.A8.98" name=".E6.B3.A8.E8.A8.98">注記</h3>

<p><span class="comment">&lt;code&gt;getAttributeNodeNS&lt;/code&gt; is more specific than <a href="/ja/DOM/element.getAttributeNode">getAttributeNode</a> in that it allows you to specify attributes that are part of a particular namespace. The corresponding setter method is <a href="/ja/DOM/element.setAttributeNodeNS">setAttributeNodeNS</a>.</span> <code>getAttributeNodeNS</code> は特定の名前空間の一部である属性を指定できるという点で <a href="/ja/DOM/element.getAttributeNode">getAttributeNode</a>より特殊です。対応するsetterメソッドは<a href="/ja/DOM/element.setAttributeNodeNS">setAttributeNodeNS</a>です。</p>

<p>{{ DOMAttributeMethods() }}<span class="comment">== Specification ==</span></p>

<h3 id=".E4.BB.95.E6.A7.98" name=".E4.BB.95.E6.A7.98">仕様</h3>

<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElGetAtNodeNS">DOM Level 2 Core: getAttributeNodeNS</a></p>
