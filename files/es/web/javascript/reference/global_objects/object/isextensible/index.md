---
title: Object.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Object/isExtensible
tags:
  - ECMAScript5
  - JavaScript
  - JavaScript 1.8.5
  - Objeto
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Object/isExtensible
original_slug: Web/JavaScript/Referencia/Objetos_globales/Object/isExtensible
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

Los objetos son extendibles por defecto: ellos pueden tener propiedades nuevas agregadas a ellos, y (en motores que soportan {{jsxref("Object.proto", "__proto__")}} {{deprecated_inline}} la propiedad \_\_proto\_\_) pueden ser modificados. Un objeto puede ser marcado como no extendible usando {{jsxref("Object.preventExtensions()")}}, {{jsxref("Object.seal()")}}, o {{jsxref("Object.freeze()")}}.

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

| Especificación                                                                               | Estado                   | Comentario                                            |
| -------------------------------------------------------------------------------------------- | ------------------------ | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.13', 'Object.isExtensible')}}         | {{Spec2('ES5.1')}} | Definición inicial. Implementada en JavaScript 1.8.5. |
| {{SpecName('ES6', '#sec-object.isextensible', 'Object.isExtensible')}} | {{Spec2('ES6')}}     |                                                       |

## Compatibilidad con navegadores

{{Compat("javascript.builtins.Object.isExtensible")}}

## Ver también

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Reflect.isExtensible()")}}
