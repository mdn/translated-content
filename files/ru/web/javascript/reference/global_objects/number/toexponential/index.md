---
title: Number.prototype.toExponential()
slug: Web/JavaScript/Reference/Global_Objects/Number/toExponential
---

{{JSRef("Global_Objects", "Number")}}

## Сводка

Метод **`toExponential()`** возвращает строку, представляющую объект {{jsxref("Global_Objects/Number", "Number")}} в экспоненциальной записи.

## Синтаксис

```
numObj.toExponential([fractionDigits])
```

### Параметры

- `fractionDigits`
  - : Необязательный параметр. Целое число, определяющее количество цифр после десятичной запятой. По умолчанию используется столько цифр, сколько необходимо для указания числа.

### Возвращаемое значение

Строка, представляющая объект {{jsxref("Global_Objects/Number", "Number")}} в экспоненциальной записи с одной цифрой перед десятичной запятой, округлённое до `fractionDigits` цифр после десятичной запятой. Если аргумент `fractionDigits` опущен, количество цифр после десятичной запятой по умолчанию устанавливается в количество цифр, необходимых для однозначного представления значения.

Если вы используете метод `toExponential()` с числовыми литералами и числовой литерал не имеет экспоненты и десятичной запятой, оставьте пробел перед точкой, предшествующей вызову метода для предотвращения интерпретации этой точки как десятичной запятой.

Если число имеет больше цифр, чем запрошено параметром `fractionDigits`, оно будет округлено к ближайшему числу, представляемому `fractionDigits` цифрами. Смотрите обсуждение округления в описании метода {{jsxref("Number.prototype.toFixed", "toFixed()")}}, которое так же применяется и к методу `toExponential()`.

### Выбрасываемые исключения

- {{jsxref("Global_Objects/RangeError", "RangeError")}}
  - : Если параметр `fractionDigits` слишком маленький или слишком большой. Значения между 0 и 20 включительно не будут порождать исключение {{jsxref("Global_Objects/RangeError", "RangeError")}}. Также реализации могут поддерживать большие и меньшие значения.
- {{jsxref("Global_Objects/TypeError", "TypeError")}}
  - : Если этот метод вызывается на объекте, не являющимся объектом {{jsxref("Global_Objects/Number", "Number")}}.

## Примеры

### Пример: использование `toExponential`

```js
var numObj = 77.1234;

console.log(numObj.toExponential()); // выведет 7.71234e+1
console.log(numObj.toExponential(4)); // выведет 7.7123e+1
console.log(numObj.toExponential(2)); // выведет 7.71e+1
console.log((77.1234).toExponential()); // выведет 7.71234e+1
console.log((77).toExponential()); // выведет 7.7e+1
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toPrecision()")}}
- {{jsxref("Number.prototype.toString()")}}
