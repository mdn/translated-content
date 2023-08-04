---
title: 'SyntaxError: redeclaration of formal parameter "x"'
slug: Web/JavaScript/Reference/Errors/Redeclared_parameter
---

{{jsSidebar("Errors")}}

## 信息

```plain
SyntaxError: redeclaration of formal parameter "x" (Firefox)
SyntaxError: Identifier "x" has already been declared (Chrome)
SyntaxError: Cannot declare a let variable twice: 'x' (WebKit)
```

## 错误类型

{{jsxref("SyntaxError")}}

## 哪里出错了？

某个变量名称已经作为函数参数出现了，但是又使用了 [`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let) 在函数体里重声明了。在 JavaScript 中不允许使用 let 在相同的函数或块范围内重新声明相同的变量。

## 示例

在本例中，参数 "arg" 又重新声明了：

```js example-bad
function f(arg) {
  let arg = "foo";
}

// SyntaxError: redeclaration of formal parameter "arg"
```

如果要更改函数体中的“arg”的值，可以像下面一样，但不需要再次声明同一个变量。换句话说：你可以省略 let 关键字。如果要创建一个新变量，则需要将其重命名，因为其与函数参数有冲突。

```js example-good
function f(arg) {
  arg = "foo";
}

function f(arg) {
  let bar = "foo";
}
```

## 兼容性提醒

- 在 Firefox 49 之前，会抛出的是 {{jsxref("TypeError")}}（[Firefox bug 1275240](https://bugzil.la/1275240)）。

## 相关

- [`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let)
- [`const`](/zh-CN/docs/Web/JavaScript/Reference/Statements/const)
- [`var`](/zh-CN/docs/Web/JavaScript/Reference/Statements/var)
- [Declaring variables](/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_Types#Declarations) in the [JavaScript Guide](/zh-CN/docs/Web/JavaScript/Guide)
