---
title: Number.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toString
tags:
  - JavaScript
  - Method
  - Number
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toString
original_slug: Web/JavaScript/Referencje/Obiekty/Number/toString
---
{{JSRef}}

## Podsumowanie

Zwraca łańcuch znaków reprezentujący dany obiekt {{jsxref("Number")}}.

## Składnia

    numObj.toString([radix])

### Parametr

- radix
  - : Liczba całkowita z zakresu od 2 do 36 określająca podstawę użytą do reprezentacji wartości liczbowych.

## Opis

Obiekt `Number` przesłania metodę `toString` obiektu {{jsxref("Object")}}; nie dziedziczy {{jsxref("Object.prototype.toString()")}}. Dla obiektów `Number` metoda `toString()` zwraca łańcuch znaków reprezentujący obiekt w danej podstawie wyliczeń.

Metoda toString przetwarza pierwszy podany argument i próbuje zwrócić reprezentację w postaci łańcucha znaków w określonej podstawie wyliczeń. Dla podstawy większej od 10 litery alfabetu wskazują liczby większe niż 9. Przykładowo dla liczb heksadecymalnych (podstawa 16) użyte zostaną litery od A do F.

Jeśli jako argument `toString()` podano podstawę nie będącą w zakresie od 2 do 36, zostanie wywołany wyjątek.

Jeśli podstawa nie została określona, JavaScript przyjmuje za podstawę wartość 10.

## Przykłady

```js
var count = 10;

console.log(count.toString());    // displays '10'
console.log((17).toString());     // displays '17'

var x = 6;

console.log(x.toString(2));       // displays '110'
console.log((254).toString(16));  // displays 'fe'

console.log((-10).toString(2));   // displays '-1010'
console.log((-0xff).toString(2)); // displays '-11111111'
```

## Zobacz także

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
