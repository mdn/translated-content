---
title: Number.NaN
slug: Web/JavaScript/Reference/Global_Objects/Number/NaN
---

{{JSRef}}

La propiedad **`Number.NaN`** representa Not-A-Number (No es numero). Equivalente de {{jsxref("NaN")}}.

{{InteractiveExample("JavaScript Demo: Number.NaN")}}

```js interactive-example
function clean(x) {
  // eslint-disable-next-line use-isnan
  if (x === Number.NaN) {
    // Can never be true
    return null;
  }
  if (isNaN(x)) {
    return 0;
  }
}

console.log(clean(Number.NaN));
// Expected output: 0
```

No tienes que crear un objeto {{jsxref("Number")}} para acceder a esta propiedad estática (usa `Number.NaN`).

{{js_property_attributes(0, 0, 0)}}

## Ejemplos

### Chequea si los valores son numericos

```js
function sanitise(x) {
  if (isNaN(x)) {
    return Number.NaN;
  }
  return x;
}
```

### Testing against NaN

See [Testing against NaN](/es/docs/Web/JavaScript/Reference/Global_Objects/NaN#testing_against_nan) on the `NaN` page.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Tambien mira

- El objeto global {{jsxref("NaN")}} .
- El objeto {{jsxref("Number")}} al que pertenece.
