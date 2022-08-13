---
title: object-type
slug: Web/EXSLT/exsl/object-type
tags:
  - EXSLT
  - Todas_las_Categorías
  - XSLT
translation_of: Web/EXSLT/exsl/object-type
---
<p>{{ XsltRef() }}</p>

<p><br>
 <code>exsl:object-type()</code> devuelve una cadena que indica el tipo del objeto especificado.</p>

<div class="note">
<p><strong>Nota:</strong> La mayoría de tipos de objetos <a href='\"es/XSLT\"'>XSLT</a> pueden ser convertidos en otros con seguridad; sin embargo, ciertas conversiones pueden aumentar las condiciones de error. En particular, el tratamiento de algo que no sea un conjunto de nodos (node-set) como un conjunto de nodos lo haría así. Esta función permite que los autores de plantillas con nombre y funciones de extensión proporcionen fácilmente flexibilidad en los valores de los parámetros.</p>
</div>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre class="eval">exsl:object-type(<em>objeto</em>)
</pre>

<h3 id="Argumentos" name="Argumentos">Argumentos</h3>

<dl>
 <dt><code><em>objeto</em></code></dt>
 <dd>El objeto cuyo tipo va a ser devuelto.</dd>
</dl>

<h3 id="Devuelve" name="Devuelve">Devuelve</h3>

<p>El tipo del objeto, que será uno de los siguientes:</p>

<ul>
 <li><code>string</code></li>
 <li><code>number</code></li>
 <li><code>boolean</code></li>
 <li><code>node-set</code></li>
 <li><code>RTF</code></li>
 <li><code>external</code></li>
</ul>

<h3 id="Definido_en" name="Definido_en">Definido en</h3>

<p><a class="external" href="http://www.exslt.org/exsl/functions/object-type/index.html">EXSLT - EXSL:OBJECT-TYPE</a></p>

<h3 id="Implementaci.C3.B3n_de_Gecko" name="Implementaci.C3.B3n_de_Gecko">Implementación de Gecko</h3>

<p>Implementado en Gecko 1.9 y posteriores.</p>
