---
title: Date.prototype.setYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setYear
---

{{JSRef("Global_Objects", "Date")}} {{deprecated_header}}

## Сводка

Метод **`setYear()`** устанавливает год указанной даты по местному времени. Поскольку метод `setYear()` не устанавливает полный год («проблема 2000 года»), он больше не используется и был заменён методом {{jsxref("Date.prototype.setFullYear", "setFullYear()")}}.

## Синтаксис

```
dateObj.setYear(yearValue)
```

### Параметры

- `yearValue`
  - : Целое число.

## Описание

Если параметр `yearValue` является числом в диапазоне от 0 до 99 (включительно), год объекта `dateObj` устанавливается в `1900 + yearValue`. В противном случае год объекта `dateObj` устанавливается в `yearValue`.

## Примеры

### Пример: использование метода `setYear()`

Первые две строки устанавливают год в 1996. Третья строка устанавливает год в 2000.

```js
var theBigDay = new Date();

theBigDay.setYear(96);
theBigDay.setYear(1996);
theBigDay.setYear(2000);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
