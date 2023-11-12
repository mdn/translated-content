---
title: Math.sin()
slug: Web/JavaScript/Reference/Global_Objects/Math/sin
---

{{JSRef("Global_Objects", "Math")}}

## Resumen

La función **`Math.sin()`** devuelve el seno de un número.

## Sintaxis

```
Math.sin(x)
```

### Parámetros

- `x`
  - : Un número (en radianes).

## Descripción

El método `Math.sin()` devuelve un valor numérico entre -1 y 1, que representa el seno del ángulo dado en radianes.
Debido a que `sin()` es un método estático de `Math`, siempre se usa como `Math.sin()`, en vez de crear un objeto `Math` y usarlo como un método (`Math` no es un constructor).

## Ejemplos

### Ejemplo: Usando `Math.sin()`

```js
Math.sin(0); // 0
Math.sin(1); // 0.8414709848078965

Math.sin(Math.PI / 2); // 1
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
- {{jsxref("Math.tan()")}}
