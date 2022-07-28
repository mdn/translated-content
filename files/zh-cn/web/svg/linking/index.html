---
title: Linking
slug: Web/SVG/Linking
translation_of: Web/SVG/Linking
---
<div>SVG 标签内的 "a" 元素上的 “target” 属性在 Mozilla Firefox 1.5 中不起作用。使用标记将 SVG 文档嵌入父 HTML 文档时：</div>

<p>page1.html:</p>

<pre class="brush: html;">&lt;html&gt;
  &lt;body&gt;
    &lt;p&gt;This is a SVG button:&lt;/p&gt;
    &lt;object width="100" height="50" type="image/svg+xml" data="button.svg"/&gt;
  &lt;/body&gt;
&lt;/html&gt;
</pre>

<p>button.svg:</p>

<pre class="brush: xml">&lt;?xml version="1.1" encoding="UTF-8"?&gt;
&lt;svg xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;a xlink:href="page2.html" target="_top"&gt;
    &lt;g&gt;
      &lt;!-- button graphical elements here --&gt;
    &lt;/g&gt;
  &lt;/a&gt;
&lt;/svg&gt;
</pre>

<p>规范规定，当单击按钮图形时，浏览器应导航到 HTML document page2.html。但是，target 不能与 Mozilla 在 Firefox 1.5 中实现的 SVG &lt;a&gt; 元素协同工作。（问题将在 Firefox 2.0 中解决。）</p>

<p>无论如何，Moz SVG 中的结果行为是 page2.html 将被加载到 SVG 按钮所在的帧中（即，您现在将 page2.html 嵌入到 page1.html 中的 100x50 像素帧中）。</p>

<p>要解决这个问题，需要一点难看的 JavaScript 编程：</p>

<p>button.svg:</p>

<pre class="brush: xml;">&lt;?xml version="1.1" encoding="UTF-8"?&gt;
&lt;svg xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;g onclick="top.document.href='page2.html'" cursor="pointer"&gt;
    &lt;!-- button graphical elements here --&gt;
  &lt;/g&gt;
&lt;/svg&gt;
</pre>

<h2 id="例子">例子</h2>

<p>有关此解决方案在工作中的示例，请参见 www.codedeard.com。</p>
