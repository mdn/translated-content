---
title: Object.prototype.__defineGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__
---

{{JSRef}}

> **Advertencia:** Esta característica está obsoleta en favor de definir getters usando el [object initializer syntax](/es/docs/Web/JavaScript/Reference/Operators/Object_initializer) o la API {{jsxref("Object.defineProperty()")}}.
>
> En todo caso, como es ampliamente implementada y usada en la Web, es poco probable que los navegadores dejen de implementarla.

El método **`__defineGetter__`** enlaza una propiedad de un objeto a una función a ser llamada cuando esa propiedad es buscada.

## Sintaxis

```
obj.__defineGetter__(prop, func)
```

### Parámetros

- `prop`
  - : Un texto (string) que contiene el nombre de la propiedad para enlazar la función dada.
- `func`
  - : A function to be bound to a lookup of the specified property.

## Descripción

The `__defineGetter__` allows a {{jsxref("Operators/get", "getter", "", 1)}} to be defined on a pre-existing object.

## Ejemplos

```js
// Forma no-estándar y obsoleta

var o = {};
o.__defineGetter__("gimmeFive", function () {
  return 5;
});
console.log(o.gimmeFive); // 5

// Formas compatibles con el estándar

// Usando el operador get
var o = {
  get gimmeFive() {
    return 5;
  },
};
console.log(o.gimmeFive); // 5

// Usando Object.defineProperty
var o = {};
Object.defineProperty(o, "gimmeFive", {
  get: function () {
    return 5;
  },
});
console.log(o.gimmeFive); // 5
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Mira también

- [`Object.prototype.__defineSetter__()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- {{jsxref("Operators/get", "get")}} operator
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__lookupGetter__()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- [`Object.prototype.__lookupSetter__()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- [JS Guide: Defining Getters and Setters](/es/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters)
- [\[Blog Post\] Deprecation of \_\_defineGetter\_\_ and \_\_defineSetter\_\_](http://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/)
- [Error 647423 en Firefox](https://bugzil.la/647423)
