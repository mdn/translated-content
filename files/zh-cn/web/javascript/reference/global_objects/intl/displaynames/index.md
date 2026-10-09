---
title: Intl.DisplayNames
slug: Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

**`Intl.DisplayNames`** 对象支持语言、区域和脚本显示名称的一致翻译。

{{InteractiveExample("JavaScript Demo: Intl.DisplayNames")}}

```js interactive-example
const regionNamesInEnglish = new Intl.DisplayNames(["en"], { type: "region" });
const regionNamesInTraditionalChinese = new Intl.DisplayNames(["zh-Hant"], {
  type: "region",
});

console.log(regionNamesInEnglish.of("US"));
// Expected output: "United States"

console.log(regionNamesInTraditionalChinese.of("US"));
// Expected output: "美國"
```

## 构造函数

- {{jsxref("Intl/DisplayNames/DisplayNames", "Intl.DisplayNames()")}}
  - : 创建一个新的 `Intl.DisplayNames` 对象。

## 静态方法

- {{jsxref("Intl/DisplayNames/supportedLocalesOf", "Intl.DisplayNames.supportedLocalesOf()")}}
  - : 返回一个数组，其中包含所提供的语言环境中受支持的那些语言环境，而不必回退到运行时的默认语言环境。

## 实例属性

这些属性定义在 `Intl.DisplayNames.prototype` 上，并由所有 `Intl.DisplayNames` 实例共享。

- {{jsxref("Object/constructor", "Intl.DisplayNames.prototype.constructor")}}
  - : 创建该实例对象的构造函数。对于 `Intl.DisplayNames` 实例，初始值为 {{jsxref("Intl/DisplayNames/DisplayNames", "Intl.DisplayNames")}} 构造函数。
- `Intl.DisplayNames.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值为字符串 `"Intl.DisplayNames"`。此属性用于 {{jsxref("Object.prototype.toString()")}}。

## 实例方法

- {{jsxref("Intl/DisplayNames/of", "Intl.DisplayNames.prototype.of()")}}
  - : 该方法接收一个 `code`，并基于实例化 `Intl.DisplayNames` 时提供的语言环境和选项返回一个字符串。
- {{jsxref("Intl/DisplayNames/resolvedOptions", "Intl.DisplayNames.prototype.resolvedOptions()")}}
  - : 返回一个新对象，其属性反映在对象初始化期间计算出的语言环境和格式化选项。

## 示例

### 区域代码的显示名称

为某个语言环境创建 `Intl.DisplayNames`，并获取区域代码的显示名称。

```js
// 获取区域在英语中的显示名称
let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
regionNames.of("419"); // "Latin America"
regionNames.of("BZ"); // "Belize"
regionNames.of("US"); // "United States"
regionNames.of("BA"); // "Bosnia & Herzegovina"
regionNames.of("MM"); // "Myanmar (Burma)"

// 获取区域在繁体中文中的显示名称
regionNames = new Intl.DisplayNames(["zh-Hant"], { type: "region" });
regionNames.of("419"); // "拉丁美洲"
regionNames.of("BZ"); // "貝里斯"
regionNames.of("US"); // "美國"
regionNames.of("BA"); // "波士尼亞與赫塞哥維納"
regionNames.of("MM"); // "緬甸"
```

### 语言的显示名称

为某个语言环境创建 `Intl.DisplayNames`，并获取语言、脚本和区域序列的显示名称。

```js
// 获取语言在英语中的显示名称
let languageNames = new Intl.DisplayNames(["en"], { type: "language" });
languageNames.of("fr"); // "French"
languageNames.of("de"); // "German"
languageNames.of("fr-CA"); // "Canadian French"
languageNames.of("zh-Hant"); // "Traditional Chinese"
languageNames.of("en-US"); // "American English"
languageNames.of("zh-TW"); // "Chinese (Taiwan)"]

// 获取语言在繁体中文中的显示名称
languageNames = new Intl.DisplayNames(["zh-Hant"], { type: "language" });
languageNames.of("fr"); // "法文"
languageNames.of("zh"); // "中文"
languageNames.of("de"); // "德文"
```

### 脚本代码的显示名称

为某个语言环境创建 `Intl.DisplayNames`，并获取脚本代码的显示名称。

```js
// 获取脚本在英语中的显示名称
let scriptNames = new Intl.DisplayNames(["en"], { type: "script" });
// 获取脚本名称
scriptNames.of("Latn"); // "Latin"
scriptNames.of("Arab"); // "Arabic"
scriptNames.of("Kana"); // "Katakana"

// 获取脚本在繁体中文中的显示名称
scriptNames = new Intl.DisplayNames(["zh-Hant"], { type: "script" });
scriptNames.of("Latn"); // "拉丁文"
scriptNames.of("Arab"); // "阿拉伯文"
scriptNames.of("Kana"); // "片假名"
```

### 货币代码的显示名称

为某个语言环境创建 `Intl.DisplayNames`，并获取货币代码的显示名称。

```js
// 获取货币代码在英语中的显示名称
let currencyNames = new Intl.DisplayNames(["en"], { type: "currency" });
// 获取货币名称
currencyNames.of("USD"); // "US Dollar"
currencyNames.of("EUR"); // "Euro"
currencyNames.of("TWD"); // "New Taiwan Dollar"
currencyNames.of("CNY"); // "Chinese Yuan"

// 获取货币代码在繁体中文中的显示名称
currencyNames = new Intl.DisplayNames(["zh-Hant"], { type: "currency" });
currencyNames.of("USD"); // "美元"
currencyNames.of("EUR"); // "歐元"
currencyNames.of("TWD"); // "新台幣"
currencyNames.of("CNY"); // "人民幣"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [FormatJS 中 `Intl.DisplayNames` 的 polyfill](https://formatjs.github.io/docs/polyfills/intl-displaynames/)
- {{jsxref("Intl")}}
