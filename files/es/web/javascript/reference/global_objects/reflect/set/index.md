---
title: Reflect.set()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/set
---

{{JSRef}}

El método estático **`Reflect.set()`** funciona igual que asignar una propiedad en un objeto.

## Sintaxis

```
Reflect.set(target, propertyKey, value[, receiver])
```

### Parámetros

- `target`
  - : El objeto en el cual se va a asignar una propiedad.
- `propertyKey`
  - : El nombre de la propiedad a asignar.
- value
  - : El valor de la propiedad.
- receiver
  - : El valor de `this` para usar en la llamada a `target` si se encuentra un setter.

### Valor de retorno

Un {{jsxref("Boolean")}} indicando si se pudo o no asignar la propiedad.

### Excepciones

Un {{jsxref("TypeError")}}, si `target` no es un {{jsxref("Object")}}.

## Descripción

El método `Reflect.set` permite asignar una propiedad a un objeto. It does property assignment and is like the [property accessor](/es/docs/Web/JavaScript/Reference/Operators/Property_Accessors) syntax as a function.

## Ejemplos

### `Uso de Reflect.set()`

```js
// Objeto
var obj = {};
Reflect.set(obj, "prop", "value"); // true
obj.prop; // "value"

// Arreglo
var arr = ["duck", "duck", "duck"];
Reflect.set(arr, 2, "goose"); // true
arr[2]; // "goose"

// Puede truncar un arreglo.
Reflect.set(arr, "length", 1); // true
arr; // ["duck"];

// Con solo un argumento, propertyKey y value son "undefined".
var obj = {};
Reflect.set(obj); // true
Reflect.getOwnPropertyDescriptor(obj, "undefined");
// { value: undefined, writable: true, enumerable: true, configurable: true }
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Reflect")}}
- [Property accessors](/es/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
