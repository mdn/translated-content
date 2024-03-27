---
title: Date.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toString
---

{{JSRef}}

## Сводка

Метод **`toString()`** возвращает строковое представление указанного объекта {{jsxref("Global_Objects/Date", "Date")}}.

## Синтаксис

```
dateObj.toString()
```

### Параметры

Нет.

## Описание

Объект {{jsxref("Global_Objects/Date", "Date")}} переопределяет метод `toString()`, унаследованный из объекта {{jsxref("Global_Objects/Object", "Object")}}; он не наследует метод {{jsxref("Object.prototype.toString()")}}. Для объектов {{jsxref("Global_Objects/Date", "Date")}} метод `toString()` возвращает строковое представление объекта.

Метод `toString()` всегда возвращает строковое представление даты на американском английском.

JavaScript вызывает метод `toString()` автоматически, когда дата представляется как текст, или когда дата участвует в конкатенации строк.

## Примеры

### Пример: использование метода `toString()`

В следующем примере переменной `myVar` присваивается значение, возвращённое методом `toString()` объекта {{jsxref("Global_Objects/Date", "Date")}}:

```js
var x = new Date();
myVar = x.toString(); // присваивает переменной myVar значение вроде:
// Mon Sep 28 1998 14:36:22 GMT-0700 (Pacific Daylight Time)
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
