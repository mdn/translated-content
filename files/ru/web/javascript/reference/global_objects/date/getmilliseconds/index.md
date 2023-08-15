---
title: Date.prototype.getMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`getMilliseconds()`** возвращает миллисекунды указанной даты по местному времени.

## Синтаксис

```
dateObj.getMilliseconds()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getMilliseconds()`, является целым числом от 0 до 999.

## Примеры

### Пример: использование метода `getMilliseconds()`

В следующем примере переменной `milliseconds` присваиваются миллисекунды текущего времени:

```js
let today = new Date();
let milliseconds = today.getMilliseconds();

console.log(milliseconds); // 709
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
