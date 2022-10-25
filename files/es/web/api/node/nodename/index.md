---
title: element.nodeName
slug: Web/API/Node/nodeName
tags:
  - Referencia_DOM_de_Gecko
translation_of: Web/API/Node/nodeName
---
<div>{{APIRef("DOM")}}</div>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>Devuelve el nombre del nodo actual, en forma de cadena.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval">var<em>str</em> =<em>node</em>.nodeName;
</pre>

<p><code>str</code> es una variable de cadena en la que se almacena el nombre del elemento actual.</p>

<p><code>nodeName</code> es un atributo de solo-lectura.</p>

<h3 id="Notas" name="Notas">Notas</h3>

<p>Aquí tenemos el valor devuelto por varios tipos de nodo.</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th class="header" style="text-align: center;">Interfaz</th>
   <th class="header" style="text-align: center;">nodeName</th>
  </tr>
  <tr>
   <td><a href="es/DOM/Attr">Attr</a></td>
   <td>igual que <code><a href="es/DOM/Attr.name">Attr.name</a></code></td>
  </tr>
  <tr>
   <td><a href="es/DOM/CDATASection">CDATASection</a></td>
   <td>"#cdata-section"</td>
  </tr>
  <tr>
   <td><a href="es/DOM/Comment">Comment</a></td>
   <td>"#comment"</td>
  </tr>
  <tr>
   <td><a href="es/DOM/document">Document</a></td>
   <td>"#document"</td>
  </tr>
  <tr>
   <td><a href="es/DOM/DocumentFragment">DocumentFragment</a></td>
   <td>"#document-fragment"</td>
  </tr>
  <tr>
   <td><a href="es/DOM/DocumentType">DocumentType</a></td>
   <td>igual que <code><a href="es/DOM/DocumentType.name">DocumentType.name</a></code></td>
  </tr>
  <tr>
   <td><a href="es/DOM/element">Element</a></td>
   <td>igual que <code><a href="es/DOM/element.tagName">Element.tagName</a></code></td>
  </tr>
  <tr>
   <td><a href="es/DOM/Entity">Entity</a></td>
   <td>nombre de entity</td>
  </tr>
  <tr>
   <td><a href="es/DOM/EntityReference">EntityReference</a></td>
   <td>nombre de la identidad de referencia</td>
  </tr>
  <tr>
   <td><a href="es/DOM/Notation">Notation</a></td>
   <td>nombre de la notación</td>
  </tr>
  <tr>
   <td><a href="es/DOM/ProcessingInstruction">ProcessingInstruction</a></td>
   <td>igual que <code><a href="es/DOM/ProcessingInstruction.target">ProcessingInstruction.target</a></code></td>
  </tr>
  <tr>
   <td>Text</td>
   <td>"#text"</td>
  </tr>
 </tbody>
</table>

<h3 id="Ejemplo" name="Ejemplo">Ejemplo</h3>

<p>Dado el siguiente código:</p>

<pre>&lt;div id="d1"&gt;hola mundo&lt;/div&gt;
&lt;input type="text" id="t"/&gt;
</pre>

<p>y el siguiente script:</p>

<pre>var div1 = document.getElementById("d1");
var text_field = document.getElementById("t");
text_field.value = div1.nodeName;
</pre>

<p>En XHTML (o alguna otra forma de XML) el valor de <code>text_field</code> será "div". Sin embargo, en HTML, el valor de <code>text_field</code> sería "DIV".</p>

<p>Ten en cuenta que podríamos haber usado la propiedad <code><a href="es/DOM/element.tagName">tagName</a></code> en su lugar, ya que <code>nodeName</code> tiene el mismo valor que <code>tagName</code> para un elemento. Presta atención, sin embargo, a que <code>nodeName</code> devolverá <code>#text</code> para los nodos de texto, mientras que <code>tagName</code> devolverá <code>undefined</code>.</p>

<h3 id="Especificaciones" name="Especificaciones">Especificaciones</h3>

<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-F68D095">DOM Level 2 Core: Node.nodeName</a></p>

<p><a class="external" href="http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-F68D095">DOM Level 3 Core: Node.nodeName</a></p>
