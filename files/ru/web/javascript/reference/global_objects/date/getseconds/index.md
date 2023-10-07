---
title: Date.prototype.getSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`getSeconds()`** возвращает секунды указанной даты по местному времени.

## Синтаксис

```
dateObj.getSeconds()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getSeconds()`, является целым числом от 0 до 59.

## Примеры

### Пример: использование метода `getSeconds()`

Вторая инструкция в примере ниже присваивает значение 30 переменной `seconds` из значения переменной `date` объекта {{jsxref("Global_Objects/Date", "Date")}}.

```js
let date = new Date("December 25, 1995 23:15:30");
let seconds = date.getSeconds();

console.log(seconds); // 30
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
