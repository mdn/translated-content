---
title: 'ReferenceError: "x" is not defined'
slug: Web/JavaScript/Reference/Errors/Not_defined
---

{{jsSidebar("Errors")}}

## 错误信息

```plain
ReferenceError: "x" is not defined
```

## 错误类型

{{jsxref("ReferenceError")}}.

## 什么地方出错了？

在某些地方引用一个不存在的变量的时候。当你使用变量的时候，这个变量必须是已经被声明的，或者你可以确保它在你当前的脚本或作用域 ({{Glossary("scope")}}) 中可用。

> [!NOTE]
> 当你加载一个库的时候（例如 jQuery），请确保你在这个库加载完毕后再使用这个库中的变量，如“$”。将你想加载的库的 {{HTMLElement("script")}} 标签放置在你的代码前面。

## 示例

### 变量没有被声明

```js example-bad
foo.substring(1); // ReferenceError: foo is not defined
```

“foo”变量没有在任何地方被声明。它需要是某种字符串，这样 {{jsxref("String.prototype.substring()")}} 方法才可以正常工作。

```js example-good
var foo = "bar";
foo.substring(1); // "ar"
```

### 错误的作用域

变量必须是在它当前的执行环境中可用的。在一个函数（[function](/zh-CN/docs/Web/JavaScript/Reference/Functions)）中定义的变量不能从这个函数外部的任何地方访问，因为这个变量的作用域仅在这个函数的内部。

```js example-bad
function numbers() {
  var num1 = 2,
    num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError num1 is not defined.
```

然而，一个函数可用使用在它所被定义的作用域中的所有变量。换句话说，当一个函数被定义在全局作用域的时候，它可以访问所有在全局作用域中定义的变量。

```js example-good
var num1 = 2,
  num2 = 3;

function numbers() {
  return num1 + num2;
}

console.log(num1); // 2
```

## 相关页面

- {{Glossary("Scope")}}
- [Declaring variables in the JavaScript Guide](/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types#Declaring_variables)
- [Function scope in the JavaScript Guide](/zh-CN/docs/Web/JavaScript/Guide/Functions#函数作用域)
