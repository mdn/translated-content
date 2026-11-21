---
title: local-name
slug: Web/XML/XPath/Reference/Functions/local-name
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `local-name` retorna uma string que representa o nome local do primeiro nó em um conjunto de nós fornecido.

## Sintaxe

```plain
local-name( [node-set] )
```

### Parâmetros

- `node-set` (opcional)
  - : O nome local do primeiro nó neste conjunto de nós será retornado. Se este argumento for omitido, o nó de contexto atual será usado.

### Valor de retorno

Uma string.

## Descrição

- O nome local é a parte local de um [nome expandido](https://www.w3.org/TR/xpath-10/#dt-expanded-name).

## Especificações

[XPath 1.0 4.1](https://www.w3.org/TR/xpath-10/#function-local-name)

## Compatibilidade com Gecko

Compatível.
