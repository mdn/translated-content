---
title: Number.NaN
slug: Web/JavaScript/Reference/Global_Objects/Number/NaN
---

{{JSRef}}

La propiedad **`Number.NaN`** representa Not-A-Number (No es numero). Equivalente de {{jsxref("NaN")}}.

{{EmbedInteractiveExample("pages/js/number-nan.html")}}

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

See [Testing against NaN](/es/docs/Web/JavaScript/Reference/Global_Objects/NaN#Testing_against_NaN) on the `NaN` page.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Tambien mira

- El objeto global {{jsxref("NaN")}} .
- El objeto {{jsxref("Number")}} al que pertenece.
