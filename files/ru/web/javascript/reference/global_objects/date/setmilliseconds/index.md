---
title: Date.prototype.setMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
---

{{JSRef}}

## Сводка

Метод **`setMilliseconds()`** устанавливает миллисекунды указанной даты по местному времени.

## Синтаксис

```
dateObj.setMilliseconds(millisecondsValue)
```

### Параметры

- `millisecondsValue`
  - : Целое число от 0 до 999, представляющее миллисекунды.

## Описание

Если значение параметра `millisecondsValue` будет выходить за пределы ожидаемого диапазона, метод `setMilliseconds()` соответственно обновит объект {{jsxref("Global_Objects/Date", "Date")}}. Например, если в качестве `millisecondsValue` передать значение 1005, количество секунд увеличится на 1, а в качестве миллисекунд будет использоваться значение 5.

## Примеры

### Пример: использование метода `setMilliseconds()`

```js
var theBigDay = new Date();
theBigDay.setMilliseconds(100);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
