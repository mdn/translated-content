---
title: Map.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Map/@@iterator
---

{{JSRef}}

<p class="seoSummary">O valor inicial da propriedade <strong><code>@@iterator</code></strong>
 é o mesmo objeto função que o valor inicial do método {{jsxref("Map.prototype.entries()", "entries")}}
</p>

{{EmbedInteractiveExample("pages/js/map-prototype-@@iterator.html")}}

## Sintaxe

```js
myMap[Symbol.iterator];
```

### Valor retornado

A função iterativa do map, que é a {{jsxref("Map.prototype.entries()", "entries()")}} por padrão

## Exemplos

### Usando o \[@@iterator]\()

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

### Usando o \[@@iterator]\() com for..of

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

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
