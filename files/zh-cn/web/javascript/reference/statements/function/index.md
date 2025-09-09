---
title: function
slug: Web/JavaScript/Reference/Statements/function
l10n:
  sourceCommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

**`function`** 声明创建一个{{Glossary("binding", "绑定")}}到给定名称的新函数。

你也可以使用 [`function` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)来定义函数。

{{InteractiveExample("JavaScript Demo: Statement - Function", "shorter")}}

```js interactive-example
function calcRectArea(width, height) {
  return width * height;
}

console.log(calcRectArea(5, 6));
// Expected output: 30
```

## 语法

```js-nolint
function name(param0) {
  statements
}
function name(param0, param1) {
  statements
}
function name(param0, param1, /* …, */ paramN) {
  statements
}
```

### 参数

- `name`
  - : 函数名称。
- `param` {{optional_inline}}
  - : 函数的形参名称。不同引擎中的最大参数数量有所不同。有关参数的语法，请参阅[函数参考](/zh-CN/docs/Web/JavaScript/Guide/Functions#函数参数)。
- `statements` {{optional_inline}}
  - : 构成函数体的语句。

## 描述

`function` 声明创建一个 {{jsxref("Function")}} 对象。每次调用函数时，都会返回最后执行 {{jsxref("Statements/return", "return")}} 语句所指定的值，如果执行直到函数体的结尾，则返回 `undefined`。请参见[函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)以获取有关函数的详细信息。

`function` 声明行为上就像 {{jsxref("Statements/var", "var")}} 和 {{jsxref("Statements/let", "let")}} 的混合：

- 与 `let` 类似，在严格模式下，[函数声明的作用域为最接近的块](#块级作用域的函数声明)。
- 与 `let` 类似，模块顶层或严格模式下的块内的函数声明不能被任何其他声明[重新声明](#重新声明)。
- 与 `var` 类似，脚本顶层（无论是否处于严格模式）的函数声明会成为 {{jsxref("globalThis")}} 的属性。脚本顶层或函数体（无论是否处于严格模式）中的函数声明可以被另一个 `function` 或 `var` 重新声明。
- 与两者类似，函数声明可以被重新赋值，但是应该避免这样做。
- 与两者不同，函数声明与其值一起[提升](#函数声明提升)，并且可以在其作用域内的任何位置调用。

### 块级作用域的函数声明

> [!WARNING]
> 在[非严格模式下](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)，块级作用域的函数声明行为会变得很奇怪。只有在严格模式下才应该在块级作用域中声明函数。

函数可以被条件性地声明——也就是说，函数声明可以嵌套在一个 [`if`](/zh-CN/docs/Web/JavaScript/Reference/Statements/if...else) 语句中。然而，在非严格模式下，不同的实现结果可能不一致。

```js
console.log(
  `“foo”名称${
    "foo" in globalThis ? "是" : "不是"
  }全局的。typeof foo 等于 ${typeof foo}`,
);
if (false) {
  function foo() {
    return 1;
  }
}

// 在 Chrome 中：
// “foo”名称是全局的。typeof foo 等于 undefined
//
// 在 Firefox 中：
// “foo”名称是全局的。typeof foo 等于 undefined
//
// 在 Safari 中：
// “foo”名称是全局的。typeof foo 等于 function
```

无论 `if` 语句是否实际执行，作用域和提升效果都不会改变。

```js
console.log(
  `“foo”名称${
    "foo" in globalThis ? "是" : "不是"
  }全局的。typeof foo 等于 ${typeof foo}`,
);
if (true) {
  function foo() {
    return 1;
  }
}

// 在 Chrome 中：
// “foo”名称是全局的。typeof foo 等于 undefined
//
// 在 Firefox 中：
// “foo”名称是全局的。typeof foo 等于 undefined
//
// 在 Safari 中：
// “foo”名称是全局的。typeof foo 等于 function
```

在[严格模式](/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)下，[块](/zh-CN/docs/Web/JavaScript/Reference/Statements/block)级作用域的函数声明的作用域为该块，并且会提升到该块的顶部。

```js
"use strict";

{
  foo(); // 打印 "foo"
  function foo() {
    console.log("foo");
  }
}

console.log(
  `“foo”名称${
    "foo" in globalThis ? "是" : "不是"
  }全局的。typeof foo 等于 ${typeof foo}`,
);
// “foo”名称不是全局的。typeof foo 等于 undefined
```

### 函数声明提升

JavaScript 中的函数声明会被[提升](/zh-CN/docs/Glossary/Hoisting)到其所在作用域的最前面。你可以在声明之前使用函数：

```js
hoisted(); // 打印 "foo"

function hoisted() {
  console.log("foo");
}
```

请注意，[函数表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)不会被提升：

```js
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
```

### 重新声明

`function` 声明是否可以重新声明，取决于它所在的作用域。

在脚本顶层，`function` 声明的行为类似于 `var`，可以被另一个 `function` 或 `var` 重新声明，但不能被 {{jsxref("Statements/let", "let")}}、{{jsxref("Statements/const", "const")}} 或 {{jsxref("Statements/class", "class")}} 重新声明。

```js-nolint example-bad
function a(b) {}
function a(b, c) {}
console.log(a.length); // 2
let a = 2; // SyntaxError: Identifier 'a' has already been declared
```

当 `function` 声明被 `var` 重新声明时，无论它们的相对位置如何，`var` 声明的初始化器总是会覆盖函数的值。这是因为函数声明会在任何初始化器被执行之前被提升，所以初始化器随后的执行会覆盖函数的值。

```js
var a = 1;
function a() {}
console.log(a); // 1
```

在函数体的顶层，`function` 的行为也类似于 `var`，可以被重新声明或与参数具有相同的名称。

```js
function foo(a) {
  function a() {}
  console.log(typeof a);
}

foo(2); // 打印 "function"
```

在模块顶层或严格模式下的块级作用域中，`function` 声明的行为类似于 `let`，不能被任何其他声明重新声明。

```js-nolint example-bad
// 假定当前源码在模块中
function foo() {}
function foo() {} // SyntaxError: Identifier 'foo' has already been declared
```

```js-nolint example-bad
"use strict";
{
  function foo() {}
  function foo() {} // SyntaxError: Identifier 'foo' has already been declared
}
```

在 `catch` 块内部，即使是在非严格模式下 `function` 声明不能与 `catch` 绑定的标识符具有相同的名称。

```js-nolint example-bad
try {
} catch (e) {
  function e() {} // SyntaxError: Identifier 'e' has already been declared
}
```

## 示例

### 使用函数

以下代码声明了一个函数，当给定三种产品的销售单位数量时，该函数返回销售总额。

```js
function calcSales(unitsA, unitsB, unitsC) {
  return unitsA * 79 + unitsB * 129 + unitsC * 699;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [函数](/zh-CN/docs/Web/JavaScript/Guide/Functions)指南
- [函数](/zh-CN/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("Function")}}
- [`function` 表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Statements/async_function*", "async function*")}}
