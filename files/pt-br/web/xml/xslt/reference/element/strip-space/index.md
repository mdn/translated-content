---
title: <xsl:strip-space>
slug: Web/XML/XSLT/Reference/Element/strip-space
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:strip-space>` define os elementos no documento de origem dos quais os espaços em branco devem ser removidos.

## Sintaxe

```xml
<xsl:strip-space elements=LIST-OF-ELEMENT-NAMES />
```

### Atributos obrigatórios

- `elements`
  - : Especifica uma lista separada por espaços dos elementos na origem cujos nós de texto compostos apenas por espaços em branco devem ser removidos.

### Atributos opcionais

Nenhum.

### Tipo

Nível superior, deve ser filho de `<xsl:stylesheet>` ou `<xsl:transform>`.

## Especificações

XSLT, seção 3.4

## Compatibilidade com Gecko

Compatível.
