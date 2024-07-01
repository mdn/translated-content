---
title: Date.prototype.setUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
---

{{JSRef}}

## Сводка

Метод **`setUTCMilliseconds()`** устанавливает миллисекунды указанной даты по всемирному координированному времени.

## Синтаксис

```
dateObj.setUTCMilliseconds(millisecondsValue)
```

### Параметры

- `millisecondsValue`
  - : Целое число от 0 до 999, представляющее миллисекунды.

## Описание

Если значение параметра `millisecondsValue` будет выходить за пределы ожидаемого диапазона, метод `setUTCMilliseconds()` попытается соответственно обновить объект {{jsxref("Global_Objects/Date", "Date")}}. Например, если в качестве `millisecondsValue` передать значение 1100, количество секунд увеличится на 1, а в качестве миллисекунд будет использоваться значение 100.

## Примеры

### Пример: использование метода `setUTCMilliseconds()`

```js
var theBigDay = new Date();
theBigDay.setUTCMilliseconds(500);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
