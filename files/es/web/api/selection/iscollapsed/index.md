---
title: isCollapsed
slug: Web/API/Selection/isCollapsed
tags:
  - páginas_a_traducir
translation_of: Web/API/Selection/isCollapsed
---
<p>{{ ApiRef("DOM") }}</p>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>Devuelve un valor boleano verdadero si los puntos de inicio y fin de la selección están en la misma posición.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval"><i>sel</i>.isCollapsed
</pre>

<h3 id="Notas" name="Notas">Notas</h3>

<p>Incluso hasta una selección colapsada/plegada puede tener un rangeCount mayor que 0. <code>sel.getRangeAt(0)</code> puede retornar un rango que también esté colapsado/plegado.</p>

<div class="noinclude"> </div>

<p>{{ languages( { "en": "en/DOM/Selection/isCollapsed", "it": "it/DOM/Selection/isCollapsed", "pl": "pl/DOM/Selection/isCollapsed" } ) }}</p>
