---
title: 'SyntaxError: "0"-prefixed octal literals and octal escape seq. are deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_octal
---

{{jsSidebar("Errors")}}

## 错误提示

```plain
SyntaxError:
"0"-prefixed octal literals and octal escape sequences are deprecated;
for octal literals use the \"0o\" prefix instead
```

## 错误类型

语法错误（{{jsxref("SyntaxError")}} ），只出现于[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下。

## 哪里出错了？

八进制字面量与八进制转义序列语法已经被废弃，在严格模式下会报语法错误（{{jsxref("SyntaxError")}}）。在 ECMAScript 2015 及以后的规范中，标准语法是前导 0 后面跟一个大写或小写的拉丁文字母 "O" (`0o` 或 `0O)`。

## 示例

### 前导"0"形式的八进制字面量

```js example-bad
"use strict";

03;

// SyntaxError: "0"-prefixed octal literals and octal escape sequences
// are deprecated
```

### 八进制转义序列

```js example-bad
"use strict";

"\251";

// SyntaxError: "0"-prefixed octal literals and octal escape sequences
// are deprecated
```

### 合法的八进制数字

使用前导 0 后面跟字母 "o" 或 "O" 的形式：

```js example-good
0o3;
```

至于八进制转义序列，你可以使用十六进制转义序列来代替：

```js example-good
"\xA9";
```

## 参见

- [Lexical grammar](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#Octal)
