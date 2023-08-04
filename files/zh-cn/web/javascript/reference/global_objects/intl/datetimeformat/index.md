---
title: Intl.DateTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
---

{{JSRef}}

**`Intl.DateTimeFormat`** 对象能使日期和时间在特定的语言环境下格式化。

{{EmbedInteractiveExample("pages/js/intl-datetimeformat.html", "taller")}}

## 构造函数

- {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}}
  - : 创建一个新的 `Intl.DateTimeFormat` 对象。

## 静态方法

- {{jsxref("Intl/DateTimeFormat/supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
  - : 返回一个数组，其中包含所提供的区域（locale）中被运行时所支持的，而不必回退到运行时默认的区域。

## 实例方法

- {{jsxref("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}
  - : getter 函数，根据此 {{jsxref("Intl/DateTimeFormat", "DateTimeFormat")}} 对象的区域设置和格式化选项格式化日期。
- {{jsxref("Intl/DateTimeFormat/formatToParts", "Intl.DateTimeFormat.prototype.formatToParts()")}}
  - : 返回一个对象{{jsxref("Array", "数组", "", 1)}}，代表日期字符串的各个部分，可用于自定义本地化格式。
- {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}}
  - : 返回一个新对象，其属性能够反映相应对象在初始化时计算所得的区域和格式化选项。
- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}}
  - : 此方法接收两个 [Date](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象，并根据实例化 {{jsxref("Intl/DateTimeFormat", "DateTimeFormat")}} 时提供的区域和选项，以最简洁的方式格式化日期范围。
- {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}}
  - : 此方法接收两个 [Date](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象，并返回一个对象数组，该数组包含代表被格式化日期范围的每一部分特定于地区的词语元素对象。

## 示例

### 使用 DateTimeFormat

不指定 locale 时，`DateTimeFormat` 使用默认的 locale 和 默认的 options。

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 没有参数的 toLocaleString 返回取决于实现、默认的区域和默认的时区
console.log(new Intl.DateTimeFormat().format(date));
// 如果是在美式英语环境（语言）和洛杉矶时区（UTC-0800）下运行，那么会输出 "12/19/2012"
```

### 使用 locale

这个例子显示了本地化日期和时间格式的一些变化。为了获得用于你的应用程序的用户界面的语言格式，请确保使用 `locales` 参数指定了语言（可能还有一些回退语言）：

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 假定下面输出的结果使用了洛杉矶时区（UTC-0800，太平洋标准时间）

// 美式英语 (US English) 使用  month-day-year 格式
console.log(new Intl.DateTimeFormat("en-US").format(date));
// "12/19/2012"

// 英式英语 (British English) 使用 day-month-year 格式
console.log(new Intl.DateTimeFormat("en-GB").format(date));
// "19/12/2012"

// 韩国使用 year-month-day 格式
console.log(new Intl.DateTimeFormat("ko-KR").format(date));
// "2012. 12. 19."

// 大部分阿拉伯国家使用阿拉伯字母 (real Arabic digits)
console.log(new Intl.DateTimeFormat("ar-EG").format(date));
// "١٩‏/١٢‏/٢٠١٢"

// 在日本，应用可能想要使用日本日历，
// 2012 年是平成 24 年（平成是是日本天皇明仁的年号，由 1989 年 1 月 8 日起开始计算直至现在）
console.log(new Intl.DateTimeFormat("ja-JP-u-ca-japanese").format(date));
// "24/12/19"

// 当请求可能不支持的语言，如巴厘语（ban）时，若同时指定了备用的语言，
// 那么将使用备用的语言输出（本例为印尼语（id））
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));
// "19/12/2012"
```

### 使用 options

可以使用 `options` 参数来自定义日期时间格式化方法返回的字符串。

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// 请求参数 (options) 中包含参数星期 (weekday)，并且该参数的值为长类型 (long)
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(new Intl.DateTimeFormat("de-DE", options).format(date));
// "Donnerstag, 20. Dezember 2012"

// 应用可能需要使用世界标准时间 (UTC)，并且 UTC 使用短名字 (short) 展示
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// "Thursday, December 20, 2012, GMT"

// 有时需要更精确的选项
options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Australia/Sydney",
  timeZoneName: "short",
};
console.log(new Intl.DateTimeFormat("en-AU", options).format(date));
// "2:00:00 pm AEDT"

// 再精确些...
options.fractionalSecondDigits = 3; // 秒数的有效数字数量
console.log(new Intl.DateTimeFormat("en-AU", options).format(date));
// "2:00:00.200 pm AEDT"

// 即便是美国，有时也需要使用 24 小时制
options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
  timeZone: "America/Los_Angeles",
};
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// "12/19/2012, 19:00:00"

// 要使用选项，但是需要使用浏览器的默认区域，请使用 'default'
console.log(new Intl.DateTimeFormat("default", options).format(date));
// "12/19/2012, 19:00:00"
// 有时需要包含一天的时段
options = { hour: "numeric", dayPeriod: "short" };
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// 10 at night
```

使用的日历和数字格式也可以通过 `options` 参数分别设置：

```js
const options = { calendar: "chinese", numberingSystem: "arab" };
const dateFormat = new Intl.DateTimeFormat("default", options);
const usedOptions = dateFormat.resolvedOptions();
console.log(usedOptions.calendar);
// "chinese"
console.log(usedOptions.numberingSystem);
// "arab"
console.log(usedOptions.timeZone);
// "America/New_York"（用户的默认时区）
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Intl")}}
- [FormatJS 上的 `Intl.DateTimeFormat` polyfill](https://formatjs.io/docs/polyfills/intl-datetimeformat/)
