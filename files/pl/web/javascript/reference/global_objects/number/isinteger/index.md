---
title: Number.isInteger()
slug: Web/JavaScript/Reference/Global_Objects/Number/isInteger
translation_of: Web/JavaScript/Reference/Global_Objects/Number/isInteger
original_slug: Web/JavaScript/Referencje/Obiekty/Number/isInteger
---
{{JSRef}}

Metoda **`Number.isInteger()`** sprawdza czy wpisana wartość jest liczbą całkowitą.

## Syntax

    Number.isInteger(value)

### Parametry

- `zmienna`
  - : Zmienna będzie testowana jako liczba.

### Zwracana wartość

Metoda zwraca wartość typu {{jsxref("Boolean")}}.

## Opis

Jeśli sprawdzana zmienna jest liczbą całkowitą metoda zwraca `true`, w innym przypadku zwraca `false`. Jeśli zmienna jest typu {{jsxref("NaN")}} lub spoza zakresu metoda zwraca `false`.

## Przykłady

```js
Number.isInteger(0);         // true
Number.isInteger(1);         // true
Number.isInteger(-100000);   // true

Number.isInteger(0.1);       // false
Number.isInteger(Math.PI);   // false

Number.isInteger(NaN);       // false
Number.isInteger(Infinity);  // false
Number.isInteger(-Infinity); // false
Number.isInteger('10');      // false
Number.isInteger(true);      // false
Number.isInteger(false);     // false
Number.isInteger([1]);       // false
```

## Polyfill

```js
Number.isInteger = Number.isInteger || function(value) {
  return typeof value === 'number' &&
    isFinite(value) &&
    Math.floor(value) === value;
};
```

## Dokumentacja

| Specification                                                                                | Status                       | Comment             |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES6', '#sec-number.isinteger', 'Number.isInteger')}}         | {{Spec2('ES6')}}         | Initial definition. |
| {{SpecName('ESDraft', '#sec-number.isinteger', 'Number.isInteger')}} | {{Spec2('ESDraft')}} |                     |

## Kompatybilne przegladarki

{{Compat("javascript.builtins.Number.isInteger")}}

## Sprawdź również

- Metoda ta należy do klasy {{jsxref("Number")}}.
