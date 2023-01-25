---
title: Object.hasOwn()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwn
page-type: javascript-static-method
tags:
  - JavaScript
  - Method
  - Object
  - hasOwn
  - Polyfill
browser-compat: javascript.builtins.Object.hasOwn
---

{{JSRef}}

El método estático **`Object.hasOwn()`** devuelve `true` si el objeto especificado tiene la propiedad indicada como propiedad _propia_. Si la propiedad es heredada, o no existe, el método devuelve `false`.

> **Nota:** `Object.hasOwn()` está pensada como un reemplazo de {{jsxref("Object.prototype.hasOwnProperty()")}}.

{{EmbedInteractiveExample("pages/js/object-hasown.html")}}

## Sintaxis

```js-nolint
Object.hasOwn(obj, prop)
```

### Parametros

- `obj`
  - : La instancia del objeto JavaScript a probar.
- `prop`
  - : El nombre del {{jsxref("String")}} ó [Symbol](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) de la propiedad a probar.

### Valor de retorno del método

`true` si el objeto tiene definido directamente la propiedad especificada. De lo contrario `false`

## Descripción

El método **`Object.hasOwn()`** devuelve `true` si la propiedad especificada es una propiedad directa del objeto — incluso si el valor de la propiedad es `null` o `undefined`.
El método devuelve `false` si la propiedad es heredada, o no ha sido declarado en absoluto.
A diferencia del operador {{jsxref("Operators/in", "in")}}, este método no comprueba la propiedad especificada en la cadena de prototipos del objeto.

Se recomienda sobre {{jsxref("Object.prototype.hasOwnProperty()")}} porque funciona para objetos creados usando `Object.create(null)` y con objetos que anulan el método `hasOwnProperty()`. Si bien es posible solucionar estos problemas llamando a `Object.prototype.hasOwnProperty()` en un objeto externo, `Object.hasOwn()` es mas intuitivo.

## Ejemplos

### Usando hasOwn para probar la existencia de una propiedad

El siguiente código muestra como determinar si el objeto `example` contiene una propiedad llamada `prop`.

```js
const example = {};
Object.hasOwn(example, 'prop');   // false - 'prop' has not been defined

example.prop = 'exists';
Object.hasOwn(example, 'prop');   // true - 'prop' has been defined

example.prop = null;
Object.hasOwn(example, 'prop');   // true - own property exists with value of null

example.prop = undefined;
Object.hasOwn(example, 'prop');   // true - own property exists with value of undefined
```

### Propiedades directas vs. heredadas

El siguiente ejemplo diferencía entre propiedades directas y propiedades heredadas mediante la cadena de prototipos:

```js
const example = {};
example.prop = 'exists';

// `hasOwn` will only return true for direct properties:
Object.hasOwn(example, 'prop');             // returns true
Object.hasOwn(example, 'toString');         // returns false
Object.hasOwn(example, 'hasOwnProperty');   // returns false

// The `in` operator will return true for direct or inherited properties:
'prop' in example;                          // returns true
'toString' in example;                      // returns true
'hasOwnProperty' in example;                // returns true
```

### Iterando sobre las propiedades de un objeto

Para iterar sobre las propiedades enumerables de un objeto, _debe_ usar:

```js
const example = { foo: true, bar: true };
for (const name of Object.keys(example)) {
  // …
}
```

Pero si necesita usar `for...in`, se puede usar `Object.hasOwn()` para omitir las propiedades heredadas:

```js
const example = { foo: true, bar: true };
for (const name in example) {
  if (Object.hasOwn(example, name)) {
    // …
  }
}
```

### Comprobando si el índice de un arreglo existe

Los elementos de un {{jsxref("Array")}} son definidos como propiedades directas, asi que se puede usar el método `hasOwn()` para comprobar si existe un índice en particular:

```js
const fruits = ['Apple', 'Banana', 'Watermelon', 'Orange'];
Object.hasOwn(fruits, 3);   // true ('Orange')
Object.hasOwn(fruits, 4);   // false - not defined
```

### Casos problematicos de hasOwnProperty

Esta sección demuestra que `hasOwn()` es inmune a los problemas que afectan `hasOwnProperty`. En primer lugar, puede usarse con objetos que han reimplementado `hasOwnProperty()`:

```js
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: 'The dragons be out of office',
};

if (Object.hasOwn(foo, 'bar')) {
  console.log(foo.bar); //true - reimplementation of hasOwnProperty() does not affect Object
}
```

También se puede usar para probar objetos creados usando
{{jsxref("Object.create()","Object.create(null)")}}. Estos no heredan de `Object.prototype`, por lo que `hasOwnProperty()` es inaccesible.

```js
const foo = Object.create(null);
foo.prop = 'exists';
if (Object.hasOwn(foo, 'prop')) {
  console.log(foo.prop); //true - works irrespective of how the object is created.
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill of `Object.hasOwn` in `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- [Enumerability and ownership of properties](/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [JavaScript Guide: Inheritance revisited](/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
