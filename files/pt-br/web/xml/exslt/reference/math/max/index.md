---
title: math:max()
slug: Web/XML/EXSLT/Reference/math/max
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`math:max()` retorna o valor máximo de um conjunto de nós.

Para calcular o valor máximo do conjunto de nós, o conjunto de nós é ordenado em ordem decrescente como seria usando [`xsl:sort()`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/sort) com um tipo de dado `number`. O valor máximo é então o primeiro nó na lista ordenada, convertido em um número.

## Sintaxe

```plain
math:max(nodeSet)
```

### Parâmetros

- `nodeSet`
  - : O conjunto de nós cujo valor mais alto deve ser retornado.

### Valor de retorno

Um fragmento de árvore de resultado representando o valor numérico do nó com maior valor como uma string.

## Especificações

[EXSLT - MATH:MAX](https://exslt.github.io/math/functions/max/index.html)
