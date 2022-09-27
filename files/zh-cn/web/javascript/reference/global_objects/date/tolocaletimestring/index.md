---
title: Date.prototype.toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
---

{{JSRef("Global_Objects", "Date")}}

The **`toLocaleTimeString()`** 方法返回该日期对象时间部分的字符串，该字符串格式因不同语言而不同。新增的参数 `locales` 和 `options` 使程序能够指定使用哪种语言格式化规则，允许定制该方法的表现（behavior）。在旧版本浏览器中， `locales` 和 `options` 参数被忽略，使用的语言环境和返回的字符串格式是各自独立实现的。

{{EmbedInteractiveExample("pages/js/date-tolocaletimestring.html")}}

## 语法

```plain
dateObj.toLocaleTimeString([locales [, options]])
```

### 参数

查看[浏览器兼容性](#Browser_Compatibility)小节，看下哪些浏览器支持 `locales` 和 `options` 参数，还可以参看[例子：检测 `locales` 和 `options` 参数支持情况](#Example:_Checking_for_support_for_locales_and_options_arguments)。

{{page('zh-US/docs/JavaScript/Reference/Global_Objects/DateTimeFormat','Parameters')}}

The default value for each date-time component property is `undefined`, but if the `hour`, `minute`, `second` properties are all `undefined`, then `hour`, `minute`, and `second` are assumed to be "numeric".

## 例子

### 例子：使用 `toLocaleTimeString`

没有指定语言环境（locale）时，返回一个使用默认语言环境和格式设置（options）的格式化字符串。

```js
var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleTimeString without arguments depends on the implementation,
// the default locale, and the default time zone
alert(date.toLocaleTimeString());
// → "7:00:00 PM" if run in en-US locale with time zone America/Los_Angeles
```

### 例子：检测 `locales` 和 `options` 支持情况

`locales` 和 `options` 参数不是所有的浏览器都支持。为了检测一种实现环境（implementation）是否支持它们，可以使用不合法的语言标签，如果实现环境支持该参数，则会抛出一个 `RangeError` 异常，反之会忽略参数。

```js
function toLocaleTimeStringSupportsLocales() {
    try {
        new Date().toLocaleTimeString("i");
    } catch (e) {
        return e​.name === "RangeError";
    }
    return false;
}
```

### 例子：使用 `locales` 参数

下例展示了本地化时间格式的一些变化。为了在应用的用户界面得到某种语言的时间格式，必须确保使用 `locales` 参数指定了该语言（可能还需要设置某些回退语言）。

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// formats below assume the local time zone of the locale;
// America/Los_Angeles for the US

// US English uses 12-hour time with AM/PM
alert(date.toLocaleTimeString("en-US"));
// → "7:00:00 PM"

// British English uses 24-hour time without AM/PM
alert(date.toLocaleTimeString("en-GB"));
// → "03:00:00"

// Korean uses 12-hour time with AM/PM
alert(date.toLocaleTimeString("ko-KR"));
// → "오후 12:00:00"

// Arabic in most Arabic speaking countries uses real Arabic digits
alert(date.toLocaleTimeString("ar-EG"));
// → "٧:٠٠:٠٠ م"

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
alert(date.toLocaleTimeString(["ban", "id"]));
// → "11.00.00"
```

### 例子：使用 `options` 参数

可以使用 `options` 参数来自定义 `toLocaleTimeString` 方法返回的字符串。

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// an application may want to use UTC and make that visible
var options = {timeZone: "UTC", timeZoneName: "short"};
alert(date.toLocaleTimeString("en-US", options));
// → "3:00:00 AM GMT"

// sometimes even the US needs 24-hour time
alert(date.toLocaleTimeString("en-US", {hour12: false}));
// → "19:00:00"
```

## 性能

当格式化大量日期时，最好创建一个 [`Intl.DateTimeFormat`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) 对象，然后使用该对象 [`format`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/format) 属性提供的方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Global_Objects/DateTimeFormat", "DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
