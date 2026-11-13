---
title: Date.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
---

**`toLocaleString()`** 方法返回该日期对象的字符串，该字符串格式因不同语言而不同。在支持 [`Intl.DateTimeFormat` API](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) 的实现中，该方法仅是调用了 `Intl.DateTimeFormat` 方法。

{{InteractiveExample("JavaScript Demo: Date.toLocaleString()")}}

```js interactive-example
const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// British English uses day-month-year order and 24-hour time without AM/PM
console.log(event.toLocaleString("en-GB", { timeZone: "UTC" }));
// Expected output: "20/12/2012, 03:00:00"

// Korean uses year-month-day order and 12-hour time with AM/PM
console.log(event.toLocaleString("ko-KR", { timeZone: "UTC" }));
// Expected output: "2012. 12. 20. 오전 3:00:00"
```

## 语法

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### 参数

`locales` 和 `options` 参数使程序能够指定使用哪种语言格式化规则，允许定制该方法的行为（behavior）。

在支持 [`Intl.DateTimeFormat` API](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) 的实现中，这些参数与构造函数的参数完全对应。而对于不支持 `Intl.DateTimeFormat` 的实现，则要求函数忽略这两个参数，使得函数使用的区域（locale）以及返回的字符串的格式完全取决于实现。

- `locales` {{optional_inline}}
  - : 表示缩写语言代码（BCP 47 language tag）的字符串，或由此类字符串组成的数组。对应于 `Intl.DateTimeFormat()` 构造函数的 [`locales`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#locales) 参数。

    在不支持 `Intl.DateTimeFormat` 的实现中，该参数会被忽略，并且通常会使用主机的区域设置。

- `options` {{optional_inline}}
  - : 一个调整输出格式的对象。对应于 `Intl.DateTimeFormat()` 构造函数的 [`options`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#options) 参数。如果其 `dayPeriod`、`hour`、`minute`、`second` 和 `fractionalSecondDigits` 属性全是 undefined，则 `hour`、`minute`、`second` 这三个属性会被设置为 `"numeric"`。

    在不支持 `Intl.DateTimeFormat` 的实现中，该参数会被忽略。

参见 [`Intl.DateTimeFormat()` 构造函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)以详细了解这些参数以及如何使用它们。

### 返回值

一个表示给定的 date 对象，且与语言相关的字符串。

在支持 `Intl.DateTimeFormat` 的实现中，此方法等价于 `new Intl.DateTimeFormat(locales, options).format(date)`。

> [!NOTE]
> 大多数时候，`toLocaleString()` 返回的格式是一致的。但是，这可能在未来发生变化，且不能保证所有语言都能得到一致的格式。输出的变化因实现而异，而且这种变化是规范所允许的。你不应该将 `toLocaleString()` 的结果与静态值作比较。

## 示例

### 使用 toLocaleString()

没有指定区域（locale）时，返回一个使用默认区域和格式设置（options）的格式化字符串。

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleString() 不包含参数，其默认区域和时区取决于实现
console.log(date.toLocaleString());
// "2012/12/12 11:00:00" 如果在 zh-CN 区域以及东八区（北京时间）下运行
```

### 检测 locales 和 options 参数支持情况

`locales` 和 `options` 参数不是所有的浏览器都支持。为了检测一种实现环境（implementation）是否支持它们，可以使用不合法的语言标签，如果实现环境支持该参数，则会抛出 {{jsxref("RangeError")}} 异常，反之会忽略参数。

```js
function toLocaleStringSupportsLocales() {
  try {
    new Date().toLocaleString("i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### 使用 locales

下例展示了本地化日期格式的一些变化。为了在应用的用户界面得到某种语言的日期和时间格式，必须确保使用 `locales` 参数指定了该语言（可能还需要设置某些回退语言）。

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 以下格式化输出均假设使用区域的本地时区；
// 对于美国，为 America/Los_Angeles

// 美式英语，使用 month-day-year 的顺序以及带有 AM/PM 的 12 小时制
console.log(date.toLocaleString("en-US"));
// "12/19/2012, 7:00:00 PM"

// 英式英语，使用 day-month-year 的顺序以及不带有 AM/PM 的 24 小时制
console.log(date.toLocaleString("en-GB"));
// "20/12/2012 03:00:00"

// 韩国，使用 year-month-day 的顺序以及带有 AM/PM 的 12 小时制
console.log(date.toLocaleString("ko-KR"));
// "2012. 12. 20. 오후 12:00:00"

// 大多数阿拉伯国家使用真正的阿拉伯数字
console.log(date.toLocaleString("ar-EG"));
// "٢٠‏/١٢‏/٢٠١٢ ٥:٠٠:٠٠ ص"

// 对于日语，应用倾向于使用日本的和历，
// 2012 年是平成时代的第 24 年
console.log(date.toLocaleString("ja-JP-u-ca-japanese"));
// "24/12/20 12:00:00"

// 当使用的语言不被支持，例如
// 巴厘岛语，则可以包含一种回退语言，这里以印尼语为例
console.log(date.toLocaleString(["ban", "id"]));
// "20/12/2012 11.00.00"
```

### 使用 options

可以使用 `options` 参数来自定义 `toLocaleString()` 方法返回的字符串。

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 请求参数包含星期，且该参数的值为长整型
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(date.toLocaleString("de-DE", options));
// "Donnerstag, 20. Dezember 2012"

// 应用程序可能想要使用 UTC 时间，并使其可见
options.timeZone = "UTC";
options.timeZoneName = "short";

console.log(date.toLocaleString("en-US", options));
// "Thursday, December 20, 2012, GMT"

// 有时，区域设置为美国的情况下，也需要使用 24 小时制
console.log(date.toLocaleString("en-US", { hour12: false }));
// "12/19/2012, 19:00:00"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Global_Objects/Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
