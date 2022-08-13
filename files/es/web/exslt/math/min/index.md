---
title: min
slug: Web/EXSLT/math/min
tags:
  - EXSLT
  - Todas_las_Categorías
  - XSLT
translation_of: Web/EXSLT/math/min
---
<p>{{XsltRef}}</p>

<p><br>
 <code>math:min()</code> devuelve el valor mínimo de un conjunto de nodos (node-set).</p>

<p>Para calcular el valor mínimo de un conjunto de nodos, el conjunto de nodos se ordena en orden ascendente como se haría usando <code><a href="es/XSLT/sort">xsl:sort()</a></code> con datos de tipo <code>number</code> (numéricos). Entonces el valor mínimo será el primer nodo de la lista ordenada, convertido en número.</p>

<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>

<pre class="eval">math:min(<em>conjuntoNodos</em>)
</pre>

<h3 id="Argumentos" name="Argumentos">Argumentos</h3>

<dl>
 <dt><code><em>conjuntoNodos</em></code></dt>
 <dd>El conjunto de nodos cuyo valor más bajo se va a devolver.</dd>
</dl>

<h3 id="Devuelve" name="Devuelve">Devuelve</h3>

<p>Un fragmento de árbol resultante que representa como una cadena el valor numérico del nodo valorado más bajo.</p>

<h2 id="Definido_en" name="Definido_en">Definido en</h2>

<p><a class="external" href="http://www.exslt.org/math/functions/min/index.html">EXSLT - MATH:MIN</a></p>

<h2 id="Implementaci.C3.B3n_en_Gecko" name="Implementaci.C3.B3n_en_Gecko">Implementación en Gecko</h2>

<p>Implementado en Gecko 1.9 y posteriores.</p>
