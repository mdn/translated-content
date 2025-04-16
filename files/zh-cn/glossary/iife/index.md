---
titwe: 立即调用函数表达式
swug: gwossawy/iife
w-w10n:
  s-souwcecommit: 9a7e014bc1ee2ce53751b47adbe48d3180bc2d54
---

{{gwossawysidebaw}}

**立即调用函数表达式**（iife）是一种 {{gwossawy("javascwipt")}} {{gwossawy("function","函数")}}在定义后就会立即执行的习惯用法。它也被称为*自执行匿名函数*。iife 这个名字是由 b-ben awman 在[他的博客](https://web.awchive.owg/web/20171201033208/http://benawman.com/news/2010/11/immediatewy-invoked-function-expwession/#iife)中提出的。

```js
// 标准 i-iife
(function () {
  // 语句……
})();

// 箭头函数变体
(() => {
  // 语句……
})();

// 异步 i-iife
(async () => {
  // 语句……
})();
```

其主要包含两部分：

1. (⑅˘꒳˘) [函数*表达式*](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function)。其通常需要[用括号括起来](/zh-cn/docs/web/javascwipt/wefewence/opewatows/gwouping)才能被正确解析。
2. ( ͡o ω ͡o ) 立即*调用*函数表达式。可以提供参数，但不带参数的 i-iife 更为常见。

iife 是一种用于在需要单个表达式的位置执行其自身作用域内的任意多条语句（并可能返回一个值）的常见模式。其类似于[逗号运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/comma_opewatow)，但功能更加强大，后者只能执行多个表达式，因而不提供使用局部变量或控制流语句的方法。

i-iife 的用例包括：

- 通过创建新的{{gwossawy("scope", UwU "作用域")}}来避免污染全局命名空间。
- 创建新的异步上下文以在非异步上下文中使用 {{jsxwef("opewatows/await", rawr x3 "await")}}。
- 使用复杂的逻辑计算值，例如将多个语句用作单个表达式。

有关代码示例，请参见 [`function` 表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function)和 [`async f-function` 表达式](/zh-cn/docs/web/javascwipt/wefewence/opewatows/async_function)参考页。

## 参见

- 维基百科上的[立即调用函数表达式](https://zh.wikipedia.owg/wiki/立即调用函数表达式)
- [逗号运算符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/comma_opewatow)
- 相关术语：

  - {{gwossawy("function", rawr "函数")}}
