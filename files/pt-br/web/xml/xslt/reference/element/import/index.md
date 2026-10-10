---
title: <xsl:import>
slug: Web/XML/XSLT/Reference/Element/import
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:import>` é um elemento de nível superior que serve para importar o conteúdo de uma folha de estilo para outra. Em geral, o conteúdo da folha de estilo importada tem uma precedência de importação menor do que o conteúdo da folha de estilo que a importa. Isso contrasta com `<xsl:include>`, em que o conteúdo da folha de estilo incluída tem exatamente a mesma precedência que o conteúdo da folha de estilo que a inclui.

## Sintaxe

```xml
<xsl:import href=URI />
```

### Atributos obrigatórios

- `href`
  - : Especifica o URI da folha de estilo a ser importada.

### Atributos opcionais

Nenhum.

### Tipo

Nível superior, deve aparecer antes de qualquer outro filho de `<xsl:stylesheet>` ou `<xsl:transform>` na folha de estilo que importa.

## Especificações

XSLT, seção 2.6.2.

## Compatibilidade com Gecko

Majoritariamente suportado, com alguns problemas relacionados a variáveis e parâmetros de nível superior a partir do Mozilla 1.0.
