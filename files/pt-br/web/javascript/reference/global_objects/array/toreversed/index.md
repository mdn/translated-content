---
title: Array.prototype.toReversed()
short-title: toReversed()
slug: Web/JavaScript/Reference/Global_Objects/Array/toReversed
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

O método **`toReversed()`** de instâncias de {{jsxref("Array")}} é a contrapartida de [cópia](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) do método {{jsxref("Array/reverse", "reverse()")}}. Ele retorna um novo array com os elementos em ordem invertida.

## Sintaxe

```js-nolint
toReversed()
```

### Parâmetros

Nenhum.

### Valor retornado

Um novo array contendo os elementos em ordem invertida.

## Descrição

O método `toReversed()` transpõe os elementos do objeto array chamador em ordem inversa e retorna um novo array.

Quando usado em [arrays esparsos](/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), o método `toReversed()` itera sobre as posições vazias como se tivessem o valor `undefined`.

O método `toReversed()` é [genérico](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Ele espera apenas que o valor `this` tenha uma propriedade `length` e propriedades com chaves numéricas inteiras.

## Exemplos

### Invertendo os elementos de um array

O exemplo a seguir cria um array `items`, contendo três elementos, e depois cria um novo array que é o inverso de `items`. O array `items` permanece inalterado.

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]
```

### Usando toReversed() em arrays esparsos

O valor de retorno de `toReversed()` nunca é esparso. Posições vazias tornam-se `undefined` no array retornado.

```js
console.log([1, , 3].toReversed()); // [3, undefined, 1]
console.log([1, , 3, 4].toReversed()); // [4, 3, undefined, 1]
```

### Chamando toReversed() em objetos que não são arrays

O método `toReversed()` lê a propriedade `length` de `this`. Em seguida, ele visita cada propriedade que possui uma chave inteira entre `length - 1` e `0` em ordem decrescente, adicionando o valor da propriedade atual ao final do array a ser retornado.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.toReversed.call(arrayLike));
// [4, undefined, undefined]
// Os índices '0' e '1' não estão presentes, portanto tornam-se undefined
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Polyfill de `Array.prototype.toReversed` no `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- [Polyfill es-shims de `Array.prototype.toReversed`](https://www.npmjs.com/package/array.prototype.toreversed)
- Guia de [Coleções indexadas](/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
