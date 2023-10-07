---
title: Date.prototype.getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`getUTCFullYear()`** возвращает год указанной даты по всемирному координированному времени.

## Синтаксис

```
dateObj.getUTCFullYear()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getUTCFullYear()` является абсолютным числом, совместимым с проблемой 2000 года, например, 1995.

## Примеры

### Пример: использование метода `getUTCFullYear()`

В следующем примере переменной `year` присваивается четырёхзначное значение текущего года.

```js
var today = new Date();
var year = today.getUTCFullYear();
```

## Спецификации

| Спецификация                                                                               | Статус             | Комментарии                                            |
| ------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                                    | Стандарт           | Изначальное определение. Реализовано в JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.11', 'Date.prototype.getUTCFullYear')}}                   | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-date.prototype.getutcfullyear', 'Date.prototype.getUTCFullYear')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
