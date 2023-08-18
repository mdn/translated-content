---
title: Math.pow()
slug: Web/JavaScript/Reference/Global_Objects/Math/pow
---

{{JSRef("Global_Objects", "Math")}}

## Resumen

La función **`Math.pow()`** devuelve la `base` elevada al `exponente` , esto es, `baseexponente`.

## Sintaxis

```
Math.pow(base, exponente)
```

### Parametros

- `base`
  - : El número base.
- `exponente`
  - : El exponente utilizado para elevar la `base`.

## Descripción

La función **`Math.pow()`** retorna la `base` elevada al `exponente`, es decir, `baseexponente`. La base y el exponente estan en el sistema numérico decimal.

Puesto que `pow()` es un método estático de `Math`, siempre se utiliza como `Math.pow()`. Si la base es negativa y el exponente no es un número entero, el resultado será NaN.

## Ejemplos

### Ejemplo: Usando `Math.pow()`

```js
// simple
Math.pow(7, 2); // 49
Math.pow(7, 3); // 343
Math.pow(2, 10); // 1024
// exponentes fraccionales
Math.pow(4, 0.5); // 2 (raíz cuadrada de 4)
Math.pow(8, 1 / 3); // 2 (raíz cúbica de 8)
Math.pow(2, 0.5); // 1.412135623730951 (raíz cuadrada de 2)
Math.pow(2, 1 / 3); // 1.2599210498948732 (raíz cúbica de 2)
// exponentes con signo
Math.pow(7, -2); // 0.02040816326530612 (1/49)
Math.pow(8, -1 / 3); // 0.5
// bases con signo
Math.pow(-7, 2); // 49 (los cuadrados son positivos)
Math.pow(-7, 3); // -343 (El cubo de una base negativa puede ser negativo)
Math.pow(-7, 0.5); // NaN (Los números negativos no tienen raíz cuadrada real)
Math.pow(-7, 1 / 3); // NaN
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Math.cbrt()")}} {{experimental_inline}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.sqrt()")}}
