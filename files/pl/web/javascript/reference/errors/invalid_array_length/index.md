---
title: 'RangeError: invalid array length'
slug: Web/JavaScript/Reference/Errors/Invalid_array_length
tags:
  - Błędy
  - Errors
  - JavaScript
  - RangeError
translation_of: Web/JavaScript/Reference/Errors/Invalid_array_length
---
{{jsSidebar("Errors")}}

## Wiadomość

    RangeError: Array length must be a finite positive integer (Edge)
    RangeError: invalid array length (Firefox)
    RangeError: Invalid array length (Chrome)
    RangeError: Invalid array buffer length (Chrome)

## Typ błędu

{{jsxref("RangeError")}}

## Co poszło nie tak?

Niewłaściwa długość tablicy może wystąpić w następujących sytuacjach:

- Kiedy obiekt {{jsxref("Array")}} lub {{jsxref("ArrayBuffer")}} ma długość ujemną albo większą lub równą 232,
- przy ustawianiu własności {{jsxref("Array.length")}} na wartość ujemną albo większą lub równą 232.

Dlaczego długość obiektów typu `Array` i `ArrayBuffer` jest ograniczona? Własności te są reprezentowane jako 32-bitowe liczby całkowite bez znaku, które mogą przyjmować wartości z zakresu od 0 do 232-1.

Kiedy tworzysz obiekt typu `Array`, używając konstruktora, prawdopodobnie chcesz użyć zamiast tego literalnej notacji, gdyż pierwszy argument jest interpretowany jako długość obiektu `Array`.

W przeciwnym razie możesz chcieć ustalić długość przed ustawieniem właściwości `length` lub użyć jej jako argumentu konstruktora.

## Przykłady

### Niepoprawne przypadki

```js example-bad
new Array(Math.pow(2, 40))
new Array(-1)
new ArrayBuffer(Math.pow(2, 32))
new ArrayBuffer(-1)

let a = [];
a.length = a.length - 1;         // ustaw -1 dla własności length

let b = new Array(Math.pow(2, 32) - 1);
b.length = b.length + 1;         // ustaw 2^32 dla własności length
```

### Poprawne

```js example-good
[ Math.pow(2, 40) ]                     // [ 1099511627776 ]
[ -1 ]                                  // [ -1 ]
new ArrayBuffer(Math.pow(2, 32) - 1)
new ArrayBuffer(0)

let a = [];
a.length = Math.max(0, a.length - 1);

let b = new Array(Math.pow(2, 32) - 1);
b.length = Math.min(0xffffffff, b.length + 1);

// 0xffffffff jest szesnastkowym zapisem dla 2^32 - 1,
// co może być także zapisane jako (-1 >>> 0)
```

## Zobacz też

- {{jsxref("Array")}}
- {{jsxref("Array.length")}}
- {{jsxref("ArrayBuffer")}}
