---
title: Map.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Map/has
---

{{JSRef}}

O método **`has()`** retorna um booleano indicando se o elemento com a chave especificada existe ou não.

{{InteractiveExample("JavaScript Demo: Map.prototype.has()")}}

```js interactive-example
const map1 = new Map();
map1.set("bar", "foo");

console.log(map1.has("bar"));
// Expected output: true

console.log(map1.has("baz"));
// Expected output: false
```

## Sintaxe

```js
has(key);
```

### Parâmetros

- `key`
  - : A chave do elemento que será testado no objeto `Map`.

### Valor retornado

`true` se o elemento com a chave especificada existe no objeto `Map`, de outra forma será retornado `false`.

## Exemplos

### Usando has()

```js
let myMap = new Map();
myMap.set("bar", "foo");

myMap.has("bar"); // retorna true
myMap.has("baz"); // retorna false
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.get()")}}
