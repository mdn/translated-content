---
title: replace
slug: Web/EXSLT/regexp/replace
tags:
  - EXSLT
  - Todas_las_Categorías
  - XSLT
translation_of: Web/EXSLT/regexp/replace
---
<p>{{XsltRef}}</p>

<p><br>
 <code>regexp:replace()</code> reemplaza porciones de una cadena que coincide con la expresión regular dada por el contenido de otra cadena.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval">regexp:replace(<em>original</em>,<em>expresionRegular</em>,<em>reemplazo</em>[,<em>opciones</em>])
</pre>

<h3 id="Arguments" name="Arguments">Arguments</h3>

<dl>
 <dt><code><em>original</em></code></dt>
 <dd>Cadena sobre la que se realiza la operación de búsqueda y reemplazo.</dd>
 <dt><code><em>expresionRegular</em></code></dt>
 <dd>Expresión regular a evaluar en estilo JavaScript.</dd>
 <dt><code><em>reemplazo</em></code></dt>
 <dd>Cadena con la que las subcadenas coincidentes serán reemplazadas.</dd>
 <dt><code><em>opciones</em></code></dt>
 <dd>Una cadena opcional que contiene caracteres con las opciones.</dd>
</dl>

<p>Los caracteres de opciones son:</p>

<dl>
 <dt><code>g</code> - Reemplazo global</dt>
 <dd>Si se especifica esta opción, todas las ocurrencias de la expresión regular dentro de <code><em>original</em></code> serán reemplazadas. De otro modo sólo se reemplaza la primera ocurrencia.</dd>
 <dt><code>i</code> - Coincidencia sin importar mayúsculas</dt>
 <dd>Si se especifica esta opción, el emparejamiento se realiza de modo que no importen las mayúsculas.</dd>
</dl>

<h3 id="Devuelve" name="Devuelve">Devuelve</h3>

<p>La versión revisada de la cadena.</p>

<h3 id="Definido_en" name="Definido_en">Definido en</h3>

<p><a class="external" href="http://www.exslt.org/regexp/functions/replace/index.html">EXSLT - REGEXP:REPLACE</a></p>

<h3 id="Implementaci.C3.B3n_de_Gecko" name="Implementaci.C3.B3n_de_Gecko">Implementación de Gecko</h3>

<p>Implementado en Gecko 1.9 y posteriores.</p>
