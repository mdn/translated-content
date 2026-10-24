---
title: "false"
slug: Web/XML/XPath/Reference/Functions/false
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `false` retorna o booleano falso.

## Sintaxe

```plain
false()
```

### Valor de retorno

Booleano `false`.

## Descrição

Esta função é útil como parte de uma comparação:

```xml
<xsl:if test="boolean((1 &gt; 2) = false())">
  The expression evaluates as true
</xsl:if>
```

## Especificações

[XPath 1.0 4.3](https://www.w3.org/TR/xpath-10/#function-false)

## Compatibilidade com Gecko

Suportado.
