---
title: String.prototype.big()
slug: Web/JavaScript/Reference/Global_Objects/String/big
tags:
  - Deprecated
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/big
original_slug: Web/JavaScript/Referencje/Obiekty/String/big
---
{{JSRef}} {{deprecated_header}}

## Podsumowanie

Powoduje, iż łańcuch znaków zostanie wyświetlony jakby znajdował się wewnątrz znacznika {{HTMLElement("big")}}.

## Składnia

    str.big()

## Opis

The `big()` method embeds a string in a `<big>` tag: `"<big>str</big>"`.

## Przykłady

### Przykład: Zastosowanie `big()`

Następujący przykład stosuje metodę string do zmiany rozmiaru łańcucha znaków:

```js
var worldString = "Witaj, Świecie";

console.log(worldString.small());     // <small>Witaj, Świecie</small>
console.log(worldString.big());       // <big>Witaj, Świecie</big>
console.log(worldString.fontsize(7)); // <fontsize=7>Witaj, Świecie</fontsize>
```

## Zobacz także

- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.small()")}}
