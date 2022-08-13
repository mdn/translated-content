---
title: element
slug: Web/API/Element
tags:
  - Referencia_DOM_de_Gecko
translation_of: Web/API/Element
---
<p>{{ ApiRef("DOM") }} Este capítulo proporciona una breve explicación para los métodos generales, las propiedades y los eventos disponibles para los elementos HTML y XML en el DOM de Gecko.</p>

<p>Varias especificaciones aplicadas a los elementos:</p>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Core/">Especificaciones esenciales del DOM</a> —describe las interfaces esenciales compartidas por la mayoría de los objetos DOM en los documentos HTML y XML.</li>
 <li><a class="external" href="http://www.w3.org/TR/DOM-Level-2-HTML/">Especificaciones HTML del DOM</a> —describe las interfaces para objetos en documentos HTML y XHTML construidos con la especificación base.</li>
 <li><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Events/">Especificiones de los eventos DOM</a> —describe los eventos compartidos por la mayoría de objetos DOM, construidos con las especificaciones y base DOM <a class="external" href="http://www.w3.org/TR/DOM-Level-2-Views/">Opiniones</a>.</li>
</ul>

<p>Los artículos listados aquí amplían lo antedicho e incluyen enlaces a la especificación apropiada del DOM de W3C.</p>

<p>Mientras que estas interfaces son generalmente compartidas por la mayoría de los elementos HTML y XML, hay muchas más especiales para los objetos particulares listados en la especificación HTML del DOM —por ejemplo las interfaces del <a href="/es/DOM/table" title="es/DOM/table">elemento tabla de HTML</a> y <a href="/es/DOM/form" title="es/DOM/form">elemento formulario de HTML</a>.</p>

<h3 id="Propiedades" name="Propiedades">Propiedades</h3>

