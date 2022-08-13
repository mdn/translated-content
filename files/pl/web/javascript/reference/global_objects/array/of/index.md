---
title: Array.of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
translation_of: Web/JavaScript/Reference/Global_Objects/Array/of
original_slug: Web/JavaScript/Referencje/Obiekty/Array/of
---
{{JSRef}}

`Metoda Array.of()` tworzy nową instancję obiektu `Array`, która zawiera w sobie wszystkie argumenty przekazane do funkcji, niezależnie od ich liczby i typu.

Różnica pomiędzy **`Array.of()`** i konstruktorem **`Array`** polega na różnej interpretacji argumentów - **`Array.of(7)`** tworzy nową tablicę z jednym elementem(`7`), gdzie **`Array(7)`** tworzy nową tablicę z właściwością `length` ustawioną na 7 (**Notatka:** Oznacza to tablicę z `7` wolnymi miejscami, nie miejscami z wartościami `undefined`).

```js
Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]
```

## Składnia

    Array.of(element0[, element1[, ...[, elementN]]])

### Parametry

- `elementN`
  - : Elementy, które tworzą tablicę.

### Wartość zwracana

Nowa instancja obiektu {{jsxref("Array")}}.

## Opis

Ta funkcja jest częścią standardu ECMAScript 2015. Po więcej informacji zobacz [`Array.of` and `Array.from` proposal](https://gist.github.com/rwaldron/1074126) i [`Array.of` polyfill](https://gist.github.com/rwaldron/3186576).

## Przykłady

```js
Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
```

## Polyfill

Uruchomienie tego kodu przed innym stworzy `Array.of()` nawet jeśli nie jest ona dostępna natywnie.

```js
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}
```

## Specyfikacje

| Specyfikacja                                                         | Status                       | Komentarz             |
| -------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{SpecName('ES2015', '#sec-array.of', 'Array.of')}} | {{Spec2('ES2015')}}     | Początkowa definicja. |
| {{SpecName('ESDraft', '#sec-array.of', 'Array.of')}} | {{Spec2('ESDraft')}} |                       |

## Browser compatibility

{{Compat("javascript.builtins.Array.of")}}

## Zobacz także

- {{jsxref("Array")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of()")}}
