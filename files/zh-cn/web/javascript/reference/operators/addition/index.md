---
title: 加法（+）
slug: Web/JavaScript/Reference/Operators/Addition
---

{{jsSidebar("Operators")}}

**加法**（**`+`**）运算符计算数字操作数或字符串连接的总和。

{{EmbedInteractiveExample("pages/js/expressions-addition.html")}}

## 语法

```js-nolint
x + y
```

## 描述

加法运算符（`+`）为两种不同的运算重载：数字加法和字符串连接。在求值时，它首先[将两个操作数强制转换为基本类型](/zh-CN/docs/Web/JavaScript/Data_structures#强制原始值转换)。然后，检查两个操作数的类型：

- 如果有一方是字符串，另一方则会被[转换为字符串](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)，并且它们连接起来。
- 如果双方都是 [BigInt](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt)，则执行 BigInt 加法。如果一方是 BigInt 而另一方不是，会抛出 {{jsxref("TypeError")}}。
- 否则，双方都会被[转换为数字](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)，执行数字加法。

字符串连接经常被认为等价于[模板字符串](/zh-CN/docs/Web/JavaScript/Reference/Template_literals)或者 [`String.prototype.concat()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/concat)，但并非如此。加法强制将表达式转为*基本类型*，它优先调用 [`valueOf()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)；另一方面，模板字符串和 `concat()` 则强制将表达式转为*字符串*，它们优先调用 [`toString()`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)。如果表达式有 [`@@toPrimitive`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) 方法，字符串连接时会用 `"default"` 作为 `hint` 调用它，然而模板字符串则用 `"string"`。这对于具有不同的字符串和原始值表现的对象来说很重要——例如 [Temporal](https://github.com/tc39/proposal-temporal)，它的 `valueOf()` 方法会抛出错误。

```js
const t = Temporal.Now.instant();
"" + t; // 抛出 TypeError
`${t}`; // '2022-07-31T04:48:56.113918308Z'
"".concat(t); // '2022-07-31T04:48:56.113918308Z'
```

建议不要使用 `"" + x` 来执行[字符串强制转换](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String#字符串强制转换)。

## 示例

### 数字加法

```js
// Number + Number -> addition
1 + 2; // 3

// Boolean + Number -> addition
true + 1; // 2

// Boolean + Boolean -> addition
false + false; // 0
```

### 字符串连接

```js
// String + String -> concatenation
"foo" + "bar"; // "foobar"

// Number + String -> concatenation
5 + "foo"; // "5foo"

// String + Boolean -> concatenation
"foo" + false; // "foofalse"

// String + Number -> concatenation
"2" + 2; // "22"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [减法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [除法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Division)
- [乘法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [取余运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Remainder)
- [求幂运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [自增运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Increment)
- [自减运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Decrement)
- [一元减运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [一元加运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_plus)
