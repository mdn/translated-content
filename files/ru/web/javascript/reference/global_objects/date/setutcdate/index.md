---
title: Date.prototype.setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
---

{{JSRef}}

## Сводка

Метод **`setUTCDate()`** устанавливает день месяца указанной даты по всемирному координированному времени.

## Синтаксис

```
dateObj.setUTCDate(dayValue)
```

### Параметры

- `dayValue`
  - : Целое число от 1 до 31, представляющее номер дня в месяце.

## Описание

Если значение параметра `dayValue` будет выходить за пределы количества дней для месяца, метод `setUTCDate()` попытается соответственно обновить объект {{jsxref("Global_Objects/Date", "Date")}}. Например, если в качестве `dayValue` передать значение 40, а текущий сохранённый в объекте {{jsxref("Global_Objects/Date", "Date")}} месяц равен июню, день будет изменён на 10, а месяц увеличится до июля.

## Примеры

### Пример: использование метода `setUTCDate()`

```js
var theBigDay = new Date();
theBigDay.setUTCDate(20);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.setDate()")}}
