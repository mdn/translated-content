---
title: Number.prototype.toFixed()
slug: Web/JavaScript/Reference/Global_Objects/Number/toFixed
tags:
  - JavaScript
  - Method
  - Number
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toFixed
original_slug: Web/JavaScript/Referencje/Obiekty/Number/toFixed
---
{{JSRef}}

## Podsumowanie

Formatuje liczbę stosując notację stałoprzecinkową.

## Składnia

    numObj.toFixed([digits])

### Parametr

- digits
  - : Liczba cyfr, które mają zostać wyświetlone po kropce dziesiętnej; może to być wartość z zakresu od 0 do 20 włącznie, ale implementacje mogą opcjonalnie wprowadzać większe zakresy. Jeśli argument zostanie pominięty, przyjmowana jest wartość 0.

### Zwraca

Reprezentację wartości `number` w postaci łańcucha znaków, która nie stosuje notacji wykładniczej i posiada dokładnie tyle cyfr po separatorze dziesiętnym, ile wskazuje na to wartość parametru `digits`. Liczba w razie konieczności jest zaokrąglana, a część ułamkowa wypełniana zerami, aby liczba posiadała określoną długość. Jeśli liczba `number` jest większa niż 1e+21, metoda ta po prostu wywołuje {{jsxref("Number.prototype.toString()")}} i zwraca łańcuch znaków w notacji wykładniczej.

### Wyrzuca

- {{jsxref("Obiekty/RangeError", "RangeError")}}
  - : Jeśli wartość parametru `digits` jest za duża lub za mała. Wartości z zakresu od 0 do 20 włącznie nie spowodują wystąpienia {{jsxref("Obiekty/RangeError", "RangeError")}}. Dopuszcza się na obsługę mniejszych lub większych wartości przez różne implementacje.

<!---->

- {{jsxref("Obiekty/TypeError", "TypeError")}}
  - : Jeśli ta metoda jest przywołana w obiekcie, który nie jest obiektem {{jsxref("Number")}}.

## Przykłady

```js
var n = 12345.6789;

n.toFixed();              // zwraca 12346: zauważ zaokrąglenie i brak części ułamkowej
n.toFixed(1);             // zwraca 12345.7: zauważ zaokrąglenie
n.toFixed(6);             // zwraca 12345.678900: zauważ dodane zera
(1.23e+20).toFixed(2);    // zwraca 123000000000000000000.00
(1.23e-10).toFixed(2)     // zwraca 0.00
```

## Zobacz także

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
