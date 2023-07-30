---
title: Number.parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
---

{{JSRef}}

**`Number.parseInt()`** 方法依据指定基数，解析字符串并返回一个整数。

{{EmbedInteractiveExample("pages/js/number-parseint.html", "taller")}}

## 语法

```js-nolint
Number.parseInt(string)
Number.parseInt(string, radix)
```

### 参数

- `string`
  - : 要被解析的值。如果参数不是一个字符串，则将其[强制转化为字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)。字符串开头的空白符将会被忽略。
- `radix` {{optional_inline}}
  - : 从 `2` 到 `36` 的整数，表示进制的基数。如果超出这个范围，将返回 `NaN`。假如 `radix` 未指定或者为 `0`，除非数字以 `0x` 或 `0X` 开头（此时假定为十六进制 `16`），否则假定为 `10`（十进制）。

### 返回值

从给定的字符串中解析出的一个整数。

如果基数小于 `2` 或大于 `36`，或第一个非空白字符不能转换为数字，则返回 {{jsxref("NaN")}}。

## 示例

### Number.parseInt 与 parseInt

这个方法和全局的 {{jsxref("parseInt", "parseInt()")}} 函数具有一样的函数功能：

```js
Number.parseInt === parseInt; // true
```

其目的是对全局变量进行模块化，另见 {{jsxref("parseInt", "parseInt()")}} 获取更多详情和示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`Number.parseInt` 在 `core-js` 中的 Polyfill](https://github.com/zloirock/core-js#ecmascript-number)
- 所属的 {{jsxref("Number")}} 对象。
- 全局的 {{jsxref("parseInt", "parseInt()")}} 方法。
