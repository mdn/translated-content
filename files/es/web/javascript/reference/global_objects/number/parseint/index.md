---
title: Number.parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
original_slug: Web/JavaScript/Referencia/Objetos_globales/Number/parseInt
---

{{JSRef}}

The **`Number.parseInt()`** method parses a string argument and returns an integer of the specified radix or base.

The **`Number.parseInt()`** El método Number.parseInt () analiza un argumento de cadena y devuelve un entero de la raíz o base especificada.

{{EmbedInteractiveExample("pages/js/number-parseint.html", "taller")}}

## Sintaxis

```
Number.parseInt(string,[ radix])
```

### Parameters

- `string`
  - : The value to parse. If this argument is not a string, then it is converted to one using the [`ToString`](https://tc39.es/ecma262/#sec-tostring) abstract operation. Leading whitespace in this argument is ignored.
- `radix` {{optional_inline}}
  - : An integer between `2` and `36` that represents the _radix_ (the base in mathematical numeral systems) of the `string`. Be careful—this does **_not_** default to `10`!

### Return value

An integer parsed from the given `string`.

If the `radix` is smaller than `2` or bigger than `36`, and the first non-whitespace character cannot be converted to a number, {{jsxref("NaN")}} is returned.

## Description

This method has the same functionality as the global {{jsxref("parseInt", "parseInt()")}} function:

```js
Number.parseInt === parseInt // true
```

and is part of ECMAScript 2015 (its purpose is modularization of globals). Please see {{jsxref("parseInt", "parseInt()")}} for more detail and examples.

## Polyfill

```js
if (Number.parseInt === undefined) {
    Number.parseInt = window.parseInt
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- The {{jsxref("Number")}} object it belongs to.
- The global {{jsxref("parseInt", "parseInt()")}} method.
