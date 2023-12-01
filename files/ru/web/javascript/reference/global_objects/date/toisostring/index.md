---
title: Date.prototype.toISOString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toISOString
---

{{JSRef("Global_Objects", "Date")}}

## Сводка

Метод **`toISOString()`** возвращает строку в формате ISO ([расширенный формат ISO 8601](https://ru.wikipedia.org/wiki/ISO_8601)), который можно описать следующим образом: **`YYYY-MM-DDTHH:mm:ss.sssZ`**. Часовой пояс всегда равен UTC, что обозначено суффиксом `"Z"`.

## Синтаксис

```
dateObj.toISOString()
```

## Примеры

### Пример: использование метода `toISOString()`

```js
var today = new Date("05 October 2011 14:48 UTC");

console.log(today.toISOString()); // вернёт 2011-10-05T14:48:00.000Z
```

Пример выше использует разбор нестандартного строкового значения, которое может разобраться некорректно в браузерах, отличных от Firefox.

## Полифил

Этот метод был стандартизирован в ECMA-262 5-го издания. Отсутствие этого метода в движках, которые не были обновлены для его поддержки, можно обойти следующей прокладкой:

```js
if (!Date.prototype.toISOString) {
  (function () {
    function pad(number) {
      if (number < 10) {
        return "0" + number;
      }
      return number;
    }

    Date.prototype.toISOString = function () {
      return (
        this.getUTCFullYear() +
        "-" +
        pad(this.getUTCMonth() + 1) +
        "-" +
        pad(this.getUTCDate()) +
        "T" +
        pad(this.getUTCHours()) +
        ":" +
        pad(this.getUTCMinutes()) +
        ":" +
        pad(this.getUTCSeconds()) +
        "." +
        (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
        "Z"
      );
    };
  })();
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toUTCString()")}}
