---
title: String.prototype.sup()
slug: Web/JavaScript/Reference/Global_Objects/String/sup
tags:
  - Deprecated
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/sup
original_slug: Web/JavaScript/Referencje/Obiekty/String/sup
---
{{JSRef}}{{deprecated_header}}

## Podsumowanie

Powoduje, iż łańcuch zostanie wyświetlony jako indeks górny tak jakby był wewnątrz znacznika {{HTMLElement("sup")}}.

## Składnia

    str.sup()

## Opis

The `sup()` method embeds a string in a `<sup>` tag: `"<sup>str</sup>"`.

## Przykłady

#### Przykład: Zastosowanie metody `sub()` i `sup()`

Następujący przykład stosuje metodę {{jsxref("String.prototype.sub()", "sub()")}} i `sup()` do zmiany formatu łańcucha znaków:

```js
var superText="superscript";
var subText="subscript";

console.log("This is what a " + superText.sup() + " looks like.");
// This is what a <sup>superscript</sup> looks like

console.log("This is what a " + subText.sub() + " looks like.");
// This is what a <sub>subscript</sub> looks like.
```

## Zobacz także

- {{jsxref("String.prototype.sub()")}}
