---
title: "RangeError: repeat count must be non-negative"
slug: Web/JavaScript/Reference/Errors/Negative_repetition_count
---

{{jsSidebar("Errors")}}

## Сообщение

```
RangeError: repeat count must be non-negative (Firefox)
RangeError: Invalid count value (Chrome)
```

## Тип ошибки

{{jsxref("RangeError")}}

## Что пошло не так?

Был использован метод {{jsxref("String.prototype.repeat()")}}, с параметром `count`, указывающим количество повторений строки. Параметр может принимать значения между 0 и положительной {{jsxref("Infinity")}}, и не может быть отрицательным числом. Диапазон допустимых значений может быть описан следующим образом: \[0, + ∞).

## Примеры

### Неверно

```js example-bad
"abc".repeat(-1); // RangeError
```

### Верно

```js example-good
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
```

## Смотрите также

- {{jsxref("String.prototype.repeat()")}}
