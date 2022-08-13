---
title: Contexto de formato de bloque
slug: Web/Guide/CSS/Block_formatting_context
tags:
  - CSS
  - Guía
  - Necesita ejemplos
  - Referencia
  - Web
translation_of: Web/Guide/CSS/Block_formatting_context
---
<p>{{ CSSRef() }}</p>

<h2 id="Summary" name="Summary">Resumen</h2>

<p>Un <strong>contexto de formato de bloque</strong> es parte del renderizado CSS visual de una página web. Es la región en que ocurre la disposición de las cajas de bloque y en la cuál los elementos flotantes interactúan los unos con los otros.</p>

<p>Un contexto de formato de bloque es creado por uno de los siguientes casos:</p>

<ul>
 <li>El elemento raiz o algo que lo contiene</li>
 <li>flotantes (elementos donde {{ cssxref("float") }} es diferente de none)</li>
 <li>elementos con posición absoluta (elementos donde {{ cssxref("position") }} es absolute o fixed)</li>
 <li>bloques en línea (elementos con {{ cssxref("display") }}<code>: inline-block</code>)</li>
 <li>Celdas de tabla (elementos con {{ cssxref("display") }}<code>: table-cell</code>, que es la propiedad por defecto de las celdas de una tabla HTML)</li>
 <li>subtítulos de tabla (elementos con {{ cssxref("display") }}<code>: table-caption</code>, que es la propiedad por defecto de los subtítulos de tablas HTML)</li>
 <li>elementos donde {{ cssxref("overflow") }} tiene un valor distinto a <code>visible</code></li>
 <li>cajas flexibles (elementos con {{ cssxref("display") }}<code>: flex</code> or <code>inline-flex</code>)</li>
</ul>

<p>Un contexto de formato de bloque contiene todo dentro del elemento que lo crea que, al mismo tiempo, no se encuentra dentro de un elemento descendiente que crea un nuevo contexto de formato de bloque.</p>

<p>Los contextos de formato de bloque son importantes para el posicionamiento (revisa {{ cssxref("float") }} y {{ cssxref("clear") }}) de flotantes. Las reglas para el posicionamiento y limpiado de flotantes aplican solo a elementos dentro del mismo contexto de formato de bloque. Los flotantes no afectan la disposición de los elementos en otros contexto de formato de bloque, y clear solo limpia flotantes pasados en el mismo contexto de formato de bloque.</p>

<h2 id="Specifications" name="Specifications">Especificaciones</h2>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/CSS21/visuren.html#block-formatting">CSS 2.1</a></li>
</ul>

<h2 id="See_Also" name="See_Also">También puedes ver</h2>

<ul>
 <li>{{ cssxref("float") }}, {{ cssxref("clear") }}</li>
</ul>
