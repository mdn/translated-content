---
title: Math.cos()
slug: Web/JavaScript/Reference/Global_Objects/Math/cos
---

{{JSRef}}

La función estática **`Math.cos()`** devuelve el [coseno](https://es.wikipedia.org/wiki/Coseno) del ángulo especificado, que debe ser especificado en [radianes](https://es.wikipedia.org/wiki/Radi%C3%A1n). Este valor es <math style="display: inline;"><mstyle displaystyle="true"><mfrac><msub><mrow><mtext>longitud</mtext> </mrow><mrow><mrow><mtext>adyacente</mtext> </mrow></mrow></msub><msub><mrow><mtext>longitud</mtext> </mrow><mrow><mrow><mtext>hipotenusa</mtext> </mrow></mrow></msub></mfrac></mstyle></math>.

{{EmbedInteractiveExample("pages/js/math-cos.html")}}

El código fuente de este ejemplo interactivo está almacenado en un repositorio de GitHub. Si te gustaría contribuir con el proyecto de ejemplos interactivos, por favor clona <https://github.com/mdn/interactive-examples> y envíanos un pull request.

## Sintaxis

```
Math.cos(x)
```

### Parametros

- `x`
  - : El ángulo en radianes por el cual devolverá el coseno.

### Valor de retorno

El coseno del número dado.

## Descripción

El método `Math.cos()` retorna un valor numérico entre -1 y 1, que representa el coseno del ángulo.

Debido a que `cos()` es un método estático de `Math`, siempre debes utilizarlo como `Math.cos()`, en lugar de como un método de un objeto `Math` que hayas creado (`Math` no es un constructor).

## Ejemplos

### Usando `Math.cos()`

```js
Math.cos(0); // 1
Math.cos(1); // 0.5403023058681398

Math.cos(Math.PI); // -1
Math.cos(2 * Math.PI); // 1
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
