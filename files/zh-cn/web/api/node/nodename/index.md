---
title: Node.nodeName
slug: Web/API/Node/nodeName
---
<div>
 {{APIRef}}</div>
<div>
  </div>
<div>
 概述</div>
<p>返回当前节点的节点名称</p>
<h2 id="语法">语法</h2>
<pre class="syntaxbox">var <em>str</em> = <em>node</em>.nodeName;
</pre>
<ul>
 <li><code>str</code> 是一个存储了当前节点的节点名称的字符串。</li>
 <li><code>nodeName 是一个只读属性</code>.</li>
</ul>
<h2 id="附注">附注</h2>
<p>下表列出了所有类型的节点的<code>nodeName</code>属性的值。</p>
<table class="standard-table">
 <tbody>
  <tr>
   <th>接口</th>
   <th>nodeName 属性值</th>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/DOM/Attr">Attr</a></td>
   <td>等同于 <code><a href="/zh-CN/docs/DOM/Attr.name">Attr.name</a></code> 属性的值</td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/DOM/CDATASection">CDATASection</a></td>
   <td>"#cdata-section"</td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/DOM/Comment">Comment</a></td>
   <td>"#comment"</td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/DOM/document">Document</a></td>
   <td>"#document"</td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/DOM/DocumentFragment">DocumentFragment</a></td>
   <td>"#document-fragment"</td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/DOM/DocumentType">DocumentType</a></td>
   <td>
    <p>等同于 <code><a href="/zh-CN/docs/DOM/DocumentType.name">DocumentType.name</a></code><code> 属性的值</code></p>
   </td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/DOM/element">Element</a></td>
   <td>
    <p>等同于 <code><a href="/zh-CN/docs/DOM/element.tagName">Element.tagName</a></code> 属性的值</p>
   </td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/DOM/Entity">Entity</a></td>
   <td>实体名称</td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/DOM/EntityReference">EntityReference</a></td>
   <td>实体引用名称</td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/DOM/Notation">Notation</a></td>
   <td>Notation 名称</td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/DOM/ProcessingInstruction">ProcessingInstruction</a></td>
   <td>
    <p>等同于 <code><a href="/zh-CN/docs/DOM/ProcessingInstruction.target">ProcessingInstruction.target</a></code> 属性的值</p>
   </td>
  </tr>
  <tr>
   <td><a href="/zh-CN/docs/DOM/Text">text</a></td>
   <td>"#text"</td>
  </tr>
 </tbody>
</table>
<h2 id="示例">示例</h2>
<p>假设已经存在下面的 HTML:</p>
<pre class="brush:html">&lt;div id="d1"&gt;hello world&lt;/div&gt;
&lt;input type="text" id="t"/&gt;
</pre>
<p>以及下面的 JavaScript:</p>
<pre class="brush:js">var div1 = document.getElementById("d1");
var text_field = document.getElementById("t");

text_field.value = div1.nodeName;
</pre>
<p>在 XHTML(以及属于 XML 类型的文档) 中，<code>变量 text_field</code>包含的值会是小写的"div".还在 HTML 中，<code>变量 text_field</code>包含的值会是大写的"DIV",<code>nodeName</code>和<code>tagName</code>属性都有这种表现。查看<a href="http://ejohn.org/blog/nodename-case-sensitivity/">details on nodeName case sensitivity in different browsers</a>一文深入了解。</p>
<p>如果是元素节点，<code>nodeName</code> 属性和 <code>tagName</code> 属性返回相同的值，但如果是文本节点，<code>nodeName</code>属性会返回 <code>"#text"</code>，而 <code>tagName</code> 属性会返回 <code>undefined</code>。</p>
<h2 id="规范">规范</h2>

{{Specifications}}
