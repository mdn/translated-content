---
title: getBBox
slug: Web/API/SVGGraphicsElement/getBBox
---
<p><code><strong>SVGGraphicsElement.getBBox()</strong></code>允许我们确定对象适合的最小矩形的坐标。返回的坐标是相对于当前svg空间的，即在将所有几何属性应用于目标元素中包含的所有元素之后。</p>

<p>Note: <code>getBBox</code> must return the actual bounding box at the time the method was called, even in case the element has not yet been rendered. It also neglects any transformation applied on the element or its parents.</p>

<div class="blockIndicator note">
<p><code>getBBox</code> returns different values than getBoundingClientRect, as the latter returns value relative to the viewport</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">let bboxRect = object.getBBox();</pre>

<h3 id="Return_value">Return value</h3>

<p>The returned value is a <a href="/en-US/docs/Web/API/SVGRect">SVGRect</a> object, which defines the bounding box. This value is irrespective of any transformation attribute applied to it or the parent elements.</p>

<h2 id="Example">Example</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"&gt;
    &lt;g id="group_text_1"&gt;
        &lt;text x="5" y="16" transform="scale(2, 2)"&gt;Hello World!&lt;/text&gt;
        &lt;text x="8" y="32" transform="translate(0 20) scale(1.25 1)"&gt;Hello World Again!&lt;/text&gt;
    &lt;/g&gt;
    &lt;!-- Shows BBox in green --&gt;
    &lt;rect id="rect_1" stroke="#00ff00" stroke-width="3" fill="none"&gt; &lt;/rect&gt;
    &lt;!-- Shows BoundingClientRect in red --&gt;
    &lt;rect id="rect_2" stroke="#ff0000" stroke-width="3" fill="none"&gt;&lt;/rect&gt;
&lt;/svg&gt;
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">var rectBBox = document.querySelector('#rect_1');
var rectBoundingClientRect = document.querySelector('#rect_2');
var groupElement = document.querySelector('#group_text_1');

var bboxGroup = groupElement.getBBox();
rectBBox.setAttribute('x', bboxGroup.x);
rectBBox.setAttribute('y', bboxGroup.y);
rectBBox.setAttribute('width', bboxGroup.width);
rectBBox.setAttribute('height', bboxGroup.height);

var boundingClientRectGroup = groupElement.getBoundingClientRect();
rectBoundingClientRect.setAttribute('x', boundingClientRectGroup.x);
rectBoundingClientRect.setAttribute('y', boundingClientRectGroup.y);
rectBoundingClientRect.setAttribute('width', boundingClientRectGroup.width);
rectBoundingClientRect.setAttribute('height', boundingClientRectGroup.height);</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html#getBBox">getBBox in SVG Primer</a></li>
</ul>
