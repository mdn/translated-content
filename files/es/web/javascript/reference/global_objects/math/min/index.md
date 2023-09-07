---
title: Math.min()
slug: Web/JavaScript/Reference/Global_Objects/Math/min
---

{{JSRef}}

La función **`Math.min()`** devuelve el menor de cero o más números.

## Sintaxis

```
Math.min([valor1[, valor2[, ...]]])
```

### Parámetros

- `valor1, valor2, ...`
  - : Números.

## Descripción

Ya que `min()` es un método estático de `Math`, siempre debe usarse como `Math.min()`, en lugar de como un método de un objeto `Math` instanciado (Math no es un constructor).

Si no se proporcionan argumentos, el resultado es {{jsxref("Infinity")}}.

Si al menos uno de los argumentos no puede ser convertido a número, el resultado es {{jsxref("NaN")}}.

## Ejemplos

### Usando `Math.min()`

Lo siguiente encuentra el mínimo de `x` e `y` y lo asigna a `z`:

```js
var x = 10,
  y = -20;
var z = Math.min(x, y);
```

### Recortando un valor con `Math.min()`

`Math.min()` es a menudo usado para recortar un valor de tal manera que siempre sea menor o igual a un límite. Este ejemplo

```js
var x = f(foo);

if (x > limite) {
  x = limite;
}
```

puede ser escrito de la siguiente manera

```js
var x = Math.min(f(foo), limite);
```

{{jsxref("Math.max()")}} puede ser usado en una forma similar para recortar un valor en el otro extremo.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver además

- {{jsxref("Math.max()")}}
