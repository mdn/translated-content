---
title: difference
slug: Web/EXSLT/set/difference
tags:
  - EXSLT
  - Todas_las_Categorías
  - XSLT
translation_of: Web/EXSLT/set/difference
---
<p>{{XsltRef}}</p>

<p><br>
 <code>set:difference()</code> devuelve la diferencia entre dos conjuntos de nodos. En otras palabras, devuelve un cojunto de nodos cuyos nodos están en uno de los conjuntos pero no en el otro.</p>

<p>La versión de plantilla de <code>set:difference</code> aplica plantillas a estos nodos en el modo de <code>set:difference</code>, copiando los nodos de modo que se devuelva el fragmento de árbol resultante consistente en los nodos.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval">set:difference(<em>conjuntoNodos1</em>,<em>conjuntoNodos2</em>)
</pre>

<h3 id="Argumentos" name="Argumentos">Argumentos</h3>

<dl>
 <dt><code><em>conjuntoNodos1</em></code></dt>
 <dd>El conjunto de nodos desde el cual se sustraen los nodos.</dd>
 <dt><code><em>conjuntoNodos2</em></code></dt>
 <dd>El conjunto de nodos a sustraer de<em>conjuntoNodos1</em>.</dd>
</dl>

<h3 id="Devuelve" name="Devuelve">Devuelve</h3>

<p>Un conjunto de nodos que contiene los nodos que están en<em>conjuntoNodos1</em> pero no en<em>conjuntoNodos2</em>.</p>

<h3 id="Definido_en" name="Definido_en">Definido en</h3>

<p><a class="external" href="http://www.exslt.org/set/functions/difference/index.html">EXSLT - SET:DIFFERENCE</a></p>

<h3 id="Implementaci.C3.B3n_en_Gecko" name="Implementaci.C3.B3n_en_Gecko">Implementación en Gecko</h3>

<p>Implementado en Gecko 1.9 y posteriores.</p>
