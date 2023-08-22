---
title: Math.atan()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan
---

{{JSRef}}

La función **`Math.atan()`** retorna el arcotangente (en radianes) de un number, esto es

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.atan</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">arctan</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> el único </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mrow><mo>[</mo><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>;</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><mo>]</mo></mrow><mspace width="thinmathspace"></mspace><mtext> tal que</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">tan</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.atan}(x)} = \arctan(x) = \text{ the unique } \; y \in \left[-\frac{\pi}{2}; \frac{\pi}{2}\right] \, \text{such that} \; \tan(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-atan.html")}}

La fuente para este ejemplo interactivo se encuentra almacenado en un repositorio de GitHub. Si quieres contribuir al proyecto de ejemplos interactivos, por favor clona el repositorio que hay en este link: <https://github.com/mdn/interactive-examples> ; y envíanos una _pull request_.

## Sintaxis

```
Math.atan(x)
```

### Parámetros

- `x`
  - : Un número.

### Valor de retorno

El arcotangente (en radianes) de el número dado.

## Descripción

El método `Math.atan()` retorna un valor numérico entre <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math> y <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math> radianes.

Dado que `atan()` es un método estático de `Math`, siempre debes usarlo como `Math.atan()`, y no como un método de un objeto `Math` que hayas creado (`Math` no es un constructor).

## Ejemplos

### Usando `Math.atan()`

```js
Math.atan(1); // 0.7853981633974483
Math.atan(0); // 0
Math.atan(-0); // -0

Math.atan(Infinity); //  1.5707963267948966
Math.atan(-Infinity); // -1.5707963267948966

// El ángulo que la línea [(0,0);(x,y)] forma con el eje-x en un sistema de coordenadas Cartesianas.
Math.atan(y / x);
```

Nota que podrías querer evitar usar **±**`Infinity` por razones de estilo. En este caso, {{jsxref("Math.atan2()")}} con `0` como segundo argumento puede ser una mejor solución.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
