---
title: <xsl:when>
slug: Web/XML/XSLT/Reference/Element/when
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:when>` aparece sempre dentro de um elemento `<xsl:choose>`, funcionando como uma instrução case.

## Sintaxe

```xml
<xsl:when test=EXPRESSION>
  TEMPLATE
</xsl:when>
```

### Atributos obrigatórios

- `test`
  - : Especifica uma expressão booleana a ser avaliada. Se verdadeira, o conteúdo do elemento é processado; se falsa, é ignorado.

### Atributos opcionais

Nenhum.

### Tipo

Sub-instrução, aparece sempre dentro de um elemento `<xsl:choose>`.

## Especificações

XSLT, seção 9.2.

## Compatibilidade com Gecko

Compatível.
