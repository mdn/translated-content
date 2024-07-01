---
title: Math.LN2
slug: Web/JavaScript/Reference/Global_Objects/Math/LN2
---

{{JSRef}}

La propiedad **`Math.LN2`** representa el logaritmo natural de 2, aproximadamente 0.693:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LN2</mi></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>0.693</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LN2}} = \ln(2) \approx 0.693</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-ln2.html")}}{{js_property_attributes(0, 0, 0)}}

## Descripción

Como `LN2` es una propiedad estática de `Math`, siempre se usa como `Math.LN2`, en lugar de como una propiedad de un objeto `Math` que ha creado (`Math` no es un constructor).

## Ejemplos

### Utilizando `Math.LN2`

La función siguiente devuelve el logaritmo natural de 2:

```js
function getNatLog2() {
  return Math.LN2;
}

getNatLog2(); // 0.6931471805599453
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log2()")}}
