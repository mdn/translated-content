---
title: Object.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Object/isExtensible
---

{{JSRef}}

El método **`Object.isExtensible()`** determina si un objeto es extendible (si puede tener propiedades nuevas agregadas a éste).

## Síntaxis

```
Object.isExtensible(obj)
```

### Parametros

- `obj`
  - : El objeto a ser revisado.

## Descripción

Los objetos son extendibles por defecto: ellos pueden tener propiedades nuevas agregadas a ellos, y (en motores que soportan [`Object.prototype.__proto__`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{deprecated_inline}} la propiedad \_\_proto\_\_) pueden ser modificados. Un objeto puede ser marcado como no extendible usando {{jsxref("Object.preventExtensions()")}}, {{jsxref("Object.seal()")}}, o {{jsxref("Object.freeze()")}}.

## Ejemplos

```js
// Los Objetos nuevos son extendibles (por defecto).
var empty = {};
Object.isExtensible(empty); // === true

// ...pero eso puede cambiar.
Object.preventExtensions(empty);
Object.isExtensible(empty); // === false

// Objetos sellados por definición son no-extendibles.
var sealed = Object.seal({});
Object.isExtensible(sealed); // === false

// Objetos congelados también por definición son no-extendibles.
var frozen = Object.freeze({});
Object.isExtensible(frozen); // === false
```

## Notas

En ES5, si el argumento pasado a éste método no es un objeto (primitivo), entonces regresará {{jsxref("TypeError")}}. En ES6, un no-objeto pasado como argumento será tratado como si fuera un objeto no-extendible ordinario, simplemente regresa `false`.

```js
Object.isExtensible(1);
// TypeError: 1 is not an object (ES5 code)

Object.isExtensible(1);
// false                         (ES6 code)
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Reflect.isExtensible()")}}
