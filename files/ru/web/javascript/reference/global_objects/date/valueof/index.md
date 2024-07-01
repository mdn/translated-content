---
title: Date.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Date/valueOf
---

{{JSRef}}

## Сводка

Метод **`valueOf()`** возвращает примитивное значение объекта {{jsxref("Global_Objects/Date", "Date")}}.

## Синтаксис

```
dateObj.valueOf()
```

### Параметры

Нет.

## Описание

Метод `valueOf()` возвращает примитивное значение объекта {{jsxref("Global_Objects/Date", "Date")}} в виде числового типа данных — количества миллисекунд, прошедших с полуночи 01 января 1970 по UTC.

Этот метод полностью функционально эквивалентен методу {{jsxref("Date.prototype.getTime()")}}.

Этот метод обычно вызывается внутренними механизмами движка JavaScript, а не явно в коде.

## Примеры

### Пример: использование метода `valueOf()`

```js
var x = new Date(56, 6, 17);
var myVar = x.valueOf(); // присваивает -424713600000 переменной myVar
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.valueOf()")}}
- {{jsxref("Date.prototype.getTime()")}}
