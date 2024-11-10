---
title: Date.prototype.getUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
---

{{JSRef}}

## Сводка

Метод **`getUTCMonth()`** возвращает месяц указанной даты по всемирному координированному времени, нумерация месяцев начинается с нуля для первого месяца в году.

## Синтаксис

```
dateObj.getUTCMonth()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getUTCMonth()`, является целым числом от 0 до 11. 0 соответствует январю, 1 — февралю и так далее.

## Примеры

### Пример: использование метода `getUTCMonth()`

В следующем примере переменной `month` присваивается значение месяца из текущей даты.

```js
var today = new Date();
var month = today.getUTCMonth();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
