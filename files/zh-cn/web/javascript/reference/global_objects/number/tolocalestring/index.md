---
title: Number.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
---
{{JSRef("Global_Objects", "Number")}}

**`toLocaleString()`** 方法返回这个数字在特定语言环境下的表示字符串。

新的 `locales` 和 `options` 参数让应用程序可以指定要进行格式转换的语言，并且定制函数的行为。在旧的实现中，会忽略 `locales` 和 `options` 参数，使用的语言环境和返回的字符串的形式完全取决于实现方式。

## 语法

```plain
numObj.toLocaleString([locales [, options]])
```

### 参数

查阅[浏览器兼容性](#浏览器兼容性)部分，了解哪些浏览器支持 `locales` 和 `options` 参数，通过[示例：检查 `locales` 和 `options` 参数的支持](#Checking_for_support_for_locales_and_options_arguments)了解特征检测。

> **备注：** ECMAScript 国际化 API，在 Firefox 29 中得以实施，增加了 `locales` 参数的 [`Number.toLocaleString`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString) 方法。如果参数为 `undefined`，此方法返回本地操作系统指定的位数，而 Firefox 的早期版本中返回[阿拉伯语](https://en.wikipedia.org/wiki/Arabic_numerals)数字。这一变化已被报告为向后影响的兼容性问题并可能会被尽快修复。({{ bug(999003) }})

{{page('/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat', '参数')}}

### 返回值

返回一个语言环境下的表示字符串。

## 示例

### 使用 `toLocaleString`

在没有指定区域的基本使用时，返回使用默认的语言环境和默认选项格式化的字符串。

```js
var number = 3500;

console.log(number.toLocaleString()); // Displays "3,500" if in U.S. English locale
```

### 检查 `locales` 和 `options` 参数的支持

`locales` 和 `options` 参数目前还不是所有浏览器都支持的。在 ES5.1 和更新的实现中检查支持情况，可以依靠使用非法参数时规定抛出的 {{jsxref("Global_Objects/RangeError", "RangeError")}} 异常：

```js
function toLocaleStringSupportsLocales() {
  var number = 0;
  try {
    number.toLocaleString('i');
  } catch (e) {
    return e​.name === 'RangeError';
  }
  return false;
}
```

早于 ES5.1 的实现中，如果带参数调用 `toLocaleString` 并不会抛出范围异常。

在所有宿主环境下，包括那些支持比 ed 5.1 还早的 ECMA-262 的环境，都能有效检测的方法是直接检测 ECMA-402 中的其它特性，它指定 `Number.prototype.toLocaleString` 需要支持地区选项：

```js
function toLocaleStringSupportsOptions() {
  return !!(typeof Intl == 'object' && Intl && typeof Intl.NumberFormat == 'function');
}
```

它测试全局的 `Intl` 对象，检测它不是 `null` 并且有 `NumberFormat` 的方法。

### 使用 `locales`

这个示例展示了不同地区数字格式的差异。为了设置你的应用程序界面下使用的语言格式，请确保使用 `locales` 参数指定了使用的语言（可能还有一些备用语言）：

```js
var number = 123456.789;

// 德国使用逗号作为小数分隔符，分位周期为千位
console.log(number.toLocaleString('de-DE'));
// → 123.456,789

// 在大多数阿拉伯语国家使用阿拉伯语数字
console.log(number.toLocaleString('ar-EG'));
// → ١٢٣٤٥٦٫٧٨٩

// 印度使用千位/拉克（十万）/克若尔（千万）分隔
console.log(number.toLocaleString('en-IN'));
// → 1,23,456.789

// nu 扩展字段要求编号系统，e.g. 中文十进制
console.log(number.toLocaleString('zh-Hans-CN-u-nu-hanidec'));
// → 一二三,四五六.七八九

// 当请求不支持的语言时，例如巴厘语，加入一个备用语言，比如印尼语
console.log(number.toLocaleString(['ban', 'id']));
// → 123.456,789
```

### 使用 `options`

通过 `toLocaleString` 返回的结果可以通过 `options` 参数进行定制：

```js
var number = 123456.789;

// 要求货币格式
console.log(number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// → 123.456,79 €

// 日元不使用小数位
console.log(number.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
// → ￥123,457

// 限制三位有效数字
console.log(number.toLocaleString('en-IN', { maximumSignificantDigits: 3 }));
// → 1,23,000
```

## 性能

当格式化大量数字时，最好建立一个 {{jsxref("Global_Objects/NumberFormat", "NumberFormat")}} 对象并且使用它提供的 {{jsxref("NumberFormat.format")}} 方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Number.prototype.toString()")}}
