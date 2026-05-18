---
title: choose
slug: Web/XML/XPath/Reference/Functions/choose
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `choose` retorna um dos objetos especificados com base em um parâmetro booleano.

> [!NOTE]
> Este método deve ser utilizado no lugar de `if ()`, que foi descontinuado.

## Sintaxe

```plain
choose( boolean, object1, object2 )
```

### Parâmetros

- `boolean`
  - : A operação booleana utilizada para determinar qual objeto retornar.
- `object1`
  - : O primeiro objeto a considerar retornar.
- `object2`
  - : O segundo objeto a considerar retornar.

### Valor de retorno

Se o parâmetro booleano for verdadeiro, o primeiro objeto é retornado; caso contrário, o segundo objeto é retornado.

> [!NOTE]
> Todos os parâmetros são avaliados, inclusive o que não é retornado.

## Especificações

[XForms 1.1](https://www.w3.org/TR/xforms11/#fn-choose)

## Compatibilidade com Gecko

Suportado.
