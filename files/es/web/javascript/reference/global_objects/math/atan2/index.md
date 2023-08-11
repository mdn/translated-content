---
title: Math.atan2()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan2
---

{{JSRef("Global_Objects", "Math")}}

## Resumen

La función **`Math.atan2()`** retorna la arcotangente del cociente de los argumentos.

## Sintaxis

```
Math.atan2(y, x)
```

### Parámetros

- `y`
  - : Primer número.
- `x`
  - : Segundo número.

## Descripción

El método `Math.atan2()` retorna un valor númerico entre -π y π representando el ángulo theta de un punto `(x, y)`. Este es un ángulo en sentido antihorario, medido en radianes, entre el eje positivo X, y el punto (`x, y)`. Tenga en cuenta que esta función recibe la coordenada Y como primer argumento y X como segundo.

A la función `Math.atan2()` se le pasan los argumentos `x` y `y` por separado, y a `Math.atan()` se le pasa la relación de los dos argumentos.

Debido a que `atan2()` es un método estatico de `Math`, siempre se debe usar `Math.atan2()`, en vez de usarlo como un método creado por el objeto `Math` (`Math` no es un contructor).

## Ejemplos

### Ejemplo: Usando `Math.atan2()`

```js
Math.atan2(90, 15); // 1.4056476493802699
Math.atan2(15, 90); // 0.16514867741462683

Math.atan2(±0, -0);               // ±PI.
Math.atan2(±0, +0);               // ±0.
Math.atan2(±0, -x);               // ±PI for x > 0.
Math.atan2(±0, x);                // ±0 for x > 0.
Math.atan2(-y, ±0);               // -PI/2 for y > 0.
Math.atan2(y, ±0);                // PI/2 for y > 0.
Math.atan2(±y, -Infinity);        // ±PI for finite y > 0.
Math.atan2(±y, +Infinity);        // ±0 for finite y > 0.
Math.atan2(±Infinity, x);         // ±PI/2 for finite x.
Math.atan2(±Infinity, -Infinity); // ±3*PI/4.
Math.atan2(±Infinity, +Infinity); // ±PI/4.
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
