---
title: leading
slug: Web/EXSLT/set/leading
tags:
  - EXSLT
  - Todas_las_Categorías
  - XSLT
translation_of: Web/EXSLT/set/leading
---
<p>{{XsltRef}}</p>

<p><br>
 <code>set:leading()</code> devuelve los nodos de un conjunto de nodos que viene antes del primer nodo del otro conjunto de nodos.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval">set:leading(<em>conjuntoNodos1</em>,<em>conjuntoNodos2</em>)
</pre>

<h3 id="Arguments" name="Arguments">Arguments</h3>

<dl>
 <dt><code><em>conjuntoNodos1</em> </code></dt>
 <dd>El conjunto de nodos en el que hallar los nodos que preceden al primer nodo del segundo conjunto de nodos.</dd>
 <dt><code><em>conjuntoNodos2</em> </code></dt>
 <dd>El conjunto de nodos contra el que se compara.</dd>
</dl>

<h3 id="Devuelve" name="Devuelve">Devuelve</h3>

<p>Un conjunto de nodos que contiene los nodos del <code><em>conjuntoNodos1</em> </code> cuyos valores preceden al primer nodo del <code><em>conjuntoNodos2</em> </code>.</p>

<p>{{NoteStart}}Si el primer nodo del <code><em>conjuntoNodos2</em> </code> no está contenido en <code><em>conjuntoNodos1</em> </code>, de devuelve un conjunto de nodos vacío. Si <code><em>conjuntoNodos2</em> </code> está vacío, entonces el resultado es <code><em>conjuntoNodos1</em> </code>.{{NoteEnd}}</p>

<h3 id="Definido_en" name="Definido_en">Definido en</h3>

<p><a class="external" href="http://www.exslt.org/set/functions/leading/index.html">EXSLT - SET:LEADING</a></p>

<h3 id="Implementaci.C3.B3n_de_Gecko" name="Implementaci.C3.B3n_de_Gecko">Implementación de Gecko</h3>

<p>Implementado en Gecko 1.9 y posteriores.</p>
