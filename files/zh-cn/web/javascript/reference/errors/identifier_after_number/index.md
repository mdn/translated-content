---
title: "SyntaxError: identifier starts immediately after numeric literal"
slug: Web/JavaScript/Reference/Errors/Identifier_after_number
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jsSidebar("Errors")}}

当标识符以数字开头时，JavaScript 会出现“identifier starts immediately after numeric literal”的异常。标识符只能以字母、下划线（\_）或美元符号（$）开头。

## 错误信息

```plain
SyntaxError: Unexpected identifier after numeric literal (Edge)
SyntaxError: identifier starts immediately after numeric literal (Firefox)
SyntaxError: Unexpected number (Chrome)
```

## 错误类型

{{jsxref("SyntaxError")}}

## 什么地方出错了？

变量的名称（也称为[标识符](/zh-CN/docs/Glossary/Identifier)）需遵循特定的规则，而这些规则是你的代码必须遵循的！

JavaScript 标识符必须以字母、下划线（\_）或美元符号（$）开头。不能以数字开头！只有后续的字符可以是数字（0-9）。

## 示例

### 以数字文字开头的变量名

在 JavaScript 中，变量名不能以数字开头。以下表达式会失败：

```js-nolint example-bad
const 1life = "foo";
// SyntaxError: identifier starts immediately after numeric literal

const foo = 1life;
// SyntaxError: identifier starts immediately after numeric literal

alert(1.foo);
// SyntaxError: identifier starts immediately after numeric literal
```

你需要重新命名变量以避免前导数字。

```js example-good
const life1 = "foo";
const foo = life1;
```

## 参见

- [词法语法](/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar)
- [语法与类型](/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types)指南
