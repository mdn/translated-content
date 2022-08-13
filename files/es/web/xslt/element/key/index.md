---
title: key
slug: Web/XSLT/Element/key
tags:
  - Todas_las_Categorías
  - XSLT
translation_of: Web/XSLT/Element/key
original_slug: Web/XSLT/key
---
<p>{{XsltRef}}</p>

<p><br>
 El elemento <code>&lt;xsl:key&gt;</code> declara una llave con nombre la cual puede ser usada en otro lugar dentro de la hoja de estilo usando la función <code>key( )</code>.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre>&lt;xsl:key name=NOMBRE match=EXPRESIÓN
	use=EXPRESIÓN /&gt; </pre>

<h3 id="Atributos_requeridos" name="Atributos_requeridos">Atributos requeridos</h3>

<dl>
 <dt><code>name</code></dt>
 <dd>Indica el nombre para esta llave. Debe seguir las reglas de tipo QName.</dd>
 <dt><code>match</code></dt>
 <dd>Define el nodo para el que esta llave aplica.</dd>
 <dt><code>use</code></dt>
 <dd>Indica la expresión XPath que se usará para determinar el valor de la llave para cada uno de los nodos aplicables.</dd>
</dl>

<h3 id="Atributos_opcionales" name="Atributos_opcionales">Atributos opcionales</h3>

<p>Ninguno.</p>

<h3 id="Tipo" name="Tipo">Tipo</h3>

<p>Elemento raíz, debe ser hijo del elemento <code>&lt;xsl:stylesheet&gt;</code> o del elemento <code>&lt;xsl:transform&gt;</code>.</p>

<h3 id="Definido" name="Definido">Definido</h3>

<p>XSLT, sección 12.2.</p>

<h3 id="Soporte_en_Gecko" name="Soporte_en_Gecko">Soporte en Gecko</h3>

<p>Soportado.</p>
