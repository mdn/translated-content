---
title: String.prototype.toLocaleUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase
---

{{JSRef}}

{{jsxref("String")}} 的 **`toLocaleUpperCase()`** 方法会根据特定区域设置的大小写映射规则，将字符串转换为大写形式并返回。

{{EmbedInteractiveExample("pages/js/string-tolocaleuppercase.html")}}

## 语法

```js-nolint
toLocaleUpperCase()
toLocaleUpperCase(locales)
```

### 参数

- `locales` {{optional_inline}}

  - : 一个带有 BCP 47 语言标签的字符串，或者是这种字符串的数组。指示要根据特定区域设置的大小写映射规则进行转换的区域设置。有关 `locales` 参数的一般形式和解释，请参阅 [`Intl` 主页上的参数描述](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_参数)。

    与使用 `locales` 参数的其他方法不同，`toLocaleUpperCase()` 不允许进行区域设置匹配。因此，在检查 `locales` 参数的有效性之后，`toLocaleUpperCase()` 始终使用列表中的第一个区域设置（如果列表为空，则使用默认区域设置），即使该区域设置在实现中不受支持。

### 返回值

一个新的字符串，表示调用字符串根据特定区域设置的大小写映射规则转换得到的大写形式。

## 描述

`toLocaleUpperCase()` 方法返回根据特定区域设置的大小写映射规则将字符串转换为小写形式的值。`toLocaleUpperCase()` 不会影响字符串本身的值。在大多数情况下，这将产生与 {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} 相同的结果，但对于某些区域设置（例如土耳其语），它们的大小写映射与 Unicode 的默认映射不同，可能会得到不同的结果。

还要注意，转换不一定是一对一的字符映射，因为某些字符在转换为小写形式时可能会产生两个（甚至更多）字符。因此，结果字符串的长度可能与输入长度不同。这也意味着转换是不稳定的，因此下面的例子可能返回 `false`：
`x.toLocaleLowerCase() === x.toLocaleUpperCase().toLocaleLowerCase()`

## 示例

### 使用 toLocaleUpperCase()

```js
"alphabet".toLocaleUpperCase(); // 'ALPHABET'

"Gesäß".toLocaleUpperCase(); // 'GESÄSS'

"i\u0307".toLocaleUpperCase("lt-LT"); // 'I'

const locales = ["lt", "LT", "lt-LT", "lt-u-co-phonebk", "lt-x-lietuva"];
"i\u0307".toLocaleUpperCase(locales); // 'I'
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
