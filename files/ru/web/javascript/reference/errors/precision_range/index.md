---
title: "RangeError: precision is out of range"
slug: Web/JavaScript/Reference/Errors/Precision_range
---

{{jsSidebar("Errors")}}

## Сообщение

```
RangeError: precision {0} out of range (Firefox)
RangeError: toExponential() argument must be between 0 and 20 (Chrome)
RangeError: toFixed() digits argument must be between 0 and 20 (Chrome)
RangeError: toPrecision() argument must be between 1 and 21 (Chrome)
```

## Тип ошибки

{{jsxref("RangeError")}}

## Что пошло не так?

В одном из следующих методов был использован аргумент, значение которого лежит вне допустимых интервалов:

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}

Допустимые значения для аргументов данных методов обычно лежат в диапазоне от 0 до 20 (или 21), однако спецификация ECMAScript допускает его расширение.

| Метод                                          | Firefox (SpiderMonkey) | Chrome, Opera (V8) |
| ---------------------------------------------- | ---------------------- | ------------------ |
| {{jsxref("Number.prototype.toExponential()")}} | от 0 до 100            | от 0 до 20         |
| {{jsxref("Number.prototype.toFixed()")}}       | от -20 до 100          | от 0 до 20         |
| {{jsxref("Number.prototype.toPrecision()")}}   | от 1 до 100            | от 1 до 21         |

## Примеры

### Примеры некорректного кода

```js example-bad
(77.1234).toExponential(-1); // RangeError
(77.1234).toExponential(101); // RangeError

(2.34).toFixed(-100); // RangeError
(2.34).toFixed(1001); // RangeError

(1234.5).toPrecision(-1); // RangeError
(1234.5).toPrecision(101); // RangeError
```

### Примеры правильного кода

```js example-good
(77.1234).toExponential(4); // 7.7123e+1
(77.1234).toExponential(2); // 7.71e+1

(2.34).toFixed(1); // 2.3
(2.35).toFixed(1); // 2.4 (обратите внимание: в данном случае производится округление в большую сторону)

(5.123456).toPrecision(5); // 5.1235
(5.123456).toPrecision(2); // 5.1
(5.123456).toPrecision(1); // 5
```

## Смотрите также

- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
