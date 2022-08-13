---
title: Function.length
slug: Web/JavaScript/Reference/Global_Objects/Function/length
tags:
  - JavaScript
  - Propiedad
  - función
translation_of: Web/JavaScript/Reference/Global_Objects/Function/length
original_slug: Web/JavaScript/Referencia/Objetos_globales/Function/length
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

console.log((function()        {}).length); /* 0 */
console.log((function(a)       {}).length); /* 1 */
console.log((function(a, b)    {}).length); /* 2 etc. */
console.log((function(...args) {}).length); /* 0, resto de parámetros no se contemplan */
console.log((function(a, b = 1, c) {}).length); /* 1, solo parámetros antes del primero con un valor por defecto son contados */
```

## Especificaciones

| Especificación                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Estado                   | Comentario                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------- |
| ECMAScript 1st Edition.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Standard                 | Definición inicial. Implementado en JavaScript 1.1.           |
| `length` property of the {{jsxref("Global_Objects/Function", "Function")}} constructor: {{SpecName('ES5.1', '#sec-15.3.3.2', 'Function.length')}} `length` property of the {{jsxref("Global_Objects/Function", "Function")}} prototype object: {{SpecName('ES5.1', '#sec-properties-of-the-function-prototype-object', 'Function.length')}} `length` property of {{jsxref("Global_Objects/Function", "Function")}} instances: {{SpecName('ES5.1', '#sec-15.3.5.1', 'Function.length')}} | {{Spec2('ES5.1')}} |                                                               |
| `length` property of the {{jsxref("Global_Objects/Function", "Function")}} constructor: {{SpecName('ES6', '#sec-function.length', 'Function.length')}} `length` property of the {{jsxref("Global_Objects/Function", "Function")}} prototype object: {{SpecName('ES6', '#sec-15.3.4', 'Function.length')}} `length` property of {{jsxref("Global_Objects/Function", "Function")}} instances: {{SpecName('ES6', '#sec-function-instances-length', 'Function.length')}}                         | {{Spec2('ES6')}}     | El atributo `configurable` de esta propiedad ahora es `true`. |

## Compatibilidad con navegadores

{{Compat("javascript.builtins.Function.length")}}

## Ver también

- {{jsxref("Global_Objects/Function", "Función")}}
