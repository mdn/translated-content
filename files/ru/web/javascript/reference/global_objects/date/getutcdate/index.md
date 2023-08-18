---
title: Date.prototype.getUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`getUTCDate()`** возвращает день месяца указанной даты по всемирному координированному времени.

## Синтаксис

```
dateObj.getUTCDate()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getUTCDate()`, является целым числом от 1 до 31.

## Примеры

### Пример: использование метода `getUTCDate()`

В следующем примере переменной `day` присваивается значение дня из текущей даты.

```js
var today = new Date();
var day = today.getUTCDate();
```

## Спецификации

| Спецификация                                                                       | Статус             | Комментарии                                            |
| ---------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                            | Стандарт           | Изначальное определение. Реализовано в JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.15', 'Date.prototype.getUTCDate')}}               | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-date.prototype.getutcdate', 'Date.prototype.getUTCDate')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
