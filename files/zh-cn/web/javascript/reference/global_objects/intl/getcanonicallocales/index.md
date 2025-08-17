---
title: Intl.getCanonicalLocales()
slug: Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales
l10n:
  sourceCommit: 939067a53bb5bb3787f2d536b83df2252d4e838e
---

**`Intl.getCanonicalLocales()`** 静态方法返回一个包含规范的区域设置名称的数组。重复的元素将会被去除，每一个元素都会被验证为格式有效的语言标签。

{{InteractiveExample("JavaScript 演示：Intl.GetCanonicalLocales")}}

```js interactive-example
console.log(Intl.getCanonicalLocales("EN-US"));
// 期望的输出：Array ["en-US"]

console.log(Intl.getCanonicalLocales(["EN-US", "Fr"]));
// 期望的输出：Array ["en-US", "fr"]

try {
  Intl.getCanonicalLocales("EN_US");
} catch (err) {
  console.log(err.toString());
  // 期望的输出：RangeError: invalid language tag: "EN_US"
}
```

## 语法

```js-nolint
Intl.getCanonicalLocales(locales)
```

### 参数

- `locales`
  - : 想要规范化的区域设置名称的{{jsxref("String", "字符串", "", 1)}}数组。

### 返回值

一个包含规范区域设置名称的数组。

## 示例

```js
Intl.getCanonicalLocales("EN-US"); // ["en-US"]
Intl.getCanonicalLocales(["EN-US", "Fr"]); // ["en-US", "fr"]

Intl.getCanonicalLocales("EN_US");
// RangeError:'EN_US' is not a structurally valid language tag
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [FormatJS 中 `Intl.getCanonicalLocales` 的 polyfill](https://formatjs.github.io/docs/polyfills/intl-getcanonicallocales/)
- {{jsxref("Intl/NumberFormat/supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
- {{jsxref("Intl/DateTimeFormat/supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
- {{jsxref("Intl/Collator/supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
