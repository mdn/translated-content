---
title: Array.prototype.flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
---

{{JSRef}} {{SeeCompatTable}}

O método **`flat()`** cria um novo array com todos elementos sub-arrays concatenados nele de forma recursiva até a profundidade especificada.

{{InteractiveExample("JavaScript Demo: Array.flat()")}}

```js interactive-example
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]
```

## Sintaxe

```js
flat();
flat(depth);
```

### Parâmetros

- `depth` {{optional_inline}}
  - : O nível de profundidade especifíca o quão profundo um array aninhando deve ser achatado. O padrão é 1.

### Retorno

Um novo array com os elementos sub-array concatenados nele.

## Exemplos

### Achatando arrays aninhados

```js
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8]
```

### Achatando e buracos em array

o método flat remove espaços vazios do array:

```js
var arr5 = [1, 2, , 4, 5];
arr5.flat();
// [1, 2, 4, 5]
```

## Alternativa

### `reduce` e `concat`

```js
var arr = [1, 2, [3, 4]];

// Achatar array de nível único
arr.flat();
// É equivalente à
arr.reduce((acc, val) => acc.concat(val), []);
// [1, 2, 3, 4]

// Ou com sintaxe de decomposição
const flattened = (arr) => [].concat(...arr);
```

### `reduce` + `concat` + `isArray` + recursividade

```js
var arr = [1, 2, [3, 4, [5, 6]]];

// Para achatamentos mais profundos, use recursividade com reduce e concat
function flatDeep(arr, d = 1) {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        [],
      )
    : arr.slice();
}

flatDeep(arr, Infinity);
// [1, 2, 3, 4, 5, 6]
```

## Especificações

| Especificação                                                                                        | Status | Comentários |
| ---------------------------------------------------------------------------------------------------- | ------ | ----------- |
| [`Array.prototype.flat` proposal](https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flat) | Draft  |             |

## Compatibilidade com navegadores

{{Compat}}

## Veja Também

- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.concat()")}}
