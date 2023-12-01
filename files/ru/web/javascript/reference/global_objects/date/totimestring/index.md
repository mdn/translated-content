---
title: Date.prototype.toTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toTimeString
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`toTimeString()`** возвращает часть, содержащую только время объекта {{jsxref("Global_Objects/Date", "Date")}} в виде человеко-читаемой строки на американском английском.

## Синтаксис

```
dateObj.toTimeString()
```

## Описание

Экземпляры объекта {{jsxref("Global_Objects/Date", "Date")}} ссылаются на определённый момент времени. Вызов метода {{jsxref("Date.prototype.toString()", "toString()")}} вернёт дату, отформатированную в виде человеко-читаемой строки на американском английском. В [SpiderMonkey](/ru/docs/SpiderMonkey) она состоит из части, содержащей дату (день, месяц и год) и следующей за ней части, содержащей время (часы, минуты, секунды и часовой пояс). Иногда желательно получить строку, содержащую только часть со временем; этого можно достигнуть использованием метода `toTimeString()`.

Метод `toTimeString()` полезен тем, что совместимые движки, реализующие [ECMA-262](/ru/docs/ECMAScript) могут давать разные строки с помощью метода {{jsxref("Date.prototype.toString()", "toString()")}} объекта {{jsxref("Global_Objects/Date", "Date")}}, поскольку формат строки зависит от реализации и простой подход с разрезанием строки на дату и время может не всегда сработать.

## Примеры

### Пример: базовое использование метода `toTimeString()`

```js
var d = new Date(1993, 6, 28, 14, 39, 7);

console.log(d.toString()); // напечатает Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
console.log(d.toTimeString()); // напечатает 14:39:07 GMT-0600 (PDT)
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toString()")}}
