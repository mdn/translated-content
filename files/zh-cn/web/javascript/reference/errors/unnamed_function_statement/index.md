---
title: "SyntaxError: function statement requires a name"
slug: Web/JavaScript/Reference/Errors/Unnamed_function_statement
---

{{jsSidebar("Errors")}}

## 错误提示

```plain
SyntaxError: function statement requires a name [Firefox]
SyntaxError: Unexpected token ( [Chrome]
```

## 错误类型

{{jsxref("SyntaxError")}}

## 哪里出错了？

[函数声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)需要提供函数名称。你需要检查函数是如何定义的，是否需要为其提供名称，出现问题的函数是否需要声明为函数表达式或立即调用函数表达式（{{Glossary("IIFE")}}），以及函数在上下文环境中出现的位置是否正确。

## 示例

### 语句与表达式

[函数语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)（或函数声明）需要命名，以下写法是不正确的：

```js example-bad
function () {
  return 'Hello world';
}
// SyntaxError: function statement requires a name
```

你可以使用[函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)（赋值）来代替：

```js example-good
var greet = function () {
  return "Hello world";
};
```

者是你想将其作为立即调用函数表达式（[IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)，Immediately Invoked Function Expression），也就是定义后立即执行的函数。在这种情况下你需要用到更多的括号：

```js example-good
(function () {})();
```

### 标号函数 (Labeled functions)

你使用函数标号 ([labels)](/zh-CN/docs/Web/JavaScript/Reference/Statements/label)的时候，也需要在关键词 `function` 后面提供一个函数名称。这样的代码是不能运行的：

```js example-bad
function Greeter() {
  german: function () {
    return "Moin";
  }
}
// SyntaxError: function statement requires a name
```

这个例子可以正常运行：

```js example-good
function Greeter() {
  german: function g() {
    return "Moin";
  }
}
```

### 对象方法

如果你想创建创建一个对象方法，那么需要首先创建一个对象。以下语法（function 关键字后面没有提供名称）是合法的：

```js example-good
var greeter = {
  german: function () {
    return "Moin";
  },
};
```

### 回调函数的语法

另外，如果使用到了回调函数，那么检查一下语法是否正确。大括号与逗号很容易使情况变糟。

```js example-bad
promise.then(
  function() {
    console.log("success");
  });
  function() {
    console.log("error");
}
// SyntaxError: function statement requires a name
```

正确的形式应该是这样的：

```json example-good
promise.then(
  function() {
    console.log("success");
  },
  function() {
    console.log("error");
  }
);
```

## 相关内容

- [Functions in the JavaScript Guide](/zh-CN/docs/Web/JavaScript/Guide/Functions)
- [function statement](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)
- [function expression](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)
- [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
- [label](/zh-CN/docs/Web/JavaScript/Reference/Statements/label)
