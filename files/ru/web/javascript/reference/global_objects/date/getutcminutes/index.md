---
title: Date.prototype.getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
---

{{JSRef}}

## Сводка

Метод **`getUTCMinutes()`** возвращает минуты указанной даты по всемирному координированному времени.

## Синтаксис

```
dateObj.getUTCMinutes()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getUTCMinutes()`, является целым числом от 0 до 59.

## Примеры

### Пример: использование метода `getUTCMinutes()`

В следующем примере переменной `minutes` присваивается количество минут из текущего времени.

```js
var today = new Date();
var minutes = today.getUTCMinutes();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
