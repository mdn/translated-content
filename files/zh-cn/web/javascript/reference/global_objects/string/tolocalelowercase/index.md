---
title: String.prototype.toLocaleLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
---

{{JSRef}}

{{jsxref("String")}} 的 **`toLocaleLowerCase()`** 方法会根据特定区域设置的大小写映射规则，将字符串转换为小写形式并返回。

{{EmbedInteractiveExample("pages/js/string-tolocalelowercase.html")}}

## 语法

```js-nolint
toLocaleLowerCase()
toLocaleLowerCase(locales)
```

### 参数

- `locales` {{optional_inline}}

  - : 一个带有 BCP 47 语言标签的字符串，或者是这种字符串的数组。指示要根据特定区域设置的大小写映射规则进行转换的区域设置。有关 `locales` 参数的一般形式和解释，请参阅 [`Intl` 主页上的参数描述](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_参数)。

    与使用 `locales` 参数的其他方法不同，`toLocaleLowerCase()` 不允许进行区域设置匹配。因此，在检查 `locales` 参数的有效性之后，`toLocaleLowerCase()` 始终使用列表中的第一个区域设置（如果列表为空，则使用默认区域设置），即使该区域设置在实现中不受支持。

### 返回值

一个新的字符串，表示调用字符串根据特定区域设置的大小写映射规则转换得到的小写形式。

## 描述

`toLocaleLowerCase()` 方法返回根据特定区域设置的大小写映射规则将字符串转换为小写形式的值。`toLocaleLowerCase()` 不会影响字符串本身的值。在大多数情况下，这将产生与 {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} 相同的结果，但对于某些区域设置（例如土耳其语），它们的大小写映射与 Unicode 的默认映射不同，可能会得到不同的结果。

## 示例

### 使用 toLocaleLowerCase()

```js
"ALPHABET".toLocaleLowerCase(); // 'alphabet'

"\u0130".toLocaleLowerCase("tr") === "i"; // true
"\u0130".toLocaleLowerCase("en-US") === "i"; // false

const locales = ["tr", "TR", "tr-TR", "tr-u-co-search", "tr-x-turkish"];
"\u0130".toLocaleLowerCase(locales) === "i"; // true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
