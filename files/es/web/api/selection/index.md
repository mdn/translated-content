---
title: Selection
slug: Web/API/Selection
tags:
  - DOM
  - Todas_las_Categorías
translation_of: Web/API/Selection
---
<p>{{ ApiRef("DOM") }}</p>

<h3 id="Introducci.C3.B3n" name="Introducci.C3.B3n">Introducción</h3>

<p>Selección es la clase de objeto devuelto por <code><a href="es/DOM/window.getSelection"> window.getSelection()</a></code> y otros métodos.</p>

<p>Un objeto de selección representa los <a href="es/DOM/range">rangos</a> que el usuario ha seleccionado. Suele llevar un sólo rango, accesado como sigue:</p>

<pre class="eval">range = sel.getRangeAt(0);
</pre>

<p>Llamar al método <code><a href="es/DOM/Selection/toString">toString()</a></code> devuelve el texto contenido en la selección, ej:</p>

<pre class="eval">selObj = window.getSelection();
window.alert(selObj.toString());
</pre>

<p> </p>

<h3 id="Glosario" name="Glosario">Glosario</h3>

<p>Otros términos claves usados en esta parte.</p>

<dl>
 <dt>anchor</dt>
 <dd>El ancla de una selección es el punto inicial de ésta. Cuando se hace una selección con el ratón, el ancla es el punto donde se presionó por primera vez el botón del ratón. Cuando el usuario mueve la selección utilizando el ratón o el teclado, el ancla no se mueve.</dd>
 <dt>focus</dt>
 <dd>El foco de una selección es el punto último de ésta. Cuando se hace la selección con el ratón, el foco es el punto donde se suelta el botón del ratón. Cuando el usuario mueve la selección utilizando el "mouse" o el teclado, el foco es el final de la selección que el usuario está moviendo.</dd>
 <dt>range</dt>
 <dd>Un rango es una parte contigua de un documento. Un rango puede contener un nodo entero así como porciones de nodos, por ejemplo una parte de un nodo de texto. Normalmente un usuario seleccionará únicamente un solo rango a la vez, pero también le es posible seleccionar múltiples rangos (por ejemplo, utilizando la tecla control<em>Ctrl</em> ). Un rango puede ser recuperado de una selección como un objeto de <a href="es/DOM/range">rango</a>. Los objetos de rango también pueden ser creados vía el DOM y programadamente adheridos o removidos de una selección.</dd>
</dl>

<h3 id="Propiedades" name="Propiedades">Propiedades</h3>

<dl>
 <dt><a href="es/DOM/Selection/anchorNode">anchorNode</a></dt>
 <dd>Devuelve el nodo en el cual empieza la selección.</dd>
 <dt><a href="es/DOM/Selection/anchorOffset">anchorOffset</a></dt>
 <dd>Devuelve el número de caracteres en que el ancla de la selección es colocada dentro de <code>anchorNode.</code></dd>
 <dt><a href="es/DOM/Selection/focusNode">focusNode</a></dt>
 <dd>Devuelve el nodo en el cual acaba la selección.</dd>
 <dt><a href="es/DOM/Selection/focusOffset">focusOffset</a></dt>
 <dd>Devuelve el número de caracteres en que el foco de la selección es colocado dentro de <code>focusNode.</code></dd>
 <dt><a href="es/DOM/Selection/isCollapsed">isCollapsed</a></dt>
 <dd>Devuelve un valor boleano verdadero si los puntos de inicio y fin de la selección están en la misma posición.</dd>
 <dt><a href="es/DOM/Selection/rangeCount">rangeCount</a></dt>
 <dd>Devuelve el número de los rangos que hay en la selección.</dd>
</dl>

<h3 id="M.C3.A9todos" name="M.C3.A9todos">Métodos</h3>

<dl>
 <dt><a href="es/DOM/Selection/getRangeAt">getRangeAt</a></dt>
 <dd>Devuelve un objeto de rango representando uno de los rangos seleccionados.</dd>
 <dt><a href="es/DOM/Selection/collapse">collapse</a></dt>
 <dd>Pliega la selección a un simple punto.</dd>
 <dt><a href="es/DOM/Selection/extend">extend</a></dt>
 <dd>Traslada el foco de la selección a un punto especificado.</dd>
 <dt><a href="es/DOM/Selection/collapseToStart">collapseToStart</a></dt>
 <dd>Traslada el foco de la selección al mismo punto que el ancla.</dd>
 <dt><a href="es/DOM/Selection/collapseToEnd">collapseToEnd</a></dt>
 <dd>Traslada el ancla hasta el mismo punto del foco. El foco no se mueve.</dd>
 <dt><a href="es/DOM/Selection/selectAllChildren">selectAllChildren</a></dt>
 <dd>Añadirá todos los "hijos" del nodo especificado a la selección.</dd>
 <dt><a href="es/DOM/Selection/addRange">addRange</a></dt>
 <dd>Añade un objeto de rango a la selección.</dd>
 <dt><a href="es/DOM/Selection/removeRange">removeRange</a></dt>
 <dd>Quita un rango de la selección.</dd>
 <dt><a href="es/DOM/Selection/removeAllRanges">removeAllRanges</a></dt>
 <dd>Quita todos los rangos de la selección.</dd>
 <dt><a href="es/DOM/Selection/deleteFromDocument">deleteFromDocument</a></dt>
 <dd>Elimina del documento el contenido de la selección.</dd>
 <dt><a href="es/DOM/Selection/selectionLanguageChange">selectionLanguageChange</a></dt>
 <dd>NO IMPLEMENTADA, Cambia la direccion de la seleccion de Izquierda a Derecha a Derecha a Izquierda</dd>
 <dt><a href="es/DOM/Selection/toString">toString</a></dt>
 <dd>Devuelve una cadena de caracteres (texto), la cual es representada por el objeto de selección, es decir, el texto seleccionado.</dd>
 <dt><a href="es/DOM/Selection/containsNode">containsNode</a></dt>
 <dd>Indica si tal nodo es parte de la selección.</dd>
</dl>

<h3 id="Ver_tambi.C3.A9n" name="Ver_tambi.C3.A9n">Ver también</h3>

<p><a href="es/DOM/window.getSelection">window.getSelection</a>, <a href="es/DOM/range">Rango</a></p>

<h3 id="Enlaces_externos" name="Enlaces_externos">Enlaces externos</h3>

<ul>
 <li><a class="external" href="http://lxr.mozilla.org/mozilla/source/content/base/public/nsISelection.idl">IDL definition in Mozilla cross-reference</a></li>
</ul>

<p> </p>

<p> </p>

<div class="noinclude"> </div>

<p>{{ languages( { "en": "en/DOM/Selection", "fr": "fr/DOM/selection", "it": "it/DOM/Selection", "ja": "ja/DOM/selection", "pl": "pl/DOM/Selection" } ) }}</p>
