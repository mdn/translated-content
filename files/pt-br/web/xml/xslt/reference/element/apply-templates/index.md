---
title: <xsl:apply-templates>
slug: Web/XML/XSLT/Reference/Element/apply-templates
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:apply-templates>` seleciona um conjunto de nós na árvore de entrada e instrui o processador a aplicar os templates adequados a eles.

## Sintaxe

```xml
<xsl:apply-templates select=EXPRESSION mode=NAME>
  <xsl:with-param> [opcional]
  <xsl:sort> [opcional]
</xsl:apply-templates>
```

### Atributos obrigatórios

Nenhum.

### Atributos opcionais

- `select`
  - : Utiliza uma expressão XPath que especifica os nós a serem processados. Um asterisco (`*`) seleciona o conjunto de nós inteiro. Se este atributo não estiver definido, todos os nós filhos do nó atual serão selecionados.
- `mode`
  - : Se houver múltiplas formas de processamento definidas para o mesmo nó, distingue entre elas.

### Tipo

Instrução, aparece dentro de um template.

## Especificações

XSLT, seção 5.4.

## Compatibilidade com Gecko

Suportado.
