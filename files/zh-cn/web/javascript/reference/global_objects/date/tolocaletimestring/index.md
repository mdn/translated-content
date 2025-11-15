---
title: Date.prototype.toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
---

**`toLocaleTimeString()`** 方法返回该日期对象时间部分的字符串，该字符串格式因语言而异。在支持 [`Intl.DateTimeFormat` API](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) 的实现中，该方法仅是调用了 `Intl.DateTimeFormat` 方法。

{{InteractiveExample("JavaScript Demo: Date.toLocaleTimeString()")}}

```js interactive-example
// Depending on timezone, your results will vary
const event = new Date("August 19, 1975 23:15:30 GMT+00:00");

console.log(event.toLocaleTimeString("en-US"));
// Expected output: "1:15:30 AM"

console.log(event.toLocaleTimeString("it-IT"));
// Expected output: "01:15:30"

console.log(event.toLocaleTimeString("ar-EG"));
// Expected output: "١٢:١٥:٣٠ ص"
```

## 语法

```js-nolint
toLocaleTimeString()
toLocaleTimeString(locales)
toLocaleTimeString(locales, options)
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

一个表示给定的 {{jsxref("Global_Objects/Date", "Date")}} 实例的时间部分，且与语言相关的字符串。

在支持 `Intl.DateTimeFormat` 的实现中，该方法等价于 `new Intl.DateTimeFormat(locales, options).format(date)`，其中的 `options` 已通过上述的规则进行规范化。

## 性能

当需要格式化大量的日期（date）时，最好创建一个 [`Intl.DateTimeFormat`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) 对象，并使用其 [`format()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) 方法。

## 示例

### 使用 toLocaleTimeString()

没有指定 `locale` 时，返回一个使用默认语言环境和格式设置（options）的格式化字符串。

```js
const date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleTimeString() 不携带参数时，其默认区域和时区取决于实现
console.log(date.toLocaleTimeString());
// "11:00:00" 如果在 zh-CN 区域以及东八区（北京时间）下运行
```

### 使用 locales

以下示例显示不同的本地化时间格式。为了获得用户界面（UI）使用的语言格式表示的字符串，请确保使用了 `locales` 参数，并将其指定为用户所使用的语言。

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 以下格式化输出均假设使用区域的本地时区；
// 对于美国，为 America/Los_Angeles

// 美式英语，使用带有 AM/PM 的 12 小时制
console.log(date.toLocaleTimeString("en-US"));
// "11:00:00 AM"

// 英式英语，使用不带有 AM/PM 的 24 小时制
console.log(date.toLocaleTimeString("en-GB"));
// "03:00:00"

// 韩国，使用带有 AM/PM 的 12 小时制
console.log(date.toLocaleTimeString("ko-KR"));
// "오후 12:00:00"

// 大多数阿拉伯国家使用真正的阿拉伯数字
console.log(date.toLocaleTimeString("ar-EG"));
// "٧:٠٠:٠٠ م"

// 当使用的语言不被支持，例如
// 巴厘岛语，则可以包含一种回退语言，这里以印尼语为例
console.log(date.toLocaleTimeString(["ban", "id"]));
// "11.00.00"
```

### 使用 options

可以使用 `options` 参数自定义 `toLocaleTimeString()` 所提供的结果。

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 应用程序可能想要使用 UTC 时间，并使其可见
const options = { timeZone: "UTC", timeZoneName: "short" };
console.log(date.toLocaleTimeString("en-US", options));
// "3:00:00 AM GMT"

// 有时，区域设置为美国的情况下，需要使用 24 小时制
console.log(date.toLocaleTimeString("en-US", { hour12: false }));
// "19:00:00"

// 只显示小时和分钟，并使用默认区域——使用一个空数组
console.log(
  date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
);
// "20:01"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`Intl.DateTimeFormat`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
