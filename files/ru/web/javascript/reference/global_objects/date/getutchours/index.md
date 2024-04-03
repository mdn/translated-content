---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
---

{{JSRef}}

## Сводка

Метод **`getUTCHours()`** возвращает часы указанной даты по всемирному координированному времени.

## Синтаксис

```
dateObj.getUTCHours()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getUTCHours()`, является целым числом от 0 до 23.

## Примеры

### Пример: использование метода `getUTCHours()`

В следующем примере переменной `hours` присваивается количество часов из текущего времени.

```js
var today = new Date();
var hours = today.getUTCHours();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
