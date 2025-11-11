---
title: Error.prototype.lineNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
---

{{JSRef}}

No es una norma

Esta característica no es una norma y no está en la lista de normas. No la utilice en sitios de producción que enfrenta la Web: no va a funcionar para todos los usuarios. También puede haber grandes incompatibilidades entre implementaciones y el comportamiento puede cambiar en el futuro.

La propiedad **lineNumber** contiene el número de linea en el archivo que arrojó el error.

## Ejemplos

### Utilizando `lineNumber`

```js
var e = new Error("No fue posible analizar el dato introducido");
throw e;
console.log(e.lineNumber); // 2
```

### Ejemplo alternativo utilizando el evento '`error'`

```js
window.addEventListener("error", function (e) {
  console.log(e.lineno); // 5
});
var e = new Error("No fue posible analizar el dato introducido");
throw e;
```

Esta es una norma soportada por Chrome, Firefox entre otros.

## Especificaciones

No forma parte de ninguna especificación. No es una norma.

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.columnNumber")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.fileName")}} {{non-standard_inline}}
