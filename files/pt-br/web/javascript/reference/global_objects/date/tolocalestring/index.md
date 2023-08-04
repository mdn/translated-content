---
title: Date.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
---

{{JSRef}}

O método **`toLocaleString()`** retorna uma _string_ com uma representação sensível ao idioma da data presente na mesma. Os novos argumentos `locales` e `options` permitem que as aplicações especifiquem o idioma cujas convenções de formatação devem ser utilizadas e personalizar o comportamento do método. Em implementações antigas, que ignoram os argumentos `locales` and `options`, o local utilizado e o formato da _string_ retornada são completamente dependentes da implementação.

{{EmbedInteractiveExample("pages/js/date-tolocalestring.html")}}

## Syntax

```
dateObj.toLocaleString([locales[, options]])
```

### Parameters

Check the [Browser compatibility](#Browser_Compatibility) section to see which browsers support the `locales` and `options` arguments, and the [Example: Checking for support for `locales` and `options` arguments](#Example:_Checking_for_support_for_locales_and_options_arguments) for feature detection.

{{page('/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat', 'Parameters')}}

The default value for each date-time component property is {{jsxref("undefined")}}, but if the `weekday`, `year`, `month`, `day`, `hour`, `minute`, `second` properties are all {{jsxref("undefined")}}, then `year`, `month`, `day`, `hour`, `minute`, and `second` are assumed to be `"numeric"`.

### Return value

A string representing the given date according to language-specific conventions.

## Examples

### Using `toLocaleString()`

In basic use without specifying a locale, a formatted string in the default locale and with default options is returned.

```js
var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleString() without arguments depends on the implementation,
// the default locale, and the default time zone
console.log(date.toLocaleString());
// → "12/11/2012, 7:00:00 PM" if run in en-US locale with time zone America/Los_Angeles
```

### Checking for support for `locales` and `options` arguments

The `locales` and `options` arguments are not supported in all browsers yet. To check whether an implementation supports them already, you can use the requirement that illegal language tags are rejected with a {{jsxref("RangeError")}} exception:

```js
function toLocaleStringSupportsLocales() {
  try {
    new Date().toLocaleString("i");
  } catch (e) {
    return e instanceof RangeError;
  }
  return false;
}
```

### Using `locales`

This example shows some of the variations in localized date and time formats. In order to get the format of the language used in the user interface of your application, make sure to specify that language (and possibly some fallback languages) using the `locales` argument:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// formats below assume the local time zone of the locale;
// America/Los_Angeles for the US

// US English uses month-day-year order and 12-hour time with AM/PM
console.log(date.toLocaleString("en-US"));
// → "12/19/2012, 7:00:00 PM"

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(date.toLocaleString("en-GB"));
// → "20/12/2012 03:00:00"

// Korean uses year-month-day order and 12-hour time with AM/PM
console.log(date.toLocaleString("ko-KR"));
// → "2012. 12. 20. 오후 12:00:00"

// Arabic in most Arabic speaking countries uses real Arabic digits
console.log(date.toLocaleString("ar-EG"));
// → "٢٠‏/١٢‏/٢٠١٢ ٥:٠٠:٠٠ ص"

// for Japanese, applications may want to use the Japanese calendar,
// where 2012 was the year 24 of the Heisei era
console.log(date.toLocaleString("ja-JP-u-ca-japanese"));
// → "24/12/20 12:00:00"

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(date.toLocaleString(["ban", "id"]));
// → "20/12/2012 11.00.00"
```

### Using `options`

The results provided by `toLocaleString()` can be customized using the `options` argument:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// request a weekday along with a long date
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date.toLocaleString("de-DE", options));
// → "Donnerstag, 20. Dezember 2012"

// an application may want to use UTC and make that visible
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(date.toLocaleString("en-US", options));
// → "Thursday, December 20, 2012, GMT"

// sometimes even the US needs 24-hour time
console.log(date.toLocaleString("en-US", { hour12: false }));
// → "12/19/2012, 19:00:00"
```

### Avoid comparing formatted date values to static values

Most of the time, the formatting returned by `toLocaleString()` is consistent. However, this might change in the future and isn't guaranteed for all languages — output variations are by design and allowed by the specification. Most notably, the IE and Edge browsers insert bidirectional control characters around dates, so the output text will flow properly when concatenated with other text.

For this reason you cannot expect to be able to compare the results of `toLocaleString()` to a static value:

```js example-bad
"1.1.2019, 01:00:00" ===
  new Date("2019-01-01T00:00:00.000000Z").toLocaleString();
// true in Firefox and others
// false in IE and Edge
```

> **Nota:** See also this [StackOverflow thread](https://stackoverflow.com/questions/25574963/ies-tolocalestring-has-strange-characters-in-results) for more details and examples.

## Performance

When formatting large numbers of dates, it is better to create an {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}} object and use the function provided by its {{jsxref("DateTimeFormat.prototype.format", "format")}} property.

## Specifications

| Specification                                                                                       | Status                    | Comment                                            |
| --------------------------------------------------------------------------------------------------- | ------------------------- | -------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                 | {{Spec2('ES1')}}          | Initial definition. Implemented in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.5', 'Date.prototype.toLocaleString')}}                             | {{Spec2('ES5.1')}}        |                                                    |
| {{SpecName('ES6', '#sec-date.prototype.tolocalestring', 'Date.prototype.toLocaleString')}}          | {{Spec2('ES6')}}          |                                                    |
| {{SpecName('ESDraft', '#sec-date.prototype.tolocalestring', 'Date.prototype.toLocaleString')}}      | {{Spec2('ESDraft')}}      |                                                    |
| {{SpecName('ES Int 1.0', '#sec-13.3.1', 'Date.prototype.toLocaleString')}}                          | {{Spec2('ES Int 1.0')}}   | Defines `locales` and `options` arguments.         |
| {{SpecName('ES Int 2.0', '#sec-13.3.1', 'Date.prototype.toLocaleString')}}                          | {{Spec2('ES Int 2.0')}}   |                                                    |
| {{SpecName('ES Int Draft', '#sec-Date.prototype.toLocaleString', 'Date.prototype.toLocaleString')}} | {{Spec2('ES Int Draft')}} |                                                    |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.toLocaleString")}}

## See also

- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
