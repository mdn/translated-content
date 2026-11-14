---
title: math:min()
slug: Web/XML/EXSLT/Reference/math/min
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`math:min()` retorna o valor mínimo de um conjunto de nós.

Para calcular o valor mínimo do conjunto de nós, o conjunto de nós é ordenado em ordem crescente como seria usando [`xsl:sort()`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/sort) com um tipo de dado `number`. O valor mínimo é então o primeiro nó na lista ordenada, convertido em um número.

## Sintaxe

```plain
math:min(nodeSet)
```

### Parâmetros

- `nodeSet`
  - : O conjunto de nós cujo valor mais baixo deve ser retornado.

### Valor de retorno

Um fragmento de árvore de resultado representando o valor numérico do nó com menor valor como uma string.

## Especificações

[EXSLT - MATH:MIN](https://exslt.github.io/math/functions/min/index.html)
