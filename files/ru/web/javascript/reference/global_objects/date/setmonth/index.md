---
title: Date.prototype.setMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMonth
---

{{JSRef}}

## Сводка

Метод **`setMonth()`** устанавливает месяц указанной даты по местному времени.

## Синтаксис

```
dateObj.setMonth(monthValue[, dayValue])
```

### Версия до JavaScript 1.3

```
dateObj.setMonth(monthValue)
```

### Parameter

- `monthValue`
  - : Целое число от 0 до 11, представляющее месяцы от января до декабря.
- `dayValue`
  - : Необязательный параметр. Целое число от 1 до 31, представляющее день месяца.

## Описание

Если вы не определите значения параметра `dayValue`, будет использоваться значение, возвращаемое методом {{jsxref("Date.prototype.getDate()", "getDate()")}}.

Если значение определяемого параметра будет выходить за пределы ожидаемого диапазона, метод `setMonth()` попытается соответственно обновить другой параметр и информацию о дате в объекте {{jsxref("Global_Objects/Date", "Date")}}. Например, если в качестве `monthValue` передать значение 15, год увеличится на 1, а в качестве месяца будет использоваться значение 3.

## Примеры

### Пример: использование метода `setMonth()`

```js
var theBigDay = new Date();
theBigDay.setMonth(6);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
