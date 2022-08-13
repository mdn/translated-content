---
title: RegExp.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/toString
tags:
  - JavaScript
  - Method
  - Prototype
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/toString
original_slug: Web/JavaScript/Referencje/Obiekty/RegExp/toString
---
{{JSRef}}

## Podsumowanie

Zwraca łańcuch znaków reprezentujący określony obiekt.

## Składnia

    regexObj.toString();

### Parametry

Brak.

## Opis

Obiekt {{jsxref("RegExp")}} przypisuje `toString()` metodzie obiektu {{jsxref("Object")}}; nie dziedziczy {{jsxref("Object.prototype.toString()")}}. Dla obiektu {{jsxref("RegExp")}}, metoda `toString()` zwraca łańcuch znaków reprezentujący obiekt.

## Przykłady

### Przykład: Zastosowanie `toString()`

Następujący przykład wyświetla wartość łańcucha znaków obiektu `RegExp`:

```js
var myExp = new RegExp('a+b+c');
console.log(myExp.toString());  // wyświetli '/a+b+c/'

var foo = new RegExp('bar', 'g');
console.log(foo.toString());    // wyświetli '/bar/g'
```

## Zobacz także

- {{jsxref("Object.prototype.toString()")}}
