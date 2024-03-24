---
title: "RangeError: repeat count must be less than infinity"
slug: Web/JavaScript/Reference/Errors/Resulting_string_too_large
---

{{jsSidebar("Errors")}}

## Сообщение

```
RangeError: repeat count must be less than infinity and not overflow maximum string size (Firefox)

RangeError: Invalid count value (Chrome)
```

## Тип ошибки

{{jsxref("RangeError")}}

## Что пошло не так?

Был использован метод {{jsxref("String.prototype.repeat()")}}, с параметром `count`, указывающим количество повторений строки. Параметр может принимать значения между 0 и положительной {{jsxref("Infinity")}}, и не может быть отрицательным числом. Диапазон допустимых значений может быть описан следующим образом: \[0, + ∞).

Полученная строка также не может превышать максимальный размер строки, который может отличаться в различных движках JavaScript. В Firefox (SpiderMonkey) максимальный размер строки составляет 228 -1 (`0xFFFFFFF`).

## Примеры

### Неверно

```js example-bad
"abc".repeat(Infinity); // RangeError
"a".repeat(2 ** 28); // RangeError
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
