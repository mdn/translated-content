---
title: namespace-uri
slug: Web/XML/XPath/Reference/Functions/namespace-uri
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `namespace-uri` retorna uma string que representa o URI do namespace do primeiro nó em um conjunto de nós fornecido.

## Sintaxe

```plain
namespace-uri( [node-set] )
```

### Parâmetros

- `node-set` (opcional)
  - : O URI do namespace do primeiro nó neste conjunto de nós será retornado. Se este argumento for omitido, o nó de contexto atual será usado.

### Valor de retorno

Uma string que representa o URI do namespace no qual o nó fornecido reside.

## Descrição

- Se o nó fornecido não tiver um namespace especificado, a string retornada será uma string vazia.
- Para nós que não sejam nós de elemento e atributo, a string retornada sempre será uma string vazia.

## Especificações

[XPath 1.0 4.1](https://www.w3.org/TR/xpath-10/#function-local-name)

## Compatibilidade com Gecko

Compatível.
