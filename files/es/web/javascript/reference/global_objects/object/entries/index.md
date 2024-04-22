---
title: Object.entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
---

{{JSRef}}

El método **`Object.entries()`** devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado, en el mismo orden que es proporcionado por {{jsxref("Sentencias/for...in", "for...in")}} (La diferencia es que un bucle for-in enumera las propiedades en la cadena de prototipos).

## Sintaxis

```
Object.entries(obj)
```

### Parámetros

- `obj`
  - : The object whose enumerable own property `[key, value]` pairs are to be returned.

### Valor de retorno

An array of the given object's own enumerable property `[key, value]` pairs.

## Descripción

`Object.entries()` returns an array whose elements are arrays corresponding to the enumerable property `[key, value]` pairs found directly upon `object`. The ordering of the properties is the same as that given by looping over the property values of the object manually.

## Ejemplos

```js
var obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
var an_obj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.entries(an_obj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is property which isn't enumerable
var my_obj = Object.create(
  {},
  {
    getFoo: {
      value: function () {
        return this.foo;
      },
    },
  },
);
my_obj.foo = "bar";
console.log(Object.entries(my_obj)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// iterate through key-value gracefully
var obj = { a: 5, b: 7, c: 9 };
for (var [key, value] of Object.entries(obj)) {
  console.log(key + " " + value); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([key, value]) => {
  console.log(key + " " + value); // "a 5", "b 7", "c 9"
});
```

### Converting an `Object` to a `Map`

The {{jsxref("Map", "new Map()")}} constructor accepts an iterable of `entries`. With `Object.entries`, you can easily convert from {{jsxref("Object")}} to {{jsxref("Map")}}:

```js
var obj = { foo: "bar", baz: 42 };
var map = new Map(Object.entries(obj));
console.log(map); // Map { foo: "bar", baz: 42 }
```

## Polyfill

To add compatible `Object.entries` support in older environments that do not natively support it, you can find a Polyfill in the [tc39/proposal-object-values-entries](https://github.com/tc39/proposal-object-values-entries) or in the [es-shims/Object.entries](https://github.com/es-shims/Object.entries) repositories.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- [Enumerability and ownership of properties](/es/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}} {{experimental_inline}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
