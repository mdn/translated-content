---
title: Date.prototype.setMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
---

{{JSRef("Global_Objects", "Date")}}

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

| Спецификация                                                                                 | Статус             | Комментарии                                            |
| -------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                                      | Стандарт           | Изначальное определение. Реализована в JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.28', 'Date.prototype.setMilliseconds')}}                    | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-date.prototype.setmilliseconds', 'Date.prototype.setMilliseconds')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
