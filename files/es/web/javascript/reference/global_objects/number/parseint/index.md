---
title: Number.parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
l10n:
  sourceCommit: 6a0f9553932823cd0c4dcf695d4b4813474964fb
---

{{JSRef}}

El método estático **`Number.parseInt()`** analiza un argumento de cadena y devuelve un número entero de la raíz o base especificada.

{{EmbedInteractiveExample("pages/js/number-parseint.html", "taller")}}

## Sintaxis

```js-nolint
Number.parseInt(string)
Number.parseInt(string, radix)
```

### Parámetros

- `string`
  - : El valor a analizar, [forzado a una cadena](/es/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Se ignoran los espacios en blanco iniciales en este argumento.
- `radix` {{optional_inline}}

  - : Un número entero entre `2` y `36` que representa la _base_ (la base en los sistemas numéricos matemáticos) del `string`.

    Si `radix` no está definida o es `0`, se supone que es `10`, excepto cuando el número comienza con los pares de unidades de código `0x` o `0X`, en cuyo caso se asume una base de `16`.

### Valor devuelto

Un entero analizado a partir del `string` dado.

Si `radix` es menor que `2` o mayor que `36`, o el primer carácter que no es un espacio en blanco no se puede convertir en un número, se devuelve {{jsxref("NaN")}}.

## Ejemplos

### Number.parseInt vs. parseInt

Este método tiene la misma funcionalidad que la función global {{jsxref("parseInt", "parseInt()")}}:

```js
Number.parseInt === parseInt; // true
```

Su propósito es la modularización de globales. Consulte {{jsxref("parseInt", "parseInt()")}} para obtener más detalles y ejemplos.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Number.parseInt` en `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- El objeto {{jsxref("Number")}} al que pertenece.
- El método global {{jsxref("parseInt", "parseInt()")}}.
