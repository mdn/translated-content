---
title: 立即调用函数表达式
slug: Glossary/IIFE
l10n:
  sourceCommit: 9a7e014bc1ee2ce53751b47adbe48d3180bc2d54
---

**立即调用函数表达式**（IIFE）是一种 {{glossary("JavaScript")}} {{glossary("function","函数")}}在定义后就会立即执行的习惯用法。它也被称为*自执行匿名函数*。IIFE 这个名字是由 Ben Alman 在[他的博客](https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife)中提出的。

```js
// 标准 IIFE
(function () {
  // 语句……
})();

// 箭头函数变体
(() => {
  // 语句……
})();

// 异步 IIFE
(async () => {
  // 语句……
})();
```

其主要包含两部分：

1. [函数*表达式*](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)。其通常需要[用括号括起来](/zh-CN/docs/Web/JavaScript/Reference/Operators/Grouping)才能被正确解析。
2. 立即*调用*函数表达式。可以提供参数，但不带参数的 IIFE 更为常见。

IIFE 是一种用于在需要单个表达式的位置执行其自身作用域内的任意多条语句（并可能返回一个值）的常见模式。其类似于[逗号运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comma_operator)，但功能更加强大，后者只能执行多个表达式，因而不提供使用局部变量或控制流语句的方法。

IIFE 的用例包括：

- 通过创建新的{{glossary("scope", "作用域")}}来避免污染全局命名空间。
- 创建新的异步上下文以在非异步上下文中使用 {{jsxref("Operators/await", "await")}}。
- 使用复杂的逻辑计算值，例如将多个语句用作单个表达式。

有关代码示例，请参见 [`function` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)和 [`async function` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/async_function)参考页。

## 参见

- 维基百科上的[立即调用函数表达式](https://zh.wikipedia.org/wiki/立即调用函数表达式)
- [逗号运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Comma_operator)
- 相关术语：
  - {{Glossary("Function", "函数")}}
