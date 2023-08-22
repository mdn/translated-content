---
title: Intl.getCanonicalLocales()
slug: Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales
---

{{JSRef}}

**`Intl.getCanonicalLocales()`** 方法返回一个数组，数组包含规范的区域语言代码，重复的元素将会被去除，每一个元素都会被验证为格式有效的区域语言代码。

{{EmbedInteractiveExample("pages/js/intl-getcanonicallocales.html")}}

## 语法

```js-nolint
Intl.getCanonicalLocales(locales)
```

### 参数

- `locales`
  - : 想要规范化的字符串数组。

### 返回值

一个包含规范区域语言代码的数组。

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

- {{jsxref("NumberFormat.supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
- {{jsxref("DateTimeFormat.supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
- {{jsxref("Collator.supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
