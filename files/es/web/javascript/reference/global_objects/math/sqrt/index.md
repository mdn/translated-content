---
title: Math.sqrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/sqrt
---

{{JSRef}}

La función **`Math.sqrt()`** retorna la raíz cuadrada de un número, que es<math display="block"><semantics><mrow><mi>x</mi><mo>≥</mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mi>M</mi><mi>a</mi><mi>t</mi><mi>h</mi><mo>.</mo><mi>s</mi><mi>q</mi><mi>r</mi><mi>t</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msqrt><mi>x</mi></msqrt><mo>=</mo><mtext>the unique</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>≥</mo><mn>0</mn><mspace width="thickmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \geq 0, \mathtt{Math.sqrt(x)} = \sqrt{x} = \text{the unique} \; y \geq 0 \; \text{such that} \; y^2 = x</annotation></semantics></math>

## Sintaxis

```
Math.sqrt(x)
```

### Parámetros

- `x`
  - : Un numero

### Valor de Retorno

La raíz cuadrada del número proporcionado. Si los números son negativos, {{jsxref("NaN")}} es devuelto.

## Descripción

Si el valor de `x` es negativo `Math.sqrt()` retorna {{jsxref("NaN")}}.

Debido a que `sqrt()` es un método estático de `Math`, siempre úsalo como `Math.sqrt()`, en lugar de un método del objeto `Math` que hayas creado (`Math` no es un constructor).

## Ejemplos

### Usando `Math.sqrt()`

```js
Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095

Math.sqrt(1); // 1
Math.sqrt(0); // 0
Math.sqrt(-1); // NaN
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Math.cbrt()")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.pow()")}}
