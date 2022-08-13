---
title: Number.MAX_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
tags:
  - JavaScript
  - Number
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
original_slug: Web/JavaScript/Referencje/Obiekty/Number/MAX_VALUE
---
{{JSRef}}

## Podsumowanie

Największa liczba, której reprezentacja jest możliwa w języku JavaScript.

{{js_property_attributes(0, 0, 0)}}

## Opis

Własność `MAX_VALUE` ma wartość ok. 1.79E+308. Wartości większe niż `MAX_VALUE` są reprezentowane jako "`Infinity`" (nieskończoność).

Ponieważ `MAX_VALUE` jest statyczną własnością {{jsxref("Number")}}, używa jej się zawsze jako `Number.MAX_VALUE`, a nie jako własność utworzonego przez programistę obiektu {{jsxref("Number")}}.

## Przykłady

## Przykład: Zastosowanie `MAX_VALUE`

Poniższy kod mnoży dwie liczby. Jeśli wynik jest większy lub równy `MAX_VALUE`, wywoływana jest funkcja `func1`, w przeciwnym wypadku wywoływana jest funkcja `func2`.

    if (num1 * num2 <= Number.MAX_VALUE) {
       func1();
    } else {
       func2();
    }
