---
title: Math.log10()
slug: Web/JavaScript/Reference/Global_Objects/Math/log10
---

{{JSRef}}

**`Math.log10()`** funcion que retorna el logaritmo de base 10 de un numero, esto es

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>></mo><mn>0</mn><mo>,</mo><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log10</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>la unica</mtext><mspace width="thickmathspace"></mspace><mi>y tal que</mi><mspace width="thickmathspace"></mspace><mtext></mtext><mspace width="thickmathspace"></mspace><msup><mn>10</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log10}(x)} = \log_10(x) = \text{the unique} \; y \; \text{such that} \; 10^y = x</annotation></semantics></math>

## Sintaxis

```
Math.log10(x)
```

### Parametros

- `x`
  - : Un Numero

### Valor de Retorno

El logaritmo de base 10 del numero dado. SI el numero es negativo, {{jsxref("NaN")}} es devuelto.

## Descripción

Si el valor de x es menor que cero, el valor de retorno siempre es {{jsxref("NaN")}}.

Porque `log10()` `es un metodo estatico de Math`, debe usarse siempre `Math.log10()`, en vez de usarse como un metodo del objeto math que se ha creado (`Math` no es un constructor).

Esta función es equivalente de Math.log(x) / Math.log(10). Para log10(e) use la constante {{jsxref("Math.LOG10E")}} que es 1 / {{jsxref("Math.LN10")}}.

## Ejemplos

### usando `Math.log10()`

```js
Math.log10(2); // 0.3010299956639812
Math.log10(1); // 0
Math.log10(0); // -Infinito
Math.log10(-2); // NaN
Math.log10(100000); // 5
```

## Polyfill

Puede ser emulada con la siguiente función

```js
Math.log10 =
  Math.log10 ||
  function (x) {
    return Math.log(x) * Math.LOG10E;
  };
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea Tambien

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
