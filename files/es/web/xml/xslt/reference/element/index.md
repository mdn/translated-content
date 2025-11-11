---
title: Elementos
slug: Web/XML/XSLT/Reference/Element
original_slug: Web/XSLT/Reference/Element
---

{{XsltSidebar}}

{{XsltRef}} En este documento se discutiran dos tipos de elementos: elementos raíz e instrucciones. Un elemento raíz debe aparecer como un hijo ya sea de `<xsl:stylesheet>` o `<xsl:transform>`. Por otro lado, una instrucción está asociada con una plantilla. Una hoja de estilo puede incluir varias plantillas. Un tercer tipo de elemento, no discutido aquí, es el elemento de resultado literal (LRE por sus siglas en inglés). Un LRE también aparece dentro de una plantilla, y consiste de cualquier elemento que no sea instrucción y que debe ser copiado tal cual al documento resultante, por ejemplo el elemento `<hr>` cuando se usa en una hoja de estilo para general HTML.

Como nota adicional, cualquier atributo en un LRE y algunos atributos de un conjunto específico de elemento XSLT también pueden incluir lo que se conoce como plantilla de valor de atributo. Que en pocas palabras significa que es una cadena de texto que especifíca una expresión XPath la cual indica el valor del atributo. En tiempo de ejecución la expresión es evaluada y el resultado es sustituido por la expresión XPath. Por ejemplo, asumamos que la variable "`image-dir`" es definida de la siguiente manera:

```XML
<xsl:variable name="image-dir">/images</xsl:variable>
```

La expresión a ser evaluada se escribe dentro de los símbolos de llaves:

```XML
<img src="{$image-dir}/mygraphic.jpg"/>
```

Esto generaría lo siguiente:

```HTML
<img src="/images/mygraphic.jpg"/>
```

El listado de elementos que sigue a continuación incluye una descripción, la sintaxis, la lista de atributos requeridos y opcionales, una descripción del tipo y la posición, su lugar de definición en la recomendación del W3C y una explicación del nivel de soporte en Gecko.

- [xsl:apply-imports](/es/XSLT/apply-imports)
- [xsl:apply-templates](/es/XSLT/apply-templates)
- [xsl:attribute](/es/XSLT/attribute)
- [xsl:attribute-set](/es/XSLT/attribute-set)
- [xsl:call-template](/es/XSLT/call-template)
- [xsl:choose](/es/XSLT/choose)
- [xsl:comment](/es/XSLT/comment)
- [xsl:copy](/es/XSLT/copy)
- [xsl:copy-of](/es/XSLT/copy-of)
- [xsl:decimal-format](/es/XSLT/decimal-format)
- [xsl:element](/es/XSLT/element)
- [xsl:fallback](/es/XSLT/fallback) _(sin soporte)_
- [xsl:for-each](/es/XSLT/for-each)
- [xsl:if](/es/XSLT/if)
- [xsl:import](/es/XSLT/import) _(casi completamente soportado)_
- [xsl:include](/es/XSLT/include)
- [xsl:key](/es/XSLT/key)
- [xsl:message](/es/XSLT/message)
- [xsl:namespace-alias](/es/XSLT/namespace-alias) _(sin soporte)_
- [xsl:number](/es/XSLT/number) _(parcialmente soportado)_
- [xsl:otherwise](/es/XSLT/otherwise)
- [xsl:output](/es/XSLT/output) _(parcialmente soportado)_
- [xsl:param](/es/XSLT/param)
- [xsl:preserve-space](/es/XSLT/preserve-space)
- [xsl:processing-instruction](/es/XSLT/processing-instruction)
- [xsl:sort](/es/XSLT/sort)
- [xsl:strip-space](/es/XSLT/strip-space)
- [xsl:stylesheet](/es/XSLT/stylesheet) _(parcialmente soportado)_
- [xsl:template](/es/XSLT/template)
- [xsl:text](/es/XSLT/text) _(parcialmente soportado)_
- [xsl:transform](/es/XSLT/transform)
- [xsl:value-of](/es/XSLT/value-of) _(parcialmente soportado)_
- [xsl:variable](/es/XSLT/variable)
- [xsl:when](/es/XSLT/when)
- [xsl:with-param](/es/XSLT/with-param)

categorías

interwikis
