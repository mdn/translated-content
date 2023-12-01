---
title: Math.LN10
slug: Web/JavaScript/Reference/Global_Objects/Math/LN10
---

{{JSRef}}

La propiedad **`Math.LN10`** representa el logaritmo natural de 10, aproximadamente 2.302:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LN10</mi></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>2.302</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LN10}} = \ln(10) \approx 2.302</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-ln10.html")}}{{js_property_attributes(0, 0, 0)}}

## Descripción

Porque `LN10` es una propiedad estática de `Math`, siempre usted lo usa como `Math.LN10`, en lugar de como una propiedad de un objeto `Math` creado (`Math` no es un constructor).

## Ejemplos

### Utilizando `Math.LN10`

La función siguiente devuelve el logaritmo natural de 10:

```js
function getNatLog10() {
  return Math.LN10;
}

getNatLog10(); // 2.302585092994046
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
