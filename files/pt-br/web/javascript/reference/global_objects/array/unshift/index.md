---
title: Array.prototype.unshift()
slug: Web/JavaScript/Reference/Global_Objects/Array/unshift
---

{{JSRef}}

## Introdução

O método **`unshift()`** adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade `length`) atualizado.

## Sintaxe

```
arr.unshift([element1[, ...[, elementN]]])
```

### Parâmetros

- `elementN`
  - : Os elementos a serem adicionados no começo do array.

### Retorna

A nova propriedade {{jsxref("Array.length", "length")}} do objeto acima onde o método foi chamado.

## Descrição

O método `unshift` insere os valores fornecidos no início de um objeto do tipo array.

`unshift` é intencionalmente genérico; este método pode ser chamado via {{jsxref("Function.call", "call", "", 1)}} ou {{jsxref("Function.apply", "apply", "", 1)}} em objetos que se assemelham aos arrays. Objetos que não contêm uma propriedade `length` que reflete a última de uma série consecutiva de propriedades numéricas, iniciada por 0, podem não comportar-se de maneira significativa.

## Exemplos

```js
var arr = [1, 2];

arr.unshift(0); // result of call is 3, the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr is [[-3], -2, -1, 0, 1, 2]
```

## Especificações

{{Specifications}}

## Compatibilidade entre browsers

{{Compat}}

## Veja também

- {{jsxref("Array.prototype.push()")}}
- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
