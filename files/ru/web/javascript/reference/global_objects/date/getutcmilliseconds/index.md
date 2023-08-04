---
title: Date.prototype.getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`getUTCMilliseconds()`** возвращает миллисекунды указанной даты по всемирному координированному времени.

## Синтаксис

```
dateObj.getUTCMilliseconds()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getUTCMilliseconds()`, является целым числом от 0 до 999.

## Примеры

### Пример: использование метода `getUTCMilliseconds()`

В следующем примере переменной `milliseconds` присваивается количество миллисекунд из текущего времени.

```js
var today = new Date();
var milliseconds = today.getUTCMilliseconds();
```

## Спецификации

| Спецификация                                                                                       | Статус             | Комментарии                                            |
| -------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                                            | Стандарт           | Изначальное определение. Реализовано в JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.25', 'Date.prototype.getUTCMilliseconds')}}                       | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-date.prototype.getutcmilliseconds', 'Date.prototype.getUTCMilliseconds')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
