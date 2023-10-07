---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`getUTCSeconds()`** возвращает секунды указанной даты по всемирному координированному времени.

## Синтаксис

```
dateObj.getUTCSeconds()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getUTCSeconds()`, является целым числом от 0 до 59.

## Примеры

### Пример: использование метода `getUTCSeconds()`

В следующем примере переменной `seconds` присваивается количество секунд из текущего времени.

```js
var today = new Date();
var seconds = today.getUTCSeconds();
```

## Спецификации

| Спецификация                                                                             | Статус             | Комментарии                                            |
| ---------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                                  | Стандарт           | Изначальное определение. Реализовано в JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.23', 'Date.prototype.getUTCSeconds')}}                  | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-date.prototype.getutcseconds', 'Date.prototype.getUTCSeconds')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
