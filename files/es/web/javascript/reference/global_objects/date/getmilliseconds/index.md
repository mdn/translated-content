---
title: Date.prototype.getMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
---

{{JSRef}}

El método **`getMilliseconds()`** devuelve la cantidad de milisegundos en el objeto fecha especificado de acuerdo a la hora local.

## Sintaxis

```
dateObj.getMilliseconds()
```

### Valor de Retorno

Un número, entre 0 y 999, que representa la cantidad de milisegundos en la fecha dada, de acuerdo a la hora local.

## Ejemplos

### Usando `getMilliseconds()`

El siguiente ejemplo asigna la cantidad de milisegundos de la hora actual a la variable `milisegundos`:

```js
var ahora = new Date();
var milisegundos = ahora.getMilliseconds();
```

## Especificaciones

{{Specifications}}

## Vea también

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
