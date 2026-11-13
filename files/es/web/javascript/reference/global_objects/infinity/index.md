---
title: Infinity
slug: Web/JavaScript/Reference/Global_Objects/Infinity
l10n:
  sourceCommit: 6b728699f5f38f1070a94673b5e7afdb1102a941
---

{{jsSidebar("Objects")}}

La propiedad global **`Infinity`** es un valor numérico que representa el infinito.

{{InteractiveExample("JavaScript Demo: Standard built-in objects - infinity")}}

```js interactive-example
const maxNumber = Math.pow(10, 1000); // Max positive number

if (maxNumber === Infinity) {
  console.log("Let's call it Infinity!");
  // Expected output: "Let's call it Infinity!"
}

console.log(1 / maxNumber);
// Expected output: 0
```

## Valor

El mismo valor numérico que {{jsxref("Number.POSITIVE_INFINITY")}}.

{{js_property_attributes(0, 0, 0)}}

## Descripción

`Infinity` es una propiedad del _objeto global_. En otras palabras, es una variable de alcance global.

El valor `Infinity` (infinito positivo) es mayor que cualquier otro número.

Este valor se comporta de forma ligeramente diferente al infinito matemático; consulte {{jsxref("Number.POSITIVE_INFINITY")}} para obtener más información.

## Ejemplos

### Utilizando Infinity

```js
console.log(Infinity); /* Infinity */
console.log(Infinity + 1); /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0)); /* -Infinity */
console.log(1 / Infinity); /* 0 */
console.log(1 / 0); /* Infinity */
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite")}}