<table class="fullwidth-table">
 <tbody>
  <tr>
   <th>Nombre</th>
   <th>Descripción</th>
   <th>Tipo</th>
   <th>Disponibilidad</th>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.attributes" title="es/DOM/element.attributes">attributes</a></code></td>
   <td>Todos los atributos asociados a un elemento.</td>
   <td><code><a href="/es/DOM/NamedNodeMap" title="es/DOM/NamedNodeMap">NamedNodeMap</a></code></td>
   <td><small>para <a href="/es/DOM" title="es/DOM">todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.childNodes" title="es/DOM/element.childNodes">childNodes</a></code></td>
   <td>Todos los nodos hijos de un elemento.</td>
   <td><code><a href="/es/DOM/NodeList" title="es/DOM/NodeList">Listado de nudo</a></code></td>
   <td><small>para <a href="/es/DOM" title="es/DOM">todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.className" title="es/DOM/element.className">className</a></code></td>
   <td>La clase del elemento.</td>
   <td><code><a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">Secuencia</a></code></td>
   <td><small>para <a href="/es/HTML" title="es/HTML">HTML</a>, <a href="/es/XUL" title="es/XUL">XUL</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.clientHeight" title="es/DOM/element.clientHeight">clientHeight</a></code></td>
   <td>El alto interior del elemento.</td>
   <td><code><a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/Number" title="es/Core_JavaScript_1.5_Reference/Global_Objects/Number">Número</a></code></td>
   <td><small>para <a href="/es/HTML" title="es/HTML">HTML</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.clientWidth" title="es/DOM/element.clientWidth">clientWidth</a></code></td>
   <td>El ancho interior del elemento.</td>
   <td><code><a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/Number" title="es/Core_JavaScript_1.5_Reference/Global_Objects/Number">Número</a></code></td>
   <td><small>para <a href="/es/HTML" title="es/HTML">HTML</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.dir" title="es/DOM/element.dir">dir</a></code></td>
   <td>La direccionalidad del elemento.</td>
   <td><code><a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">Secuencia</a></code></td>
   <td><small>para <a href="/es/HTML" title="es/HTML">HTML</a>, <a href="/es/XUL" title="es/XUL">XUL</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.firstChild" title="es/DOM/element.firstChild">firstChild</a></code></td>
   <td>El primer hijo directo del elemento, <code>null</code> si no hay.</td>
   <td><code><a href="/es/DOM/Node" title="es/DOM/Node">Nudo</a></code></td>
   <td><small>para <a href="/es/DOM" title="es/DOM">todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.id" title="es/DOM/element.id">id</a></code></td>
   <td>La identificación del elemento.</td>
   <td><code><a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">Secuencia</a></code></td>
   <td><small>para <a href="/es/HTML" title="es/HTML">HTML</a>, <a href="/es/XUL" title="es/XUL">XUL</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.innerHTML" title="es/DOM/element.innerHTML">innerHTML</a></code></td>
   <td>El contenido y el código que hay dentro del elemento.</td>
   <td><code><a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">Secuencia</a></code></td>
   <td><small>para <a href="/es/HTML" title="es/HTML">HTML</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.lang" title="es/DOM/element.lang">lang</a></code></td>
   <td>El lenguaje de los atributos, texto y contenidos del elemento.</td>
   <td><code><a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">Secuencia</a></code></td>
   <td><small>para <a href="/es/HTML" title="es/HTML">HTML</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.lastChild" title="es/DOM/element.lastChild">lastChild</a></code></td>
   <td>El último hijo directo del elemento, <code>null</code> si no hay.</td>
   <td><code><a href="/es/DOM/Node" title="es/DOM/Node">Node</a></code></td>
   <td><small>para <a href="/es/DOM" title="es/DOM">todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.localName" title="es/DOM/element.localName">localName</a></code></td>
   <td>La parte local del nombre cualificado del elemento.</td>
   <td><code><a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">Secuencia</a></code></td>
   <td><small>para <a href="/es/DOM" title="es/DOM">todos</a></small></td>
  </tr>
  <tr>
   <th>Nombre</th>
   <th>Descripción</th>
   <th>Tipo</th>
   <th>Disponibilidad</th>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.name" title="es/DOM/element.name">name</a></code></td>
   <td>El nombre del elemento.</td>
   <td><code><a href="/En/Core_JavaScript_1.5_Reference/Global_Objects/String" title="En/Core_JavaScript_1.5_Reference/Global_Objects/String">Secuencia</a></code></td>
   <td><small>para <a href="/es/HTML" title="es/HTML">HTML</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.namespaceURI" title="es/DOM/element.namespaceURI">namespaceURI</a></code></td>
   <td>El URI del espacio de nombre de ese nodo, <code>null</code> si no está especificado.</td>
   <td><code><a href="/En/Core_JavaScript_1.5_Reference/Global_Objects/String" title="En/Core_JavaScript_1.5_Reference/Global_Objects/String">Secuencia</a></code></td>
   <td><small>para <a href="/es/DOM" title="es/DOM">todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.nextSibling" title="es/DOM/element.nextSibling">nextSibling</a></code></td>
   <td>El nodo inmediatamente posterior al primero dado en el árbol, <code>null</code> si no hay.</td>
   <td><code><a href="/es/DOM/Node" title="es/DOM/Node">Nudo</a></code></td>
   <td><small>para <a href="/es/DOM" title="es/DOM">todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.nodeName" title="es/DOM/element.nodeName">nodeName</a></code></td>
   <td>El nombre del nodo de ese elemento.</td>
   <td><code><a href="/En/Core_JavaScript_1.5_Reference/Global_Objects/String" title="En/Core_JavaScript_1.5_Reference/Global_Objects/String">Secuencia</a></code></td>
   <td><small>para <a href="/es/DOM" title="es/DOM">todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.nodeType" title="es/DOM/element.nodeType">nodeType</a></code></td>
   <td>Un número que representa el tipo del nodo. Lo mismo que <code>1</code> para los elementos DOM.</td>
   <td><code><a href="/En/Core_JavaScript_1.5_Reference/Global_Objects/Number" title="En/Core_JavaScript_1.5_Reference/Global_Objects/Number">Número</a></code></td>
   <td><small>para <a href="/es/DOM" title="es/DOM">todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.nodeValue" title="es/DOM/element.nodeValue">nodeValue</a></code></td>
   <td>El valor del nodo. Lo mismo que <code>null</code> para los elementos DOM.</td>
   <td><code><a href="/En/Core_JavaScript_1.5_Reference/Global_Objects/String" title="En/Core_JavaScript_1.5_Reference/Global_Objects/String">Secuencia</a></code></td>
   <td><small>para <a href="/es/DOM" title="es/DOM">todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.offsetHeight" title="es/DOM/element.offsetHeight">offsetHeight</a></code></td>
   <td>El alto de un elemento, tal cual está escrito en la composición.</td>
   <td><code><a href="/En/Core_JavaScript_1.5_Reference/Global_Objects/Number" title="En/Core_JavaScript_1.5_Reference/Global_Objects/Number">Número</a></code></td>
   <td><small>para <a href="/es/HTML" title="es/HTML">HTML</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.offsetLeft" title="es/DOM/element.offsetLeft">offsetLeft</a></code></td>
   <td>La distancia que hay desde el borde izquierdo del elemento al de su <code>offsetParent</code>.</td>
   <td><code><a href="/En/Core_JavaScript_1.5_Reference/Global_Objects/Number" title="En/Core_JavaScript_1.5_Reference/Global_Objects/Number">Número</a></code></td>
   <td><small>para <a href="/es/HTML" title="es/HTML">HTML</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.offsetParent" title="es/DOM/element.offsetParent">offsetParent</a></code></td>
   <td>El elemento del cual todos los cálculos de distancia son actualmente computados.</td>
   <td><code><a href="/es/DOM/element" title="es/DOM/element">Elemento</a></code></td>
   <td><small>para <a href="/es/HTML" title="es/HTML">HTML</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.offsetTop" title="es/DOM/element.offsetTop">offsetTop</a></code></td>
   <td>La distancia desde el borde superior del elemento hasta el de su <code>offsetParent</code>.</td>
   <td><code><a href="/En/Core_JavaScript_1.5_Reference/Global_Objects/Number" title="En/Core_JavaScript_1.5_Reference/Global_Objects/Number">Número</a></code></td>
   <td><small>para <a href="/es/HTML" title="es/HTML">HTML</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.offsetWidth" title="es/DOM/element.offsetWidth">offsetWidth</a></code></td>
   <td>El ancho de un elemento, tal cual está escrito en la composición.</td>
   <td><code><a href="/En/Core_JavaScript_1.5_Reference/Global_Objects/Number" title="En/Core_JavaScript_1.5_Reference/Global_Objects/Number">Número</a></code></td>
   <td><small>para <a href="/es/HTML" title="es/HTML">HTML</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.ownerDocument" title="es/DOM/element.ownerDocument">ownerDocument</a></code></td>
   <td>El documento en el cual está ese nodo, <code>null</code> si no hay.</td>
   <td><code><a href="/es/DOM/document" title="es/DOM/document">Documento</a></code></td>
   <td><small>para <a href="/es/DOM" title="es/DOM">todos</a></small></td>
  </tr>
  <tr>
   <th>Nombre</th>
   <th>Descripción</th>
   <th>Tipo</th>
   <th>Disponibilidad</th>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.parentNode" title="es/DOM/element.parentNode">parentNode</a></code></td>
   <td>El elemento original(padre) de ese nodo, <code>null</code> si no hay dentro del <a href="/es/DOM/document" title="es/DOM/document">documento de DOM</a>.</td>
   <td><code><a href="/es/DOM/Node" title="es/DOM/Node">Nudo</a></code></td>
   <td><small>para <a href="/es/DOM" title="es/DOM">todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.prefix" title="es/DOM/element.prefix">prefix</a></code></td>
   <td>El prefijo del espacio de nombre del nodo, <code>null</code> si no está especificado.</td>
   <td><code><a href="/En/Core_JavaScript_1.5_Reference/Global_Objects/String" title="En/Core_JavaScript_1.5_Reference/Global_Objects/String">Secuencia</a></code></td>
   <td><small>para <a href="/es/DOM" title="es/DOM">todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.previousSibling" title="es/DOM/element.previousSibling">previousSibling</a></code></td>
   <td>El nodo inmediatamente anterior al primero dado en el árbol , <code>null</code> si no hay.</td>
   <td><code><a href="/es/DOM/Node" title="es/DOM/Node">Nudo</a></code></td>
   <td><small>para <a href="/es/DOM" title="es/DOM">todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.scrollHeight" title="es/DOM/element.scrollHeight">scrollHeight</a></code></td>
   <td>Muestra la altura de deslizamiento del elemento.</td>
   <td><code><a href="/En/Core_JavaScript_1.5_Reference/Global_Objects/Number" title="En/Core_JavaScript_1.5_Reference/Global_Objects/Number">Número</a></code></td>
   <td><small>para <a href="/es/HTML" title="es/HTML">HTML</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.scrollLeft" title="es/DOM/element.scrollLeft">scrollLeft</a></code></td>
   <td>Obtiene/establece el offset de scroll izquierdo de un elemento.</td>
   <td><code><a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/Number" title="es/Core_JavaScript_1.5_Reference/Global_Objects/Number">Número</a></code></td>
   <td><small>para <a href="/es/HTML" title="es/HTML">HTML</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.scrollTop" title="es/DOM/element.scrollTop">scrollTop</a></code></td>
   <td>Obtiene/establece el offset de scroll superior de un elemento.</td>
   <td><code><a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/Number" title="es/Core_JavaScript_1.5_Reference/Global_Objects/Number">Número</a></code></td>
   <td><small>para <a href="/es/HTML" title="es/HTML">HTML</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.scrollWidth" title="es/DOM/element.scrollWidth">scrollWidth</a></code></td>
   <td>Muestra el ancho de deslizamiento de un elemento.</td>
   <td><code><a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/Number" title="es/Core_JavaScript_1.5_Reference/Global_Objects/Number">Número</a></code></td>
   <td><small>para <a href="/es/HTML" title="es/HTML">HTML</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/Es/DOM/Element.style" title="Es/DOM/Element.style">style</a></code></td>
   <td>Un objeto representando las declaraciones de los atributos de estilo del elemento.</td>
   <td><code><a href="/es/DOM/CSSStyleDeclaration" title="es/DOM/CSSStyleDeclaration">Estilo CSS</a></code></td>
   <td><small>para <a href="/es/HTML" title="es/HTML">HTML</a>, <a href="/es/XUL" title="es/XUL">XUL</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.tabIndex" title="es/DOM/element.tabIndex">tabIndex</a></code></td>
   <td>Obtiene/establece la posición del elemento en el órden de tabulación.</td>
   <td><code><a href="/En/Core_JavaScript_1.5_Reference/Global_Objects/Number" title="En/Core_JavaScript_1.5_Reference/Global_Objects/Number">Número</a></code></td>
   <td><small>para <a href="/es/HTML" title="es/HTML">HTML</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.tagName" title="es/DOM/element.tagName">tagName</a></code></td>
   <td>El nombre de la etiqueta para el elemento dado.</td>
   <td><code><a href="/En/Core_JavaScript_1.5_Reference/Global_Objects/String" title="En/Core_JavaScript_1.5_Reference/Global_Objects/String">Secuencia</a></code></td>
   <td><small>para <a href="/es/DOM" title="es/DOM">todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.textContent" title="es/DOM/element.textContent">textContent</a></code></td>
   <td>Obtiene/establece los contenidos textuales de un elemento y todos sus descendentes.</td>
   <td><code><a href="/En/Core_JavaScript_1.5_Reference/Global_Objects/String" title="En/Core_JavaScript_1.5_Reference/Global_Objects/String">Secuencia</a></code></td>
   <td><small>para <a href="/es/DOM" title="es/DOM">todos</a></small></td>
  </tr>
 </tbody>
