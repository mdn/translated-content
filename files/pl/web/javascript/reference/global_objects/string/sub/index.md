---
title: String.prototype.sub()
slug: Web/JavaScript/Reference/Global_Objects/String/sub
tags:
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/sub
original_slug: Web/JavaScript/Referencje/Obiekty/String/sub
---
{{JSRef}}{{deprecated_header}}

## Podsumowanie

Powoduje, iż łańcuch zostanie wyświetlony jako indeks dolny tak jakby był wewnątrz znacznika {{HTMLElement("sub")}}.

## Składnia

    str.sub()

## Opis

The `sub()` method embeds a string in a `<sub>` tag: `"<sub>str</sub>"`.

## Przykłady

#### Przykład: Zastosowanie metod `sub()` i `sup()`

Następujący przykład stosuje metody `sub()` i {{jsxref("String.prototype.sup()", "sup()")}} do formatowania łańcucha znaków:

```js
var superText="superscript";
var subText="subscript";

console.log("This is what a " + superText.sup() + " looks like.");
// This is what a <sup>superscript</sup> looks like

console.log("This is what a " + subText.sub() + " looks like.");
// This is what a <sub>subscript</sub> looks like.
```

## Zobacz także

- {{jsxref("String.prototype.sup()")}}
