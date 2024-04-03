---
title: Date.prototype.setTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/setTime
---

{{JSRef}}

## Сводка

Метод **`setTime()`** устанавливает время объекта {{jsxref("Global_Objects/Date", "Date")}} в значение, представляемое количеством миллисекунд, прошедших с 1 января 1970 00:00:00 по UTC.

## Синтаксис

```
dateObj.setTime(timeValue)
```

### Параметры

- `timeValue`
  - : Целое число, представляющее количеством миллисекунд, прошедших с 1 января 1970 00:00:00 по UTC.

## Описание

Используя метод `setTime()`, можно присвоить дату и время другому объекту {{jsxref("Global_Objects/Date", "Date")}}.

## Примеры

### Пример: использование метода `setTime()`

```js
var theBigDay = new Date("July 1, 1999");
var sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getTime()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
