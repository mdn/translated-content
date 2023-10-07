---
title: Date.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toString
---

{{JSRef("Global_Objects", "Date")}}

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

| Спецификация                                                                   | Статус             | Комментарии                                            |
| ------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                        | Стандарт           | Изначальное определение. Реализована в JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.2', 'Date.prototype.toLocaleTimeString')}}    | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-date.prototype.tostring', 'Date.prototype.toString')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
