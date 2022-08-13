---
title: apply-templates
slug: Web/XSLT/Element/apply-templates
tags:
  - Todas_las_Categorías
  - XSLT
translation_of: Web/XSLT/Element/apply-templates
original_slug: Web/XSLT/apply-templates
---
<p>{{XsltRef}}</p>

<p>El elemento <code>&lt;xsl:apply-templates&gt;</code> selecciona un conjunto de nodos del documento de entrada e instruye al procesador para aplicar las plantillas apropiadas a ellos.</p>

<h3 id="Sintaxis" name="Sintaxis">Sintaxis</h3>

<pre>&lt;xsl:apply-templates select=EXPRESION mode=NOMBRE&gt;
	&lt;xsl:with-param&gt; [opcional]
	&lt;xsl:sort&gt; [opcional]
&lt;/xsl:apply-templates&gt;</pre>

<h3 id="Atributos_requeridos" name="Atributos_requeridos">Atributos requeridos</h3>

<p>Ninguno.</p>

<h3 id="Atributos_opcionales" name="Atributos_opcionales">Atributos opcionales</h3>

<dl>
 <dt><code>select</code></dt>
 <dd>Usa una expresión XPath para indicar los nodos a ser procesados. Un asterisco(<code>*</code>) selecciona por completo el conjunto de nodos. Si el atributo no se establece, todos los nodos hijos del nodo actual son seleccionados.</dd>
 <dt><code>mode</code></dt>
 <dd>Si existend diferentes maneras definidas de procesar el mismo nodo, se distingue entre ellas.</dd>
</dl>

<h3 id="Tipo" name="Tipo">Tipo</h3>

<p>Instrucción, aparece dentro de una plantilla.</p>

<h3 id="Definido" name="Definido">Definido</h3>

<p>XSLT sección 5.4.</p>

<h3 id="Soporte_en_Gecko" name="Soporte_en_Gecko">Soporte en Gecko</h3>

<p>Soportado.</p>
