---
title: Date.prototype.toUTCString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toUTCString
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`toUTCString()`** преобразует дату в строку, используя часовой пояс UTC.

## Синтаксис

```
dateObj.toUTCString()
```

### Параметры

Нет.

## Описание

Значение, возвращаемое методом `toUTCString()`, является человеко-читаемой строкой в часовом поясе UTC. Формат возвращаемого значения зависит от платформы. Наиболее распространённым значением является форматированная по RFC-1123 временная метка, которая является немного обновлённой версией временной метки RFC-822.

## Примеры

### Пример: использование метода `toUTCString()`

```js
var today = new Date();
var UTCstring = today.toUTCString();
// Mon, 03 Jul 2006 21:44:38 GMT
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toISOString()")}}
