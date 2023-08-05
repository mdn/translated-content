---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`getUTCHours()`** возвращает часы указанной даты по всемирному координированному времени.

## Синтаксис

```
dateObj.getUTCHours()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getUTCHours()`, является целым числом от 0 до 23.

## Примеры

### Пример: использование метода `getUTCHours()`

В следующем примере переменной `hours` присваивается количество часов из текущего времени.

```js
var today = new Date();
var hours = today.getUTCHours();
```

## Спецификации

| Спецификация                                                                         | Статус             | Комментарии                                            |
| ------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                              | Стандарт           | Изначальное определение. Реализовано в JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.19', 'Date.prototype.getUTCHours')}}                | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-date.prototype.getutchours', 'Date.prototype.getUTCHours')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
