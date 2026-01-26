---
title: Date.prototype.toLocaleDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
---

{{JSRef}}

Метод **`toLocaleDateString()`** возвращает строку с языкозависимым представлением части с датой в этой дате. Новые аргументы `locales` и `options` позволяют приложениям определять язык, чьи соглашения по форматированию должны использоваться, а также менять поведение этого метода. В старых реализациях, игнорирующих аргументы `locales` и `options`, используемая локаль и форма возвращённой строки целиком зависит от реализации.

При форматировании большого количества дат лучшим вариантом будет создание объекта {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}} и использование функции, предоставляемой его свойством {{jsxref("DateTimeFormat.prototype.format", "format")}}.

{{InteractiveExample("JavaScript Demo: Date.toLocaleDateString()", "taller")}}

```js interactive-example
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(event.toLocaleDateString("de-DE", options));
// Expected output (varies according to local timezone): Donnerstag, 20. Dezember 2012

console.log(event.toLocaleDateString("ar-EG", options));
// Expected output (varies according to local timezone): الخميس، ٢٠ ديسمبر، ٢٠١٢

console.log(event.toLocaleDateString(undefined, options));
// Expected output (varies according to local timezone and default locale): Thursday, December 20, 2012
```

## Синтаксис

```js-nolint
toLocaleDateString()
toLocaleDateString(locales)
toLocaleDateString(locales, options)
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

## Примеры

### Использование метода `toLocaleDateString()`

При использовании без указания локали возвращается строка, отформатированная в соответствии с локалью и опциями по умолчанию.

```js
var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// Вывод toLocaleDateString() без аргументов зависит от реализации,
// локали по умолчанию и часового пояса по умолчанию
console.log(date.toLocaleDateString());
// "12/11/2012", если код запущен с локалью en-US и часовым поясом America/Los_Angeles
```

### Проверка поддержки параметров `locales` и `options`

Параметры `locales` и `options` поддерживаются ещё не всеми браузерами. Для проверки того, поддерживает ли их уже реализация, можно затребовать несуществующую метку языка и проверить, будет ли выброшено исключение {{jsxref("Global_Objects/RangeError", "RangeError")}}:

```js
function toLocaleDateStringSupportsLocales() {
  try {
    new Date().toLocaleDateString("i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### Использование параметра `locales`

Этот пример показывает некоторые локализованные форматы даты. Для получения формата языка, используемого в пользовательском интерфейсе вашего приложения, убедитесь, что вы указали этот язык (и, возможно, несколько запасных языков) через аргумент `locales`:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Форматирование ниже предполагает, что местный часовой пояс равен
// America/Los_Angeles для локали США

// В американском английском используется порядок месяц-день-год
console.log(date.toLocaleDateString("en-US"));
// "12/19/2012"

// В британском английском используется порядок день-месяц-год
console.log(date.toLocaleDateString("en-GB"));
// "20/12/2012"

// В корейском используется порядок год-месяц-день
console.log(date.toLocaleDateString("ko-KR"));
// "2012. 12. 20."

// В большинстве арабоязычных стран используют настоящие арабские цифры
console.log(date.toLocaleDateString("ar-EG"));
// "٢٠‏/١٢‏/٢٠١٢"

// В Японии приложения могут захотеть использовать японский календарь,
// в котором 2012 год является 24-м годом эры Хейсей
console.log(date.toLocaleDateString("ja-JP-u-ca-japanese"));
// "24/12/20"

// Если запрашиваемый язык может не поддерживаться, например
// балийский, откатываемся на запасной язык, в данном случае индонезийский
console.log(date.toLocaleDateString(["ban", "id"]));
// "20/12/2012"
```

### Использование параметра `options`

Результат, предоставляемый методом `toLocaleDateString()`, может быть настроен с помощью параметра `options`:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Запрашиваем день недели вместе с длинным форматом даты
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date.toLocaleDateString("de-DE", options));
// "Donnerstag, 20. Dezember 2012"

// Приложение может захотеть использовать UTC и показать это
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(date.toLocaleDateString("en-US", options));
// "Thursday, December 20, 2012, GMT"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
