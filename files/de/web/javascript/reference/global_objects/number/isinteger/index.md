---
title: Number.isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
tags:
  - JavaScript
  - Method
  - Number
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Number/isInteger
---
{{JSRef}}

Die **`Number.isInteger()`** Methode prüft, ob ein übergebener Parameter eine ganze Zahl ist.

{{EmbedInteractiveExample("pages/js/number-isinteger.html")}}

## Syntax

    Number.isInteger(value)

### Parameter

- `value`
  - : Wert der getestet wird, ob er eine ganze Zahl ist.

### Rückgabewert

Ein {{jsxref("Boolean")}} der angibt, ob der übergebene Wert eine ganze Zahl ist oder nicht.

## Beschreibung

Wenn der übergebene Wert eine ganze Zahl ist, wird `true` zurückgegeben, anderfalls wird `false` zurückgegeben. Wenn der Wert {{jsxref("NaN")}} oder Unendlich (Infinity) ist, wird `false` zurückgegeben.

## Beispiele

```js
Number.isInteger(0);         // true
Number.isInteger(1);         // true
Number.isInteger(-100000);   // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1);       // false
Number.isInteger(Math.PI);   // false

Number.isInteger(NaN);       // false
Number.isInteger(Infinity);  // false
Number.isInteger(-Infinity); // false
Number.isInteger('10');      // false
Number.isInteger(true);      // false
Number.isInteger(false);     // false
Number.isInteger([1]);       // false
```

## Polyfill

```js
Number.isInteger = Number.isInteger || function(value) {
  return typeof value === 'number' &&
    isFinite(value) &&
    Math.floor(value) === value;
};
```

## Spezifikationen

| Spezifikation                                                                                | Status                       | Kommentar            |
| -------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-number.isinteger', 'Number.isInteger')}}         | {{Spec2('ES6')}}         | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-number.isinteger', 'Number.isInteger')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Number.isInteger")}}

## Siehe auch

- {{jsxref("Number")}}
