---
title: Date.prototype.getUTCDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`getUTCDay()`** возвращает день недели указанной даты по всемирному координированному времени, где 0 соответствует воскресенью.

## Синтаксис

```
dateObj.getUTCDay()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getDay()`, является целым числом, соответствующим дню недели: 0 соответствует воскресенью, 1 — понедельнику, 2 — вторнику и так далее.

## Примеры

### Пример: использование метода `getUTCDay()`

В следующем примере переменной `weekday` присваивается номер дня недели из текущей даты.

```js
var today = new Date();
var weekday = today.getUTCDay();
```

## Спецификации

| Спецификация                                                                     | Статус             | Комментарии                                            |
| -------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                          | Стандарт           | Изначальное определение. Реализовано в JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.17', 'Date.prototype.getUTCDay')}}              | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-date.prototype.getutcday', 'Date.prototype.getUTCDay')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
