---
title: current
slug: Web/XML/XPath/Reference/Functions/current
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `current` pode ser utilizada para obter o nó de contexto em uma instrução XSLT.

## Sintaxe

```plain
current()
```

### Valor de retorno

Um conjunto de nós contendo apenas o nó atual.

## Descrição

Esta função é uma adição específica do XSLT ao XPath. Não faz parte da biblioteca de funções XPath principal.

Para uma expressão mais externa (uma expressão que não ocorre dentro de outra expressão), o nó atual é sempre o mesmo que o nó de contexto (que será retornado pela sintaxe `.` ou `self`). Os dois seguintes são semanticamente equivalentes.

```xml
<xsl:value-of select="current()"/>
```

```xml
<xsl:value-of select="."/>
```

Em uma expressão interna (por exemplo, entre colchetes), o nó atual ainda é o mesmo que seria em uma expressão mais externa. Assim, dentro de todas as três expressões seguintes, a função `current` (não as expressões inteiras) retorna o mesmo nó. Além disso, as duas últimas são semanticamente equivalentes.

```xml
<xsl:value-of select="current()"/>
```

```xml
<xsl:value-of select="foo/bar[current() = X]"/>
```

```xml
<xsl:variable name="current" select="current()"/>
<xsl:value-of select="foo/bar[$current = X]"/>
```

E o próximo código também é semanticamente equivalente aos dois últimos, pois o `.` ocorre em uma expressão mais externa.

```xml
<xsl:variable name="current" select="."/>
<xsl:value-of select="foo/bar[$current = X]"/>
```

Mas o `.` sempre se relaciona ao contexto mais restrito. Assim em

```xml
<xsl:value-of select="foo/bar[. = X]"/>
```

o `.` retorna o nó `bar`, que pode ser diferente do nó atual.

## Especificações

[XSLT 1.0 12.4](https://www.w3.org/TR/xslt-10/#function-current)

## Compatibilidade com Gecko

Suportado.
