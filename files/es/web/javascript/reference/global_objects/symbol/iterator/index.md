---
title: Symbol.iterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/iterator
l10n:
  sourceCommit: 552892d8fc6707c47ae879aef32e6ac3023166ee
---

{{JSRef}}

El símbolo conocido como **`Symbol.iterator`** especifica el iterador por defecto para un objeto. Utilizado por [`for...of`](/es/docs/Web/JavaScript/Reference/Statements/for...of).

{{EmbedInteractiveExample("pages/js/symbol-iterator.html")}}

## Descripción

Siempre que un objeto necesite ser iterado (como al principio de un bucle `for..of`), se llama a su método `@@iterator` sin argumentos, y el **iterador** devuelto se utiliza para obtener los valores a iterar.

Algunos tipos incorporados tienen un comportamiento de iteración por defecto, mientras que otros tipos (como {{jsxref("Object")}}) no lo tienen. Los tipos incorporados con un método `@@iterador` son:

- {{jsxref("Array.@@iterator", "Array.prototype[@@iterator]()")}}
- {{jsxref("TypedArray.@@iterator", "TypedArray.prototype[@@iterator]()")}}
- {{jsxref("String.@@iterator", "String.prototype[@@iterator]()")}}
- {{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}
- {{jsxref("Set.@@iterator", "Set.prototype[@@iterator]()")}}

Véase también [Protocolos de iteración](/es/docs/Web/JavaScript/Reference/Iteration_protocols) para más información.

{{js_property_attributes(0,0,0)}}

## Ejemplos

### Iterables definidos por el usuario

Podemos hacer nuestros propios iterables así:

```js
const myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable]; // [1, 2, 3]
```

O los iterables pueden ser definidos directamente dentro de una clase u objeto usando una [propiedad computada](/es/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names):

```js
class Foo {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
}

const someObj = {
  *[Symbol.iterator]() {
    yield "a";
    yield "b";
  },
};

console.log(...new Foo()); // 1, 2, 3
console.log(...someObj); // 'a', 'b'
```

### Iterables formados incorrectamente

Si el método `@@iterator` de un iterable no devuelve un objeto iterador, entonces es un iterable formado incorrectamente. Si se utiliza como tal, es probable que se produzcan excepciones en tiempo de ejecución o un comportamiento erróneo:

```js example-bad
const nonWellFormedIterable = {}
nonWellFormedIterable[Symbol.iterator] = () => 1
[...nonWellFormedIterable] // TypeError: [] no es una función
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Symbol.iterator` en `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- [Protocolos de iteración](/es/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Array.@@iterator", "Array.prototype[@@iterator]()")}}
- {{jsxref("TypedArray.@@iterator", "TypedArray.prototype[@@iterator]()")}}
- {{jsxref("String.@@iterator", "String.prototype[@@iterator]()")}}
- {{jsxref("Map.@@iterator", "Map.prototype[@@iterator]()")}}
- {{jsxref("Set.@@iterator", "Set.prototype[@@iterator]()")}}
