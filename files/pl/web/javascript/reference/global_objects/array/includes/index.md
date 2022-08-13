---
title: Array.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
translation_of: Web/JavaScript/Reference/Global_Objects/Array/includes
original_slug: Web/JavaScript/Referencje/Obiekty/Array/includes
---
{{JSRef}}

Metoda **`includes()`** ustala czy dana tablica posiada szukany element, zwracając `true` lub `false.`

## Składnia

    var boolean = array.includes(searchElement[, fromIndex])

### Zwraca

{{jsxref("Boolean")}}.

### Parametry

- `searchElement`
  - : Szukany element.
- `fromIndex`
  - : Opcjonalne. Jest to pozycja w tablicy, od której rozpoczyna się szukanie elementu `searchElement`. Ujemna wartość przeszukuje tablicę od końca tablicy. Domyślna wartość wynosi 0.

## Przykłady

```js
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```

## Polyfill

```js
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
    'use strict';
    var O = Object(this);
    var len = parseInt(O.length) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1]) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
         (searchElement !== searchElement && currentElement !== currentElement)) { // NaN !== NaN
        return true;
      }
      k++;
    }
    return false;
  };
}
```

## Specyfikacja

| Specyfikacja                                                                                                     | Status                       | Komentarz             |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------- |
| {{SpecName('ES7', '#sec-array.prototype.includes', 'Array.prototype.includes')}}     | {{Spec2('ES7')}}         | Definicja początkowa. |
| {{SpecName('ESDraft', '#sec-array.prototype.includes', 'Array.prototype.includes')}} | {{Spec2('ESDraft')}} |                       |

## Kompatybilność przeglądarek

{{Compat("javascript.builtins.Array.includes")}}

## Zobacz również

- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
