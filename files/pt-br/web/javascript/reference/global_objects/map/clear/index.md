---
title: Map.prototype.clear()
slug: Web/JavaScript/Reference/Global_Objects/Map/clear
---

{{JSRef}}

O método **`clear()`** remove todos os elementos de um objeto `Map`.

{{InteractiveExample("JavaScript Demo: Map.prototype.clear()")}}

```js interactive-example
const map1 = new Map();

map1.set("bar", "baz");
map1.set(1, "foo");

console.log(map1.size);
// Expected output: 2

map1.clear();

console.log(map1.size);
// Expected output: 0
```

## Sintaxe

```js
clear();
```

### Valor retornado

{{jsxref("undefined")}}.

## Exemplos

### Usando o clear()

```js
var myMap = new Map();
myMap.set("bar", "baz");
myMap.set(1, "foo");

myMap.size; // 2
myMap.has("bar"); // true

myMap.clear();

myMap.size; // 0
myMap.has("bar"); // false
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Map")}}
