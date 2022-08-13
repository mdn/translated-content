---
title: String.prototype.italics()
slug: Web/JavaScript/Reference/Global_Objects/String/italics
tags:
  - Deprecated
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/italics
original_slug: Web/JavaScript/Referencje/Obiekty/String/italics
---
{{JSRef}}{{deprecated_header}}

## Podsumowanie

Powoduje, iż łańcuch zostanie wyświetlony kursywą tak jakby był wewnątrz znacznika {{HTMLElement("i")}}.

## Składnia

    str.italics()

## Opis

The `italics()` method embeds a string in an `<i>` tag: `"<i>str</i>"`.

## Przykłady

### Przykład: Zastosowanie metody `italics()`

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
- {{jsxref("String.prototype.strike()")}}
