---
title: EXSLT
slug: Web/XML/EXSLT
l10n:
  sourceCommit: 049e8715d907f47677e85637b5f8292d5376a9f1
---

EXSLT é um conjunto de extensões para [XSLT](/pt-BR/docs/Web/XML/XSLT)
organizadas em módulos que fornecem funções para realizar transformações em um
documento XML.
Para usar uma função EXSLT, você precisa declarar o namespace em que a função
está localizada e, em seguida, usar o prefixo apropriado ao chamar a função.

Para usar o pacote de expressões regulares, por exemplo:

```xml
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:regexp="http://exslt.org/regular-expressions">
  <xsl:template match="/">
    <!-- … -->
    <xsl:value-of select="regexp:replace(/root/@value, 'before', 'gi', 'AFTER')"/>
    <!-- … -->
  </xsl:template>
</xsl:stylesheet>
```

## Referência

A [referência da EXSLT](/pt-BR/docs/Web/XML/EXSLT/Reference) descreve namespaces
e funções para operações comuns, matemática, expressões regulares, manipulação
de conjuntos e manipulação de strings.

### Common

O pacote EXSLT Common fornece funções básicas que expandem os recursos da XSLT.
O namespace do pacote Common é `http://exslt.org/common`.

- [`exsl:node-set()`](/pt-BR/docs/Web/XML/EXSLT/Reference/exsl/node-set)
- [`exsl:object-type()`](/pt-BR/docs/Web/XML/EXSLT/Reference/exsl/object-type)

### Math

O pacote EXSLT Math fornece funções para trabalhar com valores numéricos e
comparar nós.
O namespace do pacote Math é `http://exslt.org/math`.

- [`math:highest()`](/pt-BR/docs/Web/XML/EXSLT/Reference/math/highest)
- [`math:lowest()`](/pt-BR/docs/Web/XML/EXSLT/Reference/math/lowest)
- [`math:max()`](/pt-BR/docs/Web/XML/EXSLT/Reference/math/max)
- [`math:min()`](/pt-BR/docs/Web/XML/EXSLT/Reference/math/min)

### Regular Expressions

O pacote EXSLT Regular Expressions fornece funções que permitem testar, comparar
e substituir texto usando expressões regulares no estilo JavaScript.
O namespace do pacote EXSLT Regular Expressions é
`http://exslt.org/regular-expressions`.

- [`regexp:match()`](/pt-BR/docs/Web/XML/EXSLT/Reference/regexp/match)
- [`regexp:replace()`](/pt-BR/docs/Web/XML/EXSLT/Reference/regexp/replace)
- [`regexp:test()`](/pt-BR/docs/Web/XML/EXSLT/Reference/regexp/test)

### Sets

O pacote EXSLT Sets oferece funções que permitem manipular conjuntos.
O namespace para essas funções é `http://exslt.org/sets`.

- [`set:difference()`](/pt-BR/docs/Web/XML/EXSLT/Reference/set/difference)
- [`set:distinct()`](/pt-BR/docs/Web/XML/EXSLT/Reference/set/distinct)
- [`set:intersection()`](/pt-BR/docs/Web/XML/EXSLT/Reference/set/intersection)
- [`set:has-same-node()`](/pt-BR/docs/Web/XML/EXSLT/Reference/set/has-same-node)
- [`set:leading()`](/pt-BR/docs/Web/XML/EXSLT/Reference/set/leading)
- [`set:trailing()`](/pt-BR/docs/Web/XML/EXSLT/Reference/set/trailing)

### Strings

O pacote EXSLT Strings fornece funções que permitem a manipulação de strings.
O namespace do pacote Strings é `http://exslt.org/strings`.

- [`str:concat()`](/pt-BR/docs/Web/XML/EXSLT/Reference/str/concat)
- [`str:split()`](/pt-BR/docs/Web/XML/EXSLT/Reference/str/split)
- [`str:tokenize()`](/pt-BR/docs/Web/XML/EXSLT/Reference/str/tokenize)

## Veja também

- [Site do EXSLT](https://exslt.github.io/)
