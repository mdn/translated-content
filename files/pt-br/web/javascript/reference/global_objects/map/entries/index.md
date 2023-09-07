---
title: Map.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Map/entries
---

{{JSRef}}

O método **`entries()`** retorna um novo objeto **[iterador](/pt-BR/docs/Web/JavaScript/Guide/Iterators_and_Generators)** que contém os pares `[key, value]` de cada elemento no objeto `Map` na ordem em que foram inseridos. Nesse caso em particular, esse objeto iterador também é iterativo. então o loop for-of pode ser usado. Quando o protocolo `[Symbol.iterator]` é usado, ele retorna uma função que, quando invocada, retorna o própio iterador.

{{EmbedInteractiveExample("pages/js/map-prototype-entries.html")}}

## Sintaxe

```js
entries();
```

### Valor retornado

Um novo objeto iterador {{jsxref("Map")}}.

## Exemplos

### Usando o entries()]

```js
let myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

let mapIter = myMap.entries();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]
```

## Especificação

{{Specifications}}

## Compatibilidade com navegadores

{{compat}}

## Veja também

- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
