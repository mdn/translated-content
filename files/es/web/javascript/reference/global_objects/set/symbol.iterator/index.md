---
title: Set.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator
original_slug: Web/JavaScript/Reference/Global_Objects/Set/@@iterator
---

{{JSRef}}

El valor inicial de la propiedad **`@@iterator`**, es la misma función objeto que el valor inicial de la propiedad {{jsxref("Set.prototype.values()", "values")}}.

{{InteractiveExample("JavaScript Demo: Set.prototype[Symbol.iterator]()")}}

```js interactive-example
const set1 = new Set();

set1.add(42);
set1.add("forty two");

const iterator1 = set1[Symbol.iterator]();

console.log(iterator1.next().value);
// Expected output: 42

console.log(iterator1.next().value);
// Expected output: "forty two"
```

El código fuente de este ejemplo interactivo lo puedes encontrar en el repositorio de Github. Si quieres contribuir con más ejemplos interactivos, por favor clona <https://github.com/mdn/interactive-examples> y envíanos una pull request.

## Sintaxis

```
mySet[Symbol.iterator]
```

### Valor retornado

La función **iteradora** `Set` , la cuál es {{jsxref("Set.prototype.values()", "values()")}} por defecto.

## Ejemplos

### Usando `[@@iterator]()`

```js
const mySet = new Set();
mySet.add("0");
mySet.add(1);
mySet.add({});

const setIter = mySet[Symbol.iterator]();

console.log(setIter.next().value); // "0"
console.log(setIter.next().value); // 1
console.log(setIter.next().value); // Object
```

### Usando `[@@iterator]()` con `for..of`

```js
const mySet = new Set();
mySet.add("0");
mySet.add(1);
mySet.add({});

for (const v of mySet) {
  console.log(v);
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{jsxref("Set.prototype.entries()")}}
- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
