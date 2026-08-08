---
title: math:lowest()
slug: Web/XML/EXSLT/Reference/math/lowest
l10n:
  sourceCommit: f731452fabde211bee55aedd39fc83d60c4e4918
---

`math:lowest()` retorna o nó no conjunto de nós especificado com o valor mais baixo (onde o valor mais baixo é calculado usando [`math:min()`](/pt-BR/docs/Web/XML/EXSLT/Reference/math/min)).

Um nó possui esse valor mínimo se converter seu valor de string em um número for igual ao valor mínimo.

## Sintaxe

```plain
math:lowest(nodeSet)
```

### Parâmetros

- `nodeSet`
  - : O conjunto de nós cujo valor mais baixo deve ser retornado.

### Valor de retorno

Um fragmento de árvore de resultado consistindo de cópias dos nós retornados por [`math:min()`](/pt-BR/docs/Web/XML/EXSLT/Reference/math/min).

## Especificações

[EXSLT - MATH:LOWEST](https://exslt.github.io/math/functions/lowest/index.html)
