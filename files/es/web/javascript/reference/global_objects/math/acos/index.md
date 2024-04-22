---
title: Math.acos()
slug: Web/JavaScript/Reference/Global_Objects/Math/acos
---

{{JSRef}}

La función **`Math.acos()`** devuelve el arco coseno (en radianes) de un número que es

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">[</mo><mrow><mo>-</mo><mn>1</mn></mrow><mo>;</mo><mn>1</mn><mo stretchy="false">]</mo><mo>,</mo><mspace width="thickmathspace"></mspace><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.acos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">arccos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mo stretchy="false">[</mo><mn>0</mn><mo>;</mo><mi>π</mi><mo stretchy="false">]</mo><mspace width="thinmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in [{-1};1],\;\mathtt{\operatorname{Math.acos}(x)} = \arccos(x) = \text{ the unique } \; y \in [0; \pi] \, \text{such that} \; \cos(y) = x</annotation></semantics></math>

## Sintaxis

```
Math.acos(x)
```

### Parámetros

- `x`
  - : Un número.

### Valor devuelto

El arco coseno (en radianes) de un número dado si se encuentra entre **-1** y **1**; de otro modo, {{jsxref("NaN")}}.

## Descripción

El método `Math.acos()` devuelve un valor numérico entre 0 y π radianes para `x` entre -1 y 1. Si el valor de `x` está fuera de este rango, devuelve {{jsxref("NaN")}}.

Debido a que `acos()` es un método estático de `Math`, siempre debe usarse como `Math.acos()`, en vez de como un método de un objeto `Math` creado (`Math` no es un constructor).

## Ejemplos

### Usando `Math.acos()`

```js
Math.acos(-2); // NaN
Math.acos(-1); // 3.141592653589793
Math.acos(0); // 1.5707963267948966
Math.acos(0.5); // 1.0471975511965979
Math.acos(1); // 0
Math.acos(2); // NaN
```

Para valores menores que -1 o mayores que 1, `Math.acos()` devuelve {{jsxref("NaN")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
