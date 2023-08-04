---
title: Number.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
---

{{JSRef}}

**`toLocaleString()`** 方法返回这个数字在特定语言环境下的表示字符串。在使用具有 [`Intl.NumberFormat` API](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) 支持的实现时，此方法仅仅简单调用了 `Intl.NumberFormat`。

{{EmbedInteractiveExample("pages/js/number-tolocalestring.html")}}

## 语法

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### 参数

`locales` 和 `options` 参数让应用程序可以指定要进行格式转换的语言，并且定制函数的行为。

在使用具有 [`Intl.NumberFormat` API](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) 支持的实现时，这些参数与 [`Intl.NumberFormat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) 构造器的参数相同。不支持 `Intl.NumberFormat` 时，会忽略参数，使得使用的区域设置和返回的字符串格式完全由实现决定。

- `locales` {{optional_inline}}

  - : 缩写语言代码（BCP 47 language tag）的字符串或者这些字符串组成的数组。与 `Intl.NumberFormat()` 构造函数的 [`locales`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales) 参数相同。

    在无 `Intl.NumberFormat` 支持的实现中，往往使用主机的区域设置，这个参数是忽略的。

- `options` {{optional_inline}}

  - : 调整输出格式的对象。与 `Intl.NumberFormat()` 构造函数的 [`options`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) 参数相同。

    在无 `Intl.NumberFormat` 支持的实现中，这个参数是忽略的。

请查阅 [`Intl.NumberFormat()` 构造函数](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)以了解这些参数的详细信息，以及如何使用它们。

### 返回值

返回一个语言环境下的表示字符串。

在使用 `Intl.NumberFormat` 的实现中，这与 `new Intl.NumberFormat(locales, options).format(number)` 调用等价。

## 性能

当格式化非常多的数字时，最好创建一个 {{jsxref("Intl.NumberFormat")}} 对象，并且使用其 {{jsxref("Intl/NumberFormat/format", "format")}} 属性提供的方法。

## 示例

### 使用 toLocaleString()

在没有指定区域的基本使用时，返回使用默认的语言环境和默认选项格式化的字符串。

```js
const number = 3500;

console.log(number.toLocaleString()); // Displays "3,500" if in U.S. English locale
```

### 检查 `locales` 和 `options` 参数的支持

并不是所有实现都需要支持 ECMA-402 标准（国际化 API）。如果浏览器不支持该标准，则参数 `locales` 和 `options` 参数必须都要忽略掉。可以依靠使用非法参数时规定抛出的 {{jsxref("Global_Objects/RangeError", "RangeError")}} 异常来检测支持的情况：

```js
function toLocaleStringSupportsLocales() {
  const number = 0;
  try {
    number.toLocaleString("i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

早于 ES5.1 的实现中，携带非法参数调用 `toLocaleString` 不需要抛出范围异常。在所有主机环境下，包括那些支持比 ed 5.1 还早的 ECMA-262 的环境，都能有效检测的方法是直接检测 ECMA-402 中的其他特性，它指定 `Number.prototype.toLocaleString` 需要支持地区选项：

```js
function toLocaleStringSupportsOptions() {
  return !!(
    typeof Intl === "object" &&
    Intl &&
    typeof Intl.NumberFormat === "function"
  );
}
```

它测试全局的 `Intl` 对象，检测它不是 `null` 并且有 `NumberFormat` 的方法。

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
