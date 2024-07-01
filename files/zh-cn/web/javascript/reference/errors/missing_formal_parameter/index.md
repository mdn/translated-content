---
title: "SyntaxError: missing formal parameter"
slug: Web/JavaScript/Reference/Errors/Missing_formal_parameter
---

{{jsSidebar("Errors")}}

## 信息提示

```plain
SyntaxError: missing formal parameter (Firefox)
```

## 错误类型

{{jsxref("SyntaxError")}}

## 哪里出错了？

“形式参数”是“函数参数”一种更好的说法。函数声明缺少合法的参数定义。在函数声明中，参数定义必须为标记符（{{Glossary("Identifier", "identifiers")}}），而不是任何类似于数字、字符串或者对象的值。函数声明和函数调用是两个不同的步骤。函数声明中的参数需要使用标记符，而仅仅在函数被呼叫（调用）的时候才可以传入其所需要的值。

在 {{glossary("JavaScript")}} 中，标记符只能由字母、数字、"$" 以及 "\_" 构成，并且不能以数字开头。标记符与**字符串**的区别在于字符串是数据，而标记符属于代码的一部分。

## 示例

在构造一个函数的时候，函数参数必须为标记符。下面列举的函数声明都是无效的，因为它们在参数部分使用的是数值：

```js example-bad
function square(3) {
  return number * number;
};
// SyntaxError: missing formal parameter

function greet("Howdy") {
  return greeting;
};
// SyntaxError: missing formal parameter

function log({ obj: "value"}) {
  console.log(arg)
};
// SyntaxError: missing formal parameter
```

需要在函数声明中使用标记符：

```js example-good
function square(number) {
  return number * number;
}

function greet(greeting) {
  return greeting;
}

function log(arg) {
  console.log(arg);
}
```

之后可以传入你想要传入的实际参数调用函数：

```js
square(2); // 4

greet("Howdy"); // "Howdy"

log({ obj: "value" }); // Object { obj: "value" }
```

## 参见

- [SyntaxError: redeclaration of formal parameter "x"](/zh-CN/docs/Web/JavaScript/Reference/Errors/Redeclared_parameter)
