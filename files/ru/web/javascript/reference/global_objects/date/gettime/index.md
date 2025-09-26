---
title: Date.prototype.getTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTime
---

{{JSRef}}

Метод **`getTime()`** возвращает числовое значение, соответствующее указанной дате по всемирному координированному времени.

Вы можете использовать этот метод для того, чтобы присвоить дату и время другому объекту {{jsxref("Global_Objects/Date", "Date")}}. Этот метод функционально эквивалентен методу {{jsxref("Date.prototype.valueof", "valueOf()")}}.

{{InteractiveExample("JavaScript Demo: Date.getTime()")}}

```js interactive-example
const moonLanding = new Date("July 20, 69 20:17:40 GMT+00:00");

// Milliseconds since Jan 1, 1970, 00:00:00.000 GMT
console.log(moonLanding.getTime());
// Expected output: -14182940000
```

## Синтаксис

```
dateObj.getTime()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getTime()`, является количеством миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC.

## Примеры

### Пример: использование метода `getTime()` для копирования дат

Конструирует новый объект даты с идентичным значением времени.

```js
let birthday = new Date(2020, 12, 20);
let copy = new Date();
copy.setTime(birthday.getTime());

console.log(copy.setTime(birthday.getTime())); // 1611090000000
```

### Пример: замер времени выполнения

Вычитанием двух последовательных вызовов метода `getTime()` на заново сконструированных объектах {{jsxref("Global_Objects/Date", "Date")}} можно замерить промежуток времени, произошедший между двумя этими вызовами. Это можно использовать для вычисления времени выполнения неких операций.

```js
let end, start;

start = new Date();
for (let i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log("Операция заняла " + (end.getTime() - start.getTime()) + " мсек");
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.setTime()")}}
- {{jsxref("Date.prototype.valueOf()")}}
