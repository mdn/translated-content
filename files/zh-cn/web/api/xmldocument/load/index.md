---
title: XMLDocument.load()
slug: Web/API/XMLDocument/load
translation_of: Web/API/XMLDocument/load
---
<p>{{APIRef("DOM")}}</p>

<p><code>document.load()</code>作为旧版的 w3c 标准 <a href="http://www.w3.org/TR/2003/WD-DOM-Level-3-LS-20030619/load-save.html#LS-DocumentLS">DOM Level 3 Load &amp; Save module</a> 其中的一部分。<a href="/zh-cn/DOM/document.async">document.async</a> 用来表明该请求是以同步模式进行还是异步模式进行 (默认值)。从 Gecko 1.9 开始，该方法不支持跨站的文档请求。(使用 <a href="/zh-cn/DOM/XMLHttpRequest">XMLHttpRequest</a> 代替)。</p>

<h3 id="代码示例">代码示例</h3>

<pre>var xmlDoc = document.implementation.createDocument("", "test", null);
function documentLoaded (e) {
    alert(new XMLSerializer().serializeToString(e.target)); // 返回一个包含 querydata.xml 内容的字符串。
}
xmlDoc.addEventListener("load", documentLoaded, false);
xmlDoc.load('querydata.xml');
</pre>

<h3 id="相关链接">相关链接</h3>

<ul>
 <li><a href="/zh-cn/DOM/document.async">document.async</a></li>
 <li><a href="/zh-cn/XML_in_Mozilla">XML in Mozilla</a></li>
</ul>

<h3 id="规范">规范</h3>

<ul>
 <li><a href="http://www.w3.org/TR/2003/WD-DOM-Level-3-LS-20030619/load-save.html#LS-DocumentLS">Old W3C Working Draft of the DOM Level 3 Load &amp; Save module</a></li>
</ul>
