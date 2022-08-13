---
title: String.prototype.bold()
slug: Web/JavaScript/Reference/Global_Objects/String/bold
tags:
  - Deprecated
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/bold
original_slug: Web/JavaScript/Referencje/Obiekty/String/bold
---
{{JSRef}}{{deprecated_header}}

## Podsumowanie

Powoduje wyświetlenie łańcucha znaków jako pogrubienia, jakby był w znaczniku {{HTMLElement("b")}}.

## Składnia

    str.bold()

## Opis

The `bold()` method embeds a string in a `<b>` tag: `"<b>str</b>"`.

## Przykłady

#### Przykład: Zastosowanie **`bold()`**

Następujący przykład stosuje metodę string do zmiany rozmiaru łańcucha znaków:

```js
var worldString="Witaj, Świecie";

console.log(worldString.blink());   // <blink>Witaj, Świecie</blink>
console.log(worldString.bold());    // <bold>Witaj, Świecie</bold>
console.log(worldString.italics()); // <i>Witaj, Świecie</i>
console.log(worldString.strike());  // <s>Witaj, Świecie</s>
```

## Zobacz także

- {{jsxref("String.prototype.blink()")}}
- {{jsxref("String.prototype.italics()")}}
- {{jsxref("String.prototype.strike()")}}
