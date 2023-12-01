---
title: 除法（/）
slug: Web/JavaScript/Reference/Operators/Division
---

{{jsSidebar("Operators")}}

**除法**（**`/`**）运算符计算两个操作数的商，其中左操作数是被除数，右操作数是除数。

{{EmbedInteractiveExample("pages/js/expressions-division.html")}}

## 语法

```js-nolint
x / y
```

## 示例

### 基本除法

```js
1 / 2; // 0.5

Math.floor(3 / 2); // 1

1.0 / 2.0; // 0.5
```

### 除以零

```js
2.0 / 0; // Infinity

2.0 / 0.0; // Infinity, because 0.0 === 0

2.0 / -0.0; // -Infinity
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [加法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Addition)
- [减法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Subtraction)
- [乘法运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Multiplication)
- [取余运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Remainder)
- [幂运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Exponentiation)
- [自增运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Increment)
- [自减运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Decrement)
- [一元减运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_negation)
- [一元加运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Unary_plus)
