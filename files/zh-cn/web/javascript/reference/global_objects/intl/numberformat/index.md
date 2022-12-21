---
title: Intl.NumberFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
---

{{JSRef}}

**`Intl.NumberFormat`** 对象能使语言敏感的数字格式化。

{{EmbedInteractiveExample("pages/js/intl-numberformat.html")}}

## 构造函数

- {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}}
  - : 创建一个新的 `NumberFormat` 对象。

## 静态方法

- {{jsxref("Intl/NumberFormat/supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
  - : 返回一个数组，其包含着那些被提供的受支持的区域（local），而运行时的默认的区域不会回落到该数组。

## 实例方法

- {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}
  - : getter 函数，根据此 {{jsxref("Intl.NumberFormat")}} 对象的区域设置和格式化选项格式化数字。
- {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}}
  - : 返回一个对象{{jsxref("Array", "数组", "", 1)}}，表示可以用于自定义区域设置感知格式的部分数字字符串。
- {{jsxref("Intl/NumberFormat/formatRange", "Intl.NumberFormat.prototype.formatRange()")}} {{experimental_inline}}
  - : getter 函数，根据调用该方法的 {{jsxref("Intl.NumberFormat")}} 对象的区域设置和格式化选项格式化一系列数字。
- {{jsxref("Intl/NumberFormat/formatRangeToParts", "Intl.NumberFormat.prototype.formatRangeToParts()")}} {{experimental_inline}}
  - : 返回一个对象{{jsxref("Array", "数组", "", 1)}}，表示可以用于自定义区域设置感知格式的部分数字字符串范围。
- {{jsxref("Intl/NumberFormat/resolvedOptions", "Intl.NumberFormat.prototype.resolvedOptions()")}}
  - : 返回一个新对象，其属性反映了对象对象初始化期间计算的区域设置和排序选项。

## 示例

### 基本使用

在不指定区域设置的基本使用中，返回默认区域设置中的格式化字符串和默认选项。

```js
const number = 3500;

console.log(new Intl.NumberFormat().format(number));
// '3,500' if in US English locale
```

### 使用 locales

此示例展示了本地数字格式化的一些变化。未来得到用户应用接口使用的语言格式，请确保使用 `locales` 参数指定该语言（可能还有一些备选语言）：

```js
const number = 123456.789;

// German uses comma as decimal separator and period for thousands
console.log(new Intl.NumberFormat('de-DE').format(number));
// 123.456,789

// Arabic in most Arabic speaking countries uses real Arabic digits
console.log(new Intl.NumberFormat('ar-EG').format(number));
// ١٢٣٤٥٦٫٧٨٩

// India uses thousands/lakh/crore separators
console.log(new Intl.NumberFormat('en-IN').format(number));
// 1,23,456.789

// the nu extension key requests a numbering system, e.g. Chinese decimal
console.log(new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec').format(number));
// 一二三,四五六.七八九

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(new Intl.NumberFormat(['ban', 'id']).format(number));
// 123.456,789
```

### 可用的选项

可以使用 [`options`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) 参数自定义结果：

```js
const number = 123456.789;

// request a currency format
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));
// 123.456,79 €

// the Japanese yen doesn't use a minor unit
console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number));
// ￥123,457

// limit to three significant digits
console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number));
// 1,23,000

// Formatting with units
console.log(new Intl.NumberFormat('pt-PT', {
  style: 'unit',
  unit: 'kilometer-per-hour'
}).format(50));
// 50 km/h

console.log((16).toLocaleString('en-GB', {
  style: 'unit',
  unit: 'liter',
  unitDisplay: 'long',
}));
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
