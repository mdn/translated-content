---
title: range
slug: Web/API/Range
tags:
  - DOM
  - Todas_las_Categorías
translation_of: Web/API/Range
---
<p>{{ APIRef("DOM") }}</p>

<h3 id="Introducci.C3.B3n" name="Introducci.C3.B3n">Introducción</h3>

<p>El objeto <code>Range</code> representa un fragmento de un documento que puede contener nodos y partes de nodos de texto en un documento dado.</p>

<p>Un rango puede ser creado usando el método <code><a href="es/DOM/document.createRange">createRange</a></code> del objeto <code><a href="es/DOM/document">document</a></code>. Los objetos rango pueden ser recuperados usando el método <code><a href="es/DOM/Selection/getRangeAt">getRangeAt</a></code> del objeto <code><a href="es/DOM/selection">Selection</a></code>.</p>

<h3 id="Propiedades" name="Propiedades">Propiedades</h3>

<dl>
 <dt><a href="es/DOM/range.collapsed">collapsed</a></dt>
 <dd>Devuelve un valor booleano indicando si los puntos de inicio y fin están en la misma posición.</dd>
 <dt><a href="es/DOM/range.commonAncestorContainer">commonAncestorContainer</a></dt>
 <dd>Devuelve el nodo más profundo que contiene los nodos <strong>startContainer</strong> y <strong>endContainer</strong>.</dd>
 <dt><a href="es/DOM/range.endContainer">endContainer</a></dt>
 <dd>Devuelve el nodo dentro del cual termina el rango.</dd>
 <dt><a href="es/DOM/range.endOffset">endOffset</a></dt>
 <dd>Devuelve un número representando donde termina el <code>Range</code> en el <code>endContainer</code>.</dd>
 <dt><a href="es/DOM/range.startContainer">startContainer</a></dt>
 <dd>Devuelve el nodo dentro del cual comienza el rango.</dd>
 <dt><a href="es/DOM/range.startOffset">startOffset</a></dt>
 <dd>Devuelve un número representando donde empieza el <code>Range</code> en el <code>endContainer</code>.</dd>
</dl>

<h3 id="M.C3.A9todos" name="M.C3.A9todos">Métodos</h3>

<h4 id="M.C3.A9todos_de_ubicaci.C3.B3n" name="M.C3.A9todos_de_ubicaci.C3.B3n">Métodos de ubicación</h4>

<p>Estos métodos definen el punto de inicio y fin de un rango.</p>

<dl>
 <dt><a href="es/DOM/range.setStart">setStart</a></dt>
 <dd>Define la posición inicial de un rango.</dd>
 <dt><a href="es/DOM/range.setEnd">setEnd</a></dt>
 <dd>Define la posición final de un rango.</dd>
 <dt><a href="es/DOM/range.setStartBefore">setStartBefore</a></dt>
 <dd>Define la posición inicial de un rango relativa a otro nodo.</dd>
 <dt><a href="es/DOM/range.setStartAfter">setStartAfter</a></dt>
 <dd>Define la posición inicial de un rango relativa a otro nodo.</dd>
 <dt><a href="es/DOM/range.setEndBefore">setEndBefore</a></dt>
 <dd>Define la posición final de un rango relativa a otro nodo.</dd>
 <dt><a href="es/DOM/range.setEndAfter">setEndAfter</a></dt>
 <dd>Define la posición final de un rango relativa a otro nodo.</dd>
 <dt><a href="es/DOM/range.selectNode">selectNode</a></dt>
 <dd>Define el rango a contener el nodo y sus contenidos.</dd>
 <dt><a href="es/DOM/range.selectNodeContents">selectNodeContents</a></dt>
 <dd>Define el rango a contener los contenidos de un nodo.</dd>
 <dt><a href="es/DOM/range.collapse">collapse</a></dt>
 <dd>Pliega el Rango a uno de sus puntos límite.</dd>
</dl>

<h4 id="Editando_m.C3.A9todos" name="Editando_m.C3.A9todos">Editando métodos</h4>

<p>Estos métodos recuperan nodos de un rango y modifican los contenidos de un rango.</p>

<dl>
 <dt><a href="es/DOM/range.cloneContents">cloneContents</a></dt>
 <dd>Devuelve un fragmento de documento copiando los nodos de un rango.</dd>
 <dt><a href="es/DOM/range.deleteContents">deleteContents</a></dt>
 <dd>Elimina del documento los contenidos de un rango.</dd>
 <dt><a href="es/DOM/range.extractContents">extractContents</a></dt>
 <dd>Mueve los contenidos de un rango del árbol de documento a un fragmento del documento.</dd>
 <dt><a href="es/DOM/range.insertNode">insertNode</a></dt>
 <dd>Inserta un nodo al comienzo de un rango.</dd>
 <dt><a href="es/DOM/range.surroundContents">surroundContents</a></dt>
 <dd>Mueve el contenido de un rango a un nodo nuevo.</dd>
</dl>

<h4 id="Otros_m.C3.A9todos" name="Otros_m.C3.A9todos">Otros métodos</h4>

<dl>
 <dt><a href="es/DOM/range.compareBoundaryPoints">compareBoundaryPoints</a></dt>
 <dd>Compara los puntos límite de dos rangos.</dd>
 <dt><a href="es/DOM/range.cloneRange">cloneRange</a></dt>
 <dd>Devuelve un objeto rango con puntos límites idénticos al rango clonado.</dd>
 <dt><a href="es/DOM/range.detach">detach</a></dt>
 <dd>Libera el Rango desde el uso para mejorar el rendimiento.</dd>
 <dt><a href="es/DOM/range.toString">toString</a></dt>
 <dd>Devuelve el texto del rango.</dd>
</dl>

<h4 id="M.C3.A9todos_de_Gecko" name="M.C3.A9todos_de_Gecko">Métodos de Gecko</h4>

<p>Esta sección describe métodos de <code>Range</code> que son particulares a Mozilla y no son parte de las especificaciones DOM W3C.</p>

<dl>
 <dt><a href="es/DOM/range.compareNode">compareNode</a> {{obsolete_inline}}</dt>
 <dd>Devuelve una constante representando si el nodo está antes, después, dentro o alrededor del rango.</dd>
 <dt><a href="es/DOM/range.comparePoint">comparePoint</a></dt>
 <dd>Devuelve -1, 0, or 1 indicando si el punto ocurre antes, dentro o después del rango.</dd>
 <dt><a href="es/DOM/range.createContextualFragment">createContextualFragment</a></dt>
 <dd>Devuelve un fragmenteo de documento creado de un texto de código.</dd>
 <dt><a href="es/DOM/range.intersectsNode">intersectsNode</a> {{obsolete_inline}}</dt>
 <dd>Devuelve un valor boleano verdadero si el nodo dado intersecta el rango.</dd>
 <dt><a href="es/DOM/range.isPointInRange">isPointInRange</a></dt>
 <dd>Devuelve un valor boleano verdadero indicando si el punto dado está en el rango.</dd>
</dl>

<p>{{ languages( { "en": "en/DOM/range", "fr": "fr/DOM/range", "ja": "ja/DOM/range", "pl": "pl/DOM/range" } ) }}</p>
