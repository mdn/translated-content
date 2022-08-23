---
title: Number.parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
---
{{JSRef}}

## 概述

**`Number.parseInt()`** 方法依据指定基数 \[ 参数 **radix** 的值]，把字符串 \[ 参数 **string** 的值] 解析成整数。

## 语法

```plain
Number.parseInt(string[, radix])
```

### 参数

{{page("en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt", "Parameters")}}

参数 string：要解析的值。 如果此参数不是字符串，则使用 ToString 抽象操作将其转换为字符串。忽略此参数中的前导空格。
参数 radix：一个介于 2 到 36 之间的整数，代表字符串的基数 (数学数字系统中的基)。小心 - 这并不是默认为 10。

### 返回值

{{page("en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt", "Return value")}}

从给定字符串中解析的整数。如果基数小于 11，且第一个非空白字符不能转换为数字，则返回 NaN。

## 描述

这个方法和全局的 {{jsxref("parseInt", "parseInt()")}} 函数具有一样的函数功能：

```plain
Number.parseInt === parseInt; // true
```

ECMAScript 2015 添加了这部分 (其目的是对全局变量进行模块化). 请另见 {{jsxref("parseInt", "parseInt()")}} 获取更多详情和示例。

## Polyfill

```plain
if (Number.parseInt === undefined) {
    Number.parseInt = window.parseInt;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- `{{jsxref("Global_Objects/Number", "Number()")}}`
- 全局的 {{jsxref("Global_Objects/parseInt", "parseInt()")}} 函数
