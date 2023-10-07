---
title: Date.prototype.getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`getUTCMinutes()`** возвращает минуты указанной даты по всемирному координированному времени.

## Синтаксис

```
dateObj.getUTCMinutes()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getUTCMinutes()`, является целым числом от 0 до 59.

## Примеры

### Пример: использование метода `getUTCMinutes()`

В следующем примере переменной `minutes` присваивается количество минут из текущего времени.

```js
var today = new Date();
var minutes = today.getUTCMinutes();
```

## Спецификации

| Спецификация                                                                             | Статус             | Комментарии                                            |
| ---------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                                  | Стандарт           | Изначальное определение. Реализовано в JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.21', 'Date.prototype.getUTCMinutes')}}                  | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-date.prototype.getutcminutes', 'Date.prototype.getUTCMinutes')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
