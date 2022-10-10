---
title: Array.prototype.concat()
slug: Web/JavaScript/Reference/Global_Objects/Array/concat
translation_of: Web/JavaScript/Reference/Global_Objects/Array/concat
---
{{JSRef("Global_Objects", "Array")}}

## Sumário

O método concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro

## Sintaxe

```
arr.concat(valor1, valor2, ..., valorN)
```

### Parâmetros

- valorN
  - : Arrays ou valores para concatenar (unir) ao array retornado.

## Descrição

**concat** cria um novo array unindo todos os elementos que foram passados como parâmetro, na ordem dada, para cada argumento e seus elementos (se o elemento passado for um array).

**concat** não altera a si mesmo ou a qualquer um dos argumentos passados, apenas providencia um novo array contendo uma cópia de si mesmo e dos argumentos passados. Os elementos copiados são:

- Referência aos objetos (e não o objeto): concat copia a referência aos objetos para o novo array. Tanto o original quanto a cópia apontam para o mesmo objeto. Ou seja, se o objeto foi modificado, tais mudanças serão visíveis no objeto original e no array.
- Strings e numbers (diferente dos objetos {{jsxref("Global_Objects/String", "String")}} e {{jsxref("Global_Objects/Number", "Number")}}): `concat` copia os valores de strings e numbers para o novo array. Qualquer alteração no novo array não refletirá no original, e vice versa.

## Exemplos

### Exemplo: Concatenando dois arrays

O código a seguir une dois arrays:

```js
var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];

// creates array ["a", "b", "c", 1, 2, 3]; alpha and numeric are unchanged
var alphaNumeric = alpha.concat(numeric);
```

### Exemplo: Concatenando três arrays

O código a seguir une três arrays:

```js
var num1 = [1, 2, 3];
var num2 = [4, 5, 6];
var num3 = [7, 8, 9];

// creates array [1, 2, 3, 4, 5, 6, 7, 8, 9]; num1, num2, num3 are unchanged
var nums = num1.concat(num2, num3);
```

### Exemplo: Concatenando valores ao array

O código a seguir une três valores ao array

```js
var alpha = ['a', 'b', 'c'];

// creates array ["a", "b", "c", 1, 2, 3], leaving alpha unchanged
var alphaNumeric = alpha.concat(1, [2, 3]);
```

## Especificação

| Specification                                                                                        | Status                   | Comment                                           |
| ---------------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------- |
| ECMAScript 3rd Edition                                                                               | Standard                 | Initial definition. Implemented in JavaScript 1.2 |
| {{SpecName('ES5.1', '#sec-15.4.4.4', 'Array.prototype.concat')}}                 | {{Spec2('ES5.1')}} |                                                   |
| {{SpecName('ES6', '#sec-array.prototype.concat', 'Array.prototype.concat')}} | {{Spec2('ES6')}}     |                                                   |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Array.concat")}}

## Veja também

- {{jsxref("Array.push", "push")}} / {{jsxref("Array.pop", "pop")}} - add/remove elements from the end of the array;
- {{jsxref("Array.unshift", "unshift")}} / {{jsxref("Array.shift", "shift")}} - add/remove elements from the beginning of the array;
- {{jsxref("Array.splice", "splice")}} - add/remove elements from the specified location of the array.
- {{jsxref("String.prototype.concat")}}
