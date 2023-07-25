---
title: Object.hasOwn()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwn
l10n:
  sourceCommit: e95c6906f33470e3c0123404da299f8939daa9db
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
  - : El nombre del {{jsxref("String")}} ó [Symbol](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol) de la propiedad a probar.

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
Object.hasOwn(example, "prop"); // false - 'prop' no ha sido definido

example.prop = "existe";
Object.hasOwn(example, "prop"); // true - 'prop' ha sido definido

example.prop = null;
Object.hasOwn(example, "prop"); // true - la propiedad existe con valor nulo

example.prop = undefined;
Object.hasOwn(example, "prop"); // true - la propiedad existe con valor de indefinido
```

### Propiedades directas vs. heredadas

El siguiente ejemplo diferencía entre propiedades directas y propiedades heredadas mediante la cadena de prototipos:

```js
const example = {};
example.prop = "existe";

// `hasOwn` solo devolverá verdadero para propiedades directas:
Object.hasOwn(example, "prop"); // Devuelve verdadero
Object.hasOwn(example, "toString"); // Devuelve falso
Object.hasOwn(example, "hasOwnProperty"); // Devuelve falso

// El operador `in` devolverá verdadero para propiedades directas o heredadas:
"prop" in example; // Devuelve verdadero
"toString" in example; // Devuelve verdadero
"hasOwnProperty" in example; // Devuelve verdadero
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
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
Object.hasOwn(fruits, 3); // true ('Orange')
Object.hasOwn(fruits, 4); // false - not defined
```

### Casos problematicos de hasOwnProperty

Esta sección demuestra que `hasOwn()` es inmune a los problemas que afectan `hasOwnProperty`. En primer lugar, puede usarse con objetos que han reimplementado `hasOwnProperty()`:

```js
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: "Los dragones están fuera de la oficina",
};

if (Object.hasOwn(foo, "bar")) {
  console.log(foo.bar); //true - la reimplementación de hasOwnProperty() no afecta a Object
}
```

También se puede usar para probar objetos creados usando
{{jsxref("Object.create()","Object.create(null)")}}. Estos no heredan de `Object.prototype`, por lo que `hasOwnProperty()` es inaccesible.

```js
const foo = Object.create(null);
foo.prop = "existe";
if (Object.hasOwn(foo, "prop")) {
  console.log(foo.prop); //true - funciona independientemente de cómo se crea el objeto.
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Object.hasOwn` en `core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- [Enumerabilidad y pertenencia de las propiedades](/es/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [Guía de JavaScript: Herencia revisada](/es/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
