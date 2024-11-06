---
title: Date.prototype.getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
---

{{JSRef}}

## Сводка

Метод **`getUTCMilliseconds()`** возвращает миллисекунды указанной даты по всемирному координированному времени.

## Синтаксис

```
dateObj.getUTCMilliseconds()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getUTCMilliseconds()`, является целым числом от 0 до 999.

## Примеры

### Пример: использование метода `getUTCMilliseconds()`

В следующем примере переменной `milliseconds` присваивается количество миллисекунд из текущего времени.

```js
var today = new Date();
var milliseconds = today.getUTCMilliseconds();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
