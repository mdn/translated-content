---
title: Map.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Map/values
---

{{JSRef}}

O método **`values()`** retorna um novo objeto **[iterador](/pt-BR/docs/Web/JavaScript/Guide/Iterators_and_Generators)** que contém o valor
de cada elemento dentro do objeto `Map` na ordem em que foram inseridos.

{{EmbedInteractiveExample("pages/js/map-prototype-values.html")}}

## Sintaxe

```js
values();
```

### Valor retornado

Um novo objeto {{jsxref("Map")}} iterador.

## Exemplos

### Usando values()

```js
var myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

var mapIter = myMap.values();

console.log(mapIter.next().value); // "foo"
console.log(mapIter.next().value); // "bar"
console.log(mapIter.next().value); // "baz"
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
