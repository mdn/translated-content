---
title: Number.isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
---

{{JSRef}}

El método **`Number.isInteger()`** determina si el valor pasado es de tipo entero.

{{EmbedInteractiveExample("pages/js/number-isinteger.html")}}

## Sintaxis

```
Number.isInteger(valor)
```

### Parámetros

- `valor`
  - : El valor a ser probado si es un entero.

### Valor devuelto

Un {{jsxref("Boolean")}} indicando si el valor dado es un entero o no.

## Descripción

Si el valor seleccionado es un entero, devuelve `true`, de lo contrario `false`. Si el valor es {{jsxref("NaN")}} o infinito, devuelve `false`.

## Ejemplos

```js
Number.isInteger(0); // true
Number.isInteger(1); // true
Number.isInteger(-100000); // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1); // false
Number.isInteger(Math.PI); // false

Number.isInteger(NaN); // false
Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false
Number.isInteger("10"); // false
Number.isInteger(true); // false
Number.isInteger(false); // false
Number.isInteger([1]); // false
```

## Polyfill

```js
Number.isInteger =
  Number.isInteger ||
  function (value) {
    return (
      typeof value === "number" &&
      isFinite(value) &&
      Math.floor(value) === value
    );
  };
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- El objeto {{jsxref("Number")}} al que pertenece.
