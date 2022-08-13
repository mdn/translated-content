---
title: attribute
slug: Web/XSLT/Element/attribute
tags:
  - Todas_las_Categorías
  - XSLT
translation_of: Web/XSLT/Element/attribute
original_slug: Web/XSLT/attribute
---
<p>{{XsltRef}}</p>

<p>El elemento <code>&lt;xsl:attribute&gt;</code> genera un atributo en el documento de salida, usando cualquier valor que puede ser accedido desde la hoja de estilo. Este elemento tiene que ser la primer cosa que se encuentre dentro del elemento del documento de salida para el cual se desea generar el atributo.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre>&lt;xsl:attribute name=NOMBRE namespace=URI&gt;
	PLANTILLA
&lt;/xsl:attribute&gt;</pre>

<h3 id="Atributos_requeridos" name="Atributos_requeridos">Atributos requeridos</h3>

<dl>
 <dt><code>name</code></dt>
 <dd>Indica el nombre del atributo a ser generado en el documento de salida. El nombre debe seguir las reglas de QName.</dd>
</dl>

<h3 id="Atributos_opcionales" name="Atributos_opcionales">Atributos opcionales</h3>

<dl>
 <dt><code>namespace</code></dt>
 <dd>Define el URI del nombre de espacio para el atributo en el documento de salida. No se puede especificar el prefijo del nombre de espacio con este elemento.</dd>
</dl>

<h3 id="Tipo" name="Tipo">Tipo</h3>

<p>Instrucción, aparece dentro de una plantilla o dentro del elemento <code>&lt;xsl:attribute-set&gt;</code>.</p>

<h3 id="Definido" name="Definido">Definido</h3>

<p>XSLT, sección 7.1.3.</p>

<h3 id="Soporte_en_Gecko" name="Soporte_en_Gecko">Soporte en Gecko</h3>

<p>Soportado.</p>
