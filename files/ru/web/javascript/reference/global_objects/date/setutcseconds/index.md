---
title: Date.prototype.setUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
---

{{JSRef}}

## Сводка

Метод **`setUTCSeconds()`** устанавливает секунды указанной даты по всемирному координированному времени.

## Синтаксис

```
dateObj.setUTCSeconds(secondsValue[, msValue])
```

### Параметры

- `secondsValue`
  - : Целое число от 0 до 59, представляющее количество секунд.
- `msValue`
  - : Необязательный параметр. Число от 0 до 999, представляющее количество миллисекунд.

## Описание

Если вы не определите значения параметра `msValue`, будет использоваться значение, возвращаемое методом {{jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}}.

Если значение определяемого параметра будет выходить за пределы ожидаемого диапазона, метод `setUTCSeconds()` попытается соответственно обновить другой параметр и информацию о дате в объекте {{jsxref("Global_Objects/Date", "Date")}}. Например, если в качестве `secondsValue` передать значение 100, минуты увеличатся на 1, а в качестве секунд будет использоваться значение 40.

## Примеры

### Пример: использование метода `setUTCSeconds()`

```js
var theBigDay = new Date();
theBigDay.setUTCSeconds(20);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
