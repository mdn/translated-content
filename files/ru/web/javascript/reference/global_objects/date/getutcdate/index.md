---
title: Date.prototype.getUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
---

{{JSRef}}

## Сводка

Метод **`getUTCDate()`** возвращает день месяца указанной даты по всемирному координированному времени.

## Синтаксис

```
dateObj.getUTCDate()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getUTCDate()`, является целым числом от 1 до 31.

## Примеры

### Пример: использование метода `getUTCDate()`

В следующем примере переменной `day` присваивается значение дня из текущей даты.

```js
var today = new Date();
var day = today.getUTCDate();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
