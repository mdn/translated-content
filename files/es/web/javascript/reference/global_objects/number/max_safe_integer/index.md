---
title: Number.MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
---

{{JSRef}}

La constante **`Number.MAX_SAFE_INTEGER`** es el número mas grande 'seguro' en JavaScript (`2^53 - 1`).

{{EmbedInteractiveExample("pages/js/number-maxsafeinteger.html")}}

La fuente de este ejemplo interactivo está almacenada en GitHub. Si quieres contribuir al proyecto de ejmplos interactivos, por favor clona <https://github.com/mdn/interactive-examples> y envíanos un 'pull request'.

{{js_property_attributes(0, 0, 0)}}

## Descripción

La constante `MAX_SAFE_INTEGER` tiene un valor de `9007199254740991` (9,007,199,254,740,991 o \~9 mil billones). El razonamiento detrás de ese número es que JavaScript usa [números flotantes de doble precisión](http://en.wikipedia.org/wiki/Double_precision_floating-point_format) tal como está especfificado en [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point) por lo que puedes representar números de forma segura entre `-(2^53 - 1)` y `2^53 - 1`.

Seguro, en este contexto, se refiere a la habilidad de representar enteros de forma exacta y compararlos de forma correcta. Por ejemplo, `Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2` evaluará como 'verdadero', lo cual es matemáticamente incorrecto. Ver {{jsxref("Number.isSafeInteger()")}} para más información.

Debido a que `MAX_SAFE_INTEGER` es una propiedad estática de {{jsxref("Number")}}, siempre se usa como `Number.MAX_SAFE_INTEGER`, en lugar de como una propiedad de un objeto {{jsxref("Number")}} que hayas creado.

## Ejemplos

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
Math.pow(2, 53) - 1; // 9007199254740991
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
