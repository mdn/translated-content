---
title: 一元减（-）
slug: Web/JavaScript/Reference/Operators/Unary_negation
---

**一元减**（**`-`**）运算符在其操作数之前，并对其取反。

{{InteractiveExample("JavaScript Demo: Expressions - Unary negation operator")}}

```js interactive-example
const x = 4;
const y = -x;

console.log(y);
// Expected output: -4

const a = "4";
const b = -a;

console.log(b);
// Expected output: -4
```

## 语法

```js-nolint
-x
```

## 示例

### 数字取反

```js
const x = 3;
const y = -x;

// y = -3
// x = 3
```

### 非数字取反

一元减运算符可以[将非数字转换为数字](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number#number_强制转换)。

```js
const x = "4";
const y = -x;

// y = -4
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [加法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition)
- [减法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [除法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Division)
- [乘法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [取余运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Remainder)
- [求幂运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [自增运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Increment)
- [自减运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Decrement)
- [一元加运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_plus)
