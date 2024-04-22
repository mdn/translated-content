---
title: Date.prototype.setUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
---

{{JSRef}}

## Сводка

Метод **`setUTCFullYear()`** устанавливает полный год указанной даты по всемирному координированному времени.

## Синтаксис

```
dateObj.setUTCFullYear(yearValue[, monthValue[, dayValue]])
```

### Параметры

- `yearValue`
  - : Целое число, определяющее значение года, например, 1995.
- `monthValue`
  - : Необязательный параметр. Целое число от 0 до 11, представляющее месяцы от января до декабря.
- `dayValue`
  - : Необязательный параметр. Целое число от 1 до 31, представляющее день месяца. Если вы определите параметр `dayValue`, вы также должны определить параметр `monthValue`.

## Описание

Если вы не определите значения параметров `monthValue` и `dayValue`, будут использоваться значения, возвращаемые методами {{jsxref("Date.prototype.getUTCMonth()", "getUTCMonth()")}} и {{jsxref("Date.prototype.getUTCDate()", "getUTCDate()")}}.

Если значение определяемого параметра будет выходить за пределы ожидаемого диапазона, метод `setUTCFullYear()` попытается соответственно обновить другие параметры и информацию о дате в объекте {{jsxref("Global_Objects/Date", "Date")}}. Например, если в качестве `monthValue` передать значение 15, год увеличится на 1 (`yearValue + 1`), а в качестве месяца будет использоваться значение 3.

## Примеры

### Пример: использование метода `setUTCFullYear()`

```js
var theBigDay = new Date();
theBigDay.setUTCFullYear(1997);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
