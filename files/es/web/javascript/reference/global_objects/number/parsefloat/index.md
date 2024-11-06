---
title: Number.parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseFloat
---

{{JSRef}}

El método **`Number.parseFloat()`** analiza un argumento y devuelve un número de punto flotante. Si un número no se puede analizar a partir del argumento, devuelve {{jsxref("NaN")}}.

{{EmbedInteractiveExample("pages/js/number-parsefloat.html")}}

## Sintaxis

```js
Number.parseFloat(string);
```

### Parámetros

- `string`
  - : El valor a analizar. Si este argumento no es una cadena, entonces se convierte en una usando la operación abstracta [`ToString`](https://tc39.es/ecma262/#sec-tostring). Se ignora el {{glossary("whitespace","espacio en blanco")}} inicial en este argumento.

### Valor de retorno

Un número de coma flotante convertido a partir del `string` dado.

O {{jsxref("NaN")}} cuando el primer carácter que no es un espacio en blanco no se puede convertir en un número.

## Ejemplos

### Number.parseFloat vs parseFloat

Este método tiene la misma funcionalidad que la función global {{jsxref("parseFloat", "parseFloat()")}}:

```js
Number.parseFloat === parseFloat; // true
```

Este método también es parte de ECMAScript 2015. (Su propósito es la modularización de globales).

Consulte {{jsxref("parseFloat", "parseFloat()")}} para obtener más detalles y ejemplos.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Polyfill de `Number.parseFloat` en `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}: El objeto al que pertenece este método.
- El método global {{jsxref("parseFloat", "parseFloat()")}}.
