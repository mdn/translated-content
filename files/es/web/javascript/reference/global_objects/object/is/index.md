---
title: Object.is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
---

{{JSRef}}

El método **`Object.is()`** determina si dos valores [son iguales](/es/docs/Web/JavaScript/Equality_comparisons_and_sameness).

## Síntaxis

```
Object.is(valor1, valor2);
```

### Parámetros

- `valor1`
  - : Primer valor a comparar.
- `valor2`
  - : Segundo valor a comparar.

### Valor return del método

Este método devuelve un valor de tipo {{jsxref("Boolean")}} indicando si los valores pasados como parámetros son iguales o no.

## Descripción

`Object.is()` determina si dos valores [son iguales](/es/docs/Web/JavaScript/Equality_comparisons_and_sameness). Dos valores son iguales si se puede asegurar que:

- ambos son {{jsxref("undefined")}}
- ambos son {{jsxref("null")}}
- ambos son `true` o `false`
- ambos son strings y tienen la misma longitud con los mismos carácteres
- ambos son el mismo objeto
- ambos son números y

  - `ambos +0 (mayores que 0)`
  - `ambos -0 (menores que 0)`
  - ambos son {{jsxref("NaN")}}
  - o ambos no son cero o no son de tipo {{jsxref("NaN")}} y tienen el mismo valor

Esta comparación _no_ es igual a la que realiza el operador {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}}. El operador {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}} aplica varias coerciones(comprobaciones) en ambos sentidos (si no tienen el mismo Type) antes de probar la igualdad (lo que resulta en comportamientos como `"" == false` siendo `true`), pero `Object.is` no obliga a niguno de los valores.

Esta _tampoco_ es igual a la que realiza el operador {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}}. El operador {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}} (y el operador {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}}) trata los valores `-0` `y +0` como iguales, y además, trata {{jsxref("Number.NaN")}} como no igual a {{jsxref("NaN")}}.

## Ejemplos

```js
Object.is("foo", "foo"); // true
Object.is(window, window); // true

Object.is("foo", "bar"); // false
Object.is([], []); // false

var test = { a: 1 };
Object.is(test, test); // true

Object.is(null, null); // true

// Special Cases
Object.is(0, -0); // false
Object.is(-0, -0); // true
Object.is(NaN, 0 / 0); // true
```

## [Polyfill](https://en.wikipedia.org/wiki/Polyfill) para navegadores no ES6

`Object.is()` es una adición propuesta en el estandar ECMA-262; y como tal, puede no estar presente en todos los navegadores. Para los casos en que no tenga disponible este método, podría utilizar este código haciendolo que se cargue antes que cualquier otro script. Esto permite que puedas utilizar `Object.is()` en los navegadores que no lo llevan incluído.

```js
if (!Object.is) {
  Object.is = function (x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  };
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Comparadores de igualdad e identidad](/es/docs/Web/JavaScript/Equality_comparisons_and_sameness) —Una comparación de las 3 operaciones de cotejamiento integradas.
