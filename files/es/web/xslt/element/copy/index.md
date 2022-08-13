---
title: copy
slug: Web/XSLT/Element/copy
tags:
  - Todas_las_Categorías
  - XSLT
translation_of: Web/XSLT/Element/copy
original_slug: Web/XSLT/copy
---
<p>{{XsltRef}}</p>

<p>El elemento <code>&lt;xsl:copy&gt;</code> genera una copia superficial (el nodo y cualquier nodo del nombre de espacio asociado) del nodo actual al documento de salida. Este elemento no copia ni elementos hijo ni atributos del nodo actual.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre>&lt;xsl:copy use-attribute-sets=LISTA-DE-NOMBRES&gt;
	PLANTILLA
&lt;/xsl:copy&gt;</pre>

<h3 id="Atributos_requeridos" name="Atributos_requeridos">Atributos requeridos</h3>

<p>Ninguno.</p>

<h3 id="Atributos_opcionales" name="Atributos_opcionales">Atributos opcionales</h3>

<dl>
 <dt><code>use-attribute-sets</code></dt>
 <dd>Lista conjunto de atributos que debería de ser aplicados al nodo de salida, si es un elemento. Los nombres del conjunto deben de estar separados por un espacio en blanco.</dd>
</dl>

<h3 id="Tipo" name="Tipo">Tipo</h3>

<p>Instrucción, aparece dentro de una plantilla.</p>

<h3 id="Definido" name="Definido">Definido</h3>

<p>XSLT, sección 7.5.</p>

<h3 id="Soporte_en_Gecko" name="Soporte_en_Gecko">Soporte en Gecko</h3>

<p>Suportado.</p>
