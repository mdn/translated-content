---
title: HTMLTableElement.deleteTHead()
slug: Web/API/HTMLTableElement/deleteTHead
tags:
  - API
  - table
  - 参考
translation_of: Web/API/HTMLTableElement/deleteTHead
---
<div>{{APIRef("HTML DOM")}}</div>

<p><code><strong>HTMLTableElement.deleteTHead()</strong></code> 方法删除指定 {{HtmlElement("table")}} 的 {{HTMLElement("thead")}} 元素。</p>

<h2 id="语法">语法</h2>

<pre class="syntaxbox"><var>HTMLTableElement</var>.deleteTHead();
</pre>

<h2 id="例子">例子</h2>

<p>本示例使用 JavaScript 删除表格的头部。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html; highlight:[2]">&lt;table&gt;
  &lt;thead&gt;&lt;th&gt;Name&lt;/th&gt;&lt;th&gt;Occupation&lt;/th&gt;&lt;/thead&gt;
  &lt;tr&gt;&lt;td&gt;Bob&lt;/td&gt;&lt;td&gt;Plumber&lt;/td&gt;&lt;/tr&gt;
  &lt;tr&gt;&lt;td&gt;Jim&lt;/td&gt;&lt;td&gt;Roofer&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js; highlight:[2]">let table = document.querySelector('table');
table.deleteTHead();</pre>

<h3 id="结果">结果</h3>

<p>{{EmbedLiveSample("Example")}}</p>

<h2 id="规范">规范</h2>

{{Specifications}}

<h2 id="浏览器兼容性">浏览器兼容性</h2>



<p>{{Compat("api.HTMLTableElement.deleteTHead")}}</p>
