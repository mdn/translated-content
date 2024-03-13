---
title: Number.isNaN()
slug: Web/JavaScript/Reference/Global_Objects/Number/isNaN
---

{{JSRef}}

El método **`Number.isNaN()`** determina si el valor pasado es {{jsxref("NaN")}}. Versión más robusta de la función global {{jsxref("isNaN", "isNaN()")}}.

## Sintaxis

```
Number.isNaN(value)
```

### Parámetros

- `valor`
  - : El valor para ser evaluado por {{jsxref("NaN")}}.

## Description

Debido a los dos operadores de igualdad, {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}} y {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}}, evaluando a `false` cuando al comprobar si {{jsxref("NaN")}} _is_ {{jsxref("NaN")}}, la función `Number.isNaN()` se ha convertido en necesaria. Esta situación es diferente a las otras comparaciones de valor en JavaScript.

En comparación a la función global {{jsxref("isNaN", "isNaN()")}}, `Number.isNaN()` no sufre el problema de forzar la conversión del parámetro a un número. Esto significa que ahora es seguro pasar valores que normalmente se convertirían a {{jsxref("NaN")}}, pero no son del mismo valor que {{jsxref("NaN")}}. Esto también significa que solo los valores de tipo número, que también son {{jsxref("NaN")}}, retornan `true`.

## Examples

```js
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0); // true

// e.g. estos hubiesen sido true con la función global isNaN()
Number.isNaN("NaN"); // false
Number.isNaN(undefined); // false
Number.isNaN({}); // false
Number.isNaN("blabla"); // false

// Todos retornan false
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN("37");
Number.isNaN("37.37");
Number.isNaN("");
Number.isNaN(" ");
```

## Polyfill

```js
Number.isNaN =
  Number.isNaN ||
  function (value) {
    return typeof value === "number" && isNaN(value);
  };

// O
Number.isNaN =
  Number.isNaN ||
  function (value) {
    return value !== value;
  };
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Number")}}
- {{jsxref("isNaN", "isNaN()")}}
