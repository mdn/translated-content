---
title: Math.LOG10E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG10E
---

{{JSRef}}La propiedad **`Math.LOG10E`** representa el logaritmo base 10 de e, el cual es aproximadamente 0.434:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LOG10E</mi></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>0.434</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG10E}} = \log_10(e) \approx 0.434</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Descripción

Debido a que LOG10E es una propiedad estatica del módulo Math, se debe de invocar siempre como Math.LOG10E, en lugar de invocarla como una propiedad de algun objeto Math que hayas creado ( Math no es un constructor ).

## Ejemplos

### Utilizando `Math.LOG10E`

La siguiente funcion regresa el logaritmo base 10 de e:

```js
function getLog10e() {
  return Math.LOG10E;
}

getLog10e(); // 0.4342944819032518
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver tambien

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
