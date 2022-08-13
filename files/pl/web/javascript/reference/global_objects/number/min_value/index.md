---
title: Number.MIN VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
tags:
  - JavaScript
  - Number
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
original_slug: Web/JavaScript/Referencje/Obiekty/Number/MIN_VALUE
---
{{JSRef}}

## Podsumowanie

Najmniejsza dodatnia wartość liczbowa, której reprezentacja jest możliwa w języku JavaScript.

{{js_property_attributes(0, 0, 0)}}

## Opis

Własność `MIN_VALUE` to najbliższa zeru liczba dodatnia, jakiej reprezentacja jest możliwa w języku JavaScript - nie jest to najmniejsza liczba ujemna.

`MIN_VALUE` ma wartość ok. 5e-324. Wartości mniejsze niż `MIN_VALUE` (ang. "underflow values") konwertowane są do 0.

Ponieważ `MIN_VALUE` jest statyczną własnością {{jsxref("Number")}}, używa jej się zawsze jako `Number.MIN_VALUE`, a nie jako własność utworzonego przez programistę obiektu {{jsxref("Number")}}.

## Przykłady

### Przykład: Zastosowanie `Number.MIN_VALUE`

Poniższy kod dzieli jedną liczbę przez drugą. Jeśli wynik jest większy lub równy `MIN_VALUE`, wywoływana jest funkcja `func1`, w przeciwnym wypadku wywoływana jest funkcja `func2`.

```js
if (num1 / num2 >= Number.MIN_VALUE) {
   func1();
} else {
   func2();
}
```
