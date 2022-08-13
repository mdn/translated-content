---
title: max
slug: Web/EXSLT/math/max
tags:
  - EXSLT
  - Todas_las_Categorías
  - XSLT
translation_of: Web/EXSLT/math/max
---
<p>{{XsltRef}}<br>
 <code>math:max()</code> devuelve el valor máximo de un conjunto de nodos (node-set).</p>

<p>To compute the maximum value of the node-set, the node set is sorted into descending order as it would be using <code><a href="es/XSLT/sort">xsl:sort()</a></code> with a data type of <code>number</code>. The maximum value is then the first node in the sorted list, converted into a number.</p>

<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>

<pre class="eval">math:max(<em>conjuntoNodos</em>)
</pre>

<h3 id="Argumentos" name="Argumentos">Argumentos</h3>

<dl>
 <dt><code><em>conjuntoNodos</em></code></dt>
 <dd>El conjunto de nodos cuyo valor más alto va a ser devuelto.</dd>
</dl>

<h3 id="Devuelve" name="Devuelve">Devuelve</h3>

<p>Un fragmento de árbol resultante que representa como una cadena el valor numérico del nodo valorado como más alto.</p>

<h2 id="Definido_en" name="Definido_en">Definido en</h2>

<p><a class="external" href="http://www.exslt.org/math/functions/max/index.html">EXSLT - MATH:MAX</a></p>

<h2 id="Implementaci.C3.B3n_en_Gecko" name="Implementaci.C3.B3n_en_Gecko">Implementación en Gecko</h2>

<p>Implementado en Gecko 1.9 y posteriores.</p>
