---
title: String.prototype.strike()
slug: Web/JavaScript/Reference/Global_Objects/String/strike
tags:
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/strike
original_slug: Web/JavaScript/Referencje/Obiekty/String/strike
---
{{JSRef}}{{deprecated_header}}

## Podsumowanie

Powoduje, iż łańcuch zostanie wyświetlony przekreślony, tak jakby był wewnątrz znacznika {{HTMLElement("strike")}}.

## Składnia

    str.strike()

## Opis

The `strike()` method embeds a string in a `<strike>` tag: `"<strike>str</strike>"`.

## Przykłady

### Przykład: Zastosowanie metody `strike()`

Następujący przykład stosuje metodę `string` do zmiany formatowania łańcucha znakowego:

```js
var worldString="Witaj, Świecie";

console.log(worldString.blink());   // <blink>Witaj, Świecie</blink>
console.log(worldString.bold());    // <bold>Witaj, Świecie</bold>
console.log(worldString.italics()); // <i>Witaj, Świecie</i>
console.log(worldString.strike());  // <s>Witaj, Świecie</s>
```

## Zobacz także

- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.bold()")}}
- {{jsxref("String.prototype.italics()")}}
