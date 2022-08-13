---
title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/isNaN
tags:
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/isNaN
original_slug: Web/JavaScript/Referencje/Obiekty/isNaN
---
{{jsSidebar("Objects")}}

## Podsumowanie

Sprawdza, czy argument nie ma wartości NaN ("nie-liczba").

## Składnia

    isNaN(testowanaWartość)

### Parametry

- `testowanaWartość`
  - : Wartość do sprawdzenia.

## Opis

`isNaN` jest funkcją najwyższego rzędu i nie jest przypisana do żadnego obiektu.

Funkcje `parseFloat` i `parseInt` zwracają `NaN`, kiedy wyliczą wartość, która nie jest liczbą. `isNaN` zwraca `true`, jeśli przekazano jej `NaN`, a `false` w przeciwnym wypadku.

Funkcja ta jest o tyle przydatna, że wartości {{jsxref("NaN", "NaN")}} nie można skutecznie sprawdzać przy użyciu operatorów równości. `x == NaN` i `x === NaN` mają zawsze wartość `false`, bez względu na to, jaką wartość ma `x`, nawet jeśli `x` to `NaN`. Na przykład, zarówno `1 == NaN`, jak i `NaN == NaN` zwracają `false`.

## Przykłady

### Przykład: Zastosowanie `isNaN`

Poniższy przykład wylicza wartość `floatValue`, by sprawdzić, czy jest liczbą, a następnie wywołuje odpowiednią procedurę.

```js
var floatValue = parseFloat(toFloat);

if (isNaN(floatValue)) {
   notFloat();
} else {
   isFloat();
}
```

## Zobacz także

- {{jsxref("NaN")}}
- {{jsxref("Number.isNaN()")}}
