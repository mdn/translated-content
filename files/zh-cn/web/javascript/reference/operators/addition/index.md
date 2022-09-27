---
title: 相加运算符 (+)
slug: Web/JavaScript/Reference/Operators/Addition
original_slug: Web/JavaScript/Reference/Operators/相加
---

{{jsSidebar("相加运算符")}}

相加运算符 (`+`) 用于对两个操作数进行相加运算，如果操作数中有一方为字符串，则该运算符将两个操作数连接成一个字符串。

{{EmbedInteractiveExample("pages/js/expressions-addition.html")}}

## 语法

```js
x + y
```

## 描述

相加运算符 (`+`) 为两种不同的操作重载：数字加法和字符串连接。在求值时，首先，通过按顺序调用对象的 {{jsxref("Symbol.prototype[@@toPrimitive]")}}（以 `"default"` 为 `hint`）、`valueOf` 和 `toString` 方法，将两个操作数强制转换为原始值。然后，检查两个操作数的类型：

- 如果一方是字符串，另一方会被转为字符串，执行字符串连接。
- 如果双方都是 `BigInt`，则执行 `BigInt` 加法。如果一方是 `BigInt` 而另一方不是，会抛出 `TypeError`
- 否则，双方都会被转为数字，执行数字加法。

字符串连接经常被认为等价于模板字符串或者 `String.prototype.concat`，但并非如此。加法会强制将表达式转为 _原始值_，它优先调用 `valueOf()`；另一方面，模板字符串和 `concat()` 则强制将表达式转为字符串，它们优先调用 `toString()`。如果表达式有 `@@toPrimitive` 方法，在字符串连接时会调用它，并用 `"default"` 作为 `hint`，然而模板字符串则用 `"string"` 作为 `hint`。

这对于具有不同的字符串和原始值行为的对象来说很重要——例如 [Temporal](https://github.com/tc39/proposal-temporal)，它的 `valueOf()` 方法会抛出（throw）错误。

```js
const t = Temporal.Now.instant();
"" + t; // Throws TypeError
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

不建议使用 `"" + x` 来执行字符串转换。

## 示例

### 数字的相加运算

```js
// Number + Number -> addition
1 + 2 // 3

// Boolean + Number -> addition
true + 1 // 2

// Boolean + Boolean -> addition
false + false // 0
```

### 字符串相加运算

```js
// String + String -> concatenation
'foo' + 'bar' // "foobar"

// Number + String -> concatenation
5 + 'foo' // "5foo"

// String + Boolean -> concatenation
'foo' + false // "foofalse"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [Subtraction operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [Division operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Division)
- [Multiplication operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [Remainder operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Exponentiation operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [Increment operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Increment)
- [Decrement operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Decrement)
- [Unary negation operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [Unary plus operator](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_plus)
