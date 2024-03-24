---
title: "RangeError: invalid array length"
slug: Web/JavaScript/Reference/Errors/Invalid_array_length
---

{{jsSidebar("Errors")}}

## Сообщение

```
RangeError: invalid array length (Firefox)
RangeError: Invalid array length (Chrome)
RangeError: Invalid array buffer length (Chrome)
```

## Тип ошибки

{{jsxref("RangeError")}}

## Что пошло не так?

Ошибка, связанная с размером массива может произойти в следующих случаях:

- При создании {{jsxref("Array")}} или {{jsxref("ArrayBuffer")}}, размер оказался либо отрицательным, либо равным или превышающим 232, или
- при установке свойства {{jsxref("Array.length")}} значение оказалось либо отрицательным, либо равным или превышающим 232.

Поскольку свойство `length` в `Array` или `ArrayBuffer` представлено в виде беззнакового 32-битного целого числа (integer), значение этого свойства находится в диапазоне от 0 до 232-1.

В конструкторе (`new Array()`) первым аргументом является длина массива, поэтому при создании можно задать нужное значение. Так же, можно задать размер массива, обратившись к свойству `length` напрямую.

## Примеры

```js example-bad
new Array(Math.pow(2, 40));
new Array(-1);
new ArrayBuffer(Math.pow(2, 32));
new ArrayBuffer(-1);

let a = [];
a.length = a.length - 1; // установка длинны -1

let b = new Array(Math.pow(2, 32) - 1);
b.length = b.length + 1; // установка длинны 2^32
```

```js example-good
[Math.pow(2, 40)]; // [ 1099511627776 ]
[-1]; // [ -1 ]
new ArrayBuffer(Math.pow(2, 32) - 1);
new ArrayBuffer(0);

let a = [];
a.length = Math.max(0, a.length - 1);

let b = new Array(Math.pow(2, 32) - 1);
b.length = Math.min(0xffffffff, b.length + 1);

// 0xffffffff является шестнадцатеричным представлением
// 2^32 - 1, которое также можно записать в виде (-1 >>> 0)
```

## Смотрите также

- {{jsxref("Array")}}
- {{jsxref("Array.length")}}
- {{jsxref("ArrayBuffer")}}
