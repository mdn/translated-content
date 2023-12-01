---
title: Date.prototype.getDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDate
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`getDate()`** возвращает день месяца указанной даты по местному времени.

## Синтаксис

```
dateObj.getDate()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getDate()`, является целым числом от 1 до 31.

## Примеры

### Пример: использование метода `getDate()`

Вторая инструкция в примере ниже присваивает значение 25 переменной `day` из значения объекта {{jsxref("Global_Objects/Date", "Date")}} `date`.

```js
let date = new Date("December 25, 1995 23:15:30");
let day = date.getDate();

console.log(day); // 25
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
