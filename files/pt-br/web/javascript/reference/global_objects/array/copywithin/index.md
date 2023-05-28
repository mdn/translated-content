---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
---

{{JSRef}}

O método **`copyWithin()`** copia parte de um array para outra localização no mesmo array e o retorna sem alterar seu tamanho.

{{EmbedInteractiveExample("pages/js/array-copywithin.html")}}

## Sintaxe

```js-nolint
copyWithin(target)
copyWithin(target, start)
copyWithin(target, start, end)
```

### Parâmetros

- `target`
  - : Índice de base zero à qual copiar a sequência para, [convertido para inteiro](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Índice negativo será contado a partir do final do array — se `target < 0`, `target + array.length` é utilizado.
    - Se `target < -array.length`, `0` é utilizado.
    - Se `target >= array.length`, nada é copiado.
    - Se `target` é posicionado após `start` depois da normalização, a cópia só acontece até o final do `array.length` (em outras palavras, `copyWithin()` nunca estende o array).
- `start` {{optional_inline}}
  - : Índice de base zero à qual inicia a cópia dos elementos a partir de, [convertido para inteiro](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Índice negativo será contado a partir do final do array — se `start < 0`, `start + array.length` é utilizado.
    - Se `start < -array.length` ou `start` é omitido, `0` é utilizado.
    - Se `start >= array.length`, nada é copiado.
- `end` {{optional_inline}}
  - : Índice de base zero à qual termina a cópia dos elementos a partir de, [convertido para inteiro](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `copyWithin()` copia até, mas não inclui o `end`.
    - Índice negativo será contado a partir do final do array — se `end < 0`, `end + array.length` é utilizado.
    - Se `end < -array.length`, `0` é utilizado.
    - Se `end >= array.length` ou `end` é omitido, `array.length` é utilizado, fazendo com que todos os elementos até o final sejam copiados.
    - Se `end` é posicionado antes ou em `start` após a normalização, nada será copiado.

### Valor de retorno

O array modificado.

## Descrição

O método `copyWithin()` funciona como o `memmove` do C e C++, e é um método de alta performance para troca de dados de um {{jsxref("Array")}}. Isso se aplica especialmente ao método {{jsxref("TypedArray/copyWithin", "TypedArray")}} de mesmo nome. A sequência é copiada e colada como uma operação; a sequência colada terá os valores copiados mesmo quando a região de copiar e colar se sobrepuserem.

O método `copyWithin()` é um [método mutável](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). Ele não altera o comprimento de `this`, mas mudará o conteúdo de `this` e criará novas propriedades ou excluirá propriedades existentes, se necessário.

O método `copyWithin()` preserva slots vazios. Se a região a ser copiada for [sparse](/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), os novos índices correspondentes dos slots vazios são [excluídos](/pt-BR/docs/Web/JavaScript/Reference/Operators/delete) e também se tornam slots vazios.

O método `copyWithin()` é [genérico](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). Ele apenas espera que o valor de `this` tenha uma propriedade `length` e propriedades integer-keyed. Embora as strings também sejam semelhantes a arrays, esse método não é adequado para ser aplicado nelas, pois as strings são imutáveis.

## Exemplos

### Usando copyWithin()

```js
console.log([1, 2, 3, 4, 5].copyWithin(-2));
// [1, 2, 3, 1, 2]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]
```

### Usando copyWithin() em arrays sparse

`copyWithin()` propagará slots vazios(empty).

```js
console.log([1, , 3].copyWithin(2, 1, 2)); // [1, empty, empty]
```

### Chamando copyWithin() em objetos não array

O método `copyWithin()` lê a propriedade `length` do `this` e então manipula os índices inteiros envolvidos.

```js
const arrayLike = {
  length: 5,
  3: 1,
};
console.log(Array.prototype.copyWithin.call(arrayLike, 0, 3));
// { '0': 1, '3': 1, length: 5 }
console.log(Array.prototype.copyWithin.call(arrayLike, 3, 1));
// { '0': 1, length: 5 }
// A propriedade '3' é excluída porque a fonte copiada é um slot vazio.
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Polyfill de `Array.prototype.copyWithin` no `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Coleções indexadas](/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.copyWithin()")}}
