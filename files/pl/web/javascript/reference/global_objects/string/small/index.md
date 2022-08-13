---
title: String.prototype.small()
slug: Web/JavaScript/Reference/Global_Objects/String/small
tags:
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/String/small
original_slug: Web/JavaScript/Referencje/Obiekty/String/small
---
{{JSRef}} {{deprecated_header}}

## Podsumowanie

Powoduje to, że łańcuch znaków będzie wyświetlany małą czcionką, jakby znajdował się wewnątrz znacznika {{HTMLElement("small")}}.

## Składnia

    str.small()

## Opis

The `small()` method embeds a string in a `<small>` tag: `"<small>str</small>"`.

## Przykłady

### Przykład: Zastosowanie metody `small()`

```js
var worldString = "Witaj, Świecie";

console.log(worldString.small());     // <small>Witaj, Świecie</small>
console.log(worldString.big());       // <big>Witaj, Świecie</big>
console.log(worldString.fontsize(7)); // <fontsize=7>Witaj, Świecie</fontsize>
```

## Zobacz także

- {{jsxref("String.prototype.fontsize()")}}
- {{jsxref("String.prototype.big()")}}
