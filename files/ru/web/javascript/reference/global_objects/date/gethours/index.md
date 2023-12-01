---
title: Date.prototype.getHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getHours
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`getHours()`** возвращает часы указанной даты по местному времени.

## Синтаксис

```
dateObj.getHours()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getHours()`, является целым числом от 0 до 23.

## Примеры

### Пример: использование метода `getHours()`

Вторая инструкция в примере ниже присваивает значение 23 переменной `hours` из значения объекта {{jsxref("Global_Objects/Date", "Date")}} `date`.

```js
let date = new Date("December 25, 1995 23:15:30");
let hours = date.getHours();

console.log(hours); // 23
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
