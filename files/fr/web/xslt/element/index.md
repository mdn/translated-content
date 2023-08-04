---
title: Éléments
slug: Web/XSLT/Element
---

{{ XsltRef() }} Ce document traite de deux types d'éléments&nbsp;: les éléments de haut niveau, et les instructions. Un élément de haut niveau doit toujours apparaître en tant qu'enfant de `<xsl:stylesheet>` ou de `<xsl:transform>`. Une instruction, de son côté, est associée à un modèle. Une feuille de style peut comporter plusieurs modèles. Un troisième type d'élément, que nous n'aborderons pas ici, est le «&nbsp;Literal Result Element (LRE)&nbsp;». Un LRE appartient également à un modèle. Le terme regroupe tout ce qui n'est pas une instruction et qui doit être recopié tel-quel dans le document de sortie, par exemple, un élément `<hr>` dans feuille de style de conversion HTML.

A ce propos, tous les attributs d'un LRE et certains attributs d'un nombre limité d'éléments XSLT peuvent inclure ce que l'on appelle un modèle de valeur d'attribut. Un modèle de valeur d'attribut est simplement une chaîne qui intègre une expression XPath utilisée pour spécifier la valeur de l'attribut. Lors de l'exécution, l'expression est évaluée et le résultat de cette évaluation est substitué à l'expression XPath. Par exemple, considérons que variable «&nbsp;`image-dir`&nbsp;» est définie comme ci-dessous&nbsp;:

```xml
<xsl:variable name="image-dir">/images</xsl:variable>
```

L'expression a évaluer est placée entre accolades&nbsp;:

```html
<img src="{$image-dir}/mygraphic.jpg" />
```

Ce qui donnera&nbsp;:

```html
<img src="/images/mygraphic.jpg" />
```

Les définitions des éléments ci-dessous incluent une description, la syntaxe, une liste des attributs requis ou optionnels, une description du type et de la position, les sources dans la recommandation du W3C et le niveau de support actuel dans Gecko.

- [xsl:apply-imports](apply-imports)
- [xsl:apply-templates](apply-templates)
- [xsl:attribute](attribute)
- [xsl:attribute-set](attribute-set)
- [xsl:call-template](call-template)
- [xsl:choose](choose)
- [xsl:comment](comment)
- [xsl:copy](copy)
- [xsl:copy-of](copy-of)
- [xsl:decimal-format](decimal-format)
- [xsl:element](element)
- [xsl:fallback](fallback) _(non supporté)_
- [xsl:for-each](for-each)
- [xsl:if](if)
- [xsl:import](import) _(supporté)_
- [xsl:include](include)
- [xsl:key](key)
- [xsl:message](message)
- [xsl:namespace-alias](namespace-alias) _(non supporté)_
- [xsl:number](number) _(partiellement supporté)_
- [xsl:otherwise](otherwise)
- [xsl:output](output) _(partiellement supporté)_
- [xsl:param](param)
- [xsl:preserve-space](preserve-space)
- [xsl:processing-instruction](processing-instruction)
- [xsl:sort](sort)
- [xsl:strip-space](strip-space)
- [xsl:stylesheet](stylesheet) _(partiellement supporté)_
- [xsl:template](template)
- [xsl:text](text) _(partiellement supporté)_
- [xsl:transform](transform)
- [xsl:value-of](value-of) _(partiellement supporté)_
- [xsl:variable](variable)
- [xsl:when](when)
- [xsl:with-param](with-param)
