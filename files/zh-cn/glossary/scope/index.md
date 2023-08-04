---
title: Scope（作用域）
slug: Glossary/Scope
---

{{GlossarySidebar}}

**作用域**是当前的执行上下文，{{glossary("value","值")}}和表达式在其中“可见”或可被访问。如果一个{{glossary("variable","变量")}}或表达式不在当前的作用域中，那么它是不可用的。作用域也可以堆叠成层次结构，子作用域可以访问父作用域，反过来则不行。

JavaScript 的作用域分以下三种：

- 全局作用域：脚本模式运行所有代码的默认作用域
- 模块作用域：模块模式中运行代码的作用域
- 函数作用域：由{{glossary("function","函数")}}创建的作用域

此外，用 [`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let) 或 [`const`](/zh-CN/docs/Web/JavaScript/Reference/Statements/const) 声明的变量属于额外的作用域：

- 块级作用域：用一对花括号（一个[代码块](/zh-CN/docs/Web/JavaScript/Reference/Statements/block)）创建出来的作用域

由于{{glossary("function","函数")}}会创建作用域，因而在函数中定义的变量无法从该函数外部访问，也无法从其他函数内部访问，例如，下面的代码是无效的：

```js example-bad
function exampleFunction() {
  const x = "declared inside function"; // x 只能在 exampleFunction 函数中使用
  console.log("Inside function");
  console.log(x);
}

console.log(x); // 报错
```

但是，下面的代码是有效的，因为变量在函数外被声明，为全局变量：

```js example-good
const x = "declared outside function";

exampleFunction();

function exampleFunction() {
  console.log("Inside function");
  console.log(x);
}

console.log("Outside function");
console.log(x);
```

块级作用域只对 `let` 和 `const` 声明有效，对 `var` 声明无效。

```js example-good
{
  var x = 1;
}
console.log(x); // 1
```

```js example-bad
{
  const x = 1;
}
console.log(x); // ReferenceError: x is not defined
```

## 参见

- 维基百科词条：[作用域](https://zh.wikipedia.org/wiki/作用域)
