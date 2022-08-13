---
title: getRangeAt
slug: Web/API/Selection/getRangeAt
tags:
  - páginas_a_traducir
translation_of: Web/API/Selection/getRangeAt
---
<p>{{ ApiRef("DOM") }}</p>

<h3 id="Resumen" name="Resumen">Resumen</h3>

<p>Devuelve un objeto de rango representando uno de los rangos seleccionados.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval"><i>range</i> =
<i>sel</i>.getRangeAt(
<i>index</i>)
</pre>

<h3 id="Par.C3.A1metros" name="Par.C3.A1metros">Parámetros</h3>

<dl>
 <dt>
 <i><code>range</code></i>
 </dt>
 <dd>El objeto <a href="es/DOM/range">range</a> (rango) que será devuelto.</dd>
</dl>

<dl>
 <dt>
 <i><code>index</code></i>
 </dt>
 <dd>El exponente (basado en cero) del rango a devolver. Un número negativo o un número mayor o igual a <a href="es/DOM/Selection/rangeCount">rangeCount</a> provocará un error.</dd>
</dl>

<h3 id="Ejemplos" name="Ejemplos">Ejemplos</h3>

<pre class="eval">ranges = [];
sel = window.getSelection();
for(var i = 0; i &lt; sel.rangeCount; i++) {
 ranges[i] = sel.getRangeAt(i);
}
/* Cada artículo en el array de rangos ahora es
 * un objeto rango representando uno de los
 * rangos en la selección */
</pre>

<p>{{ languages( { "en": "en/DOM/Selection/getRangeAt", "pl": "pl/DOM/Selection/getRangeAt" } ) }}</p>
