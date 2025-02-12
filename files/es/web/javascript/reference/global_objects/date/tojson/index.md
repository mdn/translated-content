---
title: Date.prototype.toJSON()
slug: Web/JavaScript/Reference/Global_Objects/Date/toJSON
---

{{JSRef}}

El metodo **`toJSON()`** retorna una representacion de cadena del objeto {{jsxref("Date")}}

{{InteractiveExample("JavaScript Demo: Date.toJSON()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 UTC");

const jsonDate = event.toJSON();

console.log(jsonDate);
// Expected output: "1975-08-19T23:15:30.000Z"

console.log(new Date(jsonDate).toUTCString());
// Expected output: "Tue, 19 Aug 1975 23:15:30 GMT"
```

La tabla de compatibilidad de esta página se genera a partir de datos estructurados. Si desea contribuir con los datos, por favor clone <https://github.com/mdn/interactive-examples> y envienos un pull request.

## Syntaxis

```
dateObj.toJSON()
```

### Valor retornado

Una representación de cadena de la fecha dada.

## Descripción

{{jsxref("Date")}} las instancias se refieren a un momento específico en el tiempo. Llamando a `toJSON()` retorna un string (usando {{jsxref("Date.prototype.toISOString()", "toISOString()")}}) representando el {{jsxref("Date")}} valor del objeto. Este método generalmente está destinado, de forma predeterminada, a serializar de manera útil {{jsxref("Date")}} objetos durante la serialización [JSON](/es/docs/Glossary/JSON) .

## Ejemplos

### Usando `toJSON()`

```js
var jsonDate = new Date().toJSON();
var backToDate = new Date(jsonDate);

console.log(jsonDate); //2015-10-26T07:46:36.611Z
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
