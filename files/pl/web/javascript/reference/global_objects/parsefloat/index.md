---
title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/parseFloat
tags:
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/parseFloat
original_slug: Web/JavaScript/Referencje/Obiekty/parseFloat
---
{{jsSidebar("Objects")}}

## Podsumowanie

Przetwarza argument w postaci łańcucha znaków zwracając liczbę zmiennoprzecinkową.

## Składnia

    parseFloat(string)

### Parametry

- `string`
  - : Łańcuch znaków do przetworzenia.

## Opis

`parseFloat()` jest funkcją najwyższego poziomu, niepowiązaną z żadnym obiektem.

`parseFloat()` przetwarza argument będący łańcuchem znaków i zwraca liczbę zmiennoprzecinkową. Jeśli natknie się na znak inny niż `+`, `-`, liczbę (`0`-`9`), kropkę dziesiętną ("`.`") lub wykładnik potęgi, zwraca wartość do tego miejsca i ignoruje dany znak oraz wszystkie dalsze znaki. Dozwolone są spacje na początku i na końcu łańcucha znaków.

Jeśli pierwszy znak nie może być przekonwertowany do liczby, `parseFloat()` zwraca `NaN`.

W zastosowaniach arytmetycznych, wartość `NaN` nie jest liczbą w żadnej podstawie wyliczeń (ang.
_radix_
). Aby stwierdzić, czy wynik `parseFloat` będzie `NaN`, można wywołać funkcję {{jsxref("isNan", "isNaN()")}}. Jeśli wartość `NaN` użyta zostanie w operacji arytmetycznej, wynikiem operacji także będzie `NaN`.

**Uwaga:** Funkcja `parseFloat` wymaga, aby punktem dziesiętnym była kropka, a nie przecinek. Zastosowanie przecinka spowoduje pominięcie części ułamkowej.

## Przykłady

## Przykład: `parseFloat()` zwraca liczbę

Wszystkie poniższe przykłady zwracają 3.14.

```js
parseFloat("3.14");
parseFloat("314e-2");
parseFloat("0.0314E+2");
parseFloat("3.14 więcej znaków nienumerycznych");
```

### Przykład: `parseFloat()` zwraca NaN

Poniższy przykład zwraca `NaN`:

```js
parseFloat("FF2");
```

## Zobacz także

- {{jsxref("parseInt", "parseInt()")}}
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("isNaN", "isNaN()")}}
