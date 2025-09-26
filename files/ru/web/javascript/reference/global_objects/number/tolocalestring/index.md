---
title: Number.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
l10n:
  sourceCommit: b675e86af71a5250b8d65d9b3a86ca9319332af1
---

{{JSRef}}

Метод **`toLocaleString()`** значений {{jsxref("Number")}} возвращает строку с языкозависимым представлением этого числа. В реализациях с поддержкой [`Intl.NumberFormat` API](/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) этот метод просто вызывает `Intl.NumberFormat`.

При каждом вызове `toLocaleString` происходит поиск по большой базе локализованных строк, что может быть неэффективным. Когда метод вызывается много раз с одинаковыми параметрами, лучше создать объект {{jsxref("Intl.NumberFormat")}} и использовать его метод {{jsxref("Intl/NumberFormat/format", "format()")}}, потому что объект `NumberFormat` запоминает переданные ему параметры и может кешировать данные, чтобы последующие вызовы `format` могли выполнять поиск с более определённым контекстом.

{{InteractiveExample("JavaScript Demo: Number.toLocaleString()")}}

```js interactive-example
function eArabic(x) {
  return x.toLocaleString("ar-EG");
}

console.log(eArabic(123456.789));
// Expected output: "١٢٣٬٤٥٦٫٧٨٩"

console.log(eArabic("123456.789"));
// Expected output: "123456.789"

console.log(eArabic(NaN));
// Expected output: "ليس رقم"
```

## Синтаксис

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Параметры

Параметры `locales` и `options` изменяют поведение функции и позволяют приложениям определять язык, правила форматирования которого, следует использовать.

В реализациях, поддерживающих [`Intl.NumberFormat` API](/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat), эти параметры соответствуют параметрам конструктора [`Intl.NumberFormat()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat). Реализации без поддержки `Intl.NumberFormat` должны игнорировать оба параметра, используя локаль и формат возвращаемой строки определяемые самой реализацией.

- `locales` {{optional_inline}}
  - : Строка с языковым тегом BCP 47 или массив таких строк. Соответствует параметру [`locales`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales) конструктора `Intl.NumberFormat().

    В реализациях без поддержки `Intl.NumberFormat` этот параметр игнорируется и обычно используется локаль устройства.

- `options` {{optional_inline}}
  - : Объект определяющий выходной формат. Соответствует параметру [`options`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) конструктора `Intl.NumberFormat()`.

    В реализациях без поддержки `Intl.NumberFormat` этот параметр игнорируется.

Смотрите описание [конструктора `Intl.NumberFormat()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) для подробностей использования этих параметров.

### Возвращаемое значение

Строка, представляющая указанное число в соответствии с языковыми требованиями.

В реализациях с поддержкой `Intl.NumberFormat` результат будет эквивалентным `new Intl.NumberFormat(locales, options).format(number)`.

> [!NOTE]
> В большинстве случаев форматирование, возвращаемое `toLocaleString()`, единообразно. Однако результат может быть разным в зависимости от времени, языка и реализации — это допускается спецификацией. Не следует сравнивать результат `toLocaleString()` со статическими значениями.

## Примеры

### Использование `toLocaleString()`

При использовании без указания локали возвращается строка, отформатированная в соответствии с локалью и настройками по умолчанию.

```js
var number = 3500;

console.log(number.toLocaleString()); // Отобразит '3,500' в локали U.S. English
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

Этот пример показывает некоторые локализованные форматы чисел. Для получения формата языка, используемого в пользовательском интерфейсе вашего приложения, убедитесь, что вы указали этот язык (и, возможно, несколько запасных языков) используя параметр `locales`:

```js
var number = 123456.789;

// В Германии в качестве разделителя целой и дробной части используется запятая, а в качестве разделителя разрядов точка
console.log(number.toLocaleString("de-DE"));
// 123.456,789

// В России в качестве разделителя целой и дробной части используется запятая, а в качестве разделителя разрядов пробел
console.log(number.toLocaleString("ru-RU"));
// 123 456,789

// В большинстве арабоязычных стран используют настоящие арабские цифры
console.log(number.toLocaleString("ar-EG"));
// ١٢٣٤٥٦٫٧٨٩

// В Индии используют разделители для тысяч/лакх/крор
console.log(number.toLocaleString("en-IN"));
// 1,23,456.789

// Ключ расширения nu запрашивает систему нумерации, например, китайскую десятичную
console.log(number.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// 一二三,四五六.七八九

// Если запрашиваемый язык может не поддерживаться, например
// балийский, откатываемся на запасной язык, в данном случае индонезийский
console.log(number.toLocaleString(["ban", "id"]));
// 123.456,789
```

### Использование параметра `options`

Результат, предоставляемый методом `toLocaleString()`, может быть настроен с помощью параметра `options`:

```js
var number = 123456.789;

// Запрашиваем формат валюты
console.log(
  number.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// 123.456,79 €

console.log(
  number.toLocaleString("ru-RU", { style: "currency", currency: "RUB" }),
);
// 123 456,79 ₽

// Японская йена не использует младшие единицы
console.log(
  number.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }),
);
// ￥123,457

// Ограничиваем до трёх значащих цифр
console.log(number.toLocaleString("en-IN", { maximumSignificantDigits: 3 }));
// 1,23,000

// Используем язык системы по умолчанию дял форматирования чисел
const num = 30000.65;
console.log(
  num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
);
// "30,000.65" если язык по умолчанию английский или
// "30.000,65" если язык по умолчанию немецкий или
// "30 000,65" если язык по умолчанию французский
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Number.prototype.toString()")}}
