---
title: Node.nodeValue
slug: Web/API/Node/nodeValue
translation_of: Web/API/Node/nodeValue
---
<div>
<div>{{APIRef("DOM")}}</div>
</div>

<p>Свойство <code><strong>Node.nodeValue</strong></code> возвращает или устанавливает значение текущего узла.</p>

<h2 id="Syntax">Синтаксис</h2>

<pre class="syntaxbox"><var>value</var> = <var>node</var>.nodeValue;
</pre>

<p><code>value</code> это строка содержащая значение текущего узла, если таковой имеется.</p>

<h2 id="Notes">Примечания</h2>

<p>Для самого документа, <code>nodeValue</code> возвращает <code>null</code>. Для текста, комментария и CDATA узлов, <code>nodeValue</code> возвращает содержимое узла. Для узла атрибута, вернётся значение атрибута.</p>

<p>Следующая таблица, показывает возвращаемые значения различных элементов:</p>

<table>
 <thead>
  <tr>
   <th>Attr</th>
   <th>Значение атрибута</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>CDATASection</td>
   <td>Содержимое секции CDATA</td>
  </tr>
  <tr>
   <td>Comment</td>
   <td>Содержимое комментария</td>
  </tr>
  <tr>
   <td>Document</td>
   <td>null</td>
  </tr>
  <tr>
   <td>DocumentFragment</td>
   <td>null</td>
  </tr>
  <tr>
   <td>DocumentType</td>
   <td>null</td>
  </tr>
  <tr>
   <td>Element</td>
   <td>null</td>
  </tr>
  <tr>
   <td>NamedNodeMap</td>
   <td>null</td>
  </tr>
  <tr>
   <td>EntityReference</td>
   <td>null</td>
  </tr>
  <tr>
   <td>Notation</td>
   <td>null</td>
  </tr>
  <tr>
   <td>ProcessingInstruction</td>
   <td>Все содержимое исключая цель</td>
  </tr>
  <tr>
   <td>Text</td>
   <td>Содержимое текстового узла</td>
  </tr>
 </tbody>
</table>

<p>Когда <code>nodeValue</code> равно <code>null</code>, установки не имеют эффекта.</p>

<h2 id="Specification">Спецификация</h2>

<ul>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-F68D080">DOM Level 2 Core: Node.nodeValue</a></li>
</ul>
