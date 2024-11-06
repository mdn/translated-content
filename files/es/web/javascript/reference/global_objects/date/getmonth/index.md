---
title: Date.prototype.getMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMonth
---

{{JSRef}}

## Resumen

El método getMonth() devuelve el mes del objeto Date según la hora local, donde el número cero indica el primer mes del año.

## Sintaxis

```
dateObj.getMonth()
```

### Parámetros

Ninguno.

### Resultado

El valor devuelto por getMonth() es un entero entre 0 y 11, donde 0 corresponde a Enero, 1 a Febrero y así sucesivamente.

## Ejemplos

### Usando `getMonth()`

En el siguiente ejemplo, la segunda línea asigna el valor 11 a la variable mes, basado en el valor del objeto {{jsxref("Date")}} `Navidad`.

```js
var Navidad = new Date("December 25, 2014 23:15:30");
var mes = Navidad.getMonth();

console.log(mes); // 11
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
