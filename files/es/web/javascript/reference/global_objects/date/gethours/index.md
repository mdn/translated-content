---
title: Date.prototype.getHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getHours
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
var Xmas95 = new Date("December 25, 1995 23:15:30");
var hours = Xmas95.getHours();

console.log(hours); // 23
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver tambien

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
