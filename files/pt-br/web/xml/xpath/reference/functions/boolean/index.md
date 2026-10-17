---
title: boolean
slug: Web/XML/XPath/Reference/Functions/boolean
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `boolean` avalia uma expressão e retorna verdadeiro ou falso.

## Sintaxe

```js-nolint
boolean( expression )
```

### Parâmetros

- `expression`
  - : A expressão a ser avaliada. A expressão pode referenciar números e conjuntos de nós, além de booleanos.

### Valor de retorno

Booleano `true` ou `false` após avaliar `expression`.

## Descrição

- Um número avalia como falso se for zero positivo, zero negativo ou `NaN`. Caso contrário, avalia como verdadeiro.
- Um conjunto de nós avalia como verdadeiro se não estiver vazio.
- Uma string avalia como falso se for uma string vazia. Caso contrário, avalia como verdadeiro.
- Um objeto de um tipo diferente dos quatro tipos básicos é convertido para booleano de uma forma que depende desse tipo.

## Especificações

[XPath 1.0 4.3](https://www.w3.org/TR/xpath-10/#function-boolean)

## Compatibilidade com Gecko

Suportado.
