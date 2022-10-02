---
title: Date.prototype.toLocaleDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
---

{{JSRef("Global_Objects", "Date")}}

**`toLocaleDateString()`** 方法返回该日期对象日期部分的字符串，该字符串格式因不同语言而不同。新增的参数 `locales` 和 `options` 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， `locales` 和 `options` 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。

{{EmbedInteractiveExample("pages/js/date-tolocaledatestring.html")}}

## 语法

```plain
dateObj.toLocaleDateString([locales [, options]])
```

### 参数

查看[浏览器兼容性](#Browser_Compatibility)小节，看下哪些浏览器支持 `locales` 和 `options` 参数，还可以参看[例子：检测 `locales` 和 `options` 参数支持情况](#Example:_Checking_for_support_for_locales_and_options_arguments)。

{{page('zh-CN/docs/JavaScript/Reference/Global_Objects/DateTimeFormat','Parameters')}}

The default value for each date-time component property is `undefined`, but if the `weekday`, `year`, `month`, `day` properties are all `undefined`, then `year`, `month`, and `day` are assumed to be "numeric".

## 例子

### 例子：使用`toLocaleDateString`

没有指定语言环境（locale）时，返回一个使用默认语言环境和格式设置（options）的格式化字符串。

```js
var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleDateString without arguments depends on the implementation,
// the default locale, and the default time zone
date.toLocaleDateString();
// → "12/11/2012" if run in en-US locale with time zone America/Los_Angeles
```

### 例子：检测 `locales` 和 `options` 参数支持情况

`locales` 和 `options` 参数不是所有的浏览器都支持。为了检测一种实现环境（implementation）是否支持它们，可以使用不合法的语言标签，如果实现环境支持该参数，则会抛出一个 `RangeError` 异常，反之会忽略参数。

```js
function toLocaleDateStringSupportsLocales() {
    try {
        new Date().toLocaleDateString("i");
    } catch (e) {
        return e​.name === "RangeError";
    }
    return false;
}
```

### 例子：使用`locales`

下例展示了本地化日期格式的一些变化。为了在应用的用户界面得到某种语言的日期格式，必须确保使用 `locales` 参数指定了该语言（可能还需要设置某些回退语言）。

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// formats below assume the local time zone of the locale;
// America/Los_Angeles for the US

// US English uses month-day-year order
alert(date.toLocaleDateString("en-US"));
// → "12/19/2012"

// British English uses day-month-year order
alert(date.toLocaleDateString("en-GB"));
// → "20/12/2012"

// Korean uses year-month-day order
alert(date.toLocaleDateString("ko-KR"));
// → "2012. 12. 20."

// Arabic in most Arabic speaking countries uses real Arabic digits
alert(date.toLocaleDateString("ar-EG"));
// → "٢٠‏/١٢‏/٢٠١٢"

// for Japanese, applications may want to use the Japanese calendar,
// where 2012 was the year 24 of the Heisei era
alert(date.toLocaleDateString("ja-JP-u-ca-japanese"));
// → "24/12/20"

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
alert(date.toLocaleDateString(["ban", "id"]));
// → "20/12/2012"
```

### 例子：使用`options`

可以使用 `options` 参数来自定义 `toLocaleDateString` 方法返回的字符串。

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// request a weekday along with a long date
var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
alert(date.toLocaleDateString("de-DE", options));
// → "Donnerstag, 20. Dezember 2012"

// an application may want to use UTC and make that visible
options.timeZone = "UTC";
options.timeZoneName = "short";
alert(date.toLocaleDateString("en-US", options));
// → "Thursday, December 20, 2012, GMT"
```

## 性能

当格式化大量日期时，最好创建一个 [`Intl.DateTimeFormat`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) 对象，然后使用该对象 [`format`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/format) 属性提供的方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Global_Objects/DateTimeFormat", "DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
