---
title: "RangeError: invalid date"
slug: Web/JavaScript/Reference/Errors/Invalid_date
---

{{jsSidebar("Errors")}}

## Сообщение

```
RangeError: invalid date (Firefox)
RangeError: invalid time value (Chrome)
RangeError: Provided date is not in valid range (Chrome)
```

## Тип ошибки

{{jsxref("RangeError")}}

## Что пошло не так?

Строка, ведущая к недопустимой дате, была выведена {{jsxref("Date")}} или {{jsxref("Date.parse()")}}.

## Примеры

### Неверные записи

Неопознанные строки или даты, содержащие недопустимые значения элементов в строках, отформатированных ISO, обычно возвращают [`NaN`](/ru/docs/Web/JavaScript/Reference/Global_Objects/NaN). Тем не менее, в зависимости от реализации, при несоответствии строкам формата ISO, может также возникнуть ошибка `RangeError: invalid date`, например в следующих случаях, в Firefox.

```js example-bad
new Date("foo-bar 2014");
new Date("2014-25-23").toISOString();
new Date("foo-bar 2014").toString();
```

Это, без сомнения, вернёт {{jsxref("NaN")}} в Firefox:

```js example-bad
Date.parse("foo-bar 2014"); // NaN
```

Для получения более подробной информации, смотрите документацию по {{jsxref("Date.parse()")}}

### Верная запись

```js example-good
new Date("05 October 2011 14:48 UTC");
```

## Смотрите также

- {{jsxref("Date")}}
- {{jsxref("Date.prototype.parse()")}}
- {{jsxref("Date.prototype.toISOString()")}}
