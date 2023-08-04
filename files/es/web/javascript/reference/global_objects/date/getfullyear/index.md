---
title: Date.prototype.getFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getFullYear
---

{{JSRef}}

El método **`getFullYear()`** devuelve el año de la fecha indicada acorde a la hora local.

Usa este método en lugar del método {{jsxref("Date.prototype.getYear()", "getYear()")}}.

{{EmbedInteractiveExample("pages/js/date-getfullyear.html","shorter")}}

## Sintaxis

```
dateObj.getFullYear()
```

### Valor devuelto

Un número correspondiente al año de la fecha indicada, según la hora local.

## Descripción

El valor devuelto por `getFullYear()` es un número absoluto. Para fechas entre los años 1000 y 9999, `getFullYear()` devuelve un número de cuatro cifras, por ejemplo, 1995. Utiliza esta función para obtener un año que cumpla con los años posteriores al 2000.

## Ejemplos

### Utilizando getFullYear()

El siguiente ejemplo asigna el valor de cuatro dígitos del año actual a la variable `year`.

```js
var today = new Date();
var year = today.getFullYear();
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.getYear()")}}
