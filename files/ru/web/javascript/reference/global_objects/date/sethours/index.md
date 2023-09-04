---
title: Date.prototype.setHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setHours
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`setHours()`** устанавливает часы указанной даты по местному времени и возвращает количество миллисекунд, прошедших с 1 января 1970 00:00:00 по UTC до времени, представляемого обновлённым экземпляром {{jsxref("Global_Objects/Date", "Date")}}.

## Синтаксис

```
dateObj.setHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])
```

### Версия до JavaScript 1.3

```
dateObj.setHours(hoursValue)
```

### Параметры

- `hoursValue`
  - : Целое число от 0 до 23, представляющее часы.
- `minutesValue`
  - : Необязательный параметр. Целое число от 0 до 59, представляющее минуты.
- `secondsValue`
  - : Необязательный параметр. Целое число от 0 до 59, представляющее секунды. Если вы определите параметр `secondsValue`, вы также должны определить параметр `minutesValue`.
- `msValue`
  - : Необязательный параметр. Целое число от 0 до 999, представляющее миллисекунды. Если вы определите параметр `msValue`, вы также должны определить параметры `minutesValue` и `secondsValue`.

## Описание

Если вы не определите значения параметров `minutesValue`, `secondsValue` и `msValue`, будут использоваться значения, возвращаемые методами {{jsxref("Date.prototype.getMinutes()", "getMinutes()")}}, {{jsxref("Date.prototype.getSeconds()", "getSeconds()")}} и {{jsxref("Date.prototype.getMilliseconds()", "getMilliseconds()")}}.

Если значение определяемого параметра будет выходить за пределы ожидаемого диапазона, метод `setHours()` попытается соответственно обновить другие параметры и информацию о дате в объекте {{jsxref("Global_Objects/Date", "Date")}}. Например, если в качестве `secondsValue` передать значение 100, минуты увеличатся на 1 (`minutesValue + 1`), а в качестве секунд будет использоваться значение 40.

## Примеры

### Пример: использование метода `setHours()`

```js
var theBigDay = new Date();
theBigDay.setHours(7);
```

## Спецификации

| Спецификация                                                                   | Статус             | Комментарии                                            |
| ------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                        | Стандарт           | Изначальное определение. Реализована в JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.34', 'Date.prototype.setHours')}}             | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-date.prototype.sethours', 'Date.prototype.setHours')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
