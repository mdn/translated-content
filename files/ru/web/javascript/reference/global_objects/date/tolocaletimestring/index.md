---
title: Date.prototype.toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
l10n:
  sourceCommit: b675e86af71a5250b8d65d9b3a86ca9319332af1
---

{{JSRef}}

Метод **`toLocaleTimeString()`** экземпляров {{jsxref("Date")}} возвращает строку, содержащую зависимое от языка представление времени этой даты в локальном часовом поясе. В реализациях, поддерживающих [`Intl.DateTimeFormat` API](/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat), этот метод просто вызывает `Intl.DateTimeFormat`.

При каждом вызове `toLocaleTimeString` происходит поиск по большой базе локализованных строк, что может быть неэффективным. Когда метод вызывается много раз с одинаковыми параметрами, лучше создать объект {{jsxref("Intl.DateTimeFormat")}} и использовать его метод {{jsxref("Intl/DateTimeFormat/format", "format()")}}, потому что объект `DateTimeFormat` запоминает переданные ему параметры и может кешировать данные, чтобы последующие вызовы `format` могли выполнять поиск с более определённым контекстом.

{{EmbedInteractiveExample("pages/js/date-tolocaletimestring.html")}}

## Синтаксис

```js-nolint
toLocaleTimeString()
toLocaleTimeString(locales)
toLocaleTimeString(locales, options)
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

Строка, представляющая часть указанной даты в соответствии с языковыми требованиями.

В реализациях с поддержкой `Intl.DateTimeFormat` результат будет эквивалентным `new Intl.DateTimeFormat(locales, options).format(date)`.

> [!NOTE]
> В большинстве случаев форматирование, возвращаемое `toLocaleString()`, единообразно. Однако результат может быть разным в зависимости от времени, языка и реализации — это допускается спецификацией. Не следует сравнивать результат `toLocaleTimeString()` со статическими значениями.

## Примеры

### Использование `toLocaleTimeString()`

При использовании без указания локали возвращается строка, отформатированная в соответствии с локалью и опциями по умолчанию.

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// Вывод toLocaleTimeString() без параметров зависит от реализации,
// локали по умолчанию и часового пояса по умолчанию
console.log(date.toLocaleTimeString());
// "7:00:00 PM", если код запущен с локалью en-US и часовым поясом America/Los_Angeles
```

### Проверка поддержки параметров `locales` и `options`

Параметры `locales` и `options` могут поддерживаться не во всех реализациях. В реализациях без поддержки интернационализации `toLocaleTimeString()` всегда использует системную локаль, что может оказаться не тем, что вам нужно. Поскольку любая реализация, поддерживающая параметры `locales` и `options`, должна поддерживать {{jsxref("Intl")}} API, проверить наличие последней можно таким способом:

```js
function toLocaleTimeStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.DateTimeFormat === "function"
  );
}
```

### Использование параметра `locales`

Этот пример показывает некоторые локализованные форматы времени. Для получения формата языка, используемого в пользовательском интерфейсе вашего приложения, убедитесь, что вы указали этот язык (и, возможно, несколько запасных языков) используя параметр `locales`:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Форматирование ниже предполагает, что местный часовой пояс равен
// America/Los_Angeles для локали США

// В американском английском используется 12-часовой формат времени
console.log(date.toLocaleTimeString("en-US"));
// "7:00:00 PM"

// В британском английском используется 24-часовой формат времени
console.log(date.toLocaleTimeString("en-GB"));
// "03:00:00"

// В корейском используется 12-часовой формат времени
console.log(date.toLocaleTimeString("ko-KR"));
// "오후 12:00:00"

// В большинстве арабоязычных стран используют настоящие арабские цифры
console.log(date.toLocaleTimeString("ar-EG"));
// "٧:٠٠:٠٠ م"

// Если запрашиваемый язык может не поддерживаться, например
// балийский, откатываемся на запасной язык, в данном случае индонезийский
console.log(date.toLocaleTimeString(["ban", "id"]));
// "11.00.00"
```

### Использование параметра `options`

Результат, предоставляемый методом `toLocaleTimeString()`, может быть настроен с помощью параметра `options`:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Приложение может захотеть использовать UTC и показать это
const options = { timeZone: "UTC", timeZoneName: "short" };
console.log(date.toLocaleTimeString("en-US", options));
// "3:00:00 AM GMT"

// Иногда даже в США нужен 24-х часовой формат времени
console.log(date.toLocaleTimeString("en-US", { hour12: false }));
// "19:00:00"

// Отображение только часов и минут, используем локаль по умолчанию (пусть массив)
console.log(
  date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
);
// "20:01"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
