---
title: block
slug: Web/JavaScript/Reference/Statements/block
---

{{jsSidebar("Statements")}}

**块语句**（或其他语言的**复合语句**）用于组合零个或多个语句。该块由一对大括号界定，可以是{{jsxref("Statements/label", "labelled")}}：

## 语法

### 块声明

```plain
{ StatementList }
```

### 标记块声明

```plain
LabelIdentifier: { StatementList }
```

- `StatementList`
  - : 在块语句中分组的语句。
- `LabelIdentifier`
  - : 用于视觉识别的可选{{jsxref("Statements/label", "label")}}或{{jsxref("Statements/break", "break")}}的目标。

## 描述

其他语言中通常将语句块称为**复合语句**。它允许你使用多个语句，其中 JavaScript 只需要一个语句。将语句组合成块是 JavaScript 中的常见做法。相反的做法是可以使用一个[空语句](/zh-CN/docs/Web/JavaScript/Reference/Statements/Empty)，你不提供任何语句，虽然一个是必需的。

### 块级作用域

#### 在非严格模式 (non-strict mode) 下的`var` 或者函数声明时

通过`var`声明的变量或者非严格模式下 (non-strict mode) 创建的函数声明**没有**块级作用域。在语句块里声明的变量的作用域不仅是其所在的函数或者 script 标签内，所设置变量的影响会在超出语句块本身之外持续存在。换句话说，这种语句块不会引入一个作用域。尽管单独的语句块是合法的语句，但在 JavaScript 中你不会想使用单独的语句块，因为它们不像你想象的 C 或 Java 中的语句块那样处理事物。例如：

```js example-bad
var x = 1;
{
  var x = 2;
}
console.log(x); // 输出 2
```

输出结果是 2，因为块中的 `var x`语句与块前面的`var x`语句作用域相同。在 C 或 Java 中，这段代码会输出 1。

#### 使用`let`和 `const`

相比之下，使用 {{jsxref("Statements/let", "let")}}和{{jsxref("Statements/const", "const")}}声明的变量是**有**块级作用域的。

```js
let x = 1;
{
  let x = 2;
}
console.log(x); // 输出 1
```

`x = 2`仅限在定义它的块中。

`const`的结果也是一样的：

```js
const c = 1;
{
  const c = 2;
}
console.log(c); // 输出 1，而且不会报错
```

注意，位于块范围之内的 `const c = 2` 并不会抛出`SyntaxError: Identifier 'c' has already been declared`这样的语法错误，因为在它自己的块中它可能是唯一一个被声明的常量。

##### 使用 let 声明的变量在块级作用域内能强制执行更新变量，下面的两个例子对比：

```js
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[0](); // 10
a[1](); // 10
a[6](); // 10

/********************/

var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[0](); // 0
a[1](); // 1
a[6](); // 6
```

#### 使用`function`

[函数声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)同样被限制在声明他的语句块内：

```plain
foo('outside');  // TypeError: foo is not a function
{
  function foo(location) {
   console.log('foo is called ' + location);
  }
  foo('inside'); // 正常工作并且打印 'foo is called inside'
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/if...else", "if...else")}}
- {{jsxref("Statements/let", "let")}}
