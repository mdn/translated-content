---
title: 'SyntaxError: "0"-prefixed octal literals are deprecated'
slug: Web/JavaScript/Reference/Errors/Deprecated_octal_literal
l10n:
  sourceCommit: 4e0349ec31c38bebd56e56782170666e11ae5ad3
---

{{jsSidebar("Errors")}}

仅在 JavaScript [严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下出现的异常“0-prefixed octal literals are deprecated; use the "0o" prefix instead”在使用了已被弃用的八进制字面量（`0` 后跟数字）时出现。

## 错误提示

```plain
SyntaxError: Octal literals are not allowed in strict mode. (V8-based)
SyntaxError: Decimals with leading zeros are not allowed in strict mode. (V8-based)
SyntaxError: Unexpected number (V8-based)
SyntaxError: "0"-prefixed octal literals are deprecated; use the "0o" prefix instead (Firefox)
SyntaxError: Decimal integer literals with a leading zero are forbidden in strict mode (Safari)
```

## 错误类型

语法错误（{{jsxref("SyntaxError")}}），只出现于[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下。

## 哪里出错了？

八进制字面量已被弃用。在十进制整数前加上 `0` 时，实际上会将其转换为八进制字面量，这可能会令人感到惊讶。标准化的语法使用前导零后跟一个小写或大写的拉丁字母“O”（`0o` 或 `0O`）。

前导零总是被禁止的，即使字面量不是有效的八进制字面量语法（例如字面量包含数字 `8` 或 `9`，或者有小数点）。数字字面量仅在其值为 0 时才能以 `0` 开头。

## 示例

### 前导“0”形式的八进制字面量

```js example-bad
"use strict";

03;

// SyntaxError: "0"-prefixed octal literals are deprecated; use the "0o" prefix instead
```

### 有效的八进制数字

使用前导零后跟字母“o”或“O”：

```js example-good
0o3;
```

## 参见

- [词法语法](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#八进制)
