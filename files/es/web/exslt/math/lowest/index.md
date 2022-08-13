---
title: lowest
slug: Web/EXSLT/math/lowest
tags:
  - EXSLT
  - Todas_las_Categorías
  - XSLT
translation_of: Web/EXSLT/math/lowest
---
<p>{{XsltRef}}<br>
 <code>math:lowest()</code> devuelve el nodo del conjunto de nodos (node-set) especificado con el valor más bajo (donde el valor más bajo se calcula usando <code><a href="es/EXSLT/math/min">math:min()</a></code>).</p>

<p>Un nodo tiene este valor mínimo si convirtiendo su valor de cadena a número iguala el valor mínimo.</p>

<h2 id="Sintaxis" name="Sintaxis">Sintaxis</h2>

<pre class="eval">math:lowest(<em>conjuntoNodos</em>)
</pre>

<h3 id="Argumentos" name="Argumentos">Argumentos</h3>

<dl>
 <dt><code><em>conjuntoNodos</em></code></dt>
 <dd>El conjunto de nodos cuyo valor más bajo va a ser devuelto.</dd>
</dl>

<h3 id="Devuelve" name="Devuelve">Devuelve</h3>

<p>Un fragmento de árbol resultante que consiste en la copia de los nodos devueltos por <code><a href="es/EXSLT/math/min">math:min()</a></code>.</p>

<h2 id="Definido_en" name="Definido_en">Definido en</h2>

<p><a class="external" href="http://www.exslt.org/math/functions/lowest/index.html">EXSLT - MATH:LOWEST</a></p>

<h2 id="Implementaci.C3.B3n_en_Gecko" name="Implementaci.C3.B3n_en_Gecko">Implementación en Gecko</h2>

<p>Implementado en Gecko 1.9 y posteriores.</p>
