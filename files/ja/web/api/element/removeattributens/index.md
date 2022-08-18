---
title: element.removeAttributeNS
slug: Web/API/Element/removeAttributeNS
translation_of: Web/API/Element/removeAttributeNS
---
<p><span class="comment">&lt;breadcrumbs&gt;&lt;/breadcrumbs&gt;</span>{{ ApiRef("DOM") }}<span class="comment">== Summary ==</span></p>

<h3 id=".E6.A6.82.E8.A6.81" name=".E6.A6.82.E8.A6.81">概要</h3>

<p><span class="comment">&lt;code&gt;removeAttributeNS&lt;/code&gt; removes the specified attribute from an element.</span> <code>removeAttributeNS</code> 要素から指定の属性を取り除きます。</p>

<p><span class="comment">In Firefox 3 and later, this method resets DOM values to their defaults.</span> Firefox 3以降ではこのメソッドはDOMの値をデフォルト値にリセットします。<span class="comment">== Syntax ==</span></p>

<h3 id=".E6.A7.8B.E6.96.87" name=".E6.A7.8B.E6.96.87">構文</h3>

<pre class="eval"><em>element</em>.removeAttributeNS(<em>namespace</em>,<em>attrName</em>);
</pre>

<p><span class="comment">* &lt;code&gt;namespace&lt;/code&gt; is a string that contains the namespace of the attribute. * &lt;code&gt;attrName&lt;/code&gt; is a string that names the attribute to be removed from the current node.</span></p>

<ul>
 <li><code>namespace</code> は属性の名前空間を含んでいる文字列です。</li>
 <li><code>attrName</code> は現在のノードから取り除く属性の名前を表す文字列です。<span class="comment">== Example ==</span></li>
</ul>

<h3 id=".E4.BE.8B" name=".E4.BE.8B">例</h3>

<pre>// &lt;div id="div1" xmlns:special="http://www.mozilla.org/ns/specialspace"
//      special:specialAlign="utterleft" width="200px" /&gt;
d = document.getElementById("div1");
d.removeAttributeNS("http://www.mozilla.org/ns/specialspace", "specialAlign");
// now: &lt;div id="div1" width="200px" /&gt;
</pre>

<h3 id=".E6.B3.A8.E8.A8.98" name=".E6.B3.A8.E8.A8.98">注記</h3>

<p>{{ DOMAttributeMethods() }}<span class="comment">== Specification ==</span></p>

<h3 id=".E4.BB.95.E6.A7.98" name=".E4.BB.95.E6.A7.98">仕様</h3>

<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElRemAtNS">DOM Level 2 Core: removeAttributeNS</a></p>
