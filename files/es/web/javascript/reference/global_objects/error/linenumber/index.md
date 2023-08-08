---
title: Error.prototype.lineNumber
slug: Web/JavaScript/Reference/Global_Objects/Error/lineNumber
---

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

## Navegadores compatibles

Tabla de compatibilidad

| Caracteristica | Chrome          | Firefox (Gecko) | Internet Explorer | Opera         | Safari        |
| -------------- | --------------- | --------------- | ----------------- | ------------- | ------------- |
| Soporte básico | Compatible \[1] | Compatible      | No compatible     | No compatible | No compatible |

\[1] Objeto error en errores manejados.

| Caracteristica | Android       | Chorme para Android | Firefox Móvil (Gecko) | IE Móvil      | Opera Móvil   | Safari Móvil  |
| -------------- | ------------- | ------------------- | --------------------- | ------------- | ------------- | ------------- |
| Soporte básico | No compatible | No compatible       | Compatible            | No compatible | No compatible | No compatible |

## Vea también

- {{jsxref("Error.prototype.stack")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.columnNumber")}} {{non-standard_inline}}
- {{jsxref("Error.prototype.fileName")}} {{non-standard_inline}}
