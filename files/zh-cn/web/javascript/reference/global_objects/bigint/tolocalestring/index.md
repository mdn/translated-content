---
title: BigInt.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toLocaleString
---

{{JSRef}}

**`toLocaleString()`** 方法返回一个字符串，该字符串具有此 `BigInt` 的 language-sensitive 表达形式。

{{EmbedInteractiveExample("pages/js/bigint-tolocalestring.html")}}

## 语法

```plain
bigIntObj.toLocaleString([locales [, options]])
```

### 参数

`locales` 和 `options` 参数可自定义函数的行为，并允许应用程序指定应使用其格式约定的语言。在忽略 `locales` 和 `options` 参数的实现中，使用的 `locale` 和返回的字符串形式完全依赖于实现。

{{page('/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat', '参数')}}

### 返回值

具有此 `BigInt` 的 language-sensitive 表示形式的字符串。

## 例子

### Using `toLocaleString`

在不指定语言环境的基本用法中，将返回默认语言环境中带默认选项的格式化字符串。

```js
var bigint = 3500n;

bigint.toLocaleString();
// Displays "3,500" if in U.S. English locale
```

### Using `locales`

这个例子展示了本地化数字格式的一些变体。为了获得应用程序用户界面中使用的语言的格式，请确保使用 `locales` 参数指定该语言（可能还有一些备用语言）：

```js
var bigint = 123456789123456789n;

// German uses period for thousands
console.log(bigint.toLocaleString('de-DE'));
// → 123.456.789.123.456.789

// Arabic in most Arabic speaking countries uses Eastern Arabic digits
console.log(bigint.toLocaleString('ar-EG'));
// → ١٢٣٬٤٥٦٬٧٨٩٬١٢٣٬٤٥٦٬٧٨٩

// India uses thousands/lakh/crore separators
console.log(bigint.toLocaleString('en-IN'));
// → 1,23,45,67,89,12,34,56,789

// the nu extension key requests a numbering system, e.g. Chinese decimal
console.log(bigint.toLocaleString('zh-Hans-CN-u-nu-hanidec'));
// → 一二三,四五六,七八九,一二三,四五六,七八九

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(bigint.toLocaleString(['ban', 'id']));
// → 123.456.789.123.456.789
```

### Using `options`

`toLocaleString` 提供的结果可以使用 `options` 参数进行自定义：

```js
var bigint = 123456789123456789n;

// request a currency format
console.log(bigint.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// → 123.456.789.123.456.789,00 €

// the Japanese yen doesn't use a minor unit
console.log(bigint.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
// → ￥123,456,789,123,456,789

// limit to three significant digits
console.log(bigint.toLocaleString('en-IN', { maximumSignificantDigits: 3 }));
// → 1,23,00,00,00,00,00,00,000
```

## 性能

格式化大量数字时，最好创建 {{jsxref("NumberFormat")}} 对象并使用其 {{jsxref("NumberFormat.format")}} 属性提供的函数。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 请参阅

- {{jsxref("BigInt.toString()")}}
