---
title: void 运算符
slug: Web/JavaScript/Reference/Operators/void
---

{{jsSidebar("Operators")}}

**`void` 运算符**对给定的表达式进行求值，然后返回 {{jsxref("undefined")}}。

{{EmbedInteractiveExample("pages/js/expressions-voidoperator.html", "taller")}}

## 语法

```js-nolint
void expression
```

## 描述

这个运算符允许在表达式执行完成时，产生（某些地方）期望获得的 {{jsxref("undefined")}} 值。

`void` 运算符通常只用于获取 `undefined` 的原始值，一般使用 `void(0)`（等同于 `void 0`）。在上述情况中，也可以使用全局变量 {{jsxref("undefined")}} 来代替。

需要注意考虑 `void` 运算符的[优先级](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence)，以下加括号的表达式的例子可以帮助你清楚地理解 `void` 操作符的优先级：

```js
void 2 === "2"; // (void 2) === '2'，返回 false
void (2 === "2"); // void (2 === '2')，返回 undefined
```

## 示例

### 立即调用的函数表达式

在使用[立即调用的函数表达式](/zh-CN/docs/Glossary/IIFE)时，`function` 关键字不可直接位于语句开头，因为该表达式会被解析为[函数声明](/zh-CN/docs/Web/JavaScript/Reference/Statements/function)，并会在解析到代表调用的括号时产生语法错误。如果是匿名函数，那么如果函数被解析为声明，就会立即产生语法错误。

```js example-bad
function iife() {
  console.log("Executed!");
}(); // SyntaxError: Unexpected token ')'

function () {
  console.log("Executed!");
}(); // SyntaxError: Function statements require a function name
```

为了使函数被解析为[表达式](/zh-CN/docs/Web/JavaScript/Reference/Operators/function)，`function` 关键字必须出现在一个只接受表达式而不是语句的位置。这可以通过在关键字前加一个[一元运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#一元运算符)来实现，它只接受表达式作为操作数。函数调用的[优先级](/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_precedence)比一元运算符高，所以它将被首先执行。它的返回值（几乎总是 `undefined`）将被传递给一元运算符，然后立即被丢弃。

在所有的一元运算符中，`void` 提供了最好的语义，因为它明确表示函数调用的返回值应该被丢弃。

```js
void (function () {
  console.log("Executed!");
})();

// Output: "Executed!"
```

这比用圆括号包裹函数表达式要长一些，圆括号的作用是强迫 `function` 关键字被解析为表达式的开始，而不是语句。

```js
(function () {
  console.log("Executed!");
})();
```

### JavaScript URI

当用户点击一个以 `javascript:` 开头的 URI 时，它会执行 URI 中的代码，然后用返回的值替换页面内容，除非返回的值是 {{jsxref("undefined")}}。`void` 运算符可用于返回 `undefined`。例如：

```html
<a href="javascript:void(0);"> 这个链接点击之后不会做任何事情 </a>

<a href="javascript:void(document.body.style.backgroundColor='green');">
  点击这个链接会让页面背景变成绿色。
</a>
```

> **备注：** 利用 `javascript:` 伪协议来执行 JavaScript 代码是不推荐的，推荐的做法是为链接元素绑定事件。

### 在箭头函数中避免泄漏

箭头函数标准中，允许在函数体不使用括号来直接返回值。如果右侧调用了一个原本没有返回值的函数，其返回值改变后，则会导致非预期的副作用。安全起见，当函数返回值不会被使用到的时候，应该使用 `void` 运算符，来确保 API 改变时，并不会改变箭头函数的行为。

```js
button.onclick = () => void doSomething();
```

这确保了当 `doSomething` 的返回值从 `undefined` 变为 `true` 的时候，不会改变代码的行为。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{jsxref("undefined")}}
