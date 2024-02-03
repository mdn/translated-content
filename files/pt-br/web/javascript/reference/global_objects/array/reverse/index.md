---
title: Array.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
---

{{JSRef}}

## Resumo

O método **`reverse()`** inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.

## Sintaxe

```
arr.reverse()
```

### Parâmetros

Nenhum.

## Descrição

O método `reverse` transpõe os elementos do objeto array no mesmo lugar, mutando o array, e retornando uma referência para o mesmo.

## Exemplos

### Exemplo: Invertendo os elementos em um array

O seguinte exemplo cria um array `myArray`, contendo três elementos, em seguida inverte-o.

```js
var myArray = ["one", "two", "three"];
myArray.reverse();

console.log(myArray); // ['three', 'two', 'one']
```

## Especificações

{{Specifications}}

## Compatibilidade com navegador

{{Compat}}

## Veja também

- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
