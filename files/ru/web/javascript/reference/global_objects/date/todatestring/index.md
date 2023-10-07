---
title: Date.prototype.toDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toDateString
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`toDateString()`** возвращает часть, содержащую только дату объекта {{jsxref("Global_Objects/Date", "Date")}} в виде человеко-читаемой строки на американском английском.

## Синтаксис

```
dateObj.toDateString()
```

## Описание

Экземпляры объекта {{jsxref("Global_Objects/Date", "Date")}} ссылаются на определённый момент времени. Вызов метода {{jsxref("Date.prototype.toString()", "toString()")}} вернёт дату, отформатированную в виде человеко-читаемой строки на американском английском. В [SpiderMonkey](/ru/docs/SpiderMonkey) она состоит из части, содержащей дату (день, месяц и год) и следующей за ней части, содержащей время (часы, минуты, секунды и часовой пояс). Иногда желательно получить строку, содержащую только часть с датой; этого можно достигнуть использованием метода `toDateString()`.

Метод `toDateString()` полезен тем, что совместимые движки, реализующие [ECMA-262](/ru/docs/ECMAScript) могут давать разные строки с помощью метода {{jsxref("Date.prototype.toString()", "toString()")}} объекта {{jsxref("Global_Objects/Date", "Date")}}, поскольку формат строки зависит от реализации и простой подход с разрезанием строки на дату и время может не всегда сработать.

## Примеры

### Пример: базовое использование метода `toDateString()`

```js
var d = new Date(1993, 6, 28, 14, 39, 7);

console.log(d.toString()); // напечатает Wed Jul 28 1993 14:39:07 GMT-0600 (PDT)
console.log(d.toDateString()); // напечатает Wed Jul 28 1993
```

## Спецификации

| Спецификация                                                                           | Статус             | Комментарии              |
| -------------------------------------------------------------------------------------- | ------------------ | ------------------------ |
| ECMAScript 3-е издание.                                                                | Стандарт           | Изначальное определение. |
| {{SpecName('ES5.1', '#sec-15.9.5.3', 'Date.prototype.toDateString')}}                  | {{Spec2('ES5.1')}} |                          |
| {{SpecName('ES6', '#sec-date.prototype.todatestring', 'Date.prototype.toDateString')}} | {{Spec2('ES6')}}   |                          |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
