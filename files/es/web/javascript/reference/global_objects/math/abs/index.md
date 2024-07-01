---
title: Math.abs()
slug: Web/JavaScript/Reference/Global_Objects/Math/abs
---

{{JSRef}}

La función **`Math.abs()`** retorna el valor absoluto de un número, que es

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.abs</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mrow><mo stretchy="false">|</mo><mi>x</mi><mo stretchy="false">|</mo></mrow><mo>=</mo><mrow><mo>{</mo><mtable columnalign="left left"><mtr><mtd><mi>x</mi></mtd><mtd><mtext>if</mtext><mspace width="1em"></mspace><mi>x</mi><mo>></mo><mn>0</mn></mtd></mtr><mtr><mtd><mi>0</mi></mtd><mtd><mtext>if</mtext><mspace width="1em"></mspace><mi>x</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd><mo>-</mo><mi>x</mi></mtd><mtd><mtext>if</mtext><mspace width="1em"></mspace><mi>x</mi><mo>&#x3C;</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow><annotation encoding="TeX">{\mathtt{\operatorname{Math.abs}(x)}} = {|x|} = \begin{cases} x &#x26; \text{if} \quad x \geq 0 \\ -x &#x26; \text{if} \quad x &#x3C; 0 \end{cases}</annotation></semantics></math>

## Sintaxis

```
Math.abs(x)
```

### Parámetros

- `x`
  - : Un número.

### Valor de retorno

El valor absoluto del número dado.

## Descripción

Como `abs()` es un método estático de `Math`, deberías siempre usar `Math.abs()`, en lugar de un método de un objeto `Math` que crees (`Math` no es un constructor).

## Ejemplos

### Comportamiento de `Math.abs()`

Pasando un string no-numérico o una variable {{jsxref("undefined")}}/empty retorna {{jsxref("NaN")}}. Pasando {{jsxref("null")}} retorna 0.

```js
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Math.ceil()")}}
- {{jsxref("Math.floor()")}}
- {{jsxref("Math.round()")}}
- {{jsxref("Math.sign()")}} {{experimental_inline}}
- {{jsxref("Math.trunc()")}} {{experimental_inline}}
