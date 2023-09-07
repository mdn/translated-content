---
title: Date.prototype.toISOString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toISOString
---

{{JSRef}}

El método **`toISOString()`** devuelve una cadena en el formato _simplificado_ extendido ISO ([ISO 8601](http://en.wikipedia.org/wiki/ISO_8601)), que siempre mide 24 o 27 caracteres de largo: (`YYYY-MM-DDTHH:mm:ss.sssZ` or `±YYYYYY-MM-DDTHH:mm:ss.sssZ`, respectivamente). El uso horario no tiene retraso respecto a UTC, como lo denota el sufijo `"Z"`.

## Sintaxis

```
dateObj.toISOString()
```

### Valor devuelto

Una cadena que representa la fecha dada en el formato [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) según la hora universal.

## Ejemplos

### Usando `toISOString()`

```js
var today = new Date("05 October 2011 14:48 UTC");

console.log(today.toISOString()); // Devuelve 2011-10-05T14:48:00.000Z
```

El ejemplo de arriba usa una cadena no estándar que podría no ser interpretada correctamente en navegadores distintos de Firefox.

## Polyfill

Este método fue estandarizado en ECMA-262 5° edición. Los motores javascript que no han sido actualizados para soportar este método pueden solucionar su ausencia de la siguiente manera:

```js
if (!Date.prototype.toISOString) {
  (function () {
    function pad(number) {
      if (number < 10) {
        return "0" + number;
      }
      return number;
    }

    Date.prototype.toISOString = function () {
      return (
        this.getUTCFullYear() +
        "-" +
        pad(this.getUTCMonth() + 1) +
        "-" +
        pad(this.getUTCDate()) +
        "T" +
        pad(this.getUTCHours()) +
        ":" +
        pad(this.getUTCMinutes()) +
        ":" +
        pad(this.getUTCSeconds()) +
        "." +
        (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
        "Z"
      );
    };
  })();
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
