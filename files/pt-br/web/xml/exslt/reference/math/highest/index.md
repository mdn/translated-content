---
title: math:highest()
slug: Web/XML/EXSLT/Reference/math/highest
l10n:
  sourceCommit: f731452fabde211bee55aedd39fc83d60c4e4918
---

`math:highest()` retorna o nó no conjunto de nós especificado com o valor mais alto (onde o valor mais alto é calculado usando [`math:max()`](/pt-BR/docs/Web/XML/EXSLT/Reference/math/max)).

Um nó possui esse valor máximo se converter seu valor de string em um número for igual ao valor máximo.

## Sintaxe

```plain
math:highest(nodeSet)
```

### Parâmetros

- `nodeSet`
  - : O conjunto de nós cujo valor mais alto deve ser retornado.

### Valor de retorno

Um fragmento de árvore de resultado consistindo de cópias dos nós retornados por [`math:max()`](/pt-BR/docs/Web/XML/EXSLT/Reference/math/max).

## Especificações

[EXSLT - MATH:HIGHEST](https://exslt.github.io/math/functions/highest/index.html)
