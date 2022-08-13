---
title: BigInt.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/valueOf
tags:
  - BigInt
  - JavaScript
  - Metodă
  - Prototype
  - valueOf()
translation_of: Web/JavaScript/Reference/Global_Objects/BigInt/valueOf
original_slug: Web/JavaScript/Referencje/Obiekty/BigInt/valueOf
---
{{JSRef}}

Metoda **`valueOf()`** zwraca opakowaną wartość prymitywną obiektu {{jsxref("BigInt")}}.

{{EmbedInteractiveExample("pages/js/bigint-valueof.html","shorter")}}

## Składnia

    bigIntObj.valueOf()

### Zwracana wartość

BigInt reprezentujący wartość prymitywną danego obiektu {{jsxref("BigInt")}}.

## Przykłady

### Użycie `valueOf`

```js
typeof Object(1n); // object
typeof Object(1n).valueOf(); // bigint
```

## Specyfikacje

| Specyfikacja                                                                                                         |
| -------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-bigint.prototype.valueof', 'BigInt.prototype.valueOf()')}} |

## Wsparcie przeglądarek

{{Compat("javascript.builtins.BigInt.valueOf")}}

## Zobacz też

- {{jsxref("BigInt.prototype.toString()")}}
