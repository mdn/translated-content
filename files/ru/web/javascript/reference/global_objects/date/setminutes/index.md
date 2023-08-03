---
title: Date.prototype.setMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMinutes
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`setMinutes()`** устанавливает минуты указанной даты по местному времени.

## Синтаксис

```
dateObj.setMinutes(minutesValue[, secondsValue[, msValue]])
```

### Версия до JavaScript 1.3

```
dateObj.setMinutes(minutesValue)
```

### Параметры

- `minutesValue`
  - : Целое число от 0 до 59, представляющее минуты.
- `secondsValue`
  - : Необязательный параметр. Целое число от 0 до 59, представляющее секунды. Если вы определите параметр `secondsValue`, вы также должны определить параметр `minutesValue`.
- `msValue`
  - : Необязательный параметр. Целое число от 0 до 999, представляющее миллисекунды. Если вы определите параметр `msValue`, вы также должны определить параметры `minutesValue` и `secondsValue`.

### Возвращаемое значение

Количество миллисекунд между 1 января 1970 00:00:00 UTC и обновлённой датой.

## Описание

Если вы не определите значения параметров `secondsValue` и `msValue`, будут использоваться значения, возвращаемые методами {{jsxref("Date.prototype.getSeconds()", "getSeconds()")}} и {{jsxref("Date.prototype.getMilliseconds()", "getMilliseconds()")}}.

Если значение определяемого параметра будет выходить за пределы ожидаемого диапазона, метод `setMinutes()` попытается соответственно обновить другие параметры и информацию о дате в объекте {{jsxref("Global_Objects/Date", "Date")}}. Например, если в качестве `secondsValue` передать значение 100, минуты увеличатся на 1 (`minutesValue + 1`), а в качестве секунд будет использоваться значение 40.

## Примеры

### Пример: использование метода `setMinutes()`

```js
var theBigDay = new Date();
theBigDay.setMinutes(45);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
