---
title: Intl.DateTimeFormat.prototype.format
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
---

{{JSRef("Global_Objects", "DateTimeFormat", "Intl,Collator,NumberFormat")}}

## Сводка

Свойство **`Intl.DateTimeFormat.prototype.format`** возвращает функцию-геттер, форматирующую дату согласно локали и параметрам форматирования соответствующего объекта {{jsxref("Global_Objects/DateTimeFormat", "DateTimeFormat")}}.

## Синтаксис

```
dateTimeFormat.format(date)
```

### Параметры

- `date`
  - : Дата для форматирования.

## Описание

Функция, возвращённая геттером `format`, форматирует дату согласно локали и параметрам форматирования соответствующего объекта {{jsxref("Global_Objects/DateTimeFormat", "DateTimeFormat")}}.

## Примеры

### Пример: использование функции `format`

Использование функции, возвращённой геттером `format`, для форматирования одной даты, здесь пример для сербского языка:

```js
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
var dateTimeFormat = new Intl.DateTimeFormat("sr-RS", options);
console.log(dateTimeFormat.format(new Date()));
// → "недеља, 7. април 2013."
```

### Пример: использование функции `format` вместе с `map`

Использование функции, возвращённой геттером `format`, для форматирования всех дат в массиве. Обратите внимание, что функция привязана к объекту {{jsxref("Global_Objects/DateTimeFormat", "DateTimeFormat")}}, из которого она была получена, так что её можно передавать в {{jsxref("Array.prototype.map()")}} напрямую.

```js
var a = [new Date(2012, 08), new Date(2012, 11), new Date(2012, 03)];
var options = { year: "numeric", month: "long" };
var dateTimeFormat = new Intl.DateTimeFormat("pt-BR", options);
var formatted = a.map(dateTimeFormat.format);
console.log(formatted.join("; "));
// → "setembro de 2012; dezembro de 2012; abril de 2012"
```

## Спецификации

| Спецификация                                                            | Статус                  | Комментарии              |
| ----------------------------------------------------------------------- | ----------------------- | ------------------------ |
| {{SpecName('ES Int 1.0', '#sec-12.3.2', 'Intl.DateTimeFormat.format')}} | {{Spec2('ES Int 1.0')}} | Изначальное определение. |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
