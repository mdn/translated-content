---
title: Function.length
slug: Web/JavaScript/Reference/Global_Objects/Function/length
---

{{JSRef("Global_Objects", "Function")}}

## Sumario

La propiedad **`length`** especifica el número de argumentos esperados por la función.

{{js_property_attributes(0,0,1)}}

## Descripción

`length` es la propiedad de una función objeto, e indica el número de argumentos que una función requiere, por ejemplo, el número de parámetros formales. Este número no incluye {{jsxref("rest_parameters", "rest parameter", "", 1)}}. En cambio, {{jsxref("Functions_and_function_scope/arguments/length", "arguments.length")}} es local a una función y aporta el número de argumentos actuales pasados a una función.

### Propiedades de la `Función` constructora

El {{jsxref("Global_Objects/Function", "Function")}} constructor en sí mismo es {{jsxref("Global_Objects/Function", "Function")}} un objeto. Sú `propiedad length` tiene el valor 1. Los atributos son: Grabable: `false`, Enumerable: `false`, Configurable: `true`.

### Propiedad de la `Función` prototype object

La propiedad length del {{jsxref("Global_Objects/Function", "Function")}} objeto prototype tiene el valor 0.

## Ejemplos

```js
console.log(Function.length); /* 1 */

console.log(function () {}.length); /* 0 */
console.log(function (a) {}.length); /* 1 */
console.log(function (a, b) {}.length); /* 2 etc. */
console.log(
  function (...args) {}.length,
); /* 0, resto de parámetros no se contemplan */
console.log(
  function (a, b = 1, c) {}.length,
); /* 1, solo parámetros antes del primero con un valor por defecto son contados */
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Global_Objects/Function", "Función")}}
