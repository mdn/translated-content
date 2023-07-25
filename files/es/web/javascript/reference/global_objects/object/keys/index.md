---
title: Object.keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

El método estático **`Object.keys()`** devuelve un arreglo de propiedades enumerables propias de un objeto dado.

{{EmbedInteractiveExample("pages/js/object-keys.html")}}

## Sintaxis

```js-nolint
Object.keys(obj)
```

### Parámetros

- `obj`
  - : Un objeto.

### Valor devuelto

Un arreglo de strings que representan todas las propiedades del objeto.

## Descripción

`Object.keys` devuelve un arreglo cuyos elementos son cadenas correspondientes a las propiedades enumerables que se encuentran directamente en el `object`. Esto es lo mismo que iterar con un bucle {{jsxref("Statements/for...in", "for...in")}}, excepto que un bucle `for...in` también enumera las propiedades en la cadena de prototipo. El orden del arreglo devuelto por `Object.keys()` es el mismo que proporciona el bucle {{jsxref("Statements/for...in", "for...in")}}.

Si necesita los valores de la propiedad, use {{jsxref("Object.values()")}} en su lugar. Si necesita ambos las claves de la propiedad como sus valores, use {{jsxref("Object.entries()")}} en su lugar

## Ejemplos

### Usando Object.keys()

```js
// Arreglo sencillo
const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // ['0', '1', '2']

// Arreglo como objeto
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // ['0', '1', '2']

// arreglo como objeto con nombres ordenados aleatoriamente
const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj)); // ['2', '7', '100']

// getFoo es una propiedad no enumerable
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = 1;
console.log(Object.keys(myObj)); // ['foo']
```

Si quieres _todas_ las propiedades, incluso las no enumerables, mira {{jsxref("Object.getOwnPropertyNames()")}}.

### Usando Object.keys() en primitivos

Los argumentos que no son objetos son [objetos forzados](/es/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion). Únicamente las cadenas pueden tener propiedades enumerables propias, mientras que todas las demás primitivas devuelven un arreglo vacío.

```js
// Las cadenas de texto tienen índices como propiedades propias enumerables
console.log(Object.keys("foo")); // ['0', '1', '2']

// Otros primitivos no tienen propiedas propias
console.log(Object.keys(100)); // []
```

> **Nota:** En ES5, si el argumento para `Object.keys()` no es un objeto, causará {{jsxref("TypeError")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Object.keys` en `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- [Enumerabilidad y posesión de propiedades](/es/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.entries()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.keys()")}}
