---
title: "SyntaxError: Unexpected token"
slug: Web/JavaScript/Reference/Errors/Unexpected_token
---

{{jsSidebar("Errors")}}

## 信息

```plain
SyntaxError: expected expression, got "x"
SyntaxError: expected property name, got "x"
SyntaxError: expected target, got "x"
SyntaxError: expected rest argument name, got "x"
SyntaxError: expected closing parenthesis, got "x"
SyntaxError: expected '=>' after argument list, got "x"
```

## 错误类型

{{jsxref("SyntaxError")}}

## 哪里出错了？

期望获得一个特定的语法结构，但得到了其他的。可能只是一个简单的错字。

## 示例

### 期望的表达式

例如，在调用函数时，不允许使用尾随逗号。有尾逗号的时候，JavaScript 会期望有另一个参数，可以是任何表达式。

```js-nolint example-bad
Math.max(2, 42,);
// SyntaxError: expected expression, got ')'
```

正确的方法是省略最后一个逗号或添加另一个参数：

```js example-good
Math.max(2, 42);
Math.max(2, 42, 13 + 37);
```

## 相关

- {{jsxref("Math.max()")}}
