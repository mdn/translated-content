---
title: Date.prototype.getDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDay
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`getDay()`** возвращает порядковый номер дня недели указанной даты по местному времени, где 0 соответствует воскресенью.

## Синтаксис

```
dateObj.getDay()
```

### Параметры

Нет.

### Возвращаемое значение

Значение, возвращённое методом `getDay()`, является целым числом, соответствующим дню недели: 0 соответствует воскресенью, 1 — понедельнику, 2 — вторнику и так далее.

## Примеры

### Пример: использование метода `getDay()`

Вторая инструкция в примере ниже присваивает значение 1 переменной `weekday` из значения объекта {{jsxref("Global_Objects/Date", "Date")}} `date`. 25 декабря 1995 года было понедельником.

```js
let date = new Date("December 25, 1995 23:15:30");
let weekday = date.getDay();

console.log(weekday); // 1
```

> **Примечание:** При необходимости полное название дня (например, "`Понедельник`") можно получить, используя {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}} с параметром `options` parameter. С помощью этого метода упрощается интернационализация:
>
> ```js
> let options = { weekday: "long" };
>
> console.log(new Intl.DateTimeFormat("en-US", options).format(date));
> // Monday
>
> console.log(new Intl.DateTimeFormat("ru-RU", options).format(date));
> // понедельник
> ```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
