---
title: Number.isSafeInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
---

{{JSRef}}

El método **`Number.isSafeInteger()`** determina si el valor provisto es un número que es un entero seguro.

{{EmbedInteractiveExample("pages/js/number-issafeinteger.html")}}

Un entero seguro es un entero que

- puede ser exactamente representado como un número IEEE-754 de doble presición, y
- su representación IEEE-754 no puede ser el resultado de redondear cualquier otro entero para adaptarse a la representación de IEEE-754.

Por ejemplo, `253 - 1` es un entero seguro: puede ser exactamente representado y ningún otro entero puede ser redondeado a él bajo cualquier modo de redondeo de IEEE-754. En contraste, `253` _no_ es un entero seguro, puede ser exactamente representado en IEEE-754, pero el entero `253 + 1` no puede ser directamente representado en IEEE-754 pero en su lugar, redondea a `253` bajo los modos de redondeo _redondeo-al-más-cercano_ y _redondeo-a-cero_. Los enteros seguros consisten en todos los enteros desde `-(253 - 1)` inclusivo, hasta `253 - 1` inclusivo (± `9007199254740991` o ± 9,007,199,254,740,991).

Manejar valores más grandes o más pequeños que \~9 cuatrillones con presición completa requiere usar una [biblioteca de artimética de presición arbitraria](https://en.wikipedia.org/wiki/Arbitrary-precision_arithmetic). Ver [Lo que todo programador necesita saber sobre aritmética de punto flotante](http://floating-point-gui.de/) para más información sobre representaciones de punto flotante de los números.

## Sintaxis

```
Number.isSafeInteger(valorDePrueba)
```

### Parámetros

- `valorDePrueba`
  - : El valor a probar si es un entero seguro.

### Valor de retorno

Un {{jsxref("Boolean")}} que indica si el valor dado es un número que es entero seguro.

## Ejemplos

```js
Number.isSafeInteger(3); // true
Number.isSafeInteger(Math.pow(2, 53)); // false
Number.isSafeInteger(Math.pow(2, 53) - 1); // true
Number.isSafeInteger(NaN); // false
Number.isSafeInteger(Infinity); // false
Number.isSafeInteger("3"); // false
Number.isSafeInteger(3.1); // false
Number.isSafeInteger(3.0); // true
```

## Polyfill

```js
Number.isSafeInteger =
  Number.isSafeInteger ||
  function (value) {
    return (
      Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER
    );
  };
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- El objeto {{jsxref("Number")}} al que pertenece.
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
