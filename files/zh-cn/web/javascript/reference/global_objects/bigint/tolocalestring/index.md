---
title: BigInt.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toLocaleString
---

{{JSRef}}

**`toLocaleString()`** 方法返回一个表示给定 BigInt 对象的字符串，该字符串格式因不同语言而不同。在支持 [`Intl.NumberFormat` API](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) 的实现中，该方法仅是调用了 `Intl.NumberFormat` 方法。

{{EmbedInteractiveExample("pages/js/bigint-tolocalestring.html")}}

## 语法

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### 参数

`locales` 和 `options` 参数使程序能够指定使用哪种语言格式化规则，允许定制该方法的行为（behavior）。

在支持 [`Intl.NumberFormat` API](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) 的实现中，这些参数与 [`Intl.NumberFormat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) 构造函数的参数完全对应。而对于不支持 `Intl.NumberFormat` 的实现，则要求函数忽略这两个参数，使得函数使用的区域（locale）以及返回的字符串的格式完全取决于实现。

- `locales` {{optional_inline}}

  - : 表示缩写语言代码（BCP 47 language tag）的字符串，或由此类字符串组成的数组。对应于 `Intl.NumberFormat()` 构造函数的 [`locales`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales) 参数。

    在不支持 `Intl.NumberFormat` 的实现中，该参数会被忽略，并且通常会使用主机的区域设置。

- `options` {{optional_inline}}

  - : 一个调整输出格式的对象。对应于 `Intl.NumberFormat()` 构造函数的 [`options`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) 参数。

    在不支持 `Intl.NumberFormat` 的实现中，该参数会被忽略。

参见 [`Intl.NumberFormat()` 构造函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)以详细了解这些参数以及如何使用它们。

### 返回值

一个表示给定 BitInt 对象的字符串，该字符串格式因不同语言而不同。

在支持 `Intl.NumberFormat` 的实现中，此方法等价于 `new Intl.NumberFormat(locales, options).format(number)`。

## 性能

当需要对大量的数字进行格式化时，最好创建一个 {{jsxref("Intl.NumberFormat")}} 对象，并使用其 {{jsxref("Intl/NumberFormat/format", "format()")}} 方法提供的函数。

## 示例

### 使用 `toLocaleString`

没有指定区域（locale）时，返回一个使用默认区域和格式设置（options）的格式化字符串。

```js
const bigint = 3500n;

console.log(bigint.toLocaleString());
// "3,500" 如果区域为 en-US
```

### 使用 `locales`

这个例子展示了本地化数字格式的一些变体。为了获得应用程序用户界面中使用的语言的格式，请确保使用 `locales` 参数指定该语言（可能还有一些回退语言）：

<!-- autocorrect-disable -->

```js
const bigint = 123456789123456789n;

// 德国使用句号表示千位
console.log(bigint.toLocaleString("de-DE"));
// 123.456.789.123.456.789

// 大多数说阿拉伯语的阿拉伯国家使用东阿拉伯数字
console.log(bigint.toLocaleString("ar-EG"));
// ١٢٣٬٤٥٦٬٧٨٩٬١٢٣٬٤٥٦٬٧٨٩

// 印度使用千、万、千万分隔符
console.log(bigint.toLocaleString("en-IN"));
// 1,23,45,67,89,12,34,56,789

// nu 扩展键要求使用编号系统，例如中文十进制数
console.log(bigint.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// 一二三,四五六,七八九,一二三,四五六,七八九

// 当使用的语言不被支持，例如
// 巴厘岛语，则可以包含一种回退语言，这里以印尼语为例
console.log(bigint.toLocaleString(["ban", "id"]));
// 123.456.789.123.456.789
```

<!-- autocorrect-enable -->

### 使用 `options`

`toLocaleString` 提供的结果可以使用 `options` 参数进行自定义：

```js
const bigint = 123456789123456789n;

// 要求使用货币格式
console.log(
  bigint.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// 123.456.789.123.456.789,00 €

// 日元不使用小数单位
console.log(
  bigint.toLocaleString("ja-JP", { style: "currency", currency: "JPY" }),
);
// ￥123,456,789,123,456,789

// 保留三位有效数字
console.log(bigint.toLocaleString("en-IN", { maximumSignificantDigits: 3 }));
// 1,23,00,00,00,00,00,00,000
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("BigInt.prototype.toString()")}}
