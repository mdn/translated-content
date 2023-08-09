---
title: Date.prototype.getMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMonth
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`getMonth()`** возвращает месяц указанной даты по местному времени, нумерация месяцев начинается с нуля для первого месяца в году.

## Синтаксис

```
dateObj.getMonth()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getMonth()`, является целым числом от 0 до 11. 0 соответствует январю, 1 — февралю и так далее.

## Примеры

### Пример: использование метода `getMonth()`

Вторая инструкция в примере ниже присваивает значение 11 переменной `month` из значения переменной `date` объекта {{jsxref("Global_Objects/Date", "Date")}}.

```js
let date = new Date("December 25, 1995 23:15:30");
let month = date.getMonth();

console.log(month); // 11
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
