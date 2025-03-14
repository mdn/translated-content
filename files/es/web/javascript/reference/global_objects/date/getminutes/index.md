---
title: Date.prototype.getMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
---

{{JSRef}}

El método **`getMinutes()`** devuelve los minutos de la fecha especificada en función de la hora local.

## Sintaxis

```
dateObj.getMinutes()
```

### Parámetros

Ninguno.

### Devuelve

El valor devuelto por `getMinutes()` es un número entero entre 0 y 59.

## Ejemplos

### `Uso de getMinutes()`

La segunda declaración del código mostrado a continuación le asigna el valor 15 a la variable `minutos`, basado en el valor del {{jsxref("Global_Objects/Date", "Date")}} `objeto Xmas95`.

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var minutos = Xmas95.getMinutes();

console.log(minutos); // 15
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
