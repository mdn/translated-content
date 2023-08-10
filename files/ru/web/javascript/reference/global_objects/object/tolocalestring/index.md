---
title: Object.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Object/toLocaleString
---

{{JSRef("Global_Objects", "Object")}}

## Сводка

Метод **`toLocaleString()`** возвращает строку, представляющую объект. Этот метод предназначен для переопределения унаследованными объектами в целях поддержки зависимости от локали.

## Синтаксис

```
obj.toLocaleString();
```

## Описание

Метод `toLocaleString` объекта {{jsxref("Global_Objects/Object", "Object")}} возвращает результат вызова метода {{jsxref("Object.toString", "toString()")}}.

Эта функция обеспечивает объектам обобщённый метод `toLocaleString`, хотя и не все объекты могут её использовать. Смотрите ниже список таких объектов.

### Объекты, переопределяющие `toLocaleString`

- {{jsxref("Global_Objects/Array", "Array")}}: {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Global_Objects/Number", "Number")}}: {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Global_Objects/Date", "Date")}}: {{jsxref("Date.prototype.toLocaleString()")}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Object.prototype.toString()")}}
