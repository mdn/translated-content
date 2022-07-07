---
title: Map.prototype.keys()
slug: Web/JavaScript/Reference/Global_Objects/Map/keys
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Map
  - Method
  - Prototype
browser-compat: javascript.builtins.Map.keys
---
{{JSRef}}

O método **`keys()`** retorna um novo objeto **[iterador](/pt-BR/docs/Web/JavaScript/Guide/Iterators_and_Generators)** que contém
as chaves de cada elemento dentro do objeto `Map` na ordem em que foram inseridos.

{{EmbedInteractiveExample("pages/js/map-prototype-keys.html")}}

## Sintaxe

```js
keys()
```

### Valor retornado

Um novo objeto {{jsxref("Map")}} iterador.

## Exemplos

### Usando keys()

```js
var myMap = new Map();
myMap.set('0', 'foo');
myMap.set(1, 'bar');
myMap.set({}, 'baz');

var mapIter = myMap.keys();

console.log(mapIter.next().value); // "0"
console.log(mapIter.next().value); // 1
console.log(mapIter.next().value); // Object
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.values()")}}
