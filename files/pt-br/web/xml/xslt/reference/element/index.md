---
title: Referência de elementos XSLT
short-title: Elementos
slug: Web/XML/XSLT/Reference/Element
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Existem dois tipos de elementos discutidos aqui: elementos de nível superior e instruções. Um elemento de nível superior deve aparecer como filho de `<xsl:stylesheet>` ou `<xsl:transform>`. Uma instrução, por outro lado, está associada a um template. Uma folha de estilos pode incluir vários templates. Um terceiro tipo de elemento, não discutido aqui, é o elemento de resultado literal (LRE). Um LRE também aparece em um template. Consiste em qualquer elemento que não seja instrução e que deva ser copiado como está para o documento de resultado, por exemplo, um elemento `<hr>` em uma folha de estilos de conversão HTML.

Em uma nota relacionada, qualquer atributo em um LRE e alguns atributos de um número limitado de elementos XSLT também podem incluir o que é conhecido como um template de valor de atributo. Um template de valor de atributo é uma string que inclui uma expressão XPath incorporada que é usada para especificar o valor de um atributo. Em tempo de execução, a expressão é avaliada e o resultado da avaliação é substituído pela expressão XPath. Por exemplo, suponha que uma variável `image-dir` seja definida da seguinte forma:

```xml
<xsl:variable name="image-dir">/images</xsl:variable>
```

A expressão a ser avaliada é colocada dentro de chaves:

```xml
<img src="{$image-dir}/mygraphic.jpg"/>
```

Isso resultaria no seguinte:

```xml
<img src="/images/mygraphic.jpg"/>
```

As anotações de elementos que se seguem incluem uma descrição, uma listagem de sintaxe, uma lista de atributos obrigatórios e opcionais, uma descrição do tipo e posição, sua fonte na Recomendação W3C e uma explicação do grau de suporte atual do Gecko.

- [`<xsl:apply-imports>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/apply-imports)
- [`<xsl:apply-templates>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/apply-templates)
- [`<xsl:attribute>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/attribute)
- [`<xsl:attribute-set>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/attribute-set)
- [`<xsl:call-template>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/call-template)
- [`<xsl:choose>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/choose)
- [`<xsl:comment>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/comment)
- [`<xsl:copy>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/copy)
- [`<xsl:copy-of>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/copy-of)
- [`<xsl:decimal-format>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/decimal-format)
- [`<xsl:element>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/element)
- [`<xsl:fallback>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/fallback) _(não suportado)_
- [`<xsl:for-each>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/for-each)
- [`<xsl:if>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/if)
- [`<xsl:import>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/import) _(majoritariamente suportado)_
- [`<xsl:include>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/include)
- [`<xsl:key>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/key)
- [`<xsl:message>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/message)
- [`<xsl:namespace-alias>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/namespace-alias) _(não suportado)_
- [`<xsl:number>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/number) _(parcialmente suportado)_
- [`<xsl:otherwise>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/otherwise)
- [`<xsl:output>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/output) _(parcialmente suportado)_
- [`<xsl:param>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/param)
- [`<xsl:preserve-space>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/preserve-space)
- [`<xsl:processing-instruction>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/processing-instruction)
- [`<xsl:sort>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/sort)
- [`<xsl:strip-space>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/strip-space)
- [`<xsl:stylesheet>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/stylesheet) _(parcialmente suportado)_
- [`<xsl:template>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/template)
- [`<xsl:text>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/text) _(parcialmente suportado)_
- [`<xsl:transform>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/transform)
- [`<xsl:value-of>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/value-of) _(parcialmente suportado)_
- [`<xsl:variable>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/variable)
- [`<xsl:when>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/when)
- [`<xsl:with-param>`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/with-param)
