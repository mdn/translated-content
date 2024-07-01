---
title: Date.prototype.getDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDay
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
var Xmas95 = new Date("December 25, 1995 23:15:30");
var weekday = Xmas95.getDay();

console.log(weekday); // 1
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
