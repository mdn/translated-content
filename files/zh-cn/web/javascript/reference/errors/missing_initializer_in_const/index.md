---
title: "SyntaxError: missing = in const declaration"
slug: Web/JavaScript/Reference/Errors/Missing_initializer_in_const
---

{{jsSidebar("Errors")}}

## 错误提示

```plain
SyntaxError: missing = in const declaration (Firefox)
SyntaxError: Missing initializer in const declaration (Chrome)
```

## 错误类型

{{jsxref("SyntaxError")}}

## 哪里出错了？

常量指的是在程序正常运行过程中不能被修改的值。它的值不能通过二次赋值来改变，同时也不能被再次声明。在 JavaScript 中，常量在声明时使用 [`const`](/zh-CN/docs/Web/JavaScript/Reference/Statements/const) 关键字来修饰。常量需要初始化器；也就是说，必须在声明的同时为其赋值（鉴于常量值指定之后不能再进行修改，这样做是容易理解的）。

## 示例

### 初始值缺失

不同于 var 或 let 关键字，必须在常量声明中为其赋值。下面的例子中会报错：

```js example-bad
const COLUMNS;
// SyntaxError: missing = in const declaration
```

### 错误修正

修正这个问题的方法有很多种。仔细检查对于问题中的常量，你想要达到什么目标。

#### 添加常量值

在声明语句中为其赋值：

```js example-good
const COLUMNS = 80;
```

#### `const`, `let` 还是 `var?`

如果你并不想声明一个常量值，那么就不要使用 const 关键字。或许你想要的是使用 [`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let) 来声明一个块状作用域变量或者是用 `var` 声明一个全局变量。这两者都不需要设置初始值。

```js example-good
let columns;
```

## 相关内容

- [`let`](/zh-CN/docs/Web/JavaScript/Reference/Statements/let)
- [`var`](/zh-CN/docs/Web/JavaScript/Reference/Statements/var)
