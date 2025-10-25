---
title: Number.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
---

{{jsxref("Number")}} 值的 **`toLocaleString()`** 方法返回这个数字特定于语言环境的表示字符串。在具有 [`Intl.NumberFormat` API](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) 支持的实现中，此方法仅仅简单调用了 `Intl.NumberFormat`。

当格式化大量数字时，最好创建一个 {{jsxref("Intl.NumberFormat")}} 对象，并使用其提供的 {{jsxref("Intl/NumberFormat/format", "format()")}} 方法。

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

## 语法

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### 参数

`locales` 和 `options` 参数让应用程序可以指定要进行格式转换的语言，并且定制函数的行为。

在使用具有 [`Intl.NumberFormat` API](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) 支持的实现时，这些参数与 [`Intl.NumberFormat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) 构造函数的参数相同。不支持 `Intl.NumberFormat` 时，会忽略参数，使得使用的区域设置和返回的字符串格式完全由实现决定。

- `locales` {{optional_inline}}
  - : 缩写语言代码（BCP 47 language tag）的字符串或者这些字符串组成的数组。与 `Intl.NumberFormat()` 构造函数的 [`locales`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales) 参数相同。

    在无 `Intl.NumberFormat` 支持的实现中，往往使用主机的区域设置，这个参数是忽略的。

- `options` {{optional_inline}}
  - : 调整输出格式的对象。与 `Intl.NumberFormat()` 构造函数的 [`options`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) 参数相同。

    在无 `Intl.NumberFormat` 支持的实现中，这个参数是被忽略的。

请查阅 [`Intl.NumberFormat()` 构造函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)以了解这些参数的详细信息，以及如何使用它们。

### 返回值

返回一个语言环境下的表示字符串。

在使用 `Intl.NumberFormat` 的实现中，这与 `new Intl.NumberFormat(locales, options).format(number)` 调用等价。

## 示例

### 使用 toLocaleString()

在没有指定区域的基本使用时，返回使用默认的语言环境和默认选项格式化的字符串。

```js
const number = 3500;

console.log(number.toLocaleString()); // "3,500"，如果区域设置为美国英语
```

### 检查 locales 和 options 参数的支持

`locales` 和 `options` 参数可能不被所有实现支持，因为国际化 API 的支持是可选的，一些系统可能没有必要的数据。对于没有国际化支持的实现，`toLocaleString()` 总是使用系统的区域设置，这可能不是你想要的。因为任何支持 `locales` 和 `options` 参数的实现必须支持 {{jsxref("Intl")}} API，你可以检查后者的存在来确定是否支持：

```js
function toLocaleStringSupportsLocales() {
  return (
    typeof Intl === "object" &&
    !!Intl &&
    typeof Intl.NumberFormat === "function"
  );
}
```

### 使用 locales

这个示例展示了不同地区数字格式的差异。为了设置你的应用程序界面下使用的语言格式，请确保使用 `locales` 参数指定了使用的语言（可能还有一些备用语言）：

```js
const number = 123456.789;

// 德国使用逗号作为小数分隔符，分位周期为千位
console.log(number.toLocaleString("de-DE"));
// → 123.456,789

// 在大多数阿拉伯语国家使用阿拉伯语数字
console.log(number.toLocaleString("ar-EG"));
// → ١٢٣٤٥٦٫٧٨٩

// 印度使用千位/拉克（十万）/克若尔（千万）分隔
console.log(number.toLocaleString("en-IN"));
// → 1,23,456.789

// nu 扩展字段要求编号系统，e.g. 中文十进制
console.log(number.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// → 一二三,四五六.七八九

// 当请求不支持的语言时，例如巴厘语，加入一个备用语言，比如印尼语
console.log(number.toLocaleString(["ban", "id"]));
// → 123.456,789
```

### 使用 options

通过 `toLocaleString` 返回的结果可以通过 `options` 参数进行定制：

```js
const number = 123456.789;

// 要求货币格式
console.log(
  number.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// → 123.456,79 €

// 日元不使用小数位
console.log(
  number.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }),
);
// → ￥123,457

// 限制三位有效数字
console.log(number.toLocaleString("en-IN", { maximumSignificantDigits: 3 }));
// → 1,23,000

// 使用带选项的主机默认语言进行数字格式化
const num = 30000.65;
console.log(
  num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }),
);
// → "30,000.65" 英语为默认语言
// → "30.000,65" 德语为默认语言
// → "30 000,65" 法语为默认语言
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Number.prototype.toString()")}}
