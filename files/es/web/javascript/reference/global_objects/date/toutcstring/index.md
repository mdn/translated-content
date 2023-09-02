---
title: Date.prototype.toUTCString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toUTCString
---

{{JSRef}}

`El método`**`toUTCString()`** convierte una fecha en una cadena, utilizando la zona horaria UTC.

{{EmbedInteractiveExample("pages/js/date-toutcstring.html")}}

## Sintaxis

```
dateObj.toUTCString()
```

### Valor de retorno

Una cadena que representa la fecha dada usando la zona horaria UTC

## Descripción

El valor devuelto por `toUTCString()` es una cadena con la forma

`Www, dd Mmm yyyy hh:mm:ss GMT`

donde:

| Www  | Día de la semana, como tres letras (ej. Sun, Mon, ...)                  |
| ---- | ----------------------------------------------------------------------- |
| dd   | Día del mes, como dos dígitos, con cero a la izquierda si es necesario. |
| Mmm  | Mes, como tres letras (ej. Jan, Feb, ...)                               |
| yyyy | Año, como cuatro o más dígitos con cero a la izquierda si es necesario. |
| hh   | Hora, como dos dígitos con cero a la izquierda si es necesario.         |
| mm   | Minutos, como dos dígitos con cero a la izquierda si es necesario.      |
| ss   | Segundos, como dos dígitos con cero a la izquierda si es necesario.     |

Antes de ECMAScript 2018, el formato del valor devuelto variaba según la plataforma. El valor devuelto más comun era un sello de fecha con formato RFC-1123, que es una versión ligeramente actualizada de los sellos de fecha RFC-822.

## Ejemplos

### Usando `toUTCString()`

```js
var today = new Date("Wed, 14 Jun 2017 00:00:00 PDT");
var UTCstring = today.toUTCString(); // Wed, 14 Jun 2017 07:00:00 GMT
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toISOString()")}}
