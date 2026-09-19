---
title: <xsl:for-each>
slug: Web/XML/XSLT/Reference/Element/for-each
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:for-each>` seleciona um conjunto de nós e processa cada um deles da mesma forma. É frequentemente usado para iterar por um conjunto de nós ou para alterar o nó atual. Se um ou mais elementos `<xsl:sort>` aparecerem como filhos deste elemento, a ordenação ocorre antes do processamento. Caso contrário, os nós são processados na ordem do documento.

## Sintaxe

```xml
<xsl:for-each select=EXPRESSION>
  <xsl:sort> [opcional]
  TEMPLATE
</xsl:for-each>
```

### Atributos obrigatórios

- `select`
  - : Utiliza uma expressão XPath para selecionar os nós a serem processados.

### Atributos opcionais

Nenhum.

### Tipo

Instrução, aparece dentro de um template.

## Especificações

XSLT, seção 8.

## Compatibilidade com Gecko

Suportado.
