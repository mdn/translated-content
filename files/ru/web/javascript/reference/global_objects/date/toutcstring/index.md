---
title: Date.prototype.toUTCString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toUTCString
l10n:
  sourceCommit: 77e46a5b43f828fcc6bd30facddc6fc4bfe84f9b
---

{{JSRef}}

## Сводка

Метод **`toUTCString()`** экземпляров {{jsxref("Date")}} возвращает строку, представляющую дату в формате [RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-7.1.1.1), отрицательные значения допускаются. Временная зона всегда UTC. `toGMTString()` является синонимом этого метода.

{{EmbedInteractiveExample("pages/js/date-toutcstring.html", "shorter")}}

## Синтаксис

```js-nolint
toUTCString()
```

### Параметры

Нет.

### Возвращаемое значение

Строка, представляющая дату, используя временную зону UTC (смотрите описание формата). Возвращает `"Invalid Date"` если дата [недопустима](/ru/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Описание

Значение, возвращаемое методом `toUTCString()`, является строкой в формате `Www, dd Mmm yyyy HH:mm:ss GMT`, где:

| Строка | Значение                                                            |
| ------ | ------------------------------------------------------------------- |
| `Www`  | День недели в виде трёх букв (например, `Sun`, `Mon`)               |
| `dd`   | День месяца в виде двух цифр, с ведущим нулём, если требуется       |
| `Mmm`  | Месяц в виде трёх букв (например, `Jan`, `Feb`)                     |
| `yyyy` | Год в виде четырёх или более цифр с ведущими нулями, если требуется |
| `HH`   | Час в виде двух цифр с ведущим нулём если требуется                 |
| `mm`   | Минута в виде двух цифр с ведущим нулём если требуется              |
| `ss`   | Секунды в виде двух цифр с ведущим нулём, если требуется            |

### Псевдонимы

`Date` API в JavaScript был создан под влиянием библиотеки `java.util.Date` из языка Java (которая впоследствии стала устаревшей, начиная с версии Java 1.1 в 1997 году). В частности, у класса `Date` в Java есть метод `toGMTString`, который был неудачно назван, потому что [Среднее время по Гринвичу](https://ru.wikipedia.org/wiki/Среднее_время_по_Гринвичу) не эквивалентно [Всемирному координированному времени](https://ru.wikipedia.org/wiki/Всемирное_координированное_время), тогда как даты в JavaScript оперируют временем UTC. В целях совместимости `toGMTString` остаётся псевдонимом `toUTCString`, и они ссылаются на один и тот же объект. То есть:

```js
Date.prototype.toGMTString.name === "toUTCString";
```

## Примеры

### Использование toUTCString()

```js
const d = new Date(0);
console.log(d.toUTCString()); // 'Thu, 01 Jan 1970 00:00:00 GMT'
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toDateString()")}}
- {{jsxref("Date.prototype.toISOString()")}}
