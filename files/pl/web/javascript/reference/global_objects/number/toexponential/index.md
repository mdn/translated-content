---
title: Number.prototype.toExponential()
slug: Web/JavaScript/Reference/Global_Objects/Number/toExponential
tags:
  - JavaScript
  - Method
  - Number
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toExponential
original_slug: Web/JavaScript/Referencje/Obiekty/Number/toExponential
---
{{JSRef}}

## Podsumowanie

Zwraca łańcuch znaków reprezentujący Number w notacji wykładniczej.

## Składnia

    numObj.toExponential([fractionDigits])

### Parametr

- fractionDigits
  - : Liczba całkowita określająca liczbę cyfr występujących po kropce dziesiętnej. Domyślną wartością jest tyle cyfr, ile potrzeba do określenia liczby.

### Zwraca

Łańcuch znaków reprezentujący obiekt {{jsxref("Number")}} w notacji wykładniczej z jedną cyfrą przed kropką dziesiętną i zaokrągleniem do tylu cyfr po kropce, ile określa parametr `fractionDigits`. Jeśli argument `fractionDigits` zostanie pominięty, domyślnie przyjmowana jest taka wartość zaokrąglenia, która pozwala na przedstawienie wartości w sposób unikatowy.

Jeśli metoda `toExponential()` zostanie użyta do literałów liczbowych, które nie posiadają wykładnika i kropki dziesiętnej, należy wstawić spację przed kropką poprzedzającą wywołanie metody, aby zapobiec zinterpretowaniu tej kropki jako kropki dziesiętnej.

Jeśli liczba posiada więcej cyfr niż określono przez parametr `fractionDigits`, jest ona zaokrąglana do najbliższej liczby o ilości cyfr wskazanej przez wartość `fractionDigits`. Zobacz dyskusję na temat zaokrąglania w opisie metody [toFixed](pl/Dokumentacja_j%c4%99zyka_JavaScript_1.5/Obiekty/Number/toFixed), która również odnosi się do metody `toExponential()`.

## Przykład

    var num=77.1234;

    console.log("num.toExponential() is " + num.toExponential()); //wyświetla 7.71234e+1
    console.log("num.toExponential(4) is " + num.toExponential(4)); //wyświetla 7.7123e+1
    console.log("num.toExponential(2) is " + num.toExponential(2)); //wyświetla 7.71e+1
    console.log("77.1234.toExponential() is " + 77.1234.toExponential()); //wyświetla 7.71234e+1
    console.log("77 .toExponential() is " + 77 .toExponential()); //wyświetla 7.7e+1

## Zobacz także

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
