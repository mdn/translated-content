---
title: Parsing and serializing XML
slug: Web/Guide/Parsing_and_serializing_XML
tags:
  - DOM
  - Document
  - XML
  - XMLHttpRequest
  - 指南
translation_of: Web/Guide/Parsing_and_serializing_XML
---
<p>有时，你可能需要解析 {{Glossary("XML")}} 内容，并把它转换为 {{Glossary("DOM")}} 树，或者，反过来将现有的 DOM 树序列化成 XML。在本文中，我们将查看 Web 平台提供的对象，以便轻松地序列化和解析 XML 的常见任务。</p>

<dl>
 <dt>{{domxref("XMLSerializer")}}</dt>
 <dd>序列化 DOM 树，把它们转换成包含 XML 的字符串。</dd>
 <dt>{{domxref("DOMParser")}}</dt>
 <dd>通过解析一个包含 XML 的字符串来构建 DOM 树，返回一个基于输入数据的适当的 {{domxref("XMLDocument")}} 或者是 {{domxref("Document")}}。</dd>
 <dt>{{domxref("XMLHttpRequest")}}</dt>
 <dd>从一个 URL 中加载内容；XML 的内容被作为一个带有内建 XML 的 DOM 树的 XML {{domxref("Document")}} 对象返回。</dd>
 <dt><a href="/zh-CN/docs/Web/XPath">XPath</a></dt>
 <dd>一种创建包含 XML 文档特定部分的地址，并基于这些地址进行 XML 节点定位的字符串的技术。</dd>
</dl>

<h2 id="创建一个_XML_文档">创建一个 XML 文档</h2>

<p>使用以下方法来创建一个 XML 文档（该文档是 {{domxref("Document")}} 的一个例子）。</p>

<h3 id="把字符串解析成_DOM_树">把字符串解析成 DOM 树</h3>

<p>下面这个例子使用 {{domxref("DOMParser")}} 把字符串中的 XML 片段转换为 DOM 树：</p>

<div style="overflow: hidden;">
<pre class="brush: js">var sMyString = '&lt;a id="a"&gt;&lt;b id="b"&gt;hey!&lt;/b&gt;&lt;/a&gt;';
var oParser = new DOMParser();
var oDOM = oParser.parseFromString(sMyString, "application/xml");
// print the name of the root element or error message
console.log(oDOM.documentElement.nodeName == "parsererror" ? "error while parsing" : oDOM.documentElement.nodeName);
</pre>
</div>

<h3 id="把可寻址的_URL_资源解析成_DOM_树">把可寻址的 URL 资源解析成 DOM 树</h3>

<h4 id="使用_XMLHttpRequest">使用 XMLHttpRequest</h4>

<p>下列示例代码读取一个可寻址的 URL 资源文件并将其解析成 DOM 树：</p>

<pre class="brush: js">var xhr = new XMLHttpRequest();
xhr.onload = function() {
  dump(xhr.responseXML.documentElement.nodeName);
}
xhr.onerror = function() {
  dump("Error while getting XML.");
}
xhr.open("GET", "example.xml");
xhr.responseType = "document";
xhr.send();
</pre>

<p>在 <code>xhr</code> 对象 {{domxref("XMLHttpRequest.responseXML", "responseXML")}} 域中返回的值 是一个通过解析 XML 构造的 {{domxref("Document")}}。</p>

<p>如果这个文档是 {{Glossary("HTML")}}，上面实例代码将会返回一个 {{domxref("Document")}}。如果它是 XML，那获取的结果对象实际上是一个 {{domxref("XMLDocument")}}。这两种类型实质上是一样的; 不同点大部分是历史遗留的，尽管区分它们也会有一些实际好处。</p>

<div class="note">
<p><strong>注意：</strong>事实上，{{domxref("HTMLDocument")}} 也是一个接口，但是它不必是一个独立的类型。在一些浏览器上是，但在另外一些浏览器上它仅仅是 <code>Document</code> 接口的别名。</p>
</div>

<h2 id="序列化一个_XML_文档">序列化一个 XML 文档</h2>

<p>被给一个 {{domxref("Document")}}，你可以使用 {{domxref("XMLSerializer.serializeToString()")}} 方法把文档的 DOM 树序列化为 XML。</p>

<p>使用下面的方法来序列化在先前章节中创建的 XML 文档内容。</p>

<h3 id="把DOM树_序列化成字符串">把 DOM 树 序列化成字符串</h3>

<p>首先，使用<a href="/zh-CN/docs/Web/API/Document_Object_Model/How_to_create_a_DOM_tree">如何创建一个 DOM 树</a>中的方法构建一个 DOM 树。也可以使用从 {{ domxref("XMLHttpRequest") }} 中获得的 DOM 树。</p>

<p>为了序列化 DOM 树的 <code>doc</code> 为 XML 文档，调用 {{domxref("XMLSerializer.serializeToString()")}}：</p>

<pre class="brush: js">var oSerializer = new XMLSerializer();
var sXML = oSerializer.serializeToString(doc);</pre>

<h3 id="序列化_HTML_文档">序列化 HTML 文档</h3>

<p>如果你手上的 DOM 是一个 HTML 文档，你可以使用 <code>serializeToString()</code>，但是也有一个更简单的选择：直接用 {{domxref("Element.innerHTML")}} 属性（如果你仅仅想得到指定节点的后代的话）或者是如果你想得到节点本身及它所有的后代的话，你可以使用 {{domxref("Element.outerHTML")}} 属性。</p>

<pre class="brush: js">var docHTML = document.documentElement.innerHTML;
</pre>

<p>因此，<code>docHTML</code> is 一个包含 HTML 内容的文档的 {{domxref("DOMString")}}; 也就是说，{{HTMLElement("body")}} 元素的内容。</p>

<p>你可以使用以下代码得到 <code>&lt;body&gt;</code> 和它的后代对应的 HTML：</p>

<pre class="brush: js">var docHTML = document.documentElement.outerHTML;</pre>

<h2 id="参见">参见</h2>

<ul>
 <li><a href="/zh-CN/docs/Web/XPath">XPath</a></li>
 <li>{{domxref("XMLHttpRequest")}}</li>
 <li>{{domxref("Document")}}、{{domxref("XMLDocument")}}，和 {{domxref("HTMLDocument")}}</li>
</ul>
