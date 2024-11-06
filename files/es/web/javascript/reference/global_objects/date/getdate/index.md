---
title: Date.prototype.getDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDate
---

{{JSRef}}

El método **`getDate()`** devuelve el día del mes para la fecha especificada de acuerdo con la hora local.

## Sintaxis

```
dateObj.getDate()
```

### Parámetros

Ninguno.

### Valor de retorno

El valor devuelto por `getDate()` es un número entero, entre 1 y 31, que representa el día del mes para la fecha dada según la hora local.

## Ejemplos

### Uso de `getDate()`

La segunda instrucción asigna el valor 25 a la variable `day`, en función del valor del objeto {{jsxref("Date")}} `Xmas95`.

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var day = Xmas95.getDate();

console.log(day); // 25
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
