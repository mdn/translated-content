---
title: match
slug: Web/EXSLT/regexp/match
tags:
  - EXSLT
  - Todas_las_Categorías
  - XSLT
translation_of: Web/EXSLT/regexp/match
---
<p>{{XsltRef}}</p>

<p><br>
 <code>regexp:match()</code> realiza la búsqueda de coincidencias de una expresión regular en una cadena, devolviendo las subcoincidencias halladas como resultado.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval">regexp:match(<em>objetivo</em>,<em>expresionRegular</em>[[,<em>opciones</em>]])
</pre>

<h3 id="Argumentos" name="Argumentos">Argumentos</h3>

<dl>
 <dt><code><em>objetivo</em></code></dt>
 <dd>Cadena sobre la que se realiza la búsqueda de coincidencias con la expresión regular.</dd>
 <dt><code><em>expresionRegular</em></code></dt>
 <dd>Expresión regular a evaluar en estilo JavaScript.</dd>
 <dt><code><em>opciones</em></code></dt>
 <dd>Cadena opcional que contiene los caracteres con opciones.</dd>
</dl>

<p>Los caracteres con opciones son:</p>

<dl>
 <dt><code>g</code> - Coincidencia global</dt>
 <dd>Se devuelven las subcoincidencias de cada coincidencia en la cadena. Si esta opción no se especifica, sólo se devolverán las subcoincidencias del primer emparejamiento.</dd>
 <dt><code>i</code> - Coincidencia sin importar las mayúsculas</dt>
 <dd>Si se especifica esta opción, el emparejamiento se realiza de modo que no se tenga encuenta las mayúsculas.</dd>
</dl>

<h3 id="Devuelve" name="Devuelve">Devuelve</h3>

<p>Un conjunto de nodos de elementos <code>match</code>, cada uno de los cuales tiene un valor de tipo cadena igual a la porción del primer parámetro de la cadena capturado por la expresión regular. Si la coincidencia no es de tipo global, el primer elemento match tiene el valor de la porción de cadena que coincide con la expresión regular completa.</p>

<p>Por ejemplo:</p>

<pre class="eval">&lt;xsl:for-each select="regExp:match('<span class="nowiki">http://developer.mozilla.org/en/docs/Firefox_3_for_developers</span>',
                                   '(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)')"&gt;
   Parte &lt;xsl:value-of select="position()" /&gt; = &lt;xsl:value-of select="." /&gt;
&lt;/xsl:for-each&gt;
</pre>

<p>Este código genera el siguiente resultado:</p>

<pre class="eval">Parte 1 = <span class="nowiki">http://developer.mozilla.org/en/docs/Firefox_3_for_developers</span>
Parte 2 = http
Parte 3 = developer.mozilla.org
Parte 4 =
Parte 5 = /en/docs/Firefox_3_for_developers
</pre>

<h3 id="Definido_en" name="Definido_en">Definido en</h3>

<p><a class="external" href="http://www.exslt.org/regexp/functions/match/index.html">EXSLT - REGEXP:MATCH</a></p>

<h3 id="Implementaci.C3.B3n_de_Gecko" name="Implementaci.C3.B3n_de_Gecko">Implementación de Gecko</h3>

<p>Implementado en Gecko 1.9 y posteriores.</p>
