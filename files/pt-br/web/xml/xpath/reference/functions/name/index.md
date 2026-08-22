---
title: name
slug: Web/XML/XPath/Reference/Functions/name
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `name` retorna uma string que representa o QName do primeiro nó em um conjunto de nós fornecido.

## Sintaxe

```plain
name( [node-set] )
```

### Parâmetros

- `node-set` (opcional)
  - : O QName do primeiro nó neste conjunto de nós será retornado. Se este argumento for omitido, o nó de contexto atual será usado.

### Valor de retorno

Uma string que representa o QName de um nó.

## Descrição

- O [QName](https://www.w3.org/TR/xml-names/#NT-QName) é o nome qualificado do nó, incluindo seu prefixo de namespace e seu nome local.

## Especificações

[XPath 1.0 4.1](https://www.w3.org/TR/xpath-10/#function-local-name)

## Compatibilidade com Gecko

Compatível.
