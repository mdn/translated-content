---
title: Node.nodeName
slug: Web/API/Node/nodeName
translation_of: Web/API/Node/nodeName
---
<div>
<div>{{APIRef("DOM")}}</div>
</div>

<p>Свойство <code><strong>Node.nodeName</strong></code> только для чтения, возвращающие имя текущего узла в виде строки.</p>

<p>Возвращаемое значение для различных типов узлов:</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Интерфейс</th>
   <th>значение nodeName</th>
  </tr>
  <tr>
   <td>{{domxref("Attr")}}</td>
   <td>Значение {{domxref("Attr.name")}}</td>
  </tr>
  <tr>
   <td>{{domxref("CDATASection")}}</td>
   <td><code>"#cdata-section"</code></td>
  </tr>
  <tr>
   <td>{{domxref("Comment")}}</td>
   <td><code>"#comment"</code></td>
  </tr>
  <tr>
   <td>{{domxref("Document")}}</td>
   <td><code>"#document"</code></td>
  </tr>
  <tr>
   <td>{{domxref("DocumentFragment")}}</td>
   <td><code>"#document-fragment"</code></td>
  </tr>
  <tr>
   <td>{{domxref("DocumentType")}}</td>
   <td>Значение {{domxref("DocumentType.name")}}</td>
  </tr>
  <tr>
   <td>{{domxref("Element")}}</td>
   <td>Значение {{domxref("Element.tagName")}}</td>
  </tr>
  <tr>
   <td>{{domxref("Entity")}}</td>
   <td>имя сущности</td>
  </tr>
  <tr>
   <td>{{domxref("EntityReference")}}</td>
   <td>Имя сущности ссылки</td>
  </tr>
  <tr>
   <td>{{domxref("Notation")}}</td>
   <td>Название обозначения</td>
  </tr>
  <tr>
   <td>{{domxref("ProcessingInstruction")}}</td>
   <td>
    <p>Значение {{domxref("ProcessingInstruction.target")}}</p>
   </td>
  </tr>
  <tr>
   <td>{{domxref("Text")}}</td>
   <td><code>"#text"</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="syntaxbox">var <em>str</em> = <em>node</em>.nodeName;
</pre>

<h2 id="Пример">Пример</h2>

<p>Учитывая следующую разметку:</p>

<pre class="brush:html">&lt;div id="d1"&gt;hello world&lt;/div&gt;
&lt;input type="text" id="t"/&gt;
</pre>

<p>и следующий скрипт:</p>

<pre class="brush:js">var div1 = document.getElementById("d1");
var text_field = document.getElementById("t");

text_field.value = div1.nodeName;
</pre>

<p>В XHTML (или любых других форматов XML), значение <code>text_field</code> будет прочитано как "div". Тем не менее, в HTML, значение <code>text_field</code> будет прочитано  как "DIV", потому что <code>nodeName</code> и <code>tagName</code> возвращают в верхнем регистре элементы HTML в DOM помеченном как HTML документ. Узнайте больше <a href="http://ejohn.org/blog/nodename-case-sensitivity/">деталей о чувствительности регистра nodeName в различных браузерах.</a></p>

<p>Обратите внимание, что свойство <code><a href="/en-US/docs/DOM/element.tagName" title="DOM/element.tagName">tagName</a></code> можно было бы использовать вместо него, поскольку <code>nodeName</code> имеет тоже значение что и <code>tagName</code> для элемента. Однако имейте в виду, что <code>nodeName</code> будет возвращать <code>#text</code> для текстово узла, в то время как <code>tagName</code> будет возвращать <code>undefined</code>.</p>

<h2 id="Спецификации">Спецификации</h2>

<ul>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-F68D095">DOM Level 2 Core: Node.nodeName</a></li>
 <li><a href="http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-F68D095">DOM Level 3 Core: Node.nodeName</a></li>
 <li><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#apis-in-html-documents">HTML 5: APIs in HTML documents</a></li>
</ul>
