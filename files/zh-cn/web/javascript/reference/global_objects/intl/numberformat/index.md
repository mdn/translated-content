---
title: Intl.NumberFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
---

{{JSRef}}

**`Intl.NumberFormat`** 对象能使数字在特定的语言环境下格式化。

{{EmbedInteractiveExample("pages/js/intl-numberformat.html")}}

## 构造函数

- {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}}
  - : 创建一个新的 `NumberFormat` 对象。

## 静态方法

- {{jsxref("Intl/NumberFormat/supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
  - : 返回一个数组，其包含着那些被提供的受支持的区域（locale），而运行时的默认的区域不会出现在该数组。

## 实例方法

- {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}
  - : getter 函数，根据此 {{jsxref("Intl.NumberFormat")}} 对象的区域设置和格式化选项格式化数字。
- {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}}
  - : 返回一个对象{{jsxref("Array", "数组", "", 1)}}，其中表示的是数字字符串的各个部分，可以用于自定义本地化格式。
- {{jsxref("Intl/NumberFormat/formatRange", "Intl.NumberFormat.prototype.formatRange()")}}
  - : getter 函数，根据调用该方法的 {{jsxref("Intl.NumberFormat")}} 对象的区域设置和格式化选项格式化一个数字的范围。
- {{jsxref("Intl/NumberFormat/formatRangeToParts", "Intl.NumberFormat.prototype.formatRangeToParts()")}}
  - : 返回一个对象{{jsxref("Array", "数组", "", 1)}}，其中表示的是数字范围的字符串的各个部分，可以用于自定义本地化格式。
- {{jsxref("Intl/NumberFormat/resolvedOptions", "Intl.NumberFormat.prototype.resolvedOptions()")}}
  - : 返回一个新对象，其属性能够反映相应对象在初始化时计算所得的区域和格式化选项。

## 示例

### 基础用例

在不指定区域设置的基本用例中，返回默认区域和默认选项中的格式化字符串。

```js
const number = 3500;

console.log(new Intl.NumberFormat().format(number));
// 如果在美式英语区域 → '3,500'
```

### 使用 locales

此示例展示了本地数字格式化的一些变化。为了得到用户应用接口使用的语言格式，请确保使用 `locales` 参数指定该语言（可能还有一些备选语言）：

```js
const number = 123456.789;

// 德语使用逗号（,）作为小数点，使用句号（.）作为千位分隔符
console.log(new Intl.NumberFormat("de-DE").format(number));
// → 123.456,789

// 大多数阿拉伯语国家使用阿拉伯语数字
console.log(new Intl.NumberFormat("ar-EG").format(number));
// → ١٢٣٤٥٦٫٧٨٩

// India uses thousands/lakh/crore separators
console.log(new Intl.NumberFormat("en-IN").format(number));
// → 1,23,456.789

// 通过编号系统中的 nu 扩展键请求，例如：中文十进制数字
console.log(new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec").format(number));
// → 一二三,四五六.七八九

//当请求的语言不被支持，例如巴里，包含一个回滚语言印尼，这时候就会使用印尼语
console.log(new Intl.NumberFormat(["ban", "id"]).format(number));
// → 123.456,789
```

### 使用 options

可以使用 [`options`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) 参数自定义结果：

```js
const number = 123456.789;

// 要求货币格式
console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    number,
  ),
);
// 123.456,79 €

// 日元不使用小数位
console.log(
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    number,
  ),
);
// ￥123,457

// 限制三位有效数字
console.log(
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number,
  ),
);
// 1,23,000

// 带有单位的格式化
console.log(
  new Intl.NumberFormat("pt-PT", {
    style: "unit",
    unit: "kilometer-per-hour",
  }).format(50),
);
// 50 km/h

console.log(
  (16).toLocaleString("en-GB", {
    style: "unit",
    unit: "liter",
    unitDisplay: "long",
  }),
);
// 16 litres
```

有关详尽的选项列表，参见 [`Intl.NumberFormat()` 构造函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options)页面。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("Intl")}}
- [FormatJS 中 `Intl.NumberFormat` 的 polyfill](https://formatjs.io/docs/polyfills/intl-numberformat/)
