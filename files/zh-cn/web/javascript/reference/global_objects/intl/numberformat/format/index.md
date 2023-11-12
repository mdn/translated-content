---
title: Intl.NumberFormat.prototype.format
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
---

{{JSRef}}

**`Intl.NumberFormat.prototype.format`** 属性返回一个根据{{jsxref("NumberFormat")}}对象的语言环境和格式化选项，来格式化一个数字的 getter 函数。

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-format.html")}}

## 语法

```plain
numberFormat.format(number)
```

### 参数

- `number`
  - : 要格式化的数值。

## 描述

该函数返回一个根据{{jsxref("NumberFormat")}}对象的语言环境和格式化选项，来`format` 一个数字的函数。

## 示例

### 使用 `format`

使用 `format` 格式化一个单一的货币值，以俄罗斯为例：

```js
var options = { style: "currency", currency: "RUB" };
var numberFormat = new Intl.NumberFormat("ru-RU", options);
console.log(numberFormat.format(654321.987));
// → "654 321,99 руб."
```

### 使用 `format` 和 `map`

使用 `format` 返回的函数来格式化数组中的所有数字。注意，该函数绑定到所获得的{{jsxref("NumberFormat")}}，因此它可以直接传递给{{jsxref("Array.prototype.map")}}。

```js
var a = [123456.789, 987654.321, 456789.123];
var numberFormat = new Intl.NumberFormat("es-ES");
var formatted = a.map(numberFormat.format);
console.log(formatted.join("; "));
// → "123.456,789; 987.654,321; 456.789,123"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("NumberFormat", "Intl.NumberFormat")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
