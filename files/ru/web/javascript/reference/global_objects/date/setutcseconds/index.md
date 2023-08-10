---
title: Date.prototype.setUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
---

{{JSRef("Global_Objects", "Date")}}

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

| Спецификация                                                                             | Статус             | Комментарии                                            |
| ---------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------ |
| ECMAScript 1-е издание.                                                                  | Стандарт           | Изначальное определение. Реализована в JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.31', 'Date.prototype.setUTCSeconds')}}                  | {{Spec2('ES5.1')}} |                                                        |
| {{SpecName('ES6', '#sec-date.prototype.setutcseconds', 'Date.prototype.setUTCSeconds')}} | {{Spec2('ES6')}}   |                                                        |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
