---
title: Number.prototype.toPrecision()
slug: Web/JavaScript/Reference/Global_Objects/Number/toPrecision
tags:
  - JavaScript
  - Method
  - Number
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toPrecision
original_slug: Web/JavaScript/Referencje/Obiekty/Number/toPrecision
---
{{jsref}}

## Podsumowanie

Zwraca łańcuch znaków reprezentujący dany obiekt Number z określoną dokładnością.

## Składnia

    numObj.toPrecision([precision])

### Parametr

- precision
  - : Liczba całkowita określająca liczbę cyfr po kropce dziesiętnej.

### Zwraca

Łańcuch znaków reprezentujący obiekt {{jsxref("Number")}} w notacji stałoprzecinkowej lub wykładniczej z zaokrągleniem do tylu ważnych cyfr, ile wskazuje wartość `precision`.

Jeśli metoda `toPrecision()` zostanie użyta do literałów liczbowych, które nie posiadają wykładnika i kropki dziesiętnej, należy wstawić spację przed kropką poprzedzającą wywołanie metody, aby zapobiec zinterpretowaniu tej kropki jako kropki dziesiętnej.

Jeśli argument `precision` zostanie pominięty, metoda zachowuje się jak {{jsxref("Number.prototype.toString()")}}.

Jeśli liczba posiada więcej cyfr niż określono przez parametr `precision`, jest ona zaokrąglana do najbliższej liczby o ilości cyfr wskazanej przez wartość `precision`. Zobacz dyskusję na temat zaokrąglania w opisie metody {{jsxref("Number.prototype.toFixed()")}}, która również odnosi się do metody `toPrecision`.

## Przykład

```js
var num=5.123456;

console.log("num.toPrecision() is " + num.toPrecision()); //wyświetli 5.123456
console.log("num.toPrecision(4) is " + num.toPrecision(4)); //wyświetli 5.123
console.log("num.toPrecision(2) is " + num.toPrecision(2)); //wyświetli  5.1
console.log("num.toPrecision(1) is " + num.toPrecision(1)); //wyświetli 5
console.log("1250 .toPrecision(2) is " + 1250 .toPrecision(2)); //wyświetli 1.3e+3
console.log("1250 .toPrecision(5) is " + 1250 .toPrecision(5)); //wyświetli 1250.0
```

## Zobacz także

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toString()")}}
