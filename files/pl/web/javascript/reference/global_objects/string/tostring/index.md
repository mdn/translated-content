---
title: String.protype.toString()
slug: Web/JavaScript/Reference/Global_Objects/String/toString
tags:
  - JavaScript
  - Method
  - Prototype
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/toString
original_slug: Web/JavaScript/Referencje/Obiekty/String/toString
---
{{JSRef}}

## Podsumowanie

Zwraca łańcuch znaków reprezentujący dany obiekt.

## Składnia

    str.toString()

## Opis

Obiekt {{jsxref("String")}} przesłania metodę `toString` obiektu {{jsxref("Object")}}; nie dziedziczy {{jsxref("Object.prototype.toString()")}}. Dla obiektów {{jsxref("String")}}, metoda `toString()` zwraca łańcuch znaków reprezentujący obiekt.

## Przykłady

### Przykład: Zastosowanie `toString()`

Następujący przykład wyświetli wartość łańcuch znaków obiektu {{jsxref("String")}}:

```js
var x = new String("Witaj świecie");

console.log(x.toString())      // Wyświetla "Witaj świecie"
```

## Zobacz także

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("String.prototype.valueOf()")}}
