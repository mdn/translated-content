---
title: Object.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
tags:
  - ECMAScript5
  - JavaScript
  - Objeto
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
original_slug: Web/JavaScript/Referencia/Objetos_globales/Object/getPrototypeOf
---
{{JSRef("Global_Objects", "Object")}}

## Resumen

El método **`Object.getPrototypeOf()`** devuelve el prototipo (es decir, el valor de la propiedad interna `[[Prototype]]`) del objeto especificado.

## Sintaxis

```
Object.getPrototypeOf(obj)
```

### Parámetros

- `obj`
  - : El objeto cuyo prototipo va a ser devuelto.

### Valor Devuelto

El prototipo del objeto dado. Si no existen propiedades heredadas se devolverá {{jsxref("null")}}.

## Ejemplos

```js
var proto = {};
var obj= Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```

## Notas

En ES5, lanzará una excepción {{jsxref("Global_Objects/TypeError", "TypeError")}} si el parámetro `obj` no es un objeto. en ES6, El parámetro será forzado a un {{jsxref("Global_Objects/Object", "Object")}}.

```js
> Object.getPrototypeOf('foo')
TypeError: "foo" is not an object  // ES5 code
> Object.getPrototypeOf('foo')
String.prototype                   // ES6 code
```

## Especificaciones

| Especificación                                                                                   | Estado                   | Comentario          |
| ------------------------------------------------------------------------------------------------ | ------------------------ | ------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.2', 'Object.getPrototypeOf')}}             | {{Spec2('ES5.1')}} | Definición inicial. |
| {{SpecName('ES6', '#sec-object.getprototypeof', 'Object.getProtoypeOf')}} | {{Spec2('ES6')}}     |                     |

## Compatibilidad con navegadores

{{Compat("javascript.builtins.Object.getPrototypeOf")}}

## Mira también

- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}} {{experimental_inline}}
- John Resig's post on [getPrototypeOf](http://ejohn.org/blog/objectgetprototypeof/)
- {{jsxref("Object.prototype.__proto__")}}
- {{jsxref("Reflect.getPrototypeOf()")}}
