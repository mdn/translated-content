---
title: Set.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Set/entries
---

{{JSRef}}

El método **`entries()`** devuelve un nuevo objeto de tipo `Iterator` que contiene **un array de tuplas `[value, value]`** por cada elemento en el `Set` original, manteniendo el orden de inserción. En los objetos de tipo `Set` no existe una clave key como ocurre en los objetos de tipo `Map`. Sin embargo, para mantener una API similar a la de los objetos de tipo `Map`, cada _entry_ contiene el mismo valor para su clave y valor, devolviendo por tanto un array de tuplas `[value, value]`.

{{InteractiveExample("JavaScript Demo: Set.prototype.entries()")}}

```js interactive-example
const set1 = new Set();
set1.add(42);
set1.add("forty two");

const iterator1 = set1.entries();

for (const entry of iterator1) {
  console.log(entry);
  // Expected output: Array [42, 42]
  // Expected output: Array ["forty two", "forty two"]
}
```

El código de este ejemplo interactivo esta almacenado en un repositorio de GitHub. Si quieres contribuir al proyecto de ejemplos interativos, simplemente clona <https://github.com/mdn/interactive-examples> y envíanos una pull request.

## Sintaxis

```
mySet.entries()
```

### Valor de retorno

Un nuevo objeto de tipo `Iterator` que contiene un array de tuplas `[value, value]` por cada elemento en el `Set` original, en orden de inserción.

## Ejemplos

### Usando el método `entries`

```js
var mySet = new Set();
mySet.add("foobar");
mySet.add(1);
mySet.add("baz");

var setIter = mySet.entries();

console.log(setIter.next().value); // ["foobar", "foobar"]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // ["baz", "baz"]
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Set.prototype.keys()")}}
- {{jsxref("Set.prototype.values()")}}
