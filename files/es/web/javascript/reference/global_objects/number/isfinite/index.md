---
title: Number.isFinite()
slug: Web/JavaScript/Reference/Global_Objects/Number/isFinite
---

{{JSRef}}

El método **`Number.isFinite()`** determina si el valor pasado es un número finito.

{{EmbedInteractiveExample("pages/js/number-isfinite.html")}}

## Sintaxis

```
Number.isFinite(valor)
```

### Parameters

- `valor`
  - : El valor cuya finitud será probada.

### Return value

Un {{jsxref("Boolean")}} indicando si el valor dado es finito o no.

## Description

En comparación con la funcion global {{jsxref("isFinite", "isFinite()")}} , este método no convierte el parámetro forzádamente a un número. Esto significa que solo valores de tipo númerico, que también son finitos, retornan `true`.

## Ejemplos

```js
Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite(-Infinity); // false

Number.isFinite(0); // true
Number.isFinite(2e64); // true

Number.isFinite("0"); // false, retornaría true con la función
// global isFinite('0')
Number.isFinite(null); // false, retornaría true con la función
// global isFinite(null)
```

## Polyfill

```js
Number.isFinite =
  Number.isFinite ||
  function (value) {
    return typeof value === "number" && isFinite(value);
  };
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- El objeto {{jsxref("Number")}} al que pertenece esta función.
- La función global {{jsxref("isFinite")}}.
