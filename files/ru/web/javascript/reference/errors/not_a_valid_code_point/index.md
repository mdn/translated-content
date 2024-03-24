---
title: "RangeError: argument is not a valid code point"
slug: Web/JavaScript/Reference/Errors/Not_a_valid_code_point
---

{{jsSidebar("Errors")}}

## Сообщение

```
RangeError: Invalid code point {0} (Edge)
RangeError: {0} is not a valid code point (Firefox)
RangeError: Invalid code point {0} (Chrome)
```

## Тип ошибки

{{jsxref("RangeError")}}

## Что пошло не так?

Метод {{jsxref("String.fromCodePoint()")}} выдаёт ошибку, если ему было передано значение {{jsxref("NaN")}}, отрицательное целое число (-1), нецелое число (5.4) или значение, которое превышает 0x10FFFF (1114111).

[Кодовая точка (code point)](https://en.wikipedia.org/wiki/Code_point) – это значение в кодовом пространстве Unicode, то есть диапазон целых чисел от `0` до `0x10FFFF`.

## Примеры

### Нерабочие случаи

```js example-bad
String.fromCodePoint("_"); // RangeError
String.fromCodePoint(Infinity); // RangeError
String.fromCodePoint(-1); // RangeError
String.fromCodePoint(3.14); // RangeError
String.fromCodePoint(3e-2); // RangeError
String.fromCodePoint(NaN); // RangeError
```

### Рабочие случаи

```js example-good
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90); // "AZ"
String.fromCodePoint(0x404); // "\u0404"
String.fromCodePoint(0x2f804); // "\uD87E\uDC04"
String.fromCodePoint(194564); // "\uD87E\uDC04"
String.fromCodePoint(0x1d306, 0x61, 0x1d307); // "\uD834\uDF06a\uD834\uDF07"
```

## Смотрите также

- {{jsxref("String.fromCodePoint()")}}