</table>

<h3 id="M.C3.A9todos" name="M.C3.A9todos">Métodos</h3>

<table class="fullwidth-table">
 <tbody>
  <tr>
   <th>Nombre y Descripción</th>
   <th>Devuelve</th>
   <th>Disponible</th>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.addEventListener" title="es/DOM/element.addEventListener">addEventListener</a>( <a href="/En/Core_JavaScript_1.5_Reference/Global_Objects/String" title="En/Core_JavaScript_1.5_Reference/Global_Objects/String">type</a>, <a href="/en/JavaScript/Reference/Global_Objects/Function" title="en/JavaScript/Reference/Global_Objects/Function">handler</a>, <a href="/en/JavaScript/Reference/Global_Objects/Boolean" title="en/JavaScript/Reference/Global_Objects/Boolean">bubble</a>)</code><br>
    Registra un controlador de evento para un tipo de evento específico en un elemento.</td>
   <td>-</td>
   <td><small><a href="/es/DOM/event" title="es/DOM/event">Todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Node/appendChild" title="es/DOM/element.appendChild">appendChild</a>( <a href="/es/DOM/Node" title="es/DOM/Node">appendedNode</a> )</code><br>
    Inserta un nodo así como el último nodo hijo de este elemento.</td>
   <td><a href="/es/DOM/Node" title="es/DOM/Node">Node</a></td>
   <td><small><a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.blur" title="es/DOM/element.blur">blur</a>()</code><br>
    Quita el foco del teclado del elemento actual.</td>
   <td>-</td>
   <td><small>para <a href="/es/HTML" title="es/HTML">HTML</a>, <a href="/es/XUL" title="es/XUL">XUL</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.click" title="es/DOM/element.click">click</a>()</code><br>
    Simula un clic sobre el elemento actual.</td>
   <td>-</td>
   <td><small>para <a href="/es/HTML" title="es/HTML">HTML</a>, <a href="/es/XUL" title="es/XUL">XUL</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Node/cloneNode" title="es/DOM/element.cloneNode">cloneNode</a>( <a href="/en/JavaScript/Reference/Global_Objects/Boolean" title="en/JavaScript/Reference/Global_Objects/Boolean">deep</a>)</code><br>
    Hace copia de un nudo, y opcionalmente, de todo sus contenidos</td>
   <td><a href="/es/DOM/Node" title="es/DOM/Node">Node</a></td>
   <td><small>para <a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/DOM/element.dispatchEvent" title="es/DOM/element.dispatchEvent">dispatchEvent</a>( <a href="/es/DOM/event" title="es/DOM/event">event</a> )</code><br>
    Envía un evento a este nodo en el DOM.</td>
   <td><a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/Boolean" title="es/Core_JavaScript_1.5_Reference/Global_Objects/Boolean">Boolean</a></td>
   <td><small><a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Element/getAttribute" title="es/DOM/element.getAttribute">getAttribute</a>( <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">name</a> )</code><br>
    Devuelve el valor de un atributo nombrado desde el nodo actual.</td>
   <td><a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/Object" title="es/Core_JavaScript_1.5_Reference/Global_Objects/Object">Object</a></td>
   <td><small><a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Element/getAttributeNS" title="es/DOM/element.getAttributeNS">getAttributeNS</a>( <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">namespace</a>, <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">name</a> )</code><br>
    Devuelve el valor del atributo con el nombre especificado, desde el nodo actual.</td>
   <td><a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/Object" title="es/Core_JavaScript_1.5_Reference/Global_Objects/Object">Object</a></td>
   <td><small><a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Element/getAttributeNode" title="es/DOM/element.getAttributeNode">getAttributeNode</a>( <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">name</a> )</code><br>
    Devuelve la representación del nodo del atributo nombrado desde el nodo actual.</td>
   <td><a href="/es/DOM/Attr" title="es/DOM/Attr">Attr</a></td>
   <td><small><a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Element/getAttributeNodeNS" title="es/DOM/element.getAttributeNodeNS">getAttributeNodeNS</a>( <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">namespace</a>, <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">name</a> )</code><br>
    Devuelve la representación del nodo del atributo con el nombre especificado, desde el nodo actual.</td>
   <td><a href="/es/DOM/Attr" title="es/DOM/Attr">Attr</a></td>
   <td><small><a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
  <tr>
   <th>Nombre y Descripción</th>
   <th>Devuelve</th>
   <th>Disponibilidad</th>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Element/getElementsByTagName" title="es/DOM/element.getElementsByTagName">getElementsByTagName</a>( <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">name</a> )</code><br>
    Devuelve un conjunto de todos los elementos descendentes, de un nombre de etiqueta particular, desde el elemento actual.</td>
   <td><a href="/es/DOM/NodeSet" title="es/DOM/NodeSet">NodeSet</a></td>
   <td><small><a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Element/getElementsByTagNameNS" title="es/DOM/element.getElementsByTagNameNS">getElementsByTagNameNS</a>( <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">namespace</a>, <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">name</a> )</code><br>
    Devuelve un conjunto de todos los elementos descendentes, de un nombre de etiqueta y espacio particular, desde el elemento actual.</td>
   <td><a href="/es/DOM/NodeSet" title="es/DOM/NodeSet">NodeSet</a></td>
   <td><small><a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Element/hasAttribute" title="es/DOM/element.hasAttribute">hasAttribute</a>( <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">name</a> )</code><br>
    Verifica si el elemento tiene el atributo especificado o no.</td>
   <td><a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/Boolean" title="es/Core_JavaScript_1.5_Reference/Global_Objects/Boolean">Boolean</a></td>
   <td><small><a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Element/hasAttributeNS" title="es/DOM/element.hasAttributeNS">hasAttributeNS</a>( <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">namespace</a>, <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">name</a> )</code><br>
    Verifica si el elemento tiene el atributo especificado, en el nombre de espacio especificado o no.</td>
   <td><a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/Boolean" title="es/Core_JavaScript_1.5_Reference/Global_Objects/Boolean">Boolean</a></td>
   <td><small><a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Element/hasAttributes" title="es/DOM/element.hasAttributes">hasAttributes</a>()</code><br>
    Verifica si el elemento tiene o no algún atributo.</td>
   <td><a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/Boolean" title="es/Core_JavaScript_1.5_Reference/Global_Objects/Boolean">Boolean</a></td>
   <td><small><a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Node/hasChildNodes" title="es/DOM/element.hasChildNodes">hasChildNodes</a>()</code><br>
    Verifica si el elemento tiene nodos hijos o no.</td>
   <td><a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/Boolean" title="es/Core_JavaScript_1.5_Reference/Global_Objects/Boolean">Boolean</a></td>
   <td><small><a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Node/insertarAntes" title="es/DOM/element.insertBefore">insertBefore</a>( <a href="/es/DOM/Node" title="es/DOM/Node">insertedNode</a>, <a href="/es/DOM/Node" title="es/DOM/Node">adjacentNode</a> )</code><br>
    Inserta el primer nodo antes que el segundo, Nodo hijo en el DOM.</td>
   <td><a href="/es/DOM/Node" title="es/DOM/Node">Node</a></td>
   <td><small><a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Node/normalize" title="es/DOM/element.normalize">normalize</a>()</code><br>
    Limpia todos los nodos de texto debajo de este elemento (une lo adyacente, quita lo vacío).</td>
   <td>-</td>
   <td><small><a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Element/removeAttribute" title="es/DOM/element.removeAttribute">removeAttribute</a>( <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">name</a> )</code><br>
    Quita el atributo nombrado desde el nodo actual.</td>
   <td>-</td>
   <td><small><a href="/es/DOM" title="es/DOM">All</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Element/removeAttributeNS" title="es/DOM/element.removeAttributeNS">removeAttributeNS</a>( <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">namespace</a>, <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">name</a> )</code><br>
    Quita el atributo con el nombre y nombre de espacio especificado desde el nodo actual.</td>
   <td>-</td>
   <td><small><a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
  <tr>
   <th>Nombre y Descripción</th>
   <th>Devuelve</th>
   <th>Disponibilidad</th>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Element/removeAttributeNode" title="es/DOM/element.removeAttributeNode">removeAttributeNode</a>( <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">name</a> )</code><br>
    Quita la representación del nodo del atributo nombrado desde el nodo actual.</td>
   <td>-</td>
   <td><small><a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Node/removeChild" title="es/DOM/element.removeChild">removeChild</a>( <a href="/es/DOM/Node" title="es/DOM/Node">removedNode</a> )</code><br>
    Quita el nodo hijo desde el elemento actual.</td>
   <td><a href="/es/DOM/Node" title="es/DOM/Node">Node</a></td>
   <td><small><a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Element/removeEventListener" title="es/DOM/element.removeEventListener">removeEventListener</a>( <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">type</a>, <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/Function" title="es/Core_JavaScript_1.5_Reference/Global_Objects/Function">handler</a> )</code><br>
    Quita un oyente de evento desde el elemento.</td>
   <td>-</td>
   <td><small><a href="/es/DOM/event" title="es/DOM/event">Todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Node/replaceChild" title="es/DOM/element.replaceChild">replaceChild</a>( <a href="/es/DOM/Node" title="es/DOM/Node">insertedNode</a>, <a href="/es/DOM/Node" title="es/DOM/Node">replacedNode</a> )</code><br>
    Reemplaza un nodo hijo en el elemento actual con otro.</td>
   <td><a href="/es/DOM/Node" title="es/DOM/Node">Node</a></td>
   <td><small><a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Element/scrollIntoView" title="es/DOM/element.scrollIntoView">scrollIntoView</a>( <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/Boolean" title="es/Core_JavaScript_1.5_Reference/Global_Objects/Boolean">alignWithTop</a> )</code><br>
    Recorre la página hasta que el elemento se obtiene en la vista.</td>
   <td>-</td>
   <td><small><a href="/es/HTML" title="es/HTML">HTML</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Element/setAttribute" title="Es/DOM/Element.setAttribute">setAttribute</a>( <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">name</a>, <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/Object" title="es/Core_JavaScript_1.5_Reference/Global_Objects/Object">value</a> )</code><br>
    Establece el valor de un atributo nombrado desde el nodo actual.</td>
   <td>-</td>
   <td><small><a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Element/setAttributeNS" title="es/DOM/element.setAttributeNS">setAttributeNS</a>( <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">namespace</a>, <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">name</a>, <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/Object" title="es/Core_JavaScript_1.5_Reference/Global_Objects/Object">value</a> )</code><br>
    Establece el valor del atributo con el nombre y nombre de espacio especificado desde el nodo actual.</td>
   <td>-</td>
   <td><small><a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Element/setAttributeNode" title="es/DOM/element.setAttributeNode">setAttributeNode</a>( <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">name</a>, <a href="/es/DOM/Attr" title="es/DOM/Attr">attrNode</a> )</code><br>
    Establece la representación del nodo del atributo nombrado desde el nodo actual.</td>
   <td>-</td>
   <td><small><a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
  <tr>
   <td><code><a href="/es/docs/Web/API/Element/setAttributeNodeNS" title="es/DOM/element.setAttributeNodeNS">setAttributeNodeNS</a>( <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">namespace</a>, <a href="/es/Core_JavaScript_1.5_Reference/Global_Objects/String" title="es/Core_JavaScript_1.5_Reference/Global_Objects/String">name</a>, <a href="/es/DOM/Attr" title="es/DOM/Attr">attrNode</a> )</code><br>
    Establece la representación del nodo del atributo con el nombre y nombre de espacio especificado desde el nodo actual.</td>
   <td>-</td>
   <td><small><a href="/es/DOM" title="es/DOM">Todos</a></small></td>
  </tr>
 </tbody>
</table>

<h3 id="Eventos" name="Eventos">Eventos</h3>

<p>Son propiedades correspondientes a los atributos del evento "on" en HTML.</p>

<p>A diferencia de los atributos correspondientes, los valores de esas propiedades son funciones (o cualquier otro objeto trabajando con la interfaz <a class="external" href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventListener">EventListener</a>) más bien que una cadena de carácteres. En efecto, asignar un atributo de evento en HTML crea una función envolvente alrededor del código especificado. Por ejemplo, el siguiente HTML:</p>

<pre>&lt;div onclick="foo();"&gt;clic aquí!&lt;/div&gt;
</pre>

<p>Si <code>element</code> es una referencia a esta <code>div</code>, el valor de <code>element.onclick</code> será:</p>

<pre>function onclick(event) {
   foo();
}
</pre>

<p>El objeto <a href="/es/DOM/event" title="es/DOM/event">event</a> es pasado al parámetro <code>event</code> de esta función envolvente.</p>

<dl>
 <dt><a href="/es/DOM/element.onblur" title="es/DOM/element.onblur">onblur</a> - (al quitar el foco)</dt>
 <dd>Devuelve el código de manejo de evento para el evento <code>blur</code>.</dd>
</dl>

<dl>
 <dt><a href="/es/DOM/element.onchange" title="es/DOM/element.onchange">onchange</a> - (al modificar)</dt>
 <dd>Devuelve el código de manejo de evento para el evento <code>change</code>.</dd>
</dl>

<dl>
 <dt><a href="/es/DOM/element.onclick" title="es/DOM/element.onclick">onclick</a> - (al hacer clic)</dt>
 <dd>Devuelve el código de manejo de evento para el evento <code>onclick</code>.</dd>
</dl>

<dl>
 <dt><a href="/es/DOM/element.ondblclick" title="es/DOM/element.ondblclick">ondblclick</a> - (al hacer doble clic)</dt>
 <dd>Devuelve el código de manejo de evento para el evento <code>ondblclick</code>.</dd>
</dl>

<dl>
 <dt><a href="/es/DOM/element.onfocus" title="es/DOM/element.onfocus">onfocus</a> - (al poner el foco)</dt>
 <dd>Devuelve el código de manejo de evento para el evento <code>onfocus</code>.</dd>
</dl>

<dl>
 <dt><a href="/es/DOM/element.onkeydown" title="es/DOM/element.onkeydown">onkeydown</a> - (al tener una tecla apretada)</dt>
 <dd>Devuelve el código de manejo de evento para el evento <code>onkeydown</code>.</dd>
</dl>

<dl>
 <dt><a href="/es/DOM/element.onkeypress" title="es/DOM/element.onkeypress">onkeypress</a> - (al apretar una tecla)</dt>
 <dd>Devuelve el código de manejo de evento para el evento <code>onkeypress</code>.</dd>
</dl>

<dl>
 <dt><a href="/es/DOM/element.onkeyup" title="es/DOM/element.onkeyup">onkeyup</a> - (al soltar una tecla)</dt>
 <dd>Devuelve el código de manejo de evento para el evento <code>onkeyup</code>.</dd>
</dl>

<dl>
 <dt><a href="/es/DOM/element.onmousedown" title="es/DOM/element.onmousedown">onmousedown</a> - (al tener el botón del ratón apretado)</dt>
 <dd>Devuelve el código de manejo de evento para el evento <code>onmousedown</code>.</dd>
</dl>

<dl>
 <dt><a href="/es/DOM/element.onmousemove" title="es/DOM/element.onmousemove">onmousemove</a> - (al mover el ratón)</dt>
 <dd>Devuelve el código de manejo de evento para el evento <code>onmousemove</code>.</dd>
</dl>

<dl>
 <dt><a href="/es/DOM/element.onmouseout" title="es/DOM/element.onmouseout">onmouseout</a> - (al quitar el puntero del ratón)</dt>
 <dd>Devuelve el código de manejo de evento para el evento <code>onmouseout</code>.</dd>
</dl>

<dl>
 <dt><a href="/es/DOM/element.onmouseover" title="es/DOM/element.onmouseover">onmouseover</a> - (al pasar el ratón encima)</dt>
 <dd>Devuelve el código de manejo de evento para el evento <code>onmouseover</code>.</dd>
</dl>

<dl>
 <dt><a href="/es/DOM/element.onmouseup" title="es/DOM/element.onmouseup">onmouseup</a> - (al soltar el botón del ratón)</dt>
 <dd>Devuelve el código de manejo de evento para el evento <code>onmouseup</code>.</dd>
</dl>

<dl>
 <dt><a href="/es/DOM/element.onresize" title="es/DOM/element.onresize">onresize</a> - (al re-dimensionar la pantalla)</dt>
 <dd>Devuelve el código de manejo de evento para el evento <code>onresize</code>.</dd>
</dl>
