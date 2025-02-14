---
title: 减法（-）
slug: Web/JavaScript/Reference/Operators/Subtraction
---

{{jsSidebar("Operators")}}

**减法**（**`-`**）运算符将两个操作数相减，并产生两者之差。

{{InteractiveExample("JavaScript Demo: Expressions - Subtraction operator")}}

```js interactive-example
console.log(5 - 3);
// Expected output: 2

console.log(3.5 - 5);
// Expected output: -1.5

console.log(5 - "hello");
// Expected output: NaN

console.log(5 - true);
// Expected output: 4
```

## 语法

```js-nolint
x - y
```

## 描述

减法运算符[将两个操作数转换为数值](/zh-CN/docs/Web/JavaScript/Data_structures#强制数字类型转换)，并根据两个操作数的类型执行数字减法或 [BigInt](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 减法。如果类型不匹配，则抛出 {{jsxref("TypeError")}}。

## 示例

### 数值减法

```js
// Number - Number -> subtraction
5 - 3; // 2

// Number - Number -> subtraction
3 - 5; // -2
```

### 非数值减法

```js
// String - Number -> subtraction
"foo" - 3; // NaN; "foo" is converted to the number NaN

// Number - String -> subtraction
5 - "3"; // 2; "3" is converted to the number 3
```

### BigInt 减法

```js
// BigInt - BigInt -> subtraction
2n - 1n; // 1n
```

你不能在减法中混合使用 BigInt 和数字操作数。

```js example-bad
2n - 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 - 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [加法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition)
- [除法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Division)
- [乘法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [取余运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Remainder)
- [幂运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [自增运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Increment)
- [自减运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Decrement)
- [一元减运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [一元加运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_plus)
