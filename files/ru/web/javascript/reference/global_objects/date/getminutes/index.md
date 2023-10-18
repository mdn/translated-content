---
title: Date.prototype.getMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMinutes
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`getMinutes()`** возвращает минуты указанной даты по местному времени.

## Синтаксис

```
dateObj.getMinutes()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getMinutes()`, является целым числом от 0 до 59.

## Примеры

### Пример: использование метода `getMinutes()`

Вторая инструкция в примере ниже присваивает значение 15 переменной `minutes` из значения объекта {{jsxref("Global_Objects/Date", "Date")}} `date`.

```js
let date = new Date("December 25, 1995 23:15:30");
let minutes = date.getMinutes();

console.log(minutes); // 15
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
