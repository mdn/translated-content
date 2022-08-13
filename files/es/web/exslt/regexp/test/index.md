---
title: test
slug: Web/EXSLT/regexp/test
tags:
  - EXSLT
  - Todas_las_Categorías
  - XSLT
translation_of: Web/EXSLT/regexp/test
---
<p>{{XsltRef}}</p>

<p><br>
 <code>regexp:test()</code> comprueba si una cadena coincide con una expresión regular especificada.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval">regexp:test(<em>comprobacion</em>,<em>expresionRegular</em>[,<em>opciones</em>])
</pre>

<h3 id="Argumentos" name="Argumentos">Argumentos</h3>

<dl>
 <dt><code><em>comprobacion</em></code></dt>
 <dd>Cadena a comprobar.</dd>
 <dt><code><em>expresionRegular</em></code></dt>
 <dd>Expresión regular a evaluar en estilo JavaScript.</dd>
 <dt><code><em>opciones</em></code></dt>
 <dd>Cadena opcional que contiene los caracteres con opciones.</dd>
</dl>

<p>Los caracteres con opciones son:</p>

<dl>
 <dt><code>g</code> - Coincidencia global</dt>
 <dd>No tiene efecto para esta función; se permite para mantener la consistencia con otras funciones relacionadas con expresiones regulares.</dd>
 <dt><code>i</code> - Coincidencia sin importar mayúsculas</dt>
 <dd>Si se especifica esta opción el emparejamiento se realiza sin tener en cuenta las mayúsculas.</dd>
</dl>

<h3 id="Devuelve" name="Devuelve">Devuelve</h3>

<p><code>true</code> si la expresión regular especificada coincide on la cadena de comprobación.</p>

<h3 id="Definido_en" name="Definido_en">Definido en</h3>

<p><a class="external" href="http://www.exslt.org/regexp/functions/test/index.html">EXSLT - REGEXP:TEST</a></p>

<h3 id="Implementaci.C3.B3n_en_Gecko" name="Implementaci.C3.B3n_en_Gecko">Implementación en Gecko</h3>

<p>Implementado en Gecko 1.9 y posteriores.</p>
