---
title: Number.parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseFloat
---

{{JSRef}}

**`Number.parseFloat()`** 静态方法解析参数并返回浮点数。如果无法从参数中解析出一个数字，则返回 {{jsxref("NaN")}}。

{{EmbedInteractiveExample("pages/js/number-parsefloat.html")}}

## 语法

```js-nolint
Number.parseFloat(string)
```

### 参数

- `string`
  - : 要解析的值，会被[强制转换为字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)。该参数开头的{{Glossary("whitespace", "空白")}}会被忽略。

### 返回值

由给定 `string` 解析得到的浮点数。

如果第一个非空白字符不能被转换为数字，则返回 {{jsxref("NaN")}}。

## 示例

### Number.parseFloat 与 parseFloat 对比

此方法与全局函数 {{jsxref("parseFloat", "parseFloat()")}} 具有相同的功能：

```js
Number.parseFloat === parseFloat; // true
```

其目的是全局的模块化。

有关更多详细信息和示例，请参见 {{jsxref("parseFloat", "parseFloat()")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`core-js` 中 `Number.parseFloat` 的 polyfill](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("parseFloat", "parseFloat()")}}
