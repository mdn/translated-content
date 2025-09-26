---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
---

{{JSRef}}

## Сводка

Метод **`getUTCSeconds()`** возвращает секунды указанной даты по всемирному координированному времени.

## Синтаксис

```
dateObj.getUTCSeconds()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getUTCSeconds()`, является целым числом от 0 до 59.

## Примеры

### Пример: использование метода `getUTCSeconds()`

В следующем примере переменной `seconds` присваивается количество секунд из текущего времени.

```js
var today = new Date();
var seconds = today.getUTCSeconds();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
