---
title: Array.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
---

{{JSRef("Global_Objects", "Array")}}

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

| Especificação                                                                  | Status             | Comentário                                         |
| ------------------------------------------------------------------------------ | ------------------ | -------------------------------------------------- |
| ECMAScript 1ª Edição                                                           | Padrão             | Definição inicial. Implementado no JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.4.4.8', 'Array.prototype.reverse')}}              | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-array.prototype.reverse', 'Array.prototype.reverse')}} | {{Spec2('ES6')}}   |                                                    |

## Compatibilidade com navegador

{{Compat("javascript.builtins.Array.reverse")}}

## Veja também

- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
