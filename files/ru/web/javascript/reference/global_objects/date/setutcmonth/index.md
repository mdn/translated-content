---
title: Date.prototype.setUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`setUTCMonth()`** устанавливает месяц указанной даты по всемирному координированному времени.

## Синтаксис

```
dateObj.setUTCMonth(monthValue[, dayValue])
```

### Параметры

- `monthValue`
  - : Целое число от 0 до 11, представляющее месяцы от января до декабря.
- `dayValue`
  - : Необязательный параметр. Целое число от 1 до 31, представляющее день месяца.

## Описание

Если вы не определите значения параметра `dayValue`, будет использоваться значение, возвращаемое методом {{jsxref("Date.prototype.getUTCDate()", "getUTCDate()")}}.

Если значение определяемого параметра будет выходить за пределы ожидаемого диапазона, метод `setUTCMonth()` попытается соответственно обновить другой параметр и информацию о дате в объекте {{jsxref("Global_Objects/Date", "Date")}}. Например, если в качестве `monthValue` передать значение 15, год увеличится на 1, а в качестве месяца будет использоваться значение 3.

## Примеры

### Пример: использование метода `setUTCMonth()`

```js
var theBigDay = new Date();
theBigDay.setUTCMonth(11);
```

## Спецификации

| Спецификация                                                                         | Статус             | Комментарии                                            |
| ------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                              | Стандарт           | Изначальное определение. Реализована в JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.39', 'Date.prototype.setUTCMonth')}}                | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-date.prototype.setutcmonth', 'Date.prototype.setUTCMonth')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
