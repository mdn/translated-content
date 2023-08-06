---
title: Date.prototype.setDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setDate
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`setDate()`** устанавливает день месяца указанной даты по местному времени.

## Синтаксис

```
dateObj.setDate(dayValue)
```

### Параметры

- `dayValue`
  - : Целое число, представляющее номер дня в месяце.

### Возвращаемое значение

В результате выполнения функция setDate() изменяет текущий объект ({{jsxref("Date")}}) и возвращает количество миллисекунд от начала эпохи (1 января 1970 00:00:00 UTC) для полученного значения объекта.

## Описание

Если значение параметра `dayValue` будет выходить за пределы количества дней для месяца, метод `setDate()` соответственно обновит объект {{jsxref("Global_Objects/Date", "Date")}}. Например, если в качестве `dayValue` передать значение 0, дата будет установлена в последний день предыдущего месяца.

## Примеры

### Пример: использование метода `setDate()`

```js
var theBigDay = new Date(1962, 6, 7); // 1962-07-07
theBigDay.setDate(24); // 1962-07-24
theBigDay.setDate(32); // 1962-08-01
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getDate()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
