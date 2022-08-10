---
title: HTMLCollection.item
slug: Web/API/HTMLCollection/item
translation_of: Web/API/HTMLCollection/item
---
<p>{{APIRef("HTML DOM")}}</p>

<p><code>HTMLCollection.item()</code> 由位置获取元素.</p>

<h3 id="参数">参数</h3>

<dl>
 <dt>index</dt>
 <dd>想要被返回的Node的位置. 元素在HTML Collection中的顺序和他们在源文档的顺序保持一致。</dd>
</dl>

<h3 id="返回值">返回值</h3>

<p>指定的index的{{domxref("Node")}} , 如果index小于0或者不小于它的长度属性则返回null。</p>

<h2 id="Description">Description</h2>

<p>HTMLCollection中item( )方法返回一个编号的元素 ，在JavaScript中把HTMLCollection当成是一个是数组并用数组符号去索引十分简单。</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">var c = document.images;  // This is an HTMLCollection
var img0 = c.item(0);     // You can use the item( ) method this way
var img1 = c[1];          // But this notation is easier and more common
</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("NodeList.item()")}}</li>
</ul>
