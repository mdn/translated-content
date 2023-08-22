---
title: Date.prototype.setUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`setUTCHours()`** устанавливает часы указанной даты по всемирному координированному времени и возвращает количество миллисекунд, прошедших с 1 января 1970 00:00:00 по UTC до времени, представляемого обновлённым экземпляром {{jsxref("Global_Objects/Date", "Date")}}.

## Синтаксис

```
dateObj.setUTCHours(hoursValue[, minutesValue[, secondsValue[, msValue]]])
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

Если вы не определите значения параметров `minutesValue`, `secondsValue` и `msValue`, будут использоваться значения, возвращаемые методами {{jsxref("Date.prototype.getUTCMinutes()", "getUTCMinutes()")}}, {{jsxref("Date.prototype.getUTCSeconds()", "getUTCSeconds()")}} и {{jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}}.

Если значение определяемого параметра будет выходить за пределы ожидаемого диапазона, метод `setUTCHours()` попытается соответственно обновить другие параметры и информацию о дате в объекте {{jsxref("Global_Objects/Date", "Date")}}. Например, если в качестве `secondsValue` передать значение 100, минуты увеличатся на 1 (`minutesValue + 1`), а в качестве секунд будет использоваться значение 40.

## Примеры

### Пример: использование метода `setUTCHours()`

```js
var theBigDay = new Date();
theBigDay.setUTCHours(8);
```

## Спецификации

| Спецификация                                                                         | Статус             | Комментарии                                            |
| ------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                              | Стандарт           | Изначальное определение. Реализована в JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.35', 'Date.prototype.setUTCHours')}}                | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-date.prototype.setutchours', 'Date.prototype.setUTCHours')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
