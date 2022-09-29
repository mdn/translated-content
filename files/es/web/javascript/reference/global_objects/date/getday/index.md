---
title: Date.prototype.getDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDay
tags:
  - Date
  - JavaScript
  - Prototype
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getDay
original_slug: Web/JavaScript/Referencia/Objetos_globales/Date/getDay
---
{{JSRef}}

El método **`getDay()`** devuelve el día de la semana de la fecha especificada en función de la fecha local; siendo 0 (Domingo) el primer día.

## Sintaxis

```
dateObj.getDay()
```

### Parámetros

Ninguno.

### Valor devuelto

El valor devuelto por `getDay()` es un entero correspondiente al día de la semana; siendo 0 (Domingo) el primer día, 1 (Lunes) el segundo, etcétera.

## Ejemplos

### `Usos de getDay()`

La segunda sentencia asigna el valor 1 a `weekday`, basado en el valor del objeto Xmas95 {{jsxref("Date")}}. December 25, 1995, que corresponde a Lunes.

```js
var Xmas95 = new Date('December 25, 1995 23:15:30');
var weekday = Xmas95.getDay();

console.log(weekday); // 1
```

## Especificaciones

| Especificación                                                                                       | Estado                   | Comentario                                  |
| ---------------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------- |
| {{SpecName('ES6', '#sec-date.prototype.getday', 'Date.prototype.getDay')}} | {{Spec2('ES6')}}     |                                             |
| {{SpecName('ES5.1', '#sec-15.9.5.16', 'Date.prototype.getDay')}}                 | {{Spec2('ES5.1')}} |                                             |
| {{SpecName('ES1')}}                                                                             | {{Spec2('ES1')}}     | Definición inicial. Implementado en JS 1.0. |

## Compatibilidad con navegadores

{{Compat("javascript.builtins.Date.getDay")}}

## Ver también

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
