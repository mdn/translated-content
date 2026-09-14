---
title: 按位与赋值（&=）
slug: Web/JavaScript/Reference/Operators/Bitwise_AND_assignment
---

按位与赋值运算符（`&=`）使用两个操作数的二进制表示，对它们进行按位与运算并将结果赋值给变量。

{{InteractiveExample("JavaScript Demo: Expressions - Bitwise AND assignment", "shorter")}}

```js interactive-example
let a = 5; // 00000000000000000000000000000101
a &= 3; // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000001
// Expected output: 1
```

## 语法

```js-nolint
x &= y // x = x & y
```

## 示例

### 使用按位与赋值

```js
let a = 5;
// 5:     00000000000000000000000000000101
// 2:     00000000000000000000000000000010
a &= 2; // 0
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [JS 指南中的赋值运算符](/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators#赋值运算符)
- [按位与运算符](/zh-CN/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
