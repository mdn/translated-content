---
title: Object.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Object/preventExtensions
---

{{JSRef}}

El método **`Object.preventExtensions()`** previene que nuevas propiedades sean agregadas a un objeto (p.e. previene la extensión futuras al objeto).

## Sintaxis

```
Object.preventExtensions(obj)
```

### Parametros

- `obj`
  - : El objeto que debería hacerse inextendible.

## Descripción

Un objeto es extendible si propiedades nuevas pueden ser agregadas a este. Object.preventExtensions() marca un objecto como no extendible, así nunca más tendrá propiedades más allá de las tenía en el momento en que fue marcado como no extendible. Note que las propiedades de un objeto no-extendible, en general, aún pueden ser eliminadas. Los intentos de agregar propiedades nuevas a un objeto no-extendible fallarán, ya sea de manera silenciosa o arrojando una excepción {{jsxref("TypeError")}} (comunmente, pero no de manera exclusiva, en {{jsxref("Functions_and_function_scope/Strict_mode", "strict mode", "", 1)}}).

`Object.preventExtensions()` solo previene la adición de propiedades propias. Las propiedades aún pueden ser agregadas a object.prototype. Sin embargo, llamar `Object.preventExtensions()` sobre un objeto tambien prevendrá extensiones sobre la propiedad [`Object.prototype.__proto__`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}}.

Si hay una manera de cambiar un objeto extendible a uno no-extendible, hay una manera de hacer lo opuesto en ECMAScript 5.

## Ejemplos

```js
// Object.preventExtensions regresa el objeto hecho no-extendible.
var obj = {};
var obj2 = Object.preventExtensions(obj);
obj === obj2; // true

// Los Objetos son extendibles por defecto.
var empty = {};
Object.isExtensible(empty); // === true

// ...pero pueden ser cambiados.
Object.preventExtensions(empty);
Object.isExtensible(empty); // === false

// Object.defineProperty arroja una excepción cuando se agrega
// una propiedad nueva a un objeto no-extendible.
var nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, "new", { value: 8675309 }); // arroja TypeError

// En modo estricto, tratar de agregar propiedades nuevas
// a un objeto no-extensible arroja una excepción TypeError.
function fail() {
  "use strict";
  nonExtensible.newProperty = "FAIL"; // arroja TypeError
}
fail();

// EXTENSION (solo funciona en motores que soporten __proto__
// (el cual esta obsoleto. Usar Object.getPrototypeOf en su lugar)):
// La propiedad prototype de un objeto no-extendible es inmutable.
var fixed = Object.preventExtensions({});
fixed.__proto__ = { oh: "hai" }; // arroja TypeError
```

## Notas

En ES5, si el argumento pasado a este método no es un objeto (primitivo), entonces causará un {{jsxref("TypeError")}}. En ES6, un argumento no-objeto será tratado como si fuera un objeto ordinario no-extendible, simplemente lo regresa.

```js
Object.preventExtensions(1);
// TypeError: 1 is not an object (ES5 code)

Object.preventExtensions(1);
// 1                             (ES6 code)
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Reflect.preventExtensions()")}}
