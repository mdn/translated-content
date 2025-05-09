---
title: Math.tan()
slug: Web/JavaScript/Reference/Global_Objects/Math/tan
---

{{JSRef}}

La función **`Math.tan()`** retorna la tangente de un número.

{{InteractiveExample("JavaScript Demo: Math.tan()")}}

```js interactive-example
function getTanFromDegrees(degrees) {
  return Math.tan((degrees * Math.PI) / 180);
}

console.log(getTanFromDegrees(0));
// Expected output: 0

console.log(getTanFromDegrees(45));
// Expected output: 0.9999999999999999

console.log(getTanFromDegrees(90));
// Expected output: 16331239353195370
```

## Sintaxis

```
Math.tan(x)
```

### Parámetros

- `x`
  - : Un número que representa un ángulo en radianes.

### Valor de retorno

La tangente del número proporcionado.

## Descripción

El método `Math.tan()` retorna un valor numérico que representa la tangente de un ángulo.

Dado que `tan()` es un método estático de `Math`, siempre debes usarlo como `Math.tan()`, y no como un método de un objeto `Math` que hayas creado (`Math` no es un constructor).

## Ejemplos

### Usando `Math.tan()`

```js
Math.tan(1); // 1.5574077246549023
```

Ya que la función `Math.tan()` acepta radianes, pero es más fácil trabajar con grados, la siguiente función acepta un valor en grados, lo convierte a radianes, y retorna la tangente de dicho valor.

```js
function getTanDeg(deg) {
  var rad = (deg * Math.PI) / 180;
  return Math.tan(rad);
}
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
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
