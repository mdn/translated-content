---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
tags:
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/parseInt
original_slug: Web/JavaScript/Referencje/Obiekty/parseInt
---
{{jsSidebar("Objects")}}

## Podsumowanie

Przetwarza argument w postaci łańcucha znaków i zwraca liczbę całkowitą typu
_integer_
, o zadanej podstawie.

## Składnia

    parseInt(string, radix);

### Parametry

- `string`
  - : Łańcuch znaków zawierający wartość do przetworzenia.

- `radix`
  - : Liczba typu
    _integer_
    określająca podstawę powyższego łańcucha (np. 2 - system dwójkowy, 10 - system dziesiętny, przyp. tłum.)

## Opis

`parseInt` jest funkcją najwyższego poziomu i nie jest związana z żadnym obiektem.

Funkcja `parseInt` parsuje jej pierwszy argument, łańcuch znaków, i próbuje zwrócić liczbę całkowitą typu
_integer_
o podanej podstawie. Na przykład, podstawa 10 oznacza że liczba w łańcuchu jest liczbą dziesiętną, podstawa 8 - ósemkową, 16 - szesnastkową (heksadecymalną), itd. Dla podstaw większych niż 10, litery alfabetu oznaczają cyfry większe niż 9. Dla przykładu, dla liczb szesnastkowych (o podstawie 16), używane są litery od A do F.

Jeśli `parseInt` natknie się na znak nie będący cyfrą o danej podstawie, ignoruje ona ten znak i wszystkie następne znaki, a następnie zwraca wartość przetworzoną do tej pory. `parseInt` przycina liczby do wartości całkowitych. Początkowe i grupujące spacje są dozwolone.

Jeśli podstawa nie jest podana lub jest podana jako 0, JavaScript przyjmuje:

- Podstawę `16`, jeśli łańcuch wejściowy zaczyna się od "`0x`".
- Podstawę `8` jeśli łańcuch wejściowy rozpoczyna się od "`0`". Ta cecha jest wycofywana.
- Podstawę `10` jeśli łańcuch zaczyna się od jakiejkolwiek innej wartości.

Jeśli pierwszy znak nie może być skonwertowany na liczbę, `parseInt` zwraca `NaN`.

Dla potrzeb arytmetycznych, wartość `NaN` nie jest liczbą o żadnej podstawie. Możesz wywołać funkcję {{jsxref("isNaN", "isNaN()")}}, by stwierdzić czy wynik `parseInt` będzie `NaN`. Jeśli `NaN` jest podane do jakichkolwiek operacji arytmetycznych, wynikiem tych operacji również będzie `NaN`.

## Przykłady

### Przykład: Zastosowanie `parseInt()`

Wszystkie poniższe przykłady zwracają 15:

```js
parseInt(" 0xF, 16);
parseInt(" F", 16);
parseInt("17", 8);
parseInt(021, 8);
parseInt(15.99, 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15*3", 10);
parseInt("15e2", 10);
parseInt("15px", 10);
parseInt("12", 13);
```

Wszystkie poniższe przykłady zwracają **`NaN`**:

```js
parseInt("Hello", 8); // nie jest wcale liczbą
parseInt("546", 2); // te cyfry nie są używane do zapisu liczb binarnych
```

Wszystkie poniższe przykłady zwracają **-15**:

```js
parseInt("-F", 16);
parseInt("-0F", 16);
parseInt("-0XF", 16);
parseInt("-15.1, 10);
parseInt(" -17", 8);
parseInt(" -15", 10);
parseInt("-1111", 2);
parseInt("-15e1", 10);
parseInt("-12", 13);
```

Wszystkie poniższe przykłady zwracają **224**:

```js
parseInt("0e0", 16);
```



## Zobacz także

- {{jsxref("parseFloat", "parseFloat()")}}
- {{jsxref("Number.parseFloat()")}}
- {{jsxref("Number.parseInt()")}}
- {{jsxref("isNaN", "isNaN()")}}
- {{jsxref("Number.toString()")}}
- {{jsxref("Object.valueOf")}}
