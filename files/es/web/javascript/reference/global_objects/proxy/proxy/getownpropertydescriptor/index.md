---
title: handler.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor
---

{{JSRef}}El método **`handler.getOwnPropertyDescriptor()`** captura {{jsxref("Object.getOwnPropertyDescriptor()")}}.

## Sintaxis

```js
var p = new Proxy(target, {
  getOwnPropertyDescriptor: function (target, prop) {},
});
```

### Parámetros

El método `getOwnPropertyDescriptor` recibe los siguiente parámetros. `this` está asociado al handler del proxy.

- `target`
  - : El objeto destino.
- `prop`
  - : El nombre de la propiedad cuya descripción ha de ser devuelta.

### Valor Devuelto

El método `getOwnPropertyDescriptor` debe devolver un objeto o `undefined`.

## Descripción

El método **`handler.getOwnPropertyDescriptor()`** captura {{jsxref("Object.getOwnPropertyDescriptor()")}}.

### Intercepciones

Este método intercepta las siguientes operaciones:

- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}

### Invariantes

Si los siguientes invariantes son violados, el proxy lanzará {{jsxref("TypeError")}}:

- `getOwnPropertyDescriptor` debe devolver un objeto o `undefined`.
- No puede devolver que una propiedad no existe si está presente en el objeto como no configurable.
- No puede devolver que una propiedad no existe si esta está presente como una propiedad propia del objeto destino y el objeto no es extensible.
- No puede devolver que una propuedad existe, si esta no está presente en el objeto destino y el objeto no es extensible.
- No puede devolver que una propiedad es no configurable si esta no existe en el objeto destino o si existe pero sí es configurable.
- El resultado de `Object.getOwnPropertyDescriptor(target)` puede ser aplicado al objeto destino mediante `Object.defineProperty` y no lanzará ningún tipo de excepción.

## Ejemplos

El siguiente código captura {{jsxref("Object.getOwnPropertyDescriptor()")}}.

```js
var p = new Proxy(
  { a: 20 },
  {
    getOwnPropertyDescriptor: function (target, prop) {
      console.log("called: " + prop);
      return { configurable: true, enumerable: true, value: 10 };
    },
  },
);

console.log(Object.getOwnPropertyDescriptor(p, "a").value); // "called: a"
// 10
```

El siguiente código viola uno de los invariantes definidos previamente.

```js
var obj = { a: 10 };
Object.preventExtensions(obj);
var p = new Proxy(obj, {
  getOwnPropertyDescriptor: function (target, prop) {
    return undefined;
  },
});

Object.getOwnPropertyDescriptor(p, "a"); // TypeError is thrown
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
