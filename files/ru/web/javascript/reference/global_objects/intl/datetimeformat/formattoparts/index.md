---
title: Intl.DateTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts
---

{{JSRef}}Метод **`Intl.DateTimeFormat.prototype.formatToParts()`** позволяет выполнять форматирование строк с учётом форматирования `DateTimeFormat`.

## Синтаксис

```
Intl.DateTimeFormat.prototype.formatToParts(date)
```

### Параметры

- `date` {{optional_inline}}
  - : Дата, которую нужно отформатировать.

### Возвращаемое значение

Массив объектов {{jsxref("Array")}}, содержащий отформатированную дату по частям.

## Описание

Метод `formatToParts()` полезен для пользовательского форматирования строки даты. Он возвращает массив объектов {{jsxref("Array")}}, содержащий специфичные для данного места токены, из которых можно выстроить пользовательскую строку, которая сохранит специфичные для данного места части. Структура возвращаемого значения методом `formatToParts()` выглядит так:

```js
[
  { type: "day", value: "17" },
  { type: "weekday", value: "Monday" },
];
```

Возможные типы:

- day
  - : Строка, используемая для дня, например, `"17"`.
- dayPeriod
  - : Строка, используемая для времени суток, например, `"AM"` или `"PM"`.
- era
  - : Строка, используемая для эры, например, `"BC"` или `"AD"`.
- hour
  - : Строка, используемая для часа, например, `"3"` или `"03"`.
- literal
  - : Строка, используемая для разделения значений даты и времени, например, `"/"`, `","`, `"o'clock"`, `"de"` и другие.
- minute
  - : Строка, используемая для минут, например, `"00"`.
- month
  - : Строка, используемая для месяца, например, `"12"`.
- second
  - : Строка, используемая для секунд, например, `"07"` или `"42"`.
- timeZoneName
  - : Строка, используемая для названия временной зоны, например, `"UTC"`.
- weekday
  - : Строка, используемая для дня недели, например, `"M"`, `"Monday"` или `"Montag"`.
- year
  - : Строка, используемая для года, например, `"2012"` или `"96"`.

## Примеры

`DateTimeFormat` выводит локализированные строки, которые нельзя изменять напрямую:

```js
var date = Date.UTC(2012, 11, 17, 3, 0, 42);

var formatter = new Intl.DateTimeFormat("ru", {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true,
  timeZone: "UTC",
});

formatter.format(date);
// "понедельник, 17.12.2012 г., 3:00:42 AM"
```

Однако, во многих пользовательских интерфейсах есть желание настроить форматирование этой строки. Метод `formatToParts` включает форматирование строки с учётом местности, созданной форматером `DateTimeFormat`, предоставляя вам строку по частям:

```js
formatter.formatToParts(date);

// возвращаемое значение:
[
  { type: "weekday", value: "понедельник" },
  { type: "literal", value: ", " },
  { type: "day", value: "17" },
  { type: "literal", value: "." },
  { type: "month", value: "12" },
  { type: "literal", value: "." },
  { type: "year", value: "2012" },
  { type: "literal", value: "г., " },
  { type: "hour", value: "3" },
  { type: "literal", value: ":" },
  { type: "minute", value: "00" },
  { type: "literal", value: ":" },
  { type: "second", value: "42" },
  { type: "literal", value: " " },
  { type: "dayPeriod", value: "AM" },
];
```

Теперь информация доступна по отдельности и может быть отформатирована и объединена снова в пользовательском порядке. Например, используя {{jsxref("Array.prototype.map()")}}, [стрелочные функции](/ru/docs/Web/JavaScript/Reference/Functions/Arrow_functions), [инструкцию switch](/ru/docs/Web/JavaScript/Reference/Statements/switch), [шаблонные строки](/ru/docs/Web/JavaScript/Reference/template_strings) и {{jsxref("Array.prototype.reduce()")}}.

```js
var dateString = formatter
  .formatToParts(date)
  .map(({ type, value }) => {
    switch (type) {
      case "dayPeriod":
        return `<b>${value}</b>`;
      default:
        return value;
    }
  })
  .reduce((string, part) => string + part);
```

Здесь время суток будет выделено жирным с использованием метода `formatToParts()`.

```js
console.log(formatter.format(date));
// "понедельник, 17.12.2012 г., 3:00:42 AM"

console.log(dateString);
// "понедельник, 17.12.2012 г., 3:00:42 <b>AM</b>"
```

## Полифил

Полифил для данного метода доступен [здесь](https://github.com/zbraniecki/proposal-intl-formatToParts).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat("javascript.builtins.Intl.DateTimeFormat.formatToParts")}}

## Смотрите также

- {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("DateTimeFormat.format", "Intl.DateTimeFormat.prototype.format")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
