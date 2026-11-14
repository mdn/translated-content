---
title: <xsl:include>
slug: Web/XML/XSLT/Reference/Element/include
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:include>` mescla o conteúdo de uma folha de estilo com outra. Diferentemente do caso de `<xsl:import>`, o conteúdo de uma folha de estilo incluída tem exatamente a mesma precedência que o conteúdo da folha de estilo que a inclui.

## Sintaxe

```xml
<xsl:include href=URI />
```

### Atributos obrigatórios

- `href`
  - : Especifica o URI da folha de estilo a ser incluída.

### Atributos opcionais

Nenhum.

### Tipo

Nível superior, pode aparecer em qualquer ordem como filho de `<xsl:stylesheet>` ou `<xsl:transform>`.

## Especificações

XSLT, seção 2.6.1.

## Compatibilidade com Gecko

Suportado.
