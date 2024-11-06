---
title: Date.prototype.getUTCDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
---

{{JSRef}}

## Сводка

Метод **`getUTCDay()`** возвращает день недели указанной даты по всемирному координированному времени, где 0 соответствует воскресенью.

## Синтаксис

```
dateObj.getUTCDay()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getDay()`, является целым числом, соответствующим дню недели: 0 соответствует воскресенью, 1 — понедельнику, 2 — вторнику и так далее.

## Примеры

### Пример: использование метода `getUTCDay()`

В следующем примере переменной `weekday` присваивается номер дня недели из текущей даты.

```js
var today = new Date();
var weekday = today.getUTCDay();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
