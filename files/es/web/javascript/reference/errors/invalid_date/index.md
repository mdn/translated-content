---
title: "RangeError: invalid date"
slug: Web/JavaScript/Reference/Errors/Invalid_date
---

{{jsSidebar("Errors")}}

## Mensaje

```
RangeError: invalid date (Firefox)
RangeError: invalid time value (Chrome)
RangeError: Provided date is not in valid range (Chrome)
```

## Tipo de error

{{jsxref("RangeError")}}

## ¿Cuál es el problema?

Se ha proporcionado una cadena con una fecha no válida para {{jsxref("Date")}} o {{jsxref("Date.parse()")}}.

## Ejemplos

### Casos no válidos

Las cadenas o fechas irreconocibles que contienen valores de elementos ilegales en cadenas con formato ISO suelen devolver {{jsxref("Nan")}}. Sin embargo, dependiendo de la implementación, las cadenas de formato ISO no conformes, también pueden lanzar `RangeError: invalid date`, como los siguientes casos en Firefox:

```js example-bad
new Date("foo-bar 2014");
new Date("2014-25-23").toISOString();
new Date("foo-bar 2014").toString();
```

Esto, sin embargo, devuelve {{jsxref("NaN")}} en Firefox:

```js example-bad
Date.parse("foo-bar 2014"); // NaN
```

Para más información, consulte la documentación de {{jsxref("Date.parse()")}}.

### Casos válidos

```js example-good
new Date("05 October 2011 14:48 UTC");
```

## Véase también

- {{jsxref("Date")}}
- {{jsxref("Date.prototype.parse()")}}
- {{jsxref("Date.prototype.toISOString()")}}
