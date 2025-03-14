---
title: Map.prototype.size
slug: Web/JavaScript/Reference/Global_Objects/Map/size
---

{{JSRef}}

A propriedade acessora **`size`** retorna o número de elementos que estão dentro do objeto {{jsxref("Map")}}

{{InteractiveExample("JavaScript Demo: Map.prototype.size")}}

```js interactive-example
const map1 = new Map();

map1.set("a", "alpha");
map1.set("b", "beta");
map1.set("g", "gamma");

console.log(map1.size);
// Expected output: 3
```

## Descrição

O valor de `size` é um inteiro que representa a quantidade de entradas que o objeto `Map` possui.
A função acessora set para `size` é `undefined`; você não poderá alterar essa propriedade.

## Exemplos

### Usando o size

```js
var myMap = new Map();
myMap.set("a", "alpha");
myMap.set("b", "beta");
myMap.set("g", "gamma");

myMap.size; // 3
```

## Especificações

{{Specifications}}

## Compatibilidade com browsers

{{Compat}}

## Veja também

- {{jsxref("Map")}}
