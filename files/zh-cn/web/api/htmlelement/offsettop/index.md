---
title: HTMLElement.offsetTop
slug: Web/API/HTMLElement/offsetTop
translation_of: Web/API/HTMLElement/offsetTop
---
<div>{{ APIRef("HTML DOM") }}</div>

<p><strong><code>HTMLElement.offsetTop</code></strong> 为只读属性，它返回当前元素相对于其 {{domxref("HTMLElement.offsetParent","offsetParent")}} 元素的顶部内边距的距离。</p>

<h2 id="Syntax">语法</h2>

<pre class="syntaxbox"><var>topPos</var> = element.offsetTop;
</pre>

<h3 id="Parameters">参数</h3>

<ul>
 <li><code>topPos</code> 为返回的像素数。</li>
</ul>

<h2 id="Example">示例</h2>

<pre class="brush:js">var d = document.getElementById("div1");
var topPos = d.offsetTop;

if (topPos &gt; 10) {
  // div1 距离它的 offsetParent 元素的顶部的距离大于 10 px
}</pre>

<h2 id="Specification">规范</h2>

{{Specifications}}

<h2 id="Compatibility">Browser compatibility</h2>



<p>{{Compat("api.HTMLElement.offsetTop")}}</p>

<p>In compliance with the specification, this property will return <code>null</code> on Webkit if the element is hidden (the <code>style.display</code> of this element or any ancestor is <code>"none"</code>) or if the <code>style.position</code> of the element itself is set to <code>"fixed"</code>.</p>

<p>This property will return <code>null</code> on Internet Explorer (9) if the <code>style.position</code> of the element itself is set to <code>"fixed"</code>. (Having <code>display:none</code> does not affect this browser.)</p>
