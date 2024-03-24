---
title: Map() constructor
slug: Web/JavaScript/Reference/Global_Objects/Map/Map
---

{{JSRef}}

O **construtor `Map()`** cria objetos {{jsxref("Map")}}.

## Sintaxe

```js
new Map();
new Map(iterable);
```

### Parâmetros

- `iterable` {{optional_inline}}
  - : Um {{jsxref("Array")}} ou outro
    objeto [iterável](/pt-BR/docs/Web/JavaScript/Reference/Iteration_protocols)
    dos quais os elementos são pares chave-valor. (Por exemplo, arrays com dois elementos como `[[ 1, 'one' ],[ 2, 'two' ]]`.).
    Cada par chave-valor é adicionado ao novo `Map`.

## Exemplos

### Criando um novo Map

```js
let myMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- Um polyfill de `Map` esta disponível em
  [`core-js`](https://github.com/zloirock/core-js#map)
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
- {{jsxref("WeakSet")}}
