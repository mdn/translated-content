---
title: Date.prototype.getHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getHours
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getHours
original_slug: Web/JavaScript/Referencia/Objetos_globales/Date/getHours
---
{{JSRef}}

El método **`getHours()`** retorna la hora de la fecha especificada, de acuerdo a la hora local.

## Sintaxis

```
dateObj.getHours()
```

### Valor de retorno

Un número entero, entre 0 y 23, representando la hora de la fecha dada de acuerdo a la hora local.

## Ejemplos

### Usando `getHours()`

La segunda sentencia abajo asigna el valor 23 a la variable hours, basado en el valor del objeto {{jsxref("Global_Objects/Date", "Date")}} `Xmas95`.

```js
var Xmas95 = new Date('December 25, 1995 23:15:30');
var hours = Xmas95.getHours();

console.log(hours); // 23
```

## Especificaciones

| Especificación                                                                                               | Estado                       | Comentario                                          |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | --------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Definicion inicial. Implementado en JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.18', 'Date.prototype.getHours')}}                     | {{Spec2('ES5.1')}}     |                                                     |
| {{SpecName('ES6', '#sec-date.prototype.gethours', 'Date.prototype.getHours')}}     | {{Spec2('ES6')}}         |                                                     |
| {{SpecName('ESDraft', '#sec-date.prototype.gethours', 'Date.prototype.getHours')}} | {{Spec2('ESDraft')}} |                                                     |

## Compatibilidad de navegador

{{Compat("javascript.builtins.Date.getHours")}}

## Ver tambien

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
