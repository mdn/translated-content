---
title: Date.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
l10n:
  sourceCommit: b675e86af71a5250b8d65d9b3a86ca9319332af1
---

{{JSRef}}

Метод **`toLocaleString()`** экземпляров {{jsxref("Date")}} возвращает строку, содержащую зависимое от языка представление этой даты в локальном часовом поясе. В реализациях, поддерживающих [`Intl.DateTimeFormat` API](/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), этот метод просто вызывает `Intl.DateTimeFormat`.

При каждом вызове `toLocaleString` происходит поиск по большой базе локализованных строк, что может быть неэффективным. Когда метод вызывается много раз с одинаковыми параметрами, лучше создать объект {{jsxref("Intl.DateTimeFormat")}} и использовать его метод {{jsxref("Intl/DateTimeFormat/format", "format()")}}, потому что объект `DateTimeFormat` запоминает переданные ему параметры и может кешировать данные, чтобы последующие вызовы `format` могли выполнять поиск с более определённым контекстом.

{{EmbedInteractiveExample("pages/js/date-tolocalestring.html")}}

## Синтаксис

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Параметры

Параметры `locales` и `options` изменяют поведение функции и позволяют приложениям определять язык, правила форматирования которого, следует использовать.

В реализациях, поддерживающих [`Intl.DateTimeFormat` API](/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), эти параметры соответствуют параметрам конструктора [`Intl.DateTimeFormat()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat). Реализации без поддержки `Intl.DateTimeFormat` должны игнорировать оба параметра, используя локаль и формат возвращаемой строки определяемые самой реализацией.

- `locales` {{optional_inline}}

  - : Строка с языковым тегом BCP 47 или массив таких строк. Соответствует параметру [`locales`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) конструктора `Intl.DateTimeFormat().

    В реализациях без поддержки `Intl.DateTimeFormat` этот параметр игнорируется и обычно используется локаль устройства.

- `options` {{optional_inline}}

  - : Объект определяющий выходной формат. Соответствует параметру [`options`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) конструктора `Intl.DateTimeFormat()`. Опция `timeStyle` должна быть `undefined` или будет возникать {{jsxref("TypeError")}}. Если `weekday`, `year`, `month` и `day` одновременно равны `undefined`, то `year`, `month` и `day` будут установлены в `"numeric"`.

    В реализациях без поддержки `Intl.DateTimeFormat` этот параметр игнорируется.

Смотрите описание [конструктора `Intl.DateTimeFormat()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat) для подробностей использования этих параметров.

### Возвращаемое значение

Строка, представляющая указанную дату в соответствии с языковыми требованиями.

В реализациях с поддержкой `Intl.DateTimeFormat` результат будет эквивалентным `new Intl.DateTimeFormat(locales, options).format(date)`.

> [!NOTE]
> В большинстве случаев форматирование, возвращаемое `toLocaleString()`, единообразно. Однако результат может быть разным в зависимости от времени, языка и реализации — это допускается спецификацией. Не следует сравнивать результат `toLocaleString()` со статическими значениями.

## Примеры

### Использование `toLocaleString()`

При использовании без указания локали возвращается строка, отформатированная в соответствии с локалью и настройками по умолчанию.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// Вывод toLocaleString() без параметров зависит от реализации,
// локали по умолчанию и часового пояса по умолчанию
console.log(date.toLocaleString());
// "12/11/2012, 7:00:00 PM", если код запущен с локалью en-US и часовым поясом America/Los_Angeles
```

### Проверка поддержки параметров `locales` и `options`

Параметры `locales` и `options` могут поддерживаться не во всех реализациях. В реализациях без поддержки интернационализации `toLocaleString()` всегда использует системную локаль, что может оказаться не тем, что вам нужно. Поскольку любая реализация, поддерживающая параметры `locales` и `options`, должна поддерживать {{jsxref("Intl")}} API, проверить наличие последней можно таким способом:

```js
function toLocaleStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.DateTimeFormat === "function"
  );
}
```

### Использование параметра `locales`

Этот пример показывает некоторые локализованные форматы даты и времени. Для получения формата языка, используемого в пользовательском интерфейсе вашего приложения, убедитесь, что вы указали этот язык (и, возможно, несколько запасных языков) используя параметр `locales`:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Форматирование ниже предполагает, что местный часовой пояс равен
// America/Los_Angeles для локали США

// В американском английском используется порядок месяц-день-год
// и 12-часовой формат времени
console.log(date.toLocaleString("en-US"));
// "12/19/2012, 7:00:00 PM"

// В британском английском используется порядок день-месяц-год
// и 24-часовой формат времени
console.log(date.toLocaleString("en-GB"));
// "20/12/2012 03:00:00"

// В корейском используется порядок год-месяц-день
// и 12-часовой формат времени
console.log(date.toLocaleString("ko-KR"));
// "2012. 12. 20. 오후 12:00:00"

// В большинстве арабоязычных стран используют настоящие арабские цифры
console.log(date.toLocaleString("ar-EG"));
// "٢٠‏/١٢‏/٢٠١٢ ٥:٠٠:٠٠ ص"

// В Японии приложения могут захотеть использовать японский календарь,
// в котором 2012 год является 24-м годом эры Хейсей
console.log(date.toLocaleString("ja-JP-u-ca-japanese"));
// "24/12/20 12:00:00"

// Если запрашиваемый язык может не поддерживаться, например
// балийский, откатываемся на запасной язык, в данном случае индонезийский
console.log(date.toLocaleString(["ban", "id"]));
// "20/12/2012 11.00.00"
```

### Использование параметра `options`

Результат, предоставляемый методом `toLocaleString()`, может быть настроен с помощью параметра `options`:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Запрашиваем день недели вместе с длинным форматом даты
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date.toLocaleString("de-DE", options));
// "Donnerstag, 20. Dezember 2012"

// Приложение может захотеть использовать UTC и показать это
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(date.toLocaleString("en-US", options));
// "Thursday, December 20, 2012, GMT"

// Иногда даже в США нужен 24-х часовой формат времени
console.log(date.toLocaleString("en-US", { hour12: false }));
// "12/19/2012, 19:00:00"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
