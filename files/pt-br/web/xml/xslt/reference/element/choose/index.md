---
title: <xsl:choose>
slug: Web/XML/XSLT/Reference/Element/choose
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:choose>` define uma escolha entre várias alternativas. Ele se comporta como uma instrução switch em linguagens procedurais.

## Sintaxe

```xml
<xsl:choose>
  <xsl:when test="[whatever to test1]"></xsl:when>
  <xsl:when test="[whatever to test2]"></xsl:when>
  <xsl:otherwise></xsl:otherwise> [opcional]
</xsl:choose>
```

### Atributos obrigatórios

Nenhum.

### Atributos opcionais

Nenhum.

### Tipo

Instrução, aparece dentro de um template. Contém um ou mais elementos `<xsl:when>` e, opcionalmente, um elemento `<xsl:otherwise>` final.

## Especificações

XSLT, seção 9.2.

## Compatibilidade com Gecko

Suportado.
