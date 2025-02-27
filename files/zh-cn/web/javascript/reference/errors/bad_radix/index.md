---
title: "RangeError: radix must be an integer"
slug: Web/JavaScript/Reference/Errors/Bad_radix
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

JavaScript 异常“radix must be an integer at least 2 and no greater than 36”会在 {{jsxref("Number.prototype.toString()")}} 或 {{jsxref("BigInt.prototype.toString()")}} 方法的可选 `radix` 参数被指定，但其值不在 2 到 36 之间时触发。

## 消息

```plain
RangeError: toString() radix argument must be between 2 and 36（基于 V8 & Safari）
RangeError: radix must be an integer at least 2 and no greater than 36（Firefox）
```

## 错误类型

{{jsxref("RangeError")}}

## 什么地方出错了？

{{jsxref("Number.prototype.toString()")}} 或 {{jsxref("BigInt.prototype.toString()")}} 方法的可选 `radix` 参数已被指定。它的值必须是一个介于 2 到 36 之间的整数，用于指定表示数值时所使用的进制。例如，十进制（基数 10）数字 169 在十六进制（基数 16）中表示为 A9。

为什么该参数的值仅限于 36？大于 10 的基数使用字母字符作为数字；因此，基数不能大于 36，因为拉丁字母表（英语和许多其他语言使用的字母表）只有 26 个字符。

最常见的基数：

- 2 表示[二进制数](https://zh.wikipedia.org/zh-cn/二进制)、
- 8 表示[八进制数](https://zh.wikipedia.org/zh-cn/八进制)、
- 10 表示[十进制数](https://zh.wikipedia.org/zh-cn/十进制)、
- 16 表示[十六进制数](https://zh.wikipedia.org/zh-cn/十六进制)。

## 示例

### 无效示例

```js example-bad
(42).toString(0);
(42).toString(1);
(42).toString(37);
(42).toString(150);
// 不能使用这样的字符串进行格式化：
(12071989).toString("MM-dd-yyyy");
```

### 有效示例

```js example-good
(42).toString(2); // “101010”（二进制）
(13).toString(8); // “15”（八进制）
(0x42).toString(10); // “66”（十进制）
(100000).toString(16); // “186a0”（十六进制）
```

## 参见

- {{jsxref("Number.prototype.toString()")}}
- {{jsxref("BigInt.prototype.toString()")}}
