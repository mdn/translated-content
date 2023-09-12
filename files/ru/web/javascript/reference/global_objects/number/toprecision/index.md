---
title: Number.prototype.toPrecision()
slug: Web/JavaScript/Reference/Global_Objects/Number/toPrecision
---

{{JSRef("Global_Objects", "Number")}}

## Сводка

Метод **`toPrecision()`** возвращает строку, представляющую объект {{jsxref("Global_Objects/Number", "Number")}} с указанной точностью.

## Синтаксис

```
numObj.toPrecision([precision])
```

### Параметры

- `precision`
  - : Необязательный параметр. Целое число, определяющее количество значащих цифр.

### Возвращаемое значение

Строка, представляющая объект {{jsxref("Global_Objects/Number", "Number")}} в записи с фиксированной запятой или в экспоненциальной записи, округлённое до `precision` значащих цифр. Смотрите обсуждение округления в описании метода {{jsxref("Number.prototype.toFixed", "toFixed()")}}, которое таким же образом применяется и к методу `toPrecision()`.

Если аргумент `precision` опущен, поведение аналогично методу {{jsxref("Number.prototype.toString()")}}. Если он не является целым числом, он будет округлён к ближайшему целому числу.

### Выбрасываемые исключения

- {{jsxref("Global_Objects/RangeError", "RangeError")}}
  - : Если параметр `precison` не находится в диапазоне от 1 до 100 (включительно), будет выброшено исключение {{jsxref("Global_Objects/RangeError", "RangeError")}}. Также реализации могут поддерживать большие и меньшие значения. ECMA-262 требует точности только до 21 значащей цифры.

## Примеры

### Пример: использование `toPrecision`

```js
var numObj = 5.123456;

console.log(numObj.toPrecision()); // выведет '5.123456'
console.log(numObj.toPrecision(5)); // выведет '5.1235'
console.log(numObj.toPrecision(2)); // выведет '5.1'
console.log(numObj.toPrecision(1)); // выведет '5'

numObj = 0.000123;

console.log(numObj.toPrecision()); // выведет '0.000123'
console.log(numObj.toPrecision(5)); // выведет '0.00012300'
console.log(numObj.toPrecision(2)); // выведет '0.00012'
console.log(numObj.toPrecision(1)); // выведет '0.0001'

// Обратите внимание, что если заданного количества разрядов
// недостаточно для точного отображения целой части числа,
// значение может быть возвращено в экспоненциальной записи.
console.log((1234.5).toPrecision(2)); // выведет '1.2e+3'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Number.prototype.toFixed()")}}
- {{jsxref("Number.prototype.toExponential()")}}
- {{jsxref("Number.prototype.toString()")}}
