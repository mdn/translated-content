---
title: TypedArray.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/sort
---

{{JSRef}}

O método **`sort()`** ordena os elementos de uma matriz tipada _no local_ e retorna a matriz ordenada. Esse método tem o mesmo algoritmo que {{jsxref("Array.prototype.sort()")}}_._ _TypedArray_ é uma das maneiras de [escrever matrizes](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects).

## Syntax

```
typedarray.sort([compareFunction])
```

### Parâmetros

- `compareFunction` {{optional_inline}}
  - : Especifica uma função que define a ordem de classificação.

### Valor de retorno

A matriz ordenada.

## Exemplos

Para mais exemplos, acesse o método {{jsxref("Array.prototype.sort()")}}.

```js
var numbers = new Uint8Array([40, 1, 5, 200]);
numbers.sort();
// Uint8Array [ 1, 5, 40, 200 ]
// A compare function is not required as in the case of Array
// to sort the numbers numerically.

var numbers = [40, 1, 5, 200];
numbers.sort();
// The elements are sorted as strings.
// [1, 200, 40, 5]

function compareNumbers(a, b) {
  return a - b;
}

numbers.sort(compareNumbers);
// [ 1, 5, 40, 200 ]
```

## Especificações

| Especificações                                                                           | Status               | Comentários        |
| ---------------------------------------------------------------------------------------- | -------------------- | ------------------ |
| {{SpecName('ES2015', '#sec-%typedarray%.prototype.sort', 'TypedArray.prototype.sort')}}  | {{Spec2('ES2015')}}  | Definição inicial. |
| {{SpecName('ESDraft', '#sec-%typedarray%.prototype.sort', 'TypedArray.prototype.sort')}} | {{Spec2('ESDraft')}} |                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.TypedArray.sort")}}

## Ver também

- {{jsxref("Array.prototype.sort()")}}
