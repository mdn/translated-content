---
title: Date.prototype.setFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setFullYear
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`setFullYear()`** устанавливает полный год указанной даты по местному времени.

## Синтаксис

```
dateObj.setFullYear(yearValue[, monthValue[, dayValue]])
```

### Параметры

- `yearValue`
  - : Целое число, определяющее значение года, например, 1995.
- `monthValue`
  - : Необязательный параметр. Целое число от 0 до 11, представляющее месяцы от января до декабря.
- `dayValue`
  - : Необязательный параметр. Целое число от 1 до 31, представляющее день месяца. Если вы определите параметр `dayValue`, вы также должны определить параметр `monthValue`.

### Возвращаемое значение

Текущее время в миллисекундах для нового значения даты — такое же значение как и у метода {{jsxref("Date.prototype.getTime()", "getTime()")}} для текущего объекта **после** вызова `setFullYear()`.

## Описание

Если вы не определите значения параметров `monthValue` и `dayValue`, будут использоваться значения, возвращаемые методами {{jsxref("Date.prototype.getMonth()", "getMonth()")}} и {{jsxref("Date.prototype.getDate()", "getDate()")}}.

Если значение определяемого параметра будет выходить за пределы ожидаемого диапазона, метод `setFullYear()` попытается соответственно обновить другие параметры и информацию о дате в объекте {{jsxref("Global_Objects/Date", "Date")}}. Например, если в качестве `monthValue` передать значение 15, год увеличится на 1 (`yearValue + 1`), а в качестве месяца будет использоваться значение 3.

## Примеры

### Пример: использование метода `setFullYear()`

```js
var theBigDay = new Date();
theBigDay.setFullYear(1997);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setUTCFullYear()")}}
- {{jsxref("Date.prototype.setYear()")}}
