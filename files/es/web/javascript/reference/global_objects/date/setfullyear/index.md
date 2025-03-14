---
title: Date.prototype.setFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setFullYear
---

{{JSRef}}

El método **`setFullYear()`** fija el año completo para una fecha específica de acuerdo a la zona horaria local. Devuelve un nuevo valor de tipo timestamp.

## Sintaxis

```
dateObj.setFullYear(valorAño[, valorMes[, valorDia]])
```

### Parámetros

- `valorAño`
  - : Valor de tipo entero que contiene el valor numérico del año, por ejemplo, 1995.
- `valorMes`
  - : Opcional. Valor entero entre 0 y 11 que representa el mes de Enero a Diciembre.
- `valorDia`
  - : Opcional. Valor entero entre 1 y 31 que representa el día del mes. Si se especifica este parámetro debe incluirse también el parámetro `valorMes`.

### Valor devuelto

El número de milisegundos entre 1 Enero 1970 00:00:00 UTC y a la fecha actualizada con el valor del año.

## Descripción

Si en la invocación al método no se especifican los parámetros `valorMes` y `valorDia`, se emplean en su lugar los valores devueltos por {{jsxref("Date.prototype.getMonth()", "getMonth()")}} y {{jsxref("Date.prototype.getDate()", "getDate()")}}.

Si se especifica un parámetro con un valor fuera del rango esperado, `setFullYear()` intenta actualizar el resto de parámetros y la informacion de fecha en el objeto {{jsxref("Date")}} de manera consistente. Por ejemplo, si se especifica el valor 15 para el parametro `valorMes`, el parámetro año se incrementa en 1 (`valorAño+ 1`), y se emplea 3 como valor para el parámetro mes.

## Ejemplos

### Uso de `setFullYear()`

```js
var theBigDay = new Date();
theBigDay.setFullYear(1997);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}
