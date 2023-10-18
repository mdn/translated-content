---
title: Array.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
---

{{JSRef}} {{SeeCompatTable}}

O método **`flatMap()`** primeiro mapeia cada elemento usando uma função de mapeamento e, em seguida, nivela o resultado em um novo array. É idêntico a um `map` seguido por um `flat` de profundidade 1, mas **`flatMap`** é bastante útil e mescla ambos em um método um pouco mais eficiente.

{{EmbedInteractiveExample("pages/js/array-flatmap.html","shorter")}}

## Sintaxe

```
var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
    // retorna o elemento para new_array
}[, thisArg])
```

### Parâmetros

- `callback`

  - : Função que produz um elemento de uma nova Array, pegando três argumentos:

    - `currentValue`
      - : O valor atual sendo processo na array.
    - `index`{{optional_inline}}
      - : O index do valor atual sendo processo na array.
    - `array`{{optional_inline}}
      - : O `map` da array que foi chamado.

- `thisArg`{{optional_inline}}
  - : Valor para ser usado como `this` quando `callback` estiver sendo executado.

### Valor de retorno

Uma nova array com cada elemento sendo o resultado da função callback e achatado ao valor de 1.

## Descrição

Veja {{jsxref("Array.prototype.map()")}} para uma detalhada descrição da função callback. O método `flatMap` é idêntico ao [`map`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map) seguido por um chamado a [`flatten`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flatten) de profundidade 1.

## Exemplos

### `map` e `flatMap`

```js
var arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

//  Só o primeiro nível
arr1.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]
```

Enquanto que acima poderíamos alcançar apenas com a utilização de map, já aqui temos um exemplo onde `flatMap` é mais apropriado.

Vamos gerar uma lista de palavras a partir de uma lista de sentenças.

```js
let arr1 = ["it's Sunny in", "", "California"];

arr1.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]
```

Perceba, o comprimento da lista de saída pode ser diferente do comprimento da lista de entrada.

## Alternativa

### `reduce` e `concat`

```js
var arr1 = [1, 2, 3, 4];
arr1.flatMap((x) => [x * 2]);
// é equivalente a
arr1.reduce((acc, x) => acc.concat([x * 2]), []);
// [ 2, 4, 6, 8 ]
```

## Especificações

| Specification                                                                                              | Status   | Comment |
| ---------------------------------------------------------------------------------------------------------- | -------- | ------- |
| [`Array.prototype.flatMap` proposal](https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap) | Rascunho |         |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Array.flatMap")}}

## Veja também

- {{jsxref("Array.prototype.flatten()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.concat()")}}
