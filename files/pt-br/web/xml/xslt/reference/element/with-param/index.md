---
title: <xsl:with-param>
slug: Web/XML/XSLT/Reference/Element/with-param
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:with-param>` define o valor de um parâmetro a ser passado para um template.

## Sintaxe

```xml
<xsl:with-param name=NAME select=EXPRESSION>
  TEMPLATE
</xsl:with-param>
```

### Atributos obrigatórios

- `name`
  - : Dá um nome a este parâmetro.

### Atributos opcionais

- `select`
  - : Define o valor do parâmetro por meio de uma expressão XPath. Se o elemento contiver um template, este atributo é ignorado.

### Tipo

Sub-instrução, aparece sempre dentro de um elemento `<xsl:apply-templates>` ou `<xsl:call-template>`.

## Especificações

XSLT 11.6

## Compatibilidade com Gecko

Compatível.
