---
title: Number.NaN
slug: Web/JavaScript/Reference/Global_Objects/Number/NaN
tags:
  - JavaScript
  - Número
  - Propiedad
translation_of: Web/JavaScript/Reference/Global_Objects/Number/NaN
original_slug: Web/JavaScript/Referencia/Objetos_globales/Number/NaN
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

| Especificación                                                               |
| ---------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-number.nan', 'Number.NaN')}} |

## Browser compatibility

{{Compat("javascript.builtins.Number.NaN")}}

## Tambien mira

- El objeto global {{jsxref("NaN")}} .
- El objeto {{jsxref("Number")}} al que pertenece.
