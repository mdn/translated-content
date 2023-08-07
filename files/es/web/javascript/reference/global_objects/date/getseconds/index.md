---
title: Date.prototype.getSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
---

{{JSRef}}

El método **`getSeconds()`** devuelve los segundos en la fecha especificada de acuerdo a la hora local.

{{EmbedInteractiveExample("pages/js/date-getseconds.html")}}

## Sintaxis

```
dateObj.getSeconds()
```

### Valor devuelto

Un número entero, entro 0 y 59, representando los segundos en la fecha dada de acuerdo a la hora local.

## Ejemplos

### Utilizando `getSeconds()`

La segunda sentencia asigna el valor 30 a la variable `seconds`, en base al valor del objeto {{jsxref("Global_Objects/Date", "Date")}} `Xmas95`.

```js
var Xmas95 = new Date("December 25, 1995 23:15:30");
var seconds = Xmas95.getSeconds();

console.log(seconds); // 30
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
