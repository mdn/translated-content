---
title: Date.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toString
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Date/toString
original_slug: Web/JavaScript/Referencje/Obiekty/Date/toString
---
{{JSRef}}

## Podsumowanie

Zwraca łańcuch znaków, reprezentujący określony obiekt `Date`.

## Składnia

    dateObj.toString()

### Parametry

Brak.

## Opis

Obiekt {{jsxref("Date")}} przesłania metodę `toString` z obiektu {{jsxref("Object")}}; nie dziedziczy {{jsxref("Object.prototype.toString()")}}. Dla obiektów {{jsxref("Date")}}, metoda `toString()` zwraca łańcuch znaków, które reprezentują obiekt.

JavaScript wywołuje metodę `toString()` automatycznie wtedy, gdy data jest reprezentowana jako wartość tekstowa lub kieruje powiązanym łańcuchem znaków.

## Przykłady

### Przykład: Zastosowanie `toString()`

Następujący przykład przydziela `toString` wartość obiektu `Date` do `myVar`:

```js
var x = new Date();
myVar=x.toString();   //przydziela wartość myVar, podobnie do:
// Mon Sep 28 14:36:22 GMT-0700 (Pacific Daylight Time) 1998
```

## Zobacz także

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
