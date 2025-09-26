---
title: Date.prototype.getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
---

{{JSRef}}

## Сводка

Метод **`getUTCFullYear()`** возвращает год указанной даты по всемирному координированному времени.

## Синтаксис

```
dateObj.getUTCFullYear()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getUTCFullYear()` является абсолютным числом, совместимым с проблемой 2000 года, например, 1995.

## Примеры

### Пример: использование метода `getUTCFullYear()`

В следующем примере переменной `year` присваивается четырёхзначное значение текущего года.

```js
var today = new Date();
var year = today.getUTCFullYear();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
