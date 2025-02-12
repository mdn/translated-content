---
title: Map.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

El método **`[Symbol.iterator]()`** de las instancias {{jsxref("Map")}} implementa el [protocolo de iteración](/es/docs/Web/JavaScript/Reference/Iteration_protocols) y permite a los objetos `Map` ser consumidos por la mayoría de sintaxis que esperan iterables, como lo es, la [sintaxis spread](/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax) y el bucle {{jsxref("Statements/for...of", "for...of")}}. Este método regresa un [objeto iterator de map](/es/docs/Web/JavaScript/Reference/Global_Objects/Iterator) que produce tuplas llave-valor del _map_ en orden de inserción.

El valor inicial de esta propiedad, es el mismo objeto de función que el valor inicial de la propiedad {{jsxref("Map.prototype.entries")}}.

{{InteractiveExample("JavaScript Demo: Map.prototype[Symbol.iterator]()")}}

```js interactive-example
const map1 = new Map();

map1.set("0", "foo");
map1.set(1, "bar");

const iterator1 = map1[Symbol.iterator]();

for (const item of iterator1) {
  console.log(item);
}
// Expected output: Array ["0", "foo"]
// Expected output: Array [1, "bar"]
```

## Sintaxis

```js-nolint
map[Symbol.iterator]()
```

### Parámetros

Ningúno.

### Valor devuelto

El mismo valor devuelto que {{jsxref("Map.prototype.entries()")}}: un nuevo [objeto iterator iterable](/es/docs/Web/JavaScript/Reference/Global_Objects/Iterator) que produce tuplas llave-valor del _map_.

## Ejemplo

### Iteración usando el bucle for...of

Note que raramente necesitará llamar este método directamente. La existencia de el método `[Symbol.iterator]()` hace a los objetos `Map` [iterables](/es/docs/Web/JavaScript/Reference/Iteration_protocols#el_protocolo_iterable), y sintaxis de iteracion como lo és el bucle `for...of` automáticamente llama a este método para obtener el iterador que se usará para iterar sobre el objeto.

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

for (const entry of myMap) {
  console.log(entry);
}
// ["0", "foo"]
// [1, "bar"]
// [{}, "baz"]

for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
// 0: foo
// 1: bar
// [Object]: baz
```

### Manualmente moviendo el iterador

Puedes llamar manualmente el método `next()` del objeto iterator para tener máximo control sobre el proceso de iteración.

```js
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap[Symbol.iterator]();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Map")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
- {{jsxref("Symbol.iterator")}}
- [Protocolos de Iteración](/es/docs/Web/JavaScript/Reference/Iteration_protocols)
