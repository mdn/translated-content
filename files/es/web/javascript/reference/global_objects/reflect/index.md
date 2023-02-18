---
title: Reflect
slug: Web/JavaScript/Reference/Global_Objects/Reflect
---

{{JSRef}}

**Reflect** es un objecto incorporado que proporciona metodos para interceptar operaciones de javascript. Los métodos son los mismos que los de [proxy handlers](/es/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler). `Reflect` no es un objeto de funciones y por lo tanto no puede ser construido.

## Descripción

A diferencia de la mayoria de los objetos globales, `Reflect` no es un constructor. No puede ser instanciado con un [operador](/es/docs/Web/JavaScript/Reference/Operators/new) [`new`](/es/docs/Web/JavaScript/Reference/Operators/new) o invocando el objecto `Reflect` como una función. Todas las propiedades y métodos de `Reflect` son estáticos (igual que los del objeto {{jsxref("Math")}}).

## Métodos

El objeto `Reflect` proporciona las siguientes funciones estáticas con los mismos nombres de los métodos de [proxy handler](/es/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler). Algunos de estos métodos son correspondientes a los métodos de {{jsxref("Object")}}.

- {{jsxref("Reflect.apply()")}}
  - : Calls a target function with arguments as specified by the `args` parameter. See also {{jsxref("Function.prototype.apply()")}}.
- {{jsxref("Reflect.construct()")}}
  - : The [`new` operator](/es/docs/Web/JavaScript/Reference/Operators/new) as a function. Equivalent to calling `new target(...args)`.
- {{jsxref("Reflect.defineProperty()")}}
  - : Similar to {{jsxref("Object.defineProperty()")}}. Returns a {{jsxref("Boolean")}}.
- {{jsxref("Reflect.deleteProperty()")}}
  - : The [`delete` operator](/es/docs/Web/JavaScript/Reference/Operators/delete) as a function. Equivalent to calling `delete target[name]`.
- {{jsxref("Reflect.get()")}}
  - : A function that returns the value of properties.
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
  - : Similar to {{jsxref("Object.getOwnPropertyDescriptor()")}}. Returns a property descriptor of the given property if it exists on the object, {{jsxref("undefined")}} otherwise.
- {{jsxref("Reflect.getPrototypeOf()")}}
  - : Same as {{jsxref("Object.getPrototypeOf()")}}.
- {{jsxref("Reflect.has()")}}
  - : The [`in` operator](/es/docs/Web/JavaScript/Reference/Operators/in) as function. Returns a boolean indicating whether an own or inherited property exists.
- {{jsxref("Reflect.isExtensible()")}}
  - : Same as {{jsxref("Object.isExtensible()")}}.
- {{jsxref("Reflect.ownKeys()")}}
  - : Returns an array of the target object's own (not inherited) property keys.
- {{jsxref("Reflect.preventExtensions()")}}
  - : Similar to {{jsxref("Object.preventExtensions()")}}. Returns a {{jsxref("Boolean")}}.
- {{jsxref("Reflect.set()")}}
  - : A function that assigns values to properties. Returns a {{jsxref("Boolean")}} that is `true` if the update was successful.
- {{jsxref("Reflect.setPrototypeOf()")}}
  - : A function that sets the prototype of an object.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## También ver

- The {{jsxref("Proxy")}} global object.
- The {{jsxref("Proxy.handler", "handler")}} object.
