---
title: Date.prototype.setUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
---

{{JSRef("Global_Objects", "Date")}}

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

| Спецификация                                                                                       | Статус             | Комментарии                                            |
| -------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                                            | Стандарт           | Изначальное определение. Реализована в JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.29', 'Date.prototype.setUTCMilliseconds')}}                       | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-date.prototype.setutcmilliseconds', 'Date.prototype.setUTCMilliseconds')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
