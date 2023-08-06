---
title: Date.prototype.setSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setSeconds
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`setSeconds()`** устанавливает секунды указанной даты по местному времени.

## Синтаксис

```
dateObj.setSeconds(secondsValue[, msValue])
```

### Версия до JavaScript 1.3

```
dateObj.setSeconds(secondsValue)
```

### Параметры

- `secondsValue`
  - : Целое число от 0 до 59, представляющее количество секунд.
- `msValue`
  - : Необязательный параметр. Число от 0 до 999, представляющее количество миллисекунд.

## Описание

Если вы не определите значения параметра `msValue`, будет использоваться значение, возвращаемое методом {{jsxref("Date.prototype.getMilliseconds()", "getMilliseconds()")}}.

Если значение определяемого параметра будет выходить за пределы ожидаемого диапазона, метод `setSeconds()` попытается соответственно обновить другой параметр и информацию о дате в объекте {{jsxref("Global_Objects/Date", "Date")}}. Например, если в качестве `secondsValue` передать значение 100, минуты увеличатся на 1, а в качестве секунд будет использоваться значение 40.

## Примеры

### Пример: использование метода `setSeconds()`

```js
var theBigDay = new Date();
theBigDay.setSeconds(30);
```

## Спецификации

| Спецификация                                                                       | Статус             | Комментарии                                            |
| ---------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                            | Стандарт           | Изначальное определение. Реализована в JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.30', 'Date.prototype.setSeconds')}}               | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-date.prototype.setseconds', 'Date.prototype.setSeconds')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
