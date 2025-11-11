---
title: 'ReferenceError: assignment to undeclared variable "x"'
slug: Web/JavaScript/Reference/Errors/Undeclared_var
---

## 信息

```plain
ReferenceError: assignment to undeclared variable "x" (Firefox)
ReferenceError: "x" is not defined (Chrome)
ReferenceError: Variable undefined in strict mode (Edge)
```

## 错误类型

仅在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)中出现 {{jsxref("ReferenceError")}} 警告。

## 发生了什么？

在代码里赋值了一个未声明的变量。换句话说，有处没有带着 [`var`](/zh-CN/docs/Web/JavaScript/Reference/Statements/var) 关键字的赋值。事实上已声明的和未声明的变量之间有一些差异，这可能会导致意想不到的结果，这就是为什么 JavaScript 在严格模式打印出这种错误。

关于已声明和未声明的变量，其有三个注意事项：

- 已声明的变量被约束在其执行上下文中。未声明的变量总是全局的。
- 已声明的变量在执行任何代码之前就创建了。未声明的变量则不存在，直到执行相关的代码。
- 已声明的变量是其执行上下文（函数或全局）的不可配置属性。而未声明的变量是可配置的（例如可以删除）。

更多信息及例子，请参考 [`var`](/zh-CN/docs/Web/JavaScript/Reference/Statements/var) 页面。

关于未声明变量的赋值的错误仅在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)里出现。在非严格模式中，这些将被忽略。

## 示例

### 无效的

在本例中，"bar" 是未声明的变量。

```js example-bad
function foo() {
  "use strict";
  bar = true;
}
foo(); // ReferenceError: assignment to undeclared variable bar
```

### 有效的

为了使 "bar" 是一个已声明变量，你需要在其前面加一个 var 关键字。

```js example-good
function foo() {
  "use strict";
  var bar = true;
}
foo();
```

## 相关

- [Strict mode](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
